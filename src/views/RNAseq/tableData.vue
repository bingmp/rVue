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
          :data="dataTable"
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
          <el-table-column prop="type" label="type" width="80" />
          <el-table-column prop="disease" label="disease" width="90" />
          <el-table-column prop="sample" label="sample" width="160" />
          <el-table-column prop="species" label="species" width="90" />
          <el-table-column prop="method" label="method" width="100" />
          <el-table-column prop="size" label="size" width="60" />
          <el-table-column prop="describe" label="describe" />
        </el-table>
      </span>
    </div>
    <el-pagination
      v-model:currentPage="currentPage"
      v-model:page-size="pageSize"
      :page-sizes="[10, 25, 50]"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totalSize"
    ></el-pagination>
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref, onMounted, computed } from 'vue'

// pinia mysql 数据
import useMysqlDataStore from '@/store/modules/mysqldata'
let mysqlDataStore = useMysqlDataStore()

// 当前页码
let currentPage = ref(1)
// 每页展示数
let pageSize = ref(25)
// 搜索
let search = ref('')

let totalSize = ref(0)

let pageTable = reactive([])
// 搜索选择
let dataTable = computed(() => {
  let unfilter = mysqlDataStore.dataSet
  // 未筛选的数组长度
  // eslint-disable-next-line vue/no-side-effects-in-computed-properties
  totalSize.value = unfilter.length

  if (unfilter.length != 0) {
    const s = search.value.toLowerCase()
    // 筛选
    if (s) {
      // 注意： filter() 不会对空数组进行检测。filter() 不会改变原始数组。
      // 获取筛选后的数组 filter
      let filter = unfilter.filter((data: any) => {
        return Object.keys(data).some((key) => {
          // indexOf() 返回某个指定的字符在某个字符串中首次出现的位置，如果没有找到就返回-1；
          // 该方法对大小写敏感！所以之前需要toLowerCase()方法将所有查询到内容变为小写。
          return String(data[key]).toLowerCase().indexOf(s) > -1
        })
      })
      // 筛选后的数组长度
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      totalSize.value = filter.length

      let startSample = pageSize.value * (currentPage.value - 1)
      let endsample = pageSize.value * currentPage.value

      // 筛选后的数组在页面上展示
      if (endsample > filter.length) {
        // 结尾数 大于 数据行数，用 数据行数 结尾
        pageTable = filter.slice(startSample, unfilter.length)
      } else {
        // 结尾数 小于等于 数据行数
        pageTable = filter.slice(startSample, endsample)
      }
    }
    // 不用筛选
    else {
      let startSample = pageSize.value * (currentPage.value - 1)
      let endsample = pageSize.value * currentPage.value
      // 展示数据至页面
      if (endsample > unfilter.length) {
        // 结尾数 大于 数据行数，用 数据行数 结尾
        pageTable = unfilter.slice(startSample, unfilter.length)
      } else {
        // 结尾数 小于等于 数据行数
        pageTable = unfilter.slice(startSample, endsample)
      }
    }
  }
  // 返回
  return pageTable
})

onMounted(() => {
  mysqlDataStore.getDataSets()
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
