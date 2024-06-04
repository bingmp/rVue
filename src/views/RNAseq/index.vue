<template>
  <el-tabs v-model="activeName" type="card">
    <el-tab-pane label="Data profile" name="id1">
      <dataCharts />
    </el-tab-pane>
    <el-tab-pane label="Datasets available" name="id2">
      <dataTbale />
    </el-tab-pane>
    <el-tab-pane label="Samples available" name="id3">
      <groupTbale />
    </el-tab-pane>
  </el-tabs>
</template>
<script setup lang="ts">
import { ref } from 'vue'
// 数据图
import dataCharts from './dataCharts.vue'
// 数据表
import dataTbale from './tableData.vue'
import groupTbale from './tableGroup.vue'

let activeName = ref('id1')
</script>
<style scoped>
p {
  text-align: center;
}
</style>
