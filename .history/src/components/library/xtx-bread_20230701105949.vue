<script>
import { h } from 'vue'
export default {
  name: 'XtxBread',
  render () {
    // 用法
    // 1.template标签去掉，单文件组件
    // 2.返回值就是组件内容
    // 3.vue2.0的h函数是传参进来的，vue3.0的h函数是引入进来的
    // 4.h函数 第一个参数是标签名，第二个参数是标签属性，第三个参数是标签内容
    // 需求
    // 1.创建xtx-bread父容器
    // 2.获取默认插槽内容
    // 3.去掉xtx-bread-item组件的i标签，由render函数来实现
    // 4.遍历插槽内容，给每个xtx-bread-item组件添加i标签得到动态创建的节点，最后一个xtx-bread-item组件不添加i标签
    // 5.把动态创建的节点添加到xtx-bread父容器中
    const item = this.$slots.default()
    const dynamicItem = []
    item.forEach(())=>{
dynamicItem.push(item)
    }
    return h('div', { class: 'xtx-bread' }, '子节点')
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
