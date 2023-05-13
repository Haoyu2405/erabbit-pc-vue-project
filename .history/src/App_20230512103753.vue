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
  setup () {
    // 使用vuex仓库
    const store = useStore()
console.log(object);
  }

}

</script>
<style scoped></style>
