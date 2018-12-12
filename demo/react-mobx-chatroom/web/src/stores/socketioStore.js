import { observable, action, runInAction } from 'mobx';
import io from 'socket.io-client';
import commonStore from './commonStore';

class SocketioStore {
    @observable socket = {}; // websocket对象

    // 连接后台socket
    @action socketInit(username) {
        // 初始化socket
        this.socket = new io('http://localhost:80/', {
            reconnection : true,
            reconnectionDelay : 5000
        });
        // 告诉后台有用户登录
        this.socket.emit('login', { username });
    }

    // 监听消息
    @action socketWatch() {
        this.socket.emit('chat message', msg => {
            console.log('socketio: ', msg);
        });
    }

    // 发送事件
    @action socketSend(value) {
        const { username } = commonStore;
        const obj = {
            username: username,
            content: value
        }
        console.log('发送事件: ', obj);
        this.socket.emit('chat message', obj);
    }

    // 监听用户退出
    @action socketLogout(username) {
        this.socket.emit('disconnect', { username });
    }

}

const socketioStore = new SocketioStore();
export default socketioStore;