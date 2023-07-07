<template>
  <XtxBread>
    <XtxBreadItem to="/">首页</XtxBreadItem>
    <XtxBreadItem to="/">电器</XtxBreadItem>
    <XtxBreadItem>空调</XtxBreadItem>
  </XtxBread>
</template>

<script>
export default {
  name: 'SubBread',
  setup(){
    // 通过计算属性从vuex获取顶级和二级类目信息
    // 数据对象：{top:{id}}
  }
}
</script>
<style scoped lang="less"></style>
