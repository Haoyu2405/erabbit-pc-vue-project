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
  // 使用
}

</script>
<style scoped></style>
