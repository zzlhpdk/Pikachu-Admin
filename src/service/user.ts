import request from '@/utils/request'

export function loginApi(data: any) {
  return request({
    method: 'POST',
    url: '/sino-auth/oauth/token/test',
    data,
  })
}
export function userInfoApi(params: any) {
  return request({
    method: 'GET',
    url: '/sino-auth/oauth/userInfo',
    params,
  })
}
