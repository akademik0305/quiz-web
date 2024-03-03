<template>
  <div class="border rounded-xl p-4">
    <div class="flex items-center justify-between">
      <h3 class="text-lg font-medium">{{ title }}</h3>
      <UButton label="Sinf qo'shish" size="lg" color="orange" @click="$emit('openAddModal')"></UButton>
    </div>
  </div>
</template>

<script setup>
// title with prop
const { title } = defineProps({
  title: {
    type: String,
    default: 'Asosiy sahifa'
  }
})

</script>

<style lang="scss" scoped></style>