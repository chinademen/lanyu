$(document).ready(function () {
    // 返回主页
    $('.return-homepage').on('click', function () {
        location.href = 'index.html'
    });

    // 初始化富文本
    var E = window.wangEditor;
    // 回复
    var editor1 = new E('#wangEditor1');
    // 自定义菜单配置
    editor1.customConfig.menus = [
        // 'head',  // 标题
        // 'bold',  // 粗体
        // 'fontSize',  // 字号
        // 'fontName',  // 字体
        // 'italic',  // 斜体
        // 'underline',  // 下划线
        // 'strikeThrough',  // 删除线
        // 'foreColor',  // 文字颜色
        // 'backColor',  // 背景颜色
        // 'link',  // 插入链接
        // 'list',  // 列表
        // 'justify',  // 对齐方式
        // 'quote',  // 引用
        'emoticon',  // 表情
        'image',  // 插入图片
        // 'table',  // 表格
        // 'video',  // 插入视频
        // 'code',  // 插入代码
        'undo',  // 撤销
        // 'redo'  // 重复
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


    // 表情包显示
    $('.faceBtn').on('click', function () {
        $('.faceBox').toggle();
    });

    // 表情包切换
    $('.tabClick li').on('click', function () {
        var $index = $(this).index();
        $('.lineDiv').css({'transform': 'translate3d(' + ($index * 125) + 'px, 0px, 0px)', 'transition': 'all 0.1s ease-in-out 0s'});
        $('.tabCon .tabList').hide();
        $('.tabCon .tabList').eq($index).show();
    });

    // 选中表情
    // $('#needmessage')
    $('.tabList img').on('click', function () {
        var newVal = $(this)[0].outerHTML;
        var oldVal = $('#needmessage').val();
        $('#needmessage').html(newVal + oldVal);
    });
});