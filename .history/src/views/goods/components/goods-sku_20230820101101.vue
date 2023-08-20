<template>
  <div class="goods-sku">
    <dl v-for="item in goods.specs" :key="item.id">
      <dt>{{ item.name }}</dt>
      <dd>
        <template v-for="val in item.values" :key="val.name">
          <img
            @click="onClickSpecs(item, val)"
            :class="{ selected: val.selected, disabled: val.disabled }"
            v-if="val.picture"
            :src="val.picture"
            :title="val.name"
          />
          <span
            :class="{ selected: val.selected, disabled: val.disabled }"
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
const spliter = '★'

// 获取已选中的值数组
const getSelectedValues = specs => {
  const arr = []
  specs.forEach(item => {
    // 查找选中的按钮对象
    const selectedVal = item.values.find(val => val.selected)
    // 往数组追加选中的按钮对象的名字，如果按钮没选中则为undefined
    arr.push(selectedVal ? selectedVal.name : undefined)
  })
  return arr
}

// 更新按钮禁用状态
const updateDisabledStatus = (specs, pathMap) => {
  // 约定每一个按钮的禁用状态：disabled
  specs.forEach((item, i) => {
    const selectedValues = getSelectedValues(specs)
    item.values.forEach(val => {
      // 判断当前是否选中，是选中不用判断
      if (val.selected) return
      // 未选中的，拿当前的值按照顺序套入选中的值数组
      selectedValues[i] = val.name
      // 剔除undefined数据，按照分隔符拼接key
      const key = selectedValues.filter(value => value).join(spliter)
      // 拿着key判断路径字典对象中是否存在数据，有可以点击，没有不能点击
      val.disabled = !pathMap[key]
    })
  })
}

// 根据skus数据得到路径字典对象
const getPathMap = skus => {
  // 1.得到所有skus集合， props.goods.skus
  // 2.从所有的skus中筛选出有效的skus
  // 3.根据有效的skus使用power-set算法得到子集
  // 4.根据子集往路径字典对象中存储 key-value
  const pathMap = {}
  skus.forEach(sku => {
    if (sku.inventory > 0) {
      // 计算当前有库存的sku的子集
      // 例如: [1,2,3] => [[1],[2],[3],[1,2],[1,3],[2,3],[1,2,3]]
      // 可选值数组
      const valueArr = sku.specs.map(val => val.valueName)
      // 得到子集
      const valueArrPowerSet = powerSet(valueArr)
      // 遍历子集，存储到路径字典对象中
      valueArrPowerSet.forEach(arr => {
        // 约定key为 ['蓝色', '中国'] ===> ['蓝色★中国']
        const key = arr.join(spliter)
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

// 默认选中
const initDefaultSelected = (goods, skuId) => {
  // 1.根据skuId找到对应的sku对象
  // 2.遍历每一个按钮，按钮的值和sku记录的值相同就选中
  const sku = goods.skus.find(item => item.id === skuId)
  goods.specs.forEach((item, i) => {
    const val = item.values.find(val => val.name === sku.specs[i].valueName)
    val.selected = true
  })
}

export default {
  name: 'GoodsSku',
  props: {
    goods: {
      type: Object,
      default: () => ({})
    },
    skuId: {
      type: String,
      default: ''
    }
  },
  setup (props, { emit }) {
    // 组件初始化的时候，根据skuId设置默认选中
    initDefaultSelected(props.goods, props.skuId)
    const pathMap = getPathMap(props.goods.skus)
    // ☆组件初始化的时候,更新禁用状态
    updateDisabledStatus(props.goods.specs, pathMap)
    // 绑定鼠标点击事件，切换选中状态与取消选中状态 约定选中状态：selected
    const onClickSpecs = (item, val) => {
      // 如果是禁用状态不作为
      if (val.disabled) return false
      // 选中与取消选中逻辑
      if (val.selected) {
        val.selected = false
      } else {
        item.values.forEach(itemValue => {
          itemValue.selected = false
        })
        val.selected = true
      }
      // ☆点击按钮时，更新按钮禁用状态
      // console.log(getSelectedValues(props.goods.specs))
      updateDisabledStatus(props.goods.specs, pathMap)
      // 将选择的sku信息通知给父组件{ skuId, price, oldPrice, inventory, specsText }
      // 1.选择完整的sku组合按钮, 才可以拿到这些信息, 提交父组件
      // 2.如果没有完整的sku组合按钮, 提交父组件的信息是空的
      const validSelectedValues = getSelectedValues(props.goods.specs).filter(
        val => val
      )
      if (validSelectedValues.length === props.goods.specs.length) {
        // 完整
        const skuId = pathMap[validSelectedValues.join(spliter)][0]
        const sku = props.goods.skus.find(item => item.id === skuId)
        emit()
      } else {
        // 不完整
        // 父组件需要判断规格是否选择完整，如果没有完整不能加入购物车
        emit('change', {})
      }
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
