import Vue from 'vue'

export default () => {
  Vue.filter('filterData', function (value1, value2) {
    if (value1 === value2.find(item => item === value1)) {
      return 'border: 1px solid #1B63D4'
    }
  })
}
