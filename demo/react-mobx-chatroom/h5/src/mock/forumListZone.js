// 帖子分区
function forumListZone(options, getPostData) {
    const params = getPostData(options.body);
    let list = [
        {
            forumid: 1,
            title: '彩界新闻', 
            moderator: ['我是一条小青龙', 'omanikati'],
            children: [
                { logoUrl: '', title: '综合讨论区', views: 2664, introduce: '聊你所想的，所说的。', theme: '11.6万', answer: '97.6万', news: '神了！菲律宾打车，居然还有这样大家拉三等奖卡圣诞节快乐', lasttime: 1543215790732, author: 'yammy' },
                { logoUrl: '', title: '综合往期好贴', views: 9, introduce: '', theme: '7.7万', answer: '204.9万', news: '如何发展和女同事的恋情？学会爱神的箭拉三等奖拉数据的考拉数据都快来', lasttime: 1543215769853, author: '张三疯' },
                { logoUrl: '', title: '热门活动', views: 98, introduce: '为你的生活解解闷，线上线下活动齐聚博牛社区，high起来！', theme: '2.4万', answer: '2.9万', news: '的时间爱上登记卡手机打开奥斯卡来得及爱神的箭卡速度快加速度', lasttime: 1543215766589, author: '李世民' },
                { logoUrl: '', title: '本土新闻', views: 66, introduce: '聆听菲律宾大事小事,纵览当地新闻;关注政局动态,了解民生热点!', theme: '9.4万', answer: '6.9万', news: '爱神的箭阿萨德金坷垃手机打开链接阿萨德李经理', lasttime: 1543215758964, author: 'jsonabc' },
                { logoUrl: '', title: '菲国攻略', views: 166, introduce: '分享你曾经所经历的一切。', theme: '2万', answer: '34.9万', news: '格局上的痕迹西欧抽空陪我是看得见可视对讲施蒂利克', lasttime: 1543215746953, author: 'areasl' },
                { logoUrl: '', title: '求助问答', views: 1620, introduce: '发表求助扣除5新博币，用于给你提供帮助的最佳回答者。', theme: '2.7万', answer: '14.9万', news: '菲律宾哪里妹子多', lasttime: 1543215766986, author: 'kkk' }
            ]
        },
        {
            forumid: 2,
            title: '彩界问答', 
            moderator: ['李白', '李白白'],
            children: [
                { logoUrl: '', title: '旅行讨论区', views: 2664, introduce: '聊你所想的，所说的。', theme: '11.6万', answer: '97.6万', news: '神了！菲律宾打车，居然还有这样大家拉三等奖卡圣诞节快乐', lasttime: 1543215790732, author: 'yammy' },
                { logoUrl: '', title: '美食讨论区', views: 9, introduce: '', theme: '7.7万', answer: '204.9万', news: '如何发展和女同事的恋情？学会爱神的箭拉三等奖拉数据的考拉数据都快来', lasttime: 1543215769853, author: '张三疯' },
                { logoUrl: '', title: '游戏讨论区', views: 98, introduce: '为你的生活解解闷，线上线下活动齐聚博牛社区，high起来！', theme: '2.4万', answer: '2.9万', news: '的时间爱上登记卡手机打开奥斯卡来得及爱神的箭卡速度快加速度', lasttime: 1543215766589, author: '李世民' },
                { logoUrl: '', title: '体育讨论区', views: 66, introduce: '聆听菲律宾大事小事,纵览当地新闻;关注政局动态,了解民生热点!', theme: '9.4万', answer: '6.9万', news: '爱神的箭阿萨德金坷垃手机打开链接阿萨德李经理', lasttime: 1543215758964, author: 'jsonabc' },
                { logoUrl: '', title: '摄影讨论区', views: 166, introduce: '分享你曾经所经历的一切。', theme: '2万', answer: '34.9万', news: '格局上的痕迹西欧抽空陪我是看得见可视对讲施蒂利克', lasttime: 1543215746953, author: 'areasl' },
                { logoUrl: '', title: '英语讨论区', views: 1620, introduce: '发表求助扣除5新博币，用于给你提供帮助的最佳回答者。', theme: '2.7万', answer: '14.9万', news: '菲律宾哪里妹子多', lasttime: 1543215766986, author: 'kkk' }
            ]
        },
        {
            forumid: 3,
            title: '美色论坛', 
            moderator: ['七龙珠', 'sdcss'],
            children: [
                { logoUrl: '', title: '声色讨论', views: 2664, introduce: '聊你所想的，所说的。', theme: '11.6万', answer: '97.6万', news: '神了！菲律宾打车，居然还有这样大家拉三等奖卡圣诞节快乐', lasttime: 1543215790732, author: 'yammy' },
                { logoUrl: '', title: '性息体验', views: 9, introduce: '', theme: '7.7万', answer: '204.9万', news: '如何发展和女同事的恋情？学会爱神的箭拉三等奖拉数据的考拉数据都快来', lasttime: 1543215769853, author: '张三疯' },
                { logoUrl: '', title: '黑点曝光', views: 98, introduce: '为你的生活解解闷，线上线下活动齐聚博牛社区，high起来！', theme: '2.4万', answer: '2.9万', news: '的时间爱上登记卡手机打开奥斯卡来得及爱神的箭卡速度快加速度', lasttime: 1543215766589, author: '李世民' },
                { logoUrl: '', title: '藏经阁', views: 66, introduce: '聆听菲律宾大事小事,纵览当地新闻;关注政局动态,了解民生热点!', theme: '9.4万', answer: '6.9万', news: '爱神的箭阿萨德金坷垃手机打开链接阿萨德李经理', lasttime: 1543215758964, author: 'jsonabc' },
            ]
        },
        {
            forumid: 4,
            title: '经验论坛', 
            moderator: ['无厘头', '瞎几把写'],
            children: [
                { logoUrl: '', title: '换汇讨论区', views: 2664, introduce: '聊你所想的，所说的。', theme: '11.6万', answer: '97.6万', news: '神了！菲律宾打车，居然还有这样大家拉三等奖卡圣诞节快乐', lasttime: 1543215790732, author: 'yammy' },
                { logoUrl: '', title: '黄页讨论区', views: 9, introduce: '', theme: '7.7万', answer: '204.9万', news: '如何发展和女同事的恋情？学会爱神的箭拉三等奖拉数据的考拉数据都快来', lasttime: 1543215769853, author: '张三疯' },
                { logoUrl: '', title: '商业讨论区', views: 98, introduce: '为你的生活解解闷，线上线下活动齐聚博牛社区，high起来！', theme: '2.4万', answer: '2.9万', news: '的时间爱上登记卡手机打开奥斯卡来得及爱神的箭卡速度快加速度', lasttime: 1543215766589, author: '李世民' },
                { logoUrl: '', title: '二手讨论区', views: 66, introduce: '聆听菲律宾大事小事,纵览当地新闻;关注政局动态,了解民生热点!', theme: '9.4万', answer: '6.9万', news: '爱神的箭阿萨德金坷垃手机打开链接阿萨德李经理', lasttime: 1543215758964, author: 'jsonabc' },
                { logoUrl: '', title: '房屋讨论区', views: 166, introduce: '分享你曾经所经历的一切。', theme: '2万', answer: '34.9万', news: '格局上的痕迹西欧抽空陪我是看得见可视对讲施蒂利克', lasttime: 1543215746953, author: 'areasl' },
                { logoUrl: '', title: '签证讨论区', views: 1620, introduce: '发表求助扣除5新博币，用于给你提供帮助的最佳回答者。', theme: '2.7万', answer: '14.9万', news: '菲律宾哪里妹子多', lasttime: 1543215766986, author: 'kkk' }
            ]
        },
        {
            forumid: 5,
            title: '担保合作', 
            moderator: ['我掉你妹', 'zhangsan'],
            children: [
                { logoUrl: '', title: '菠菜圈讨论区', views: 2664, introduce: '聊你所想的，所说的。', theme: '11.6万', answer: '97.6万', news: '神了！菲律宾打车，居然还有这样大家拉三等奖卡圣诞节快乐', lasttime: 1543215790732, author: 'yammy' },
                { logoUrl: '', title: '股票讨论区', views: 9, introduce: '', theme: '7.7万', answer: '204.9万', news: '如何发展和女同事的恋情？学会爱神的箭拉三等奖拉数据的考拉数据都快来', lasttime: 1543215769853, author: '张三疯' },
                { logoUrl: '', title: '期货讨论区', views: 98, introduce: '为你的生活解解闷，线上线下活动齐聚博牛社区，high起来！', theme: '2.4万', answer: '2.9万', news: '的时间爱上登记卡手机打开奥斯卡来得及爱神的箭卡速度快加速度', lasttime: 1543215766589, author: '李世民' },
                { logoUrl: '', title: '东南亚讨论区', views: 66, introduce: '聆听菲律宾大事小事,纵览当地新闻;关注政局动态,了解民生热点!', theme: '9.4万', answer: '6.9万', news: '爱神的箭阿萨德金坷垃手机打开链接阿萨德李经理', lasttime: 1543215758964, author: 'jsonabc' },
                { logoUrl: '', title: '招聘讨论区', views: 166, introduce: '分享你曾经所经历的一切。', theme: '2万', answer: '34.9万', news: '格局上的痕迹西欧抽空陪我是看得见可视对讲施蒂利克', lasttime: 1543215746953, author: 'areasl' },
                { logoUrl: '', title: '求职讨论区', views: 1620, introduce: '发表求助扣除5新博币，用于给你提供帮助的最佳回答者。', theme: '2.7万', answer: '14.9万', news: '菲律宾哪里妹子多', lasttime: 1543215766986, author: 'kkk' }
            ]
        },
        {
            forumid: 6,
            title: '信誉平台', 
            moderator: ['李四', 'jsonaaa'],
            children: [
                { logoUrl: '', title: '站务公告', views: 2664, introduce: '聊你所想的，所说的。', theme: '11.6万', answer: '97.6万', news: '神了！菲律宾打车，居然还有这样大家拉三等奖卡圣诞节快乐', lasttime: 1543215790732, author: 'yammy' },
                { logoUrl: '', title: '投诉申诉', views: 9, introduce: '', theme: '7.7万', answer: '204.9万', news: '如何发展和女同事的恋情？学会爱神的箭拉三等奖拉数据的考拉数据都快来', lasttime: 1543215769853, author: '张三疯' },
                { logoUrl: '', title: '版主招募', views: 98, introduce: '为你的生活解解闷，线上线下活动齐聚博牛社区，high起来！', theme: '2.4万', answer: '2.9万', news: '的时间爱上登记卡手机打开奥斯卡来得及爱神的箭卡速度快加速度', lasttime: 1543215766589, author: '李世民' },
                { logoUrl: '', title: '建议反馈', views: 66, introduce: '聆听菲律宾大事小事,纵览当地新闻;关注政局动态,了解民生热点!', theme: '9.4万', answer: '6.9万', news: '爱神的箭阿萨德金坷垃手机打开链接阿萨德李经理', lasttime: 1543215758964, author: 'jsonabc' },
            ]
        },
        {
            forumid: 7,
            title: '信誉代理', 
            moderator: ['omg', '老干爹'],
            children: [
                { logoUrl: '', title: '灌水区', views: 2664, introduce: '聊你所想的，所说的。', theme: '11.6万', answer: '97.6万', news: '神了！菲律宾打车，居然还有这样大家拉三等奖卡圣诞节快乐', lasttime: 1543215790732, author: 'yammy' },
                { logoUrl: '', title: '乐天堂', views: 9, introduce: '', theme: '7.7万', answer: '204.9万', news: '如何发展和女同事的恋情？学会爱神的箭拉三等奖拉数据的考拉数据都快来', lasttime: 1543215769853, author: '张三疯' },
            ]
        },
        {
            forumid: 8,
            title: '合作伙伴', 
            moderator: ['咋咋咋', 'hhh'],
            children: [
                { logoUrl: '', title: '旅行讨论区', views: 2664, introduce: '聊你所想的，所说的。', theme: '11.6万', answer: '97.6万', news: '神了！菲律宾打车，居然还有这样大家拉三等奖卡圣诞节快乐', lasttime: 1543215790732, author: 'yammy' },
                { logoUrl: '', title: '美食讨论区', views: 9, introduce: '', theme: '7.7万', answer: '204.9万', news: '如何发展和女同事的恋情？学会爱神的箭拉三等奖拉数据的考拉数据都快来', lasttime: 1543215769853, author: '张三疯' },
                { logoUrl: '', title: '游戏讨论区', views: 98, introduce: '为你的生活解解闷，线上线下活动齐聚博牛社区，high起来！', theme: '2.4万', answer: '2.9万', news: '的时间爱上登记卡手机打开奥斯卡来得及爱神的箭卡速度快加速度', lasttime: 1543215766589, author: '李世民' },
                { logoUrl: '', title: '体育讨论区', views: 66, introduce: '聆听菲律宾大事小事,纵览当地新闻;关注政局动态,了解民生热点!', theme: '9.4万', answer: '6.9万', news: '爱神的箭阿萨德金坷垃手机打开链接阿萨德李经理', lasttime: 1543215758964, author: 'jsonabc' },
                { logoUrl: '', title: '摄影讨论区', views: 166, introduce: '分享你曾经所经历的一切。', theme: '2万', answer: '34.9万', news: '格局上的痕迹西欧抽空陪我是看得见可视对讲施蒂利克', lasttime: 1543215746953, author: 'areasl' },
                { logoUrl: '', title: '英语讨论区', views: 1620, introduce: '发表求助扣除5新博币，用于给你提供帮助的最佳回答者。', theme: '2.7万', answer: '14.9万', news: '菲律宾哪里妹子多', lasttime: 1543215766986, author: 'kkk' }
            ]
        },
        {
            forumid: 9,
            title: '周边业务', 
            moderator: ['小黄书', '谁看得见'],
            children: [
                { logoUrl: '', title: '声色讨论', views: 2664, introduce: '聊你所想的，所说的。', theme: '11.6万', answer: '97.6万', news: '神了！菲律宾打车，居然还有这样大家拉三等奖卡圣诞节快乐', lasttime: 1543215790732, author: 'yammy' },
                { logoUrl: '', title: '性息体验', views: 9, introduce: '', theme: '7.7万', answer: '204.9万', news: '如何发展和女同事的恋情？学会爱神的箭拉三等奖拉数据的考拉数据都快来', lasttime: 1543215769853, author: '张三疯' },
                { logoUrl: '', title: '黑点曝光', views: 98, introduce: '为你的生活解解闷，线上线下活动齐聚博牛社区，high起来！', theme: '2.4万', answer: '2.9万', news: '的时间爱上登记卡手机打开奥斯卡来得及爱神的箭卡速度快加速度', lasttime: 1543215766589, author: '李世民' },
                { logoUrl: '', title: '藏经阁', views: 66, introduce: '聆听菲律宾大事小事,纵览当地新闻;关注政局动态,了解民生热点!', theme: '9.4万', answer: '6.9万', news: '爱神的箭阿萨德金坷垃手机打开链接阿萨德李经理', lasttime: 1543215758964, author: 'jsonabc' },
            ]
        },
        {
            forumid: 10,
            title: '新开平台', 
            moderator: ['fuckaaa', 'jjjj'],
            children: [
                { logoUrl: '', title: '菠菜圈讨论区', views: 2664, introduce: '聊你所想的，所说的。', theme: '11.6万', answer: '97.6万', news: '神了！菲律宾打车，居然还有这样大家拉三等奖卡圣诞节快乐', lasttime: 1543215790732, author: 'yammy' },
                { logoUrl: '', title: '股票讨论区', views: 9, introduce: '', theme: '7.7万', answer: '204.9万', news: '如何发展和女同事的恋情？学会爱神的箭拉三等奖拉数据的考拉数据都快来', lasttime: 1543215769853, author: '张三疯' },
                { logoUrl: '', title: '期货讨论区', views: 98, introduce: '为你的生活解解闷，线上线下活动齐聚博牛社区，high起来！', theme: '2.4万', answer: '2.9万', news: '的时间爱上登记卡手机打开奥斯卡来得及爱神的箭卡速度快加速度', lasttime: 1543215766589, author: '李世民' },
                { logoUrl: '', title: '东南亚讨论区', views: 66, introduce: '聆听菲律宾大事小事,纵览当地新闻;关注政局动态,了解民生热点!', theme: '9.4万', answer: '6.9万', news: '爱神的箭阿萨德金坷垃手机打开链接阿萨德李经理', lasttime: 1543215758964, author: 'jsonabc' },
                { logoUrl: '', title: '招聘讨论区', views: 166, introduce: '分享你曾经所经历的一切。', theme: '2万', answer: '34.9万', news: '格局上的痕迹西欧抽空陪我是看得见可视对讲施蒂利克', lasttime: 1543215746953, author: 'areasl' },
                { logoUrl: '', title: '求职讨论区', views: 1620, introduce: '发表求助扣除5新博币，用于给你提供帮助的最佳回答者。', theme: '2.7万', answer: '14.9万', news: '菲律宾哪里妹子多', lasttime: 1543215766986, author: 'kkk' }
            ]
        },
        {
            forumid: 11,
            title: '招聘求职', 
            moderator: ['ooooo', 'lili'],
            children: [
                { logoUrl: '', title: '灌水区', views: 2664, introduce: '聊你所想的，所说的。', theme: '11.6万', answer: '97.6万', news: '神了！菲律宾打车，居然还有这样大家拉三等奖卡圣诞节快乐', lasttime: 1543215790732, author: 'yammy' },
                { logoUrl: '', title: '乐天堂', views: 9, introduce: '', theme: '7.7万', answer: '204.9万', news: '如何发展和女同事的恋情？学会爱神的箭拉三等奖拉数据的考拉数据都快来', lasttime: 1543215769853, author: '张三疯' },
            ]
        },
    ];
    
    // 如果前端传了分区id，返回对应的分区帖子信息 ， 默认返回所有分区帖子信息
    if (params && params.forumid && params.forumid != 'null') {
        list = [list[params.forumid - 1]]
    }

    return {
        "msg": "获取对应的贴吧分区列表",
        "status": 0,
        "data": list
    }
}

export default forumListZone;