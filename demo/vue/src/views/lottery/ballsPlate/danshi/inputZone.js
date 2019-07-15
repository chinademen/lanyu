// 单式计算注数，生成投注号码
import methodMapToCode from './methodMapToCode'
import { LotGame } from './trace'

/**
 * value input的值
 * methodCode 对应玩法的code 
 * lotteryCodes 对应彩种的code
*/
export default function inputZone(value, methodCode, lotteryCodes) {
    if (value[0] === undefined) {
        return;
    }
    // 获取对应玩法code: LotteryName
    let LotteryName = methodMapToCode[methodCode];
    // 将单式输入框的值以 空格|;|,|\r|\s|，|；为分隔符拆分为数组
    let valueArr = value.split(/[ ]|[;]|[,]|[\r]|[\s]|[，]|[；]/);
    let optionsDef = {
        arr: valueArr,
        lotteryCode: lotteryCodes
    };
    let options = {};
    // 根据玩法选择一注投注数据的长度
    switch (LotteryName) {
        // 时时彩，体彩，福彩
        case 'ZX2':
        case 'RXZXDSSSC2':
            options = {
                len: 2
            };
            break;
        case 'ZX3':
        case 'RXZXDSSSC3':
            options = {
                len: 3
            };
            break;
        case 'ZX4':
        case 'RXZXSSC4DS':
            options = {
                len: 4
            };
            break;
        case 'ZX5':
            options = {
                len: 5
            };
            break;
        case 'HHZX': // 后三码 - 后三组选 - 混合
        case 'RX3ZUHSSC': // 任选三 - 任三组选 - 混合组选
            options = {
                len: 3,
                fun: LotGame.SSC_HHZXcheck,
                isSort: true
            };
            break;
        case 'ZU2': // 二码 - 二星 - 前、后二组选复式
        case 'RXZUDSSSC2': // 任选二 - 任二组选 - 组选单式
            options = {
                len: 2,
                fun: LotGame.SSC_HHZXcheck,
                isSort: true
            }
            break;
        // 11选5
        case 'PK10CQ3':
        case 'SDQ3ZiX':
            options = {
                len: 6,
                fun: LotGame.SDinputCheck,
                isSort: false,
                dan: true
            };
            break;
        case 'SD3z3':
        case 'SDQ3ZuX':
            options = {
                len: 6,
                fun: LotGame.SDinputCheck,
                isSort: true,
                dan: true
            };
            break;
        case 'PK10CGYJ':
        case 'SDQ2ZiX':
            options = {
                len: 4,
                fun: LotGame.SDinputCheck,
                isSort: false,
                dan: true
            };
            break;
        case 'SD2z2':
        case 'SDQ2ZuX': 
            options = {
                len: 4,
                fun: LotGame.SDinputCheck,
                isSort: true,
                dan: true
            };
            break;
        case 'SD1z1':
            options = {
                len: 2,
                fun: LotGame.SDinputCheck,
                isSort: false,
                dan: true
            };
            break;
        case 'SD4z4':
            options = {
                len: 8,
                fun: LotGame.SDinputCheck,
                isSort: true,
                dan: true
            };
            break;
        case 'SD5z5':
            options = {
                len: 10,
                fun: LotGame.SDinputCheck,
                isSort: true,
                dan: true
            };
            break;
        case 'SD6z5':
            options = {
                len: 12,
                fun: LotGame.SDinputCheck,
                isSort: true,
                dan: true
            };
            break; 
        case 'SD7z5':
            options = {
                len: 14,
                fun: LotGame.SDinputCheck,
                isSort: true,
                dan: true
            };
            break;
        case 'SD8z5':
            options = {
                len: 16,
                fun: LotGame.SDinputCheck,
                isSort: true,
                dan: true
            };
            break;     
        // pk10单式
        case 'PK10CQ4': {
            options = {
                len: 8,
                fun: LotGame.SDinputCheck,
                isSort: false,
                dan: true
            };
            break;
        }
        case 'PK10CQ5': {
            options = {
                len: 10,
                fun: LotGame.SDinputCheck,
                isSort: false,
                dan: true
            };
            break;
        }
        case 'PK10CQ6': {
            options = {
                len: 12,
                fun: LotGame.SDinputCheck,
                isSort: false,
                dan: true
            };
            break;
        }
        // JSK3
        case 'JSK3TwoTHDX': 
            options = {
                len: 3,
                fun: LotGame.JSK3_ETHDXcheck,
                isSort: true
            };
            break;
        case 'JSK3ThreeBTH': 
            options = {
                len: 3,
                fun: LotGame.JSK3_SBTHDScheck,
                isSort: true
            };
            break;
        case 'JSK3woBTH': 
            options = {
                len: 2,
                fun: LotGame.JSK3_EBTHDScheck,
                isSort: true
            };
            break;
        default: 
            break;
    }
    // 过滤重复的，不符合规则的数据
    let numberData = LotGame.Dan_RightArray(Object.assign(optionsDef, options));
    // 获取当前符合规则的注数
    let inputNumData = multiFun() * numberData.length;

    // 其他特殊玩法

    // 注单数大于0，更新当前的投注号码
    return {
        numberData,     // 投注号码
        inputNumData,   // 注数
    }
    
}

// 倍率
export function multiFun(that) {
    let multi = 1;
    return multi;
}
