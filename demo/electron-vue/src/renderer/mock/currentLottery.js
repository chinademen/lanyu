
function getCurrentLottery(options, getPostData) {
    const params = getPostData(options.body);
    const lotteryObj = {
        "cqssc": [1, "重庆时时彩", "20181122-001", "5|4|5|0|3"],
        "tjssc": [2, "天津时时彩", "20181122-002", "2|5|6|9|8"],
        "bj11x5": [3, "北京11选5", "20181122-003", "5|6|3|2|8|4|5|6|9|10"],
        "gd11x5": [4, "广东11选5", "20181122-004", "7|9|6|5|4|8|2|3|6|10"],
        "bjkl8": [5, "北京快乐8", "20181122-005", "1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20"]
    };
    return {
        "msg": "当前彩种信息",
        "status": 0,
        "data": {
            "lotteryid": lotteryObj[params.type][0],
            "lotteryname": lotteryObj[params.type][1],
            "type": params.type,
            "awardperiod": lotteryObj[params.type][2],
            "lastnumber": lotteryObj[params.type][3],
        }
    }
}

export default getCurrentLottery