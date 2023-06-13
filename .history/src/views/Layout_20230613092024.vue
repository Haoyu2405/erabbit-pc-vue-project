<template>
  <!-- 顶部通栏 -->
  <AppNavBar />
  <!-- 头部组件 -->
  <AppHeader />
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
import AppHeader from '@/components/app-header'
import AppFooter from '@/components/app-footer'
export default {
  name: 'LayOut',
  components: {
    AppNavBar,
    AppHeader,
    AppFooter
  }
}
</script>
<style scoped lang="less"></style>
