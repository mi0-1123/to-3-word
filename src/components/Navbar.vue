<template>
  <div>
    <el-menu default-active="1" class="el-menu-demo" mode="horizontal">
      <el-menu-item index="1">to 3 words</el-menu-item>
      <el-menu-item index="2">What is 3 words?</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import "../css/element-variables";

.el-header {
  background: $--color-primary;
  // display: flex;
  // flex-direction: row-reverse;
  .div {
    font-size: 30px;
  }
}
</style>


