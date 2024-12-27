<template>
  <div
    class="fixed bottom-0 left-0 w-full bg-darkBackground text-pandaWhite flex justify-around items-center p-3 shadow-md"
  >
    <button @click="goTo('')" class="flex flex-col items-center text-sm">
      <span>Home</span>
    </button>
    <button @click="goTo('rooms')" class="flex flex-col items-center text-sm">
      <span>Rooms</span>
    </button>
    <button @click="goTo('your-room')" class="flex flex-col items-center text-sm">
      <span>Your Room</span>
    </button>
    <button @click="goTo('settings')" class="flex flex-col items-center text-sm">
      <span>Settings</span>
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    goTo(route) {
      this.$router.push(`/${route}`)
    },
  },
}
</script>

<style scoped>
button {
  padding: 8px;
}
</style>
