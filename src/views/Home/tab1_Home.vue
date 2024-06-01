<template>
  <el-card>
    <div class="box">
      <img :src="userStore.avatar" alt="" class="avatar" />
      <div>
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
            <div style="width: 55%">
              <li>Clinic:</li>
              <p>123 million Covid-19;</p>
              <p>8527 atelectasis samples;</p>
              <p>348 mycoplasma Genetic Resistance Mutation related;</p>
              <li>Omics:</li>
              <p>
                {{ mysqlDataStore.groupSet.length }}
                RNA-seq sequenced samples for Asthma, bronchopulmonary dysplasia
                (BPD), and respiratory syncytial virus (RSV) and chronic
                obstructive pulmonary disease (COPD).
              </p>
            </div>
            <div style="width: 1%"></div>
            <!-- 介绍工具内容 -->
            <div style="width: 44%">
              <ul>
                <li>Analysis Tools:</li>
                <br />
                <p>
                  13 database-related tools: Machine Learning (Dtree, Random
                  forest, SVM) and Enrichment Analysis (limma, DESeq2, KEGG,
                  etc.).
                </p>
                <br />
                <p>
                  33 independent tools of GraphMed: Basic graphic, Clinic & Lab.
                  tools and Omics data visualization.
                </p>
              </ul>
            </div>
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

// 引入用户相关的仓库,获取当前用户的头像、昵称
import useUserStore from '@/store/modules/user'
// 获取数据库信息
import useMysqlDataStore from '@/store/modules/mysqldata'

// 获取存储用户信息的仓库对象
let userStore = useUserStore()
// pinia mysql 数据
let mysqlDataStore = useMysqlDataStore()

onMounted(() => {
  mysqlDataStore.getGroupSets()
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
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  .bottom {
    margin-left: 20px;

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
