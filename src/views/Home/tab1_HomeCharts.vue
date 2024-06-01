<template>
  <div>
    <div
      id="dataChart"
      style="width: 100%; height: 400px; padding-right: 10%"
    ></div>
    <div
      id="toolsChart"
      style="width: 100%; height: 400px; padding-top: 2%; padding-right: 10%"
    ></div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import * as echarts from 'echarts'

// 图1
// // 图例 疾病名
const diseaseName = [
  'Atelectasis',
  'Mycoplasma',
  'Asthma',
  'BPD',
  'RSV',
  'Atelectasis',
  'COPD',
  'Covid-19( GEO )',
  'Covid-19( million )',
]
// 左图 数据集计数
const dataCount = [
  { value: 1, name: 'Mycoplasma' },
  { value: 1, name: 'Atelectasis' },
  { value: 41, name: 'Asthma' },
  { value: 9, name: 'BPD' },
  { value: 4, name: 'RSV' },
  { value: 1, name: 'COPD' },
  { value: 3, name: 'Covid-19( GEO )' },
  { value: 1, name: 'Covid-19( million )' },
]
// 右图 样本计数
const sampleCount = [
  { value: 348, name: 'Mycoplasma' },
  { value: 8527, name: 'Atelectasis' },
  { value: 7257, name: 'Asthma' },
  { value: 823, name: 'BPD' },
  { value: 424, name: 'RSV' },
  { value: 120, name: 'COPD' },
  { value: 1103, name: 'Covid-19( GEO )' },
  { value: 123, name: 'Covid-19( million )' },
]
// 数据展示图
function dataChart() {
  const chart = echarts.init(document.getElementById('dataChart'))
  const option = {
    title: {
      text: 'Database',
      subtext: 'Dataset & Sample',
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)',
    },
    legend: {
      left: 'center',
      top: 'bottom',
      data: diseaseName,
    },
    toolbox: {
      show: true,
      feature: {
        // mark: { show: true },
        // dataView: { show: true, readOnly: false },
        // restore: { show: true },
        saveAsImage: { show: true, pixelRatio: 5 },
      },
    },
    series: [
      {
        name: 'Dataset',
        type: 'pie',
        radius: [80, 140],
        center: ['25%', '50%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 5,
        },
        label: {
          show: true,
          position: 'inner',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 10,
            fontWeight: 'bold',
          },
        },
        // labelLine: {
        //   show: true,
        // },
        data: dataCount,
      },
      {
        name: 'Sample',
        type: 'pie',
        radius: [20, 140],
        center: ['75%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 5,
        },
        data: sampleCount,
      },
    ],
  }
  chart.setOption(option)
}

// 图2
// 图例 工具名
const toolsName = [
  'Database-link',
  'Independent',
  'Machine learning',
  'Enrichment',
  'Basic graphic',
  'Lab.tools',
  'Omics tools',
  'Clinic tools',
]
// 内圈展示数据
const toolsAll = [
  { value: 13, name: 'Database-link' },
  { value: 33, name: 'Independent' },
]
// 外圈展示数据
const toolsDetial = [
  { value: 7, name: 'Machine learning' },
  { value: 6, name: 'Enrichment' },
  { value: 10, name: 'Basic graphic' },
  { value: 3, name: 'Lab.tools' },
  { value: 9, name: 'Omics tools' },
  { value: 12, name: 'Clinic tools' },
]

// 工具展示图
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
      feature: {
        saveAsImage: { show: true, pixelRatio: 5 },
      },
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      top: 'center',
      data: toolsName,
    },
    series: [
      {
        name: 'innerChart',
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
        name: 'outerChart',
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
  dataChart()
  toolsChart()
})
</script>

<script>
export default {
  name: 'HomeCharts',
}
</script>
