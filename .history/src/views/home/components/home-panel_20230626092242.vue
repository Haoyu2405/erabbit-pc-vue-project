<template>
  <div class="container"></div>
</template>

<script>
export default {
  name: 'HomePanel',
  props: {
    title: {
      type: String,
      default: ''
    },
    // 副标题
    subTitle: { type: String, default: '' }
  }
}
</script>
<style scoped lang="less"></style>
