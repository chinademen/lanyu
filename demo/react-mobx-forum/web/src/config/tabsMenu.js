import Register from '@/views/MainContent/Register';
import Forum from '@/views/MainContent/Forum';
import ForumDetails from '@/views/MainContent/ForumDetails';
import Article from '@/views/MainContent/Article';


// 头部导航
export const headerMenu = ['广告合作', '人民币提现', '如何赚取人民币?', '新手帮助', '在线客服'];

// 导航
export const navMenu = ['曝光论坛', '发布曝光', '本站介绍', '广告合作', '挣点零钱', '留下足迹'];

// 动态目录 注册 | 论坛 | 讨论区 | 贴子
const viewList = [
    {
        name: 'register',
        component: Register
    },
    {
        name: 'forum',
        component: Forum
    },
    {
        name: 'forumDetails',
        component: ForumDetails
    },
    {
        name: 'article',
        component: Article
    }
];

// 论坛分类
export const category = [
    {
        title: '彩界新闻',
        children: ['栏目1', '栏目2', '栏目3', '栏目4', '栏目5', '栏目6']
    },
    {
        title: '信誉平台',
        children: ['栏目1', '栏目2', '栏目3', '栏目4', '栏目5', '栏目6']
    },
    {
        title: '招聘求职',
        children: ['栏目1', '栏目2', '栏目3', '栏目4', '栏目5', '栏目6']
    },
    {
        title: '彩界问答',
        children: ['栏目1', '栏目2', '栏目3', '栏目4', '栏目5', '栏目6']
    },
    {
        title: '信誉代理',
        children: ['栏目1', '栏目2', '栏目3', '栏目4', '栏目5', '栏目6']
    },
    {
        title: '美色论坛',
        children: ['栏目1', '栏目2', '栏目3', '栏目4', '栏目5', '栏目6']
    },
    {
        title: '合作伙伴',
        children: ['栏目1', '栏目2', '栏目3', '栏目4', '栏目5', '栏目6']
    },
    {
        title: '经验论坛',
        children: ['栏目1', '栏目2', '栏目3', '栏目4', '栏目5', '栏目6']
    },
    {
        title: '周边业务',
        children: ['栏目1', '栏目2', '栏目3', '栏目4', '栏目5', '栏目6']
    },
    {
        title: '担保合作',
        children: ['栏目1', '栏目2', '栏目3', '栏目4', '栏目5', '栏目6']
    },
    {
        title: '新开平台',
        children: ['栏目1', '栏目2', '栏目3', '栏目4', '栏目5', '栏目6']
    }
];








