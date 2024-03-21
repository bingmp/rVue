<template>
  <div>
    <router-view></router-view>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
import { reqLogin } from './api/user'

onMounted(() => {
  reqLogin({ username: 'admin', password: '111111' })
})
</script>
<script lang="ts">
export default {
  name: 'App',
}
</script>
<style scoped></style>
