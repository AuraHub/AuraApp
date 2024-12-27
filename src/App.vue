<template>
  <div id="app" class="bg-darkBackground text-pandaWhite min-h-screen flex flex-col">
    <!-- Router View: Dynamic content from the router will be displayed here -->
    <router-view></router-view>

    <!-- Bottom Navigation Bar -->
    <BottomBar />
  </div>
</template>

<script>
import BottomBar from './components/BottomBar.vue'

export default {
  components: {
    BottomBar,
  },
}
</script>
