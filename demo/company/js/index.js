window.onload = function () {
    var tabs = document.querySelectorAll('.menu li'), // 目录
        menuTitle = document.getElementsByClassName('menu-title'), // 目录文字
        homePage = document.getElementById('homePage'), // 主页内容
        otherPages = document.getElementById('otherPages'); // 其他页面
   
    // 导航
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

    // 轮播
    var bannerTab = document.getElementById("bannerTab"), // 轮播控件
        bannerLi = bannerTab.getElementsByTagName("li"), // 轮播按钮
        bannerImg = document.getElementById("bannerMap").getElementsByTagName("img"), // 轮播图片
        length = bannerLi.length,
        _bannerIndex = 0;

    for (var i = 0; i < length; i++) {
        (function(i){
            bannerLi[i].onclick = function () {
                if ( _bannerIndex !== i ){
                    bannerLi[_bannerIndex].classList.remove("on");
                    bannerImg[_bannerIndex].classList.remove("on");
                    _bannerIndex = i;
                    bannerLi[_bannerIndex].classList.add("on");
                    bannerImg[_bannerIndex].classList.add("on");
                }
            };
        })(i);
    }

    // 分页
    var paganation = document.getElementsByClassName('paganation')[0], // 分页容器
        pageBtn = otherPages.querySelectorAll('.page-control'), // 分页按钮
        pageLeft = document.querySelector('#arrow_left'), // 分页左按钮
        pageRight = document.querySelector('#arrow_right'), // 分页右按钮
        _btnIndex = 0;

    (function (_btnIndex) {
        // 分页
        pageBtn.forEach(function (a, i) {
            a.addEventListener('click', function () {
                // 所有分页按钮
                pageBtn.forEach(function (item) {
                    item.style.backgroundColor = '#fff';
                });
                this.style.backgroundColor = '#FEB13D';
                _btnIndex = i;
            });
        });

        // 分页左按钮
        pageLeft.addEventListener('click', function () {
            pageBtn.forEach(function (a, i) {
                var c = getComputedStyle(a, null).backgroundColor;
                a.style.backgroundColor = '#fff';
                if ('rgba(0, 0, 0, 0)' !== c) {
                    if (_btnIndex === 0) {
                        _btnIndex = 3;
                    } else {
                        console.log(_btnIndex);
                        _btnIndex--;
                    }
                }
            });
            // console.log(_btnIndex, pageBtn[_btnIndex]);
            pageBtn[_btnIndex].style.backgroundColor = '#FEB13D';
        });

        // 分页右按钮
        pageRight.addEventListener('click', function () {
            pageBtn.forEach(function (a, i) {
                var c = getComputedStyle(a, null).backgroundColor;
                a.style.backgroundColor = '#fff';
                if ('rgba(0, 0, 0, 0)' !== c) {
                    if (_btnIndex === 3) {
                        _btnIndex = 0;
                    } else {
                        _btnIndex++;
                    }
                }
            });
            console.log(_btnIndex);
            pageBtn[_btnIndex].style.backgroundColor = '#FEB13D';
        });
    })(_btnIndex)
    

    // 分页切换监听
    function changePage(_btnIndex) {

    }

}