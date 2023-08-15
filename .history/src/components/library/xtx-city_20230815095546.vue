<template>
  <div class="xtx-city" ref="target">
    <div class="select" @click="onToggle" :class="{ active: visible }">
      <span v-if="!fullLocation" class="placeholder">请选择配送地址</span>
      <span v-else class="value">{{ fullLocation }}</span>
      <i class="iconfont icon-angle-down"></i>
    </div>
    <div class="option" v-if="visible">
      <div v-if="loading" class="loading"></div>
      <template v-else>
        <span class="ellipsis" v-for="item in currList" :key="item.code">{{
          item.name
        }}</span>
      </template>
    </div>
  </div>
</template>

<script>
import { ref, computed, reactive } from 'vue'
import { onClickOutside } from '@vueuse/core'
import axios from 'axios'
export default {
  name: 'XtxCity',
  props: {
    fullLocation: {
      type: String,
      default: ''
    }
  },
  setup (props, ) {
    // 显示隐藏数据
    const visible = ref(false)
    const target = ref(null)
    // 城市数据缓存
    const allCityData = ref(null)
    // 正在加载
    const loading = ref(false)

    // 提供显示和隐藏方法
    const onShow = () => {
      visible.value = true
      loading.value = true
      // 获取城市数据
      getCityData().then(data => {
        allCityData.value = data
        loading.value = false
      })
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

    // 定义计算属性
    const currList = computed(() => {
      const list = allCityData.value
      return list
    })

    // 定义选择的省市区数据
    const changeResult = reactive({
      provinceCode: '',
      provinceName: '',
      cityCode: '',
      cityName: '',
      countryCode: '',
      countryName: '',
      fullLocation: ''
    })

    // 省市区点击事件
    const onChangeItem = (item) => {
      // 判断点击的是省市区
      if (item.level === 1) {
        // 点击的是省份
        changeResult.provinceCode = item.code
        changeResult.provinceName = item.name
       
      } else if (item.level === 2) {
        // 点击的是城市
        changeResult.cityCode = item.code
        changeResult.cityName = item.name
      
      } else if (item.level === 3) {
        // 点击的是区县
        changeResult.countryCode = item.code
        changeResult.countryName = item.name
        changeResult.fullLocation =
          `${changeResult.provinceName} ${changeResult.cityName} ${changeResult.countryName}`
      }
      // 隐藏城市列表
      onHide()
      // 触发change事件
      emit('change', changeResult)

    }
    
    return { visible, target, onToggle, allCityData, loading, currList }
  }
}
// 获取城市数据
// 1.数据源：https://yjy-oss-files.oss-cn-zhangjiakou.aliyuncs.com/tuxian/area.json
// 2.何时获取？ 打开城市列表的时候，做个内存缓存
// 3.如何获取？ 使用axios请求数据，使用window全局对象保存数据
// 4.怎么使用数据？ 定义计算属性，根据点击的省份城市展示
const getCityData = () => {
  // 可能有异步操作，所以使用Promise
  return new Promise((resolve, reject) => {
    if (window.cityData) {
      // 如果有数据，直接返回
      resolve(window.cityData)
    } else {
      // 如果没有数据，请求数据
      axios
        .get(
          'https://yjy-oss-files.oss-cn-zhangjiakou.aliyuncs.com/tuxian/area.json'
        )
        .then(res => {
          // 将数据保存到全局对象中
          window.cityData = res.data
          // 返回数据
          resolve(res.data)
        })
    }
  })
}
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
    // 加载中样式
    .loading {
      height: 290px;
      width: 100%;
      background: url(../../assets/images/loading.gif) no-repeat center;
    }
  }
}
</style>
