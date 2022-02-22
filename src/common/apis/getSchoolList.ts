/**
 *
 * @author zhangjp
 * @date  2022-02-14
 */

import { httpRequest } from '../http/httpRequest'
const theApi = '/api/sortinghat/api/common/customSchoolList'

interface getSchoolListParams {
  province: number
  city?: number
  district?: number
}

interface SchoolItem {
  id: number
  name: string
  uuid: string
}

async function getSchoolList(
  params: getSchoolListParams,
): Promise<SchoolItem[]> {
  const url = theApi
  const response = await httpRequest.get({
    url,
    params,
  })
  return response.data
}

export { getSchoolListParams, SchoolItem, getSchoolList }
