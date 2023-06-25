<template>
  <div class="home-banner">
    <!-- 轮播图 -->
    <XtxCarousel ：/>
  </div>
</template>

<script>
import { ref } from 'vue'
import { findBanner } from '@/api/home'
export default {
  name: 'HomeBanner',
  setup () {
    // 获取轮播图数据
    const sliders = ref([])
    findBanner().then(data => {
      sliders.value = data.result
    })
    return { sliders }
  }
}
</script>
<style scoped lang="less">
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;
}
.xtx-carousel {
  //  ::v-deep 代表穿透,允许覆盖改写父组件的样式
  //   In Vue.js, the ::v-deep selector is used to target and apply styles to deeply
  // nested child components within a parent component. It allows you to override the
  // default encapsulation of styles in Vue's single-file components.
  ::v-deep .carousel-btn.prev {
    left: 270px;
  }
  ::v-deep .carousel-indicator {
    padding-left: 250px;
  }
}
</style>
