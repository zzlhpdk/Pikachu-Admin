import request from '@/utils/request';

export function gridListApi(params: any) {
  return request({
    method: 'GET',
    url: '/sino-auth/gridList',
    params,
  });
}
