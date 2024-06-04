import axios from 'axios'
// import type { datasType, groupsType, selectType } from './type'
enum API {
  // datasets
  data_sets_URL = 'https://chcmu.com.cn/api/geo/data/datasets',
  group_data_URL = 'https://chcmu.com.cn/api/geo/data/count',
  // groupsets
  group_sets_URL = 'https://chcmu.com.cn/api/geo/group/groups',
  group_count_URL = 'https://chcmu.com.cn/api/geo/group/count',

  // 临床数据总数据集和计数
  clinic_all_dataset_URL = 'https://chcmu.com.cn/api/clinic/all/datasets',
  clinic_all_group_URL = 'https://chcmu.com.cn/api/clinic/all/groups',
  // 临床数据分组信息
  clinic_chcmu_URL = 'https://chcmu.com.cn/api/clinic/chcmu/groups',
  clinic_who_URL = 'https://chcmu.com.cn/api/clinic/who/groups',
  clinic_ncov19_URL = 'https://chcmu.com.cn/api/clinic/ncov19/byday',
}

// 获取数据信息
export const reqDataSets = () =>
  axios.get(API.data_sets_URL).then((response) => {
    return response.data
  })
// 数据集计数
export const reqDataCount = () =>
  axios.get(API.group_data_URL).then((response) => {
    return response.data
  })

// 分组信息
export const reqGroupSets = () =>
  axios.get(API.group_sets_URL).then((response) => {
    return response.data
  })
// 分组计数
export const reqGroupCount = () =>
  axios.get(API.group_count_URL).then((response) => {
    return response.data
  })

// 世界卫生组织疾病死亡率数据
export const reqClinicWhoGroup = () =>
  axios.get(API.clinic_who_URL).then((response) => {
    return response.data
  })

export const reqClinicAllDataset = () =>
  axios.get(API.clinic_all_dataset_URL).then((response) => {
    return response.data
  })

export const reqClinicAllGroup = () =>
  axios.get(API.clinic_all_group_URL).then((response) => {
    return response.data
  })
// .catch(function (error) {
//   // 处理错误情况
//   console.log(error)
// })
// 分组信息
