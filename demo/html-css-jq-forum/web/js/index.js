$(document).ready(function () {
    // 导航
    $('.main-nav li').on('click', function () {
        $(this).siblings('li').removeClass('active');
        $(this).addClass('active');
    });
    // 导航 end

    // 用户信息

    // 用户信息 end

    // 广告栏

    // 广告栏 end
    
    // 注册
    $('.register-btn').on('click', function () {
        $('.register').show();
        $('.gg-box').hide();
        $('.forum').hide();
        $('.forum-details').hide();
        $('.article').hide();
    });
    // 注册 end

    // 论坛区

    // 论坛区 end

    // 登陆
    $('.login-btn').on('click', function () {
        $('.login').hide();
        $('.register').hide();
        $('.userinfo').show();
        $('.gg-box').show();
        $('.forum').show();
    });

    $('.logout').on('click', function () {
        $('.login').show();
        $('.userinfo').hide();
    });
     // 登录 end

    // 其他社区跳转栏
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 6,
        paginationClickable: true,
        spaceBetween: 30,
        freeMode: true
    });
     // 其他社区跳转栏 end

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

    // 公共方法
    // 跳转到论坛区
    $('.to-forum').on('click', function () {
        $('.article').hide();
        $('.forum-details').hide();
        $('.forum').show();
    });

    // 渲染单个论坛区
    $('.to-forum-one').on('click', function () {
        var parent;
        var forumBg = $(this).parent().parent('.forum-bg');
        var swiperSlide = $(this).parent().parent('.swiper-slide');
        // 从论坛区标题处点击
        if (forumBg.length > 0) {
            parent = forumBg;
            parent.siblings().hide();
        }
        // 从轮播图处点击
        if (swiperSlide.length > 0) {
            parent = swiperSlide;
            var $index = parent.index();
            $('.forum-bg').siblings().hide();
            $('.forum-bg').eq($index).show();
        }
        $('.forum-details').hide();
        $('.article').hide();
    });

    // 跳转到讨论区
    $('.to-forum-details').on('click', function () {
        $('.forum').hide();
        $('.article').hide();
        $('.forum-details').show();
        $('.forum-details .bankuai-name-title').text($(this).text());
        var imgSrc = $(this).parent().parent().parent('li').find('.img-box img').attr('src');
        $('.forum-details .icon img').attr('src', imgSrc);
    });

    // 跳转到帖子
    $('.to-article').on('click', function () {
        $('.forum').hide();
        $('.forum-details').hide();
        $('.article').show();
    });

    // 分页
    var cfg = {
        // 点击页码方法(必须)
        pageClickE: function(){},
        // 总数(必须) >0
        totalData: 100,
        // 当前页码(必须) >0
        pageIndex: '当前页码',
        // 每页数量 [5-50]
        pageSize: 10,
        // 显示几个按钮[5-10]
        totalBtn: 5
    }
    $('#pagenumId').pagenum(cfg);

    /*
    // ajax请求分页使用
        function getdata() {
            var para = {};
            $.post('/api/PageNumber', { para:JSON.stringify(para) }, function (data) {
            if (data.length == 0) {
                // 如果没有数据返回,可以不用生成分页条.
                return;
            }
            // 再生成新分页条
            var cfg = {
                // 这里绑定getdata方法自己
                pageClickE:function(){ getdata() },
                // 总数(必须) >0 由后端返回新的总数
                totalData:data.总数,
                // 当前页码(必须) >0 由后端返回当前页码,或者页面记住当前请求页面
                pageIndex:data.当前页码,
                // 每页数量 [5-50]
                pageSize:10,
                // 显示几个按钮[5-10]
                totalBtn:5
            }
            $('#pagenumId').pagenum(cfg);
        }
    */
})