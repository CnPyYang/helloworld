/**
 *
 * @author zhangjp
 * @date  2022-02-09
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
import qs from 'qs'
import { AxiosRequestConfig } from 'axios'
import { Toast } from 'vant'
import axios from './axios'

interface RequestOptions {
  url: string
  params?: any
  errorMessage?: string
  config?: AxiosRequestConfig
}

async function request(
  method: string,
  url: string,
  params?: any,
  errorMessage?: string,
  config?: AxiosRequestConfig,
): Promise<any> {
  try {
    if (method === 'get') {
      const getConfig = {
        ...config,
        params,
        paramsSerializer(params: any) {
          return qs.stringify(params, { arrayFormat: 'repeat' })
        },
      }
      const res = await axios.get(url, getConfig)
      const { data } = res
      if (data.resultCode === 0) {
        return data
      } else {
        throw data
      }
    }
    if (method === 'post') {
      const res = await axios.post(url, params, config)
      const { data } = res
      if (data.resultCode === 0) {
        return data
      } else {
        // 处理文件格式的返回值
        if (!data.status && config && config.responseType === 'blob') {
          return data
        }
        throw data
      }
    }
  } catch (error: any) {
    if (error.message) {
      Toast(error.message)
    } else if (errorMessage) {
      Toast(errorMessage)
    }
  }
}

export const httpRequest = {
  async get(options: RequestOptions): Promise<any> {
    const { url, params, config, errorMessage } = options
    return await request('get', url, params, errorMessage, config)
  },

  async postJSON(options: RequestOptions): Promise<any> {
    const { url, params, errorMessage, config } = options
    return await request('post', url, params, errorMessage, config)
  },

  async post(options: RequestOptions): Promise<any> {
    const { url, errorMessage, config } = options
    let { params } = options
    if (params) {
      const formData = new FormData()
      for (const key in params) {
        formData.append(key, params[key])
      }
      params = formData
    }
    return await request('post', url, params, errorMessage, config)
  },
}
