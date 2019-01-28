<template>
  <div id="app">
    <navbar style="margin-bottom:10px"/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  name: "App",
  components: { Navbar }
};
</script>

<style lang="scss">
</style>
