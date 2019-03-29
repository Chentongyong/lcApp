<template>
  <div class="tabble">
      <router-link to="">首页</router-link>
      <router-link to="">分类</router-link>
      <router-link to="">购物车</router-link>
      <router-link to="">我的</router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },

  components: {},

  computed: {},

//   mounted: {},

  methods: {}
}

</script>
<style lang='less' scoped>
.tabble{
    width: 100%;
    display: flex;
    justify-content: space-around
}
</style>