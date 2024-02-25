<template>
  <UVerticalNavigation :links="links" :ui="{
    base: 'justify-start',
    padding: 'pr-12 pl-2 py-2', size: 'text-md', active: 'text-gray-200 dark:text-white before:bg-gray-100 dark:before:bg-gray-200',
    inactive: 'text-white',
    icon: {
      base: 'w-6 h-6',
      inactive: 'text-gray-100 dark:text-gray-200'
    },
  }" />
</template>

<script setup>
const route = useRoute()

const links = [
  // {
  //   label: 'Profile',
  //   avatar: {
  //     src: 'https://avatars.githubusercontent.com/u/739984?v=4'
  //   },
  //   badge: 100
  // }, 
  {
    icon: 'i-heroicons-home',
    label: 'Admin panel',
    class: 'text-lg'
  }, {
    label: 'Sinflar',
    icon: 'i-heroicons-home',
    // to: '/getting-started/installation'
  }, {
    label: 'Fanlar',
    icon: 'i-heroicons-chart-bar',
    // to: 
  }, {
    label: 'Kategoriyalar',
    icon: 'i-heroicons-command-line',
    // to: '/components/command-palette'
  }, {
    label: 'Testlar',
    icon: 'i-heroicons-command-line',
    // to: '/components/command-palette'
  }
]
</script>

<style lang="scss" scoped></style>