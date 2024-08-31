<template>
  <!-- Home 信息 -->
  <Home />
  <!-- shinyCharts 图 -->
  <shinyCharts />
  <!-- <el-tabs
    v-model="activeName"
    type="card"
    style="padding-left: 10px; padding-right: 10px"
  >
    <el-tab-pane label="Home" name="id1">
      <Home />
      <shinyCharts />
    </el-tab-pane>
  </el-tabs> -->
</template>

<script setup lang="ts">
// import { ref } from 'vue'
// tab 1 Home 页面
import Home from './tab1_Home.vue'
// tab 1 Home 图表页面
import shinyCharts from './tab1_shinyToolsChart.vue'

// 默认激活（展示）的 tab
// let activeName = ref('id1')
</script>
<script lang="ts">
export default {
  name: 'Home',
}
</script>
