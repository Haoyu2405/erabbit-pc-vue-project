<template>
  <div class="sub-category">
    <div class="container">
      <!-- 面包屑 -->
      <SubBread />
      <!-- 筛选区  -->
      <SubFilter />
      <!-- 商品面板 （排序+列表） -->
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import SubBread from './components/sub-bread.vue'
import SubFilter from './components/sub-filter.vue'
export default {
  name: 'SubCategory',
  components: {
    SubBread,
    SubFilter
  },
  setup () {
    const isAllChecked = ref(false)
    return { isAllChecked }
  }
}
</script>
<style scoped lang="less"></style>
