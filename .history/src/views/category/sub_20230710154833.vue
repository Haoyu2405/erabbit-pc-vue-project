<template>
  <div class="sub-category">
    <div class="container">
      <!-- 面包屑 -->
      <SubBread />
      <!-- 筛选区  -->
      <SubFilter />
      <!-- 商品面板 （排序+列表） -->
      <div class="goods-list">
        <SubSort @sort-change=""/>
        <!-- 列表 -->
        <ul>
          <li v-for="goods in goodsList" :key="goods.id">
            <GoodsItem :goods="goods" />
          </li>
        </ul>
        <!-- 无限加载组件 -->
        <XtxInfiniteLoading
          :loading="loading"
          :finished="finished"
          @infinite="getData"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import SubBread from './components/sub-bread.vue'
import SubFilter from './components/sub-filter.vue'
import SubSort from './components/sub-sort.vue'
import GoodsItem from './components/goods-item.vue'
import { findSubCategoryGoods } from '@/api/category'
export default {
  name: 'SubCategory',
  components: {
    SubBread,
    SubFilter,
    SubSort,
    GoodsItem
  },
  setup () {
    const route = useRoute()
    const loading = ref(false)
    const finished = ref(false)
    // 商品列表
    const goodsList = ref([])
    // 查询参数
    let reqParams = {
      page: 1,
      pageSize: 20
    }

    // 获取数据函数
    const getData = () => {
      loading.value = true
      // 设置二级分类的id
      reqParams.categoryId = route.params.id
      findSubCategoryGoods(reqParams).then(({ result }) => {
        // 获取数据成功
        if (result.items.length) {
          goodsList.value.push(...result.items)
          // 把page加1
          reqParams.page++
        } else {
          // 没有更多数据了
          finished.value = true
        }
        loading.value = false
      })
    }

    // 切换二级分类重新加载数据
    watch(
      () => route.params.id,
      newVal => {
        if (newVal && `/category/sub/${newVal}` === route.path) {
          // console.log(1111);
          finished.value = false
          goodsList.value = []
          reqParams = {
            page: 1,
            pageSize: 20
          }
        }
      }
    )

    // 1.更改排序组件的筛选数据，重新请求
    const sortChange = sortParams => {
      console.log(sortParams)
    }
    return { getData, loading, finished, goodsList, sortChange }
  }
}
</script>
<style scoped lang="less">
.goods-list {
  background: #fff;
  padding: 0 25px;
  margin-top: 25px;
  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0 5px;
    li {
      margin-right: 20px;
      margin-bottom: 20px;
      &:nth-child(5n) {
        margin-right: 0;
      }
    }
  }
}
</style>
