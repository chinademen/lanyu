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

});

// $(document).ready(function () {
//     // 初始化富文本
//     var E = window.wangEditor;

//     //导航 登陆 用户信息 其他社区跳转区 广告栏 注册 论坛区 讨论区 帖子
//     /* 导航 */
//     // $('.main-nav li').on('click', function () {
//     //     $(this).siblings('li').removeClass('active');
//     //     $(this).addClass('active');
//     // });
//     /* 导航 end */



//     /* 登陆 */
//     // 登陆
//     $('.login-btn').on('click', function () {
//         $('.main-content>div').hide();
//         $('.userinfo').show();
//         $('.other-community').show();
//         $('.gg-box').show();
//         $('.forum').show();
//     });

//     // 注册
//     $('.register-btn').on('click', function () {
//         $('.main-content>div').hide();
//         $('.login').show();
//         $('.other-community').show();
//         $('.register').show();  
//     });
//     /* 登录 end */



//     /* 用户信息 */
//     // 进入个人中心页
//     $('#go-personal-center').on('click', function () {
//         $('.main-content>div').hide();
//         $('.userinfo').show();
//         $('.other-community').show();
//         $('.personal-center').show();
//     });

//     // 退出
//     $('.logout').on('click', function () {
//         $('.main-content>div').hide();
//         $('.login').show();
//         $('.other-community').show();
//         $('.gg-box').show();
//         $('.forum').show();
//     });
//     /* 用户信息 end */



//     /* 其他社区跳转栏 */
//     // var swiper = new Swiper('.swiper-container', {
//     //     pagination: '.swiper-pagination',
//     //     slidesPerView: 6,
//     //     paginationClickable: true,
//     //     spaceBetween: 30,
//     //     freeMode: true
//     // });
//     /* 其他社区跳转栏 end */



//     /* 广告栏 */

//     /* 广告栏 end */
    


//     /* 注册 */

//     /* 注册 end */



//     /* 论坛区 */
//     // 展开/收起
//     $('.onOff').on('click', function () {
//         var $imgName = $(this).find('img').attr('src');
//         if ($imgName.indexOf('no') === -1) {
//             $(this).find('img').attr('src', './images/collapsed_yes.gif');
//         } else {
//             $(this).find('img').attr('src', './images/collapsed_no.gif');
//         }
//         $(this).siblings('.forum-list').toggle();
//     });

//     /* 论坛区 end */



//     /* 讨论区 */
//     // 分页 
//     laypage({
//         cont: 'pagination', //容器。值支持id名、原生dom对象，jquery对象,
//         pages: 100, //总页数
//         skip: true, //是否开启跳页
//         // skin: 'yahei', //加载内置皮肤，也可以直接赋值16进制颜色值，如:#c00
//         // skin: '#AF0000',
//         // skin: 'molv',
//         skin: '#393A3A',
//         groups: 7 //连续显示分页数
//     });
//     $('#atarget').on('click', function () {
//         $(this).toggleClass('atarget_1');
//     });
//     $('.details-list-nav a').on('click', function () {
//         $(this).siblings('a').removeClass('fenlei-select');
//         $(this).addClass('fenlei-select');
//     });
//     /* 讨论区 end */
  


//     /* 美色论坛 */
//     laypage({
//         cont: 'pagination2', //容器。值支持id名、原生dom对象，jquery对象,
//         pages: 100, //总页数
//         skip: true, //是否开启跳页
//         // skin: 'yahei', //加载内置皮肤，也可以直接赋值16进制颜色值，如:#c00
//         skin: '#AF0000',
//         // skin: 'molv',
//         // skin: '#393A3A',
//         groups: 7 //连续显示分页数
//     });
//     /* 美色论坛 end */ 


//     /* 帖子 */
//     // 立即回复
//     $('.return-info').on('click', function () {
//         $('#replynow').show();
//     });
//     var editor2 = new E('#wangEditor2');
//     editor2.customConfig.pasteFilterStyle = false;
//     editor2.create();
//     // 点击立即回复获取富文本内容, 发表回复
//     $('#getWangEditor2').on('click', function () {
//         var editHtml2 = editor2.txt.html();
//         $('#replynow').hide();
//     });

