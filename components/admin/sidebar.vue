<template>
  <UVerticalNavigation :links="links" :ui="{
    base: 'justify-start',
    padding: 'pr-12 pl-2 py-2', size: 'text-md', active: 'text-gray-600 before:bg-gray-100',
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
    class: 'text-lg',
    to: '/admin'
  }, {
    label: 'Sinflar',
    icon: 'i-heroicons-home',
    // to: '/getting-started/installation'
    to: '/admin/class'
  }, {
    label: 'Fanlar',
    icon: 'i-heroicons-chart-bar',
    to: '/admin/sciences'
    // to: 
  }, {
    label: 'Kategoriyalar',
    icon: 'i-heroicons-command-line',
    // to: '/components/command-palette'
    to: '/admin/categories'
  }, {
    label: 'Testlar',
    icon: 'i-heroicons-command-line',
    // to: '/components/command-palette'
    to: '/admin/tests'
  }
]
</script>

<style lang="scss" scoped></style>