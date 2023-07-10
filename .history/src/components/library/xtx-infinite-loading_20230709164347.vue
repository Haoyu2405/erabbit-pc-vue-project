<template>
  <div class="xtx-infinite-loading">
    <div class="loading" v-if="loading">
      <span class="img"></span>
      <span class="text">正在加载...</span>
    </div>
    <div class="none" v-if="finished">
      <span class="img"></span>
      <span class="text">亲，没有更多了</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'XtxInfiniteLoading',
}
</script>
<style scoped lang="less"></style>
