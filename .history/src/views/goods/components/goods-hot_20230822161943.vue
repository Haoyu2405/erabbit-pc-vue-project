<template>
  <div class="goods-hot">
    <h3>24小时热销榜</h3>
    <div>
      <GoodsItem v-for="i in 3" :key="i"></GoodsItem>
    </div>
  </div>
</template>

<script>
import GoodsItem from '@/views/category/components/goods-item.vue'
export default {
  name: 'GoodsHot',
  components: {
    GoodsItem
  }
}
</script>
<style scoped lang="less">
.goods-hot { h3 { height: 70px; background: @helpColor; color: #fff; font-size:
18px; line-height: 70px; padding-left: 25px; margin-bottom: 10px; font-weight:
normal; } ::v-deep .goods-item { background: #fff; width: 100%; margin-bottom:
10px; img { width: 200px; height: 200px; } p { margin: 0 10px; } &:hover {
transform: none; box-shadow: none; } } }
</style>
