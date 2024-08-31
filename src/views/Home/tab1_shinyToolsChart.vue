<template>
  <div style="align-items: center">
    <div
      id="toolsChart"
      style="width: 100%; height: 380px; padding-top: 1%; padding-right: 1%"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import * as echarts from 'echarts'

// 三、图3 R shiny 数据
// 图例 工具名
const toolsName = [
  'Database-link',
  'GraphMed',
  'Machine learning',
  'Enrichment',
  'Basic graphic',
  'Lab.tools',
  'Omics tools',
  'Clinic tools',
]
// R shiny 内圈展示数据
const toolsAll = [
  { value: 13, name: 'Database-link' },
  { value: 33, name: 'GraphMed' },
]
// R shiny 外圈展示数据
const toolsDetial = [
  { value: 7, name: 'Machine learning' },
  { value: 6, name: 'Enrichment' },
  { value: 10, name: 'Basic graphic' },
  { value: 3, name: 'Lab.tools' },
  { value: 9, name: 'Omics tools' },
  { value: 12, name: 'Clinic tools' },
]

// 三、图3 R shiny 工具图
function toolsChart() {
  const chart = echarts.init(document.getElementById('toolsChart'))
  const option = {
    title: {
      text: 'R shiny tools',
      // subtext: "",
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br />{b}: {c} ({d}%)',
    },
    toolbox: {
      show: true,
      // feature: {
      //   saveAsImage: { show: true, pixelRatio: 5 },
      // },
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      top: 'center',
      data: toolsName,
    },
    series: [
      {
        name: 'Categorization',
        type: 'pie',
        selectedMode: 'single',
        radius: [0, '40%'],
        label: {
          position: 'inner',
          fontSize: 15,
        },
        labelLine: {
          show: false,
        },
        data: toolsAll,
      },
      {
        name: 'Tools Detial',
        type: 'pie',
        radius: ['50%', '75%'],
        labelLine: {
          length: 30,
        },
        data: toolsDetial,
      },
    ],
  }
  chart.setOption(option)
}

onMounted(() => {
  toolsChart()
})
</script>

<script lang="ts">
export default {
  name: 'HomeCharts',
}
</script>
