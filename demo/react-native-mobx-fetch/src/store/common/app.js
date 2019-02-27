import {observable, action} from 'mobx'

class App {
    @observable barStyle = 'light-content'  // 系统工具栏 主题样式
    @observable submiting = false           // 按钮是否正在提交操作

    @action
    updateBarStyle = style => {
        this.barStyle = style
    }

    @action
    changeSubmit = state => {
        this.submiting = state
    }
}

export default new App()