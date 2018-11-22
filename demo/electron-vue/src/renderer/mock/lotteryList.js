function getLotteryList(options, getPostData) {
    const lotteryList = [{ // 彩种列表
        "type": "cqssc",
        "name": "重庆时时彩"
    }, {
        "type": "tjssc",
        "name": "天津时时彩"
    }, {
        "type": "bj11x5",
        "name": "北京11选5"
    }, {
        "type": "gd11x5",
        "name": "广东11选5"
    }, {
        "type": "bjkl8",
        "name": "北京快乐8"
    }];
    return {
        "msg": "彩种列表",
        "status": 0,
        "data": lotteryList
    }
}

export default getLotteryList