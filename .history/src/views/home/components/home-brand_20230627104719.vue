<template>
  <HomePanel title="热门品牌" sub-title="国际经典 品质保证">
    <template v-slot:right>
      <a @click="toggle(-1)" href="javascript:;" class="iconfont icon-angle-left prev"></a>
      <a @click="toggle(1)" href="javascript:;" class="iconfont icon-angle-right next"></a>
    </template>
    <div class="box" ref="target">
      <ul class="list">
        <li v-for="item in brands" :key="item.id">
          <RouterLink to="/">
            <img :src="item.picture" alt="" />
          </RouterLink>
        </li>
      </ul>
    </div>
  </HomePanel>
</template>

<script>
import { ref } from 'vue'
import HomePanel from './home-panel'
import { findBrand } from '@/api/home'
// import { useLazyData } from '@/hooks'
export default {
  name: 'HomeBrand',
  components: { HomePanel },
  setup () {
    // const { target, result } = useLazyData(findBrand(10))
    // return { brands: result, target }
    const brands = ref([])
    findBrand(10).then(res => {
      brands.value = res.result
    })
    const index = ref(0)
    const toggle = (step)=>{
      index.value += step
      if(index.value < 0 || index,valu)
    }
    return { brands }
  }
}
</script>

<style scoped lang="less">
.home-panel {
  background: #f5f5f5;
}
.iconfont {
  width: 20px;
  height: 20px;
  background: #ccc;
  color: #fff;
  display: inline-block;
  text-align: center;
  margin-left: 5px;
  background: @xtxColor;
  &::before {
    font-size: 12px;
    position: relative;
    top: -2px;
  }
  &.disabled {
    background: #ccc;
    cursor: not-allowed;
  }
}
.box {
  display: flex;
  width: 100%;
  height: 345px;
  overflow: hidden;
  padding-bottom: 40px;
  .list {
    width: 200%;
    display: flex;
    transition: all 1s;
    li {
      margin-right: 10px;
      width: 240px;
      &:nth-child(5n) {
        margin-right: 0;
      }
      img {
        width: 240px;
        height: 305px;
      }
    }
  }
}
</style>
