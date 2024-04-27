<template>
  <h1>Lung cell atlas: part of human cell atlas</h1>
  <br />
  <!-- v-for to show images -->
  <div class="volume-wrapper">
    <div class="volume-item" v-for="(item, index) in scRNA" :key="index">
      <el-card style="text-align: center">
        <template #header>
          {{ item.describe }}
        </template>
        <a :href="item.src" target="_blank">
          <img :src="item.img" style="width: 100%" />
        </a>
      </el-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import scRNA from '@/assets/scRNA/data.json'
// showTools function(src){
// }
</script>
<style scoped>
h1,
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
    width: calc((100% - 40px) / 2);
  }

  /* 将下标是4的倍数元素的margin-right设置为0，即将每行最后一个元素的margin-right置0 */
  .volume-item:nth-of-type(2n + 0) {
    margin-right: 0;
    text-align: center;
  }
}
</style>
