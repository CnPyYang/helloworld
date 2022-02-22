/**
 *
 * @author zhangjp
 * @date  2022-02-14
 */

import { httpRequest } from '../http/httpRequest'
const theApi = '/api/sortinghat/api/common/getGradeByPeriod'

interface getGradeParams {
  eduSystem: number
  period: number
}

interface GradeItem {
  code: number
  desc: string
}

async function getGradeByPeriod(params: getGradeParams): Promise<GradeItem[]> {
  const url = theApi
  const response = await httpRequest.get({
    url,
    params,
  })
  return response.data
}

export { getGradeByPeriod }
