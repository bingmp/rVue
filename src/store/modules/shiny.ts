//小仓库:layout组件相关配置仓库
import { defineStore } from 'pinia'

const useShinyStore = defineStore('shiny', {
  state: () => {
    return {
      id: '', // shinyTools id
      src: '', // shinyTools src
      link: '',
    }
  },
  actions: {
    Tools(src: string) {
      this.id = 'map'
      this.src = src // 'https://db.chcmu.com.cn/idbview/clinic/map/'
      this.link = '/if'
    },
  },
})

export default useShinyStore
