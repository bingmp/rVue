import request from '@/utils/request'
import type { loginFormData, loginResponseData, userResponseData } from './type'

enum API {
  LOGIN_URL = '/api/user/login',
  USERINFO_URL = 'api/user/info',
  // LOGOUT_URL = '/api/user/logout',
}
//登录接口
export const reqLogin = (data: loginFormData) =>
  request.post<any, loginResponseData>(API.LOGIN_URL, data)

//获取用户信息
export const reqUserInfo = () =>
  request.get<any, userResponseData>(API.USERINFO_URL)

//退出登录
// export const reqLogout = () => request.post<any, any>(API.LOGOUT_URL)
