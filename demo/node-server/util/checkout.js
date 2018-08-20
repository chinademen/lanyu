var checkout = (function () {
    var info = {
        // 会员账号
        userAccount: function (value) {
            return /^[0-9A-Za-z\u4e00-\u9fa5]{1,20}$/.test(value) ? true : '会员账号格式错误';
        },
        // 会员姓名
        userName: function (value) {
            return /^[0-9A-Za-z\u4e00-\u9fa5]{1,20}$/.test(value) ? true : '会员姓名格式错误';
        },
    };

    return {
        check: function (type, value) {
            value = value.replace(/^\s+|\s+$/g, '');
            return info[type] ? info[type](value) : '没有该类型的检测方法';
        }
    }
})();

module.exports = checkout;