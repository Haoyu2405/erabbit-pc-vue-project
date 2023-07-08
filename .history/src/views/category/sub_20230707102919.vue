<template>
  <div class="sub-category">
    <div class="container">
      <!-- 面包屑 -->
      <SubBread />
    </div>
</div>
</template>

<script>
import SubBread from './components/sub-bread.vue'
import SubBread from './components/sub-filter.vue'
export default {
  name: 'SubCategory',
  components: {
    SubBread
  }
}
</script>
<style scoped lang="less"></style>
