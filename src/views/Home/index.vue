<template>
  <el-tabs
    v-model="activeName"
    type="card"
    style="padding-left: 10px; padding-right: 10px"
    @tab-click="handleClick"
  >
    <el-tab-pane label="Home" name="id1">
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
                which can be used for various data analysis and visualization
                Data shows below:
              </p>
              <ul>
                <li>Omics:</li>
                <p>
                  1679 RNA-seq sequenced samples from children with Asthma, BPD,
                  and respiratory syncytial virus (RSV);
                </p>
                <li>Clinic:</li>
                <p>123 million Covid-19;</p>
                <p>8527 atelectasis samples;</p>
                <p>348 mycoplasma Genetic Resistance Mutation related;</p>
              </ul>
            </div>
          </div>
        </div>
      </el-card>
      <div><HomeCharts /></div>
    </el-tab-pane>
    <el-tab-pane label="GEO data" name="id6">
      <geoDataTable />
    </el-tab-pane>
    <el-tab-pane label="Rshiny" name="id4">
      <Rshiny />
    </el-tab-pane>
    <el-tab-pane label="Lab. introduction" name="id5">
      <LabInfo />
    </el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
import { getTime } from '@/utils/time'
//引入用户相关的仓库,获取当前用户的头像、昵称
import useUserStore from '@/store/modules/user'
//获取存储用户信息的仓库对象
let userStore = useUserStore()
</script>
<script lang="ts">
// import geoDataTable from './geoDataTable.vue'
import HomeCharts from './HomeCharts.vue'
import Rshiny from './GraphMed.vue'
import LabInfo from './LabInfo.vue'
import geoDataTable from './geoDataTable.vue'

export default {
  components: {
    // geoDataTable,
    HomeCharts,
    Rshiny,
    LabInfo,
    geoDataTable,
  },
  data() {
    return {
      activeName: 'id1',
    }
  },
  methods: {
    handleClick() {
      // handleClick(tab, event) {
      // console.log(tab, event);
    },
  },
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
