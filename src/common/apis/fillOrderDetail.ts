/**
 *
 * @author zhangjp
 * @date  2022-02-15
 */

import { httpRequest } from '../http/httpRequest'
import { PrePayOrderRes } from './createPrePayOrder'
const theApi = '/gw/order/api/order/fillOrderDetail'

interface OrderDetailParams {
  channelCode: number
  orderId: string
  phone: string
  schoolProvince: number
  schoolCity?: number
  schoolDistrict?: number
  schoolId: number
  schoolName: string
  grade: number
  className: string
  studentName: string
}

async function fillOrderDetail(
  params: OrderDetailParams,
): Promise<PrePayOrderRes> {
  const url = theApi
  const response = await httpRequest.postJSON({
    url,
    params,
    config: {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  })
  return response.data
}

export { OrderDetailParams, fillOrderDetail }
