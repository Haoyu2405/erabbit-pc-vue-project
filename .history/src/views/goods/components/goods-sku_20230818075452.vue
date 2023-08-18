<template>
  <div class="goods-sku">
    <dl v-for="item in goods.specs" :key="item.id">
      <dt>{{ item.name }}</dt>
      <dd>
        <template v-for="val in item.values" :key="val.name">
          <img
            @click="onClickSpecs(item, val)"
            :class="{ selected: val.selected }"
            v-if="val.picture"
            :src="val.picture"
            :title="val.name"
          />
          <span
            :class="{ selected: val.selected }"
            @click="onClickSpecs(item, val)"
            v-else
            >{{ val.name }}</span
          >
        </template>
      </dd>
    </dl>
  </div>
</template>
<script>
import powerSet from '@/vendor/power-set'

// 按钮的名字数组
const getSelectedValue = specs => {
  const arr = []
  specs.forEach(item => {
    // 查找选中的按钮对象
    const selectedBtn = item.values.find(btn => btn.selected)
    // 往数组追加选中的按钮对象的名字，如果按钮没选中则为undefined
    arr.push(selectedBtn ? selectedBtn.name : undefined)
  })
  return arr
}

// 更新按钮禁用状态
const updateDisabledStatus = (specs, pathMap) => {
  // 约定每一个按钮的禁用状态：disabled
  specs.forEach((item, i) => {
    const selectedValues = getSelectedValue(specs)
    item.values.forEach(val => {
      // 判断当前是否选中，是选中不用判断
      if( val.selected) return
      // 拿当前的值按照顺序套入选中的值数组
    })
  })
}

// 得到一个路径字典对象
const getPathMap = skus => {
  // 1.得到所有skus集合， props.goods.skus
  // 2.从所有的skus中筛选出有效的skus
  // 3.根据有效的skus使用power-set算法得到子集
  // 4.根据子集往路径字典对象中存储 key-value
  const pathMap = {}
  const spliter = '★'
  skus.forEach(sku => {
    if (sku.inventory > 0) {
      // 计算当前有库存的sku的子集
      // 例如: [1,2,3] => [[1],[2],[3],[1,2],[1,3],[2,3],[1,2,3]]
      // 可选值数组
      const valueArr = sku.specs.map(spec => spec.valueName)
      // 得到子集
      const valueArrPowerSet = powerSet(valueArr)
      // 遍历子集，存储到路径字典对象中
      valueArrPowerSet.forEach(valueArr => {
        // 约定key为 ['蓝色', '中国'] ===> ['蓝色★中国']
        const key = valueArr.join(spliter)
        // 设置路径字典对象的key-value
        if (pathMap[key]) {
          // 如果已经存在，就往数组中添加
          pathMap[key].push(sku.id)
        } else {
          // 如果不存在，就创建一个数组
          pathMap[key] = [sku.id]
        }
      })
    }
  })
  return pathMap
}

export default {
  name: 'GoodsSku',
  props: {
    goods: {
      type: Object,
      default: () => ({})
    }
  },
  setup (props) {
    const pathMap = getPathMap(props.goods.skus)
    // 绑定鼠标点击事件，切换选中状态与取消选中状态 约定选中状态：selected
    const onClickSpecs = (item, val) => {
      if (val.selected) {
        val.selected = false
      } else {
        item.values.forEach(itemValue => {
          itemValue.selected = false
        })
        val.selected = true
      }
      // ☆点击按钮时，更新按钮禁用状态
    }
    return { onClickSpecs }
  }
}
</script>
<style scoped lang="less">
.sku-state-mixin () {
  border: 1px solid #e4e4e4;
  margin-right: 10px;
  cursor: pointer;
  &.selected {
    border-color: @xtxColor;
  }
  &.disabled {
    opacity: 0.6;
    border-style: dashed;
    cursor: not-allowed;
  }
}
.goods-sku {
  padding-left: 10px;
  padding-top: 20px;
  dl {
    display: flex;
    padding-bottom: 20px;
    align-items: center;
    dt {
      width: 50px;
      color: #999;
    }
    dd {
      flex: 1;
      color: #666;
      > img {
        width: 50px;
        height: 50px;
        .sku-state-mixin ();
      }
      > span {
        display: inline-block;
        height: 30px;
        line-height: 28px;
        padding: 0 20px;
        .sku-state-mixin ();
      }
    }
  }
}
</style>
