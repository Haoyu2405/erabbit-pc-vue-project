<template>
  <div class="sub-sort">
    <div class="sort">
      <a :class="{ active: sortParams.sortField === null }" href="javascript:;"
        >默认排序</a
      >
      <a :class="{ active: sortParams.sortField === 'publishTime' }" href="javascript:;"
        >最新商品</a
      >
      <a :class="{ active: sortParams.sortField === 'orderNum' }" href="javascript:;"
        >最高人气</a
      >
      <a :class="{ active: sortParams.sortField === 'e' }" href="javascript:;"
        >评论最多</a
      >
      <a @click="changeSort()" href="javascript:;">
        价格排序
        <i class="arrow up" />
        <i class="arrow down" />
      </a>
    </div>
    <div class="check">
      <XtxCheckbox v-model="sortParams.inventory">仅显示有货商品</XtxCheckbox>
      <XtxCheckbox v-model="sortParams.onlyDiscount"
        >仅显示特惠商品</XtxCheckbox
      >
    </div>
  </div>
</template>
<script>
import { reactive } from 'vue'
export default {
  name: 'SubSort',
  setup () {
    // 实现交互（实现交换的数据和后台保持一致）
    // 1.明确交互数据
    const sortParams = reactive({
      inventory: false,
      onlyDiscount: false,
      sortField: null,
      sortMethod: null
    })
    // 2.提供模板使用
    return { sortParams }
  }
}
</script>
<style scoped lang="less">
.sub-sort {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .sort {
    display: flex;
    a {
      height: 30px;
      line-height: 28px;
      border: 1px solid #e4e4e4;
      padding: 0 20px;
      margin-right: 20px;
      color: #999;
      border-radius: 2px;
      position: relative;
      transition: all 0.3s;
      &.active {
        background: @xtxColor;
        border-color: @xtxColor;
        color: #fff;
      }
      .arrow {
        position: absolute;
        border: 5px solid transparent;
        right: 8px;
        &.up {
          top: 3px;
          border-bottom-color: #bbb;
          &.active {
            border-bottom-color: @xtxColor;
          }
        }
        &.down {
          top: 15px;
          border-top-color: #bbb;
          &.active {
            border-top-color: @xtxColor;
          }
        }
      }
    }
  }
  .check {
    .xtx-checkbox {
      margin-left: 20px;
      color: #999;
    }
  }
}
</style>
