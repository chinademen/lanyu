// 在这里配置所有的路由组件

// 首页
import HomePage from '@/views/HomePage/HomePage';

// 会员管理
import MemberInfo from '@/views/Member/MemberInfo';

// 网站管理
import WebSet from '@/views/Web/WebSet';

// 游戏管理
import PlaneGame from '@/views/Game/PlaneGame/PlaneGame';

/**
 * @desc 路由配置
 * @param  {[Objcet]}  component  [路由对应的模块]
 * @param  {[Array]}   name       [路由对应的面包屑]
*/
export const routerConfig = {
    // 首页
    '/': {
        component: HomePage,
        name: ['首页'],
    },
    // 会员管理
    '/views/member/info': {
        component: MemberInfo,
        name: ['会员管理', '会员信息列表'],
    },
    // 网站管理
    '/views/web/set': {
        component: WebSet,
        name: ['网站管理', '网站设置'],
    },
    // 游戏管理
    '/views/game/plane': {
        component: PlaneGame,
        name: ['游戏管理', '飞机大战'],
    }
};