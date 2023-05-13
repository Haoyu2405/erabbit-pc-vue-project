<template>
  <div>
    <div>{{ $store.state.username }}</div>
    <div>{{ $store.getters.newName }}</div>
    <div>{{ $store.getters['newName'] }}</div>
    b
  </div>
</template>

<script>
import { useStore } from 'vuex'
export default {
  setup () {
    // 使用vuex仓库
    const store = useStore()
    console.log(store.state.username)

  }
}
</script>
<style scoped></style>
