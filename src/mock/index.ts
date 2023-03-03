import { random } from 'lodash'

export const api_UserMenu = () => {
  return new Promise<any>((res) => {
    const data: GlobalMenu[] = [
      {
        path: '/home',
        title: '首页',
        icon: 'carbon:home'
      },
      {
        path: '/system',
        title: '系统管理',
        icon: 'icon-park-outline:config',
        children: [
          {
            path: '/system/user',
            title: '用户管理',
            icon: 'ph:users-three-light'
          },
          {
            path: '/system/role',
            title: '角色管理',
            icon: 'carbon:user-role'
          },
          {
            path: '/system/menu',
            title: '菜单管理',
            icon: 'gg:menu-grid-r'
          }
        ]
      }
    ]
    setTimeout(() => {
      res({
        code: 200,
        msg: '',
        data: data
      })
    }, random(3, true) * 1000)
  })
}
