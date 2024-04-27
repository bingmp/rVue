<template>
  <el-tabs
    v-model="activeName"
    type="card"
    style="padding-right: 5px"
    @tab-click="handleClick"
  >
    <el-tab-pane label="Atelectasis" name="id1">
      <div style="display: flex">
        <div id="achart1" style="width: 50%; height: 400px"></div>
        <div id="achart2" style="width: 50%; height: 400px"></div>
      </div>
      <div
        id="achart3"
        style="height: 600px; padding-top: 2%; padding-left: 2%"
      ></div>
    </el-tab-pane>
    <el-tab-pane label="Data" name="id2">
      <iframe
        src="https://hiplotdev.hiplot.com.cn/idbview/dataclinic/Atelectasis/"
        allowfullscreen="true"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        oallowfullscreen="true"
        msallowfullscreen="true"
      />
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import * as echarts from 'echarts'
import AtelectasisData from '@/assets/data/Atelectasis.json'

export default {
  name: 'Chart',
  data() {
    return {
      activeName: 'id1',
    }
  },
  mounted() {
    this.initChart()
  },
  methods: {
    initChart() {
      const chart1 = echarts.init(document.getElementById('achart1'))
      const chart2 = echarts.init(document.getElementById('achart2'))
      const chart3 = echarts.init(document.getElementById('achart3'))

      const option1 = {
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
      chart1.setOption(option1)

      const option2 = {
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
          data: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sept',
            'Oct',
            'Nov',
            'Dec',
          ],
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            name: '2012',
            type: 'line',
            data: [0, 0, 0, 0, 0, 0, 0, 3, 30, 48, 53, 46],
          },
          {
            name: '2013',
            type: 'line',
            data: [69, 45, 63, 66, 58, 53, 37, 39, 38, 40, 33, 47],
          },
          {
            name: '2014',
            type: 'line',
            data: [57, 64, 65, 50, 51, 69, 83, 48, 38, 55, 62, 75],
          },
          {
            name: '2015',
            type: 'line',
            data: [64, 52, 59, 49, 67, 34, 49, 50, 48, 58, 68, 57],
          },
          {
            name: '2016',
            type: 'line',
            data: [59, 71, 79, 83, 93, 77, 73, 70, 55, 67, 76, 70],
          },
          {
            name: '2017',
            type: 'line',
            data: [99, 72, 92, 95, 104, 73, 108, 69, 63, 68, 70, 91],
          },
          {
            name: '2018',
            type: 'line',
            data: [112, 96, 97, 85, 81, 94, 91, 86, 79, 69, 81, 74],
          },
          {
            name: '2019',
            type: 'line',
            data: [110, 101, 93, 109, 110, 122, 160, 106, 98, 133, 132, 181],
          },
          {
            name: '2020',
            type: 'line',
            data: [149, 49, 62, 50, 63, 71, 54, 65, 91, 96, 99, 108],
          },
          {
            name: '2021',
            type: 'line',
            data: [81, 74, 64, 68, 82, 123, 112, 84, 76, 76, 110, 102],
          },
          {
            name: '2022',
            type: 'line',
            data: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          },
          {
            name: 'All',
            type: 'line',
            // stack: "Total",
            data: [801, 624, 674, 655, 709, 716, 767, 620, 616, 710, 784, 851],
          },
        ],
      }
      chart2.setOption(option2)

      const option3 = {
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
            data: AtelectasisData,
            type: 'scatter',
          },
        ],
      }
      chart3.setOption(option3)
    },
  },
}
</script>
