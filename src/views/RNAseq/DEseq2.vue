<template>
  <el-tabs v-model="activeName" type="card">
    <el-tab-pane label="Detail" name="id1">
      <div style="display: flex">
        <div style="width: 50%">
          <h1>Workflow</h1>
          <img
            src="/public/images/usage/deseq2.png"
            alt="#"
            style="width: 100%"
          />
        </div>
        <div style="width: 50%">
          <h1>Introduction</h1>
          <br />
          <iframe
            src="/video/deseq2.mp4"
            frameborder="0"
            allow="autoplay;encrypted-media"
            allowfullscreen
            style="width: 587px; height: 300px"
          ></iframe>
        </div>
      </div>
      <br />
      <div>
        <p>
          In the current module, the datasets are compatible with the R "DEseq2"
          package for conducting differential gene expression analysis.
          Initially, the target data is chosen from the “Data Selection” panel,
          where samples and subgroups are specified for inclusion before
          proceeding to analysis. Within the “Data Analysis” panel, the "DEseq2"
          tool facilitates the differential gene analysis process, ultimately
          generating a matrix of differentially expressed genes (DEGs). These
          DEGs can then be utilized for subsequent pathway enrichment analyses,
          including KEGG, GO, and ORA. A demonstration of these procedures is
          available in the accompanying video.
        </p>
      </div>
    </el-tab-pane>
    <el-tab-pane label="Data Selection" name="id2">
      <iframe
        src="https://db.chcmu.com.cn/idbview/rnaseq/01_dataselect_DEseq2/"
        allowfullscreen="true"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        oallowfullscreen="true"
        msallowfullscreen="true"
      />
    </el-tab-pane>
    <el-tab-pane label="Data Analysis" name="id3">
      <div class="volume-wrapper">
        <div
          class="volume-item"
          v-for="item in tools"
          :key="item.id"
          @click="showTools(item.src)"
        >
          <el-card style="text-align: center">
            <template #header>
              {{ item.describe }}
            </template>
            <img :src="item.img" style="width: 100%" />
          </el-card>
        </div>
      </div>
    </el-tab-pane>
  </el-tabs>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import tools from '@/assets/rnaseq/DEseq2.json'
import useShinyStore from '@/store/modules/shiny'

let activeName = ref('id1')
let shinyStore = useShinyStore()

//获取路由器对象
let $router = useRouter()
//获取路由对向
let $route = useRoute()

const showTools = async (src: string) => {
  await shinyStore.Tools(src)
  //跳转到登录页面
  $router.push({ path: '/graphmed/tools', query: { redirect: $route.path } })
}
</script>
<script lang="ts">
export default {
  name: 'DEseq2',
}
</script>
<style scoped>
p {
  text-align: left;
}
h1 {
  text-align: center;
  font-size: large;
}
.volume-wrapper {
  display: flex; /* flex布局 */
  justify-content: flex-start; /* 左对齐 */
  flex-wrap: wrap; /* 换行 */

  .volume-item {
    margin-bottom: 5px;
    margin-right: 10px; /* 每个元素右间距设置为20px */
    /* 计算每个元素的宽度：20px是前三个元素的间距（margin-right）和，除以4即为每个元素的宽度 */
    width: calc((100% - 40px) / 4);
  }

  /* 将下标是4的倍数元素的margin-right设置为0，即将每行最后一个元素的margin-right置0 */
  .volume-item:nth-of-type(4n + 0) {
    margin-right: 0;
    text-align: center;
  }
}
</style>
