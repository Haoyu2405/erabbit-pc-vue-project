<template>
  <HomePanel title="人气推荐" sub-title="人气爆款 不容错过">
    <ul class="goods-list">
      <li v-for="item in goods" :key="item.id">
        <RouterLink to="/">
          <img :src="item.picture" alt="" />
          <p class="name">{{ item.title }}</p>
          <p class="desc">{{ item.alt }}</p>
        </RouterLink>
      </li>
    </ul>
  </HomePanel>
</template>

<script>
import HomePanel from './home-panel.vue'
export default {
  name: 'HomeHot',
  components: {
    HomePanel
  },
  setup () {
    const goods = ref([])
    return { goods }
  }
}
</script>
<style scoped lang="less"></style>
