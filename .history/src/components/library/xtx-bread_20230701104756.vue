<script>
import { h } from 'vue'
export default {
  name: 'XtxBread',
  render () {
    // 用法
    // 1.template标签去掉，单文件 
    return <div class='xtx-bread'>{this.$slots.default}</div>
  }
}
</script>

<style lang="less">
// 去掉scoped，让样式可以作用于xtx-bread-item组件
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
