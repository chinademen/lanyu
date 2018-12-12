import { observable, action, runInAction } from 'mobx';

class WebsocketStore {
    @observable ws = {}; // websocket对象

    // 初始化ws
    @action wsInit() {
        this.ws = new WebSocket('ws://localhost:80/');
    }

    // 打开ws连接
    @action wsOpen() {
        this.ws.onopen = (data) => {
            console.log('开启ws: ', data);
        }
    }

    // 发送消息
    @action wsSend() {
        this.ws.onmessage = (data) => {
            console.log('发送消息: ', data);
        }
    }

    // 关闭ws
    @action wsClose() {
        this.ws.onclose = (data) => {
            console.log('关闭ws: ', data);
        }
    }

}

const WebsocketStore = new WebsocketStore();
export default WebsocketStore;