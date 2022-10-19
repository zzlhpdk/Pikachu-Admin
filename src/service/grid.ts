import request from '@/utils/request';
import { stringify, parse } from 'qs';

export function gridListApi(params: any) {
  return request({
    method: 'GET',
    url: `/sino-auth/gridList?${stringify(params, { indices: false })}`, //数组形式'a=b&a=c'
  });
}
