<template>
  <!-- <首页入口 -->
  <div class="home-entry">
    <div class="container">
      <!--左侧分类-->
      <HomeCategory />
      <!-- 轮播图 -->
      <HomeBanner />
    </div>
  </div>
  <!-- 新鲜好物 -->
  <HomeNew />
  <!-- 人气推荐 -->
  <HomeHot />
  <button @click="d">显示</button>
  <button>隐藏</button>
  <div class="box"></div>
</template>

<script>
import HomeCategory from './components/home-category.vue'
import HomeBanner from './components/home-banner.vue'
import HomeNew from './components/home-new.vue'
import HomeHot from './components/home-hot.vue'
import { ref } from 'vue'
export default {
  name: 'HomePage',
  components: {
    HomeCategory,
    HomeBanner,
    HomeNew,
    HomeHot
  },
  setup () {
    const show = ref(true)
    return { show }
  }
}
</script>

<style scoped lang="less">
.container {
  .hoverShadow();
  color: @xtxColor;
}

.box {
  width: 100px;
  height: 100px;
  background-color: red;
}
</style>
