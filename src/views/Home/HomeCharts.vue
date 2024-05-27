<template>
  <div>
    <div
      id="geochart"
      style="width: 100%; height: 400px; padding-right: 10%"
    ></div>
    <div
      id="graphmedchart"
      style="width: 100%; height: 400px; padding-top: 2%; padding-right: 10%"
    ></div>
  </div>
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
      const geochart = echarts.init(document.getElementById('geochart'))
      const graphmedchart = echarts.init(
        document.getElementById('graphmedchart'),
      )

      const optiongeochart = {
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
          data: [
            'Covid-19',
            'Atelectasis',
            'Mycoplasma',
            'Asthma',
            'BPD',
            'RSV',
            'Atelectasis(➗10)',
            'Covid-19(➗100,000)',
          ],
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
            data: [
              { value: 12, name: 'Asthma' },
              { value: 4, name: 'RSV' },
              { value: 3, name: 'BPD' },
              { value: 1, name: 'COPD' },
              { value: 1, name: 'Mycoplasma' },
              { value: 1, name: 'Atelectasis' },
              { value: 1, name: 'Covid-19' },
            ],
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
            data: [
              { value: 348, name: 'BPD' },
              { value: 348, name: 'Mycoplasma' },
              { value: 424, name: 'RSV' },
              { value: 1684, name: 'Asthma' },
              { value: 120, name: 'COPD' },
              { value: 852.7, name: 'Atelectasis(➗10)' },
              { value: 1230, name: 'Covid-19(➗100,000)' },
            ],
          },
        ],
      }
      geochart.setOption(optiongeochart)

      const optiongraphmedchart = {
        title: {
          text: 'R shiny tools',
          subtext: 'GraphMed',
          left: 'center',
        },
        tooltip: {
          trigger: 'item',
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
        },
        series: [
          {
            name: 'Tools number',
            type: 'pie',
            radius: '60%',
            data: [
              { value: 9, name: 'Omics tools' },
              // { value: 3, name: 'Map' },
              // { value: 3, name: 'pROC' },
              { value: 12, name: 'Clinic tools' },
              { value: 3, name: 'Lab.tools' },
              { value: 10, name: 'Basic graphic' },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
              },
            },
          },
        ],
      }
      graphmedchart.setOption(optiongraphmedchart)
    },
  },
}
</script>
