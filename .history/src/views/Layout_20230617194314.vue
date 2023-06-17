<template>
  <!-- 顶部通栏 -->
  <AppNavBar />
  <!-- 头部  -->
  <!-- 头部组件 -->
  <AppHeader />
  <!-- 内容容器 -->
  <div class="app-body">
    <!-- 二级路由 -->
    <RouterView />
  </div>
  <!-- 底部组件 -->
  <AppFooter />
</template>
<script>
import AppNavBar from '@/components/app-navbar'
import AppHeader from '@/components/app-header'
import AppFooter from '@/components/app-footer'
import { useStore } from 'vuex'
export default {
  name: 'LayOut',
  components: {
    AppNavBar,
    AppHeader,
    AppFooter
  },
  setup () {
    const store = useStore()
    store.dispatch('category/getList')
  }
}
</script>
<style scoped lang="less">
.app-body {
  min-height: 600px;
}
</style>
