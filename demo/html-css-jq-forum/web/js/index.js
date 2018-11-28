$(document).ready(function () {
    // 导航
    $('.main-nav li').on('click', function () {
        $(this).siblings('li').removeClass('active');
        $(this).addClass('active');
    });
    
    // 注册
    $('.register-btn').on('click', function () {
        $('.register').show();
        $('.gg-box').hide();
        $('.forum').hide();
        $('.forum-details').hide();
        $('.article').hide();
    });

    // 登陆
    $('.login-btn').on('click', function () {
        $('.login').hide();
        $('.register').hide();
        $('.userinfo').show();
        $('.gg-box').show();
        $('.forum').show();
    });

    // 退出
    $('.logout').on('click', function () {
        $('.login').show();
        $('.userinfo').hide();
    });

    // 其他社区跳转栏
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 6,
        paginationClickable: true,
        spaceBetween: 30,
        freeMode: true
    });

    // 展开/收起
    $('.onOff').on('click', function () {
        var imgName = $(this).find('img').attr('src');
        if (imgName.indexOf('no') === -1) {
            $(this).find('img').attr('src', './images/collapsed_yes.gif');
        } else {
            $(this).find('img').attr('src', './images/collapsed_no.gif');
        }
        $(this).siblings('.forum-list').toggle();
    });
})