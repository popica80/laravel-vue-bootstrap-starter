<template>
  <div id="app">
    <TopNavbar />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import TopNavbar from './components/TopNavbar'
export default {
  components: {
    TopNavbar
  }
}
</script>
