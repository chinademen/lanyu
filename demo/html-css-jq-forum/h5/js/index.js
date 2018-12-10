$(document).ready(function () {
    // 一级导航
    $('.nav1>span').on('click',function () {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    });

    // 二级导航
    var swiper = new Swiper('.nav2', {
        pagination: {
            el: '.swiper-pagination',
            type : 'progressbar'
        },
        slidesPerView: 5,
        paginationClickable: true,
        spaceBetween: 5,
        freeMode: true
    });

    $('.swiper-slide').on('click', function () {
        var $index = $(this).index();
        if ($index !== 2) {
            location.href = 'list.html';
        } else {
            location.href = 'meise.html';
        }
    });

    $('.zd-banner section').on('click', function () {
        location.href = 'article.html'; 
    });

    $('.newbz-card').on('click',function () {
        location.href = 'article.html'; 
    });

    $('.guide-tiezi .common').on('click',function () {
        location.href = 'article.html'; 
    });

    // 底部导航
    $('#footbar li').on('click', function () {
        $(this).siblings().removeClass('a');
        $(this).addClass('a');
        var $index = $(this).index();
        // 切换页面
        $('.hash-page').hide();
        $('.hash-page').eq($index).show();
        // 回到顶部
        if ($('html').scrollTop()) {
            $('html').animate({ scrollTop: 0 }, 1);
            return false;
        }
        $('body').animate({ scrollTop: 0 }, 1);
    });

    // 热帖导航
    $('#thread_types>li').on('click', function () {
        $(this).siblings().removeClass('a');
        $(this).addClass('a');
        // 没有帖子的时候显示
        if ($(this).index() === 3) {
            $('#threadlist').find('tbody').hide();
            $('#threadlist').find('tbody:last-child').show();
        } else {
            $('#threadlist').find('tbody').show();
            $('#threadlist').find('tbody:last-child').hide();
        }
    });
    // 选择页数
    $('#hotpage .dumppage').on('change', function () {
        var page = $(this).children('option:selected').val();
        $('#hotpage .currentPage').text('第' + page + '页');
    });
    // 上一页
    $('#hotpage .prevPage').on('click', function () {
        var currentPage = $('#hotpage .dumppage').children('option:selected').val();
        if (currentPage > 1) {
            var page = (currentPage - 0 - 1);
            $('#hotpage .dumppage').find("option[value = '" + page + "']").attr("selected","selected");
            $('#hotpage .currentPage').text('第' + page + '页');
        }
    });
    // 下一页
    $('#hotpage .nextPage').on('click', function () {
        var currentPage = $('#hotpage .dumppage').children('option:selected').val();
        var totalPage = $('#hotpage .dumppage').children('option').length;
        if (currentPage < totalPage) {
            var page = parseInt(currentPage) + 1;
            $('#hotpage .dumppage').find("option[value = '" + page + "']").attr("selected","selected");
            $('#hotpage .currentPage').text('第' + page + '页');
        }
    });



    // 论坛
    $('.subforumshow .o').on('click', function () {
        var $em = $(this).children('em');
        if ($em.hasClass('icon-on')) {
            $em.removeClass('icon-on');
            $em.addClass('icon-off');
        } else {
            $em.removeClass('icon-off');
            $em.addClass('icon-on');
        }
    });



    // 搜索导航
    // 选择页数
    $('#searchpage .dumppage').on('change', function () {
        var page = $(this).children('option:selected').val();
        $('#searchpage .currentPage').text('第' + page + '页');
    });
    // 上一页
    $('#searchpage .prevPage').on('click', function () {
        var currentPage = $('#searchpage .dumppage').children('option:selected').val();
        if (currentPage > 1) {
            var page = (currentPage - 0 - 1);
            $('#searchpage .dumppage').find("option[value = '" + page + "']").attr("selected","selected");
            $('#searchpage .currentPage').text('第' + page + '页');
        }
    });
    // 下一页
    $('#searchpage .nextPage').on('click', function () {
        var currentPage = $('#searchpage .dumppage').children('option:selected').val();
        var totalPage = $('#searchpage .dumppage').children('option').length;
        if (currentPage < totalPage) {
            var page = parseInt(currentPage) + 1;
            $('#searchpage .dumppage').find("option[value = '" + page + "']").attr("selected","selected");
            $('#searchpage .currentPage').text('第' + page + '页');
        }
    });

    // 登录成功
    $('#login_btn').on('click', function () {
        $('#login').hide();
        $('#myprofile').show();
        returnUserInfo();
    });

    // 用户注册
    $('#to_register').on('click', function () {
        $('#login').hide();
        $('#register').show();
    });
    
    // 注册成功
    $('#register').on('click', function () {
        $('#register_success').show();
        $('#mask').show();
        var times1 = setTimeout(function () {
            registerSuccess();
        }, 3000);
        $('#register_success a').on('click', function () {
            clearTimeout(times1);
            registerSuccess();
        });
    });
    function registerSuccess() {
        $('#register_success').hide();
        $('#mask').hide();
        $('#register').hide();
        $('#login').show();
    }

    // 注册去登录页面
    $('#to_login').on('click', function () {
        $('#register').hide();
        $('#login').show();
    });

    // 退出
    $('#logout').on('click', function () {
        $('#myprofile').hide();
        $('#login').show();
    });

    // 我的 .myinfo-item
    $('.myinfo_list li').on('click', function () {
        var $index = $(this).index();
        $('.myinfo-item').siblings().hide();
        $('.myinfo-item').eq($index).show();
        // 头部导航显示
        $('.user_avatar_h').show();
        // 我的资料
        if ($index === 0) {
            $('.user_avatar').show();
            $('.user_avatar_h a').css({'color': '#fff'});
        } else {
            $('.user_avatar').hide();
            $('.user_avatar_h a').css({'color': '#1890ff'});
        }
        // 我的收藏
        if ($index === 1) {
            $('.user_avatar_h_l').css({'background-color': '#fff'});
            $('.user_avatar_h_r').css({'background-color': '#fff'});
        } else {
            $('.user_avatar_h_l').css({'background-color': 'inherit'});
            $('.user_avatar_h_r').css({'background-color': 'inherit'});
        }
    });
    // 返回我的资料 主页
    $('.return-userinfo').on('click', function () {
        returnUserInfo();
    });
    function returnUserInfo() {
        $('.user_avatar_h').hide();
        $('.user_avatar').hide();
        $('.myinfo-item').hide();
        $('.user_avatar').show();
        $('.myinfo_list').show();
    }
    // 返回首页
    $('.return-homepage').on('click', function () {
        // 底部导航
        $('#footbar li').removeClass('a');
        $('#footbar li').eq(0).addClass('a');
        // 切换页面
        $('.hash-page').hide();
        $('.hash-page').eq(0).show();
    });
    // 我的搜藏
    $('#soucang-list li').on('click', function () {
        var $index = $(this).index();
        $(this).siblings().removeClass('a');
        $('#soucang-list li').eq($index).addClass('a');
    })
});