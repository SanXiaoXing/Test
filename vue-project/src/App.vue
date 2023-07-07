<template>
  <div>
    <!-- <element-view></element-view> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import ElementView from "./views/element/ElementView.vue";
// import EmpView from "./views/tlias/EmpView.vue";
export default {
  components: { /* ElementView, */ /* EmpView */ },
  data() {
    return {
      message: "hello",
    };
  },
  methods: {},
};
</script>
<style>
</style>
