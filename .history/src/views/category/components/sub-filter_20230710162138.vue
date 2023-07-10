<template>
  <div class="sub-filter" v-if="filterData && !filterLoading">
    <div class="item">
      <div class="head">品牌：</div>
      <div class="body">
        <a
          href="javascript:;"
          v-for="item in filterData.brands"
          :key="item.id"
          :class="{'active': item.id === filterData.brands.selectedBrand}"
          @click="changeBrand(item.id)"
          >{{ item.name }}</a
        >
      </div>
    </div>
    <div class="item" v-for="item in filterData.saleProperties" :key="item.id">
      <div class="head">{{ item.name }}</div>
      <div class="body">
        <a href="javascript:;" v-for="prop in item.properties" :key="prop.id"
        :class="{'active': prop.id === item.selectedProp}"
        @click="changeProp(item.id, prop.id)"
        >{{
          prop.name
        }}</a>
      </div>
    </div>
  </div>
  <div v-else class="sub-filter">
    <XtxSkeleton class="item" width="800px" height="40px" />
    <XtxSkeleton class="item" width="800px" height="40px" />
    <XtxSkeleton class="item" width="600px" height="40px" />
    <XtxSkeleton class="item" width="600px" height="40px" />
    <XtxSkeleton class="item" width="600px" height="40px" />
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
    // 数据请求是否发送完毕的标志
    const filterLoading = ref(false)
    watch(
      () => route.params.id,
      newVal => {
        // 变化后的id有值且处在二级类目下才获取筛选数据
        if (newVal && `/category/sub/${newVal}` === route.path) {
          filterLoading.value = true
          // 发请求获取数据
          findSubCategoryFilter(route.params.id).then(data => {
            // 每一组可选的筛选条件缺失全部条件，处理原始数据加上全部条件
            // 1.品牌
            data.result.brands.selectedBrand = null
            data.result.brands.unshift({ name: '全部', id: null })
            // 2.属性
            data.result.saleProperties.forEach(item => {
              item.selectedProp = null
              item.properties.unshift({ name: '全部', id: null })
            })
            // 设置修改的数据
            filterData.value = data.result
            // console.log(data.result)
            filterLoading.value = false
          })
        }
      },
      {
        immediate: true
      }
    )

    // 1.记录选择的品牌
    const changeBrand = brandId => {
      // console.log(brandId)
      filterData.value.selectedBrand = brandId
    }
    
    return {
      filterData,
      filterLoading
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
  .xtx-skeleton {
    padding: 10px 0;
  }
}
</style>
