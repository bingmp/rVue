//创建数据相关的小仓库
import { defineStore } from 'pinia'
// import type { datasType, groupsType, selectType } from '@/api/mysqldata/type'

import {
  reqDataSets,
  // reqNormSets,
  // reqRawSets,
  reqGroupSets,
  reqClinicWhoGroup,
} from '@/api/mysqldata'

let useMysqlDataStore = defineStore('MysqlData', {
  // 小仓库存储数据
  state: () => {
    return {
      // 数据
      dataSet: [],
      // normSet: [],
      // rawSet: [],
      // 分组
      groupSet: [],
      clinicWhoGroup: [],
    }
  },
  // 异步请求
  actions: {
    async getDataSets() {
      // 登录请求
      this.dataSet = await reqDataSets()
    },
    // async getNorwSets() {
    //   // 登录请求
    //   this.normSet = await reqNormSets()
    // },
    // async getRawSets() {
    //   // 登录请求
    //   this.rawSet = await reqRawSets()
    // },
    async getGroupSets() {
      this.groupSet = await reqGroupSets()
    },
    async getClinicWhoGroup() {
      this.clinicWhoGroup = await reqClinicWhoGroup()
    },
  },
})

// 对外暴露
export default useMysqlDataStore
