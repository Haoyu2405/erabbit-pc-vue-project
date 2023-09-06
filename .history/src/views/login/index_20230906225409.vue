<template>
  <LoginHeader>欢迎登录</LoginHeader>
  <section class="login-section">
    <div class="wrapper">
      <nav>
        <a href="javascript:;">账户登录</a>
        <a href="javascript:;">扫码登录</a>
      </nav>
    </div>
  </section>

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
