<template>
  <router-view v-slot="{ Component, route }">
    {{ route }}
    <component :is="Component"/>
</router-view>
</template>

<script setup lang="ts">

</script>


<style scoped>
</style>
