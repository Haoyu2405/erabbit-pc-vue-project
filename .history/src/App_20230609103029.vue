<template>
  <div>
    App
    <button @click="fn">测试request函数</button>
  </div>
</template>

<script>
import request from '@/utils/request'
export default {
  name: 'App',
  setup () {
    const fn = () => {
      request('/mem')
    }
    return {fn}
  }
}
</script>
<style scoped></style>
