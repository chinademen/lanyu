function line() {
    let lineWay = `线路${Math.ceil(Math.random() * 10)}`;
    let rates = `${Math.ceil(Math.random() * 1000)}ms`;
    return {
        msg: "退出成功",
        status: 0,
        data: {
            lineWay,
            rates
        }
    }
}

export default line