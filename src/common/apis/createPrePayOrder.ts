/**
 *
 * @author zhangjp
 * @date  2022-02-11
 */

import { httpRequest } from '../http/httpRequest'
const theApi = '/gw/order/api/order/createPrePayOrder'

enum OrderStatus {
  UNDER_PAY = 200,
  PAY_SUCCESS = 300,
  Fill_SUCCESS = 310,
  UNDER_REPAY = 400,
  REPAY_SUCCESS = 401,
}

interface PrePayOrderRes {
  nonceStr: string
  orderId: string
  orderStatus: OrderStatus
  paySign: string
  phone: string
  prePayId: string
  signType: string
  timestamp: string
}

interface PrePayOrderParams {
  channelCode: number
  openId: string
  orderPriceFen: number
  phone: string
  verifyCode: string
}

async function createPrePayOrder(
  params: PrePayOrderParams,
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

export { PrePayOrderParams, PrePayOrderRes, OrderStatus, createPrePayOrder }
