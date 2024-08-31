<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form
          class="login_form"
          :model="loginForm"
          :rules="rules"
          ref="loginForms"
        >
          <h2>Respiratory Disease Database</h2>
          <el-form-item prop="username">
            <el-input
              type="username"
              :prefix-icon="User"
              v-model="loginForm.username"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              type="password"
              :prefix-icon="Lock"
              v-model="loginForm.password"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              :loading="loading"
              class="login_btn"
              type="primary"
              size="default"
              @click="login"
            >
              Login
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import useUserStore from '@/store/modules/user'
import { ElNotification } from 'element-plus'
import setting from '@/setting'
// 引入时间
import { getTime } from '@/utils/time'

let useStore = useUserStore()
// 获取路由
let $router = useRouter()
let $route = useRoute()

let loginForm = reactive({ username: '', password: '' })

let loading = ref(false)
let loginForms = ref()
//登录按钮回调
const login = async () => {
  // 表单校验
  await loginForms.value.validate()
  // 加载效果:开始加载
  loading.value = true
  // 请求成功跳转首页
  try {
    await useStore.userLogin(loginForm)
    // 编程式导航
    let redirect: any = $route.query.redirect
    $router.push({ path: redirect || '/' })
    ElNotification({
      type: 'success',
      title: `Good ${getTime()}! ${loginForm.username}`,
      message: `Welcome to ${setting.title}`,
      position: 'bottom-right',
    })
    //登录成功加载效果也消失
    loading.value = false
  } catch (error) {
    // 登录失败，加载效果消失
    loading.value = false
    let redirect: any = $route.query.redirect
    $router.push({ path: redirect || '/' })
    ElNotification({
      type: 'error',
      message: (error as Error).message,
    })
  }
}

//自定义校验规则函数
//@ts-ignore
const validatorUserName = {}
// const validatorUserName = (rule: any, value: any, callback: any) => {
//   //rule:即为校验规则对象
//   //value:即为表单元素文本内容
//   //函数:如果符合条件callBack放行通过即为
//   //如果不符合条件callBack方法,注入错误提示信息
//   if (value === '') {
//     callback(new Error('Please input the password'))
//   }
//   if (value.length >= 5 && value.length <= 10) {
//     callback()
//   } else {
//     callback(new Error('Length should be 5 to 10'))
//   }
// }
//@ts-ignore

const validatorPassword = {}
// const validatorPassword = (rule: any, value: any, callback: any) => {
//   if (value === '') {
//     callback(new Error('Please input the password'))
//   }
//   if (value.length >= 5 && value.length <= 10) {
//     callback()
//   } else {
//     callback(new Error('Length should be 5 to 10'))
//   }
// }

const rules = {
  username: [{ trigger: 'blur', validator: validatorUserName }],
  password: [{ trigger: 'blur', validator: validatorPassword }],
}
</script>

<style scoped lang="scss">
.login_container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;

  .login_form {
    position: relative;
    width: 80%;
    top: 30vh;
    background: url('@/assets/images/login_form.png') no-repeat;
    background-size: cover;
    padding: 40px;

    h1 {
      color: rgb(202, 153, 153);
      font-size: 40px;
    }

    h2 {
      font-size: 20px;
      color: rgb(202, 153, 153);
      margin: 20px 0px;
    }

    .login_btn {
      width: 100%;
    }
  }
}
</style>
