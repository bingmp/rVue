<template>
  <el-tabs v-model="activeName" type="card">
    <el-tab-pane label="Data select" name="id1">
      <iframe
        src="https://db.chcmu.com.cn/idbview/machlearn/01_dataset/"
        allowfullscreen="true"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        oallowfullscreen="true"
        msallowfullscreen="true"
      />
    </el-tab-pane>

    <el-tab-pane label="Expression" name="id2">
      <iframe
        src="https://db.chcmu.com.cn/idbview/machlearn/02_expr/"
        allowfullscreen="true"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        oallowfullscreen="true"
        msallowfullscreen="true"
      />
    </el-tab-pane>
    <el-tab-pane label="Heatmap" name="id3">
      <iframe
        src="https://db.chcmu.com.cn/idbview/machlearn/03_heatmap/"
        allowfullscreen="true"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        oallowfullscreen="true"
        msallowfullscreen="true"
      />
    </el-tab-pane>
    <el-tab-pane label="pROC" name="id4">
      <iframe
        src="https://db.chcmu.com.cn/idbview/machlearn/04_pROC/"
        allowfullscreen="true"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        oallowfullscreen="true"
        msallowfullscreen="true"
      />
    </el-tab-pane>
    <el-tab-pane label="pROC mutli" name="id5">
      <iframe
        src="https://db.chcmu.com.cn/idbview/machlearn/05_pROC_mutli/"
        allowfullscreen="true"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        oallowfullscreen="true"
        msallowfullscreen="true"
      />
    </el-tab-pane>

    <el-tab-pane label="Logistic" name="id6">
      <iframe
        src="https://db.chcmu.com.cn/idbview/machlearn/06_logistic/"
        allowfullscreen="true"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        oallowfullscreen="true"
        msallowfullscreen="true"
      />
    </el-tab-pane>
    <el-tab-pane label="Dtree" name="id7">
      <iframe
        src="https://db.chcmu.com.cn/idbview/machlearn/07_dtree/"
        allowfullscreen="true"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        oallowfullscreen="true"
        msallowfullscreen="true"
      />
    </el-tab-pane>
    <el-tab-pane label="RF" name="id8">
      <iframe
        src="https://db.chcmu.com.cn/idbview/machlearn/08_RF/"
        allowfullscreen="true"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        oallowfullscreen="true"
        msallowfullscreen="true"
      />
    </el-tab-pane>
    <el-tab-pane label="SVM" name="id9">
      <iframe
        src="https://db.chcmu.com.cn/idbview/machlearn/09_SVM/"
        allowfullscreen="true"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        oallowfullscreen="true"
        msallowfullscreen="true"
      />
    </el-tab-pane>
  </el-tabs>
</template>
<script setup lang="ts">
import { ref } from 'vue'
let activeName = ref('id1')
</script>
