<template>
  <div class="sub-category">
    <div class="container">
      <!-- 面包屑 -->
      <SubBread />
      <!-- 筛选区  -->
      <SubFilter />
      <!-- 商品面板 （排序+列表） -->
      <div class="goods-list">
        <SubSort />
        <!-- 列表 -->
        <ul>
          <li v-for="i in 20" :key="i">
            <GoodsItem :goods="{}" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import SubBread from './components/sub-bread.vue'
import SubFilter from './components/sub-filter.vue'
import SubSort from './components/sub-sort.vue'
import SubSort from './components/goods-item.vue'
export default {
  name: 'SubCategory',
  components: {
    SubBread,
    SubFilter,
    SubSort
  },
  setup () {
    const isAllChecked = ref(false)
    return { isAllChecked }
  }
}
</script>
<style scoped lang="less">
.goods-list {
  background: #fff;
  padding: 0 25px;
  margin-top: 25px;
}
</style>
