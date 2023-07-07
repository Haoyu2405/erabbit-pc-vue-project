<template>
  <XtxBread>
    <XtxBreadItem to="/">首页</XtxBreadItem>
    <XtxBreadItem to="/">电器</XtxBreadItem>
    <XtxBreadItem>空调</XtxBreadItem>
  </XtxBread>
</template>

<script>
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
export default {
  name: 'SubBread',
  setup () {
    // 通过计算属性从vuex获取顶级和二级类目信息
    // 数据对象：{top:{id,name},sub:{id,name}}
    const store = useStore()
    const route = useRoute()
    const category = computed(() => {
      const cate = {}
      // 完成获取数据逻辑
      store.state.category.list.forEach(top => {
        if (top.children) {
          const sub = top.children.find(sub => sub.id === route.params.id)
          if(sub){
            cate.top = top
          }
        }
      })
      return cate
    })
  }
}
</script>
<style scoped lang="less"></style>
