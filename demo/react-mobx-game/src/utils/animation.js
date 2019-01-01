// 创建一个requestAnimationFrame动画
export function createAnimation(fn, param) {
    let animation;
    // 这才是requestAnimationFrame真正的回调函数
    function callback(param) {
        fn();
        window.requestAnimationFrame(F(param));
    }
    // 创建一个中间函数，用于返回一个无参数函数, 里面是带有参数的回调函数
    function F(param) {
        return function () {
            callback(param);
        }
    }
    animation = window.requestAnimationFrame(F(param));
}

// 移除requestAnimationFrame动画
export function clearAnimation(animationName) {
    window.cancelAnimationFrame(animationName);
}