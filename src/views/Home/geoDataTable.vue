<template>
  <div class="demo-pagination-block">
    <!-- <div style="display: inline-block"> 搜索：</div> -->
    <div class="searchWord">
      <el-input
        v-model="search"
        style="display: inline-block"
        placeholder="Search"
      ></el-input>
    </div>
    <div class="demonstration">
      <span>
        <el-table
          ref="dormitoryTable"
          :data="tableData"
          tooltip-effect="dark"
          stripe
          style="width: 100%; height: 460px"
        >
          <!-- <el-table-column type="selection" width="45"></el-table-column>
        <el-table-column label="序号" type="index" width="65"></el-table-column> -->
          <!-- <el-table-column prop="gse" label="gse" width="100"></el-table-column> -->
          <el-table-column prop="gse" label="gse" width="110">
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
    <el-pagination
      v-model:currentPage="currentPage"
      v-model:page-size="pageSize"
      :page-sizes="[10, 25, 50, totalSize]"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totalSize"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    ></el-pagination>
  </div>
</template>
<script lang="ts" setup>
import axios from 'axios'
import { reactive, ref, onMounted, computed } from 'vue'

let totalSize = ref(1)
// 当前页码
const currentPage = ref(1)
// 每页展示数
const pageSize = ref(10)
// 搜索
let search = ref('')
// 搜索表初始化
let dormitory: any = reactive([])

// datasets的 type 选择数据
let typeSelect: { text: string; value: string }[]
// datasets的 diease 选择数据
let dieaseSelect: { text: string; value: string }[]
// datasets的 species 选择数据
let speciesSelect: { text: string; value: string }[]
// datasets的 diease 选择数据
let methodSelect: { text: string; value: string }[]

// 搜索选择
let tableData = computed(() => {
  const s = search.value.toLowerCase()
  if (s) {
    // filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
    // 注意： filter() 不会对空数组进行检测。filter() 不会改变原始数组。
    return dormitory.filter((data) => {
      return Object.keys(data).some((key) => {
        // indexOf() 返回某个指定的字符在某个字符串中首次出现的位置，如果没有找到就返回-1；
        // 该方法对大小写敏感！所以之前需要toLowerCase()方法将所有查询到内容变为小写。
        return String(data[key]).toLowerCase().indexOf(s) > -1
      })
    })
  }
  return dormitory
})

// 获取数据
function showData(currentPage: number, pageSize: number) {
  // 数据 api
  const url =
    'https://chcmu.com.cn/api/data/datasets?startSample=' +
    // 页面 起始样本
    (1 + pageSize * (currentPage - 1)) +
    '&endSample=' +
    // 页面 结束样本
    pageSize * currentPage

  axios.get(url).then(function (response) {
    // 处理成功情况
    dormitory.length = 0
    for (let index = 0; index < response.data.length; index++) {
      dormitory[index] = response.data[index]
    }
  })
  // .catch(function (error) {
  //   // 处理错误情况
  //   console.log(error)
  // })
}

function selectData() {
  // 获取数据行数
  axios.get('https://chcmu.com.cn/api/data/nrow').then(function (response) {
    // 处理成功情况
    totalSize.value = Number(response.data)
  })

  // 获取数据 type
  axios.get('https://chcmu.com.cn/api/data/type').then(function (response) {
    typeSelect = response.data
  })
  // 获取数据 diease
  axios.get('https://chcmu.com.cn/api/data/diease').then(function (response) {
    dieaseSelect = response.data
  })

  // 获取数据 speciesSelect
  axios.get('https://chcmu.com.cn/api/data/species').then(function (response) {
    speciesSelect = response.data
  })
  // 获取数据 method
  axios.get('https://chcmu.com.cn/api/data/method').then(function (response) {
    methodSelect = response.data
  })
}
// 更新页面展示数
const handleSizeChange = (val: number) => {
  showData(currentPage.value, (pageSize.value = val))
}
// 更新当前页码数
const handleCurrentChange = (val: number) => {
  showData((currentPage.value = val), pageSize.value)
}
// 排序选择
function filterHandler(value: any, row: any, column: any) {
  const property = column['property']
  return row[property] === value
}

onMounted(() => {
  showData(currentPage.value, pageSize.value)
  selectData()
})
</script>
<style scoped>
.demo-pagination-block + .demo-pagination-block {
  margin-top: 10px;
}
.demo-pagination-block .demonstration {
  margin-bottom: 16px;
}
</style>
