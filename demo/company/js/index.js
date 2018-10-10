$(document).ready(function () {
    // 导航
    $('.menu li').on('click', function () {
        // 导航文字颜色
        $('.menu').find('span').css({'color': '#fff'});
        $(this).find('span').css({'color': '#E44E27'});
        // 其他页面容器切换
        $('#otherPages .txt').hide();
        if ($(this).index() === 0) {
            $('#homePage').show();
            $('#otherPages').hide();
        } else {
            $('#homePage').hide();
            $('#otherPages').show();
            $('#' + $(this).find('span').data('title')).show();
        }
    });

    // banner
    var swiperBanner = new Swiper('.swiper-banner', {
        // 左右按钮
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
        // 使用分页
        pagination: '.swiper-pagination-banner',
        paginationClickable: true,
        // 自定义分页按钮样式
        paginationBulletRender: function (swiper, index, className) {
            return '<span class="pagination-bullet-banner ' + className + '">' + (index + 1) + '</span>';
        },
        centeredSlides: true,
        // 自动循环
        autoplay: 2500,
        autoplayDisableOnInteraction: false,
        loop: true,
        // 禁止预加载所有图片
        // preloadImages: false,
        // 懒加载图片
        // lazyLoading: true,
    });
});
