<template>
  <el-tabs v-model="activeName" type="card">
    <el-tab-pane label="Detail" name="id1">
      <div style="display: flex">
        <div style="width: 50%">
          <h1>Source</h1>
          <br />
          <p>
            To provide convenient access to epidemiological data on the
            coronavirus outbreak, we provided an interactive R shiny app,
            covid19, which retrofitted from
            <a href="https://github.com/yulab-smu/nCov2019">
              nCov2019 (https://github.com/yulab-smu/nCov2019).
            </a>
            We added "Newest date" select button and retrofitted the function
            "Country statistics" for geographic maps visualization. These
            analytics tools could be useful in informing the public and studying
            how this and similar viruses spread in populous countries.
          </p>
        </div>
        <div style="width: 50%">
          <h1 style="font-size: large; text-align: center">Introduction</h1>
          <br />
          <iframe
            src="/video/covid19.mp4"
            frameborder="0"
            allow="autoplay;encrypted-media"
            allowfullscreen
            style="width: 587px; height: 300px"
          ></iframe>
        </div>
      </div>
    </el-tab-pane>
    <el-tab-pane label="Data" name="id2">
      <iframe
        src="https://db.chcmu.com.cn/idbview/dataclinic/ncov2019"
        allowfullscreen="true"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        oallowfullscreen="true"
        msallowfullscreen="true"
      />
    </el-tab-pane>
  </el-tabs>
</template>
<script setup lang="ts">
import { ref } from 'vue'
let activeName = ref('id1')
</script>
<style>
h1 {
  text-align: center;
  font-size: large;
}
</style>
