import React from 'react';
import { Select } from 'antd';
const { Option } = Select;

// 格式化工具

// 轮询
export function loopEvent(component, event) {
    const _this = component;
    setTimeout(() => {
        _this[event]();
        setTimeout(loopEvent(_this, event), 20000);
    }, 20000);
}

// 浮点运算(处理js浮点减法运算bug问题)
export function floatOperation(num) {
    return num = Math.round(num * 100) / 100;
}

// 在线时长   时间戳 ---> x天 x小时 x分钟
export function onlineTimeLength (time) {
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
    str = str.slice(0, str.length-1);
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
    return value = value == 1 ? (<span style={{color: "#0cdc1e"}}>是</span>) : (<span style={{color: "#f5222d"}}>否</span>);
}