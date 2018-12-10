$(document).ready(function () {
    // 返回主页
    $('.return-homepage').on('click', function () {
        location.href = 'index.html'
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
        var arr = $(this).attr('src').split('/');
        var len = arr.length;
        var newVal = arr[len - 2] + '/' + arr[len - 1]; 
        var oldVal = $('#needmessage').val();
        $('#needmessage').html(newVal + ' ' + oldVal);
    });

    // 发贴
    $('#cp_postsubmit').on('click', function () {
        console.log('发帖')
    });
});