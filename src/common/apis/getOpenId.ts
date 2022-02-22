/**
 *
 * @author zhangjp
 * @date  2022-02-10
 */

import { httpRequest } from '../http/httpRequest'
const theApi = '/gw/order/api/publicAccount/getOpenId'

async function getOpenId(code: string): Promise<string> {
  const openId = localStorage.getItem('homeworkOpenid') || ''
  if (openId) {
    return openId
  }
  const url = theApi
  const response = await httpRequest.get({
    url,
    params: {
      code,
    },
  })
  return response.data
}

export { getOpenId }
