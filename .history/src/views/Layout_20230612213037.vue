<template>
  <!-- 顶部通栏 -->
  <AppNavBar />
  <!-- 头部组件 -->
  <header>头部组件</header>
  <!-- 内容容器 -->
  <div class="main">
    <!-- 二级路由 -->
    <RouterView />
  </div>
  <!-- 底部组件 -->
  <footer>底部组件</footer>
</template>
<script>
import AppNavBar from '@/components/app-navbar'
export default {
  name: 'LayOut',
  components: {
    AppNavBar
  }
}
</script>
<style scoped lang="less"></style>
