$(document).ready(function () {
    // 返回主页
    $('.return-homepage').on('click', function () {
        location.href = 'index.html'
    });

    // 导航
    $('.type a').on('click', function () {
        $(this).siblings().removeClass('a');
        $(this).addClass('a');
    })
   
});