<template>
<div id=app>

<router-view></router-view>
<maintabbar></maintabbar>
</div>
</template>

<script>
import maintabbar from './components/maintabbar.vue'
export default {
  name: "App",
  components: {
   maintabbar
  },
};
</script>
<style>
</style>
