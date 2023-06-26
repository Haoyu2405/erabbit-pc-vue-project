<template>
  <div class="home-new">
    <HomePanel title="新鲜好物" sub-title="新鲜出炉  ">
      <template #right>
        <XtxMore path="/goods" />
      </template>
    </HomePanel>
  </div>
</template>

<script>
import HomePanel from '@/components/home-panel.vue'
export default {
  name: 'HomeNew',
  components: {
    HomePanel
  }
}
</script>
<style scoped lang="less"></style>
