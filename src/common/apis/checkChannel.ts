/**
 *
 * @author zhangjp
 * @date  2022-02-10
 */

import { httpRequest } from '../http/httpRequest'
const theApi = '/gw/order/api/channel/detail'

interface ChannelItem {
  channelCode: number
  channelName: string
}

async function checkChannel(channelCode: number): Promise<ChannelItem | null> {
  const url = theApi
  const response = await httpRequest.get({
    url,
    params: {
      channelCode,
    },
  })
  return response.data
}

export { checkChannel }
