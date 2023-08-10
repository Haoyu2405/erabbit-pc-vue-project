<template>
  <div class="goods-image">
    <!-- 大图 -->
    <div
      v-show="show"
      class="large"
      :style="[{ backgroundImage: `url(${images[currIndex]})` }, largePosition]"
    ></div>
    <!-- 中图 -->
    <div class="middle">
      <img :src="images[currIndex]" alt="" />
      <!-- 遮罩层 -->
      <div v-show="show" class="layer" :style="layerPosition"></div>
    </div>
    <!-- 小图 -->
    <ul class="small">
      <li
        v-for="(img, i) in images"
        :key="img"
        :class="{ active: i === currIndex }"
      >
        <img @mouseenter="currIndex = i" :src="img" alt="" />
      </li>
    </ul>
  </div>
</template>
<script>
import { ref, reactive, watch } from 'vue'
import { useMouseInElement } from '@vueuse/core'
export default {
  name: 'GoodsImage',
  props: {
    images: {
      type: Array,
      default: () => []
    }
  },
  setup (props) {
    // 当前选中的图片索引
    const currIndex = ref(0)

    // 是否显示遮罩和大图
    const show = ref(false)
    // 遮罩的坐标
    const layerPosition = reactive({
      left: 0,
      top: 0
    })
    // 大图的背景定位
    const largePosition = reactive({
      backgroundPositionX: 0,
      backgroundPositionY: 0
    })

    // 使用基于useMouseInElement得到基于元素左上角的坐标以及是否离开元素的数据
    const { elementX, elementY, isOutside } = useMouseInElement()
    watch([elementX, elementY, isOutside], () => {
      // 根据得到的数据计算出遮罩的坐标和是否显示数据
      show.value = !isOutside.value
      // 计算坐标
      const postion = {
        x:0,
        y:0
      }
      // 遮罩的坐标
      if(elementX.value <= 100) {
        postion.x = 0
      } else if(elementX.value >= 300) {
        postion.x = 200
      } else {
        postion.x = elementX.value - 100
      }
      if(elementY.value <= 100) {
        postion.y = 0
      } else if(elementY.value >= 300) {
        postion.y = 200
      } else {
        postion.y = elementY.value - 100
      }
      // 设置遮罩的坐标
      layerPosition.left = postion.x + 'px'
      layerPosition.top = postion.y + 'px'
      // 设置大图的背景定位
      largePosition.backgroundPositionX = -postion.x * 2 + 'px'
      largePosition.backgroundPositionY = -postion.y * 2 + 'px'
    })

    return { currIndex, show, layerPosition, largePosition }
  }
}
</script>
<style scoped lang="less">
.goods-image {
  width: 480px;
  height: 400px;
  position: relative;
  display: flex;
  z-index: 500;
  .large {
    position: absolute;
    top: 0;
    left: 412px;
    width: 400px;
    height: 400px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-repeat: no-repeat;
    background-size: 800px 800px;
    background-color: #f8f8f8;
  }
  .middle {
    width: 400px;
    height: 400px;
    background: #f5f5f5;
    position: relative;
    cursor: move;
    .layer {
      width: 200px;
      height: 200px;
      background: rgba(0, 0, 0, 0.2);
      left: 0;
      top: 0;
      position: absolute;
    }
  }
  .small {
    width: 80px;
    li {
      width: 68px;
      height: 68px;
      margin-left: 12px;
      margin-bottom: 15px;
      cursor: pointer;
      &:hover,
      &.active {
        border: 2px solid @xtxColor;
      }
    }
  }
}
</style>
