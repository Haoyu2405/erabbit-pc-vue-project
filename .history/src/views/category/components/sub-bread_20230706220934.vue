<template>
  <XtxBread>
    <XtxBreadItem to="/">首页</XtxBreadItem>
    <XtxBreadItem to="/">电器</XtxBreadItem>
    
      <XtxBreadItem >{{
        category.sub.name
      }}</XtxBreadItem>
  
  </XtxBread>
</template>

<script>
export default {
  name: ''
}
</script>
<style scoped lang="less"></style>
