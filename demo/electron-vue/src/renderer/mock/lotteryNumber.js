function getLotteryNumber(options, getPostData) {
    const params = getPostData(options.body);
    const lotteryObj = {
        "cqssc": "重庆时时彩",
        "tjssc": "天津时时彩",
        "bj11x5": "北京11选5",
        "gd11x5": "广东11选5",
    };
    const numberList = {
        "cqssc": [
            { "historyNo": "20181027-001", "historyNumber": '1|1|1|1|1' },
            { "historyNo": "20181027-002", "historyNumber": '2|2|2|2|2' },
            { "historyNo": "20181027-003", "historyNumber": '3|3|3|3|3' },
            { "historyNo": "20181027-004", "historyNumber": '4|4|4|4|4' },
            { "historyNo": "20181027-005", "historyNumber": '5|5|5|5|5' },
        ],
        "tjssc": [
            { "historyNo": "20181027-006", "historyNumber": '6|6|6|6|6' },
            { "historyNo": "20181027-007", "historyNumber": '7|7|7|7|7' },
            { "historyNo": "20181027-008", "historyNumber": '8|8|8|8|8' },
            { "historyNo": "20181027-009", "historyNumber": '9|9|9|9|9' },
            { "historyNo": "20181027-010", "historyNumber": '10|10|10|10|10' },
        ],
        "bj11x5": [
            { "historyNo": "20181027-001", "historyNumber": '0|1|2|3|4|5|6|7|8|9|10|11' },
            { "historyNo": "20181027-002", "historyNumber": '0|1|2|3|4|5|6|7|8|9|10|11' },
            { "historyNo": "20181027-003", "historyNumber": '0|1|2|3|4|5|6|7|8|9|10|11' },
            { "historyNo": "20181027-004", "historyNumber": '0|1|2|3|4|5|6|7|8|9|10|11' },
            { "historyNo": "20181027-005", "historyNumber": '0|1|2|3|4|5|6|7|8|9|10|11' },
        ],
        "gd11x5": [
            { "historyNo": "20181027-006", "historyNumber": '0|1|2|3|4|5|6|7|8|9|10|11' },
            { "historyNo": "20181027-007", "historyNumber": '0|1|2|3|4|5|6|7|8|9|10|11' },
            { "historyNo": "20181027-008", "historyNumber": '0|1|2|3|4|5|6|7|8|9|10|11' },
            { "historyNo": "20181027-009", "historyNumber": '0|1|2|3|4|5|6|7|8|9|10|11' },
            { "historyNo": "20181027-010", "historyNumber": '0|1|2|3|4|5|6|7|8|9|10|11' },
        ],
        "bjkl8": [
            { "historyNo": "20181027-001", "historyNumber": '1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20' },
            { "historyNo": "20181027-002", "historyNumber": '1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20' },
            { "historyNo": "20181027-003", "historyNumber": '1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20' },
            { "historyNo": "20181027-004", "historyNumber": '1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20' },
            { "historyNo": "20181027-005", "historyNumber": '1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20' },
        ],
    }
    return {
        "msg": "当前彩种信息",
        "status": 0,
        "data": numberList[params.type]
    }
}

export default getLotteryNumber
