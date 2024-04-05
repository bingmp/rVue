<template>
  <div id="achart2" style="height: 600px"></div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  name: 'Chart',

  mounted() {
    this.initChart()
  },
  methods: {
    initChart() {
      const chart = echarts.init(document.getElementById('achart2'))
      const colors = ['#5470C6', '#EE6666', 'black']
      const option = {
        color: colors,
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999',
            },
          },
        },
        toolbox: {
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true, pixelRatio: 3 },
          },
        },
        legend: {
          top: 'top',
          data: [
            'Referred cases',
            'HAdV positivte cases',
            'Percentage of positive cases',
          ],
        },
        xAxis: [
          {
            type: 'category',
            data: [
              '2009',
              '2010',
              '2011',
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
            axisPointer: {
              type: 'shadow',
            },
          },
        ],
        yAxis: [
          {
            type: 'value',
            name: 'Number of suspected cases',
            min: 0,
            max: 3500,
            interval: 500,
            axisLabel: {
              formatter: '{value}',
            },
          },
          {
            type: 'value',
            name: 'Percentage of positive cases',
            min: 0,
            max: 15,
            interval: 5,
            axisLabel: {
              formatter: '{value} %',
            },
          },
        ],
        series: [
          {
            name: 'Referred cases',
            type: 'bar',
            stack: 'Total',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' ml'
              },
            },
            data: [
              311, 3355, 941, 765, 982, 774, 577, 719, 720, 820, 852, 477, 331,
              251,
            ],
          },
          {
            name: 'HAdV positivte cases',
            type: 'bar',
            stack: 'Total',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' ml'
              },
            },
            data: [17, 62, 93, 49, 59, 53, 10, 21, 27, 17, 56, 55, 21, 32],
          },
          {
            name: 'Percentage of positive cases',
            type: 'line',
            yAxisIndex: 1,
            tooltip: {
              valueFormatter: function (value) {
                return value + ' °C'
              },
            },
            data: [
              5.47, 1.85, 9.88, 6.41, 6.01, 6.85, 1.73, 2.92, 3.75, 2.07, 6.57,
              11.53, 6.34, 12.75,
            ],
          },
        ],
      }
      chart.setOption(option)
    },
  },
}
</script>
