// 在这里配置所有的路由组件

// 管理员信息
import Admin from '@/views/admin';

// 文章信息
import Article from '@/views/article'; 

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
    // 文章信息
    '/views/article': {
        component: Article,
        name: ['文章列表'],
    },
    // 客户信息
    '/views/user': {
        component: User,
        name: ['客户列表'],
    }
};