<template>
 <div class="goods-hot">
    <h3>24小时热销榜</h3>
    <div>
      <GoodsItem v-for="i in 3" :key="i"></GoodsItem>
    </div>
  </div>
</template>

<script>
import GoodsItem from '@/'
export default {
  name: 'GoodsHot',

}

</script>
<style scoped lang="less">
</style>
