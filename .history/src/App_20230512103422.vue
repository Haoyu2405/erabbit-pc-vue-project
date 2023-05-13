<template>
  <div>
    <div> {{ $store.state.username }} </div>
    <div> {{ $store.getters.newName }}</div>
    <div> {{ $store.getters['newName'] }}</div>
  </div>
</template>

<script>
import {useStore}
export default {
}

</script>
<style scoped></style>
