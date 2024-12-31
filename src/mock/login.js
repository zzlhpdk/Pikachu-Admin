import Mock from 'mockjs';

export default [
  {
    url: '/api/pikachu/oauth/login',
    method: 'post',
    response: () => {
      return {
        code: 200,
        message: 'ok',
        data: {
          access_token: Mock.mock('@guid')
        }
      };
    }
  },
  {
    url: '/api/pikachu/oauth/userInfo',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: 'ok',
        data: {
          userId: Mock.mock('@guid'),
          nickname: Mock.mock('@cname'),
          avatar: 'http://api.btstu.cn/sjtx/api.php',
          routes: [
            {
              path: 'menu',
              meta: {
                title: '菜单',
                icon: 'icon-caidan'
              },
              children: [
                {
                  meta: {
                    title: '菜单1-1'
                  },
                  path: 'menu-1',
                  children: [
                    {
                      path: 'menu-1-1',
                      element: '/Menu/Menu-1/Menu-1-1',
                      meta: {
                        title: '菜单1-1'
                      }
                    },
                    {
                      path: 'menu-1-2',
                      element: '/Menu/Menu-1/Menu-1-2',
                      hidden: true,
                      meta: {
                        title: '菜单1-2-2'
                      }
                    }
                  ]
                },
                {
                  path: 'menu-2',
                  meta: {
                    title: '菜单2',
                    icon: 'icon-caidan'
                  },
                  children: [
                    {
                      element: '/Menu/Menu-2/Menu-2-1',
                      path: 'menu-2-1',
                      meta: {
                        title: '菜单2-1',
                        icon: 'icon-caidan'
                      }
                    },
                    {
                      element: '/Menu/Menu-2/Menu-2-2',
                      path: 'menu-2-2',
                      meta: {
                        title: '菜单2-2',
                        icon: 'icon-caidan'
                      }
                    }
                  ]
                }
              ]
            },
            {
              path: 'about',
              element: '/About',
              meta: {
                title: '关于',
                icon: 'icon-guanyu'
              }
            },
            {
              path: 'system',
              meta: {
                title: '系统管理',
                icon: 'icon-xitong'
              },
              children: [
                {
                  path: 'menus',
                  element: '/System/Menus',
                  meta: {
                    title: '菜单管理'
                  }
                }
              ]
            },
            {
              path: 'gridlist',
              element: '/GridList',
              meta: {
                title: '表单列表组件',
                icon: 'icon-guanyu'
              }
            }
          ]
        }
      };
    }
  }
];
