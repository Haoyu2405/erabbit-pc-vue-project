<template>
  <div class="xtx-bread">
    <slot />>
  </div>
</template>

<script>
export default {
  name: 'XtxBread',
  props: {
    // 父级类目路径
    parentPath: {
      type: [String, Object],
      default: '/'
    },
    // 父级类目名称
    parentName: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="less">
// 去掉scoped，让样式可以在xtx-bread-item组件中使用
.xtx-bread {
  display: flex;
  padding: 25px 10px;
  &-item {
    a {
      color: #666;
      transition: all 0.4s;
      &:hover {
        color: @xtxColor;
      }
    }
  }
  i {
    font-size: 12px;
    margin-left: 5px;
    margin-right: 5px;
    line-height: 22px;
  }
}
</style>
