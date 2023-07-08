<template>
  <div class="sub-filter" v-if="filterData">
    <div class="item">
      <div class="head">品牌：</div>
      <div class="body">
        <a href="javascript:;" v-for="item in filterData.brands" :key="item.id">{{item.id}}</a>
      </div>
    </div>
    <div class="item" v-for="item in filterData.saleProperties" :key="item.id">
      <div class="head">{{ item.n }}</div>
      <div class="body">
        <a href="javascript:;">全部</a>
        <a href="javascript:;" v-for="i in 4" :key="i">小米</a>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { findSubCategoryFilter } from '@/api/category'
export default {
  name: 'SubFilter',
  setup () {
    const route = useRoute()
    // 监听二级类目id的变化获取筛选数据
    const filterData = ref(null)
    watch(
      () => route.params.id,
      newVal => {
        // 变化后的id有值且处在二级类目下才获取筛选数据
        if (newVal && `/category/sub/${newVal}` === route.path) {
          // 发请求获取数据
          findSubCategoryFilter(route.params.id).then(data => {
            // 每一组可选的筛选条件缺失全部条件，处理原始数据加上全部条件
            // 1.品牌
            data.result.brands.unshift({ name: '全部', id: null })
            // 2.属性
            data.result.saleProperties.forEach(item => {
              item.properties.unshift({ name: '全部', id: null })
            })
            // 设置修改的数据
            filterData.value = data.result
            console.log(data.result)
          })
        }
      },
      {
        immediate: true
      }
    )
    return {
      filterData
    }
  }
}
</script>
<style scoped lang="less">
// 筛选区
.sub-filter {
  background: #fff;
  padding: 25px;
  .item {
    display: flex;
    line-height: 40px;
    .head {
      width: 80px;
      color: #999;
    }
    .body {
      flex: 1;
      a {
        margin-right: 36px;
        transition: all 0.3s;
        display: inline-block;
        &.active,
        &:hover {
          color: @xtxColor;
        }
      }
    }
  }
}
</style>
