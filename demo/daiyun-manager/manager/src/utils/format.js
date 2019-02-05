import React from 'react';
import { Select } from 'antd';
const { Option } = Select;

// 格式化工具

// 轮询
export function loopEvent(component, event, time) {
    const _this = component;
    setTimeout(() => {
        _this[event]();
        setTimeout(loopEvent(_this, event), time);
    }, time);
}

// 浮点运算(处理js浮点减法运算bug问题)
export function floatOperation(num) {
    return num = Math.round(num * 100) / 100;
}

// 在线时长   时间戳 ---> x天 x小时 x分钟
export function onlineTimeLength(time) {
    if (!time) return '-';
    let nowTime = new Date().getTime();
    let s = (nowTime - time) / 1000;
    let day = Math.floor(s / (24 * 3600));
    let hour = Math.floor((s - day * 24 * 3600) / 3600);
    let minute = Math.floor((s - day * 24 * 3600 - hour * 3600) / 60);
    return day + '天 ' + hour + '小时 ' + minute + '分钟';
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

// 数组生成option
export function createOption(params) {
    let arr = [];
    arr = params.map(item => {
        for (var k in item) {
            return (<Option value={k} key={k}>{item[k]}</Option>);
        }
    });
    return arr;
}

// 给表格数据添加key
export function listAddKey(data) {
    data.list.map((a, i) => a.key = i);
}

// 时间戳转换成  yyyy-MM-dd HH:MM:SS 格式
export function getFormatDate(time) {
    if (!time) return '';
    let date = new Date(time);
    const seperator1 = "-";
    const seperator2 = ":";
    let month = date.getMonth() + 1;
    let strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    let currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
        + " " + date.getHours() + seperator2 + date.getMinutes()
        + seperator2 + date.getSeconds();
    return currentdate;
}

// 时间格式化 yyyy/MM/dd 下午HH:MM:SS
export function timeFormat(time) {
    return time = time ? new Date(parseInt(time)).toLocaleString() : '-';
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

// 是否
export function yesOrNo(value) {
    return value = value == 1 ? (<span style={{ color: "#0cdc1e" }}>是</span>) : (<span style={{ color: "#f5222d" }}>否</span>);
}

// 获取字符串中最后一个 / 后面的内容
export function getFileName(url) {
    if (!url) return;
    var index = url.lastIndexOf('\/');
    return url.substring(index + 1, url.length);
}

// 金额转换成中文大写
export function convertCurrency(money) {
    //汉字的数字  
    var cnNums = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
    //基本单位  
    var cnIntRadice = ['', '拾', '佰', '仟'];
    //对应整数部分扩展单位  
    var cnIntUnits = ['', '万', '亿', '兆'];
    //对应小数部分单位  
    var cnDecUnits = ['角', '分', '毫', '厘'];
    //整数金额时后面跟的字符  
    var cnInteger = '整';
    //整型完以后的单位  
    var cnIntLast = '元';
    //最大处理的数字  
    var maxNum = 999999999999999.9999;
    //金额整数部分  
    var integerNum;
    //金额小数部分  
    var decimalNum;
    //输出的中文金额字符串  
    var chineseStr = '';
    //分离金额后用的数组，预定义  
    var parts;
    if (money == '') { return ''; }
    money = parseFloat(money);
    if (money >= maxNum) {
        //超出最大处理数字  
        return '';
    }
    if (money == 0) {
        chineseStr = cnNums[0] + cnIntLast + cnInteger;
        return chineseStr;
    }
    //转换为字符串  
    money = money.toString();
    if (money.indexOf('.') == -1) {
        integerNum = money;
        decimalNum = '';
    } else {
        parts = money.split('.');
        integerNum = parts[0];
        decimalNum = parts[1].substr(0, 4);
    }
    //获取整型部分转换  
    if (parseInt(integerNum, 10) > 0) {
        var zeroCount = 0;
        var IntLen = integerNum.length;
        for (var i = 0; i < IntLen; i++) {
            var n = integerNum.substr(i, 1);
            var p = IntLen - i - 1;
            var q = p / 4;
            var m = p % 4;
            if (n == '0') {
                zeroCount++;
            } else {
                if (zeroCount > 0) {
                    chineseStr += cnNums[0];
                }
                //归零  
                zeroCount = 0;
                chineseStr += cnNums[parseInt(n)] + cnIntRadice[m];
            }
            if (m == 0 && zeroCount < 4) {
                chineseStr += cnIntUnits[q];
            }
        }
        chineseStr += cnIntLast;
    }
    //小数部分  
    if (decimalNum != '') {
        var decLen = decimalNum.length;
        for (var i = 0; i < decLen; i++) {
            var n = decimalNum.substr(i, 1);
            if (n != '0') {
                chineseStr += cnNums[Number(n)] + cnDecUnits[i];
            }
        }
    }
    if (chineseStr == '') {
        chineseStr += cnNums[0] + cnIntLast + cnInteger;
    } else if (decimalNum == '') {
        chineseStr += cnInteger;
    }
    return chineseStr;
}

// "^\\d+$"　　//非负整数（正整数 + 0）
// "^[0-9]*[1-9][0-9]*$"　　//正整数
// "^((-\\d+)|(0+))$"　　//非正整数（负整数 + 0）
// "^-[0-9]*[1-9][0-9]*$"　　//负整数
// "^-?\\d+$"　　　　//整数
// "^\\d+(\\.\\d+)?$"　　//非负浮点数（正浮点数 + 0）
// "^(([0-9]+\\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\\.[0-9]+)|([0-9]*[1-9][0-9]*))$"　　//正浮点数
// "^((-\\d+(\\.\\d+)?)|(0+(\\.0+)?))$"　　//非正浮点数（负浮点数 + 0）
// "^(-(([0-9]+\\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\\.[0-9]+)|([0-9]*[1-9][0-9]*)))$"　　//负浮点数
// "^(-?\\d+)(\\.\\d+)?$"　　//浮点数

// 判断一个字符串是否是数字
export function isNumber(str) {
    const reg = /^[0-9]+.?[0-9]*$/;
    return reg.test(str); 
}

// 判断一个字符串是否为非负整数
export function isInteger(str) {
    const reg = /^\d+$/;
    return reg.test(str); 
}

