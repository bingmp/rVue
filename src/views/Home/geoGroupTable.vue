<template>
  <div class="demo-pagination-block">
    <!-- <div style="display: inline-block"> 搜索：</div> -->
    <!-- <div class="searchWord">
      <el-input
        v-model="search"
        style="display: inline-block"
        placeholder="Search"
      ></el-input>
    </div> -->
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
          <el-table-column prop="gsm" label="gsm" width="120">
            <template v-slot="scope">
              <a
                :href="scope.row.url"
                target="_blank"
                style="text-decoration: none; color: cadetblue"
              >
                {{ scope.row.gsm }}
              </a>
            </template>
          </el-table-column>
          <el-table-column
            prop="diease"
            label="diease"
            width="90"
            :filters="dieaseSelect"
            :filter-method="filterHandler"
            :filter-multiple="false"
          />
          <el-table-column prop="gse" label="gse" width="160" />
          <el-table-column prop="condition" label="condition" width="200" />
          <el-table-column prop="cluster" label="cluster" width="160" />
          <el-table-column prop="gender" label="gender" width="80" />
          <el-table-column prop="age" label="age" width="80" />
          <el-table-column prop="unit" label="unit" width="100" />
        </el-table>
      </span>
    </div>
    <el-pagination
      v-model:currentPage="currentPage"
      v-model:page-size="pageSize"
      :page-sizes="[10, 25, 50, 100, 250, 500]"
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

// 当前页码
const currentPage = ref(1)
// 数据行数
let totalSize = ref(1)
// 每页展示数
const pageSize = ref(10)
// 搜索
let search = ref('')
// 搜索表初始化
let dormitory: any = reactive([])

let dieaseSelect: { text: string; value: string }[]

// 搜索选择
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

// 获取数据
function showData(currentPage: number, pageSize: number) {
  const url =
    // 数据 api
    'http://124.223.20.228:8080/api/group/sample?startSample=' +
    // 页面 起始样本
    (1 + pageSize * (currentPage - 1)) +
    '&endSample=' +
    // 页面 结束样本
    pageSize * currentPage

  axios.get(url).then(function (response) {
    // 处理成功情况
    // console.log(response.status)
    dormitory.length = 0
    for (let index = 0; index < response.data.length; index++) {
      dormitory[index] = response.data[index]
    }
  })
}

// 获取数据行数
function selectData() {
  axios
    .get('http://124.223.20.228:8080/api/group/nrow')
    .then(function (response) {
      // 处理成功情况
      totalSize.value = Number(response.data)
    })

  // 获取数据 diease
  axios
    .get('http://124.223.20.228:8080/api/group/diease')
    .then(function (response) {
      dieaseSelect = response.data
    })
}
// 更新页面展示数
const handleSizeChange = (val: number) => {
  pageSize.value = val
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
