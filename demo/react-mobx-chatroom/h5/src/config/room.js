// 聊天室名
export const roomMenu = [
    { name: '1-8级： 部落出生地' },
    { name: '9-12级：怒焰裂谷' },
    { name: '13-20级：影牙城堡' },
    { name: '21-45级：血色修道院' },
    { name: '45-50级：祖尔法拉克' },
    { name: '50-60级：斯坦索姆' },
    { name: '61-67级：破碎大厅' },
    { name: '68-70级：禁魔监狱' },
    { name: '70级：卡拉赞' },
    { name: '70级：祖阿曼' },
    { name: '70级：毒蛇神殿' },
    { name: '70级：风暴要塞' },
    { name: '70级：黑暗神殿' },
    { name: '70级：太阳之井高地' },
    { name: '80级：十字军的试炼' },
    { name: '80级：奥杜尔' },
    { name: '80级：冰冠城塞' }
];

// 获取所有等级图片
const requireContext = require.context('@/static/images/level', true, /^\.\/.*\.png$/);
const levelList = requireContext.keys().map(requireContext);

// 给roomMenu每个房间添加对应的Logo图标
levelList.forEach((item, index) => {
    roomMenu[index].logo = item;
});

// 聊天室列表
export const roomName = [
    '部落出生地', '怒焰裂谷', '影牙城堡', '血色修道院', '祖尔法拉克',
    '斯坦索姆', '破碎大厅', '禁魔监狱', '卡拉赞', '祖阿曼',
    '毒蛇神殿', '风暴要塞', '黑暗神殿', '太阳之井高地', 
    '十字军的试炼', '奥杜尔', '冰冠城塞'
];

// 音乐列表
export const musicName = [
    '音乐1', '音乐2', '音乐3', '音乐4', '音乐5',
    '音乐6', '音乐7', '音乐8', '音乐9', '音乐10',
];

// 好友列表
export const friendName = [
    {
        name: '玄天邪帝',
        lasttime: '8年前'
    },
    {
        name: '倚楼听风雨',
        lasttime: '8年前'
    },
    {
        name: '月影落花泪',
        lasttime: '8年前'
    },
    {
        name: '桃之夭夭安',
        lasttime: '8年前'
    },
    {
        name: '黪月临风',
        lasttime: '8年前'
    },
    {
        name: '星星的眼泪',
        lasttime: '8年前'
    },
    {
        name: '遗忘的扳手',
        lasttime: '8年前'
    },
    {
        name: '悟空哥哥',
        lasttime: '8年前'
    },
    {
        name: '雪舞冰封',
        lasttime: '8年前'
    }
];
