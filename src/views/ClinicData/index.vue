<template>
  <el-tabs
    v-model="activeName"
    type="card"
    style="padding-left: 10px; padding-right: 10px"
  >
    <!-- tab 1 Clinic Information 页面 -->
    <!-- Clinic 图 -->
    <el-tab-pane label="Data profile" name="id1">
      <ClinicCharts />
    </el-tab-pane>
    <!-- Clinic 表格 -->
    <!-- <el-tab-pane label="Data table" name="id2">
      <ClinicCharts />
    </el-tab-pane> -->
  </el-tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// tab 1 介绍内容

// tab 1 图格内容
import ClinicCharts from './tab1_ClinicCharts.vue'

// 默认激活（展示）的 tab
let activeName = ref('id1')
</script>
<script lang="ts">
export default {
  name: 'Home',
}
</script>
