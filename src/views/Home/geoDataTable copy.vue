<template>
  <div style="padding: 10px">
    <div class="searchWord">
      <!-- <div style="display: inline-block"> 搜索：</div> -->
      <el-input
        v-model="search"
        style="display: inline-block"
        placeholder="Search"
      ></el-input>
    </div>
    <span>
      <el-table
        ref="dormitoryTable"
        :data="tableData"
        tooltip-effect="dark"
        stripe
        style="width: 100%; height: 500px"
      >
        <!-- <el-table-column type="selection" width="45"></el-table-column>
        <el-table-column label="序号" type="index" width="65"></el-table-column> -->
        <!-- <el-table-column prop="gse" label="gse" width="100"></el-table-column> -->
        <el-table-column prop="gse" label="gse" width="100">
          <template v-slot="scope">
            <a
              :href="scope.row.url"
              target="_blank"
              style="text-decoration: none; color: cadetblue"
            >
              {{ scope.row.gse }}
            </a>
          </template>
        </el-table-column>
        <el-table-column
          prop="type"
          label="type"
          width="80"
          :filters="typeSelect"
          :filter-method="filterHandler"
          :filter-multiple="false"
        />
        <el-table-column
          prop="diease"
          label="diease"
          width="90"
          :filters="dieaseSelect"
          :filter-method="filterHandler"
          :filter-multiple="false"
        />
        <el-table-column prop="sample" label="sample" width="160" />
        <el-table-column
          prop="species"
          label="species"
          width="90"
          :filters="speciesSelect"
          :filter-method="filterHandler"
          :filter-multiple="false"
        />
        <el-table-column
          prop="method"
          label="method"
          width="100"
          :filters="methodSelect"
          :filter-method="filterHandler"
          :filter-multiple="false"
        />
        <el-table-column prop="size" label="size" width="60" />
        <el-table-column prop="describe" label="describe" />
      </el-table>
    </span>
  </div>
</template>
<script setup>
import axios from 'axios'
import { reactive, onMounted, computed, ref } from 'vue'
import typeSelect from '@/assets/data/typeSelect.json'
import dieaseSelect from '@/assets/data/dieaseSelect.json'
import speciesSelect from '@/assets/data/speciesSelect.json'
import methodSelect from '@/assets/data/methodSelect.json'

let search = ref('')
let dormitory = reactive([])
let tableData = computed(() => {
  const s = search.value.toLowerCase()
  if (s) {
    // filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
    // 注意： filter() 不会对空数组进行检测。
    // 注意： filter() 不会改变原始数组。
    return dormitory.filter((data) => {
      // some() 方法用于检测数组中的元素是否满足指定条件;
      // some() 方法会依次执行数组的每个元素：
      // 如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测;
      // 如果没有满足条件的元素，则返回false。
      // 注意： some() 不会对空数组进行检测。
      // 注意： some() 不会改变原始数组。
      return Object.keys(data).some((key) => {
        // indexOf() 返回某个指定的字符在某个字符串中首次出现的位置，如果没有找到就返回-1；
        // 该方法对大小写敏感！所以之前需要toLowerCase()方法将所有查询到内容变为小写。
        return String(data[key]).toLowerCase().indexOf(s) > -1
      })
    })
  }
  return dormitory
})

function filterHandler(value, row, column) {
  const property = column['property']
  return row[property] === value
}
onMounted(() => {
  axios
    .get('https://chcmu.com.cn/api/data/datasets')
    .then(function (response) {
      // 处理成功情况
      // console.log(response.status)
      for (let index = 0; index < response.data.length; index++) {
        dormitory[index] = response.data[index]
      }
    })
    .catch(function (error) {
      // 处理错误情况
      console.log(error)
    })
    .finally(function () {
      // 总是会执行
    })
})
</script>
<style scoped></style>
