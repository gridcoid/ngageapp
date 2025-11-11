<template>
  <div class="kompas-pagination flex items-center justify-between">
    <div class="left-side flex items-center">
      <div class="label-page">
        Go to page:
      </div>
      <input
        v-model="inputVal"
        type="text"
        class="to-page"
      >
      <div class="label-page">
        of {{ totalPage }}
      </div>
      <div class="label-rows">
        Show rows:
      </div>

      <el-select
        v-model="dataItem"
        style="width:72px;margin-right:12px;"
        @change="changeRow()"
      >
        <el-option
          v-for="item in items"
          :key="item"
          :label="item"
          :value="item"
        />
      </el-select>
      <div class="label-rows">
        1 - {{ dataItem }} of {{ total }}
      </div>
    </div>
    <div class="right-side flex">
      <ButtonPrevPage :value="inputVal" class="icon-btn" @click.native="inputVal === 1 ? '' : inputVal = 1" />
      <ButtonPrev class="icon-btn" :value="inputVal" @click.native="inputVal === 1 ? '' : inputVal--" />
      <ButtonNext class="icon-btn" :value="inputVal === totalPage" @click.native="inputVal === totalPage ? '' : inputVal++" />
      <ButtonNextPage :value="inputVal === totalPage" :color="inputVal === totalPage ? '#1B63D4' : '#A1ADB9'" class="icon-btn" @click.native="inputVal === totalPage ? '' : inputVal = totalPage" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    },
    total: {
      type: Number,
      default: 0
    },
    totalPage: {
      type: Number,
      default: 0
    },
    value: {
      type: Number,
      default: 1
    },
    dataItem: {
      type: Number,
      default: 10
    }
  },
  data () {
    return {
      items: [6, 10, 25, 50, 100]
    }
  },
  computed: {
    inputVal: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  },
  methods: {
    changeRow () {
      this.$emit('rowPage', this.dataItem)
    },
    nextPage () {
      this.inputVal++
    },
    prevPage () {
      this.inputVal--
    }
  }
}
</script>
<style lang="scss" scoped>
.kompas-pagination {
  .left-side {
    .label-page {
      font-family: 'Cabin';
      font-weight: 700;
      font-size: 14px;
      color: #5C6B7A;
      margin-right:12px;
    }
    .label-rows {
      font-family: 'Cabin';
      font-weight: 700;
      font-size: 14px;
      color: #5C6B7A;
      margin-left:13px;
      margin-right:12px;
    }
    .to-page[type=text] {
      width: 72px;
      height: 40px;
      background: #FFFFFF;
      border: 1px solid #C3CED9;
      border-radius: 5px;
      text-align:center;
      font-family: 'Cabin';
      font-weight: 400;
      font-size: 16px;
      color: #5C6B7A;
      margin-right:12px;
    }
    .to-page:focus {
      border-color: #C3CED9;
      -webkit-box-shadow: none;
      box-shadow: none;
      outline: none;
    }
  }
  .right-side {
    .icon-btn {
      margin-left:10px;
    }
  }

}
</style>
