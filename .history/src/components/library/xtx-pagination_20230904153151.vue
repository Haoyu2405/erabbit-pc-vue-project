<template>
  <div class="xtx-pagination">
    <a href="javascript:;" class="disabled">上一页</a>
    <span>...</span>
    <a href="javascript:;" class="active">3</a>
    <a href="javascript:;">4</a>
    <a href="javascript:;">5</a>
    <a href="javascript:;">6</a>
    <a href="javascript:;">7</a>
    <span>...</span>
    <a href="javascript:;">下一页</a>
  </div>
</template>
<script>
export default {
  name: 'XtxPagination',
  setup () {
    // 需要数据:
    // 1.约定按钮的个数5个，如果成为动态的需要设置响应式数据
    const count = 5
    // 2.当前页码
    const myCurrentPage = ref(1)
    // 3.总页数 = 总条数myTotal / 每页条数myPageSize 向上取整
    const myTotal = ref(100)
    const myPageSize = ref(10)
    // 其他数据（）

  }
}
</script>
<style scoped lang="less">
.xtx-pagination {
  display: flex;
  justify-content: center;
  padding: 30px;
  > a {
    display: inline-block;
    padding: 5px 10px;
    border: 1px solid #e4e4e4;
    border-radius: 4px;
    margin-right: 10px;
    &:hover {
      color: @xtxColor;
    }
    &.active {
      background: @xtxColor;
      color: #fff;
      border-color: @xtxColor;
    }
    &.disabled {
      cursor: not-allowed;
      opacity: 0.4;
      &:hover {
        color: #333;
      }
    }
  }
  > span {
    margin-right: 10px;
  }
}
</style>
