<template>
  <div class="xtx-goods-page">
    <div class="container">
      <!-- 面包屑 -->
      <XtxBread>
        <XtxBreadItem v-if="goods" to="/">首页</XtxBreadItem>
        <XtxBreadItem v-if="goods" to="/">{{  }}</XtxBreadItem>
        <XtxBreadItem v-if="goods" to="/">华为</XtxBreadItem>
        <XtxBreadItem v-if="goods" to="/">p30</XtxBreadItem>
      </XtxBread>
      <!-- 商品信息 -->
      <div class="goods-info"></div>
      <!-- 商品推荐 -->
      <GoodsRelevant v-if="goods"/>
      <!-- 商品详情 -->
      <div class="goods-footer">
        <div class="goods-article">
          <!-- 商品+评价 -->
          <div class="goods-tabs"></div>
          <!-- 注意事项 -->
          <div class="goods-warn"></div>
        </div>
        <!-- 24热榜+专题推荐 -->
        <div class="goods-aside"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { nextTick } from 'vue'
import GoodsRelevant from './components/goods-relevant'
import { useRoute } from 'vue-router'
import { findGoods } from '@/api/product'
import { ref, watch } from 'vue'
export default {
  name: 'XtxGoodsPage',
  components: { GoodsRelevant },
  setup () {
    const goods = useGoods()
    return { goods }
  }
}
const useGoods = () => {
  const goods = ref(null)
  const route = useRoute()
  watch(
    () => route.params.id,
    newVal => {
      if (newVal && `/product/${newVal}` === route.path) {
        findGoods(route.params.id).then(data => {
          // 将goods设置为null，可以让设置了v-if的组件重新初始化
          goods.value = null
          nextTick(() => {
            // 等待dom更新后再设置goods
            goods.value = data.result
          })
        })
      }
    }
  )
  return { goods }
}
</script>

<style scoped lang="less">
.goods-info {
  min-height: 600px;
  background: #fff;
}
.goods-footer {
  display: flex;
  margin-top: 20px;
  .goods-article {
    width: 940px;
    margin-right: 20px;
  }
  .goods-aside {
    width: 280px;
    min-height: 1000px;
  }
}
.goods-tabs {
  min-height: 600px;
  background: #fff;
}
.goods-warn {
  min-height: 600px;
  background: #fff;
  margin-top: 20px;
}
</style>
