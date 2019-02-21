// 在这里配置所有的路由组件

// 管理员信息
import Admin from '@/views/admin';

// 行业资讯
import Article from '@/views/article';

// 成功案例
import Case from '@/views/case'; 

// 鉴定攻略
import Raiders from '@/views/raiders'; 

// DNA检测
import Dna from '@/views/dna'; 

// 客户信息
import User from '@/views/user';

/**
 * @desc 路由配置
 * @param  {[Objcet]}  component  [路由对应的模块]
 * @param  {[Array]}   name       [路由对应的面包屑]
*/
export const routerConfig = {
    // 管理员信息
    '/views/admin': {
        component: Admin,
        name: ['管理员列表'],
    },
    // 行业资讯
    '/views/article': {
        component: Article,
        name: ['行业资讯'],
    },
    // 成功案例
    '/views/case': {
        component: Case,
        name: ['成功案例'],
    },
    // 鉴定攻略
    '/views/raiders': {
        component: Raiders,
        name: ['鉴定攻略'],
    },
    // DNA检测
    '/views/dna': {
        component: Dna,
        name: ['DNA检测'],
    },
    // 客户信息
    '/views/user': {
        component: User,
        name: ['客户列表'],
    }
};