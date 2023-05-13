<template>
  <div>
    {{ $store.state.username }}
    {{ $store.getters.username }}
  </div>
</template>

<script>
export default {
}

</script>
<style scoped></style>
