<template>
  <!-- 顶部通栏 -->
  <AppNavBar />
  <!-- 头部吸顶组件 -->
  <AppHeaderSticky />
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
import AppHeaderSticky from '@/components/app-header-sticky'
import AppFooter from '@/components/app-footer'
import { useStore } from 'vuex'
export default {
  name: 'Layout',
  components: {
    AppNavBar,
    AppHeader,
    AppFooter,
    AppHeaderSticky
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
