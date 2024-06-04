<template>
  <el-tabs v-model="activeName" type="card" style="padding-right: 5px">
    <el-tab-pane label="Atelectasis" name="id1">
      <div style="display: flex">
        <!-- 图1 -->
        <div id="achart1" style="width: 50%; height: 400px"></div>
        <!-- 图2 -->
        <div id="achart2" style="width: 50%; height: 400px"></div>
      </div>
      <!-- 图3 -->
      <div
        id="achart3"
        style="height: 600px; padding-top: 2%; padding-left: 2%"
      ></div>
    </el-tab-pane>
    <!-- 支原体数据表 -->
    <el-tab-pane label="Data" name="id2">
      <iframe
        src="https://db.chcmu.com.cn/idbview/dataclinic/Atelectasis/"
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
import Atelectasis_W_H from '@/assets/data/atelectasis_h_w.json'
import Atelectasis_Years from '@/assets/data/atelectasis_years.json'
import Months from '@/assets/data/months.json'

let activeName = ref('id1')

// 图1
function initChart1() {
  const chart = echarts.init(document.getElementById('achart1'))
  const option = {
    title: {
      text: 'Atelectasis',
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
      data: ['Male', 'Female', 'Spring', 'Summer', 'Autumn', 'Winter'],
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
          { value: 4697, name: 'Male' },
          { value: 3830, name: 'Female' },
        ],
      },
      {
        name: 'Season',
        type: 'pie',
        radius: ['50%', '75%'],
        labelLine: {
          length: 30,
        },
        data: [
          { value: 2038, name: 'Spring' },
          { value: 2103, name: 'Summer' },
          { value: 2110, name: 'Autumn' },
          { value: 2276, name: 'Winter' },
        ],
      },
    ],
  }
  chart.setOption(option)
}
// 图2
function initChart2() {
  const chart = echarts.init(document.getElementById('achart2'))
  const option = {
    title: {
      text: 'Seasonal Distribution',
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
      data: [
        'All',
        '2012',
        '2013',
        '2014',
        '2015',
        '2016',
        '2017',
        '2018',
        '2019',
        '2020',
        '2021',
        '2022',
      ],
    },
    grid: {
      // top: "15%",
      // left: "1%",
      // right: "1%",
      bottom: '12%',
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
    series: Atelectasis_Years,
  }
  chart.setOption(option)
}
// 图3
function initChart3() {
  const chart = echarts.init(document.getElementById('achart3'))
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
        symbolSize: 5,
        data: Atelectasis_W_H,
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
  name: 'Atelectasis',
}
</script>
