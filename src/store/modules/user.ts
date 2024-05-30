//创建用户相关的小仓库
import { defineStore } from 'pinia'
// 引入接口
// import { reqLogin, reqUserInfo, reqLogout } from '@/api/user'
import { reqLogin, reqUserInfo } from '@/api/user'
import type {
  loginFormData,
  loginResponseData,
  userResponseData,
} from '@/api/user/type'
import type { UserState } from './types/type'
// 引入操作本地存储的工具方法
import { SET_TOKEN, GET_TOKEN, REMOVE_TOKEN } from '@/utils/token'
//引入路由(常量路由)
import { constantRoute } from '@/router/routes'

let useUserStore = defineStore('User', {
  // 小仓库存储数据
  state: (): UserState => {
    return {
      token: GET_TOKEN(), // 用户唯一标识
      menuRoutes: constantRoute,
      username: '',
      avatar: '',
    }
  },
  // 异步请求
  actions: {
    // 用户登录的方法
    async userLogin(data: loginFormData) {
      // 登录请求
      let result: loginResponseData = await reqLogin(data)
      // 登录成功 200 -> token
      // 登录失败 201 -> 错误的信息
      if (result.code == 200) {
        // pinia 存储 token
        this.token = result.data.token as string
        // 本地存储
        SET_TOKEN(result.data.token as string)
        return 'ok'
      } else {
        return Promise.reject(new Error(result.data.message))
      }
    },
    //获取用户信息方法
    async userInfo() {
      let result: userResponseData = await reqUserInfo()
      if (result.code == 200) {
        this.username = result.data.checkUser.username
        this.avatar = result.data.checkUser.avatar
        return 'ok'
      } else {
        return Promise.reject(new Error(result.message))
      }
    },
    userLogout() {
      this.token = ''
      this.username = ''
      this.avatar = ''
      REMOVE_TOKEN()
    },
    adminLogin() {
      this.token = 'Admin Token'
      this.username = 'Admin'
      this.avatar = '/images/avatar/lung.gif'
      // REMOVE_TOKEN()
    },
  },
  getters: {},
})

// 对外暴露
export default useUserStore
