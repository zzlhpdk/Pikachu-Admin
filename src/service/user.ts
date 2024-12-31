import request from '@/utils/request';

export function loginApi(data: any) {
  return request({
    method: 'POST',
    url: '/pikachu/oauth/login',
    data
  });
}
export function userInfoApi(params: any) {
  return request({
    method: 'GET',
    url: '/pikachu/oauth/userInfo',
    params
  });
}
