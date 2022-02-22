/**
 *
 * @author zhangjp
 * @date  2022-02-10
 */

import { httpRequest } from '../http/httpRequest'
const theApi = '/gw/order/api/channel/query'

interface ChannelItem {
  channelCode: number
  channelName: string
}

async function getChannel(): Promise<ChannelItem[]> {
  const url = theApi
  const response = await httpRequest.get({
    url,
  })
  return response.data
}

export { getChannel }
