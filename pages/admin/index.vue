<template>
  <div class="flex justify-start h-screen">
    <div class="bg-orange-400 px-2 py-3">
      <sidebar></sidebar>
    </div>

    <div class="p-5 flex-1">
      <categories></categories>
    </div>
  </div>
</template>

<script setup>
import { sidebar, categories } from '~/components/admin'
</script>

<style lang="scss" scoped></style>