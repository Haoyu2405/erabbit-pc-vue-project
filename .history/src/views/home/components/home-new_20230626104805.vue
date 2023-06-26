<template>
  <div class="home-new">
    <HomePanel title="新鲜好物" sub-title="新鲜出炉 品质推荐">
      <template #right>
        <XtxMore path="/goods" />
      </template>
      <!-- 面板内容 -->
    </HomePanel>
  </div>
</template>

<script>
import HomePanel from '@/components/home-panel.vue'
export default {
  name: 'HomeNew',
  components: {
    HomePanel
  },
  setup () {
    const goods = ref([])
    // 获取新鲜好物数据
    findNew().then((data)=>{
      
    })
        return {}
  }
}
</script>
<style scoped lang="less"></style>
