export function isFunction(fn) {
    return Object.prototype.toString.call(fn) === '[object Function]';
}

export const LotGame = {
    // 根据利润率计算当期需要的倍数
    // @  [ 起始倍数，利润率，单倍购买金额，历史购买金额，单倍奖金 ]
    // => 返回倍数
    computeByMargin: (ss, mm, bb, oo, pp) => {
        let s = ss ? parseInt(ss, 10) : 0;
        let m = mm ? parseInt(mm, 10) : 0;
        let b = bb ? Number(bb) : 0;
        let o = oo ? Number(oo) : 0;
        let p = pp ? Number(pp) : 0;
        let t = 0;
        if (b > 0) {
            if (m > 0) {
                t = Math.ceil((((m / 100) + 1) * o) / (p -(b * ((m / 100) + 1))));
            } else { // 无利润率
                t = 1;
            }
            if (t < s) {
                t = s;
            }
        }
        return t;
    },
    Dan_trims: (val, code) => {
        let s = val.replace(/(^\s*)|(\s*$)/g, '');
        s = (s.replace(/[^\s0-9, ;r，；]/g, ''))
        .replace(/(^\s*)|(\s*$)/g, '');
        if (/ 11 /.test(code)) {
            s = (s.replace(/[ ]/g, '')).replace(/(\s*)|(\s*$)/g, '');
        } else {
            s = (s.replace(/\s+/g, '')).replace(/(\s*)|(\s*$)/g, '');
        }
        return s;
    },
    Dan_SHToArray: (string) => {
        return string.match(/\d{2}/g);
    },
    SSC_HHZXcheck: (n, len) => {
        let a;
        if (len === 2) {
            a = ['00', '11', '22', '33', '44', '55', '66', '77', '88', '99'];
        } else {
            a = ['000', '111', '222', '333', '444', '555', '666', '777', '888', '999'];
        }
        let sn = n.toString();
        if (!a.includes(sn)) {
            return true;
        }
        return false;
    },
    SDinputCheck: (n, len, code) => {
        let t = LotGame.Dan_SHToArray(n);
        let l = t.length;
        for (let i = 0; i < l; i++) {
            if (code.search(/10/g) !== -1 && (Number(t[i]) > 10 || Number(t[i]) < 1)) {
                return false;
            }
            if (code.search(/sy/g) !== -1 && (Number(t[i]) > 11 || Number(t[i]) < 1)) {
                return false;
            }
            for (let j = i + 1; j < l; j++) {
                if (Number(t[i]) === Number(t[j])) {
                    return false;
                }
            }
        }
        return true;
    },
    JSK3_EBTHDScheck: (n, len) => { // 两个不同号
        if (len !== 2) {
            return false;
        }
        let first = '';
        let second = '';
        let i = 0;
        for (let i = 0; i < len; i++) {
            if (i === 0) {
                first = n.substr(i, 1);
            }
            if (i === 1) {
                second = n.substr(i, 1);
            }
        }
        if (first === second) {
            return false;
        }
        return true;
    },
    JSK3_SBTHDScheck: (n, len) => { // 三个不同号
        if (len !== 3) {
            return false;
        }
        let first = '';
        let second = '';
        let third = '';
        let i = 0;
        for (let i = 0; i < len; i++) {
            if (i === 0) {
                first = n.substr(i, 1);
            }
            if (i === 1) {
                second = n.substr(i, 1);
            }
            if (i === 2) {
                third = n.substr(i, 1);
            }
        }
        if (first === second || second === third || third === first) {
            return false;
        } else {
            return true;
        }
    },
    JSK3_ETHDXcheck: (n, len) => {
        if (len !== 3) {
            return false;
        }
        let first = '';
        let second = '';
        let third = '';
        let i = 0;
        for (let i = 0; i < len; i++) {
            if (i === 0) {
                first = n.substr(i, 1);
            }
            if (i === 1) {
                second = n.substr(i, 1);
            }
            if (i === 2) {
                third = n.substr(i, 1);
            }
        }
        if (first === second && second === third) {
            return false;
        }
        if (first === second || second === third || third === first) {
            return true;
        }
        return false;
    },
    Dan_RightArray: (options) => {
        let arr = options.arr || [];    // 单式数组
        let len = options.len || 0;     // 长度
        let sfun = isFunction(options.fun) ? options.fun : () => {
            return true;
        }; // 执行函数
        let lotteryCode = options.lotteryCode || 'k3' && 'hbk3' && 'jlk3' && 'ahk3'; // code
        let isSort = options.isSort || false; // 是否排序
        let dan = options.dan || false; // 是否单双
        let newsel = [];
        let partn = null;
        switch (len) {
            case 2:
                if (lotteryCode === 'ks') {
                    partn = /^[1-6]{2}$/;
                } else {
                    partn = /^[0-9]{2}$/;
                }
                break;
            case 3:
                if (lotteryCode === 'ks') {
                    partn = /^[1-6]{3}$/;
                } else {
                    partn = /^[0-9]{3}$/;
                }
                break;
            case 4:
                partn = /^[0-9]{4}$/;
                break;
            case 5:
                partn = /^[0-9]{5}$/;
                break; 
            case 6:
                partn = /^[0-9]{6}$/;
                break; 
            case 8:
                partn = /^[0-9]{8}$/;
                break; 
            case 10:
                partn = /^[0-9]{10}$/;
                break; 
            case 12:
                partn = /^[0-9]{12}$/;
                break; 
            case 14:
                partn = /^[0-9]{14}$/;
                break; 
            case 16:
                partn = /^[0-9]{16}$/;
                break;
            default:
                break;
        }
        let zhu = '';
        arr.forEach((item, index) => {
            zhu = item.replace(/(\s*)|(\s*$)/g, ''); // 去除空格
            if (zhu !== '' &&partn.test(zhu)) {
                if (sfun(zhu, len, lotteryCode)) {  // 长度匹配的通过
                    if (isSort) {   // 每一注当中排序
                        if (!dan) { // 单号
                            let d = zhu.split('').sort((a, b) => {
                                return (a - b);
                            }).join('');
                            zhu = d;
                        } else { // 双号
                            let d = LotGame.Dan_SHToArray(zhu).sort((a, b) => {
                                return (a - b);
                            }).join('');
                            zhu = d;
                        }
                    }
                    newsel.push(zhu);
                }
            }
        });
        if (newsel.length === 0) {
            return newsel;
        } else {
            return Array.from(new Set(newsel)); // 去重整体排序
        }
    },
}