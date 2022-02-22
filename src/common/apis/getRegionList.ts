/**
 *
 * @author zhangjp
 * @date  2022-02-10
 */

import { httpRequest } from '../http/httpRequest'
const theApi = '/api/sortinghat/api/common/region'

export interface RegionItem {
  id: number
  name: string
}

export async function queryRegions(id?: number): Promise<RegionItem[]> {
  const url = theApi
  const response = await httpRequest.get({
    url,
    params: {
      id: id ? id : 0,
    },
  })
  return response.data
}
