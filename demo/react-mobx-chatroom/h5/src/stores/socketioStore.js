import { observable, action, runInAction } from 'mobx';
import io from 'socket.io-client';
import baseURL from '@/config/domain';
import commonStore from './commonStore';
import { opStorage } from '@/utils/db';

const db = opStorage('mobx-chat');
const { authorization } = db;

// socket.io   on('msg')监听msg事件  emit('msg)发送msg事件
class SocketioStore {
    @observable socket = {}; // websocket对象
    @observable onlineCount = 0; // 当前在线人数
    @observable onlineUsers = null; // 当前在线的所有人名
    @observable user = null; // 最后加入的新用户
    @observable chatMsg = null; // 聊天实时消息对象(包括发送者，消息实体)
    @observable authorization = commonStore.authorization || authorization;

    // 连接后台socket
    @action socketInit(username) {
        // 初始化socket
        this.socket = new io(baseURL, {
            reconnection : true,
            // reconnectionDelay : 5000
        });
        // 告诉后台有用户登录
        this.socket.emit('login', { username, authorization });
    }

    // 监听用户登陆消息
    @action socketLogin() {
        this.socket.on('login', msg => {
            // onlineCount: 当前在线人数;  onlineUsers: 当前在线的所有人名;  user: 最后加入的新用户;
            const { onlineCount, onlineUsers, user } = msg;
            this.onlineCount = onlineCount;
            this.onlineUsers = onlineUsers;
            this.user = user;
        });
    }

    // 监听聊天消息
    @action socketWatch() {
        this.socket.on('chat message', msg => {
            this.chatMsg = msg;
        });
    }

    // 发送事件
    @action socketSend(value) {
        const { username, userAvatar, level, levelLogo } = commonStore;
        const obj = {
            username,
            content: value,
            userAvatar,
            level,
            levelLogo,
            authorization
        }
        // console.log('发送事件: ', obj);
        this.socket.emit('chat message', obj);
    }

    // 监听用户退出
    @action socketLogout(username) {
        // 告诉给后台用户退出
        this.socket.emit('disconnected', { username });
        // 手动关闭socket连接
        this.socket.close();
    }

    // 清除最后加入的用户
    @action clearUser() {
        this.user = null;
    }

    // 清空聊天记录
    @action clearChatMsg() {
        this.chatMsg = null;
    }

}

const socketioStore = new SocketioStore();
export default socketioStore;