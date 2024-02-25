<template>
  <div class="border rounded-xl w-full flex">
    <!-- all category list -->
    <div class="py-4 border-r w-60">
      <div class="px-4 pb-4">
        <UButton color="orange" size="md">Add new Caterory</UButton>
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
    <div class="py-4 border-r w-80">
      <div class="px-4 pb-4">
        <UInput icon="i-heroicons-magnifying-glass-20-solid" size="md" color="orange" :trailing="false"
          placeholder="Search..." model-value="fawfawf" />
      </div>
      <div class="border-t pt-4">
        <h4 class="px-4">Quizes</h4>
        <!-- <UButton class="mt-3 block w-full" icon="i-heroicons-lamp" size="md" :color="item == 1 ? 'orange' : 'gray'"
          variant="soft" label="Button" :trailing="false" v-for="item in 6" :key="item">
          category name
        </UButton> -->
        <div
          class="flex items-center justify-between my-2 py-2 px-4 last:mb-0 hover:bg-orange-50 transition-colors duration-300 cursor-pointer"
          v-for="item in 6" :key="item">
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
      <div class="px-4 pb-5">
        <h4 class="text-xl">Quiz detail</h4>
      </div>
      <div class="border-t pt-4">
        
        <h4 class="px-4">Quiz detail</h4>
        <div
          class="flex items-center justify-between my-2 py-2 px-4 last:mb-0 hover:bg-orange-50 transition-colors duration-300 cursor-pointer"
          v-for="item in 6" :key="item">
          <h3>{{ item }}-Savol</h3>
          <div class="flex gap-2">
            <UButton icon="i-heroicons-pencil" size="sm" color="green" square variant="soft" />
            <UButton icon="i-heroicons-trash" size="sm" color="red" square variant="soft" />
          </div>
        </div>
      </div>
    </div>
    <!-- quiz detail -->
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>