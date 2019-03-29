<template>
  <div class="hello">
    <router-link to="/home"> go to home</router-link>
    <h4>{{ msg }}</h4>
    <div>
      {{ count }}
      <p>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  computed: {
    count() {
      return this.$store.state.count;
    }
  },
  methods: {
    increment() {
      this.$store.commit("increment");
    },
    decrement() {
      this.$store.commit("decrement");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
// 1rem = 80px
// 1px  =  0.125rem
@vas: red;
h1,
h2 {
  font-weight: normal;
  font-size: 14px;
}

a {
  color: @vas;
  font-size: 14px;
}
</style>
