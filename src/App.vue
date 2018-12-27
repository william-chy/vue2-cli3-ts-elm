<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <form>
        url:user/ <input
          type="text"
          v-model="input1"
        >
        参数action:<input
          type="text"
          v-model="input2"
        >
        <button
          type="button"
          @click="jump()"
        >跳转</button>
      </form>

      <!-- 状态{{status}} -->
    </div>
    <router-view />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
@Component
export default class AppComponent extends Vue {
  // 仅用于实验。应该用vuex替代。
  // get status() {
  //   return this.$root.status;
  // }
  input1: string = "";
  input2: string = "";
  jump() {
    this.$router.push({
      path: `/user/${this.input1}`,
      query: { action: this.input2 }
    });
  }
}
</script>


<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
