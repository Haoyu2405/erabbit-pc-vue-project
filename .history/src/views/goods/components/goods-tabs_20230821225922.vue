<template>
  <div class="goods-tabs">
    <nav>
      <a
        @click="activeName = 'GoodsDetail'"
        :class="{ active: activeName === 'GoodsDetail' }"
        href="javascript:;"
        >商品详情</a
      >
      <a
        @click="activeName = 'GoodsComment'"
        :class="{ active: activeName === 'GoodsComment' }"
        href="javascript:;"
        >商品评价<span>(500+)</span></a
      >
    </nav>
    <!-- 切换内容的地方 -->
    <!-- <GoodsComment v-if="activeName === 'GoodsComment'" />
    <GoodsDetail v-if="activeName === 'GoodsDetail'" /> -->
    <!-- 被传给 :is 的值可以是以下几种： 被注册的组件名 导入的组件对象 -->
    <!-- 当使用 <component :is="..."> 来在多个组件间作切换时，被切换掉的组件会被卸载。
    可以通过 <KeepAlive> 组件强制被切换掉的组件仍然保持“存活”的状态。 -->
    <!-- <keep-alive>
      <component :is="activeName" />
    </keep-alive> -->
    <component 
  </div>
</template>

<script>
import { ref } from 'vue'
import GoodsComment from './goods-comment.vue'
import GoodsDetail from './goods-detail.vue'
export default {
  name: 'GoodsTabs',
  components: { GoodsComment, GoodsDetail },
  setup () {
    // 约定 activeName 'GoodsDetail' 'GoodsComment'
    const activeName = ref('GoodsDetail')
    return { activeName }
  }
}
</script>
<style scoped lang="less">
.goods-tabs {
  min-height: 600px;
  background: #fff;
  nav {
    height: 70px;
    line-height: 70px;
    display: flex;
    border-bottom: 1px solid #f5f5f5;
    a {
      padding: 0 40px;
      font-size: 18px;
      position: relative;
      > span {
        color: @priceColor;
        font-size: 16px;
        margin-left: 10px;
      }
      &:first-child {
        border-right: 1px solid #f5f5f5;
      }
      &.active {
        &::before {
          content: '';
          position: absolute;
          left: 40px;
          bottom: -1px;
          width: 72px;
          height: 2px;
          background: @xtxColor;
        }
      }
    }
  }
}
</style>
