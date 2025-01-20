<script setup lang="ts">
defineProps<{
  state: boolean
}>()

defineEmits<{
  toggle: []
}>()
</script>

<template>
  <div class="block lg:hidden text-white ml-auto">
    <div class="flex flex-col justify-center">
      <div class="relative sm:max-w-xl mx-auto">
        <button
          class="text-white w-10 h-10 relative focus:outline-none"
          @click="$emit('toggle')"
        >
          <span class="sr-only">Abrir menú principal</span>
          <div class="block w-5 absolute top-1/2 transform ">
            <span
              aria-hidden="true"
              class="block absolute h-1.5 w-12 bg-current transform transition duration-500 ease-in-out rounded-full"
              :class="{ 'rotate-45 -bottom-1 translate-y-0': state, ' -translate-y-1.5 -top-1.5': !state }"
            />
            <span
              aria-hidden="true"
              class="block absolute h-1.5 w-12 bg-current transform transition duration-500 ease-in-out rounded-full"
              :class="{ 'opacity-0': state }"
            />
            <span
              aria-hidden="true"
              class="block absolute h-1.5 w-12 bg-current transform transition-all duration-500 ease-in-out rounded-full"
              :class="{ '-rotate-45 -bottom-1 translate-y-0': state, ' translate-y-1.5 -bottom-3': !state }"
            />
          </div>
        </button>
      </div>
    </div>
  </div>
</template>
