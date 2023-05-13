<template>
  <div>
    <div> {{ $store.state.username }} </div>
    <div> {{ $store.getters.newName }}</div>
    <div> {{ $store.getters['newName'] }}</div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
export default {
  // 使用vuex仓库
  const Store = userS
}

</script>
<style scoped></style>
