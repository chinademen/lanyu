const Mock = require('mockjs')

Mock.mock(RegExp('/lotteryList' + '.*'), 'get', {
    code: 0,
    message: '请求成功',
    data: {}
})


Mock.mock(RegExp('/lotteryData' + ".*"), 'get', {
    code: 0,
    message: '请求成功',
    data: {
        name: '重庆时时彩',
        id: 1,
        code: 'CQSSC',
        lotteryType: 'SSC',
        defaultGroupCode: 'wuxing',
        defaultMethodCode: 'wuxing_zuxuan120',
        methodList: [{
            name: '五星',
            id: 101,
            code: 'wuxing',
            child: [{
                name: '五星直选',
                child: [{
                    name: '五星直选复式',
                    id: 1011,
                    code: 'wuxing_zhixuanfushi',
                    description: '1111',
                    example: ''
                },{
                    name: '五星直选单式',
                    id: 1012,
                    code: 'wuxing_zhixuandanshi',
                    description: '1111',
                    example: ''
                },{
                    name: '五星直选组合',
                    id: 1013,
                    code: 'wuxing_zhixuanzuhe',
                    description: '1111',
                    example: ''
                }]
            },{
                name: '五星组选',
                child: [{
                    name: '组选120',
                    code: 'wuxing_zuxuan120'
                },{
                    name: '组选60',
                    code: 'wuxing_zuxuan60'
                },{
                    name: '组选30',
                    code: 'wuxing_zuxuan30'
                },{
                    name: '组选20',
                    code: 'wuxing_zuxuan20'
                },{
                    name: '组选10',
                    code: 'wuxing_zuxuan10'
                },{
                    name: '组选5',
                    code: 'wuxing_zuxuan5'
                }]
            }]
        },{
            name: '四星',
            id: 102,
            code: 'sixing',
            child: [{
                name: '前四直选',
                child: [{
                    name: '直选复式',
                    code: 'qiansi_zhixuanfushi'
                },{
                    name: '直选单式',
                    code: 'qiansi_zhixuandanshi'
                },{
                    name: '直选组合',
                    code: 'qiansi_zhixuanzuhe'
                }]
            },{
                name: '前四组选',
                child: [{
                    name: '组选24',
                    code: 'qiansi_zuxuan24'
                },{
                    name: '组选12',
                    code: 'qiansi_zuxuan12'
                },{
                    name: '组选6',
                    code: 'qiansi_zuxuan6'
                },{
                    name: '组选4',
                    code: 'qiansi_zuxuan4'
                }]
            },{
                name: '后四直选',
                child: [{
                    name: '直选复式',
                    code: 'housi_zhixuanfushi'
                },{
                    name: '直选单式',
                    code: 'housi_zhixuandanshi'
                },{
                    name: '直选组合',
                    code: 'housi_zhixuanzuhe'
                }]
            },{
                name: '后四组选',
                child: [{
                    name: '组选24',
                    code: 'housi_zuxuan24'
                },{
                    name: '组选12',
                    code: 'housi_zuxuan12'
                },{
                    name: '组选6',
                    code: 'housi_zuxuan6'
                },{
                    name: '组选4',
                    code: 'housi_zuxuan4'
                }]
            }]
        },{
            name: '前三',
            code: 'qiansan',
            child: [{
                name: '前三直选',
                child: [{
                    name: '直选复式',
                    code: 'qiansan_zhixuanfushi'
                },{
                    name: '直选单式',
                    code: 'qiansan_zhixuandanshi'
                },{
                    name: '直选组合',
                    code: 'qiansan_zhixuanzuhe'
                },{
                    name: '直选和值',
                    code: 'qiansan_zhixuanhezhi'
                },{
                    name: '直选跨度',
                    code: 'qiansan_zhixuankuadu'
                }]
            },{
                name: '前三组选',
                child: [{
                    name: '组三',
                    code: 'qiansan_zuxuan3'
                },{
                    name: '组六',
                    code: 'qiansan_zuxuan6'
                },{
                    name: '混合组选',
                    code: 'qiansan_hunhezuxuandanshi'
                },{
                    name: '组选和值',
                    code: 'qiansan_zuxuanhezhi'
                },{
                    name: '组三单式',
                    code: 'qiansan_zusandanshi'
                },{
                    name: '组六单式',
                    code: 'qiansan_zuliudanshi'
                },{
                    name: '包胆',
                    code: 'qiansan_zuxuanbaodan'
                }]
            },{
                name: '前三其他',
                child: [{
                    name: '和值尾数',
                    code: 'qiansan_hezhiweishu'
                }]
            }]
        },{
            name: '中三',
            code: 'zhongsan',
            child: [{
                name: '中三直选',
                child: [{
                    name: '直选复式',
                    code: 'zhongsan_zhixuanfushi'
                },{
                    name: '直选单式',
                    code: 'zhongsan_zhixuandanshi'
                },{
                    name: '直选组合',
                    code: 'zhongsan_zhixuanzuhe'
                },{
                    name: '直选和值',
                    code: 'zhongsan_zhixuanhezhi'
                },{
                    name: '直选跨度',
                    code: 'zhongsan_zhixuankuadu'
                }]
            },{
                name: '中三组选',
                child: [{
                    name: '组三',
                    code: 'zhongsan_zuxuan3'
                },{
                    name: '组六',
                    code: 'zhongsan_zuxuan6'
                },{
                    name: '混合组选',
                    code: 'zhongsan_hunhezuxuandanshi'
                },{
                    name: '组选和值',
                    code: 'zhongsan_zuxuanhezhi'
                },{
                    name: '组三单式',
                    code: 'zhongsan_zusandanshi'
                },{
                    name: '组六单式',
                    code: 'zhongsan_zuliudanshi'
                },{
                    name: '包胆',
                    code: 'zhongsan_zuxuanbaodan'
                }]
            },{
                name: '中三其他',
                child: [{
                    name: '和值尾数',
                    code: 'zhongsan_hezhiweishu'
                }]
            }]
        },{
            name: '后三',
            code: 'housan',
            child: [{
                name: '后三直选',
                child: [{
                    name: '直选复式',
                    code: 'housan_zhixuanfushi'
                },{
                    name: '直选单式',
                    code: 'housan_zhixuandanshi'
                },{
                    name: '直选组合',
                    code: 'housan_zhixuanzuhe'
                },{
                    name: '直选和值',
                    code: 'housan_zhixuanhezhi'
                },{
                    name: '直选跨度',
                    code: 'housan_zhixuankuadu'
                }]
            },{
                name: '后三组选',
                child: [{
                    name: '组三',
                    code: 'housan_zuxuan3'
                },{
                    name: '组六',
                    code: 'housan_zuxuan6'
                },{
                    name: '混合组选',
                    code: 'housan_hunhezuxuandanshi'
                },{
                    name: '组选和值',
                    code: 'housan_zuxuanhezhi'
                },{
                    name: '组三单式',
                    code: 'housan_zusandanshi'
                },{
                    name: '组六单式',
                    code: 'housan_zuliudanshi'
                },{
                    name: '包胆',
                    code: 'housan_zuxuanbaodan'
                }]
            },{
                name: '后三其他',
                child: [{
                    name: '和值尾数',
                    code: 'housan_hezhiweishu'
                }]
            }]
        },{
            name: '一星',
            code: 'yixing',
            child: [{
                name: '一星定位胆',
                child: [{
                    name: '定位胆',
                    code: 'yixing_dingweidan'
                }]
            }]
        }]
    }
})