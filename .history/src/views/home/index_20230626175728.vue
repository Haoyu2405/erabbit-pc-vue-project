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
  <button @click="show = true">显示</button>
  <button @click="show = false">隐藏</button>
  <Transition>
    <div v-show="show" class="box"></div>
  </Transition>
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

.v-enter-from{
  opacity: 0;
}
.v-enter-active{
  transition: opacity 2s
}
.v-enter-to{
  opacity: 1;
}
.v-leave-from{
  opacity: 1;
}
.v-leave-
</style>
