/**
 *
 * @author zhangjp
 * @date  2022-02-10
 */

import { SignatureInfo } from '@/utils/wechatConfig'
import { httpRequest } from '@/common/http/httpRequest'

const theApi = '/gw/order/api/config/weixinPublicSignatureInfo'

async function getWeixinConfig(sourceUrl: string): Promise<SignatureInfo> {
  const url = theApi
  const response = await httpRequest.get({
    url,
    params: { sourceUrl },
  })
  return response.data
}

export { getWeixinConfig }
