<template>
  <div class="about">
    <h1>This is an about page</h1>
    <input
      type="text"
      v-model="msg"
    >
    <button @click="clear()">清空</button>
    <input
      type="checkbox"
      v-model="checked"
    >{{checked}}
    <ItemContainer
      :className="className"
      :questionArr="questionArr"
      ref="itemContainer"
    >{{msg}}</ItemContainer>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Provide } from "vue-property-decorator";
import ItemContainer from "@/components/ItemContainer.vue"; // @ is an alias to /src

@Component({
  components: {
    ItemContainer
  }
})
export default class Home extends Vue {
  // 提供和注入不会更新 父传子
  @Provide("users")
  users = [
    {
      name: "kangkang",
      age: 18
    },
    {
      name: "maria",
      age: 19
    }
  ];
  msg = "用于测试slot";
  questionArr = ["你是谁？", "你叫啥"];
  checked: boolean = true;
  get className() {
    return this.msg.length % 2 === 0 ? "red" : "yellow";
  }

  // 生命周期函数
  created() {
    console.log("vue创建了！");
  }

  private clear() {
    this.msg = "";
    console.log(this.$refs.itemContainer);
  }
}
</script>
