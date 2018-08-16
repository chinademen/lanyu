// 登录
const menuData = {
    "userAccount": "马老板",
    "currentCompanyName": "小公司",
    "info1": 66,
    "info2": 99,
    "token": "a63d328bd3da43f1ac7199cf5a7ac0de",
    "menusData": [
        {
          "resourceId": 1,
          "resourceName": '首页',
          "resourceUrl": '/'
        },
        {
          "resourceId": 2,
          "resourceName": '员工管理',
          "resourceUrl": null,
          "children": [
            {
              "resourceId": 21,
              "resourceName": '员工信息列表',
              "resourceUrl": '/views/member/info',
            },
            {
              "resourceId": 22,
              "resourceName": '员工出勤详情',
              "resourceUrl": '/views/member/work',
            }
          ]
        },
        {
          "resourceId": 3,
          "resourceName": '产品管理',
          "resourceUrl": null,
          "children": [
            {
              "resourceId": 31,
              "resourceName": '医药',
              "resourceUrl": '/views/product/medical',
            },
            {
              "resourceId": 32,
              "resourceName": '图书',
              "resourceUrl": '/views/product/book',
            },
            {
              "resourceId": 33,
              "resourceName": '体育',
              "resourceUrl": '/views/product/sport',
            }
          ]
        },
        {
          "resourceId": 4,
          "resourceName": '价格管理',
          "resourceUrl": null,
          "children": [
            {
              "resourceId": 41,
              "resourceName": '价格列表',
              "resourceUrl": '/views/price/list',
            },
            {
              "resourceId": 42,
              "resourceName": '价格设置',
              "resourceUrl": '/views/price/set',
            }
          ]
        }
    ]
};

module.exports = menuData;

