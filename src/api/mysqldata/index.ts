import axios from 'axios'
// import type { datasType, groupsType, selectType } from './type'
enum API {
  // datasets
  data_sets_URL = 'https://chcmu.com.cn/api/data/datasets',
  data_norm_URL = 'https://chcmu.com.cn/api/data/norm',
  data_raw_URL = 'https://chcmu.com.cn/api/data/raw',
  // groupsets
  group_sets_URL = 'https://chcmu.com.cn/api/group/groups',
  // 临床数据分组信息
  clinic_who_URL = 'https://chcmu.com.cn/api/clinic/who',
}

// 获取数据信息
export const reqDataSets = () =>
  axios.get(API.data_sets_URL).then((response) => {
    return response.data
  })
// export const reqNormSets = () =>
//   axios.get(API.data_norm_URL).then((response) => {
//     return response.data
//   })
// export const reqRawSets = () =>
//   axios.get(API.data_raw_URL).then((response) => {
//     return response.data
//   })

// 分组信息
export const reqGroupSets = () =>
  axios.get(API.group_sets_URL).then((response) => {
    return response.data
  })

// 世界卫生组织疾病死亡率数据
export const reqClinicWhoGroup = () =>
  axios.get(API.clinic_who_URL).then((response) => {
    return response.data
  })

// .catch(function (error) {
//   // 处理错误情况
//   console.log(error)
// })
// 分组信息
