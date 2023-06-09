<template>
  <div>
<!-- 修改数据，测试是否数据持久化 -->
{{ $store.state.user.profile.account }}
<button @click="$store.commit('user/setUser',{account:'hy'})">设置用户 </button>
  </div>
</template>

<script>
export default {
}

</script>
<style scoped>
</style>
