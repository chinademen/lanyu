function gg(options, getPostData) {
    // const params = getPostData(options.body);
    return {
        "msg": "获取所有广告",
        "status": 0,
        "data": [
            { ggName: '广告1', imgUrl: '../../static/images/gg1.gif' },
            { ggName: '广告2', imgUrl: '../../static/images/gg2.gif' },
            { ggName: '广告3', imgUrl: '../../static/images/gg3.gif' },
            { ggName: '广告4', imgUrl: '../../static/images/gg4.gif' },
            { ggName: '广告5', imgUrl: '../../static/images/gg5.gif' },
            { ggName: '广告6', imgUrl: '../../static/images/gg6.gif' },
            { ggName: '广告7', imgUrl: '../../static/images/gg7.gif' },
            { ggName: '广告8', imgUrl: '../../static/images/gg8.gif' },
            { ggName: '广告9', imgUrl: '../../static/images/gg9.gif' },
            { ggName: '广告10', imgUrl: '../../static/images/gg10.png' },
        ]
    }
}

export default gg;