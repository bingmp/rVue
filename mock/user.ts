//createUserList:次函数执行会返回一个数组,数组里面包含两个用户信息
function createUserList() {
  return [
    {
      userId: 1,
      avatar: '/images/avatar/doupi.jpg',
      username: 'Bingm',
      password: '123456',
      desc: 'Bingm',
      roles: ['Admin'],
      // buttons: ['cuser.detail', 'cuser.user'],
      routes: ['home'],
      token: 'Bingm Token Bingm',
    },
    {
      userId: 2,
      avatar: '/images/avatar/doupi.jpg',
      username: 'LuoTT',
      password: '123456',
      desc: 'LuoTT',
      roles: ['Admin'],
      // buttons: ['cuser.detail', 'cuser.user'],
      routes: ['home'],
      token: 'LuoTT Token',
    },
    {
      userId: 3,
      avatar: '/images/avatar/lung.gif',
      username: 'Admin',
      password: '123456',
      desc: 'Admin',
      roles: ['Admin,System admin'],
      // buttons: ['cuser.detail'],
      routes: ['home'],
      token: 'Admin Token',
    },
    {
      userId: 4,
      avatar: '/images/avatar/avatar-music.gif',
      username: 'System',
      password: '123456',
      desc: 'System admin',
      roles: ['System admin'],
      // buttons: ['cuser.detail', 'cuser.user'],
      routes: ['home'],
      token: 'System Token',
    },
    {
      userId: 5,
      avatar: '/images/avatar/lung.gif',
      username: 'User',
      password: '123456',
      desc: 'User',
      roles: ['Usern'],
      // buttons: ['cuser.detail'],
      routes: ['home'],
      token: 'User Token',
    },
  ]
}
//对外暴露一个数组:数组里面包含两个接口
//登录假的接口
//获取用户信息的假的接口
export default [
  // 用户登录接口
  {
    url: '/api/user/login', //请求地址
    method: 'post', //请求方式
    //@ts-ignore
    response: ({ body }) => {
      //获取请求体携带过来的用户名与密码
      const { username, password } = body
      //调用获取用户信息函数,用于判断是否有此用户
      const checkUser = createUserList().find(
        (item) => item.username === username && item.password === password,
      )
      //没有用户返回失败信息
      if (!checkUser) {
        return {
          code: 201,
          data: {
            message: 'incorrect admin account',
          },
        }
      }
      //如果有返回成功信息
      const { token } = checkUser
      return { code: 200, data: { token } }
    },
  },
  // 获取用户信息
  {
    url: '/api/user/info',
    method: 'get',
    response: (request: any) => {
      //获取请求头携带token
      const token = request.headers.token
      //查看用户信息是否包含有次token用户
      const checkUser = createUserList().find((item) => item.token === token)
      //没有返回失败的信息
      if (!checkUser) {
        return { code: 201, data: { message: '获取用户信息失败' } }
      }
      //如果有返回成功信息
      return { code: 200, data: { checkUser } }
    },
  },
]
