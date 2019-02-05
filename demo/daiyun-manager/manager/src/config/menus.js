export const menusData = [ // 侧边栏目录树
    {
      resourceId: 1,
      iconUrl: 'user',
      resourceName: '管理员管理',
      children: [
        { resourceId: 11, resourceName: '管理员列表', resourceUrl: '/views/admin', iconUrl: 'user' }
      ]
    },
    {
      resourceId: 2,
      iconUrl: 'read',
      resourceName: '文章管理',
      children: [
        { resourceId: 21, resourceName: '文章列表', resourceUrl: '/views/article', iconUrl: 'read' }
      ]
    },
    {
      resourceId: 3,
      iconUrl: 'team',
      resourceName: '客户管理',
      children: [
        { resourceId: 31, resourceName: '客户列表', resourceUrl: '/views/user', iconUrl: 'team' }
      ]
    },
];