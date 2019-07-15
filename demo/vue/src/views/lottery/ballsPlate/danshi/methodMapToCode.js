// 玩法对应的code
const methodMapToCode = {
    // 时时彩
    "wuxing_zhixuandanshi": "ZX5",   // 五星-直选单式
    "qiansi_zhixuandanshi": "ZX4", // 前四-直选单式
    "housi_zhixuandanshi": "ZX4", // 后四-直选单式
    "qiansan_zhixuandanshi": "ZX3", // 前三-直选单式
    "qiansan_zusandanshi": "HHZX", // 前三-组三单式
    "qiansan_zuliudanshi": "", // 前三-组六单式
    "zhongsan_zhixuandanshi": "ZX3", // 中三-直选单式
    "143": "", // 中三-组三单式
    "144": "", // 中三-组六单式
    "housan_zhixuandanshi": "ZX3", // 后三-直选单式
    "9": "", // 后三-组三单式
    "10": "", // 后三-组六单式
    "11": "ZX2", // 后二单式(直选)
    "4": "ZX2", // 前二单式(直选)
    "12": "ZU2", // 后二单式(组选)
    "5": "ZU2", // 前二单式(组选)
    // 任选
    "200": "RXZXDSSSC2", // 任选二-直选单式
    "201": "RXZUDSSSC2", // 任选二-组选单式
    "186": "RXZXDSSSC3", // 任选三-直选单式
    "188": "RXZUSSC3", // 任选三-组三单式
    "189": "RX3ZU6SSC", // 任选三-组六单式
    "187": "RXZXSSC4DS", // 任选四-直选单式

    // 龙虎斗

    // 快3
    "": "JSK3TwoTHDX", // 2同号单选单式
    "": "JSK3ThreeBTH", // 3不同号单式
    "": "JSK3TwoBTH", // 2不同号单式

    // 11x5
    "": "SDQ3ZiX", // 三码-前三直选单式
    "": "SDQ3ZuX", // 三码-前三组选单式
    "": "SDQ2ZiX", // 二码-前二直选单式
    "": "SDQ2ZuX", // 二码-前二组选单式
    "": "SD1z1", // 任选单式-一中一
    "": "SD2z2", // 任选单式-二中二  
    "": "SD3z3", // 任选单式-三中三  
    "": "SD4z4", // 任选单式-四中四
    "": "SD5z5", // 任选单式-五中五
    "": "SD6z5", // 任选单式-六中五
    "": "SD7z5", // 任选单式-七中五
    "": "SD8z5", // 任选单式-八中五

    // pk10

    

    

    

    // 福彩3D

    // 百家乐

    // 北京快乐8

};

export default methodMapToCode;


