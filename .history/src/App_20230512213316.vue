<template>
  <div>
    <!-- <div>{{ $store.state.username }}</div>
    <div>{{ $store.getters.newName }}</div>
    <div>{{ $store.getters['newName'] }}</div>
    <button @click="mutationsFn">mutationsFn</button> -->

    <div>app组件</div>
    <ul>
      <li v-for="item in $store.getters.boys" :key=""></li>
    </ul>
  </div>
</template>

<script>
// import { useStore } from 'vuex'
// export default {
//   setup () {
//     // 使用vuex仓库
//     const store = useStore()
//     console.log(store.state.username)
//     const mutationsFn = () => {
//       console.log('click')
//       // 执行actions的方法
//       store.dispatch('updateName')
//       // 执行mutations的方法
//       store.commit('updateName1')
//     }

//     return { mutationsFn }
//   }
// }
</script>
<style scoped></style>
