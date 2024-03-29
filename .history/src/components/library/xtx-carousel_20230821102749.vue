<template>
  <div class="xtx-carousel" @mouseenter="stop()" @mouseleave="start()">
    <!-- 图片容器 -->
    <ul class="carousel-body">
      <!-- fade 修饰显示的图片 -->
      <li
        class="carousel-item"
        v-for="(item, idx) in sliders"
        :key="idx"
        :class="{ fade: activeIndex === idx }"
      >
        <!--  -->
        <RouterLink to="/">
          <img :src="item.imgUrl" alt="" />
        </RouterLink>
      </li>
    </ul>
    <!-- 上一张 -->
    <a @click="toggle(-1)" href="javascript:;" class="carousel-btn prev"
      ><i class="iconfont icon-angle-left"></i
    ></a>
    <!-- 下一张 -->
    <a @click="toggle(1)" href="javascript:;" class="carousel-btn next"
      ><i class="iconfont icon-angle-right"></i
    ></a>
    <!-- 指示器 -->
    <div class="carousel-indicator">
      <!-- active 设置激活点的背景颜色 -->
      <span
        @click="activeIndex = idx"
        v-for="(item, idx) in sliders"
        :key="idx"
        :class="{ active: activeIndex === idx }"
      ></span>
    </div>
  </div>
</template>

<script>
import { onUnmounted, ref, watch } from 'vue'
export default {
  name: 'XtxCarousel',
  props: {
    // 轮播图数据
    sliders: {
      type: Array,
      // 箭头函数返回空数组作为默认值
      default: () => []
    },
    // 是否自动轮播
    autoPlay: {
      type: Boolean,
      default: false
    },
    // 轮播的时间间隔
    interval: {
      type: Number,
      default: 3000
    }
  },
  setup (props) {
    // 默认显示图片的索引
    const activeIndex = ref(0)

    // 1.自动轮播的逻辑
    // eslint-disable-next-line no-unused-vars
    let timer = null
    const autoPlayFn = () => {
      // 开启定时器前先清除定时器
      clearInterval(timer)
      timer = setInterval(() => {
        activeIndex.value++
        if (activeIndex.value >= props.sliders.length) {
          activeIndex.value = 0
        }
      }, props.interval)
    }
    // 需要监听sliders数据变化，判断如果有数据且autoPlay为true时，才执行自动轮播
    watch(
      // 监听的数据
      () => props.sliders,
      () => {
        if (props.sliders.length && props.autoPlay) {
          autoPlayFn()
        }
      },
      // 静态数据立即执行
      { immediate: true }
    )

    // 2.鼠标移入暂停播放，移出自动播放
    const stop = () => {
      clearInterval(timer)
    }
    const start = () => {
      if (props.sliders.length && props.autoPlay) {
        autoPlayFn()
      }
    }

    // 3.点击左右箭头切换上一张下一张图片
    const toggle = step => {
      const newIndex = activeIndex.value + step
      // 判断是否越界
      if (newIndex < 0) {
        activeIndex.value = props.sliders.length - 1
        return
      }
      if (newIndex > props.sliders.length) {
        activeIndex.value = 0
        return
      }
      activeIndex.value = newIndex
    }

    // 4.组件销毁，清除定时器
    onUnmounted(() => {
      clearInterval(timer)
    })
    return { activeIndex, stop, start, toggle }
  }
}
</script>
<style scoped lang="less">
.xtx-carousel {
  width: 100%;
  height: 100%;
  min-width: 300px;
  min-height: 150px;
  position: relative;
  .carousel {
    &-body {
      width: 100%;
      height: 100%;
    }
    &-item {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0;
      transition: opacity 0.5s linear;
      &.fade {
        opacity: 1;
        z-index: 1;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
    &-indicator {
      position: absolute;
      left: 0;
      bottom: 20px;
      z-index: 2;
      width: 100%;
      text-align: center;
      span {
        display: inline-block;
        width: 12px;
        height: 12px;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 50%;
        cursor: pointer;
        ~ span {
          margin-left: 12px;
        }
        &.active {
          background: #fff;
        }
      }
    }
    &-btn {
      width: 44px;
      height: 44px;
      background: rgba(0, 0, 0, 0.2);
      color: #fff;
      border-radius: 50%;
      position: absolute;
      top: 228px;
      z-index: 2;
      text-align: center;
      line-height: 44px;
      opacity: 0;
      transition: all 0.5s;
      &.prev {
        left: 20px;
      }
      &.next {
        right: 20px;
      }
    }
  }
  &:hover {
    .carousel-btn {
      opacity: 1;
    }
  }
}
</style>
