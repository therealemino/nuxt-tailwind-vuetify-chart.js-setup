<template>
  <div
    class="flex h-screen w-full font-planc"
    :class="{ 'dark': darkMode }"
  >
    <aside class="fixed font-inter top-0 min-h-screen flex items-center justify-center w-60 bg-gray-50 dark:bg-gray-800 dark:text-gray-50" @click="toggleTheme">
      Sidebar (click to toggleTheme)
    </aside>
    <main class="font-inter w-full ml-60">
      <Nuxt />
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dark: false,
    }
  },
  computed: {
    darkMode() {
      return this.$store.state.darkMode
    },
  },
  mounted() {
    // console.log(this.$route.path)
  },
  methods: {
    toggleTheme() {
      this.dark = !this.dark
      this.$store.commit('setDarkMode', this.dark)
    },
  }
}
</script>

<style>

</style>