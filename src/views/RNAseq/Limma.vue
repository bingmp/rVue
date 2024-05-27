<template>
  <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
    <el-tab-pane label="Data select" name="id1">
      <iframe
        src="https://db.chcmu.com.cn/idbview/rnaseq/01_dataselect_limma/"
        allowfullscreen="true"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        oallowfullscreen="true"
        msallowfullscreen="true"
      />
    </el-tab-pane>
    <el-tab-pane label="Data analysis" name="id2">
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
import { useRouter, useRoute } from 'vue-router'
import tools from '@/assets/rnaseq/Limma.json'
import useShinyStore from '@/store/modules/shiny'
import { ref } from 'vue'

let activeName = ref('id1')
let shinyStore = useShinyStore()

//获取路由器对象
let $router = useRouter()
//获取路由对向
let $route = useRoute()

const showTools = async (src) => {
  await shinyStore.Tools(src)
  //跳转到登录页面
  $router.push({ path: '/shiny/tools', query: { redirect: $route.path } })
}
</script>
<style scoped>
p {
  text-align: center;
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
