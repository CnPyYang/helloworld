/**
 *
 * @author zhangjp
 * @date  2022-02-10
 */

import { httpRequest } from '../http/httpRequest'
const theApi = '/gw/order/api/config/orderConfig'

interface OrderPrice {
  orderPriceFen: number
}

async function orderConfig(): Promise<OrderPrice> {
  const url = theApi
  const response = await httpRequest.get({ url })
  return response.data
}

export { orderConfig }
