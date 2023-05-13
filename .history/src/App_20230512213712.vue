<template>
  <div>
    <!-- <div>{{ $store.state.username }}</div>
    <div>{{ $store.getters.newName }}</div>
    <div>{{ $store.getters['newName'] }}</div>
    <button @click="mutationsFn">mutationsFn</button> -->

    <div>app组件</div>
    <ul>
      <li v-for="item in $store.getters.boys" :key="item.id">
        {{ item.name }}
      </li>
    </ul>
    <!-- 使用模块A的username -->
    <p>A的userename---{{ $store.state.a.username }}</p>
    <p>A的changeName---{{ $store.getters.changeName }}</p>
    <hr />
    <p>B的userename---{{ $store.state.b.username }}</p>
    <p>B的changeName---{{ $store.getters['b/changeName'] }}</p>
    <button @click></button>
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
