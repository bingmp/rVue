<template>
  <el-tabs
    v-model="activeName"
    type="card"
    style="padding-left: 10px; padding-right: 10px"
  >
    <!-- tab 1 Home 页面 -->
    <el-tab-pane label="Home" name="id1">
      <!-- Home 信息 -->
      <Home />
      <!-- Home 表格 -->
      <HomeCharts />
    </el-tab-pane>
    <!-- tab 2 R shinys 页面 -->
    <el-tab-pane label="Rshinys" name="id4">
      <Rshiny />
    </el-tab-pane>
    <!-- tab 3 实验室信息页面 -->
    <el-tab-pane label="Lab. introduction" name="id5">
      <LabInfo />
    </el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// tab 1 Home 页面
import Home from './tab1_Home.vue'
// tab 1 Home 表格页面
import HomeCharts from './tab1_HomeCharts.vue'
// tab2 R shinys 页面
import Rshiny from './tab2_GraphMed.vue'
// tab3 实验室信息页面
import LabInfo from './tab3_LabInfo.vue'

// 默认激活（展示）的 tab
let activeName = ref('id1')
</script>
<script lang="ts">
export default {
  name: 'Home',
}
</script>
