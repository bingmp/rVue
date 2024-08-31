//创建数据相关的小仓库
import { defineStore } from 'pinia'
import {
  // geo数据集
  reqDataSets,
  reqDataCount,
  // geo分组
  reqGroupSets,
  reqGroupCount,

  // 临床数据(数据集和对应样本)
  reqClinicAllDataset,
  reqClinicAllGroup,
  // WHO
  reqClinicWhoGroup,
} from '@/api/mysqldata'

let useMysqlDataStore = defineStore('MysqlData', {
  // 小仓库存储数据
  state: () => {
    return {
      // 数据
      dataSet: [],
      dataCount: [],
      // 分组
      groupSet: [],
      groupCount: [],

      // 所有临床数据分组计数
      clinicAlldataset: [],
      clinicAllGroup: [],
      // WHO 数据
      clinicWhoGroup: [],
    }
  },
  // 异步请求
  actions: {
    async getDataSets() {
      // geo 数据集
      this.dataSet = await reqDataSets()
    },
    // geo 数据集计数
    async getDataCount() {
      this.dataCount = await reqDataCount()
    },
    // geo 数分组
    async getGroupSets() {
      this.groupSet = await reqGroupSets()
    },
    // geo 分组疾病计数
    async getGroupCount() {
      this.groupCount = await reqGroupCount()
    },
    // 临床数据
    // WHO 临床数据
    async getClinicWhoGroup() {
      this.clinicWhoGroup = await reqClinicWhoGroup()
    },
    async getClinicAllDataset() {
      this.clinicAlldataset = await reqClinicAllDataset()
    },
    // 所有临床数据分组
    async getClinicAllGroup() {
      this.clinicAllGroup = await reqClinicAllGroup()
    },
  },
  persist: true,
})

// 对外暴露
export default useMysqlDataStore
