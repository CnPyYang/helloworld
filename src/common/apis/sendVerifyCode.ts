/**
 *
 * @author zhangjp
 * @date  2022-02-10
 */

import { httpRequest } from '../http/httpRequest'
const theApi = '/gw/order/api/sms/sendVerifyCode'

async function sendVerifyCode(phone: string): Promise<void> {
  const url = theApi
  await httpRequest.get({
    url,
    params: {
      phone,
    },
  })
}

export { sendVerifyCode }
