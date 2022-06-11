<template>
  <div class="modal animate-moveUp z-20 flex items-center justify-center fixed top-0 left-0 h-screen w-full dark:text-gray-800" @click="closeImageModal">
    <div class="p-6 bg-white rounded-md w-2/6">
      <div class="flex items-center justify-between">
        <p class="font-planc-bold">Image</p>
        <img src="/img/cancel.svg" alt="" width="32px" @click="closeImageModal">
      </div>
      <img :src="img" alt="" class="mt-4">
    </div>
  </div>
</template>

<script>
export default {
  props: [ 'img' ],
  data() {
    return {
    }
  },
  methods: {
    closeImageModal() {
      this.$emit('closeImageModal')
    },
  }
}
</script>

<style>

</style>