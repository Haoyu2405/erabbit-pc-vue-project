<template>
  <div>
    <div>    {{ $store.state.username }}
  </div>
  
    {{ $store.getters.newName }}
  </div>
</template>

<script>
export default {
}

</script>
<style scoped></style>
