<template>
  <el-tabs v-model="activeName" type="card">
    <el-tab-pane label="Data available" name="id0">
      <dataTbale />
    </el-tab-pane>
    <el-tab-pane label="Sample available" name="id1">
      <groupTbale />
    </el-tab-pane>
  </el-tabs>
</template>
<script setup lang="ts">
import { ref } from 'vue'
// 数据表
import dataTbale from './tableData.vue'
import groupTbale from './tableGroup.vue'

let activeName = ref('id0')
</script>
<style scoped>
p {
  text-align: center;
}
</style>
