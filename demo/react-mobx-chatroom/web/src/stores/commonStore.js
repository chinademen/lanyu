import { observable, action, runInAction } from 'mobx';
import { login, logout } from '@/services/common';
import { opStorage } from '@/utils/db';

const db = opStorage('mobx-chat');
const { userInfo } = db;
class CommonStore {
    @observable username = userInfo && userInfo.username; // 当前登录用户
    @observable level = userInfo && userInfo.level; // 当前登陆用户等级
    @observable levelLogo = userInfo && userInfo.levelLogo; // 当前登陆用户等级图标

    // 用户登陆
    @action.bound
    async login(params) {
        const res = await login(params);
        runInAction(() => {
            if (!res) return;
            // 初始化用户信息
            const { username, level, levelLogo } = res.data;
            this.username = username;
            this.level = level;
            this.levelLogo = levelLogo;
            // 登陆时保存用户信息
            opStorage('mobx-chat', {
                key: 'userInfo',
                value: res.data
            });
        });
    }

    // 退出登陆
    @action.bound
    async logout(callback) {
        const res = await logout({ username: this.username });
        runInAction(() => {
            if (!res) return;
            if (callback) callback();
            this.username = null;
            // 退出时清空用户信息
            opStorage('mobx-chat', {
                key: 'userInfo',
                remove: true
            });
        });
    }

    // 保存当前登录用户
    @action saveUsername(username) {
        this.username = username;
    }

}

const commonStore = new CommonStore();
export default commonStore;