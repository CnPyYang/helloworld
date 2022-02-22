/**
 *
 * @author zhangjp
 * @date  2022-02-14
 */

import { httpRequest } from '../http/httpRequest'
import { RegionItem } from './getRegionList'
const theApi = '/api/sortinghat/api/common/period'

async function getPeriod(): Promise<RegionItem[]> {
  const url = theApi
  const response = await httpRequest.get({ url })
  return response.data
}

export { getPeriod }
