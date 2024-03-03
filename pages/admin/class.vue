<template>
  <div class="flex justify-start h-screen">
    <div class="bg-orange-400 px-2 py-3">
      <sidebar></sidebar>
    </div>

    <div class="p-5 flex-1">
      <navbar title="Sinflar" @openAddModal="openAddModal"></navbar>

      <div class="border rounded-xl mt-4">

        <UTable :rows="people" :columns="columns"
          :ui="{ td: { padding: 'px-6', base: 'first:text-right' }, th: { padding: 'px-6', base: 'last:text-right' } }">
          <template #id-data="{ row }">
            <div class="w-6 ">{{ row.id }}</div>
          </template>

          <template #actions-data="{ row }">
            <div class="flex justify-end pr-4 text-right">
              <UDropdown :items="items(row)">
                <UButton color="gray" variant="ghost" icon="i-heroicons-ellipsis-horizontal-20-solid" />
              </UDropdown>
            </div>
          </template>
        </UTable>
      </div>
    </div>


    <!-- add and update class modal -->
    <div>
      <!-- <UButton label="Open" @click="isOpen = true" /> -->

      <UModal v-model="isOpenAddOrUpdate" prevent-close>
        <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">

          <template #header>
            <div class="flex items-center justify-between">
              <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                Modal
              </h3>
              <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1"
                @click="isOpenAddOrUpdate = false" />
            </div>
          </template>

          <!-- <Placeholder class="h-32" /> -->
        </UCard>
      </UModal>
    </div>
    <!-- add and update class modal -->
  </div>
</template>

<script setup>
//============================================ import components ============================================
import { sidebar, categories, navbar } from '~/components/admin'

// table columns
const columns = [{
  key: 'id',
  label: 'ID'
}, {
  key: 'name',
  label: 'Nomi'
}, {
  key: 'actions',
  label: 'Actions'
}]

// table data
const people = [{
  id: 1,
  name: 'Lindsay Walton',
  role: 'Member'
}, {
  id: 2,
  name: 'Courtney Henry',
  role: 'Admin'
}, {
  id: 3,
  name: 'Tom Cook',
  role: 'Member'
}, {
  id: 4,
  name: 'Whitney Francis',
  role: 'Admin'
}, {
  id: 5,
  name: 'Leonard Krasner',
  role: 'Owner'
}, {
  id: 6,
  name: 'Floyd Miles',
  role: 'Member'
}]

// table item actions
const items = (row) => [
  [{
    label: 'Edit',
    icon: 'i-heroicons-pencil-square-20-solid',
    click: () => console.log('Edit', row.id)
  }, {
    label: 'Duplicate',
    icon: 'i-heroicons-document-duplicate-20-solid'
  }], [{
    label: 'Archive',
    icon: 'i-heroicons-archive-box-20-solid'
  }, {
    label: 'Move',
    icon: 'i-heroicons-arrow-right-circle-20-solid'
  }], [{
    label: 'Delete',
    icon: 'i-heroicons-trash-20-solid'
  }]
]

//============================================ add or update ============================================
//variables
const isOpenAddOrUpdate = ref(false)
//functions
function openAddModal() {
  isOpenAddOrUpdate.value = true
}

// close modal with esc button
defineShortcuts({
  escape: {
    usingInput: false,
    whenever: [isOpenAddOrUpdate],
    handler: () => { isOpenAddOrUpdate.value = false }
  }
})

// const selected = ref([people[1]])

</script>

<style lang="scss" scoped></style>