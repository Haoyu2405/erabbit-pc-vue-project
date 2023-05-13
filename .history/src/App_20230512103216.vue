<template>
  <div>
    <div> {{ $store.state.username }} </div>
    <div> {{ $store.getters.newName }}</div>
    <div> {{ $store.getters[''] }}</div>
  </div>
</template>

<script>
export default {
}

</script>
<style scoped></style>
