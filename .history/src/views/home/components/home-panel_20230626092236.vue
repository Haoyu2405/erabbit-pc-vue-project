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
    subTitle: { type: String, default: '' }
  }
}
</script>
<style scoped lang="less"></style>
