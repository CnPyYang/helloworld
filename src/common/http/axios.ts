/**
 *
 * @author zhangjp
 * @date  2022-02-09
 */

import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios'

const instance: AxiosInstance = axios.create({
  // @see https://github.com/axios/axios
  withCredentials: process.env.NODE_ENV !== 'production',
})

instance.interceptors.request.use((config: AxiosRequestConfig) => {
  const { headers } = config
  if (headers && !headers['Content-Type']) {
    headers['Content-Type'] = 'application/json; charset=UTF-8'
  }
  return config
})

instance.interceptors.response.use(
  (res: AxiosResponse) => {
    return res
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  },
)

export default instance
