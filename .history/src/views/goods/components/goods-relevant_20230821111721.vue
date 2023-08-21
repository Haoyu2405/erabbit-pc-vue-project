<template>
  <div class="goods-relevant">
    <div class="header">
      <i class="icon" />
      <span class="title">{{ goodsId ? '同类商品推荐' : '猜你喜欢' }}</span>
    </div>
    <!-- 此处使用改造后的xtx-carousel.vue -->
  </div>
</template>

<script>
import { findRelevantGoods } from '@/api/product'
import { ref } from 'vue'
export default {
  // 同类推荐，猜你喜欢
  name: 'GoodsRelevant',
  props: {
    goodsId: {
      type: String,
      default: ''
    }
  },
  setup (props) {
    // 最终需要的数据是sliders提供给轮播图组件使用
    // sliders的结构：[[], [], []]
    const sliders = ref([])
    findRelevantGoods({ id: props.goodsId }).then(data => {
      // data.result是商品列表数组，里面有16条数据 []
      // 有4页数据，每页4条数据
      const pageSize = 4
      const pageCount = Math.ceil(data.result.length / pageSize)
      // 生成一个二维数组
      for (let i = 0; i < pageCount; i++) {
        // slice()方法不会改变原数组，而是返回一个新数组
        sliders.value.push(data.result.slice(i * pageSize, (i + 1) * pageSize))
      }
      console.log(sliders)
    })
    return {
      sliders
    }
  }
}
</script>

<style scoped lang="less">
.goods-relevant {
  background: #fff;
  min-height: 460px;
  margin-top: 20px;
  .header {
    height: 80px;
    line-height: 80px;
    padding: 0 20px;
    .title {
      font-size: 20px;
      padding-left: 10px;
    }
    .icon {
      width: 16px;
      height: 16px;
      display: inline-block;
      border-top: 4px solid @xtxColor;
      border-right: 4px solid @xtxColor;
      box-sizing: border-box;
      position: relative;
      transform: rotate(45deg);
      &::before {
        content: '';
        width: 10px;
        height: 10px;
        position: absolute;
        left: 0;
        top: 2px;
        background: lighten(@xtxColor, 40%);
      }
    }
  }
}
</style>
