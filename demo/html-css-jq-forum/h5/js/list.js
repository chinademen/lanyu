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
    
    // 跳转帖子
    $('#threadlist li').on('click', function () {
        location.href = 'article.html';
    });
    
    $('.bzfdtld').on('click', function () {
        location.href = 'article.html';
    });

    // 选择页数
     $('.dumppage').on('change', function () {
        var page = $(this).children('option:selected').val();
        $('.currentPage').text('第' + page + '页');
    });
    // 上一页
    $('.prevPage').on('click', function () {
        var currentPage = $('.dumppage').children('option:selected').val();
        if (currentPage > 1) {
            var page = (currentPage - 0 - 1);
            $('.dumppage').find("option[value = '" + page + "']").attr("selected","selected");
            $('.currentPage').text('第' + page + '页');
        }
    });
    // 下一页
    $('.nextPage').on('click', function () {
        var currentPage = $('.dumppage').children('option:selected').val();
        var totalPage = $('.dumppage').children('option').length;
        if (currentPage < totalPage) {
            var page = parseInt(currentPage) + 1;
            $('.dumppage').find("option[value = '" + page + "']").attr("selected","selected");
            $('.currentPage').text('第' + page + '页');
        }
    });

    // 发帖
    $('.bz-return').on('click', function () {
        location.href = 'editor.html';
    });
});