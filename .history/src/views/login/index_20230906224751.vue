<template>
  <LoginHeader>欢迎登录</LoginHeader>
  <LoginFooter
</template>
<script>
import LoginHeader from './components/login-header.vue'
import LoginFooter from './components/login-footer.vue'
export default {
  name: 'PageLogin',
  components: {
    LoginHeader,
    LoginFooter
  }
}
</script>
<style scoped lang="less"></style>
