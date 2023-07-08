<template>
  <div class="xtx-checkbox" @click="changeChecked()">
    <i v-if="checked" class="iconfont icon-checked"></i>
    <i v-else class="iconfont icon-unchecked"></i>
    <span v-if="$slots.default"><slot /></span>
  </div>
</template>

<script>
import { useVModel } from '@vueuse/core'
export default {
  name: 'XtxCheckbox',
  props: {
    modelValue: {
      type: Boolean,
      default: false
    }
  },
  setup (props, { emit }) {
    // vue3.0中v-model会拆解成 属性 modelValue 和 事件 update:modelValue
    // 通过useVModel可以简化这个过程实现数据的双向绑定v-model
    // 1.使用props接收父组件传递的数据默认modelValue
    // 2.使用useVModel包装props中的modelValue属性数据
    // 3.在使用checked.value就是使用父组件数据
    // 4.在使用checked.value = xxx就是修改父组件数据，触发emit('update:modelValue', 'xxx')事件
    const checked = useVModel(props, 'modelValue', emit)
    const changeChecked = () => {
      c
      // 通知父组件
      checked.value = !checked.value
    }
    return {
      checked,
      changeChecked
    }
  }
}
</script>
<style scoped lang="less">
.xtx-checkbox {
  display: inline-block;
  margin-right: 2px;
  .icon-checked {
    color: @xtxColor;
    ~ span {
      color: @xtxColor;
    }
  }
  i {
    position: relative;
    top: 1px;
  }
  span {
    margin-left: 2px;
  }
}
</style>
