<template>
  <div class="xtx-city" ref="target">
    <div class="select" @click="onToggle" :class="{ active: visible }">
      <span class="placeholder">请选择配送地址</span>
      <span class="value"></span>
      <i class="iconfont icon-angle-down"></i>
    </div>
    <div class="option" v-if="visible">
      <span class="ellipsis" v-for="i in 24" :key="i">北京市</span>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
export default {
  name: 'XtxCity',
  setup () {
    // 显示隐藏数据
    const visible = ref(false)
    const target = ref(null)
    // 提供显示和隐藏方法
    const onShow = () => {
      visible.value = true
    }
    const onHide = () => {
      visible.value = false
    }

    // 监听鼠标点击城市选择框以外区域
    onClickOutside(target, () => {
      visible.value = false
    })
    // 提供切换显示与隐藏的方法
    const onToggle = () => {
      visible.value ? onHide() : onShow()
    }
    return { visible, target, onToggle }
  }
}
// 获取城市数据
// 1.数据源：https://yjy-oss-files.oss-cn-zhangjiakou.aliyuncs.com/tuxian/area.json
// 2.何时获取？ 打开城市列表的时候，做个内存缓存
// 3.如何获取？ 使用axios请求数据，使用window全局对象保存数据
// 4.怎么使用2
</script>

<style lang="less">
.xtx-city {
  display: inline-block;
  position: relative;
  z-index: 400;
  .select {
    border: 1px solid #e4e4e4;
    height: 30px;
    padding: 0 5px;
    line-height: 28px;
    cursor: pointer;
    &.active {
      background: #fff;
    }
    .placeholder {
      color: #999;
    }
    .value {
      color: #666;
      font-size: 12px;
    }
    i {
      font-size: 12px;
      margin-left: 5px;
    }
  }
  .option {
    width: 542px;
    border: 1px solid #e4e4e4;
    position: absolute;
    left: 0;
    top: 29px;
    background: #fff;
    min-height: 30px;
    line-height: 30px;
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    > span {
      width: 130px;
      text-align: center;
      cursor: pointer;
      border-radius: 4px;
      padding: 0 3px;
      &:hover {
        background: #f5f5f5;
      }
    }
  }
}
</style>
