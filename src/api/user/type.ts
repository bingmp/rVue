// 定义用户相关数据的ts类型
// 用户登录接口携带参数的ts类型
export interface loginFormData {
  username: string
  password: string
}

export interface dataType {
  token: string
  message: string
}

// 定义登录接口返回数据类型
export interface loginResponseData {
  code: number
  data: dataType
}

export interface userInfo {
  userId: number
  avatar: string
  username: string
  password: string
  desc: string
  roels: string[]
  buttons: string[]
  routes: string[]
  token: string
}

export interface user {
  checkUser: userInfo
}

// export interface userResponseData {
//   code: number
//   data: dataType
// }

export interface userResponseData {
  code: number
  data: user
  message: string
}
