import { observable, action, runInAction } from 'mobx';
import { login, logout } from '@/services/common';
import { opStorage } from '@/utils/db';
import { message } from 'antd';
import createHistory from 'history/createHashHistory';

// 提示框
message.config({ top: 100, delay: 3, maxCount: 1 });
const history = createHistory();

const db = opStorage('mobx-chat');
const { userInfo, authorization } = db;
class CommonStore {
    @observable username = userInfo && userInfo.username; // 当前登录用户
    @observable level = userInfo && userInfo.level; // 当前登陆用户等级
    @observable levelLogo = userInfo && userInfo.levelLogo; // 当前登陆用户等级图标
    @observable userAvatar = userInfo && userInfo.userAvatar; // 当前登陆用户的头像
    @observable authorization = authorization; // token

    // 保存token
    @action saveToken(authorization) {
        this.authorization = authorization;
    }

    // 保存当前登录用户
    @action saveUsername(username) {
        this.username = username;
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

}

const commonStore = new CommonStore();
export default commonStore;