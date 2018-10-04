
import Football from './Sports/Football';
import Basketball from './Sports/Basketball';
import Swimming from './Sports/Swimming';
import Others from './Others';
import Music from './Hobby/Music';
import Arts from './Hobby/Arts';
import Game from './Hobby/Game';
import Computer from './Product/Computer';
import Book from './Product/Book';
import Phone from './Product/Phone';

const tabsMenu = [
    {
        key: 'Sports',
        tab: '体育',
        children: [
            { key: 'Football', tab: '足球', component: Football },
            { key: 'Basketball', tab: '篮球', component: Basketball },
            { key: 'Swimming', tab: '游泳', component: Swimming },
        ]
    },
    { key: 'Others', tab: '其它', component: Others },
    {
        key: 'Hobby',
        tab: '爱好',
        children: [
            { key: 'Music', tab: '音乐', component: Music },
            { key: 'Arts', tab: '艺术', component: Arts },
            { key: 'Game', tab: '游戏', component: Game },
        ]
    },
    {
        key: 'Product',
        tab: '产品',
        children: [
            { key: 'Computer', tab: '电脑', component: Computer },
            { key: 'Book', tab: '书籍', component: Book },
            { key: 'Phone', tab: '手机', component: Phone },
        ]
    },
];

export default tabsMenu;
