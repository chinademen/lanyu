/**
 * 工具js
 */

Math.factorial = function(e) {
    return 0 >= e ? 1 : e * Math.factorial(e - 1)
};
Math.combination = function(e, t) {
    var a = Math.factorial;
    return t > e ? 0 : a(e) / (a(t) * a(e - t))
};
Math.intersection = function(e, t) {
    return e.filter(function(e) {
        return -1 != t.indexOf(e)
    })
};
Math.union = function(e, t) {
    return e.concat(t).filter(function(e, t, a) {
        return a.indexOf(e) === t
    })
};
Math.difference = function(e, t) {
    return e.filter(function(e) {
        return -1 === t.indexOf(e)
    })
};
Math.nzn = function(e, t) {
    for (var a = 1, n = 0; t > n; n++)
        a *= (e - n) / (n + 1);
    return a
};
Math.precision = function(e) {
    var e = (e + "").split(".")[1];
    return e ? e.length : 0
};