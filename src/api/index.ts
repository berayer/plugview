import http from '@/utils/http'

// 用户登陆接口
export function api_login(data: any) {
  return http({
    url: '/login',
    method: 'post',
    data: data
  })
}

// 获取用户的菜单
export function api_userMenu() {
  return http({
    url: '/menu/userMenu'
  })
}
