$(document).ready(function () {
    //导航 登陆 用户信息 其他社区跳转区 广告栏 注册 论坛区 讨论区 帖子
    /* 导航 */
    $('.main-nav li').on('click', function () {
        $(this).siblings('li').removeClass('active');
        $(this).addClass('active');
    });
    /* 导航 end */



    /* 登陆 */
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



    /* 用户信息 */

    /* 用户信息 end */



    /* 其他社区跳转栏 */
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 6,
        paginationClickable: true,
        spaceBetween: 30,
        freeMode: true
    });
    /* 其他社区跳转栏 end */



    /* 广告栏 */

    /* 广告栏 end */
    


    /* 注册 */
    $('.register-btn').on('click', function () {
        $('.register').show();
        $('.gg-box').hide();
        $('.forum').hide();
        $('.forum-details').hide();
        $('.article').hide();
    });
    /* 注册 end */



    /* 论坛区 */

    /* 论坛区 end */



    /* 讨论区 */
    // 分页 
    laypage({
        cont: 'pagination', //容器。值支持id名、原生dom对象，jquery对象,
        pages: 100, //总页数
        skip: true, //是否开启跳页
        // skin: 'yahei', //加载内置皮肤，也可以直接赋值16进制颜色值，如:#c00
        // skin: '#AF0000',
        // skin: 'molv',
        skin: '#393A3A',
        groups: 7 //连续显示分页数
    });
    $('#atarget').on('click', function () {
        $(this).toggleClass('atarget_1');
    });
    $('.details-list-nav a').on('click', function () {
        $(this).siblings('a').removeClass('fenlei-select');
        $(this).addClass('fenlei-select');
    });
    /* 讨论区 end */
  


    /* 帖子 */
    // 立即回复
    $('.return-info').on('click', function () {
        $('#replynow').show();
    });
    // 富文本
    var E = window.wangEditor;
    var editor1 = new E('#wangEditor1');
    // 自定义菜单配置
    editor1.customConfig.menus = [
        'head',  // 标题
        'bold',  // 粗体
        'fontSize',  // 字号
        'fontName',  // 字体
        'italic',  // 斜体
        'underline',  // 下划线
        'strikeThrough',  // 删除线
        'foreColor',  // 文字颜色
        'backColor',  // 背景颜色
        'link',  // 插入链接
        'list',  // 列表
        'justify',  // 对齐方式
        'quote',  // 引用
        'emoticon',  // 表情
        'image',  // 插入图片
        'table',  // 表格
        'video',  // 插入视频
        'code',  // 插入代码
        'undo',  // 撤销
        'redo'  // 重复
    ];
    // 关闭粘贴样式的过滤
    editor1.customConfig.pasteFilterStyle = false;
    // 忽略粘贴内容中的图片
    // editor1.customConfig.pasteIgnoreImg = true;
    editor1.create();
    // 1. 设置内容 editor1.txt.html()
    // editor1.txt.html('<p>用 JS 设置的内容</p>');
    // 2. 追加内容
    // editor1.txt.append('<p>用 JS 追加的内容</p>');
    // 3. 清空内容
    // editor1.txt.clear();
    // 4. 获取内容 html格式 / text格式 / json格式  需要注意的是：从编辑器中获取的 html 代码是不包含任何样式的纯 html
    // console.log(editor1.txt.html());
    // console.log(editor1.txt.text());
    // console.log(editor1.txt.getJSON());

    // 点击发表回复获取富文本内容
    $('#getWangEditor1').on('click', function () {
        var editHtml = editor1.txt.html();
        console.log(editHtml);
    });

    // 立即回复
    var editor2 = new E('#wangEditor2');
    editor2.customConfig.pasteFilterStyle = false;
    editor2.create();
    // 点击立即回复获取富文本内容, 发表回复
    $('#getWangEditor2').on('click', function () {
        var editHtml2 = editor2.txt.html();
        console.log(editHtml2);
        $('#replynow').hide();
    });
    /* 帖子 end */



    

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

    


})