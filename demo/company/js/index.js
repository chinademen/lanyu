window.onload = function () {
    var tabs = document.querySelectorAll('.menu li'); // 目录
    var menuTitle = document.getElementsByClassName('menu-title'); // 目录文字
    var banner = document.getElementById('banner'); // banner
    var homePage = document.getElementById('homePage'); // 主页内容
    var otherPages = document.getElementById('otherPages'); // 其他页面
    var paganation = document.getElementsByClassName('paganation')[0]; // 分页容器
    var pageBtn = otherPages.querySelectorAll('.page-control'); // 分页按钮
    var pageLeft = document.querySelector('#arrow_left'); // 分页左按钮
    var pageRight = document.querySelector('#arrow_right'); // 分页右按钮
   
    // 目录切换
    tabs.forEach(function (a, i) {
        a.addEventListener('click', function () {
            var _this = this.querySelector('span');
            var txt = otherPages.getElementsByClassName('txt');
            var obtherTxt = document.getElementById(_this.dataset.title);
            // 导航
            Array.prototype.map.call(menuTitle, function (item) {
                item.style.color = '#fff';
            });
            _this.style.color = '#E44E27';
            
            // 其他页面的容器  
            Array.prototype.map.call(txt, function (item) {
                item.style.display = 'none';
            });

            // 主页
            if (0 === i) {
                homePage.style.display = 'block';
                otherPages.style.display = 'none';
            } else {
                // 其他页面
                homePage.style.display = 'none';
                otherPages.style.display = 'block';
                obtherTxt.style.display = 'block';
            }
            
        });
    });

    // 当前页数索引
    var _btnIndex = 0;
    // 分页
    pageBtn.forEach(function (a, i) {
        a.addEventListener('click', function () {
            // 所有分页按钮
            pageBtn.forEach(function (item) {
                item.style.backgroundColor = '#fff';
            });
            this.style.backgroundColor = '#FEB13D';
        });
    });

    // 分页左按钮
    pageLeft.addEventListener('click', function () {
        pageBtn.forEach(function (a, i) {
            var c = getComputedStyle(a, null).backgroundColor;
            if ('rgba(0, 0, 0, 0)' !== c) {
                if (i === 0) {
                    _btnIndex--;
                } else {
                    _btnIndex = 3;
                }
            }
        });
        console.log(_btnIndex);
    });

    // 分页右按钮
    pageRight.addEventListener('click', function () {
        pageBtn.forEach(function (a, i) {
            var c = getComputedStyle(a, null).backgroundColor;
            if ('rgba(0, 0, 0, 0)' !== c) {
                if (i === 0) {
                    _btnIndex++;
                } else {
                    _btnIndex = 0;
                }
            }
        });
        console.log(_btnIndex);
    });

    // 分页切换监听
    function changePage(_btnIndex) {

    }

}