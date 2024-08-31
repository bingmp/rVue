<template>
  <div style="align-items: center">
    <div
      id="geoChart"
      style="width: 100%; height: 400px; padding-right: 10%"
    ></div>
    <br />
    <div
      id="clinicChart"
      style="width: 100%; height: 400px; padding-right: 10%"
    ></div>
    <br />
    <div
      id="toolsChart"
      style="width: 100%; height: 400px; padding-top: 2%; padding-right: 10%"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import * as echarts from 'echarts'

//获取骨架的小仓库
import useLayOutSettingStore from '@/store/modules/setting'
// pinia mysql 数据
import useMysqlDataStore from '@/store/modules/mysqldata'

let layoutSettingStore = useLayOutSettingStore()

let mysqlDataStore = useMysqlDataStore()

// 一、图1 GEO 数据信息 左图 + 右图
//  1、左图数据集计数
let geoDataCount = mysqlDataStore.dataCount
// 2、右图 样本计数
const geoSampleCount = mysqlDataStore.groupCount

// 3、中间图例 疾病名
let geoDataName = geoDataCount.map((res: { [x: string]: any }) => {
  return res['name']
})

// 一、geo数据展示图
function geoChart() {
  const chart = echarts.init(document.getElementById('geoChart'))
  const option = {
    title: {
      text: 'GEO Datasets Information',
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
      data: geoDataName,
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
        data: geoDataCount,
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
        data: geoSampleCount,
      },
    ],
  }
  chart.setOption(option)
}

// 二、图2 临床数据集图
//  1、左图数据集计数
let clinicDataCount = mysqlDataStore.clinicAlldataset
// 2、右图 样本计数
const clinicSampleCount = mysqlDataStore.clinicAllGroup

// 3、中间图例 疾病名
let clinicdataName = clinicDataCount.map((res: { [x: string]: any }) => {
  return res['name']
})
// 二、临床数据展示图
function clinicChart() {
  const chart = echarts.init(document.getElementById('clinicChart'))
  const option = {
    title: {
      text: 'Clinic Datasets Information',
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
      data: clinicdataName,
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
        data: clinicDataCount,
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
        data: clinicSampleCount,
      },
    ],
  }
  chart.setOption(option)
}

// 三、图3 R shiny 数据
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
// R shiny 内圈展示数据
const toolsAll = [
  { value: 13, name: 'Database-link' },
  { value: 33, name: 'Independent' },
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

// 初始刷新数据
if (mysqlDataStore.clinicWhoGroup.length == 0) {
  setInterval(function () {
    layoutSettingStore.refsh = true
  }, 1500)
}

onMounted(() => {
  geoChart()
  clinicChart()
  toolsChart()
})
</script>

<script lang="ts">
export default {
  name: 'HomeCharts',
}
</script>
