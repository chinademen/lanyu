const getFuShiBalls = function(min, max, times){
    var balls = [];
    for(var i=0; i<times; i++){
        var row = [];
        for(let j=min;j<=max;j++){
            row.push({text:j, value:j, selected:false})
        }
        balls.push(row);
    }
    return balls;
}

export default {
    'wuxing':{
        'wuxing_zhixuanfushi':{
            rowTitles: ['万位', '千位', '百位', '十位', '个位'],
            rowBalls: getFuShiBalls(0,9,5),
            rowButtons: [
                {text: '全', name: 'all'},
                {text: '大', name: 'big'},
                {text: '小', name: 'small'},
                {text: '奇', name: 'odd'},
                {text: '偶', name: 'even'},
                {text: '清', name: 'clear'}
            ],
            currentBtnName: ['','','','',''],
        },

        'wuxing_zhixuanzuhe':{
            rowTitles: ['万位', '千位', '百位', '十位', '个位'],
            rowBalls: getFuShiBalls(0,9,5),
            rowButtons: [
                {text: '全', name: 'all'},
                {text: '大', name: 'big'},
                {text: '小', name: 'small'},
                {text: '奇', name: 'odd'},
                {text: '偶', name: 'even'},
                {text: '清', name: 'clear'}
            ],
            currentBtnName: ['','','','',''],
        },
    
        'wuxing_zuxuan120':{
            rowTitles: ['组选120'],
            rowBalls: getFuShiBalls(0,9,1),
            rowButtons: [
                {text: '全', name: 'all'},
                {text: '大', name: 'big'},
                {text: '小', name: 'small'},
                {text: '奇', name: 'odd'},
                {text: '偶', name: 'even'},
                {text: '清', name: 'clear'}
            ],
            currentBtnName: [''],
        },
        'wuxing_zuxuan60':{
            rowTitles: ['二重号','单号'],
            rowBalls: getFuShiBalls(0,9,2),
            rowButtons: [
                {text: '全', name: 'all'},
                {text: '大', name: 'big'},
                {text: '小', name: 'small'},
                {text: '奇', name: 'odd'},
                {text: '偶', name: 'even'},
                {text: '清', name: 'clear'}
            ],
            currentBtnName: ['', ''],
        },
        'wuxing_zuxuan30':{
            rowTitles: ['二重号','单号'],
            rowBalls: getFuShiBalls(0,9,2),
            rowButtons: [
                {text: '全', name: 'all'},
                {text: '大', name: 'big'},
                {text: '小', name: 'small'},
                {text: '奇', name: 'odd'},
                {text: '偶', name: 'even'},
                {text: '清', name: 'clear'}
            ],
            currentBtnName: ['', ''],
        },
        'wuxing_zuxuan20':{
            rowTitles: ['三重号','单号'],
            rowBalls: getFuShiBalls(0,9,2),
            rowButtons: [
                {text: '全', name: 'all'},
                {text: '大', name: 'big'},
                {text: '小', name: 'small'},
                {text: '奇', name: 'odd'},
                {text: '偶', name: 'even'},
                {text: '清', name: 'clear'}
            ],
            currentBtnName: ['', ''],
        },
        'wuxing_zuxuan10':{
            rowTitles: ['三重号','二重号'],
            rowBalls: getFuShiBalls(0,9,2),
            rowButtons: [
                {text: '全', name: 'all'},
                {text: '大', name: 'big'},
                {text: '小', name: 'small'},
                {text: '奇', name: 'odd'},
                {text: '偶', name: 'even'},
                {text: '清', name: 'clear'}
            ],
            currentBtnName: ['', ''],
        },
        'wuxing_zuxuan5':{
            rowTitles: ['四重号','单号'],
            rowBalls: getFuShiBalls(0,9,2),
            rowButtons: [
                {text: '全', name: 'all'},
                {text: '大', name: 'big'},
                {text: '小', name: 'small'},
                {text: '奇', name: 'odd'},
                {text: '偶', name: 'even'},
                {text: '清', name: 'clear'}
            ],
            currentBtnName: ['', ''],
        },
    },
    'sixing':{
        'qiansi_zhixuanfushi':{
            rowTitles: ['万位', '千位', '百位', '十位'],
            rowBalls: getFuShiBalls(0,9,4),
            rowButtons: [
                {text: '全', name: 'all'},
                {text: '大', name: 'big'},
                {text: '小', name: 'small'},
                {text: '奇', name: 'odd'},
                {text: '偶', name: 'even'},
                {text: '清', name: 'clear'}
            ],
            currentBtnName: ['','','',''],
        },
        'qiansi_zhixuanzuhe':{
            rowTitles: ['万位', '千位', '百位', '十位'],
            rowBalls: getFuShiBalls(0,9,4),
            rowButtons: [
                {text: '全', name: 'all'},
                {text: '大', name: 'big'},
                {text: '小', name: 'small'},
                {text: '奇', name: 'odd'},
                {text: '偶', name: 'even'},
                {text: '清', name: 'clear'}
            ],
            currentBtnName: ['','','',''],
        },
        'qiansi_zuxuan24':{
            rowTitles: ['组选24'],
            rowBalls: getFuShiBalls(0,9,1),
            rowButtons: [
                {text: '全', name: 'all'},
                {text: '大', name: 'big'},
                {text: '小', name: 'small'},
                {text: '奇', name: 'odd'},
                {text: '偶', name: 'even'},
                {text: '清', name: 'clear'}
            ],
            currentBtnName: [''],
        },
        'qiansi_zuxuan12':{
            rowTitles: ['二重号','单号'],
            rowBalls: getFuShiBalls(0,9,2),
            rowButtons: [
                {text: '全', name: 'all'},
                {text: '大', name: 'big'},
                {text: '小', name: 'small'},
                {text: '奇', name: 'odd'},
                {text: '偶', name: 'even'},
                {text: '清', name: 'clear'}
            ],
            currentBtnName: ['', ''],
        },
        'qiansi_zuxuan6':{
            rowTitles: ['二重号'],
            rowBalls: getFuShiBalls(0,9,1),
            rowButtons: [
                {text: '全', name: 'all'},
                {text: '大', name: 'big'},
                {text: '小', name: 'small'},
                {text: '奇', name: 'odd'},
                {text: '偶', name: 'even'},
                {text: '清', name: 'clear'}
            ],
            currentBtnName: [''],
        },
        'qiansi_zuxuan4':{
            rowTitles: ['三重号','单号'],
            rowBalls: getFuShiBalls(0,9,2),
            rowButtons: [
                {text: '全', name: 'all'},
                {text: '大', name: 'big'},
                {text: '小', name: 'small'},
                {text: '奇', name: 'odd'},
                {text: '偶', name: 'even'},
                {text: '清', name: 'clear'}
            ],
            currentBtnName: ['', ''],
        },
        'housi_zhixuanfushi':{
            rowTitles: ['千位', '百位', '十位', '个位'],
            rowBalls: getFuShiBalls(0,9,4),
            rowButtons: [
                {text: '全', name: 'all'},
                {text: '大', name: 'big'},
                {text: '小', name: 'small'},
                {text: '奇', name: 'odd'},
                {text: '偶', name: 'even'},
                {text: '清', name: 'clear'}
            ],
            currentBtnName: ['','','',''],
        },
        'housi_zhixuanzuhe':{
            rowTitles: ['千位', '百位', '十位', '个位'],
            rowBalls: getFuShiBalls(0,9,4),
            rowButtons: [
                {text: '全', name: 'all'},
                {text: '大', name: 'big'},
                {text: '小', name: 'small'},
                {text: '奇', name: 'odd'},
                {text: '偶', name: 'even'},
                {text: '清', name: 'clear'}
            ],
            currentBtnName: ['','','',''],
        },
        'housi_zuxuan24':{
            rowTitles: ['组选24'],
            rowBalls: getFuShiBalls(0,9,1),
            rowButtons: [
                {text: '全', name: 'all'},
                {text: '大', name: 'big'},
                {text: '小', name: 'small'},
                {text: '奇', name: 'odd'},
                {text: '偶', name: 'even'},
                {text: '清', name: 'clear'}
            ],
            currentBtnName: [''],
        },
        'housi_zuxuan12':{
            rowTitles: ['二重号','单号'],
            rowBalls: getFuShiBalls(0,9,2),
            rowButtons: [
                {text: '全', name: 'all'},
                {text: '大', name: 'big'},
                {text: '小', name: 'small'},
                {text: '奇', name: 'odd'},
                {text: '偶', name: 'even'},
                {text: '清', name: 'clear'}
            ],
            currentBtnName: ['', ''],
        },
        'housi_zuxuan6':{
            rowTitles: ['二重号'],
            rowBalls: getFuShiBalls(0,9,1),
            rowButtons: [
                {text: '全', name: 'all'},
                {text: '大', name: 'big'},
                {text: '小', name: 'small'},
                {text: '奇', name: 'odd'},
                {text: '偶', name: 'even'},
                {text: '清', name: 'clear'}
            ],
            currentBtnName: [''],
        },
        'housi_zuxuan4':{
            rowTitles: ['三重号','单号'],
            rowBalls: getFuShiBalls(0,9,2),
            rowButtons: [
                {text: '全', name: 'all'},
                {text: '大', name: 'big'},
                {text: '小', name: 'small'},
                {text: '奇', name: 'odd'},
                {text: '偶', name: 'even'},
                {text: '清', name: 'clear'}
            ],
            currentBtnName: ['', ''],
        },
    },
    'qiansan':{
        'qiansan_zhixuanfushi':{
            rowTitles: ['万位', '千位', '百位'],
            rowBalls: getFuShiBalls(0,9,3),
            rowButtons: [
                {text: '全', name: 'all'},
                {text: '大', name: 'big'},
                {text: '小', name: 'small'},
                {text: '奇', name: 'odd'},
                {text: '偶', name: 'even'},
                {text: '清', name: 'clear'}
            ],
            currentBtnName: ['','',''],
        },
        'qiansan_zhixuanzuhe':{
            rowTitles: ['万位', '千位', '百位'],
            rowBalls: getFuShiBalls(0,9,3),
            rowButtons: [
                {text: '全', name: 'all'},
                {text: '大', name: 'big'},
                {text: '小', name: 'small'},
                {text: '奇', name: 'odd'},
                {text: '偶', name: 'even'},
                {text: '清', name: 'clear'}
            ],
            currentBtnName: ['','',''],
        },
        'qiansan_zhixuanhezhi':{
            rowTitles: ['和值'],
            rowBalls: getFuShiBalls(0,27,1),
            rowButtons: [],
        },
        'qiansan_zhixuankuadu':{
            rowTitles: ['跨度'],
            rowBalls: getFuShiBalls(0,9,1),
            rowButtons: [
                {text: '全', name: 'all'},
                {text: '大', name: 'big'},
                {text: '小', name: 'small'},
                {text: '奇', name: 'odd'},
                {text: '偶', name: 'even'},
                {text: '清', name: 'clear'}
            ],
            currentBtnName: [''],
        },
        'qiansan_zuxuan3':{
            rowTitles: ['组三'],
            rowBalls: getFuShiBalls(0,9,1),
            rowButtons: [
                {text: '全', name: 'all'},
                {text: '大', name: 'big'},
                {text: '小', name: 'small'},
                {text: '奇', name: 'odd'},
                {text: '偶', name: 'even'},
                {text: '清', name: 'clear'}
            ],
            currentBtnName: [''],
        },
        'qiansan_zuxuan6':{
            rowTitles: ['组六'],
            rowBalls: getFuShiBalls(0,9,1),
            rowButtons: [
                {text: '全', name: 'all'},
                {text: '大', name: 'big'},
                {text: '小', name: 'small'},
                {text: '奇', name: 'odd'},
                {text: '偶', name: 'even'},
                {text: '清', name: 'clear'}
            ],
            currentBtnName: [''],
        },
        'qiansan_zuxuanhezhi':{
            rowTitles: ['和值'],
            rowBalls: getFuShiBalls(1,26,1),
            rowButtons: [],
        },
        'qiansan_zuxuanbaodan':{
            rowTitles: ['包胆'],
            rowBalls: getFuShiBalls(0,9,1),
            rowButtons: [],
        },
        'qiansan_hezhiweishu':{
            rowTitles: ['和值尾数'],
            rowBalls: getFuShiBalls(0,9,1),
            rowButtons: [],
        }
    },
    'zhongsan':{
        'zhongsan_zhixuanfushi':{
            rowTitles: ['千位', '百位', '十位'],
            rowBalls: getFuShiBalls(0,9,3),
            rowButtons: [
                {text: '全', name: 'all'},
                {text: '大', name: 'big'},
                {text: '小', name: 'small'},
                {text: '奇', name: 'odd'},
                {text: '偶', name: 'even'},
                {text: '清', name: 'clear'}
            ],
            currentBtnName: ['','',''],
        },
        'zhongsan_zhixuanzuhe':{
            rowTitles: ['千位', '百位', '十位'],
            rowBalls: getFuShiBalls(0,9,3),
            rowButtons: [
                {text: '全', name: 'all'},
                {text: '大', name: 'big'},
                {text: '小', name: 'small'},
                {text: '奇', name: 'odd'},
                {text: '偶', name: 'even'},
                {text: '清', name: 'clear'}
            ],
            currentBtnName: ['','',''],
        },
        'zhongsan_zhixuanhezhi':{
            rowTitles: ['和值'],
            rowBalls: getFuShiBalls(0,27,1),
            rowButtons: [],
        },
        'zhongsan_zhixuankuadu':{
            rowTitles: ['跨度'],
            rowBalls: getFuShiBalls(0,9,1),
            rowButtons: [
                {text: '全', name: 'all'},
                {text: '大', name: 'big'},
                {text: '小', name: 'small'},
                {text: '奇', name: 'odd'},
                {text: '偶', name: 'even'},
                {text: '清', name: 'clear'}
            ],
            currentBtnName: [''],
        },
        'zhongsan_zuxuan3':{
            rowTitles: ['组三'],
            rowBalls: getFuShiBalls(0,9,1),
            rowButtons: [
                {text: '全', name: 'all'},
                {text: '大', name: 'big'},
                {text: '小', name: 'small'},
                {text: '奇', name: 'odd'},
                {text: '偶', name: 'even'},
                {text: '清', name: 'clear'}
            ],
            currentBtnName: [''],
        },
        'zhongsan_zuxuan6':{
            rowTitles: ['组六'],
            rowBalls: getFuShiBalls(0,9,1),
            rowButtons: [
                {text: '全', name: 'all'},
                {text: '大', name: 'big'},
                {text: '小', name: 'small'},
                {text: '奇', name: 'odd'},
                {text: '偶', name: 'even'},
                {text: '清', name: 'clear'}
            ],
            currentBtnName: [''],
        },
        'zhongsan_zuxuanhezhi':{
            rowTitles: ['和值'],
            rowBalls: getFuShiBalls(1,26,1),
            rowButtons: [],
        },
        'zhongsan_zuxuanbaodan':{
            rowTitles: ['包胆'],
            rowBalls: getFuShiBalls(0,9,1),
            rowButtons: [],
        },
        'zhongsan_hezhiweishu':{
            rowTitles: ['和值尾数'],
            rowBalls: getFuShiBalls(0,9,1),
            rowButtons: [],
        }
    },
    'housan':{
        'housan_zhixuanfushi':{
            rowTitles: ['百位', '十位', '个位'],
            rowBalls: getFuShiBalls(0,9,3),
            rowButtons: [
                {text: '全', name: 'all'},
                {text: '大', name: 'big'},
                {text: '小', name: 'small'},
                {text: '奇', name: 'odd'},
                {text: '偶', name: 'even'},
                {text: '清', name: 'clear'}
            ],
            currentBtnName: ['','',''],
        },
        'housan_zhixuanzuhe':{
            rowTitles: ['百位', '十位', '个位'],
            rowBalls: getFuShiBalls(0,9,3),
            rowButtons: [
                {text: '全', name: 'all'},
                {text: '大', name: 'big'},
                {text: '小', name: 'small'},
                {text: '奇', name: 'odd'},
                {text: '偶', name: 'even'},
                {text: '清', name: 'clear'}
            ],
            currentBtnName: ['','',''],
        },
        'housan_zhixuanhezhi':{
            rowTitles: ['和值'],
            rowBalls: getFuShiBalls(0,27,1),
            rowButtons: [],
        },
        'housan_zhixuankuadu':{
            rowTitles: ['跨度'],
            rowBalls: getFuShiBalls(0,9,1),
            rowButtons: [
                {text: '全', name: 'all'},
                {text: '大', name: 'big'},
                {text: '小', name: 'small'},
                {text: '奇', name: 'odd'},
                {text: '偶', name: 'even'},
                {text: '清', name: 'clear'}
            ],
            currentBtnName: [''],
        },
        'housan_zuxuan3':{
            rowTitles: ['组三'],
            rowBalls: getFuShiBalls(0,9,1),
            rowButtons: [
                {text: '全', name: 'all'},
                {text: '大', name: 'big'},
                {text: '小', name: 'small'},
                {text: '奇', name: 'odd'},
                {text: '偶', name: 'even'},
                {text: '清', name: 'clear'}
            ],
            currentBtnName: [''],
        },
        'housan_zuxuan6':{
            rowTitles: ['组六'],
            rowBalls: getFuShiBalls(0,9,1),
            rowButtons: [
                {text: '全', name: 'all'},
                {text: '大', name: 'big'},
                {text: '小', name: 'small'},
                {text: '奇', name: 'odd'},
                {text: '偶', name: 'even'},
                {text: '清', name: 'clear'}
            ],
            currentBtnName: [''],
        },
        'housan_zuxuanhezhi':{
            rowTitles: ['和值'],
            rowBalls: getFuShiBalls(1,26,1),
            rowButtons: [],
        },
        'housan_zuxuanbaodan':{
            rowTitles: ['包胆'],
            rowBalls: getFuShiBalls(0,9,1),
            rowButtons: [],
        },
        'housan_hezhiweishu':{
            rowTitles: ['和值尾数'],
            rowBalls: getFuShiBalls(0,9,1),
            rowButtons: [],
        }
    },
    'yixing':{
        'yixing_dingweidan':{
            rowTitles: ['万位', '千位', '百位', '十位', '个位'],
            rowBalls: getFuShiBalls(0,9,5),
            rowButtons: [
                {text: '全', name: 'all'},
                {text: '大', name: 'big'},
                {text: '小', name: 'small'},
                {text: '奇', name: 'odd'},
                {text: '偶', name: 'even'},
                {text: '清', name: 'clear'}
            ],
            currentBtnName: ['','','','',''],
        }
    }
}