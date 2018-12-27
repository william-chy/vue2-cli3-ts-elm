<template>
  <div>
    通过url传递的参数：{{id}}
    通过url的问号后面的参数传过来了：{{query}}
    {{this.$route.params}}
    {{this.$route.id}}
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Inject } from "vue-property-decorator";

@Component
export default class TestRouteComponent extends Vue {
  @Prop() private query!: object;
  @Prop() private id!: number;
}
</script>

<style scoped lang="scss">
</style>
