<template>
  <div
    id="geoChart"
    style="width: 100%; height: 500px; padding-right: 5%"
  ></div>
  <br />
  <div>
    <p>
      {{ dataSum.sum('value') }} datasets total
      {{ sampleSum.sum('value') }}
      RNA-seq sequenced samples. All datasets were normalized using either the
      quantile method from the limma package or the variance stabilizing
      transformation (vst) method from DESeq2 for subsequent analysis.
    </p>
    <br />
    <p>
      Most of the datasets can be analyzed for machine learning after selecting
      some genes and submitting them. The "Machine Learning" analysis include
      logistic regression, conditional inference trees, random forest (RF), and
      support vector machine (SVM).
    </p>
    <br />
    <p>
      All normalized datasets can be used for limma analysis. All raw datasets
      can be used for DEseq2 analysis. The differential expression gene (DEG)
      after limma or DEseq2 analysis can be downloaded and used for subsequent
      enrichment analysis.
    </p>
    <br />
    <p>
      In order to facilitate the consistency of the user-friendly analysis, we
      uniformly organized the 8-column header description dataset and the
      9-column header description sample based on the information in the dataset
      and the sample, respectively.
    </p>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import * as echarts from 'echarts'

// pinia mysql 数据
import useMysqlDataStore from '@/store/modules/mysqldata'

let mysqlDataStore = useMysqlDataStore()

// 一、图1 GEO 数据信息 左图 + 右图
//  1、左图数据集计数
let geoDataCount = mysqlDataStore.dataCount
// 2、右图 样本计数
const geoSampleCount = mysqlDataStore.groupCount
// 求数据集和样本总计数

class fruitCollection extends Array {
  sum(key) {
    return this.reduce((a, b) => a + (b[key] || 0), 0)
  }
}

// 数据集求和
const dataSum = new fruitCollection(...geoDataCount)
// 样本求和
const sampleSum = new fruitCollection(...geoSampleCount)

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

// 初始刷新数据
onMounted(() => {
  geoChart()
})
</script>

<script lang="ts">
export default {
  name: 'HomeCharts',
}
</script>
