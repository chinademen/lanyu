// 格式化

//  浮点运算(处理js浮点减法运算bug问题)
function floatOperation(num) {
    return num = Math.round(num * 100) / 100;
}

// 在线时长  时间戳 转换成 xx天 xx小时 xx分钟     传入的时间距离现在的时长
function stampToDay(time) {
    if (!time) return '-';
    let nowTime = new Date().getTime();
    let s = (nowTime - time) / 1000;
    let day = Math.floor(s / (24 * 3600));
    let hour = Math.floor((s - day * 24 * 3600) / 3600);
    let minute = Math.floor((s - day * 24 * 3600 - hour * 3600) / 60);
    return day + '天 ' + hour + '小时 ' + minute + '分钟';
}

// 时间戳转换成  yyyy-MM-dd HH:MM:SS 格式
function getFormatDate(time) {
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
function timeFormat(time) {
    return time = time ? new Date(parseInt(time)).toLocaleString() : '-';
}

// 参数转换: object ---> string     { username: aaa, password: 111 } ---> '?username=aaa&password=111'
function objToStr(obj) {
    let str = '?';
    for (let i in obj) {
        if (obj[i]) {
            str += `${i}=${obj[i]}&`;
        }
    }
    str = str.slice(0, str.length-1);
    return str;
}

// 给表格数据添加key
function listAddKey(data) {
    data.result.map((a, i) => a.key = i);
}

// 金额格式化
function moneyFormat(amount) {
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

export { floatOperation, stampToDay, getFormatDate, timeFormat, objToStr, listAddKey, moneyFormat }