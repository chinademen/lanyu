function login(options, getPostData) {
    const params = getPostData(options.body);
    return {
        "msg": "登录成功",
        "status": 0,
        "data": {
            "username": params.username,
            "balance": "99999.999",
        }
    }
}

export default login