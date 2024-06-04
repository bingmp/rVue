<template>
  <el-card>
    <div class="box">
      <img :src="userStore.avatar" alt="" class="avatar" />
      <div style="margin-left: 1px">
        <div class="bottom" style="display: flex">
          <div style="width: 40%">
            <p class="subtitle">
              Good {{ getTime() }}! {{ userStore.username }}
            </p>
          </div>
          <div>
            <h3 class="title">Respiratory Disease Database</h3>
          </div>
        </div>
        <div>
          <p>
            The database focuses on childhood respiratory diseases and is
            designed to collect clinical, sequencing, and experimental data,
            which can be used for various data analysis and visualization Data
            shows below:
          </p>
          <!-- 介绍数据内容 -->
          <div style="display: flex">
            <div style="width: 44%">
              <br />
              <li>Omics:</li>
              <br />
              <p>
                {{ dataSum.sum('value') }} datasets total
                {{ sampleSum.sum('value') }}
                RNA-seq sequenced samples for Asthma, bronchopulmonary dysplasia
                (BPD), respiratory syncytial virus (RSV) and chronic obstructive
                pulmonary disease (COPD).
              </p>
              <br />
              <li>Clinic:</li>
              <br />
              <p>380920 samples of nCovid-19 from GitHub;</p>
              <br />
              <p>
                8527 samples of atelectasis, and 348 samples of mycoplasma
                genetic resistance mutation related from CHCMU;
              </p>
              <br />
              <p>
                2424624 samples of disease mortality for asthma, chronic
                obstructive pulmonary disease (COPD), Covid19, lower birth
                weight, lower respiratory infections, protein energy
                malnutrition, tuberculosis, upper respiratory infections, and
                other respiratory diseases from World Health Organization (WHO).
              </p>
            </div>
            <div style="width: 2%"></div>
            <!-- 介绍工具内容 -->
            <div style="width: 53%">
              <ul>
                <br />
                <li>Analysis Tools:</li>
                <br />
                <p>
                  13 database-related tools: Machine Learning (Dtree, Random
                  forest, SVM) and Enrichment Analysis (limma, DESeq2, KEGG,
                  etc.).
                </p>
                <p>
                  33 independent tools of GraphMed: Basic graphic, Clinic & Lab.
                  tools and Omics data visualization. All tools are developed by
                  bingm.
                </p>
              </ul>
              <shinyCharts />
            </div>
            <div style="width: 1%"></div>
          </div>
        </div>
      </div>
    </div>
  </el-card>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
// 获取时间
import { getTime } from '@/utils/time'

// tab 1 Home 图表页面
import shinyCharts from './tab1_shinyToolsChart.vue'

// 引入用户相关的仓库,获取当前用户的头像、昵称
import useUserStore from '@/store/modules/user'
// 获取数据库信息
import useMysqlDataStore from '@/store/modules/mysqldata'

// 获取存储用户信息的仓库对象
let userStore = useUserStore()
// pinia mysql 数据
let mysqlDataStore = useMysqlDataStore()

// 求数据集和样本总计数
class fruitCollection extends Array {
  sum(key) {
    return this.reduce((a, b) => a + (b[key] || 0), 0)
  }
}
// 1、数据集计数
const dataCount = mysqlDataStore.dataCount
// 数据集求和
const dataSum = new fruitCollection(...dataCount)
// 2、样本计数
const sampleCount = mysqlDataStore.groupCount
// 样本求和
const sampleSum = new fruitCollection(...sampleCount)

onMounted(() => {
  // GEO 数据集
  mysqlDataStore.getDataCount()
  // GEO 样本（分组）
  mysqlDataStore.getGroupCount()
})
</script>
<script lang="ts">
export default {
  name: 'Introduction',
}
</script>

<style scoped lang="scss">
.box {
  display: flex;

  .avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  .bottom {
    margin-left: 2px;

    .title {
      font-size: 20px;
      font-weight: 900;
      margin-bottom: 20px;
    }

    .subtitle {
      font-style: italic;
      color: skyblue;
    }
  }
}
.bottoms {
  margin-top: 10px;
  display: flex;
  justify-content: center;
}
ul {
  list-style-type: disc;
  list-style-position: inside;
}
ol {
  list-style-type: decimal;
  list-style-position: inside;
}
li {
  font-weight: 700;
}
</style>
