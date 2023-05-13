<template>
  <div>
    <div>{{ $store.state.username }}</div>
    <div>{{ $store.getters.newName }}</div>
    <div>{{ $store.getters['newName'] }}</div>
    <button @click="mutationsFn">mutationsFn</button>
  </div>
</template>

<script>
import { useStore } from 'vuex'
export default {
  setup () {
    // 使用vuex仓库
    const store = useStore()
    console.log(store.state.username)
    const mutationsFn = () => {
      store.dispatch('updateName')
    }

    return 
  }
}
</script>
<style scoped></style>
