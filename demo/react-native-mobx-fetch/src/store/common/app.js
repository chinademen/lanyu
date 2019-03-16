import {observable, action} from 'mobx'

class App {
    @observable barStyle = 'light-content'  // 系统工具栏 主题样式
    @observable appSkin = skin || 'red'        // 皮肤
    @observable submiting = false           // 按钮是否正在提交操作
    @observable token = null                // token

    // 选则样式
    @action
    updateBarStyle = style => {
        this.barStyle = style
    }

    // 更换皮肤
    @action
    changeSkin = appSkin => {
        this.appSkin = appSkin
    }

    // 更新按钮操作状态
    @action
    changeSubmit = state => {
        this.submiting = state
    }

    // 保存token
    @action
    setToken = token => {
        this.token = token
    }
}

export default new App()