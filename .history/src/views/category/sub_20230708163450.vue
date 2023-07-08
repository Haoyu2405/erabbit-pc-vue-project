<template>
  <div class="sub-category">
    <div class="container">
      <!-- 面包屑 -->
      <SubBread />
      <!-- 筛选区  -->
      <SubFilter />
      <!-- 测试复选框 -->
      <XtxCheckbox v-model="isAllChecked">全部</XtxCheckbox>{{ checked  }}
    </div>
  </div>
</template>

<script>
import SubBread from './components/sub-bread.vue'
import SubFilter from './components/sub-filter.vue'
export default {
  name: 'SubCategory',
  components: {
    SubBread,
    SubFilter
  },
  setup(){
    const isAllChecked = ref(false)
    
  }
}
</script>
<style scoped lang="less"></style>
