function getBalance(options, getPostData) {
    // const params = getPostData(options.body);
    return {
        "msg": "刷新余额",
        "status": 0,
        "data": {
            "balance": 888888.88
        }
    }
}

export default getBalance