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

</template>

<script>
import HomeCategory from './components/home-category.vue'
import HomeBanner from './components/home-banner.vue'
import HomeNew from './components/home-new.vue'
import Home from './components/home-hot.vue'
export default {
  name: 'HomePage',
  components: {
    HomeCategory,
    HomeBanner,
    HomeNew
  }
}
</script>

<style scoped lang="less">
.container {
  .hoverShadow();
  color: @xtxColor;
}
</style>
