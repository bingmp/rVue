<template>
  <div
    id="dataChart"
    style="width: 100%; height: 500px; padding-right: 5%"
  ></div>
  <br />

  <div>
    <p>
      Clinical data were gathered from various sources, including the CHCMU,
      World Health Organization (WHO).
    </p>
    <br />
    <p>GitHub: 380920 recods totaling 127 million cases of nCovid-19;</p>
    <br />
    <p>
      CHCMU: 8527 samples of atelectasis, and 348 samples of mycoplasma genetic
      resistance mutation related;
    </p>
    <br />
    <p>
      WHO: 2424624 samples of disease mortality for asthma, chronic obstructive
      pulmonary disease (COPD), Covid19, lower birth weight, lower respiratory
      infections, protein energy malnutrition, tuberculosis, upper respiratory
      infections, and other respiratory diseases from World Health Organization.
    </p>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import * as echarts from 'echarts'

// pinia mysql 数据
import useMysqlDataStore from '@/store/modules/mysqldata'
let mysqlDataStore = useMysqlDataStore()

// 图1 左图 + 右图
//  1、左图数据集计数
let dataCount = mysqlDataStore.clinicAlldataset
// 2、右图 样本计数
const sampleCount = mysqlDataStore.clinicAllGroup

// 3、中间图例 疾病名
let dataName = dataCount.map((res: { [x: string]: any }) => {
  return res['name']
})

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
      data: dataName,
    },
    toolbox: {
      show: true,
      // feature: {
      //   mark: { show: true },
      //   dataView: { show: true, readOnly: false },
      //   restore: { show: true },
      //   saveAsImage: { show: true, pixelRatio: 5 },
      // },
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

// 初始刷新数据
onMounted(() => {
  mysqlDataStore.getClinicAllGroup()
  mysqlDataStore.getClinicAllDataset()
  dataChart()
})
</script>

<script lang="ts">
export default {
  name: 'HomeCharts',
}
</script>
