<template>
  <div class="flex justify-start h-screen">
    <div class="bg-orange-400 px-2 py-3">
      <sidebar></sidebar>
    </div>

    <div class="p-5 flex-1">
      <!-- navbar -->
      <navbar title="Kategoriyalar" @openAddModal="openAddModal"></navbar>
      <!-- navbar -->

      <!-- classes table -->
      <div class="border rounded-xl mt-4">
        <UTable :rows="people" :columns="columns"
          :ui="{ td: { padding: 'first:pl-6 last:pr-6', base: 'first:w-10' }, th: { padding: 'first:pl-6 last:pr-8', base: 'last:text-right' } }">
          <template #id-data="{ row }">
            <div class="text-left">{{ row.id }}</div>
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
      <!-- classes table -->
    </div>

    <!-- add and update class modal -->
    <div>
      <UModal v-model="isOpenAddOrUpdate">
        <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">

          <template #header>
            <div class="flex items-center justify-between">
              <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                Sinf qo'shish
              </h3>
              <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1"
                @click="isOpenAddOrUpdate = false" />
            </div>
          </template>

          <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
            <UFormGroup label="Sinf nomi" name="class">
              <UInput v-model="state.class" size="md" color="orange" />
            </UFormGroup>

            <!-- <UFormGroup label="Password" name="password">
              <UInput v-model="state.password" type="password" />
            </UFormGroup> -->

            <UButton type="submit" size="md" color="orange">
              Saqlash
            </UButton>
          </UForm>

          <!-- <Placeholder class="h-32" /> -->
        </UCard>
      </UModal>
    </div>
    <!-- add and update class modal -->
  </div>
</template>

<script setup>
// import libraries
import Joi from 'joi'
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
  name: '2-sinf matematika',
}, {
  id: 2,
  name: 'Courtney Henry',
}, {
  id: 3,
  name: 'Tom Cook',
}
]

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

// {
//   'string.base': `"a" should be a type of 'text'`,
//     'string.empty': `"a" cannot be an empty field`,
//       'string.min': `"a" should have a minimum length of {#limit}`,
//         'any.required': `"a" is a required field'`
//   // }

const schema = Joi.object({
  class: Joi.string().required().messages({
    'string.base': `Sinf nomini kiritishingiz shart`,
    'string.empty': `Bu maydon bo'sh bo'lmasligi kerak`,
    'any.required': `Sinf nomini kiritishingiz shart`,
  }),
})

const state = reactive({
  class: undefined,
})

async function onSubmit(event) {
  // Do something with event.data
  console.log(event.data)
  console.log(state.class)
}

// const selected = ref([people[1]])

</script>

<style lang="scss" scoped></style>