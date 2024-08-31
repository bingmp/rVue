<template>
  <div>
    <router-view></router-view>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
import { reqLogin } from './api/user'

// pinia mysql 数据
import useMysqlDataStore from '@/store/modules/mysqldata'
let mysqlDataStore = useMysqlDataStore()

onMounted(() => {
  reqLogin({ username: 'visitor', password: '123456' })
  // GEO 数据集
  // mysqlDataStore.getGroupSets()
  mysqlDataStore.getDataCount()

  // GEO 样本（分组）
  // mysqlDataStore.getDataSets()
  mysqlDataStore.getGroupCount()

  // 临床数据
  mysqlDataStore.getClinicAllGroup()
  mysqlDataStore.getClinicAllDataset()
  // 临床 WHO 数据
  mysqlDataStore.getClinicWhoGroup()
})
</script>
<script lang="ts">
export default {
  name: 'App',
}
</script>
<style scoped></style>
