<template>
  <LoginHeader>欢迎登录</LoginHeader>
  <LoginFooter />
</template>
<script>
import LoginHeader from './components/login-header'
import LoginFooter from './components/login-footer'
export default {
  name: 'PageLogin',
  components: {
    LoginHeader,
    LoginFooter
  }
}
</script>
<style scoped lang="less"></style>
