<template>
  <ul>
    <li
      :class="className"
      v-for="(question,index) in questionArr"
    >
      问题{{index}}:{{question}}
    </li>
    <li>{{users}}</li>
    <!-- <button @click="foo()">点击按钮通过$root操作根组件状态状态</button> -->
    <slot></slot>
  </ul>
</template>
<script lang="ts">
import { Component, Prop, Vue, Inject } from "vue-property-decorator";

@Component
export default class ItemContainer extends Vue {
  // 依赖注入
  @Inject("users")
  private users!: object[];
  @Prop({
    type: Array,
    required: true,
    default: ["请传入问题列表"]
  })
  private questionArr!: string[];
  @Prop({
    type: String,
    default: ["className"]
  })
  private className!: string;

  // 生命周期函数
  mounted() {
    alert("模板挂载上去啦");
  }

  destroyed() {
    alert("模板挂删除啦");
  }

  // 操作$root，仅用于实验。应该用vuex替代。
  // foo() {
  //   this.$root.status += 1;
  // }
}
</script>

<style scoped lang="scss">
.red {
  background-color: red;
}
.yellow {
  background-color: yellow;
}
ul,
li {
  list-style: none;
  text-align: left;
}
</style>
