<template>
  <el-tabs v-model="activeName" type="card" style="padding-right: 5px">
    <el-tab-pane label="Mycoplasma" name="id1">
      <div style="display: flex">
        <div id="mchart1" style="width: 50%; height: 400px"></div>
        <div id="mchart2" style="width: 50%; height: 400px"></div>
      </div>
      <div
        id="mchart3"
        style="height: 400px; padding-top: 2%; padding-left: 2%"
      ></div>
    </el-tab-pane>
    <el-tab-pane label="Data" name="id2">
      <iframe
        src="https://db.chcmu.com.cn/idbview/dataclinic/MMP/"
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
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'
import Mycoplasma_H_W from '@/assets/data/mycoplasma_h_w.json'
import Months from '@/assets/data/months.json'

let activeName = ref('id1')

// 图1
function initChart1() {
  const chart = echarts.init(document.getElementById('mchart1'))

  const option = {
    title: {
      text: 'Mycoplasma Genetic Resistance Mutation',
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
      left: 'center',
      top: 'bottom',
      data: ['Male', 'Female', 'Positive', 'Negative'],
    },
    series: [
      {
        name: 'Gender',
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
        data: [
          { value: 176, name: 'Male' },
          { value: 172, name: 'Female' },
        ],
      },
      {
        name: 'Mutation',
        type: 'pie',
        radius: ['50%', '75%'],
        labelLine: {
          length: 30,
        },
        data: [
          { value: 233, name: 'Positive' },
          { value: 115, name: 'Negative' },
        ],
      },
    ],
  }
  chart.setOption(option)
}
// 图2
function initChart2() {
  const chart = echarts.init(document.getElementById('mchart2'))

  const option = {
    // title: {
    //   text: "Mycoplasma Line with Mutation",
    //   left: "center",
    // },
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
      data: ['All', 'Positive', 'Negative'],
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
      data: Months,
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: 'Positive',
        type: 'line',
        // stack: "Total",
        data: [25, 41, 11, 11, 4, 7, 34, 50, 18, 14, 8, 10],
      },
      {
        name: 'Negative',
        type: 'line',
        // stack: "Total",
        data: [4, 7, 9, 11, 6, 8, 10, 8, 16, 18, 10, 8],
      },
      {
        name: 'All',
        type: 'line',
        // stack: "Total",
        data: [29, 48, 20, 22, 10, 15, 44, 58, 34, 32, 18, 18],
      },
    ],
  }
  chart.setOption(option)
}
// 图3
function initChart3() {
  const chart = echarts.init(document.getElementById('mchart3'))

  const option = {
    title: {
      text: 'Children Age & Weight',
      // subtext: "",
      left: 'center',
    },
    tooltip: {
      // trigger: "item",
      formatter: '{c}',
    },
    toolbox: {
      show: true,
      feature: {
        saveAsImage: { show: true, pixelRatio: 5 },
      },
    },
    xAxis: [
      {
        type: 'value',
        scale: true,
        axisLabel: {
          formatter: '{value} months',
        },
        splitLine: {
          show: false,
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
        scale: true,
        axisLabel: {
          formatter: '{value} kg',
        },
        splitLine: {
          show: false,
        },
      },
    ],
    series: [
      {
        symbolSize: 10,
        data: Mycoplasma_H_W,
        type: 'scatter',
      },
    ],
  }
  chart.setOption(option)
}
onMounted(() => {
  initChart1()
  initChart2()
  initChart3()
})
</script>
<script lang="ts">
export default {
  name: 'Mycoplasma',
}
</script>