//     // 回复
//     var editor1 = new E('#wangEditor1');
//     // 自定义菜单配置
//     editor1.customConfig.menus = [
//         'head',  // 标题
//         'bold',  // 粗体
//         'fontSize',  // 字号
//         'fontName',  // 字体
//         'italic',  // 斜体
//         'underline',  // 下划线
//         'strikeThrough',  // 删除线
//         'foreColor',  // 文字颜色
//         'backColor',  // 背景颜色
//         'link',  // 插入链接
//         'list',  // 列表
//         'justify',  // 对齐方式
//         'quote',  // 引用
//         'emoticon',  // 表情
//         'image',  // 插入图片
//         'table',  // 表格
//         'video',  // 插入视频
//         'code',  // 插入代码
//         'undo',  // 撤销
//         'redo'  // 重复
//     ];
//     // 关闭粘贴样式的过滤
//     editor1.customConfig.pasteFilterStyle = false;
//     // 忽略粘贴内容中的图片
//     // editor1.customConfig.pasteIgnoreImg = true;
//     editor1.create();
//     // 1. 设置内容 editor1.txt.html()
//     // editor1.txt.html('<p>用 JS 设置的内容</p>');
//     // 2. 追加内容
//     // editor1.txt.append('<p>用 JS 追加的内容</p>');
//     // 3. 清空内容
//     // editor1.txt.clear();
//     // 4. 获取内容 html格式 / text格式 / json格式  需要注意的是：从编辑器中获取的 html 代码是不包含任何样式的纯 html
//     // console.log(editor1.txt.html());
//     // console.log(editor1.txt.text());
//     // console.log(editor1.txt.getJSON());

//     // 点击发表回复获取富文本内容
//     $('#getWangEditor1').on('click', function () {
//         var editHtml = editor1.txt.html();
//     });

    
//     /* 帖子 end */



//     /* 美色帖子 */
//     $('.meise-item>img').on('click', function () {
//         $('.meise-article').show();
//     });
//     $('.meise-item>span').on('click', function () {
//         $('.meise-article').show();
//     });
//     $('.meise-item>h4').on('click', function () {
//         $('.meise-article').show();
//     });
//     /* 美色帖子 end */ 



//     /* 发表新帖子 */
//     // 标题输入监听
//     $("#add-newarticle-title").bind("input propertychange change", function(event){
//         var $len = $(this).val().length;
//         var $waring = $('#newarticle-title-waring');
//         var $cite = $('#newarticle-title-waring cite');
//         // 还能输入 80 - len 个字符
//         $cite.html(80 - $len);
//         if ($len > 70) {
//             $waring.css({'color': 'red'});
//         } else {
//             $waring.css({'color': '#000'});
//         }
//     });
//     var editor3 = new E('#wangEditor3');
//     editor3.customConfig.pasteFilterStyle = false;
//     editor3.create();
//     // 点击立即回复获取富文本内容, 发表新贴
//     $('#getWangEditor3').on('click', function () {
//         var editHtml3 = editor3.txt.html();
//     });
//     /* 发表新帖子 end */



//     /* 个人中心 */
//     $('.tb li').on('click', function () {
//         // 选项卡头部切换
//         $(this).siblings().removeClass('active');
//         $(this).addClass('active');
//         // 选项卡内容切换
//         var $index = $(this).index();
//         var $tab = $('.bm>.bm_c').eq($index); 
//         $tab.siblings().hide();
//         $tab.show();
//     });
//     /* 个人中心 end */ 

   

//     // 公共方法
//     // 跳转到论坛区
//     $('.to-forum').on('click', function () {
//         $('.main-content>div').hide();
//         $('.userinfo').show();
//         $('.other-community').show();
//         $('.gg-box').show();
//         $('.forum').show();
//     });

//     // 渲染单个论坛区
//     $('.to-forum-one').on('click', function () {
//         var parent;
//         var forumBg = $(this).parent().parent('.forum-bg');
//         var swiperSlide = $(this).parent().parent('.swiper-slide');
//         // 从论坛区标题处点击
//         if (forumBg.length > 0) {
//             parent = forumBg;
//             parent.siblings().hide();
//         }
//         // 从轮播图处点击
//         if (swiperSlide.length > 0) {
//             parent = swiperSlide;
//             var $index = parent.index();
//             $('.forum-bg').siblings().hide();
//             $('.forum-bg').eq($index).show();
//         }
//         $('.forum-details').hide();
//         $('.article').hide();
//     });

//     // 跳转到讨论区
//     $('.to-forum-details').on('click', function () {
//         $('.forum').hide();
//         $('.article').hide();
//         $('.forum-details').show();
//         $('.forum-details .bankuai-name-title').text($(this).text());
//         var imgSrc = $(this).parent().parent().parent('li').find('.img-box img').attr('src');
//         $('.forum-details .icon img').attr('src', imgSrc);
//     });

//     // 跳转到美色论坛列表
//     $('.to-meise').on('click', function () {
//         $('.register').hide();
//         $('.forum').hide();
//         $('.forum-details').hide();
//         $('.article').hide();
//         $('.new-article').hide();
//         $('.personal-center').hide();
//         $('.meise').show();
//     });

//     // 跳转到帖子
//     $('.to-article').on('click', function () {
//         $('.forum').hide();
//         $('.forum-details').hide();
//         $('.article').show();
//     });

//     // 发表新帖子
//     $('.add-article-btn').on('click', function () {
//         $('.forum').hide();
//         $('.forum-details').hide();
//         $('.article').hide();
//         $('.new-article').show();
//     });
    
// })