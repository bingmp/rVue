import { createApp } from 'vue'
import App from '@/App.vue'
// 引入模板的全局样式
import '@/styles/index.scss'
// 引入element-plus 样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// element-plus 国际化
// import zhCn from 'element-plus/es/locale/lang/zh-cn.mjs'
// 导入svg图标
import 'virtual:svg-icons-register'
// 全局组件
import gloablComponent from './components/index.ts'
import router from './router'
import pinia from './store'
import 'default-passive-events'

const app = createApp(App)

app.use(ElementPlus)
// app.use(ElementPlus, {
//   locale: zhCn, // element-plus 国际化
// })
app.use(gloablComponent)
app.use(router)
app.use(pinia)
// 挂载 app
import './permisstion.ts'
app.mount('#app')
