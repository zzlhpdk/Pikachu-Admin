import request from '@/utils/request';

export function gridListApi(params: any) {
  return request({
    method: 'GET',
    url: `/pikachu/gridList`,
    params
  });
}
