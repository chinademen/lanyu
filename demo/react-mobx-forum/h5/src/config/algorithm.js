export const autoSelectNumber = {
    // 五星直选
    "ssc_wuxingzhixuan_fushi": {
        "type": "digital",
        "layout": [{
            "title": "万位",
            "no": "0|1|2|3|4|5|6|7|8|9",
            "place": 0,
            "col": 1
        }, {
            "title": "千位",
            "no": "0|1|2|3|4|5|6|7|8|9",
            "place": 1,
            "col": 1
        }, {
            "title": "百位",
            "no": "0|1|2|3|4|5|6|7|8|9",
            "place": 2,
            "col": 1
        }, {
            "title": "十位",
            "no": "0|1|2|3|4|5|6|7|8|9",
            "place": 3,
            "col": 1
        }, {
            "title": "个位",
            "no": "0|1|2|3|4|5|6|7|8|9",
            "place": 4,
            "col": 1
        }],
        "name": "五星直选复式",
        "desc": "复式",
        "methodhelp": "从万位、千位、百位、十位、个位中各选择一个号码组成一注，所选号码与开奖号码全部相同，且顺序一致，即为中奖。",
    },
    "ssc_wuxingzhixuan_danshi": {
        "type": "danshi",
        "layout": [],
        "name": "五星直选单式",
        "desc": "单式",
        "methodhelp": "手动输入一个5位数号码组成一注，所选号码的万位、千位、百位、十位、个位与开奖号码相同，且顺序一致，即为中奖。",
    },
    "ssc_wuxingzhixuan_zuhe": {
        "type": "digital",
        "layout": [{
            "title": "万位",
            "no": "0|1|2|3|4|5|6|7|8|9",
            "place": 0,
            "col": 1
        }, {
            "title": "千位",
            "no": "0|1|2|3|4|5|6|7|8|9",
            "place": 1,
            "col": 1
        }, {
            "title": "百位",
            "no": "0|1|2|3|4|5|6|7|8|9",
            "place": 2,
            "col": 1
        }, {
            "title": "十位",
            "no": "0|1|2|3|4|5|6|7|8|9",
            "place": 3,
            "col": 1
        }, {
            "title": "个位",
            "no": "0|1|2|3|4|5|6|7|8|9",
            "place": 4,
            "col": 1
        }],
        "name": "五星直选组合",
        "desc": "直选组合",
        "methodhelp": "从万位、千位、百位、十位、个位中各选一个号码组成1-5星的组合，共五注，所选号码的个位与开奖号码全部相同，则中1个5等奖；所选号码的个位、十位与开奖号码相同，则中1个5等奖以及1个4等奖，依此类推，最高可中5个奖。",
    },
    // 五星组选
    "ssc_wuxingzuxuan_120": {
        "type": "digital",
        "layout": [{
            "no": "0|1|2|3|4|5|6|7|8|9",
            "place": 0,
            "col": 1
        }],
        "name": "五星组选120",
        "desc": "组选120",
        "methodhelp": "从0-9中任意选择5个号码组成一注，所选号码与开奖号码的万位、千位、百位、十位、个位相同，顺序不限，即为中奖。",
    },
    "ssc_wuxingzuxuan_60": {
        "type": "digital",
        "layout": [{
            "title": "二重号",
            "no": "0|1|2|3|4|5|6|7|8|9",
            "place": 0,
            "col": 1
        }, {
            "title": "单号",
            "no": "0|1|2|3|4|5|6|7|8|9",
            "place": 1,
            "col": 1
        }],
        "name": "五星组选60",
        "desc": "组选60",
        "methodhelp": "选择1个“二重号”和3个单号号码组成一注，所选的单号号码与开奖号码相同，且所选二重号码在开奖号码中出现了2次，即为中奖。",
    },
    "ssc_wuxingzuxuan_30": {
        "type": "digital",
        "layout": [{
            "title": "二重号",
            "no": "0|1|2|3|4|5|6|7|8|9",
            "place": 0,
            "col": 1
        }, {
            "title": "单号",
            "no": "0|1|2|3|4|5|6|7|8|9",
            "place": 1,
            "col": 1
        }],
        "name": "五星组选30",
        "desc": "组选30",
        "methodhelp": "选择2个二重号和1个单号号码组成一注，所选的单号号码与开奖号码相同，且所选的2个二重号码分别在开奖号码中出现了2次，即为中奖",
    },
    "ssc_wuxingzuxuan_20": {
        "type": "digital",
        "layout": [{
            "title": "三重号",
            "no": "0|1|2|3|4|5|6|7|8|9",
            "place": 0,
            "col": 1
        }, {
            "title": "单号",
            "no": "0|1|2|3|4|5|6|7|8|9",
            "place": 1,
            "col": 1
        }],
        "name": "五星组选20",
        "desc": "组选20",
        "methodhelp": "选择1个三重号码和2个单号号码组成一注，所选的单号号码与开奖号码相同，且所选三重号码在开奖号码中出现了3次，即为中奖。",
    },
    "ssc_wuxingzuxuan_10": {
        "type": "digital",
        "layout": [{
            "title": "三重号",
            "no": "0|1|2|3|4|5|6|7|8|9",
            "place": 0,
            "col": 1
        }, {
            "title": "二重号",
            "no": "0|1|2|3|4|5|6|7|8|9",
            "place": 1,
            "col": 1
        }],
        "name": "五星组选10",
        "desc": "组选10",
        "methodhelp": "选择1个三重号码和1个二重号码，所选三重号码在开奖号码中出现3次，并且所选二重号码在开奖号码中出现了2次，即为中奖。",
    },
    "ssc_wuxingzuxuan_5": {
        "type": "digital",
        "layout": [{
            "title": "四重号",
            "no": "0|1|2|3|4|5|6|7|8|9",
            "place": 0,
            "col": 1
        }, {
            "title": "单号",
            "no": "0|1|2|3|4|5|6|7|8|9",
            "place": 1,
            "col": 1
        }],
        "name": "五星组选5",
        "desc": "组选5",
        "methodhelp": "选择1个四重号码和1个单号号码组成一注，所选的单号号码与开奖号码相同，且所选四重号码在开奖号码中出现了4次，即为中奖。",
    },
    // 四星直选
    "ssc_sixingzhixuan_fushi": {
        "type": "digital",
        "layout": [{
            "title": "千位",
            "no": "0|1|2|3|4|5|6|7|8|9",
            "place": 0,
            "col": 1
        }, {
            "title": "百位",
            "no": "0|1|2|3|4|5|6|7|8|9",
            "place": 1,
            "col": 1
        }, {
            "title": "十位",
            "no": "0|1|2|3|4|5|6|7|8|9",
            "place": 2,
            "col": 1
        }, {
            "title": "个位",
            "no": "0|1|2|3|4|5|6|7|8|9",
            "place": 3,
            "col": 1
        }],
        "name": "四星直选复式",
        "desc": "复式",
        "methodhelp": "从千位、百位、十位、个位中各选择一个号码组成一注，所选号码与开奖号码相同，且顺序一致，即为中奖。",
    },
    "ssc_sixingzhixuan_danshi": {
        "type": "danshi",
        "layout": [],
        "name": "四星直选单式",
        "desc": "单式",
        "methodhelp": "手动输入一个4位数号码组成一注，所选号码的千位、百位、十位、个位与开奖号码相同，且顺序一致，即为中奖。",
    },
    "ssc_sixingzhixuan_zuhe": {
        "type": "digital",
        "layout": [{
            "title": "千位",
            "no": "0|1|2|3|4|5|6|7|8|9",
            "place": 0,
            "col": 1
        }, {
            "title": "百位",
            "no": "0|1|2|3|4|5|6|7|8|9",
            "place": 1,
            "col": 1
        }, {
            "title": "十位",
            "no": "0|1|2|3|4|5|6|7|8|9",
            "place": 2,
            "col": 1
        }, {
            "title": "个位",
            "no": "0|1|2|3|4|5|6|7|8|9",
            "place": 3,
            "col": 1
        }],
        "name": "四星直选组合",
        "desc": "组合",
        "methodhelp": "从千位、百位、十位、个位中至少各选一个号码组成1-4星的组合，共四注，所选号码的个位与开奖号码相同，则中1个4等奖；所选号码的个位、十位与开奖号码相同，则中1个4等奖以及1个3等奖，依此类推，最高可中4个奖。",
    },
    // 四星组选
    "ssc_sixingzuxuan_24": {
        "type": "digital",
        "layout": [{
            "no": "0|1|2|3|4|5|6|7|8|9",
            "place": 0,
            "col": 1
        }],
        "name": "四星组选24",
        "desc": "组选24",
        "methodhelp": "从0-9中任意选择4个号码组成一注，所选号码与开奖号码的千位、百位、十位、个位相同，且顺序不限，即为中奖",
    },
    "ssc_sixingzuxuan_12": {
        "type": "digital",
        "layout": [{
            "title": "二重号",
            "no": "0|1|2|3|4|5|6|7|8|9",
            "place": 0,
            "col": 1
        }, {
            "title": "单号",
            "no": "0|1|2|3|4|5|6|7|8|9",
            "place": 1,
            "col": 1
        }],
        "name": "四星组选12",
        "desc": "组选12",
        "methodhelp": "选择1个二重号码和2个单号号码组成一注，所选单号号码与开奖号码相同，且所选二重号码在开奖号码中出现了2次，即为中奖。",
    },
    "ssc_sixingzuxuan_6": {
        "type": "digital",
        "layout": [{
            "title": "二重号",
            "no": "0|1|2|3|4|5|6|7|8|9",
            "place": 0,
            "col": 1
        }],
        "name": "四星组选6",
        "desc": "组选6",
        "methodhelp": "选择2个二重号码组成一注，所选的2个二重号码在开奖号码中分别出现了2次，即为中奖。",
    },
    "ssc_sixingzuxuan_4": {
        "type": "digital",
        "layout": [{
            "title": "三重号",
            "no": "0|1|2|3|4|5|6|7|8|9",
            "place": 0,
            "col": 1
        }, {
            "title": "单号",
            "no": "0|1|2|3|4|5|6|7|8|9",
            "place": 1,
            "col": 1
        }],
        "name": "四星组选4",
        "desc": "组选4",
        "methodhelp": "选择1个三重号码和1个单号号码组成一注，所选单号号码与开奖号码相同，且所选三重号码在开奖号码中出现了3次，即为中奖。",
    },
    // 前三直选
    "ssc_sanxingzhixuan_fushi_q3": {
        "type": "digital",
        "layout": [{
            "title": "万位",
            "no": "0|1|2|3|4|5|6|7|8|9",
            "place": 0,
            "col": 1
        }, {
            "title": "千位",
            "no": "0|1|2|3|4|5|6|7|8|9",
            "place": 1,
            "col": 1
        }, {
            "title": "百位",
            "no": "0|1|2|3|4|5|6|7|8|9",
            "place": 2,
            "col": 1
        }],
        "name": "前三直选复式",
        "desc": "复式",
        "methodhelp": "从万位、千位、百位中选择一个3位数号码组成一注，所选号码与开奖号码的前3位相同，且顺序一致，即为中奖。",
    },
    "ssc_sanxingzhixuan_danshi_q3": {
        "type": "danshi",
        "layout": [],
        "name": "前三直选单式",
        "desc": "单式",
        "methodhelp": "手动输入一个3位数号码组成一注，所选号码的万位、千位、百位与开奖号码相同且顺序一致，即为中奖。",
    },
    "ssc_sanxingzhixuan_hezhi_q3": {
        "type": "digital",
        "layout": [{
            "no": "0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27",
            "place": 0,
            "col": 1
        }],
        "name": "前三直选和值",
        "desc": "和值",
        "methodhelp": "所选数值等于开奖号码的万位、千位、百位三个数字相加之和，即为中奖。",
    },
    "ssc_sanxingzhixuan_kuadu_q3": {
        "type": "digital",
        "layout": [{
            "no": "0|1|2|3|4|5|6|7|8|9",
            "place": 0,
            "col": 1
        }],
        "name": "前三直选跨度",
        "desc": "直选跨度",
        "methodhelp": "所选数值等于开奖号码的前3位最大与最小数字相减之差，即为中奖。",
    },
    "ssc_sanxingzhixuan_zuhe_q3": {
        "type": "digital",
        "layout": [{
            "title": "万位",
            "no": "0|1|2|3|4|5|6|7|8|9",
            "place": 0,
            "col": 1
        }, {
            "title": "千位",
            "no": "0|1|2|3|4|5|6|7|8|9",
            "place": 1,
            "col": 1
        }, {
            "title": "百位",
            "no": "0|1|2|3|4|5|6|7|8|9",
            "place": 2,
            "col": 1
        }],
        "name": "前三直选组合",
        "desc": "直选组合",
        "methodhelp": "从万位、千位、百位中至少各选择一个号码组成1-3星的组合共三注，当百位号码与开奖号码相同，则中1个3等奖；如果百位与千位号码与开奖号码相同，则中1个3等奖以及1个2等奖，依此类推，最高可中3个奖。",
    },
    // 前三组选
    "ssc_sanxingzuxuan_3_q3": {
        "type": "digital",
        "layout": [{
            "title": "组三",
            "no": "0|1|2|3|4|5|6|7|8|9",
            "place": 0,
            "col": 1
        }],
        "name": "前三组选组三",
        "desc": "组三",
        "methodhelp": "从0-9中选择2个数字组成两注，所选号码与开奖号码的万位、千位、百位相同，且顺序不限，即为中奖。",
    },
    "ssc_sanxingzuxuan_6_q3": {
        "type": "digital",
        "layout": [{
            "title": "组六",
            "no": "0|1|2|3|4|5|6|7|8|9",
            "place": 0,
            "col": 1
        }],
        "name": "前三组选组六",
        "desc": "组六",
        "methodhelp": "从0-9中任意选择3个号码组成一注，所选号码与开奖号码的万位、千位、百位相同，顺序不限，即为中奖。",
    },
    "ssc_sanxingzuxuan_hunhezuxuan_q3": {
        "type": "danshi",
        "layout": [],
        "name": "前三混合组选",
        "desc": "混合组选",
        "methodhelp": "手动输入组三或组六号码，3个数字为一注，所选号码与开奖号码的万位、千位、百位相同，顺序不限，即为中奖",
    },
    "ssc_sanxingzuxuan_hezhi_q3": {
        "type": "digital",
        "layout": [{
            "no": "0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26",
            "place": 0,
            "col": 1
        }],
        "name": "前三组选和值",
        "desc": "组选和值",
        "methodhelp": "所选数值等于开奖号码万位、千位、百位三个数字相加之和(不含豹子号)，即为中奖。",
    },
    "ssc_sanxingzuxuan_zu3danshi_q3": {
        "type": "danshi",
        "layout": [],
        "name": "前三组三单式",
        "desc": "组三单式",
        "methodhelp": "手动输入一个3位数号码组成一注(不含豹子号)，开奖号码的万位、千位、百位符合后三组三为中奖。",
    },
    "ssc_sanxingzuxuan_zu6danshi_q3": {
        "type": "danshi",
        "layout": [],
        "name": "前三组六单式",
        "desc": "组六单式",
        "methodhelp": "手动输入一个3位数号码组成一注(不含豹子号)，开奖号码的万位、千位、百位符合后三组六为中奖。",
    },
    "ssc_sanxingzuxuan_baodan_q3": {
        "type": "digital",
        "layout": [{
            "no": "0|1|2|3|4|5|6|7|8|9",
            "place": 0,
            "col": 1
        }],
        "name": "前三组选包胆",
        "desc": "包胆",
        "methodhelp": "从0-9中任意选择1个包胆号码，开奖号码的万位、千位、百位中任意1位只要和所选包胆号码相同(不含豹子号)，即为中奖。",
    },
    // 前三其他
    "ssc_sanxingqita_hezhiweishu_q3": {
        "type": "digital",
        "layout": [{
            "no": "0|1|2|3|4|5|6|7|8|9",
            "place": 0,
            "col": 1
        }],
        "name": "前三其他和值尾数",
        "desc": "和值尾数",
        "methodhelp": "所选数值等于开奖号码的万位、千位、百位三个数字相加之和的尾数，即为中奖。",
    },
    "ssc_sanxingqita_teshuhaoma_q3": {
        "type": "digital",
        "layout": [{
            "no": "豹子|顺子|对子",
            "place": 0,
            "col": 1
        }],
        "name": "前三其他特殊号码",
        "desc": "特殊号码",
        "methodhelp": "所选的号码特殊属性和开奖号码前3位的属性一致，即为中奖。其中：1.豹子号的万、千、百位出现三个相同号码； 2.顺子号的万、千、百位不分顺序；3.对子号指的是开奖号码的前三位当中，任意2位数字相同的三位数号码。",
    },
    // 中三直选
    "ssc_sanxingzhixuan_fushi_z3": {
        "type": "digital",
        "layout": [{
            "title": "千位",
            "no": "0|1|2|3|4|5|6|7|8|9",
            "place": 0,
            "col": 1
        }, {
            "title": "百位",
            "no": "0|1|2|3|4|5|6|7|8|9",
            "place": 1,
            "col": 1
        }, {
            "title": "十位",
            "no": "0|1|2|3|4|5|6|7|8|9",
            "place": 2,
            "col": 1
        }],
        "name": "中三直选复式",
        "desc": "复式",
        "methodhelp": "从千位、百位、十位中选择一个3位数号码组成一注，所选号码与开奖号码的中间3位相同，且顺序一致，即为中奖。",
    },
    "ssc_sanxingzhixuan_danshi_z3": {
        "type": "danshi",
        "layout": [],
        "name": "中三直选单式",
        "desc": "单式",
        "methodhelp": "手动输入一个3位数号码组成一注，所选号码的千位、百位、十位与开奖号码相同且顺序一致，即为中奖。",
    },
    "ssc_sanxingzhixuan_hezhi_z3": {
        "type": "digital",
        "layout": [{
            "no": "0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27",
            "place": 0,
            "col": 1
        }],
        "name": "中三直选和值",
        "desc": "和值",
        "methodhelp": "所选数值等于开奖号码的千位、百位、十位三个数字相加之和，即为中奖。",
    },
    "ssc_sanxingzhixuan_kuadu_z3": {
        "type": "digital",
        "layout": [{
            "no": "0|1|2|3|4|5|6|7|8|9",
            "place": 0,
            "col": 1
        }],
        "name": "中三直选跨度",
        "desc": "直选跨度",
        "methodhelp": "所选数值等于开奖号码的中间3位最大与最小数字相减之差，即为中奖。",
    },
    "ssc_sanxingzhixuan_zuhe_z3": {
        "type": "digital",
        "layout": [{
            "title": "千位",
            "no": "0|1|2|3|4|5|6|7|8|9",
            "place": 0,
            "col": 1
        }, {
            "title": "百位",
            "no": "0|1|2|3|4|5|6|7|8|9",
            "place": 1,
            "col": 1
        }, {
            "title": "十位",
            "no": "0|1|2|3|4|5|6|7|8|9",
            "place": 2,
            "col": 1
        }],
        "name": "中三直选组合",
        "desc": "直选组合",
        "methodhelp": "从千位、百位、十位中至少各选择一个号码组成1-3星的组合共三注，当十位号码与开奖号码相同，则中1个3等奖；如果十位与百位号码与开奖号码相同，则中1个3等奖以及1个2等奖，依此类推，最高可中3个奖。",
    },
    // 中三组选
    "ssc_sanxingzuxuan_3_z3": {
        "type": "digital",
        "layout": [{
            "title": "组三",
            "no": "0|1|2|3|4|5|6|7|8|9",
            "place": 0,
            "col": 1
        }],
        "name": "中三组选组三",
        "desc": "组三",
        "methodhelp": "从0-9中选择2个数字组成两注，所选号码与开奖号码的千位、百位、十位相同，且顺序不限，即为中奖。",
    },
    "ssc_sanxingzuxuan_6_z3": {
        "type": "digital",
        "layout": [{
            "title": "组六",
            "no": "0|1|2|3|4|5|6|7|8|9",
            "place": 0,
            "col": 1
        }],
        "name": "中三组选组六",
        "desc": "组六",
        "methodhelp": "从0-9中任意选择3个号码组成一注，所选号码与开奖号码的千位、百位、十位相同，顺序不限，即为中奖。",
    },
    "ssc_sanxingzuxuan_hunhezuxuan_z3": {
        "type": "danshi",
        "layout": [],
        "name": "中三混合组选",
        "desc": "混合组选",
        "methodhelp": "手动输入组三或组六号码，3个数字为一注，所选号码与开奖号码的千位、百位、十位相同，顺序不限，即为中奖",
    },
    "ssc_sanxingzuxuan_hezhi_z3": {
        "type": "digital",
        "layout": [{
            "no": "0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26",
            "place": 0,
            "col": 1
        }],
        "name": "中三组选和值",
        "desc": "组选和值",
        "methodhelp": "所选数值等于开奖号码千位、百位、十位三个数字相加之和(不含豹子号)，即为中奖。",
    },
    "ssc_sanxingzuxuan_zu3danshi_z3": {
        "type": "danshi",
        "layout": [],
        "name": "中三组三单式",
        "desc": "组三单式",
        "methodhelp": "手动输入一个3位数号码组成一注(不含豹子号)，开奖号码的千位、百位、十位符合后三组三为中奖。",
    },
    "ssc_sanxingzuxuan_zu6danshi_z3": {
        "type": "danshi",
        "layout": [],
        "name": "中三组六单式",
        "desc": "组六单式",
        "methodhelp": "手动输入一个3位数号码组成一注(不含豹子号)，开奖号码的千位、百位、十位符合后三组六为中奖。",
    },
    "ssc_sanxingzuxuan_baodan_z3": {
        "type": "digital",
        "layout": [{
            "no": "0|1|2|3|4|5|6|7|8|9",
            "place": 0,
            "col": 1
        }],
        "name": "中三组选包胆",
        "desc": "包胆",
        "methodhelp": "从0-9中任意选择1个包胆号码，开奖号码的千位、百位、十位中任意1位只要和所选包胆号码相同(不含豹子号)，即为中奖。",
    },
    // 中三其他
    "ssc_sanxingqita_hezhiweishu_z3": {
        "type": "digital",
        "layout": [{
            "no": "0|1|2|3|4|5|6|7|8|9",
            "place": 0,
            "col": 1
        }],
        "name": "中三其他和值尾数",
        "desc": "和值尾数",
        "methodhelp": "所选数值等于开奖号码的千位、百位、十位三个数字相加之和的尾数，即为中奖。",
    },
    "ssc_sanxingqita_teshuhaoma_z3": {
        "type": "digital",
        "layout": [{
            "no": "豹子|顺子|对子",
            "place": 0,
            "col": 1
        }],
        "name": "中三其他特殊号码",
        "desc": "特殊号码",
        "methodhelp": "所选的号码特殊属性和开奖号码前3位的属性一致，即为中奖。其中：1.豹子号的千、百、十位出现三个相同号码； 2.顺子号的千、百、十位不分顺序；3.对子号指的是开奖号码的中三位当中，任意2位数字相同的三位数号码。",
    },
    // 后三直选
    "ssc_sanxingzhixuan_fushi_h3": {
        "type": "digital",
        "layout": [{
            "title": "百位",
            "no": "0|1|2|3|4|5|6|7|8|9",
            "place": 0,
            "col": 1
        }, {
            "title": "十位",
            "no": "0|1|2|3|4|5|6|7|8|9",
            "place": 1,
            "col": 1
        }, {
            "title": "个位",
            "no": "0|1|2|3|4|5|6|7|8|9",
            "place": 2,
            "col": 1
        }],
        "name": "后三直选复式",
        "desc": "复式",
        "methodhelp": "从百位、十位、个位中选择一个3位数号码组成一注，所选号码与开奖号码的后3位相同，且顺序一致，即为中奖。",
    },
    "ssc_sanxingzhixuan_danshi_h3": {
        "type": "danshi",
        "layout": [],
        "name": "后三直选单式",
        "desc": "单式",
        "methodhelp": "手动输入一个3位数号码组成一注，所选号码的百位、十位、个位与开奖号码相同且顺序一致，即为中奖。",
    },
    "ssc_sanxingzhixuan_hezhi_h3": {
        "type": "digital",
        "layout": [{
            "no": "0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27",
            "place": 0,
            "col": 1
        }],
        "name": "后三直选和值",
        "desc": "和值",
        "methodhelp": "所选数值等于开奖号码的百位、十位、个位三个数字相加之和，即为中奖。",
    },
    "ssc_sanxingzhixuan_kuadu_h3": {
        "type": "digital",
        "layout": [{
            "no": "0|1|2|3|4|5|6|7|8|9",
            "place": 0,
            "col": 1
        }],
        "name": "后三直选跨度",
        "desc": "直选跨度",
        "methodhelp": "所选数值等于开奖号码的后3位最大与最小数字相减之差，即为中奖。",
    },
    "ssc_sanxingzhixuan_zuhe_h3": {
        "type": "digital",
        "layout": [{
            "title": "百位",
            "no": "0|1|2|3|4|5|6|7|8|9",
            "place": 0,
            "col": 1
        }, {
            "title": "十位",
            "no": "0|1|2|3|4|5|6|7|8|9",
            "place": 1,
            "col": 1
        }, {
            "title": "个位",
            "no": "0|1|2|3|4|5|6|7|8|9",
            "place": 2,
            "col": 1
        }],
        "name": "后三直选组合",
        "desc": "直选组合",
        "methodhelp": "从百位、十位、个位中至少各选择一个号码组成1-3星的组合共三注，当个位号码与开奖号码相同，则中1个3等奖；如果个位与十位号码与开奖号码相同，则中1个3等奖以及1个2等奖，依此类推，最高可中3个奖。",
    },
    // 后三组选
    "ssc_sanxingzuxuan_3_h3": {
        "type": "digital",
        "layout": [{
            "title": "组三",
            "no": "0|1|2|3|4|5|6|7|8|9",
            "place": 0,
            "col": 1
        }],
        "name": "后三组选组三",
        "desc": "组三",
        "methodhelp": "从0-9中选择2个数字组成两注，所选号码与开奖号码的百位、十位、个位相同，且顺序不限，即为中奖。",
    },
    "ssc_sanxingzuxuan_6_h3": {
        "type": "digital",
        "layout": [{
            "title": "组六",
            "no": "0|1|2|3|4|5|6|7|8|9",
            "place": 0,
            "col": 1
        }],
        "name": "后三组选组六",
        "desc": "组六",
        "methodhelp": "从0-9中任意选择3个号码组成一注，所选号码与开奖号码的百位、十位、个位相同，顺序不限，即为中奖。",
    },
    "ssc_sanxingzuxuan_hunhezuxuan_h3": {
        "type": "danshi",
        "layout": [],
        "name": "后三混合组选",
        "desc": "混合组选",
        "methodhelp": "手动输入组三或组六号码，3个数字为一注，所选号码与开奖号码的百位、十位、个位相同，顺序不限，即为中奖",
    },
    "ssc_sanxingzuxuan_hezhi_h3": {
        "type": "digital",
        "layout": [{
            "no": "0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26",
            "place": 0,
            "col": 1
        }],
        "name": "后三组选和值",
        "desc": "组选和值",
        "methodhelp": "所选数值等于开奖号码百位、十位、个位三个数字相加之和(不含豹子号)，即为中奖。",
    },
    "ssc_sanxingzuxuan_zu3danshi_h3": {
        "type": "danshi",
        "layout": [],
        "name": "后三组三单式",
        "desc": "组三单式",
        "methodhelp": "手动输入一个3位数号码组成一注(不含豹子号)，开奖号码的百位、十位、个位符合后三组三为中奖。",
    },
    "ssc_sanxingzuxuan_zu6danshi_h3": {
        "type": "danshi",
        "layout": [],
        "name": "后三组六单式",
        "desc": "组六单式",
        "methodhelp": "手动输入一个3位数号码组成一注(不含豹子号)，开奖号码的百位、十位、个位符合后三组六为中奖。",
    },
    "ssc_sanxingzuxuan_baodan_h3": {
        "type": "digital",
        "layout": [{
            "no": "0|1|2|3|4|5|6|7|8|9",
            "place": 0,
            "col": 1
        }],
        "name": "后三组选包胆",
        "desc": "包胆",
        "methodhelp": "从0-9中任意选择1个包胆号码，开奖号码的百位、十位、个位中任意1位只要和所选包胆号码相同(不含豹子号)，即为中奖。",
    },
    // 后三其他
    "ssc_sanxingqita_hezhiweishu_h3": {
        "type": "digital",
        "layout": [{
            "no": "0|1|2|3|4|5|6|7|8|9",
            "place": 0,
            "col": 1
        }],
        "name": "后三其他和值尾数",
        "desc": "和值尾数",
        "methodhelp": "所选数值等于开奖号码的百位、十位、个位三个数字相加之和的尾数，即为中奖。",
    },
    "ssc_sanxingqita_teshuhaoma_h3": {
        "type": "digital",
        "layout": [{
            "no": "豹子|顺子|对子",
            "place": 0,
            "col": 1
        }],
        "name": "后三其他特殊号码",
        "desc": "特殊号码",
        "methodhelp": "所选的号码特殊属性和开奖号码前3位的属性一致，即为中奖。其中：1.豹子号的百、十、个位出现三个相同号码； 2.顺子号的百、十、个位不分顺序；3.对子号指的是开奖号码的中三位当中，任意2位数字相同的三位数号码。",
    },
    // 二星直选
    
    // 二星组选

};