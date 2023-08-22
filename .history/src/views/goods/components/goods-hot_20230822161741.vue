<template>
 <div class="goods-hot">
    <h3>24小时热销榜</h3>
    <div>
      <GoodsItem v-for="i in 3"></GoodsItem>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
}

</script>
<style scoped lang="less">
</style>
