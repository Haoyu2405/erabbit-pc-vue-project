<template>
  <div>
    <div></div>
    {{ $store.state.username }}
    {{ $store.getters.newName }}
  </div>
</template>

<script>
export default {
}

</script>
<style scoped></style>
