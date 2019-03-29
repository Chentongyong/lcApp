<template>
  <div class="head">
      <mt-header title="大家好我是">
        <router-link to="/" slot="left">
            <mt-button icon="back">back</mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
  </div>
</template>

<script>
import Vue from 'vue'
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);
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
</style>