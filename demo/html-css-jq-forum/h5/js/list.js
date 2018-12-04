$(document).ready(function () {
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
});