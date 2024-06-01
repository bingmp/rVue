<template>
  <el-tabs v-model="activeName" type="card" style="padding-right: 5px">
    <el-tab-pane label="Data count" name="id1">
      <div style="display: flex">
        <!-- 图2 -->
        <div id="achart2" style="width: 100%; height: 500px"></div>
      </div>
    </el-tab-pane>
    <el-tab-pane label="WHO mortality world map" name="id2">
      <iframe
        src="https://db.chcmu.com.cn/idbview/dataclinic/WHOMortality"
        allowfullscreen="true"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        oallowfullscreen="true"
        msallowfullscreen="true"
      />
    </el-tab-pane>
  </el-tabs>
</template>

<script lang="ts" setup>
import { ref, onMounted, toRaw } from 'vue'
import * as echarts from 'echarts'

// pinia mysql 数据
import useMysqlDataStore from '@/store/modules/mysqldata'
let mysqlDataStore = useMysqlDataStore()

let activeName = ref('id1')

// 图2
function initChart2() {
  // 图例名（年份）
  let whoGroup = mysqlDataStore.clinicWhoGroup
  let dataDisease = whoGroup.map((item, index) => {
    return item.name
  })

  // 获取年份
  let dataYear = Object.keys(toRaw(whoGroup[0].data))

  // 获取画图数据
  let chartData = whoGroup.map((item, index) => {
    return {
      ['name']: item.name,
      ['type']: 'line',
      ['data']: Object.values(toRaw(item.data)),
    }
  })

  const chart = echarts.init(document.getElementById('achart2'))
  const option = {
    title: {
      text: 'WHO mortality data count',
      subtext:
        'The respiratory-related mortality data from the World Health Organization (WHO) database across different years',
      left: 'center',
    },
    tooltip: {
      trigger: 'axis',
    },
    toolbox: {
      show: true,
      feature: {
        saveAsImage: { show: true, pixelRatio: 5 },
      },
    },
    legend: {
      left: 'center',
      top: 'bottom',
      data: dataDisease,
    },
    grid: {
      // top: "15%",
      // left: "1%",
      // right: "1%",
      bottom: '8%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: dataYear,
    },
    yAxis: {
      type: 'value',
    },
    series: chartData,
  }

  chart.setOption(option)
}

// 图3

onMounted(() => {
  initChart2()
  // mysqlDataStore.getClinicWhoGroup()
})
</script>
<script lang="ts">
export default {
  name: 'Atelectasis',
}
</script>
