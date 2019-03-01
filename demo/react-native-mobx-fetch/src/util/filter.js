/**
 * 过滤器 放置各种工具类 
 */

// 浮点运算(处理js浮点减法运算bug问题)
export function floatOperation(num) {
    return num = Math.round(num * 100) / 100;
}

// 对象参数转换成拼接字符串   {pageNo:1, pageSize:20} ---> ?pageNo=1&pageSize=20
export function objToStr(obj) {
    let str = '?';
    for (let i in obj) {
        if (obj[i]) {
            str += `${i}=${obj[i]}&`;
        }
    }
    str = str.slice(0, str.length - 1);
    return str;
}

// 金额格式化
export function moneyFormat(amount) {
    if (!amount) amount = "0";
    amount = amount.toString().replace(/\$|\,/g, '');
    if (isNaN(amount)) {
        amount = "0";
    }
    var sign = (amount == (amount = Math.abs(amount)));
    amount = Math.floor(amount * 100 + 0.50000000001);
    var cents = amount % 100;
    amount = Math.floor(amount / 100).toString();
    if (cents < 10) {
        cents = "0" + cents
    }
    for (var i = 0; i < Math.floor((amount.length - (1 + i)) / 3); i++) {
        amount = amount.substring(0, amount.length - (4 * i + 3)) + ',' + amount.substring(amount.length - (4 * i + 3));
    }

    return (((sign) ? '' : '-') + amount + '.' + cents);
}

// 账号校验规则
export const checkUserName = username => /^(?=.*[A-Za-z])(?=.*\d)(.){6,16}$/.test(username) ? true : false;

// 密码校验规则
export const checkPassWord = password => /^(?=.*[A-Za-z])(?=.*\d)(.){6,16}$/.test(password) ? true : false;