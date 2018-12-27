import { observable, action, runInAction } from 'mobx';
import { login, logout } from '@/services/common';
import { opStorage } from '@/utils/db';
import { message } from 'antd';
import createHistory from 'history/createHashHistory';
import socketioStore from './socketioStore';

// 提示框
message.config({ top: 100, delay: 2, maxCount: 1 });
const history = createHistory();

const db = opStorage('mobx-chat');
const { userInfo, authorization } = db;
class CommonStore {
    @observable username = userInfo && userInfo.username; // 当前登录用户
    @observable level = userInfo && userInfo.level; // 当前登陆用户等级
    @observable levelLogo = userInfo && userInfo.levelLogo; // 当前登陆用户等级图标
    @observable userAvatar = userInfo && userInfo.userAvatar; // 当前登陆用户的头像
    @observable authorization = authorization; // token
    @observable activeTab = 0; // 当前选中功能Tab
    @observable isTabs = 1; // 当前是在选择列表页还是在内容页, 默认为列表页1， 0为内容页
    @observable activeChat = null; // 当前选中的聊天室
    @observable msg = ''; // 聊天框消息
    @observable waringInfo = '请选择聊天室'; // 未进入聊天室提示信息
    @observable isClearMsgList = false; // 是否清空聊天室信息

    // 保存token
    @action saveToken(authorization) {
        this.authorization = authorization;
    }

    // 保存当前登录用户
    @action saveUsername(username) {
        this.username = username;
    }

    // 切换选项卡
    @action changeTabs = (activeTab) => {
        this.activeTab = activeTab;
    }

    // 切换列表页和功能页
    @action changeIsTabs = (isTabs) => {
        this.isTabs = isTabs;
    }

    // 用户登陆
    @action.bound
    async login(params) {
        const res = await login(params);
        runInAction(() => {
            if (!res) {
                return message.error('登录失败，请重新登录');
            };
            // 初始化用户信息
            const { username, level, levelLogo, userAvatar } = res.data;
            this.username = username;
            this.level = level;
            this.levelLogo = levelLogo;
            this.userAvatar = userAvatar;
            // 登陆时保存用户信息
            opStorage('mobx-chat', {
                key: 'userInfo',
                value: res.data
            });
            // 跳转主页
            history.replace('/home');
        });
    }

    // 退出登陆
    @action.bound
    async logout(callback) {
        const res = await logout();
        runInAction(() => {
            if (!res) return;
            if (callback) callback();
            this.username = null;
            // 退出时清空用户信息
            opStorage('mobx-chat', 'null');
        });
    }

    // 清除数据
    @action clearAll() {
        this.username = null;
        this.level = null;
        this.levelLogo = null;
        this.userAvatar = null;
        this.authorization = null;
        opStorage('mobx-chat', 'null');
    }

    // 切换聊天室
    @action changeChat = (index, callback) => {
        const userLevel = Number.parseInt(this.level);
        // 当前登陆用户不能进入高于用户等级的聊天室， 用户等级：userLevel， 聊天室等级：index + 1
        if (userLevel < index + 1) {
            this.activeChat = null;
            this.waringInfo = '对不起，你的等级未达到，不允许进入该聊天室！';
            message.error(this.waringInfo);
            return;
        }
        this.activeChat = index;
        // 关闭上一次聊天
        const username = this.username;
        if (socketioStore.socket.connected && username) {
            socketioStore.socketLogout(username);
        }
        // 清空聊天记录, 最后加入的用户, 上一个聊天室的数据
        socketioStore.clearChatMsg();
        socketioStore.clearUser();
        this.clearMsgList(true);
        // 进入聊天室
        socketioStore.socketInit(username);
        // 监听其他用户登陆
        socketioStore.socketLogin();
        // 监听聊天消息
        socketioStore.socketWatch();
        if (callback) callback();
    }

    // 清空上一个聊天室的数据
    @action clearMsgList = bool => {
        this.isClearMsgList = !!bool;
    }

}

const commonStore = new CommonStore();
export default commonStore;