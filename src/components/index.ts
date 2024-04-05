// 引入项目全部的全局组件
import SvgIcon from './SvgIcon/index.vue'
import Pagination from './Pagination/index.vue'
// import type { App, Component } from 'vue'
//引入element-plus提供全部图标组件
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
//全局对象
const allGloablComponent: any = { SvgIcon, Pagination }

// 对外暴露插件对象
export default {
  // 务必叫做 install 方法
  install(app: any) {
    // 注册项目全部的全局组件
    Object.keys(allGloablComponent).forEach((key: string) => {
      // 注册为全局组件
      app.component(key, allGloablComponent[key])
    })
    //将element-plus提供图标注册为全局组件
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  },
}
