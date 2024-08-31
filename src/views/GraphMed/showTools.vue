<template>
  <iframe
    :src="shinyStore.src"
    allowfullscreen="true"
    webkitallowfullscreen="true"
    mozallowfullscreen="true"
    oallowfullscreen="true"
    msallowfullscreen="true"
  />
</template>

<script setup lang="ts">
import useShinyStore from '@/store/modules/shiny'
let shinyStore = useShinyStore()
</script>

<style scoped></style>
