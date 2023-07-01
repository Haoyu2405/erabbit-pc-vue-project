<template>
  <div class="xtx-bread">
    <div class="xtx-bread-item">
      <RouterLink to="/">首页</RouterLink>
    </div>
    <i class="iconfont icon-angle-right"></i>
    <div class="xtx-bread-item" v-if="parentName">
      <RouterLink v-if="parentPath" :to="parentPath">
        {{ parentName }}
      </RouterLink>
      <span v-else>{{ parentName }}</span>
    </div>
    <i v-if="parentName" class="iconfont icon-angle-right"></i>
    <div class="xtx-bread-item">
      <span>
        <!-- 类名用插槽显示 -->
        <slot />
      </span>
    </div>
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
// 去掉scoped，让样式可以在其他组件中使用
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
