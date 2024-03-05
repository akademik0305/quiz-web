<template>
  <div class="flex justify-start h-screen">
    <div class="bg-orange-400 px-2 py-3">
      <sidebar></sidebar>
    </div>

    <div class="p-5 flex-1">

      <!-- navbar -->
      <navbar :title="'Testlar'"></navbar>
      <!-- navbar -->

      <!-- categories main -->
      <div class="border rounded-xl w-full flex mt-4">
        <!-- all category list -->
        <div class="py-4 border-r w-60">
          <div class="px-4 pb-4">
            <UButton color="orange" size="md" class="w-full" :ui="{ base: 'justify-center' }">Add new Caterory</UButton>
          </div>
          <div class="border-t pt-4 px-4">
            <h4 class="px-2">Categories</h4>
            <UButton class="mt-3 block w-full" icon="i-heroicons-lamp" size="md" :color="item == 1 ? 'orange' : 'gray'"
              variant="soft" label="Button" :trailing="false" v-for="item in 6" :key="item">
              category name
            </UButton>
          </div>
        </div>
        <!-- all category list -->

        <!-- category elements -->
        <div class="py-4 border-r w-96">
          <div class="px-4 pb-4">
            <UInput icon="i-heroicons-magnifying-glass-20-solid" size="md" color="orange" :trailing="false"
              placeholder="Search..." />
          </div>
          <div class="border-t pt-4">
            <h4 class="px-4">Quizes</h4>
            <!-- <UButton class="mt-3 block w-full" icon="i-heroicons-lamp" size="md" :color="item == 1 ? 'orange' : 'gray'"
          variant="soft" label="Button" :trailing="false" v-for="item in 6" :key="item">
          category name
        </UButton> -->
            <div
              class="flex items-center justify-between my-2 py-2 px-4 last:mb-0 hover:bg-orange-100 transition-colors duration-300 cursor-pointer"
              :class="{ 'bg-orange-50': item === 3 }" v-for="item in 6" :key="item">
              <h3>{{ item }}-Savol</h3>
              <div class="flex gap-2">
                <UButton icon="i-heroicons-pencil" size="sm" color="green" square variant="soft" />
                <UButton icon="i-heroicons-trash" size="sm" color="red" square variant="soft" />
              </div>
            </div>
          </div>
        </div>
        <!-- category elements -->

        <!-- quiz detail -->
        <div class="pb-4 pt-5 border-r flex-1">
          <div class="px-4 pb-5 flex items-center justify-center gap-4">
            <h4 class="text-xl justify-self-start" style="justify-self: flex-start;">Quiz detail</h4>
            <h4 class="text-xl">3-savol</h4>
          </div>
          <div class="border-t pt-4 px-4">
            <p class="text-xs text-gray-500 font-normal">Savol: </p>
            <h4 v-if="!isUpdated" class="">Birinchi qandaydir savol</h4>
            <input v-else type="text" class="border px-2 py-2 rounded-md" :value="'Birinchi qandaydir savol'">

            <div class="mt-4">
              <p class="text-xs text-gray-500 font-normal">Javoblar: </p>
              <div class="flex items-center justify-between py-2" v-for="item in 4" :key="item">
                <div class="flex items-center gap-3">
                  <UCheckbox color="green" label="" :model-value="true" class="cursor-pointer" />
                  <h3 v-if="!isUpdated">{{ item }}-Javob</h3>
                  <input v-else type="text" class="border px-2 py-2 rounded-md" :value="item">
                </div>

              </div>
              <div class="flex gap-2 mt-4">
                <UButton :label="isUpdated ? 'Saqlash' : 'Tahrirlash'" size="md" color="green" square variant="solid"
                  @click="isUpdated = !isUpdated" />
                <UButton label="O'chirish" size="md" color="red" square variant="solid" />
              </div>
            </div>
          </div>
        </div>
        <!-- quiz detail -->
      </div>
      <!-- categories main -->
    </div>
  </div>
</template>

<script setup>
import { sidebar, categories, navbar } from '~/components/admin'

const isUpdated = ref(false)
</script>

<style lang="scss" scoped></style>