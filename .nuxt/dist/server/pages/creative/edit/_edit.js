exports.ids = [134,10,14,24,25,26,27,28,29,30,32,33,34,43,45,49,52,54,56,67,81,86,90,91,99,100,101,102,103,104,105,106,107,110,111];
exports.modules = {

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(125);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("7770e886", content, true, context)
};

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/KButton.vue?vue&type=template&id=56f0550c&scoped=true
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return !_vm.icon ? _c('div', [_vm._ssrNode((_vm.type === 'primary' ? "<button class=\"k-btn inline-block w-full\"" + _vm._ssrStyle(null, _vm.buttonSize, null) + " data-v-56f0550c>" + _vm._ssrEscape("\n    " + _vm._s(_vm.text) + "\n  ") + "</button>" : "<!---->") + " " + (_vm.type === 'secondary' ? "<button class=\"k-btn type-secondary inline-block w-full\"" + _vm._ssrStyle(null, _vm.buttonSize, null) + " data-v-56f0550c>" + _vm._ssrEscape("\n    " + _vm._s(_vm.text) + "\n  ") + "</button>" : "<!---->") + " " + (_vm.type === 'thirtiary' ? "<button class=\"k-btn inline-block w-full\"" + _vm._ssrStyle(null, _vm.buttonSize, null) + " data-v-56f0550c>" + _vm._ssrEscape("\n    " + _vm._s(_vm.text) + "\n  ") + "</button>" : "<!---->") + " " + (_vm.type === 'text' ? "<button class=\"k-btn type-text inline-block w-full\"" + _vm._ssrStyle(null, _vm.buttonSize, null) + " data-v-56f0550c>" + _vm._ssrEscape("\n    " + _vm._s(_vm.text) + "\n  ") + "</button>" : "<!---->") + " " + (_vm.type === 'disabled' ? "<button class=\"k-btn type-disabled inline-block w-full\"" + _vm._ssrStyle(null, _vm.buttonSize, null) + " data-v-56f0550c>" + _vm._ssrEscape("\n    " + _vm._s(_vm.text) + "\n  ") + "</button>" : "<!---->"))], 2) : _c('div', [_vm._ssrNode("\n  asd\n")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/KButton.vue?vue&type=template&id=56f0550c&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/KButton.vue?vue&type=script&lang=js
/* harmony default export */ var KButtonvue_type_script_lang_js = ({
  props: {
    text: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'primary'
    },
    icon: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'medium'
    }
  },

  data() {
    return {};
  },

  computed: {
    buttonSize() {
      if (this.size === 'large') {
        return 'height:40px';
      } else if (this.size === 'medium') {
        return 'height:36px';
      } else {
        return 'height:34px';
      }
    }

  }
});
// CONCATENATED MODULE: ./components/KButton.vue?vue&type=script&lang=js
 /* harmony default export */ var components_KButtonvue_type_script_lang_js = (KButtonvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/KButton.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(124)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_KButtonvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "56f0550c",
  "7dd38ca4"
  
)

/* harmony default export */ var KButton = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_KButton_vue_vue_type_style_index_0_id_56f0550c_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(122);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_KButton_vue_vue_type_style_index_0_id_56f0550c_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_KButton_vue_vue_type_style_index_0_id_56f0550c_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_KButton_vue_vue_type_style_index_0_id_56f0550c_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_KButton_vue_vue_type_style_index_0_id_56f0550c_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(7);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n@font-face{\n  font-family:\"Cabin\";\n\n  src:local(\"Cabin\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\")\n}\n@font-face{\n  font-family:\"Roboto Mono\";\n\n  src:local(\"Roboto Mono\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\")\n}\n.header-1[data-v-56f0550c]{\n  font-size:32px\n}\n.header-1[data-v-56f0550c],.header-2[data-v-56f0550c]{\n  font-family:\"Cabin\";\n  font-weight:600;\n  color:#454545\n}\n.header-2[data-v-56f0550c]{\n  font-size:28px\n}\n.header-3[data-v-56f0550c]{\n  font-size:24px\n}\n.header-3[data-v-56f0550c],.header-4[data-v-56f0550c]{\n  font-family:\"Cabin\";\n  font-weight:600;\n  color:#454545\n}\n.header-4[data-v-56f0550c]{\n  font-size:20px\n}\n.header-5[data-v-56f0550c]{\n  font-size:18px\n}\n.header-5[data-v-56f0550c],.header-6[data-v-56f0550c]{\n  font-family:\"Cabin\";\n  font-weight:600;\n  color:#454545\n}\n.header-6[data-v-56f0550c]{\n  font-size:14px\n}\n.subtitle-1[data-v-56f0550c]{\n  color:#757575\n}\n.subtitle-1[data-v-56f0550c],.subtitle-2[data-v-56f0550c]{\n  font-family:\"Cabin\";\n  font-size:16px;\n  font-weight:400\n}\n.subtitle-2[data-v-56f0550c]{\n  color:#454545\n}\n.no-select[data-v-56f0550c]{\n  -webkit-touch-callout:none;\n  -webkit-user-select:none;\n  -moz-user-select:none;\n  user-select:none\n}\n.mx-icon-double-left[data-v-56f0550c]:after,.mx-icon-double-left[data-v-56f0550c]:before,.mx-icon-double-right[data-v-56f0550c]:after,.mx-icon-double-right[data-v-56f0550c]:before,.mx-icon-left[data-v-56f0550c]:before,.mx-icon-right[data-v-56f0550c]:before{\n  content:\"\";\n  position:relative;\n  top:-1px;\n  display:inline-block;\n  width:10px;\n  height:10px;\n  vertical-align:middle;\n  border-color:currentcolor;\n  border-style:solid;\n  border-width:2px 0 0 2px;\n  border-radius:1px;\n  box-sizing:border-box;\n  transform-origin:center;\n  transform:rotate(-45deg) scale(.7)\n}\n.mx-icon-double-left[data-v-56f0550c]:after{\n  left:-4px\n}\n.mx-icon-double-right[data-v-56f0550c]:before{\n  left:4px\n}\n.mx-icon-double-right[data-v-56f0550c]:after,.mx-icon-double-right[data-v-56f0550c]:before,.mx-icon-right[data-v-56f0550c]:before{\n  transform:rotate(135deg) scale(.7)\n}\n.mx-btn[data-v-56f0550c]{\n  box-sizing:border-box;\n  line-height:1;\n  font-size:14px;\n  font-weight:500;\n  padding:7px 15px;\n  margin:0;\n  cursor:pointer;\n  background-color:transparent;\n  outline:none;\n  border:1px solid rgba(0,0,0,.1);\n  border-radius:4px;\n  color:#73879c;\n  white-space:nowrap\n}\n.mx-btn[data-v-56f0550c]:hover{\n  border-color:#1284e7;\n  color:#1284e7\n}\n.mx-btn.disabled[data-v-56f0550c],.mx-btn[data-v-56f0550c]:disabled{\n  color:#ccc;\n  cursor:not-allowed\n}\n.mx-btn-text[data-v-56f0550c]{\n  border:0;\n  padding:0 4px;\n  text-align:left;\n  line-height:inherit\n}\n.mx-scrollbar[data-v-56f0550c]{\n  height:100%\n}\n.mx-scrollbar:hover .mx-scrollbar-track[data-v-56f0550c]{\n  opacity:1\n}\n.mx-scrollbar-wrap[data-v-56f0550c]{\n  height:100%;\n  overflow-x:hidden;\n  overflow-y:auto\n}\n.mx-scrollbar-track[data-v-56f0550c]{\n  position:absolute;\n  top:2px;\n  right:2px;\n  bottom:2px;\n  width:6px;\n  z-index:1;\n  border-radius:4px;\n  opacity:0;\n  transition:opacity .24s ease-out\n}\n.mx-scrollbar-track .mx-scrollbar-thumb[data-v-56f0550c]{\n  position:absolute;\n  width:100%;\n  height:0;\n  cursor:pointer;\n  border-radius:inherit;\n  background-color:rgba(144,147,153,.3);\n  transition:background-color .3s\n}\n.mx-zoom-in-down-enter-active[data-v-56f0550c],.mx-zoom-in-down-leave-active[data-v-56f0550c]{\n  opacity:1;\n  transform:scaleY(1);\n  transition:transform .3s cubic-bezier(.23,1,.32,1),opacity .3s cubic-bezier(.23,1,.32,1);\n  transform-origin:center top\n}\n.mx-zoom-in-down-enter[data-v-56f0550c],.mx-zoom-in-down-enter-from[data-v-56f0550c],.mx-zoom-in-down-leave-to[data-v-56f0550c]{\n  opacity:0;\n  transform:scaleY(0)\n}\n.mx-datepicker[data-v-56f0550c]{\n  position:relative;\n  display:inline-block;\n  width:210px\n}\n.mx-datepicker svg[data-v-56f0550c]{\n  width:1em;\n  height:1em;\n  vertical-align:-.15em;\n  fill:currentColor;\n  overflow:hidden\n}\n.mx-datepicker-range[data-v-56f0550c]{\n  width:320px\n}\n.mx-datepicker-inline[data-v-56f0550c]{\n  width:auto\n}\n.mx-input-wrapper[data-v-56f0550c]{\n  position:relative\n}\n.mx-input[data-v-56f0550c]{\n  display:inline-block;\n  box-sizing:border-box;\n  width:100%;\n  height:34px;\n  padding:6px 30px 6px 10px;\n  font-size:14px;\n  line-height:1.4;\n  color:#555;\n  background-color:#fff;\n  border:1px solid #ccc;\n  border-radius:4px;\n  box-shadow:inset 0 1px 1px rgba(0,0,0,.075)\n}\n.mx-input[data-v-56f0550c]:focus,.mx-input[data-v-56f0550c]:hover{\n  border-color:#409aff\n}\n.mx-input.disabled[data-v-56f0550c],.mx-input[data-v-56f0550c]:disabled{\n  color:#ccc;\n  background-color:#f3f3f3;\n  border-color:#ccc;\n  cursor:not-allowed\n}\n.mx-input[data-v-56f0550c]:focus{\n  outline:none\n}\n.mx-input[data-v-56f0550c]::-ms-clear{\n  display:none\n}\n.mx-icon-calendar[data-v-56f0550c],.mx-icon-clear[data-v-56f0550c]{\n  position:absolute;\n  top:50%;\n  right:8px;\n  transform:translateY(-50%);\n  font-size:16px;\n  line-height:1;\n  color:rgba(0,0,0,.5);\n  vertical-align:middle\n}\n.mx-icon-clear[data-v-56f0550c]{\n  cursor:pointer\n}\n.mx-icon-clear[data-v-56f0550c]:hover{\n  color:rgba(0,0,0,.8)\n}\n.mx-datepicker-main[data-v-56f0550c]{\n  font:14px/1.5 \"Helvetica Neue\",Helvetica,Arial,\"Microsoft Yahei\",sans-serif;\n  color:#73879c;\n  background-color:#fff;\n  border:1px solid #e8e8e8\n}\n.mx-datepicker-popup[data-v-56f0550c]{\n  position:absolute;\n  margin-top:1px;\n  margin-bottom:1px;\n  box-shadow:0 6px 12px rgba(0,0,0,.175);\n  z-index:2001\n}\n.mx-datepicker-sidebar[data-v-56f0550c]{\n  float:left;\n  box-sizing:border-box;\n  width:100px;\n  padding:6px;\n  overflow:auto\n}\n.mx-datepicker-sidebar+.mx-datepicker-content[data-v-56f0550c]{\n  margin-left:100px;\n  border-left:1px solid #e8e8e8\n}\n.mx-datepicker-body[data-v-56f0550c]{\n  position:relative;\n  -webkit-user-select:none;\n     -moz-user-select:none;\n          user-select:none\n}\n.mx-btn-shortcut[data-v-56f0550c]{\n  line-height:24px\n}\n.mx-range-wrapper[data-v-56f0550c]{\n  display:flex\n}\n@media(max-width:750px){\n.mx-range-wrapper[data-v-56f0550c]{\n    flex-direction:column\n}\n}\n.mx-datepicker-header[data-v-56f0550c]{\n  padding:6px 8px;\n  border-bottom:1px solid #e8e8e8\n}\n.mx-datepicker-footer[data-v-56f0550c]{\n  padding:6px 8px;\n  text-align:right;\n  border-top:1px solid #e8e8e8\n}\n.mx-calendar[data-v-56f0550c]{\n  box-sizing:border-box;\n  width:248px;\n  padding:6px 12px\n}\n.mx-calendar+.mx-calendar[data-v-56f0550c]{\n  border-left:1px solid #e8e8e8\n}\n.mx-calendar-header[data-v-56f0550c],.mx-time-header[data-v-56f0550c]{\n  box-sizing:border-box;\n  height:34px;\n  line-height:34px;\n  text-align:center;\n  overflow:hidden\n}\n.mx-btn-icon-double-left[data-v-56f0550c],.mx-btn-icon-left[data-v-56f0550c]{\n  float:left\n}\n.mx-btn-icon-double-right[data-v-56f0550c],.mx-btn-icon-right[data-v-56f0550c]{\n  float:right\n}\n.mx-calendar-header-label[data-v-56f0550c]{\n  font-size:14px\n}\n.mx-calendar-decade-separator[data-v-56f0550c]{\n  margin:0 2px\n}\n.mx-calendar-decade-separator[data-v-56f0550c]:after{\n  content:\"~\"\n}\n.mx-calendar-content[data-v-56f0550c]{\n  position:relative;\n  height:224px;\n  box-sizing:border-box\n}\n.mx-calendar-content .cell[data-v-56f0550c]{\n  cursor:pointer\n}\n.mx-calendar-content .cell[data-v-56f0550c]:hover{\n  color:#73879c;\n  background-color:rgb(243.15,248.85,253.8)\n}\n.mx-calendar-content .cell.active[data-v-56f0550c]{\n  color:#fff;\n  background-color:#1284e7\n}\n.mx-calendar-content .cell.hover-in-range[data-v-56f0550c],.mx-calendar-content .cell.in-range[data-v-56f0550c]{\n  color:#73879c;\n  background-color:rgb(219.45,236.55,251.4)\n}\n.mx-calendar-content .cell.disabled[data-v-56f0550c]{\n  cursor:not-allowed;\n  color:#ccc;\n  background-color:#f3f3f3\n}\n.mx-calendar-week-mode .mx-date-row[data-v-56f0550c]{\n  cursor:pointer\n}\n.mx-calendar-week-mode .mx-date-row[data-v-56f0550c]:hover{\n  background-color:rgb(243.15,248.85,253.8)\n}\n.mx-calendar-week-mode .mx-date-row.mx-active-week[data-v-56f0550c]{\n  background-color:rgb(219.45,236.55,251.4)\n}\n.mx-calendar-week-mode .mx-date-row .cell.active[data-v-56f0550c],.mx-calendar-week-mode .mx-date-row .cell[data-v-56f0550c]:hover{\n  color:inherit;\n  background-color:transparent\n}\n.mx-week-number[data-v-56f0550c]{\n  opacity:.5\n}\n.mx-table[data-v-56f0550c]{\n  table-layout:fixed;\n  border-collapse:separate;\n  border-spacing:0;\n  width:100%;\n  height:100%;\n  box-sizing:border-box;\n  text-align:center\n}\n.mx-table th[data-v-56f0550c]{\n  font-weight:500\n}\n.mx-table td[data-v-56f0550c],.mx-table th[data-v-56f0550c]{\n  padding:0;\n  vertical-align:middle\n}\n.mx-table-date td[data-v-56f0550c],.mx-table-date th[data-v-56f0550c]{\n  font-size:12px\n}\n.mx-table-date .today[data-v-56f0550c]{\n  color:rgb(41.7,144.3,233.4)\n}\n.mx-table-date .cell.not-current-month[data-v-56f0550c]{\n  color:#ccc;\n  background:none\n}\n.mx-time[data-v-56f0550c]{\n  flex:1;\n  width:224px;\n  background:#fff\n}\n.mx-time+.mx-time[data-v-56f0550c]{\n  border-left:1px solid #e8e8e8\n}\n.mx-calendar-time[data-v-56f0550c]{\n  position:absolute;\n  top:0;\n  left:0;\n  width:100%;\n  height:100%\n}\n.mx-time-header[data-v-56f0550c]{\n  border-bottom:1px solid #e8e8e8\n}\n.mx-time-content[data-v-56f0550c]{\n  height:224px;\n  box-sizing:border-box;\n  overflow:hidden\n}\n.mx-time-columns[data-v-56f0550c]{\n  display:flex;\n  width:100%;\n  height:100%;\n  overflow:hidden\n}\n.mx-time-column[data-v-56f0550c]{\n  flex:1;\n  position:relative;\n  border-left:1px solid #e8e8e8;\n  text-align:center\n}\n.mx-time-column[data-v-56f0550c]:first-child{\n  border-left:0\n}\n.mx-time-column .mx-time-list[data-v-56f0550c]{\n  margin:0;\n  padding:0;\n  list-style:none\n}\n.mx-time-column .mx-time-list[data-v-56f0550c]:after{\n  content:\"\";\n  display:block;\n  height:192px\n}\n.mx-time-column .mx-time-item[data-v-56f0550c]{\n  cursor:pointer;\n  font-size:12px;\n  height:32px;\n  line-height:32px\n}\n.mx-time-column .mx-time-item[data-v-56f0550c]:hover{\n  color:#73879c;\n  background-color:rgb(243.15,248.85,253.8)\n}\n.mx-time-column .mx-time-item.active[data-v-56f0550c]{\n  color:#1284e7;\n  background-color:transparent;\n  font-weight:700\n}\n.mx-time-column .mx-time-item.disabled[data-v-56f0550c]{\n  cursor:not-allowed;\n  color:#ccc;\n  background-color:#f3f3f3\n}\n.mx-time-option[data-v-56f0550c]{\n  cursor:pointer;\n  padding:8px 10px;\n  font-size:14px;\n  line-height:20px\n}\n.mx-time-option[data-v-56f0550c]:hover{\n  color:#73879c;\n  background-color:rgb(243.15,248.85,253.8)\n}\n.mx-time-option.active[data-v-56f0550c]{\n  color:#1284e7;\n  background-color:transparent;\n  font-weight:700\n}\n.mx-time-option.disabled[data-v-56f0550c]{\n  cursor:not-allowed;\n  color:#ccc;\n  background-color:#f3f3f3\n}\n.el-input .el-input__inner[data-v-56f0550c]:focus,.el-range-editor.is-active[data-v-56f0550c],.el-range-editor.is-active[data-v-56f0550c]:hover,.el-select .el-input.is-focus .el-input__inner[data-v-56f0550c],.el-select .el-input__inner[data-v-56f0550c]:focus,.el-textarea .el-input__inner[data-v-56f0550c]:focus{\n  border:1.3px solid #1b63d4!important;\n  box-shadow:0 2px 10px rgba(187,209,243,.5)\n}\n.mx-input[data-v-56f0550c]{\n  height:40px!important\n}\n.mx-datepicker-sidebar[data-v-56f0550c]{\n  width:151px!important\n}\n.mx-table-date td[data-v-56f0550c],.mx-table-date th[data-v-56f0550c]{\n  height:32px;\n  font-size:14px!important\n}\n.mx-btn-shortcut[data-v-56f0550c]{\n  display:block;\n  padding:0 6px;\n  line-height:30px!important\n}\n[data-v-56f0550c]:root{\n  --vs-line-height:1.6\n}\n.btn-popover[data-v-56f0550c]{\n  height:40px;\n  background-color:#fff;\n  width:100%;\n  padding:10px;\n  cursor:pointer\n}\n.btn-popover .title-1[data-v-56f0550c]{\n  font-weight:400;\n  font-size:16px;\n  color:#454545;\n  margin-left:10px\n}\n.btn-popover[data-v-56f0550c]:hover{\n  background-color:#f3f4f6\n}\n.el-popover[data-v-56f0550c]{\n  padding:0!important;\n  border-radius:5px!important\n}\n.el-upload[data-v-56f0550c]{\n  width:100%\n}\n.el-upload-dragger[data-v-56f0550c]{\n  width:100%!important;\n  background:linear-gradient(0deg,rgba(33,150,243,.03),rgba(33,150,243,.03)),#fff!important;\n  border:1px dashed transparent!important;\n  border-radius:5px!important;\n  height:100%!important\n}\n.kg-popup[data-v-56f0550c]{\n  transition:all .5s ease-in-out;\n  position:fixed;\n  top:0;\n  left:50%;\n  transform:translateX(-50%)\n}\n.noselect[data-v-56f0550c]{\n  -webkit-touch-callout:none;\n  -webkit-user-select:none;\n  -moz-user-select:none;\n  user-select:none\n}\n.ProseMirror[data-v-56f0550c]{\n  border:0;\n  outline:none\n}\n.ProseMirror>*+*[data-v-56f0550c]{\n  margin-top:.75em\n}\n.ProseMirror ol[data-v-56f0550c],.ProseMirror ul[data-v-56f0550c]{\n  padding:0 1rem\n}\n.ProseMirror h1[data-v-56f0550c],.ProseMirror h2[data-v-56f0550c],.ProseMirror h3[data-v-56f0550c],.ProseMirror h4[data-v-56f0550c],.ProseMirror h5[data-v-56f0550c],.ProseMirror h6[data-v-56f0550c]{\n  line-height:1.1\n}\n.ProseMirror code[data-v-56f0550c]{\n  background-color:rgba(97,97,97,.1);\n  color:#616161\n}\n.ProseMirror pre[data-v-56f0550c]{\n  background:#0d0d0d;\n  color:#fff;\n  font-family:\"JetBrainsMono\",monospace;\n  padding:.75rem 1rem;\n  border-radius:.5rem\n}\n.ProseMirror pre code[data-v-56f0550c]{\n  color:inherit;\n  padding:0;\n  background:none;\n  font-size:.8rem\n}\n.ProseMirror img[data-v-56f0550c]{\n  max-width:100%;\n  height:auto\n}\n.ProseMirror blockquote[data-v-56f0550c]{\n  padding-left:1rem;\n  border-left:2px solid rgba(13,13,13,.1)\n}\n.ProseMirror hr[data-v-56f0550c]{\n  border:none;\n  border-top:2px solid rgba(13,13,13,.1);\n  margin:2rem 0\n}\n.ProseMirror[data-v-56f0550c]:focus-visible{\n  outline:none\n}\n.el-color-picker__trigger[data-v-56f0550c]{\n  border:0!important;\n  padding:0!important;\n  outline:none!important\n}\n.el-color-picker__icon[data-v-56f0550c]{\n  visibility:hidden!important\n}\n.el-color-picker--mini .el-color-picker__trigger[data-v-56f0550c],.el-color-picker__color[data-v-56f0550c]{\n  height:22px!important;\n  width:22px!important\n}\n.el-color-picker__color[data-v-56f0550c]{\n  padding:0!important;\n  border:0!important\n}\n.el-color-picker__empty[data-v-56f0550c]{\n  padding-top:1.4px!important\n}\n.el-color-picker--mini[data-v-56f0550c]{\n  height:22px!important\n}\n.el-color-picker__color-inner[data-v-56f0550c]{\n  border:1px solid #e2e2e2!important\n}\n.el-table thead[data-v-56f0550c]{\n  color:#5c6b7a!important;\n  font-family:\"Cabin\"!important\n}\n.el-table thead[data-v-56f0550c],.th[data-v-56f0550c]{\n  font-weight:600!important\n}\n.el-button--mini[data-v-56f0550c],.el-button--text[data-v-56f0550c],.el-date-range-picker__header div[data-v-56f0550c],.el-date-table td span[data-v-56f0550c],.el-input__inner[data-v-56f0550c],.el-picker-panel__shortcut[data-v-56f0550c],.el-select-dropdown__item[data-v-56f0550c],.el-select-dropdown__item.hover[data-v-56f0550c],.el-select-dropdown__item[data-v-56f0550c]:hover,.el-time-spinner__item[data-v-56f0550c]{\n  font-family:\"Cabin\"!important\n}\n.el-progress-bar__inner[data-v-56f0550c],.el-progress-bar__outer[data-v-56f0550c]{\n  border-bottom-left-radius:100px!important;\n  border-top-left-radius:100px!important\n}\n.el-dropdown .el-dropdown__caret-button[data-v-56f0550c]{\n  bottom:2px!important\n}\n.el-dropdown-menu[data-v-56f0550c],.el-dropdown-menu__item[data-v-56f0550c]{\n  padding:0!important\n}\nbutton[data-v-56f0550c]:active,button[data-v-56f0550c]:focus{\n  outline:0!important\n}\n.el-input-group__append[data-v-56f0550c]{\n  padding:0!important\n}\n.el-input-group__prepend[data-v-56f0550c]{\n  padding-left:5px!important;\n  padding-right:5px!important\n}\n.el-menu-item[data-v-56f0550c],.el-submenu__title[data-v-56f0550c]{\n  height:40px!important;\n  line-height:40px!important;\n  font-family:\"Cabin\"!important;\n  font-size:16px!important;\n  font-style:normal!important;\n  font-weight:400!important;\n  color:#5c6b7a!important;\n  margin-bottom:10px!important;\n  border-left:4px solid transparent!important\n}\n.el-menu-item.is-active[data-v-56f0550c]{\n  color:#1b63d4!important;\n  font-weight:600!important;\n  border-left:4px solid #1b63d4!important;\n  border-top-left-radius:2px!important;\n  border-bottom-left-radius:2px!important\n}\n.el-menu--collapse[data-v-56f0550c]{\n  width:80px!important\n}\n.el-menu[data-v-56f0550c]{\n  border-right:0!important\n}\n.el-dialog__body[data-v-56f0550c],.el-dialog__header[data-v-56f0550c]{\n  padding:0!important\n}\n.el-dialog[data-v-56f0550c]{\n  border-radius:10px!important\n}\n.card-dialog[data-v-56f0550c]{\n  padding:20px!important\n}\n.vue-swatches__trigger[data-v-56f0550c]{\n  width:22px!important;\n  height:22px!important;\n  border-radius:2px!important\n}\n.vue-swatches[data-v-56f0550c]{\n  height:22px!important\n}\n.CodeMirror[data-v-56f0550c]{\n  height:calc(100vh - 150px)!important\n}\n.vue-swatches__trigger[data-v-56f0550c]{\n  border:1px solid #e2e2e2!important\n}\n.k-btn[data-v-56f0550c]{\n  font-family:\"Cabin\";\n  width:100%;\n  border-radius:5px;\n  font-weight:700;\n  font-size:14px;\n  color:#fff;\n  background:#1b63d4\n}\n.k-btn[data-v-56f0550c]:active,.k-btn[data-v-56f0550c]:focus{\n  outline:0!important\n}\n.type-secondary[data-v-56f0550c]{\n  background:#fff;\n  color:#1b63d4;\n  height:36px;\n  padding:4px 12px;\n  border:1px solid #e2e2e2\n}\n.type-disabled[data-v-56f0550c]{\n  font-family:\"Cabin\";\n  background:#f1f1f1;\n  cursor:not-allowed;\n  color:#9a9a9a;\n  font-weight:700;\n  font-size:14px\n}\n.type-disabled[data-v-56f0550c]:focus{\n  outline:0 auto -webkit-focus-ring-color\n}\n.type-secondary[data-v-56f0550c]:hover{\n  background-color:#f3f4f6\n}\n.type-text[data-v-56f0550c]{\n  background:#fff;\n  border:1px solid #fff;\n  color:#1b63d4\n}\n.type-text[data-v-56f0550c]:hover{\n  background-color:#f3f4f6\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/icon/upload.vue?vue&type=template&id=1f17c3dd
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('svg', {
    attrs: {
      "width": "19",
      "height": "17",
      "viewBox": "0 0 19 17",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_vm._ssrNode("<path d=\"M18.25 9.76953V14.7695C18.2496 15.1009 18.1178 15.4187 17.8835 15.653C17.6491 15.8873 17.3314 16.0192 17 16.0195H2C1.66859 16.0192 1.35087 15.8873 1.11653 15.653C0.882188 15.4187 0.750372 15.1009 0.75 14.7695V9.76953C0.750372 9.43812 0.882188 9.1204 1.11653 8.88606C1.35087 8.65172 1.66859 8.5199 2 8.51953H5.75C5.91576 8.51953 6.07473 8.58538 6.19194 8.70259C6.30915 8.8198 6.375 8.97877 6.375 9.14453C6.375 9.31029 6.30915 9.46926 6.19194 9.58647C6.07473 9.70368 5.91576 9.76953 5.75 9.76953H2V14.7695H17V9.76953H13.25C13.0842 9.76953 12.9253 9.70368 12.8081 9.58647C12.6908 9.46926 12.625 9.31029 12.625 9.14453C12.625 8.97877 12.6908 8.8198 12.8081 8.70259C12.9253 8.58538 13.0842 8.51953 13.25 8.51953H17C17.3314 8.5199 17.6491 8.65172 17.8835 8.88606C18.1178 9.1204 18.2496 9.43812 18.25 9.76953ZM6.19195 5.21148L8.875 2.52836V9.14453C8.875 9.31029 8.94085 9.46926 9.05806 9.58647C9.17527 9.70368 9.33424 9.76953 9.5 9.76953C9.66576 9.76953 9.82473 9.70368 9.94194 9.58647C10.0592 9.46926 10.125 9.31029 10.125 9.14453V2.52836L12.808 5.21148C12.9253 5.3287 13.0842 5.39455 13.25 5.39455C13.4158 5.39455 13.5747 5.3287 13.692 5.21148C13.8092 5.09427 13.875 4.9353 13.875 4.76953C13.875 4.60377 13.8092 4.44479 13.692 4.32758L9.94195 0.577578C9.93961 0.575313 9.93727 0.573437 9.93492 0.57125C9.92253 0.559046 9.90963 0.547369 9.89625 0.53625C9.88875 0.53 9.88078 0.524687 9.87297 0.518828C9.86438 0.512422 9.85602 0.505781 9.84703 0.499844C9.8382 0.493906 9.82898 0.48875 9.81984 0.483281C9.81141 0.478281 9.8032 0.472969 9.79453 0.468359C9.78547 0.463516 9.77617 0.459453 9.76695 0.455078C9.75766 0.450625 9.74852 0.446016 9.73899 0.442031C9.73031 0.438437 9.72141 0.435547 9.71258 0.432422C9.70211 0.428672 9.6918 0.424609 9.68109 0.421484C9.67258 0.418906 9.66399 0.417031 9.65547 0.414844C9.6443 0.411953 9.6332 0.408828 9.6218 0.406562C9.61234 0.404687 9.60273 0.403672 9.5932 0.402266C9.58258 0.400703 9.57211 0.398672 9.56125 0.397578C9.54548 0.396207 9.52966 0.395425 9.51383 0.395234C9.50914 0.395156 9.50469 0.394531 9.5 0.394531C9.49531 0.394531 9.49078 0.395156 9.48617 0.395234C9.47034 0.395425 9.45452 0.396207 9.43875 0.397578C9.42789 0.398672 9.41742 0.400703 9.40672 0.402266C9.39727 0.403672 9.38766 0.404687 9.3782 0.406562C9.3668 0.408906 9.3557 0.411953 9.34461 0.414844C9.33602 0.417031 9.32742 0.418906 9.31883 0.421406C9.3082 0.424609 9.29789 0.428672 9.28742 0.432344C9.27859 0.435547 9.26969 0.438437 9.26102 0.442031C9.25148 0.446016 9.24227 0.450625 9.23305 0.455078C9.22383 0.459453 9.21453 0.463516 9.20547 0.468359C9.19688 0.472969 9.18859 0.478281 9.18016 0.483281C9.17102 0.48875 9.1618 0.493906 9.15297 0.499844C9.14398 0.505781 9.13562 0.512422 9.12703 0.518828C9.11922 0.524687 9.11125 0.530078 9.10375 0.53625C9.09037 0.547368 9.07747 0.559045 9.06508 0.57125L9.05805 0.5775L5.30805 4.3275C5.19082 4.44471 5.12496 4.60369 5.12496 4.76946C5.12495 4.93524 5.19079 5.09422 5.30801 5.21145C5.42522 5.32867 5.5842 5.39453 5.74997 5.39454C5.91574 5.39454 6.07473 5.3287 6.19195 5.21148ZM15.125 12.2695C15.125 12.0841 15.07 11.9029 14.967 11.7487C14.864 11.5945 14.7176 11.4744 14.5463 11.4034C14.375 11.3324 14.1865 11.3139 14.0046 11.35C13.8227 11.3862 13.6557 11.4755 13.5246 11.6066C13.3935 11.7377 13.3042 11.9048 13.268 12.0866C13.2318 12.2685 13.2504 12.457 13.3214 12.6283C13.3923 12.7996 13.5125 12.946 13.6667 13.049C13.8208 13.152 14.0021 13.207 14.1875 13.207C14.4361 13.2068 14.6744 13.1079 14.8501 12.9321C15.0259 12.7564 15.1247 12.5181 15.125 12.2695Z\"" + _vm._ssrAttr("fill", _vm.bgColor) + "></path>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/icon/upload.vue?vue&type=template&id=1f17c3dd

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/icon/upload.vue?vue&type=script&lang=js
/* harmony default export */ var uploadvue_type_script_lang_js = ({
  props: {
    bgColor: {
      type: String,
      default: '#1B63D4'
    }
  }
});
// CONCATENATED MODULE: ./components/icon/upload.vue?vue&type=script&lang=js
 /* harmony default export */ var icon_uploadvue_type_script_lang_js = (uploadvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/icon/upload.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  icon_uploadvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7b3bb50b"
  
)

/* harmony default export */ var upload = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/icon/delete.vue?vue&type=template&id=5cc6e1e2
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('svg', {
    attrs: {
      "width": "16",
      "height": "18",
      "viewBox": "0 0 16 18",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_vm._ssrNode("<path d=\"M14.8745 3.39453H1.12451C0.958751 3.39453 0.79978 3.46038 0.68257 3.57759C0.56536 3.6948 0.499512 3.85377 0.499512 4.01953C0.499512 4.18529 0.56536 4.34426 0.68257 4.46147C0.79978 4.57868 0.958751 4.64453 1.12451 4.64453H1.74951V15.8945C1.74988 16.2259 1.8817 16.5437 2.11604 16.778C2.35038 17.0123 2.66811 17.1442 2.99951 17.1445H12.9995C13.3309 17.1442 13.6486 17.0123 13.883 16.778C14.1173 16.5437 14.2491 16.2259 14.2495 15.8945V4.64453H14.8745C15.0403 4.64453 15.1992 4.57868 15.3165 4.46147C15.4337 4.34426 15.4995 4.18529 15.4995 4.01953C15.4995 3.85377 15.4337 3.6948 15.3165 3.57759C15.1992 3.46038 15.0403 3.39453 14.8745 3.39453ZM12.9995 15.8945H2.99951V4.64453H12.9995V15.8945ZM4.24982 1.51953C4.24982 1.35377 4.31567 1.1948 4.43288 1.07759C4.55009 0.960379 4.70906 0.894531 4.87482 0.894531H11.1248C11.2906 0.894531 11.4496 0.960379 11.5668 1.07759C11.684 1.1948 11.7498 1.35377 11.7498 1.51953C11.7498 1.68529 11.684 1.84426 11.5668 1.96147C11.4496 2.07868 11.2906 2.14453 11.1248 2.14453H4.87482C4.70906 2.14453 4.55009 2.07868 4.43288 1.96147C4.31567 1.84426 4.24982 1.68529 4.24982 1.51953Z\"" + _vm._ssrAttr("fill", _vm.bgColor) + "></path>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/icon/delete.vue?vue&type=template&id=5cc6e1e2

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/icon/delete.vue?vue&type=script&lang=js
/* harmony default export */ var deletevue_type_script_lang_js = ({
  props: {
    bgColor: {
      type: String,
      default: '#ED543A'
    }
  }
});
// CONCATENATED MODULE: ./components/icon/delete.vue?vue&type=script&lang=js
 /* harmony default export */ var icon_deletevue_type_script_lang_js = (deletevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/icon/delete.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  icon_deletevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1a337096"
  
)

/* harmony default export */ var icon_delete = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/icon/arrow_down.vue?vue&type=template&id=079acd32
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('svg', {
    attrs: {
      "width": "12",
      "height": "7",
      "viewBox": "0 0 12 7",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_vm._ssrNode("<path d=\"M6.00001 6.50002C5.93434 6.5001 5.86929 6.48721 5.80862 6.46208C5.74794 6.43695 5.69283 6.40008 5.64645 6.35358L0.64645 1.35358C0.55268 1.25981 0.5 1.13262 0.5 1.00001C0.5 0.867401 0.55268 0.740221 0.64645 0.646451C0.740221 0.55268 0.867401 0.5 1.00001 0.5C1.13262 0.5 1.2598 0.55268 1.35358 0.646451L6.00001 5.29289L10.6465 0.646451C10.7402 0.55268 10.8674 0.5 11 0.5C11.1326 0.5 11.2598 0.55268 11.3536 0.646451C11.4473 0.740221 11.5 0.867401 11.5 1.00001C11.5 1.13262 11.4473 1.25981 11.3536 1.35358L6.35358 6.35358C6.3072 6.40008 6.25208 6.43695 6.19141 6.46208C6.13073 6.48721 6.06569 6.5001 6.00001 6.50002Z\"" + _vm._ssrAttr("fill", _vm.bgColor) + "></path>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/icon/arrow_down.vue?vue&type=template&id=079acd32

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/icon/arrow_down.vue?vue&type=script&lang=js
/* harmony default export */ var arrow_downvue_type_script_lang_js = ({
  props: {
    bgColor: {
      type: String,
      default: '#454545'
    }
  }
});
// CONCATENATED MODULE: ./components/icon/arrow_down.vue?vue&type=script&lang=js
 /* harmony default export */ var icon_arrow_downvue_type_script_lang_js = (arrow_downvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/icon/arrow_down.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  icon_arrow_downvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "56fd01a2"
  
)

/* harmony default export */ var arrow_down = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/icon/arrow_up.vue?vue&type=template&id=52685fb8
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('svg', {
    attrs: {
      "width": "12",
      "height": "7",
      "viewBox": "0 0 12 7",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_vm._ssrNode("<svg width=\"12\" height=\"7\" viewBox=\"0 0 12 7\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M11 6.50002C10.9343 6.50011 10.8693 6.48721 10.8086 6.46208C10.7479 6.43695 10.6928 6.40008 10.6465 6.35358L6.00001 1.70714L1.35358 6.35358C1.2598 6.44735 1.13262 6.50003 1.00001 6.50003C0.867401 6.50003 0.740221 6.44735 0.64645 6.35358C0.55268 6.25981 0.5 6.13263 0.5 6.00002C0.5 5.86741 0.55268 5.74023 0.64645 5.64646L5.64645 0.646456C5.69288 0.600024 5.748 0.563192 5.80867 0.538063C5.86933 0.512934 5.93435 0.5 6.00001 0.5C6.06568 0.5 6.1307 0.512934 6.19136 0.538063C6.25203 0.563192 6.30715 0.600024 6.35358 0.646456L11.3536 5.64646C11.4235 5.71638 11.4711 5.80547 11.4904 5.90247C11.5097 5.99946 11.4998 6.1 11.462 6.19136C11.4241 6.28273 11.36 6.36082 11.2778 6.41576C11.1956 6.4707 11.0989 6.50002 11 6.50002Z\"" + _vm._ssrAttr("fill", _vm.bgColor) + "></path></svg>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/icon/arrow_up.vue?vue&type=template&id=52685fb8

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/icon/arrow_up.vue?vue&type=script&lang=js
/* harmony default export */ var arrow_upvue_type_script_lang_js = ({
  props: {
    bgColor: {
      type: String,
      default: '#454545'
    }
  }
});
// CONCATENATED MODULE: ./components/icon/arrow_up.vue?vue&type=script&lang=js
 /* harmony default export */ var icon_arrow_upvue_type_script_lang_js = (arrow_upvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/icon/arrow_up.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  icon_arrow_upvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4252011b"
  
)

/* harmony default export */ var arrow_up = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/preview.cbe4a91.svg";

/***/ }),

/***/ 138:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xNC44NzUgMC41SDQuODc0OTZDNC43MDkyIDAuNSA0LjU1MDIyIDAuNTY1ODQ4IDQuNDMzMDEgMC42ODMwNThDNC4zMTU4IDAuODAwMjY5IDQuMjQ5OTYgMC45NTkyNCA0LjI0OTk2IDEuMTI1VjQuMjUwMDhIMS4xMjQ4OEMwLjk1OTExOCA0LjI1MDA4IDAuODAwMTQ2IDQuMzE1OTMgMC42ODI5MzYgNC40MzMxNEMwLjU2NTcyNiA0LjU1MDM1IDAuNDk5ODc4IDQuNzA5MzIgMC40OTk4NzggNC44NzUwOFYxNC44NzUxQzAuNDk5ODc4IDE1LjA0MDggMC41NjU3MjYgMTUuMTk5OCAwLjY4MjkzNiAxNS4zMTdDMC44MDAxNDYgMTUuNDM0MiAwLjk1OTExOCAxNS41MDAxIDEuMTI0ODggMTUuNTAwMUgxMS4xMjQ5QzExLjI5MDYgMTUuNTAwMSAxMS40NDk2IDE1LjQzNDIgMTEuNTY2OCAxNS4zMTdDMTEuNjg0IDE1LjE5OTggMTEuNzQ5OSAxNS4wNDA4IDExLjc0OTkgMTQuODc1MVYxMS43NTAxSDE0Ljg3NUMxNS4wNDA3IDExLjc1MDEgMTUuMTk5NyAxMS42ODQyIDE1LjMxNjkgMTEuNTY3QzE1LjQzNDEgMTEuNDQ5OCAxNS41IDExLjI5MDggMTUuNSAxMS4xMjUxVjEuMTI1MDhDMTUuNSAwLjk1OTMxOCAxNS40MzQxIDAuODAwMzQ3IDE1LjMxNjkgMC42ODMxMzZDMTUuMTk5NyAwLjU2NTkyNiAxNS4wNDA3IDAuNTAwMDc4IDE0Ljg3NSAwLjUwMDA3OFYwLjVaTTEwLjQ5OTkgMTQuMjUwMUgxLjc0OTg4VjUuNTAwMDhIMTAuNDk5OVYxNC4yNTAxWk0xNC4yNSAxMC41MDAxSDExLjc0OTlWNC44NzUwOEMxMS43NDk5IDQuNzA5MzIgMTEuNjg0IDQuNTUwMzUgMTEuNTY2OCA0LjQzMzE0QzExLjQ0OTYgNC4zMTU5MyAxMS4yOTA2IDQuMjUwMDggMTEuMTI0OSA0LjI1MDA4SDUuNDk5OTZWMS43NTAwOEgxNC4yNVYxMC41MDAxWiIgZmlsbD0iIzFCNjNENCIvPg0KPC9zdmc+DQo="

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/icon/crop.vue?vue&type=template&id=f1ae90e0
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('svg', {
    attrs: {
      "width": "18",
      "height": "18",
      "viewBox": "0 0 18 18",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_vm._ssrNode("<path d=\"M5.875 4C5.875 3.83424 5.94085 3.67527 6.05806 3.55806C6.17527 3.44085 6.33424 3.375 6.5 3.375H14C14.1658 3.375 14.3247 3.44085 14.4419 3.55806C14.5592 3.67527 14.625 3.83424 14.625 4V11.5C14.625 11.6658 14.5592 11.8247 14.4419 11.9419C14.3247 12.0592 14.1658 12.125 14 12.125C13.8342 12.125 13.6753 12.0592 13.5581 11.9419C13.4408 11.8247 13.375 11.6658 13.375 11.5V4.625H6.5C6.33424 4.625 6.17527 4.55915 6.05806 4.44194C5.94085 4.32473 5.875 4.16576 5.875 4ZM17.125 13.375H4.625V0.875C4.625 0.70924 4.55915 0.550268 4.44194 0.433058C4.32473 0.315848 4.16576 0.25 4 0.25C3.83424 0.25 3.67527 0.315848 3.55806 0.433058C3.44085 0.550268 3.375 0.70924 3.375 0.875V3.375H0.875C0.70924 3.375 0.550268 3.44085 0.433058 3.55806C0.315848 3.67527 0.25 3.83424 0.25 4C0.25 4.16576 0.315848 4.32473 0.433058 4.44194C0.550268 4.55915 0.70924 4.625 0.875 4.625H3.375V14C3.375 14.1658 3.44085 14.3247 3.55806 14.4419C3.67527 14.5592 3.83424 14.625 4 14.625H13.375V17.125C13.375 17.2908 13.4408 17.4497 13.5581 17.5669C13.6753 17.6842 13.8342 17.75 14 17.75C14.1658 17.75 14.3247 17.6842 14.4419 17.5669C14.5592 17.4497 14.625 17.2908 14.625 17.125V14.625H17.125C17.2908 14.625 17.4497 14.5592 17.5669 14.4419C17.6842 14.3247 17.75 14.1658 17.75 14C17.75 13.8342 17.6842 13.6753 17.5669 13.5581C17.4497 13.4408 17.2908 13.375 17.125 13.375Z\"" + _vm._ssrAttr("fill", _vm.bgColor) + "></path>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/icon/crop.vue?vue&type=template&id=f1ae90e0

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/icon/crop.vue?vue&type=script&lang=js
/* harmony default export */ var cropvue_type_script_lang_js = ({
  props: {
    bgColor: {
      type: String,
      default: '#1B63D4'
    }
  }
});
// CONCATENATED MODULE: ./components/icon/crop.vue?vue&type=script&lang=js
 /* harmony default export */ var icon_cropvue_type_script_lang_js = (cropvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/icon/crop.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  icon_cropvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "e333d2cc"
  
)

/* harmony default export */ var crop = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/icon/text_bold.vue?vue&type=template&id=1adb0fe0
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('svg', {
    attrs: {
      "width": "12",
      "height": "14",
      "viewBox": "0 0 12 14",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_vm._ssrNode("<path d=\"M9.32036 6.03907C9.81413 5.56377 10.1546 4.95172 10.2979 4.28152C10.4413 3.61132 10.381 2.91357 10.1249 2.27786C9.86875 1.64216 9.42845 1.09753 8.8605 0.713922C8.29256 0.330309 7.62291 0.125224 6.93755 0.125004H1.00005C0.917683 0.123955 0.835939 0.139404 0.759637 0.170442C0.683334 0.201479 0.614017 0.247477 0.55577 0.305724C0.497523 0.363971 0.451525 0.433289 0.420488 0.509591C0.38945 0.585894 0.374001 0.667637 0.37505 0.750004V12.625C0.37505 12.7908 0.440898 12.9497 0.558108 13.0669C0.675319 13.1842 0.83429 13.25 1.00005 13.25H7.87505C8.74196 13.2504 9.58222 12.9504 10.2529 12.401C10.9235 11.8517 11.3831 11.087 11.5535 10.237C11.7239 9.38697 11.5945 8.50419 11.1873 7.73884C10.7802 6.97348 10.1204 6.37283 9.32036 6.03907ZM1.62505 1.375H6.93755C7.51771 1.375 8.07411 1.60547 8.48435 2.01571C8.89458 2.42594 9.12505 2.98234 9.12505 3.5625C9.12505 4.14267 8.89458 4.69906 8.48435 5.1093C8.07411 5.51954 7.51771 5.75 6.93755 5.75H1.62505V1.375ZM7.87505 12H1.62505V7H7.87505C8.53809 7 9.17398 7.2634 9.64282 7.73224C10.1117 8.20108 10.3751 8.83696 10.3751 9.5C10.3751 10.163 10.1117 10.7989 9.64282 11.2678C9.17398 11.7366 8.53809 12 7.87505 12Z\"" + _vm._ssrAttr("fill", _vm.bgColor) + "></path>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/icon/text_bold.vue?vue&type=template&id=1adb0fe0

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/icon/text_bold.vue?vue&type=script&lang=js
/* harmony default export */ var text_boldvue_type_script_lang_js = ({
  props: {
    bgColor: {
      type: String,
      default: '#1B63D4'
    }
  }
});
// CONCATENATED MODULE: ./components/icon/text_bold.vue?vue&type=script&lang=js
 /* harmony default export */ var icon_text_boldvue_type_script_lang_js = (text_boldvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/icon/text_bold.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  icon_text_boldvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "ab739186"
  
)

/* harmony default export */ var text_bold = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/icon/text_italic.vue?vue&type=template&id=ce34cb74
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('svg', {
    attrs: {
      "width": "12",
      "height": "14",
      "viewBox": "0 0 12 14",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_vm._ssrNode("<path d=\"M11.625 1.375C11.625 1.54076 11.5592 1.69973 11.4419 1.81694C11.3247 1.93415 11.1658 2 11 2H8.32812L4.99219 12H7.25C7.41576 12 7.57473 12.0658 7.69194 12.1831C7.80915 12.3003 7.875 12.4592 7.875 12.625C7.875 12.7908 7.80915 12.9497 7.69194 13.0669C7.57473 13.1842 7.41576 13.25 7.25 13.25H1C0.83424 13.25 0.675269 13.1842 0.558058 13.0669C0.440848 12.9497 0.375 12.7908 0.375 12.625C0.375 12.4592 0.440848 12.3003 0.558058 12.1831C0.675269 12.0658 0.83424 12 1 12H3.67187L7.00781 2H4.75C4.58424 2 4.42527 1.93415 4.30806 1.81694C4.19085 1.69973 4.125 1.54076 4.125 1.375C4.125 1.20924 4.19085 1.05027 4.30806 0.933058C4.42527 0.815848 4.58424 0.75 4.75 0.75H11C11.1658 0.75 11.3247 0.815848 11.4419 0.933058C11.5592 1.05027 11.625 1.20924 11.625 1.375Z\"" + _vm._ssrAttr("fill", _vm.bgColor) + "></path>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/icon/text_italic.vue?vue&type=template&id=ce34cb74

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/icon/text_italic.vue?vue&type=script&lang=js
/* harmony default export */ var text_italicvue_type_script_lang_js = ({
  props: {
    bgColor: {
      type: String,
      default: '#1B63D4'
    }
  }
});
// CONCATENATED MODULE: ./components/icon/text_italic.vue?vue&type=script&lang=js
 /* harmony default export */ var icon_text_italicvue_type_script_lang_js = (text_italicvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/icon/text_italic.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  icon_text_italicvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "58f4c168"
  
)

/* harmony default export */ var text_italic = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/icon/text_underlined.vue?vue&type=template&id=66707726
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('svg', {
    attrs: {
      "width": "16",
      "height": "15",
      "viewBox": "0 0 16 15",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_vm._ssrNode("<path d=\"M15.5 13.875C15.5 14.0408 15.4342 14.1997 15.3169 14.3169C15.1997 14.4342 15.0408 14.5 14.875 14.5H1.125C0.95924 14.5 0.800269 14.4342 0.683058 14.3169C0.565848 14.1997 0.5 14.0408 0.5 13.875C0.5 13.7092 0.565848 13.5503 0.683058 13.4331C0.800269 13.3158 0.95924 13.25 1.125 13.25H14.875C15.0408 13.25 15.1997 13.3158 15.3169 13.4331C15.4342 13.5503 15.5 13.7092 15.5 13.875ZM8 12C9.49121 11.9979 10.9207 11.4046 11.9752 10.3502C13.0296 9.29575 13.6229 7.86621 13.625 6.375V1.375C13.625 1.20924 13.5592 1.05027 13.4419 0.933058C13.3247 0.815848 13.1658 0.75 13 0.75C12.8342 0.75 12.6753 0.815848 12.5581 0.933058C12.4408 1.05027 12.375 1.20924 12.375 1.375V6.375C12.375 7.53532 11.9141 8.64812 11.0936 9.46859C10.2731 10.2891 9.16032 10.75 8 10.75C6.83968 10.75 5.72688 10.2891 4.90641 9.46859C4.08594 8.64812 3.625 7.53532 3.625 6.375V1.375C3.625 1.20924 3.55915 1.05027 3.44194 0.933058C3.32473 0.815848 3.16576 0.75 3 0.75C2.83424 0.75 2.67527 0.815848 2.55806 0.933058C2.44085 1.05027 2.375 1.20924 2.375 1.375V6.375C2.37707 7.86621 2.97036 9.29575 4.02481 10.3502C5.07925 11.4046 6.50879 11.9979 8 12Z\"" + _vm._ssrAttr("fill", _vm.bgColor) + "></path>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/icon/text_underlined.vue?vue&type=template&id=66707726

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/icon/text_underlined.vue?vue&type=script&lang=js
/* harmony default export */ var text_underlinedvue_type_script_lang_js = ({
  props: {
    bgColor: {
      type: String,
      default: '#1B63D4'
    }
  }
});
// CONCATENATED MODULE: ./components/icon/text_underlined.vue?vue&type=script&lang=js
 /* harmony default export */ var icon_text_underlinedvue_type_script_lang_js = (text_underlinedvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/icon/text_underlined.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  icon_text_underlinedvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "63f89650"
  
)

/* harmony default export */ var text_underlined = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/icon/text_strike.vue?vue&type=template&id=e7464ef0
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('svg', {
    attrs: {
      "width": "16",
      "height": "14",
      "viewBox": "0 0 16 14",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_vm._ssrNode("<path d=\"M15.5 7C15.5 7.16576 15.4342 7.32473 15.3169 7.44194C15.1997 7.55915 15.0408 7.625 14.875 7.625H11.7445C12.4623 8.18055 13 8.96891 13 10.125C13 11.1672 12.452 12.1325 11.4569 12.8433C10.5255 13.5086 9.29766 13.875 8 13.875C6.70234 13.875 5.47453 13.5086 4.54313 12.8433C3.54805 12.1325 3 11.1671 3 10.125C3 9.95924 3.06585 9.80027 3.18306 9.68306C3.30027 9.56585 3.45924 9.5 3.625 9.5C3.79076 9.5 3.94973 9.56585 4.06694 9.68306C4.18415 9.80027 4.25 9.95924 4.25 10.125C4.25 11.4802 5.96727 12.625 8 12.625C10.0327 12.625 11.75 11.4802 11.75 10.125C11.75 8.96453 10.9266 8.28266 8.72141 7.625H1.125C0.95924 7.625 0.800269 7.55915 0.683058 7.44194C0.565848 7.32473 0.5 7.16576 0.5 7C0.5 6.83424 0.565848 6.67527 0.683058 6.55806C0.800269 6.44085 0.95924 6.375 1.125 6.375H14.875C15.0408 6.375 15.1997 6.44085 15.3169 6.55806C15.4342 6.67527 15.5 6.83424 15.5 7ZM3.96352 5.12539C4.06229 5.1253 4.15963 5.10183 4.24759 5.05688C4.33554 5.01194 4.4116 4.94681 4.46953 4.86681C4.52747 4.78682 4.56564 4.69424 4.58092 4.59666C4.59619 4.49908 4.58814 4.39926 4.55742 4.30539C4.51303 4.16631 4.49129 4.02099 4.49305 3.875C4.49305 2.44977 6.0007 1.375 8 1.375C9.52344 1.375 10.8217 2.01969 11.3075 3.01734C11.343 3.09179 11.3929 3.15847 11.4544 3.21353C11.5158 3.26859 11.5875 3.31095 11.6654 3.33817C11.7432 3.36538 11.8257 3.37691 11.9081 3.37209C11.9904 3.36727 12.071 3.3462 12.1452 3.31009C12.2193 3.27398 12.2856 3.22355 12.3402 3.16169C12.3948 3.09984 12.4366 3.0278 12.4632 2.94972C12.4898 2.87164 12.5007 2.78906 12.4952 2.70675C12.4897 2.62445 12.468 2.54404 12.4313 2.47016C11.727 1.02359 10.029 0.125 8 0.125C5.28813 0.125 3.24305 1.73719 3.24305 3.875C3.24155 4.15335 3.28432 4.43016 3.36977 4.69508C3.41082 4.82019 3.49032 4.92915 3.59693 5.00642C3.70355 5.08369 3.83184 5.12532 3.96352 5.12539Z\"" + _vm._ssrAttr("fill", _vm.bgColor) + "></path>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/icon/text_strike.vue?vue&type=template&id=e7464ef0

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/icon/text_strike.vue?vue&type=script&lang=js
/* harmony default export */ var text_strikevue_type_script_lang_js = ({
  props: {
    bgColor: {
      type: String,
      default: '#1B63D4'
    }
  }
});
// CONCATENATED MODULE: ./components/icon/text_strike.vue?vue&type=script&lang=js
 /* harmony default export */ var icon_text_strikevue_type_script_lang_js = (text_strikevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/icon/text_strike.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  icon_text_strikevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2e9a55ea"
  
)

/* harmony default export */ var text_strike = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/icon/text_left.vue?vue&type=template&id=ac6f6f6a
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('svg', {
    attrs: {
      "width": "16",
      "height": "12",
      "viewBox": "0 0 16 12",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_vm._ssrNode("<path d=\"M0.5 1.3125C0.5 1.14674 0.565848 0.987769 0.683058 0.870558C0.800269 0.753348 0.95924 0.6875 1.125 0.6875H14.875C15.0408 0.6875 15.1997 0.753348 15.3169 0.870558C15.4342 0.987769 15.5 1.14674 15.5 1.3125C15.5 1.47826 15.4342 1.63723 15.3169 1.75444C15.1997 1.87165 15.0408 1.9375 14.875 1.9375H1.125C0.95924 1.9375 0.800269 1.87165 0.683058 1.75444C0.565848 1.63723 0.5 1.47826 0.5 1.3125ZM1.125 5.0625H11.125C11.2908 5.0625 11.4497 4.99665 11.5669 4.87944C11.6842 4.76223 11.75 4.60326 11.75 4.4375C11.75 4.27174 11.6842 4.11277 11.5669 3.99556C11.4497 3.87835 11.2908 3.8125 11.125 3.8125H1.125C0.95924 3.8125 0.800269 3.87835 0.683058 3.99556C0.565848 4.11277 0.5 4.27174 0.5 4.4375C0.5 4.60326 0.565848 4.76223 0.683058 4.87944C0.800269 4.99665 0.95924 5.0625 1.125 5.0625ZM14.875 6.9375H1.125C0.95924 6.9375 0.800269 7.00335 0.683058 7.12056C0.565848 7.23777 0.5 7.39674 0.5 7.5625C0.5 7.72826 0.565848 7.88723 0.683058 8.00444C0.800269 8.12165 0.95924 8.1875 1.125 8.1875H14.875C15.0408 8.1875 15.1997 8.12165 15.3169 8.00444C15.4342 7.88723 15.5 7.72826 15.5 7.5625C15.5 7.39674 15.4342 7.23777 15.3169 7.12056C15.1997 7.00335 15.0408 6.9375 14.875 6.9375ZM11.125 10.0625H1.125C0.95924 10.0625 0.800269 10.1283 0.683058 10.2456C0.565848 10.3628 0.5 10.5217 0.5 10.6875C0.5 10.8533 0.565848 11.0122 0.683058 11.1294C0.800269 11.2467 0.95924 11.3125 1.125 11.3125H11.125C11.2908 11.3125 11.4497 11.2467 11.5669 11.1294C11.6842 11.0122 11.75 10.8533 11.75 10.6875C11.75 10.5217 11.6842 10.3628 11.5669 10.2456C11.4497 10.1283 11.2908 10.0625 11.125 10.0625Z\"" + _vm._ssrAttr("fill", _vm.bgColor) + "></path>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/icon/text_left.vue?vue&type=template&id=ac6f6f6a

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/icon/text_left.vue?vue&type=script&lang=js
/* harmony default export */ var text_leftvue_type_script_lang_js = ({
  props: {
    bgColor: {
      type: String,
      default: '#1B63D4'
    }
  }
});
// CONCATENATED MODULE: ./components/icon/text_left.vue?vue&type=script&lang=js
 /* harmony default export */ var icon_text_leftvue_type_script_lang_js = (text_leftvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/icon/text_left.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  icon_text_leftvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "c28fe882"
  
)

/* harmony default export */ var text_left = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/icon/text_center.vue?vue&type=template&id=4d7f29f0
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('svg', {
    attrs: {
      "width": "16",
      "height": "12",
      "viewBox": "0 0 16 12",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_vm._ssrNode("<path d=\"M0.5 1.3125C0.5 1.14674 0.565848 0.987769 0.683058 0.870558C0.800269 0.753348 0.95924 0.6875 1.125 0.6875H14.875C15.0408 0.6875 15.1997 0.753348 15.3169 0.870558C15.4342 0.987769 15.5 1.14674 15.5 1.3125C15.5 1.47826 15.4342 1.63723 15.3169 1.75444C15.1997 1.87165 15.0408 1.9375 14.875 1.9375H1.125C0.95924 1.9375 0.800269 1.87165 0.683058 1.75444C0.565848 1.63723 0.5 1.47826 0.5 1.3125ZM3 3.8125C2.83424 3.8125 2.67527 3.87835 2.55806 3.99556C2.44085 4.11277 2.375 4.27174 2.375 4.4375C2.375 4.60326 2.44085 4.76223 2.55806 4.87944C2.67527 4.99665 2.83424 5.0625 3 5.0625H13C13.1658 5.0625 13.3247 4.99665 13.4419 4.87944C13.5592 4.76223 13.625 4.60326 13.625 4.4375C13.625 4.27174 13.5592 4.11277 13.4419 3.99556C13.3247 3.87835 13.1658 3.8125 13 3.8125H3ZM14.875 6.9375H1.125C0.95924 6.9375 0.800269 7.00335 0.683058 7.12056C0.565848 7.23777 0.5 7.39674 0.5 7.5625C0.5 7.72826 0.565848 7.88723 0.683058 8.00444C0.800269 8.12165 0.95924 8.1875 1.125 8.1875H14.875C15.0408 8.1875 15.1997 8.12165 15.3169 8.00444C15.4342 7.88723 15.5 7.72826 15.5 7.5625C15.5 7.39674 15.4342 7.23777 15.3169 7.12056C15.1997 7.00335 15.0408 6.9375 14.875 6.9375ZM13 10.0625H3C2.83424 10.0625 2.67527 10.1283 2.55806 10.2456C2.44085 10.3628 2.375 10.5217 2.375 10.6875C2.375 10.8533 2.44085 11.0122 2.55806 11.1294C2.67527 11.2467 2.83424 11.3125 3 11.3125H13C13.1658 11.3125 13.3247 11.2467 13.4419 11.1294C13.5592 11.0122 13.625 10.8533 13.625 10.6875C13.625 10.5217 13.5592 10.3628 13.4419 10.2456C13.3247 10.1283 13.1658 10.0625 13 10.0625Z\"" + _vm._ssrAttr("fill", _vm.bgColor) + "></path>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/icon/text_center.vue?vue&type=template&id=4d7f29f0

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/icon/text_center.vue?vue&type=script&lang=js
/* harmony default export */ var text_centervue_type_script_lang_js = ({
  props: {
    bgColor: {
      type: String,
      default: '#1B63D4'
    }
  }
});
// CONCATENATED MODULE: ./components/icon/text_center.vue?vue&type=script&lang=js
 /* harmony default export */ var icon_text_centervue_type_script_lang_js = (text_centervue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/icon/text_center.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  icon_text_centervue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "524a8de6"
  
)

/* harmony default export */ var text_center = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/icon/text_right.vue?vue&type=template&id=1050b7a8
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('svg', {
    attrs: {
      "width": "16",
      "height": "12",
      "viewBox": "0 0 16 12",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_vm._ssrNode("<path d=\"M0.5 1.3125C0.5 1.14674 0.565848 0.987769 0.683058 0.870558C0.800269 0.753348 0.95924 0.6875 1.125 0.6875H14.875C15.0408 0.6875 15.1997 0.753348 15.3169 0.870558C15.4342 0.987769 15.5 1.14674 15.5 1.3125C15.5 1.47826 15.4342 1.63723 15.3169 1.75444C15.1997 1.87165 15.0408 1.9375 14.875 1.9375H1.125C0.95924 1.9375 0.800269 1.87165 0.683058 1.75444C0.565848 1.63723 0.5 1.47826 0.5 1.3125ZM14.875 3.8125H4.875C4.70924 3.8125 4.55027 3.87835 4.43306 3.99556C4.31585 4.11277 4.25 4.27174 4.25 4.4375C4.25 4.60326 4.31585 4.76223 4.43306 4.87944C4.55027 4.99665 4.70924 5.0625 4.875 5.0625H14.875C15.0408 5.0625 15.1997 4.99665 15.3169 4.87944C15.4342 4.76223 15.5 4.60326 15.5 4.4375C15.5 4.27174 15.4342 4.11277 15.3169 3.99556C15.1997 3.87835 15.0408 3.8125 14.875 3.8125ZM14.875 6.9375H1.125C0.95924 6.9375 0.800269 7.00335 0.683058 7.12056C0.565848 7.23777 0.5 7.39674 0.5 7.5625C0.5 7.72826 0.565848 7.88723 0.683058 8.00444C0.800269 8.12165 0.95924 8.1875 1.125 8.1875H14.875C15.0408 8.1875 15.1997 8.12165 15.3169 8.00444C15.4342 7.88723 15.5 7.72826 15.5 7.5625C15.5 7.39674 15.4342 7.23777 15.3169 7.12056C15.1997 7.00335 15.0408 6.9375 14.875 6.9375ZM14.875 10.0625H4.875C4.70924 10.0625 4.55027 10.1283 4.43306 10.2456C4.31585 10.3628 4.25 10.5217 4.25 10.6875C4.25 10.8533 4.31585 11.0122 4.43306 11.1294C4.55027 11.2467 4.70924 11.3125 4.875 11.3125H14.875C15.0408 11.3125 15.1997 11.2467 15.3169 11.1294C15.4342 11.0122 15.5 10.8533 15.5 10.6875C15.5 10.5217 15.4342 10.3628 15.3169 10.2456C15.1997 10.1283 15.0408 10.0625 14.875 10.0625Z\"" + _vm._ssrAttr("fill", _vm.bgColor) + "></path>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/icon/text_right.vue?vue&type=template&id=1050b7a8

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/icon/text_right.vue?vue&type=script&lang=js
/* harmony default export */ var text_rightvue_type_script_lang_js = ({
  props: {
    bgColor: {
      type: String,
      default: '#1B63D4'
    }
  }
});
// CONCATENATED MODULE: ./components/icon/text_right.vue?vue&type=script&lang=js
 /* harmony default export */ var icon_text_rightvue_type_script_lang_js = (text_rightvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/icon/text_right.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  icon_text_rightvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "758e8614"
  
)

/* harmony default export */ var text_right = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/icon/text_justify.vue?vue&type=template&id=76a2654c
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('svg', {
    attrs: {
      "width": "16",
      "height": "12",
      "viewBox": "0 0 16 12",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_vm._ssrNode("<path d=\"M0.5 1.3125C0.5 1.14674 0.565848 0.987769 0.683058 0.870558C0.800269 0.753348 0.95924 0.6875 1.125 0.6875H14.875C15.0408 0.6875 15.1997 0.753348 15.3169 0.870558C15.4342 0.987769 15.5 1.14674 15.5 1.3125C15.5 1.47826 15.4342 1.63723 15.3169 1.75444C15.1997 1.87165 15.0408 1.9375 14.875 1.9375H1.125C0.95924 1.9375 0.800269 1.87165 0.683058 1.75444C0.565848 1.63723 0.5 1.47826 0.5 1.3125ZM14.875 3.8125H1.125C0.95924 3.8125 0.800269 3.87835 0.683058 3.99556C0.565848 4.11277 0.5 4.27174 0.5 4.4375C0.5 4.60326 0.565848 4.76223 0.683058 4.87944C0.800269 4.99665 0.95924 5.0625 1.125 5.0625H14.875C15.0408 5.0625 15.1997 4.99665 15.3169 4.87944C15.4342 4.76223 15.5 4.60326 15.5 4.4375C15.5 4.27174 15.4342 4.11277 15.3169 3.99556C15.1997 3.87835 15.0408 3.8125 14.875 3.8125ZM14.875 6.9375H1.125C0.95924 6.9375 0.800269 7.00335 0.683058 7.12056C0.565848 7.23777 0.5 7.39674 0.5 7.5625C0.5 7.72826 0.565848 7.88723 0.683058 8.00444C0.800269 8.12165 0.95924 8.1875 1.125 8.1875H14.875C15.0408 8.1875 15.1997 8.12165 15.3169 8.00444C15.4342 7.88723 15.5 7.72826 15.5 7.5625C15.5 7.39674 15.4342 7.23777 15.3169 7.12056C15.1997 7.00335 15.0408 6.9375 14.875 6.9375ZM14.875 10.0625H1.125C0.95924 10.0625 0.800269 10.1283 0.683058 10.2456C0.565848 10.3628 0.5 10.5217 0.5 10.6875C0.5 10.8533 0.565848 11.0122 0.683058 11.1294C0.800269 11.2467 0.95924 11.3125 1.125 11.3125H14.875C15.0408 11.3125 15.1997 11.2467 15.3169 11.1294C15.4342 11.0122 15.5 10.8533 15.5 10.6875C15.5 10.5217 15.4342 10.3628 15.3169 10.2456C15.1997 10.1283 15.0408 10.0625 14.875 10.0625Z\"" + _vm._ssrAttr("fill", _vm.bgColor) + "></path>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/icon/text_justify.vue?vue&type=template&id=76a2654c

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/icon/text_justify.vue?vue&type=script&lang=js
/* harmony default export */ var text_justifyvue_type_script_lang_js = ({
  props: {
    bgColor: {
      type: String,
      default: '#1B63D4'
    }
  }
});
// CONCATENATED MODULE: ./components/icon/text_justify.vue?vue&type=script&lang=js
 /* harmony default export */ var icon_text_justifyvue_type_script_lang_js = (text_justifyvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/icon/text_justify.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  icon_text_justifyvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "03c97c88"
  
)

/* harmony default export */ var text_justify = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(177);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(3).default("6f4e3760", content, true)

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URL) {/* harmony default export */ __webpack_exports__["a"] = ({
  layout: 'login',
  props: {
    imgSrc: {
      type: Object,
      default: null
    }
  },

  data() {
    return {
      zoom: 1,
      resultImage: null,
      imageData: null,
      tempIndex: 1,
      imageUpload: false
    };
  },

  destroyed() {
    if (this.imgSrc.img) {
      URL.revokeObjectURL(this.imgSrc.img);
    }
  },

  mounted() {
    this.$refs.cropper.refresh();
    this.imageData = null;
  },

  methods: {
    percentsRestriction({
      minWidth,
      minHeight,
      maxWidth,
      maxHeight,
      imageWidth,
      imageHeight
    }) {
      return {
        minWidth,
        minHeight,
        maxWidth,
        maxHeight
      };
    },

    dataURLtoFile(dataurl, filename) {
      const arr = dataurl.split(',');
      const mime = arr[0].match(/:(.*?);/)[1];
      const bstr = atob(arr[1]);
      let n = bstr.length;
      const u8arr = new Uint8Array(n);

      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }

      return new File([u8arr], filename, {
        type: mime
      });
    },

    async applyChange() {
      this.imageUpload = true;
      const canvas = this.$refs.cropper.getResult();
      this.resultImage = canvas.canvas.toDataURL();
      const file = this.dataURLtoFile(this.resultImage, 'result_crop_' + Date.now() + this.tempIndex++);
      const data = new FormData();
      data.append('files', file);
      await this.$axios.post('obs/array', data, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => {
        const fileKey = this.$config.baseURL + 'obs?fileKey=' + res.data.data.fileKeys[0];
        const dataFile = {
          status: 'ready',
          name: 'result_crop_' + Date.now() + this.tempIndex++,
          size: file.size,
          percentage: 0,
          uid: '-',
          raw: file
        };
        const data = {
          indexRawImage: this.imgSrc.indexRawImage,
          indexForm: this.imgSrc.indexForm,
          title: this.imgSrc.title,
          type: this.imgSrc.type,
          src: fileKey,
          data: dataFile
        };
        this.$emit('saveEditor', data);
        this.imageUpload = false;
      }).catch(error => {
        this.$notifier.showMessage({
          content: 'Upload failed. Please try again ! ' + error,
          type: 'failed'
        });
        this.imageUpload = false;
      });
    },

    onZoom(x) {
      if (x === 'in') {
        const zoom = 1;
        this.zoom = zoom + 1;
        this.$refs.cropper.zoom(this.zoom);
      } else {
        this.$refs.cropper.zoom(0.5);
      }
    },

    move(x) {
      if (x === 'up') {
        this.$refs.cropper.move(0, -100);
      }

      if (x === 'down') {
        this.$refs.cropper.move(0, 100);
      }

      if (x === 'left') {
        this.$refs.cropper.move(-100, 0);
      }

      if (x === 'right') {
        this.$refs.cropper.move(100, 0);
      }
    },

    close() {
      this.$emit('closeEditor', false);
      this.$store.commit('user/SET_DROPDOWN', null);
    },

    changeImage(file) {
      const {
        files
      } = event.target;

      if (files && files[0]) {
        const formatData = files[0].type;

        if (formatData === 'image/jpg' || formatData === 'image/jpeg' || formatData === 'image/png' || formatData === 'image/gif' || formatData === 'image/bmp') {
          if (files[0].size / 1023.4 > 500) {
            this.$message.error('Image size can not exceed 500KB!');
          } else {
            if (this.imgSrc.img) {
              URL.revokeObjectURL(this.imgSrc.img);
            }

            file.uid = Date.now() + this.tempIndex++;
            const dataFile = {
              status: 'ready',
              name: files[0].name,
              size: files[0].size,
              percentage: 0,
              uid: file.uid,
              raw: files[0]
            };
            this.imageData = dataFile;
            this.getBase64(files[0]).then(res => {
              const params = res.split(',');

              if (params.length > 0) {
                this.imgBase64 = params[1];
                this.imgSrc.img = 'data:image/png;base64, ' + params[1];
              }
            });
          }
        } else {
          this.$message.error('Image must be JPG, JPEG, PNG, GIF & BMP format');
        }
      }
    },

    getBase64(file) {
      return new Promise(function (resolve, reject) {
        const reader = new FileReader();
        let imgResult = '';
        reader.readAsDataURL(file);

        reader.onload = function () {
          imgResult = reader.result;
        };

        reader.onerror = function (error) {
          reject(error);
        };

        reader.onloadend = function () {
          resolve(imgResult);
        };
      });
    }

  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(20)["URL"]))

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon_apply.1756591.svg";

/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/upload.efec700.svg";

/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n\n.vue-swatches__check__wrapper{\n  position:absolute;\n  width:100%;\n  height:100%\n}\n\n.vue-swatches__check__circle{\n  width:21px;\n  height:21px;\n  border-radius:50%;\n  background-color:rgba(0,0,0,.15)\n}\n\n.vue-swatches__check__path{\n  fill:#fff\n}\n\n.vue-swatches__swatch{\n  position:relative;\n  display:inline-block;\n  font-size:0\n}\n\n.vue-swatches__swatch:focus,.vue-swatches__swatch:hover{\n  opacity:.9;\n  box-shadow:inset 0 0 2px rgba(0,0,0,.75);\n  outline:none\n}\n\n.vue-swatches__swatch.vue-swatches__swatch--border,.vue-swatches__swatch.vue-swatches__swatch--selected{\n  box-shadow:inset 0 0 2px rgba(0,0,0,.75)\n}\n\n.vue-swatches__swatch__label{\n  position:absolute;\n  left:0;\n  right:0;\n  color:#666;\n  font-size:10px;\n  font-weight:700;\n  text-align:center\n}\n\n.vue-swatches__swatch .vue-swatches__diagonal__wrapper{\n  position:absolute\n}\n\nfieldset[disabled] .vue-swatches{\n  pointer-events:none\n}\n\n.vue-swatches{\n  position:relative;\n  display:inline-block;\n  outline:none\n}\n\n.vue-swatches__trigger__wrapper{\n  display:inline-block;\n  cursor:pointer\n}\n\n.vue-swatches__trigger.vue-swatches--is-empty{\n  border:2px solid #ccc\n}\n\n.vue-swatches__trigger.vue-swatches--is-disabled{\n  cursor:not-allowed\n}\n\n.vue-swatches__container{\n  box-sizing:content-box\n}\n\n.vue-swatches__container.vue-swatches--inline{\n  font-size:0\n}\n\n.vue-swatches__container:not(.vue-swatches--inline){\n  position:absolute;\n  display:block;\n  overflow:auto;\n  border-radius:5px;\n  box-shadow:0 2px 3px rgba(10,10,10,.2),0 0 0 1px rgba(10,10,10,.2);\n  z-index:50\n}\n\n.vue-swatches__wrapper{\n  background-color:inherit;\n  box-sizing:content-box\n}\n\n.vue-swatches__row{\n  font-size:0\n}\n\n.vue-swatches__fallback__wrapper{\n  display:table\n}\n\n.vue-swatches__fallback__input--wrapper{\n  display:table-cell;\n  padding-right:10px;\n  width:100%;\n  font-size:14px\n}\n\n.vue-swatches__fallback__input{\n  width:100%;\n  padding-top:6px;\n  padding-bottom:6px;\n  border-radius:5px;\n  border:1px solid #dcdcdc;\n  color:#35495e;\n  background:#fff\n}\n\n.vue-swatches__fallback__button{\n  display:table-cell;\n  padding:6px 15px;\n  border:0;\n  cursor:pointer;\n  font-weight:700;\n  color:#fff;\n  background-color:#3571c8;\n  border-radius:5px\n}\n\n.vue-swatches-show-hide-enter-active,.vue-swatches-show-hide-leave-active{\n  transition:all .3s ease\n}\n\n.vue-swatches-show-hide-enter,.vue-swatches-show-hide-leave-active{\n  opacity:0\n}\n\n.vue-swatches--has-children-centered{\n  display:flex;\n  align-items:center;\n  justify-content:center\n}\n\n.vue-swatches__diagonal__wrapper{\n  width:100%;\n  height:100%\n}\n\n.vue-swatches__diagonal{\n  width:75%;\n  height:75%;\n  background:linear-gradient(to top right,transparent 0,transparent calc(50% - 2.4px),#de080a 50%,transparent calc(50% + 2.4px),transparent)\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/icon/info.vue?vue&type=template&id=51cdd5c2
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('svg', {
    attrs: {
      "width": "20",
      "height": "20",
      "viewBox": "0 0 20 20",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_vm._ssrNode("<path d=\"M9.99994 0.25C8.07158 0.25 6.18651 0.821828 4.58313 1.89317C2.97975 2.96451 1.73007 4.48726 0.992118 6.26884C0.254163 8.05042 0.061081 10.0108 0.437287 11.9021C0.813493 13.7934 1.74209 15.5307 3.10565 16.8943C4.46921 18.2579 6.2065 19.1865 8.09781 19.5627C9.98913 19.9389 11.9495 19.7458 13.7311 19.0078C15.5127 18.2699 17.0354 17.0202 18.1068 15.4168C19.1781 13.8134 19.7499 11.9284 19.7499 10C19.747 7.41504 18.7188 4.93679 16.891 3.10894C15.0632 1.2811 12.5849 0.252928 9.99994 0.25ZM9.99994 18.25C8.36825 18.25 6.77319 17.7661 5.41649 16.8596C4.05978 15.9531 3.00236 14.6646 2.37794 13.1571C1.75351 11.6496 1.59014 9.99085 1.90846 8.3905C2.22679 6.79016 3.01253 5.32015 4.16631 4.16637C5.3201 3.01259 6.7901 2.22685 8.39045 1.90852C9.99079 1.59019 11.6496 1.75357 13.1571 2.37799C14.6646 3.00242 15.953 4.05984 16.8596 5.41655C17.7661 6.77325 18.2499 8.3683 18.2499 10C18.2475 12.1873 17.3775 14.2843 15.8308 15.8309C14.2842 17.3775 12.1872 18.2475 9.99994 18.25ZM11.4999 14.5C11.4999 14.6989 11.4209 14.8897 11.2803 15.0303C11.1396 15.171 10.9489 15.25 10.7499 15.25H9.99994C9.80103 15.25 9.61027 15.171 9.46961 15.0303C9.32896 14.8897 9.24994 14.6989 9.24994 14.5V10C9.05103 10 8.86027 9.92098 8.71961 9.78033C8.57896 9.63968 8.49994 9.44891 8.49994 9.25C8.49994 9.05109 8.57896 8.86032 8.71961 8.71967C8.86027 8.57902 9.05103 8.5 9.24994 8.5H9.99994C10.1989 8.5 10.3896 8.57902 10.5303 8.71967C10.6709 8.86032 10.7499 9.05109 10.7499 9.25V13.75C10.9489 13.75 11.1396 13.829 11.2803 13.9697C11.4209 14.1103 11.4999 14.3011 11.4999 14.5ZM8.68744 5.875C8.68744 5.6525 8.75342 5.43499 8.87704 5.24998C9.00066 5.06498 9.17636 4.92078 9.38192 4.83564C9.58749 4.75049 9.81369 4.72821 10.0319 4.77162C10.2501 4.81502 10.4506 4.92217 10.6079 5.0795C10.7653 5.23684 10.8724 5.43729 10.9158 5.65552C10.9592 5.87375 10.937 6.09995 10.8518 6.30552C10.7667 6.51109 10.6225 6.68679 10.4375 6.8104C10.2525 6.93402 10.0349 7 9.81244 7C9.51407 7 9.22793 6.88147 9.01695 6.6705C8.80597 6.45952 8.68744 6.17337 8.68744 5.875Z\"" + _vm._ssrAttr("fill", _vm.bgColor) + "></path>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/icon/info.vue?vue&type=template&id=51cdd5c2

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/icon/info.vue?vue&type=script&lang=js
/* harmony default export */ var infovue_type_script_lang_js = ({
  props: {
    bgColor: {
      type: String,
      default: '#1B63D4'
    }
  }
});
// CONCATENATED MODULE: ./components/icon/info.vue?vue&type=script&lang=js
 /* harmony default export */ var icon_infovue_type_script_lang_js = (infovue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/icon/info.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  icon_infovue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1aaa81b8"
  
)

/* harmony default export */ var info = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/icon/play_v2.vue?vue&type=template&id=5c348254
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('svg', {
    attrs: {
      "width": "14",
      "height": "18",
      "viewBox": "0 0 14 18",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_vm._ssrNode("<path d=\"M1.24992 17.1239C1.08578 17.124 0.923233 17.0917 0.771573 17.0289C0.619912 16.9661 0.482109 16.8741 0.366035 16.758C0.24996 16.642 0.15789 16.5042 0.0950849 16.3525C0.0322795 16.2009 -3.07745e-05 16.0383 2.19944e-08 15.8742V2.12582C2.80628e-05 1.90376 0.0592095 1.68572 0.171457 1.49412C0.283704 1.30252 0.444966 1.14428 0.638654 1.03568C0.832343 0.927072 1.05147 0.872025 1.27348 0.876197C1.4955 0.880369 1.7124 0.943609 1.90188 1.05941L13.15 7.93355C13.3327 8.04522 13.4837 8.20194 13.5884 8.3887C13.6931 8.57546 13.7481 8.78599 13.7481 9.00012C13.7481 9.21424 13.6931 9.42477 13.5884 9.61153C13.4837 9.79829 13.3327 9.95501 13.15 10.0667L1.90188 16.9409C1.70555 17.0608 1.47995 17.1241 1.24992 17.124V17.1239ZM1.25 2.12582V15.8743L12.4982 9.00004L1.25 2.12582Z\"" + _vm._ssrAttr("fill", _vm.bgColor) + "></path>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/icon/play_v2.vue?vue&type=template&id=5c348254

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/icon/play_v2.vue?vue&type=script&lang=js
/* harmony default export */ var play_v2vue_type_script_lang_js = ({
  props: {
    bgColor: {
      type: String,
      default: '#1B63D4'
    }
  }
});
// CONCATENATED MODULE: ./components/icon/play_v2.vue?vue&type=script&lang=js
 /* harmony default export */ var icon_play_v2vue_type_script_lang_js = (play_v2vue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/icon/play_v2.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  icon_play_v2vue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "d109d866"
  
)

/* harmony default export */ var play_v2 = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/icon/minus.vue?vue&type=template&id=0c8312d6
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('svg', {
    attrs: {
      "width": "16",
      "height": "2",
      "viewBox": "0 0 16 2",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_vm._ssrNode("<path d=\"M14.875 1.625H1.125C0.95924 1.625 0.800269 1.55915 0.683058 1.44194C0.565848 1.32473 0.5 1.16576 0.5 1C0.5 0.83424 0.565848 0.675269 0.683058 0.558058C0.800269 0.440848 0.95924 0.375 1.125 0.375H14.875C15.0408 0.375 15.1997 0.440848 15.3169 0.558058C15.4342 0.675269 15.5 0.83424 15.5 1C15.5 1.16576 15.4342 1.32473 15.3169 1.44194C15.1997 1.55915 15.0408 1.625 14.875 1.625Z\"" + _vm._ssrAttr("fill", _vm.bgColor) + "></path>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/icon/minus.vue?vue&type=template&id=0c8312d6

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/icon/minus.vue?vue&type=script&lang=js
/* harmony default export */ var minusvue_type_script_lang_js = ({
  props: {
    bgColor: {
      type: String,
      default: 'white'
    }
  }
});
// CONCATENATED MODULE: ./components/icon/minus.vue?vue&type=script&lang=js
 /* harmony default export */ var icon_minusvue_type_script_lang_js = (minusvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/icon/minus.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  icon_minusvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "396c1fd6"
  
)

/* harmony default export */ var minus = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/icon/refresh.vue?vue&type=template&id=23cdfa0d
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('svg', {
    attrs: {
      "width": "18",
      "height": "16",
      "viewBox": "0 0 18 16",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_vm._ssrNode("<path d=\"M5.23437 6.05882H1.48437C1.31861 6.05882 1.15964 5.99297 1.04243 5.87576C0.925223 5.75855 0.859375 5.59958 0.859375 5.43382V1.68382C0.859375 1.51806 0.925223 1.35909 1.04243 1.24188C1.15964 1.12467 1.31861 1.05882 1.48437 1.05882C1.65014 1.05882 1.80911 1.12467 1.92632 1.24188C2.04353 1.35909 2.10937 1.51806 2.10937 1.68382V3.92601L3.69531 2.34007C5.10397 0.936517 7.01146 0.148437 9 0.148438C10.9885 0.148437 12.896 0.936517 14.3047 2.34007C14.4216 2.45723 14.4872 2.61598 14.4872 2.78147C14.4872 2.94697 14.4216 3.10571 14.3047 3.22288C14.2472 3.2817 14.1785 3.32844 14.1027 3.36035C14.0269 3.39226 13.9455 3.4087 13.8633 3.4087C13.781 3.4087 13.6996 3.39226 13.6238 3.36035C13.548 3.32844 13.4794 3.2817 13.4219 3.22288C12.2475 2.0531 10.6575 1.3963 9 1.3963C7.34246 1.3963 5.75245 2.0531 4.57812 3.22288L2.99219 4.80882H5.23437C5.40013 4.80882 5.55911 4.87467 5.67632 4.99188C5.79353 5.10909 5.85937 5.26806 5.85937 5.43382C5.85937 5.59958 5.79353 5.75855 5.67632 5.87576C5.55911 5.99297 5.40013 6.05882 5.23437 6.05882ZM16.5156 9.23069H12.7656C12.5999 9.23069 12.4409 9.29654 12.3237 9.41375C12.2065 9.53096 12.1406 9.68993 12.1406 9.85569C12.1406 10.0215 12.2065 10.1804 12.3237 10.2976C12.4409 10.4148 12.5999 10.4807 12.7656 10.4807H15.0078L13.4219 12.0666C12.2475 13.2364 10.6575 13.8932 9 13.8932C7.34246 13.8932 5.75245 13.2364 4.57812 12.0666C4.52064 12.0078 4.45198 11.9611 4.37618 11.9292C4.30038 11.8973 4.21896 11.8808 4.13672 11.8808C4.05447 11.8808 3.97306 11.8973 3.89726 11.9292C3.82146 11.9611 3.75279 12.0078 3.69531 12.0666C3.57843 12.1838 3.51279 12.3425 3.51279 12.508C3.51279 12.6735 3.57843 12.8323 3.69531 12.9494C5.10296 14.3549 7.01083 15.1443 9 15.1443C10.9892 15.1443 12.897 14.3549 14.3047 12.9494L15.8906 11.3635V13.6057C15.8906 13.7715 15.9565 13.9304 16.0737 14.0476C16.1909 14.1648 16.3499 14.2307 16.5156 14.2307C16.6814 14.2307 16.8404 14.1648 16.9576 14.0476C17.0748 13.9304 17.1406 13.7715 17.1406 13.6057V9.85569C17.1406 9.68993 17.0748 9.53096 16.9576 9.41375C16.8404 9.29654 16.6814 9.23069 16.5156 9.23069Z\"" + _vm._ssrAttr("fill", _vm.bgColor) + "></path>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/icon/refresh.vue?vue&type=template&id=23cdfa0d

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/icon/refresh.vue?vue&type=script&lang=js
/* harmony default export */ var refreshvue_type_script_lang_js = ({
  props: {
    bgColor: {
      type: String,
      default: '#1B63D4'
    }
  }
});
// CONCATENATED MODULE: ./components/icon/refresh.vue?vue&type=script&lang=js
 /* harmony default export */ var icon_refreshvue_type_script_lang_js = (refreshvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/icon/refresh.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  icon_refreshvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5cb02141"
  
)

/* harmony default export */ var refresh = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(219);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("480f03d6", content, true, context)
};

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(222);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("7ae06840", content, true, context)
};

/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(224);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("3261487d", content, true, context)
};

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/icon/reload.vue?vue&type=template&id=0bd806c1
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('svg', {
    attrs: {
      "width": "23",
      "height": "22",
      "viewBox": "0 0 23 22",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_vm._ssrNode("<path d=\"M22.3969 2.65469V7.90469C22.3969 8.13676 22.3047 8.35932 22.1406 8.52341C21.9765 8.68751 21.754 8.77969 21.5219 8.77969H16.2719C16.0398 8.77969 15.8173 8.68751 15.6532 8.52341C15.4891 8.35932 15.3969 8.13676 15.3969 7.90469C15.3969 7.67263 15.4891 7.45007 15.6532 7.28597C15.8173 7.12188 16.0398 7.02969 16.2719 7.02969H19.411L17.1906 4.80938C15.9665 3.58664 14.4074 2.75425 12.7104 2.41742C11.0133 2.08059 9.25446 2.25444 7.65618 2.91699C6.05789 3.57954 4.6919 4.70106 3.73087 6.13978C2.76984 7.5785 2.25691 9.26983 2.25691 11C2.25691 12.7302 2.76984 14.4215 3.73087 15.8602C4.6919 17.299 6.05789 18.4205 7.65618 19.083C9.25446 19.7456 11.0133 19.9194 12.7104 19.5826C14.4074 19.2458 15.9665 18.4134 17.1906 17.1906C17.2711 17.1083 17.3672 17.0428 17.4734 16.9982C17.5795 16.9535 17.6935 16.9305 17.8086 16.9305C17.9238 16.9305 18.0377 16.9535 18.1439 16.9982C18.25 17.0428 18.3461 17.1083 18.4266 17.1906C18.5902 17.3547 18.6821 17.5769 18.6821 17.8086C18.6821 18.0403 18.5902 18.2625 18.4266 18.4266C16.9579 19.8945 15.087 20.894 13.0503 21.2987C11.0137 21.7034 8.90276 21.4951 6.98446 20.7002C5.06616 19.9053 3.42661 18.5595 2.27309 16.8329C1.11958 15.1063 0.503906 13.0765 0.503906 11C0.503906 8.92354 1.11958 6.89369 2.27309 5.16709C3.42661 3.44049 5.06616 2.09468 6.98446 1.2998C8.90276 0.504914 11.0137 0.296658 13.0503 0.701358C15.087 1.10606 16.9579 2.10554 18.4266 3.57344L20.6469 5.79376V2.65469C20.6469 2.42263 20.7391 2.20007 20.9032 2.03597C21.0673 1.87188 21.2898 1.77969 21.5219 1.77969C21.754 1.77969 21.9765 1.87188 22.1406 2.03597C22.3047 2.20007 22.3969 2.42263 22.3969 2.65469Z\"" + _vm._ssrAttr("fill", _vm.bgColor) + "></path>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/icon/reload.vue?vue&type=template&id=0bd806c1

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/icon/reload.vue?vue&type=script&lang=js
/* harmony default export */ var reloadvue_type_script_lang_js = ({
  props: {
    bgColor: {
      type: String,
      default: '#757575'
    }
  }
});
// CONCATENATED MODULE: ./components/icon/reload.vue?vue&type=script&lang=js
 /* harmony default export */ var icon_reloadvue_type_script_lang_js = (reloadvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/icon/reload.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  icon_reloadvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3f6e9ca3"
  
)

/* harmony default export */ var reload = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/icon/drag.vue?vue&type=template&id=3a09d044
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('svg', {
    attrs: {
      "width": "8",
      "height": "13",
      "viewBox": "0 0 8 13",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_vm._ssrNode("<path d=\"M2.125 11.8125C2.125 11.9979 2.07002 12.1792 1.967 12.3334C1.86399 12.4875 1.71757 12.6077 1.54627 12.6786C1.37496 12.7496 1.18646 12.7682 1.0046 12.732C0.822746 12.6958 0.6557 12.6065 0.524588 12.4754C0.393476 12.3443 0.304188 12.1773 0.268014 11.9954C0.231841 11.8135 0.250406 11.625 0.321363 11.4537C0.392321 11.2824 0.512483 11.136 0.666654 11.033C0.820825 10.93 1.00208 10.875 1.1875 10.875C1.43614 10.875 1.6746 10.9738 1.85041 11.1496C2.02623 11.3254 2.125 11.5639 2.125 11.8125ZM1.1875 5.5625C1.00208 5.5625 0.820825 5.61749 0.666654 5.7205C0.512483 5.82351 0.392321 5.96993 0.321363 6.14124C0.250406 6.31254 0.231841 6.50104 0.268014 6.6829C0.304188 6.86476 0.393476 7.0318 0.524588 7.16292C0.6557 7.29403 0.822746 7.38332 1.0046 7.41949C1.18646 7.45566 1.37496 7.4371 1.54627 7.36614C1.71757 7.29518 1.86399 7.17502 1.967 7.02085C2.07002 6.86668 2.125 6.68542 2.125 6.5C2.125 6.25136 2.02623 6.01291 1.85041 5.83709C1.6746 5.66127 1.43614 5.5625 1.1875 5.5625ZM6.8125 2.125C6.99792 2.125 7.17918 2.07002 7.33335 1.967C7.48752 1.86399 7.60768 1.71757 7.67864 1.54627C7.74959 1.37496 7.76816 1.18646 7.73199 1.0046C7.69581 0.822746 7.60652 0.6557 7.47541 0.524588C7.3443 0.393476 7.17725 0.304188 6.9954 0.268014C6.81354 0.231841 6.62504 0.250406 6.45374 0.321363C6.28243 0.392321 6.13601 0.512482 6.033 0.666654C5.92998 0.820825 5.875 1.00208 5.875 1.1875C5.875 1.43614 5.97377 1.6746 6.14959 1.85041C6.3254 2.02623 6.56386 2.125 6.8125 2.125ZM6.8125 5.5625C6.62708 5.5625 6.44582 5.61749 6.29165 5.7205C6.13748 5.82351 6.01732 5.96993 5.94636 6.14124C5.87541 6.31254 5.85684 6.50104 5.89301 6.6829C5.92919 6.86476 6.01848 7.0318 6.14959 7.16292C6.2807 7.29403 6.44775 7.38332 6.6296 7.41949C6.81146 7.45566 6.99996 7.4371 7.17127 7.36614C7.34257 7.29518 7.48899 7.17502 7.592 7.02085C7.69502 6.86668 7.75 6.68542 7.75 6.5C7.75 6.25136 7.65123 6.01291 7.47541 5.83709C7.2996 5.66127 7.06114 5.5625 6.8125 5.5625ZM1.1875 0.250001C1.00208 0.250001 0.820825 0.304984 0.666654 0.407998C0.512483 0.511012 0.392321 0.657429 0.321363 0.828735C0.250406 1.00004 0.231841 1.18854 0.268014 1.3704C0.304188 1.55226 0.393476 1.7193 0.524588 1.85041C0.6557 1.98153 0.822746 2.07081 1.0046 2.10699C1.18646 2.14316 1.37496 2.1246 1.54627 2.05364C1.71757 1.98268 1.86399 1.86252 1.967 1.70835C2.07002 1.55418 2.125 1.37292 2.125 1.1875C2.125 0.93886 2.02623 0.700403 1.85041 0.524588C1.6746 0.348772 1.43614 0.250001 1.1875 0.250001ZM6.8125 10.875C6.62708 10.875 6.44582 10.93 6.29165 11.033C6.13748 11.136 6.01732 11.2824 5.94636 11.4537C5.87541 11.625 5.85684 11.8135 5.89301 11.9954C5.92919 12.1773 6.01848 12.3443 6.14959 12.4754C6.2807 12.6065 6.44775 12.6958 6.6296 12.732C6.81146 12.7682 6.99996 12.7496 7.17127 12.6786C7.34257 12.6077 7.48899 12.4875 7.592 12.3334C7.69502 12.1792 7.75 11.9979 7.75 11.8125C7.75 11.5639 7.65123 11.3254 7.47541 11.1496C7.2996 10.9738 7.06114 10.875 6.8125 10.875Z\" fill=\"#1B63D4\"></path>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/icon/drag.vue?vue&type=template&id=3a09d044

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/icon/drag.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4436d184"
  
)

/* harmony default export */ var drag = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/card/Form.vue?vue&type=template&id=5bcbf81f&scoped=true
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "component-card flex flex-col"
  }, [_vm._ssrNode("<div class=\"header-component flex items-center justify-between\" data-v-5bcbf81f>", "</div>", [_vm._ssrNode("<div class=\"flex items-center\" data-v-5bcbf81f>", "</div>", [_vm._t("header")], 2), _vm._ssrNode(" <div class=\"flex btn-preview noselect\" data-v-5bcbf81f><img" + _vm._ssrAttr("src", __webpack_require__(137)) + " data-v-5bcbf81f></div>")], 2), _vm._ssrNode(" "), _vm.isBodyVisible ? _vm._ssrNode("<div class=\"body-component\" data-v-5bcbf81f>", "</div>", [_vm._t("body")], 2) : _vm._e()], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/card/Form.vue?vue&type=template&id=5bcbf81f&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/card/Form.vue?vue&type=script&lang=js
/* harmony default export */ var Formvue_type_script_lang_js = ({
  name: 'CardForm',
  props: {
    status: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      activeStatus: 'Goal',
      isBodyVisible: true
    };
  },

  methods: {
    statusActive(x) {
      this.activeStatus = x;
    },

    toggleBody() {
      this.isBodyVisible = !this.isBodyVisible;
    }

  }
});
// CONCATENATED MODULE: ./components/card/Form.vue?vue&type=script&lang=js
 /* harmony default export */ var card_Formvue_type_script_lang_js = (Formvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/card/Form.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(218)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  card_Formvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5bcbf81f",
  "85006392"
  
)

/* harmony default export */ var Form = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_style_index_0_id_5bcbf81f_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(186);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_style_index_0_id_5bcbf81f_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_style_index_0_id_5bcbf81f_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_style_index_0_id_5bcbf81f_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_style_index_0_id_5bcbf81f_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(7);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n@font-face{\n  font-family:\"Cabin\";\n\n  src:local(\"Cabin\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\")\n}\n@font-face{\n  font-family:\"Roboto Mono\";\n\n  src:local(\"Roboto Mono\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\")\n}\n.header-1[data-v-5bcbf81f]{\n  font-size:32px\n}\n.header-1[data-v-5bcbf81f],.header-2[data-v-5bcbf81f]{\n  font-family:\"Cabin\";\n  font-weight:600;\n  color:#454545\n}\n.header-2[data-v-5bcbf81f]{\n  font-size:28px\n}\n.header-3[data-v-5bcbf81f]{\n  font-size:24px\n}\n.header-3[data-v-5bcbf81f],.header-4[data-v-5bcbf81f]{\n  font-family:\"Cabin\";\n  font-weight:600;\n  color:#454545\n}\n.header-4[data-v-5bcbf81f]{\n  font-size:20px\n}\n.header-5[data-v-5bcbf81f]{\n  font-size:18px\n}\n.header-5[data-v-5bcbf81f],.header-6[data-v-5bcbf81f]{\n  font-family:\"Cabin\";\n  font-weight:600;\n  color:#454545\n}\n.header-6[data-v-5bcbf81f]{\n  font-size:14px\n}\n.subtitle-1[data-v-5bcbf81f]{\n  color:#757575\n}\n.subtitle-1[data-v-5bcbf81f],.subtitle-2[data-v-5bcbf81f]{\n  font-family:\"Cabin\";\n  font-size:16px;\n  font-weight:400\n}\n.subtitle-2[data-v-5bcbf81f]{\n  color:#454545\n}\n.no-select[data-v-5bcbf81f]{\n  -webkit-touch-callout:none;\n  -webkit-user-select:none;\n  -moz-user-select:none;\n  user-select:none\n}\n.mx-icon-double-left[data-v-5bcbf81f]:after,.mx-icon-double-left[data-v-5bcbf81f]:before,.mx-icon-double-right[data-v-5bcbf81f]:after,.mx-icon-double-right[data-v-5bcbf81f]:before,.mx-icon-left[data-v-5bcbf81f]:before,.mx-icon-right[data-v-5bcbf81f]:before{\n  content:\"\";\n  position:relative;\n  top:-1px;\n  display:inline-block;\n  width:10px;\n  height:10px;\n  vertical-align:middle;\n  border-color:currentcolor;\n  border-style:solid;\n  border-width:2px 0 0 2px;\n  border-radius:1px;\n  box-sizing:border-box;\n  transform-origin:center;\n  transform:rotate(-45deg) scale(.7)\n}\n.mx-icon-double-left[data-v-5bcbf81f]:after{\n  left:-4px\n}\n.mx-icon-double-right[data-v-5bcbf81f]:before{\n  left:4px\n}\n.mx-icon-double-right[data-v-5bcbf81f]:after,.mx-icon-double-right[data-v-5bcbf81f]:before,.mx-icon-right[data-v-5bcbf81f]:before{\n  transform:rotate(135deg) scale(.7)\n}\n.mx-btn[data-v-5bcbf81f]{\n  box-sizing:border-box;\n  line-height:1;\n  font-size:14px;\n  font-weight:500;\n  padding:7px 15px;\n  margin:0;\n  cursor:pointer;\n  background-color:transparent;\n  outline:none;\n  border:1px solid rgba(0,0,0,.1);\n  border-radius:4px;\n  color:#73879c;\n  white-space:nowrap\n}\n.mx-btn[data-v-5bcbf81f]:hover{\n  border-color:#1284e7;\n  color:#1284e7\n}\n.mx-btn.disabled[data-v-5bcbf81f],.mx-btn[data-v-5bcbf81f]:disabled{\n  color:#ccc;\n  cursor:not-allowed\n}\n.mx-btn-text[data-v-5bcbf81f]{\n  border:0;\n  padding:0 4px;\n  text-align:left;\n  line-height:inherit\n}\n.mx-scrollbar[data-v-5bcbf81f]{\n  height:100%\n}\n.mx-scrollbar:hover .mx-scrollbar-track[data-v-5bcbf81f]{\n  opacity:1\n}\n.mx-scrollbar-wrap[data-v-5bcbf81f]{\n  height:100%;\n  overflow-x:hidden;\n  overflow-y:auto\n}\n.mx-scrollbar-track[data-v-5bcbf81f]{\n  position:absolute;\n  top:2px;\n  right:2px;\n  bottom:2px;\n  width:6px;\n  z-index:1;\n  border-radius:4px;\n  opacity:0;\n  transition:opacity .24s ease-out\n}\n.mx-scrollbar-track .mx-scrollbar-thumb[data-v-5bcbf81f]{\n  position:absolute;\n  width:100%;\n  height:0;\n  cursor:pointer;\n  border-radius:inherit;\n  background-color:rgba(144,147,153,.3);\n  transition:background-color .3s\n}\n.mx-zoom-in-down-enter-active[data-v-5bcbf81f],.mx-zoom-in-down-leave-active[data-v-5bcbf81f]{\n  opacity:1;\n  transform:scaleY(1);\n  transition:transform .3s cubic-bezier(.23,1,.32,1),opacity .3s cubic-bezier(.23,1,.32,1);\n  transform-origin:center top\n}\n.mx-zoom-in-down-enter[data-v-5bcbf81f],.mx-zoom-in-down-enter-from[data-v-5bcbf81f],.mx-zoom-in-down-leave-to[data-v-5bcbf81f]{\n  opacity:0;\n  transform:scaleY(0)\n}\n.mx-datepicker[data-v-5bcbf81f]{\n  position:relative;\n  display:inline-block;\n  width:210px\n}\n.mx-datepicker svg[data-v-5bcbf81f]{\n  width:1em;\n  height:1em;\n  vertical-align:-.15em;\n  fill:currentColor;\n  overflow:hidden\n}\n.mx-datepicker-range[data-v-5bcbf81f]{\n  width:320px\n}\n.mx-datepicker-inline[data-v-5bcbf81f]{\n  width:auto\n}\n.mx-input-wrapper[data-v-5bcbf81f]{\n  position:relative\n}\n.mx-input[data-v-5bcbf81f]{\n  display:inline-block;\n  box-sizing:border-box;\n  width:100%;\n  height:34px;\n  padding:6px 30px 6px 10px;\n  font-size:14px;\n  line-height:1.4;\n  color:#555;\n  background-color:#fff;\n  border:1px solid #ccc;\n  border-radius:4px;\n  box-shadow:inset 0 1px 1px rgba(0,0,0,.075)\n}\n.mx-input[data-v-5bcbf81f]:focus,.mx-input[data-v-5bcbf81f]:hover{\n  border-color:#409aff\n}\n.mx-input.disabled[data-v-5bcbf81f],.mx-input[data-v-5bcbf81f]:disabled{\n  color:#ccc;\n  background-color:#f3f3f3;\n  border-color:#ccc;\n  cursor:not-allowed\n}\n.mx-input[data-v-5bcbf81f]:focus{\n  outline:none\n}\n.mx-input[data-v-5bcbf81f]::-ms-clear{\n  display:none\n}\n.mx-icon-calendar[data-v-5bcbf81f],.mx-icon-clear[data-v-5bcbf81f]{\n  position:absolute;\n  top:50%;\n  right:8px;\n  transform:translateY(-50%);\n  font-size:16px;\n  line-height:1;\n  color:rgba(0,0,0,.5);\n  vertical-align:middle\n}\n.mx-icon-clear[data-v-5bcbf81f]{\n  cursor:pointer\n}\n.mx-icon-clear[data-v-5bcbf81f]:hover{\n  color:rgba(0,0,0,.8)\n}\n.mx-datepicker-main[data-v-5bcbf81f]{\n  font:14px/1.5 \"Helvetica Neue\",Helvetica,Arial,\"Microsoft Yahei\",sans-serif;\n  color:#73879c;\n  background-color:#fff;\n  border:1px solid #e8e8e8\n}\n.mx-datepicker-popup[data-v-5bcbf81f]{\n  position:absolute;\n  margin-top:1px;\n  margin-bottom:1px;\n  box-shadow:0 6px 12px rgba(0,0,0,.175);\n  z-index:2001\n}\n.mx-datepicker-sidebar[data-v-5bcbf81f]{\n  float:left;\n  box-sizing:border-box;\n  width:100px;\n  padding:6px;\n  overflow:auto\n}\n.mx-datepicker-sidebar+.mx-datepicker-content[data-v-5bcbf81f]{\n  margin-left:100px;\n  border-left:1px solid #e8e8e8\n}\n.mx-datepicker-body[data-v-5bcbf81f]{\n  position:relative;\n  -webkit-user-select:none;\n     -moz-user-select:none;\n          user-select:none\n}\n.mx-btn-shortcut[data-v-5bcbf81f]{\n  line-height:24px\n}\n.mx-range-wrapper[data-v-5bcbf81f]{\n  display:flex\n}\n@media(max-width:750px){\n.mx-range-wrapper[data-v-5bcbf81f]{\n    flex-direction:column\n}\n}\n.mx-datepicker-header[data-v-5bcbf81f]{\n  padding:6px 8px;\n  border-bottom:1px solid #e8e8e8\n}\n.mx-datepicker-footer[data-v-5bcbf81f]{\n  padding:6px 8px;\n  text-align:right;\n  border-top:1px solid #e8e8e8\n}\n.mx-calendar[data-v-5bcbf81f]{\n  box-sizing:border-box;\n  width:248px;\n  padding:6px 12px\n}\n.mx-calendar+.mx-calendar[data-v-5bcbf81f]{\n  border-left:1px solid #e8e8e8\n}\n.mx-calendar-header[data-v-5bcbf81f],.mx-time-header[data-v-5bcbf81f]{\n  box-sizing:border-box;\n  height:34px;\n  line-height:34px;\n  text-align:center;\n  overflow:hidden\n}\n.mx-btn-icon-double-left[data-v-5bcbf81f],.mx-btn-icon-left[data-v-5bcbf81f]{\n  float:left\n}\n.mx-btn-icon-double-right[data-v-5bcbf81f],.mx-btn-icon-right[data-v-5bcbf81f]{\n  float:right\n}\n.mx-calendar-header-label[data-v-5bcbf81f]{\n  font-size:14px\n}\n.mx-calendar-decade-separator[data-v-5bcbf81f]{\n  margin:0 2px\n}\n.mx-calendar-decade-separator[data-v-5bcbf81f]:after{\n  content:\"~\"\n}\n.mx-calendar-content[data-v-5bcbf81f]{\n  position:relative;\n  height:224px;\n  box-sizing:border-box\n}\n.mx-calendar-content .cell[data-v-5bcbf81f]{\n  cursor:pointer\n}\n.mx-calendar-content .cell[data-v-5bcbf81f]:hover{\n  color:#73879c;\n  background-color:rgb(243.15,248.85,253.8)\n}\n.mx-calendar-content .cell.active[data-v-5bcbf81f]{\n  color:#fff;\n  background-color:#1284e7\n}\n.mx-calendar-content .cell.hover-in-range[data-v-5bcbf81f],.mx-calendar-content .cell.in-range[data-v-5bcbf81f]{\n  color:#73879c;\n  background-color:rgb(219.45,236.55,251.4)\n}\n.mx-calendar-content .cell.disabled[data-v-5bcbf81f]{\n  cursor:not-allowed;\n  color:#ccc;\n  background-color:#f3f3f3\n}\n.mx-calendar-week-mode .mx-date-row[data-v-5bcbf81f]{\n  cursor:pointer\n}\n.mx-calendar-week-mode .mx-date-row[data-v-5bcbf81f]:hover{\n  background-color:rgb(243.15,248.85,253.8)\n}\n.mx-calendar-week-mode .mx-date-row.mx-active-week[data-v-5bcbf81f]{\n  background-color:rgb(219.45,236.55,251.4)\n}\n.mx-calendar-week-mode .mx-date-row .cell.active[data-v-5bcbf81f],.mx-calendar-week-mode .mx-date-row .cell[data-v-5bcbf81f]:hover{\n  color:inherit;\n  background-color:transparent\n}\n.mx-week-number[data-v-5bcbf81f]{\n  opacity:.5\n}\n.mx-table[data-v-5bcbf81f]{\n  table-layout:fixed;\n  border-collapse:separate;\n  border-spacing:0;\n  width:100%;\n  height:100%;\n  box-sizing:border-box;\n  text-align:center\n}\n.mx-table th[data-v-5bcbf81f]{\n  font-weight:500\n}\n.mx-table td[data-v-5bcbf81f],.mx-table th[data-v-5bcbf81f]{\n  padding:0;\n  vertical-align:middle\n}\n.mx-table-date td[data-v-5bcbf81f],.mx-table-date th[data-v-5bcbf81f]{\n  font-size:12px\n}\n.mx-table-date .today[data-v-5bcbf81f]{\n  color:rgb(41.7,144.3,233.4)\n}\n.mx-table-date .cell.not-current-month[data-v-5bcbf81f]{\n  color:#ccc;\n  background:none\n}\n.mx-time[data-v-5bcbf81f]{\n  flex:1;\n  width:224px;\n  background:#fff\n}\n.mx-time+.mx-time[data-v-5bcbf81f]{\n  border-left:1px solid #e8e8e8\n}\n.mx-calendar-time[data-v-5bcbf81f]{\n  position:absolute;\n  top:0;\n  left:0;\n  width:100%;\n  height:100%\n}\n.mx-time-header[data-v-5bcbf81f]{\n  border-bottom:1px solid #e8e8e8\n}\n.mx-time-content[data-v-5bcbf81f]{\n  height:224px;\n  box-sizing:border-box;\n  overflow:hidden\n}\n.mx-time-columns[data-v-5bcbf81f]{\n  display:flex;\n  width:100%;\n  height:100%;\n  overflow:hidden\n}\n.mx-time-column[data-v-5bcbf81f]{\n  flex:1;\n  position:relative;\n  border-left:1px solid #e8e8e8;\n  text-align:center\n}\n.mx-time-column[data-v-5bcbf81f]:first-child{\n  border-left:0\n}\n.mx-time-column .mx-time-list[data-v-5bcbf81f]{\n  margin:0;\n  padding:0;\n  list-style:none\n}\n.mx-time-column .mx-time-list[data-v-5bcbf81f]:after{\n  content:\"\";\n  display:block;\n  height:192px\n}\n.mx-time-column .mx-time-item[data-v-5bcbf81f]{\n  cursor:pointer;\n  font-size:12px;\n  height:32px;\n  line-height:32px\n}\n.mx-time-column .mx-time-item[data-v-5bcbf81f]:hover{\n  color:#73879c;\n  background-color:rgb(243.15,248.85,253.8)\n}\n.mx-time-column .mx-time-item.active[data-v-5bcbf81f]{\n  color:#1284e7;\n  background-color:transparent;\n  font-weight:700\n}\n.mx-time-column .mx-time-item.disabled[data-v-5bcbf81f]{\n  cursor:not-allowed;\n  color:#ccc;\n  background-color:#f3f3f3\n}\n.mx-time-option[data-v-5bcbf81f]{\n  cursor:pointer;\n  padding:8px 10px;\n  font-size:14px;\n  line-height:20px\n}\n.mx-time-option[data-v-5bcbf81f]:hover{\n  color:#73879c;\n  background-color:rgb(243.15,248.85,253.8)\n}\n.mx-time-option.active[data-v-5bcbf81f]{\n  color:#1284e7;\n  background-color:transparent;\n  font-weight:700\n}\n.mx-time-option.disabled[data-v-5bcbf81f]{\n  cursor:not-allowed;\n  color:#ccc;\n  background-color:#f3f3f3\n}\n.el-input .el-input__inner[data-v-5bcbf81f]:focus,.el-range-editor.is-active[data-v-5bcbf81f],.el-range-editor.is-active[data-v-5bcbf81f]:hover,.el-select .el-input.is-focus .el-input__inner[data-v-5bcbf81f],.el-select .el-input__inner[data-v-5bcbf81f]:focus,.el-textarea .el-input__inner[data-v-5bcbf81f]:focus{\n  border:1.3px solid #1b63d4!important;\n  box-shadow:0 2px 10px rgba(187,209,243,.5)\n}\n.mx-input[data-v-5bcbf81f]{\n  height:40px!important\n}\n.mx-datepicker-sidebar[data-v-5bcbf81f]{\n  width:151px!important\n}\n.mx-table-date td[data-v-5bcbf81f],.mx-table-date th[data-v-5bcbf81f]{\n  height:32px;\n  font-size:14px!important\n}\n.mx-btn-shortcut[data-v-5bcbf81f]{\n  display:block;\n  padding:0 6px;\n  line-height:30px!important\n}\n[data-v-5bcbf81f]:root{\n  --vs-line-height:1.6\n}\n.btn-popover[data-v-5bcbf81f]{\n  height:40px;\n  background-color:#fff;\n  width:100%;\n  padding:10px;\n  cursor:pointer\n}\n.btn-popover .title-1[data-v-5bcbf81f]{\n  font-weight:400;\n  font-size:16px;\n  color:#454545;\n  margin-left:10px\n}\n.btn-popover[data-v-5bcbf81f]:hover{\n  background-color:#f3f4f6\n}\n.el-popover[data-v-5bcbf81f]{\n  padding:0!important;\n  border-radius:5px!important\n}\n.el-upload[data-v-5bcbf81f]{\n  width:100%\n}\n.el-upload-dragger[data-v-5bcbf81f]{\n  width:100%!important;\n  background:linear-gradient(0deg,rgba(33,150,243,.03),rgba(33,150,243,.03)),#fff!important;\n  border:1px dashed transparent!important;\n  border-radius:5px!important;\n  height:100%!important\n}\n.kg-popup[data-v-5bcbf81f]{\n  transition:all .5s ease-in-out;\n  position:fixed;\n  top:0;\n  left:50%;\n  transform:translateX(-50%)\n}\n.noselect[data-v-5bcbf81f]{\n  -webkit-touch-callout:none;\n  -webkit-user-select:none;\n  -moz-user-select:none;\n  user-select:none\n}\n.ProseMirror[data-v-5bcbf81f]{\n  border:0;\n  outline:none\n}\n.ProseMirror>*+*[data-v-5bcbf81f]{\n  margin-top:.75em\n}\n.ProseMirror ol[data-v-5bcbf81f],.ProseMirror ul[data-v-5bcbf81f]{\n  padding:0 1rem\n}\n.ProseMirror h1[data-v-5bcbf81f],.ProseMirror h2[data-v-5bcbf81f],.ProseMirror h3[data-v-5bcbf81f],.ProseMirror h4[data-v-5bcbf81f],.ProseMirror h5[data-v-5bcbf81f],.ProseMirror h6[data-v-5bcbf81f]{\n  line-height:1.1\n}\n.ProseMirror code[data-v-5bcbf81f]{\n  background-color:rgba(97,97,97,.1);\n  color:#616161\n}\n.ProseMirror pre[data-v-5bcbf81f]{\n  background:#0d0d0d;\n  color:#fff;\n  font-family:\"JetBrainsMono\",monospace;\n  padding:.75rem 1rem;\n  border-radius:.5rem\n}\n.ProseMirror pre code[data-v-5bcbf81f]{\n  color:inherit;\n  padding:0;\n  background:none;\n  font-size:.8rem\n}\n.ProseMirror img[data-v-5bcbf81f]{\n  max-width:100%;\n  height:auto\n}\n.ProseMirror blockquote[data-v-5bcbf81f]{\n  padding-left:1rem;\n  border-left:2px solid rgba(13,13,13,.1)\n}\n.ProseMirror hr[data-v-5bcbf81f]{\n  border:none;\n  border-top:2px solid rgba(13,13,13,.1);\n  margin:2rem 0\n}\n.ProseMirror[data-v-5bcbf81f]:focus-visible{\n  outline:none\n}\n.el-color-picker__trigger[data-v-5bcbf81f]{\n  border:0!important;\n  padding:0!important;\n  outline:none!important\n}\n.el-color-picker__icon[data-v-5bcbf81f]{\n  visibility:hidden!important\n}\n.el-color-picker--mini .el-color-picker__trigger[data-v-5bcbf81f],.el-color-picker__color[data-v-5bcbf81f]{\n  height:22px!important;\n  width:22px!important\n}\n.el-color-picker__color[data-v-5bcbf81f]{\n  padding:0!important;\n  border:0!important\n}\n.el-color-picker__empty[data-v-5bcbf81f]{\n  padding-top:1.4px!important\n}\n.el-color-picker--mini[data-v-5bcbf81f]{\n  height:22px!important\n}\n.el-color-picker__color-inner[data-v-5bcbf81f]{\n  border:1px solid #e2e2e2!important\n}\n.el-table thead[data-v-5bcbf81f]{\n  color:#5c6b7a!important;\n  font-family:\"Cabin\"!important\n}\n.el-table thead[data-v-5bcbf81f],.th[data-v-5bcbf81f]{\n  font-weight:600!important\n}\n.el-button--mini[data-v-5bcbf81f],.el-button--text[data-v-5bcbf81f],.el-date-range-picker__header div[data-v-5bcbf81f],.el-date-table td span[data-v-5bcbf81f],.el-input__inner[data-v-5bcbf81f],.el-picker-panel__shortcut[data-v-5bcbf81f],.el-select-dropdown__item[data-v-5bcbf81f],.el-select-dropdown__item.hover[data-v-5bcbf81f],.el-select-dropdown__item[data-v-5bcbf81f]:hover,.el-time-spinner__item[data-v-5bcbf81f]{\n  font-family:\"Cabin\"!important\n}\n.el-progress-bar__inner[data-v-5bcbf81f],.el-progress-bar__outer[data-v-5bcbf81f]{\n  border-bottom-left-radius:100px!important;\n  border-top-left-radius:100px!important\n}\n.el-dropdown .el-dropdown__caret-button[data-v-5bcbf81f]{\n  bottom:2px!important\n}\n.el-dropdown-menu[data-v-5bcbf81f],.el-dropdown-menu__item[data-v-5bcbf81f]{\n  padding:0!important\n}\nbutton[data-v-5bcbf81f]:active,button[data-v-5bcbf81f]:focus{\n  outline:0!important\n}\n.el-input-group__append[data-v-5bcbf81f]{\n  padding:0!important\n}\n.el-input-group__prepend[data-v-5bcbf81f]{\n  padding-left:5px!important;\n  padding-right:5px!important\n}\n.el-menu-item[data-v-5bcbf81f],.el-submenu__title[data-v-5bcbf81f]{\n  height:40px!important;\n  line-height:40px!important;\n  font-family:\"Cabin\"!important;\n  font-size:16px!important;\n  font-style:normal!important;\n  font-weight:400!important;\n  color:#5c6b7a!important;\n  margin-bottom:10px!important;\n  border-left:4px solid transparent!important\n}\n.el-menu-item.is-active[data-v-5bcbf81f]{\n  color:#1b63d4!important;\n  font-weight:600!important;\n  border-left:4px solid #1b63d4!important;\n  border-top-left-radius:2px!important;\n  border-bottom-left-radius:2px!important\n}\n.el-menu--collapse[data-v-5bcbf81f]{\n  width:80px!important\n}\n.el-menu[data-v-5bcbf81f]{\n  border-right:0!important\n}\n.el-dialog__body[data-v-5bcbf81f],.el-dialog__header[data-v-5bcbf81f]{\n  padding:0!important\n}\n.el-dialog[data-v-5bcbf81f]{\n  border-radius:10px!important\n}\n.card-dialog[data-v-5bcbf81f]{\n  padding:20px!important\n}\n.vue-swatches__trigger[data-v-5bcbf81f]{\n  width:22px!important;\n  height:22px!important;\n  border-radius:2px!important\n}\n.vue-swatches[data-v-5bcbf81f]{\n  height:22px!important\n}\n.CodeMirror[data-v-5bcbf81f]{\n  height:calc(100vh - 150px)!important\n}\n.vue-swatches__trigger[data-v-5bcbf81f]{\n  border:1px solid #e2e2e2!important\n}\n.component-card[data-v-5bcbf81f]{\n  background:#fff;\n  border:1px solid #e2e2e2;\n  margin-bottom:10px\n}\n.component-card .header-component[data-v-5bcbf81f]{\n  border-bottom:1px solid #e2e2e2;\n  height:48px;\n  padding-left:15px;\n  padding-right:15px;\n  font-weight:500;\n  font-size:16px;\n  color:#333\n}\n.component-card .header-component .icon-header[data-v-5bcbf81f]{\n  margin-right:10px\n}\n.component-card .header-component .btn-preview[data-v-5bcbf81f]{\n  cursor:pointer\n}\n.component-card .body-component[data-v-5bcbf81f]{\n  padding:10px 15px\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon_kanan.363483e.svg";

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_save_vue_vue_type_style_index_0_id_7c13d951_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(188);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_save_vue_vue_type_style_index_0_id_7c13d951_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_save_vue_vue_type_style_index_0_id_7c13d951_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_save_vue_vue_type_style_index_0_id_7c13d951_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_save_vue_vue_type_style_index_0_id_7c13d951_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(7);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n@font-face{\n  font-family:\"Cabin\";\n\n  src:local(\"Cabin\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\")\n}\n@font-face{\n  font-family:\"Roboto Mono\";\n\n  src:local(\"Roboto Mono\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\")\n}\n.header-1[data-v-7c13d951]{\n  font-size:32px\n}\n.header-1[data-v-7c13d951],.header-2[data-v-7c13d951]{\n  font-family:\"Cabin\";\n  font-weight:600;\n  color:#454545\n}\n.header-2[data-v-7c13d951]{\n  font-size:28px\n}\n.header-3[data-v-7c13d951]{\n  font-size:24px\n}\n.header-3[data-v-7c13d951],.header-4[data-v-7c13d951]{\n  font-family:\"Cabin\";\n  font-weight:600;\n  color:#454545\n}\n.header-4[data-v-7c13d951]{\n  font-size:20px\n}\n.header-5[data-v-7c13d951]{\n  font-size:18px\n}\n.header-5[data-v-7c13d951],.header-6[data-v-7c13d951]{\n  font-family:\"Cabin\";\n  font-weight:600;\n  color:#454545\n}\n.header-6[data-v-7c13d951]{\n  font-size:14px\n}\n.subtitle-1[data-v-7c13d951]{\n  color:#757575\n}\n.subtitle-1[data-v-7c13d951],.subtitle-2[data-v-7c13d951]{\n  font-family:\"Cabin\";\n  font-size:16px;\n  font-weight:400\n}\n.subtitle-2[data-v-7c13d951]{\n  color:#454545\n}\n.no-select[data-v-7c13d951]{\n  -webkit-touch-callout:none;\n  -webkit-user-select:none;\n  -moz-user-select:none;\n  user-select:none\n}\n.mx-icon-double-left[data-v-7c13d951]:after,.mx-icon-double-left[data-v-7c13d951]:before,.mx-icon-double-right[data-v-7c13d951]:after,.mx-icon-double-right[data-v-7c13d951]:before,.mx-icon-left[data-v-7c13d951]:before,.mx-icon-right[data-v-7c13d951]:before{\n  content:\"\";\n  position:relative;\n  top:-1px;\n  display:inline-block;\n  width:10px;\n  height:10px;\n  vertical-align:middle;\n  border-color:currentcolor;\n  border-style:solid;\n  border-width:2px 0 0 2px;\n  border-radius:1px;\n  box-sizing:border-box;\n  transform-origin:center;\n  transform:rotate(-45deg) scale(.7)\n}\n.mx-icon-double-left[data-v-7c13d951]:after{\n  left:-4px\n}\n.mx-icon-double-right[data-v-7c13d951]:before{\n  left:4px\n}\n.mx-icon-double-right[data-v-7c13d951]:after,.mx-icon-double-right[data-v-7c13d951]:before,.mx-icon-right[data-v-7c13d951]:before{\n  transform:rotate(135deg) scale(.7)\n}\n.mx-btn[data-v-7c13d951]{\n  box-sizing:border-box;\n  line-height:1;\n  font-size:14px;\n  font-weight:500;\n  padding:7px 15px;\n  margin:0;\n  cursor:pointer;\n  background-color:transparent;\n  outline:none;\n  border:1px solid rgba(0,0,0,.1);\n  border-radius:4px;\n  color:#73879c;\n  white-space:nowrap\n}\n.mx-btn[data-v-7c13d951]:hover{\n  border-color:#1284e7;\n  color:#1284e7\n}\n.mx-btn.disabled[data-v-7c13d951],.mx-btn[data-v-7c13d951]:disabled{\n  color:#ccc;\n  cursor:not-allowed\n}\n.mx-btn-text[data-v-7c13d951]{\n  border:0;\n  padding:0 4px;\n  text-align:left;\n  line-height:inherit\n}\n.mx-scrollbar[data-v-7c13d951]{\n  height:100%\n}\n.mx-scrollbar:hover .mx-scrollbar-track[data-v-7c13d951]{\n  opacity:1\n}\n.mx-scrollbar-wrap[data-v-7c13d951]{\n  height:100%;\n  overflow-x:hidden;\n  overflow-y:auto\n}\n.mx-scrollbar-track[data-v-7c13d951]{\n  position:absolute;\n  top:2px;\n  right:2px;\n  bottom:2px;\n  width:6px;\n  z-index:1;\n  border-radius:4px;\n  opacity:0;\n  transition:opacity .24s ease-out\n}\n.mx-scrollbar-track .mx-scrollbar-thumb[data-v-7c13d951]{\n  position:absolute;\n  width:100%;\n  height:0;\n  cursor:pointer;\n  border-radius:inherit;\n  background-color:rgba(144,147,153,.3);\n  transition:background-color .3s\n}\n.mx-zoom-in-down-enter-active[data-v-7c13d951],.mx-zoom-in-down-leave-active[data-v-7c13d951]{\n  opacity:1;\n  transform:scaleY(1);\n  transition:transform .3s cubic-bezier(.23,1,.32,1),opacity .3s cubic-bezier(.23,1,.32,1);\n  transform-origin:center top\n}\n.mx-zoom-in-down-enter[data-v-7c13d951],.mx-zoom-in-down-enter-from[data-v-7c13d951],.mx-zoom-in-down-leave-to[data-v-7c13d951]{\n  opacity:0;\n  transform:scaleY(0)\n}\n.mx-datepicker[data-v-7c13d951]{\n  position:relative;\n  display:inline-block;\n  width:210px\n}\n.mx-datepicker svg[data-v-7c13d951]{\n  width:1em;\n  height:1em;\n  vertical-align:-.15em;\n  fill:currentColor;\n  overflow:hidden\n}\n.mx-datepicker-range[data-v-7c13d951]{\n  width:320px\n}\n.mx-datepicker-inline[data-v-7c13d951]{\n  width:auto\n}\n.mx-input-wrapper[data-v-7c13d951]{\n  position:relative\n}\n.mx-input[data-v-7c13d951]{\n  display:inline-block;\n  box-sizing:border-box;\n  width:100%;\n  height:34px;\n  padding:6px 30px 6px 10px;\n  font-size:14px;\n  line-height:1.4;\n  color:#555;\n  background-color:#fff;\n  border:1px solid #ccc;\n  border-radius:4px;\n  box-shadow:inset 0 1px 1px rgba(0,0,0,.075)\n}\n.mx-input[data-v-7c13d951]:focus,.mx-input[data-v-7c13d951]:hover{\n  border-color:#409aff\n}\n.mx-input.disabled[data-v-7c13d951],.mx-input[data-v-7c13d951]:disabled{\n  color:#ccc;\n  background-color:#f3f3f3;\n  border-color:#ccc;\n  cursor:not-allowed\n}\n.mx-input[data-v-7c13d951]:focus{\n  outline:none\n}\n.mx-input[data-v-7c13d951]::-ms-clear{\n  display:none\n}\n.mx-icon-calendar[data-v-7c13d951],.mx-icon-clear[data-v-7c13d951]{\n  position:absolute;\n  top:50%;\n  right:8px;\n  transform:translateY(-50%);\n  font-size:16px;\n  line-height:1;\n  color:rgba(0,0,0,.5);\n  vertical-align:middle\n}\n.mx-icon-clear[data-v-7c13d951]{\n  cursor:pointer\n}\n.mx-icon-clear[data-v-7c13d951]:hover{\n  color:rgba(0,0,0,.8)\n}\n.mx-datepicker-main[data-v-7c13d951]{\n  font:14px/1.5 \"Helvetica Neue\",Helvetica,Arial,\"Microsoft Yahei\",sans-serif;\n  color:#73879c;\n  background-color:#fff;\n  border:1px solid #e8e8e8\n}\n.mx-datepicker-popup[data-v-7c13d951]{\n  position:absolute;\n  margin-top:1px;\n  margin-bottom:1px;\n  box-shadow:0 6px 12px rgba(0,0,0,.175);\n  z-index:2001\n}\n.mx-datepicker-sidebar[data-v-7c13d951]{\n  float:left;\n  box-sizing:border-box;\n  width:100px;\n  padding:6px;\n  overflow:auto\n}\n.mx-datepicker-sidebar+.mx-datepicker-content[data-v-7c13d951]{\n  margin-left:100px;\n  border-left:1px solid #e8e8e8\n}\n.mx-datepicker-body[data-v-7c13d951]{\n  position:relative;\n  -webkit-user-select:none;\n     -moz-user-select:none;\n          user-select:none\n}\n.mx-btn-shortcut[data-v-7c13d951]{\n  line-height:24px\n}\n.mx-range-wrapper[data-v-7c13d951]{\n  display:flex\n}\n@media(max-width:750px){\n.mx-range-wrapper[data-v-7c13d951]{\n    flex-direction:column\n}\n}\n.mx-datepicker-header[data-v-7c13d951]{\n  padding:6px 8px;\n  border-bottom:1px solid #e8e8e8\n}\n.mx-datepicker-footer[data-v-7c13d951]{\n  padding:6px 8px;\n  text-align:right;\n  border-top:1px solid #e8e8e8\n}\n.mx-calendar[data-v-7c13d951]{\n  box-sizing:border-box;\n  width:248px;\n  padding:6px 12px\n}\n.mx-calendar+.mx-calendar[data-v-7c13d951]{\n  border-left:1px solid #e8e8e8\n}\n.mx-calendar-header[data-v-7c13d951],.mx-time-header[data-v-7c13d951]{\n  box-sizing:border-box;\n  height:34px;\n  line-height:34px;\n  text-align:center;\n  overflow:hidden\n}\n.mx-btn-icon-double-left[data-v-7c13d951],.mx-btn-icon-left[data-v-7c13d951]{\n  float:left\n}\n.mx-btn-icon-double-right[data-v-7c13d951],.mx-btn-icon-right[data-v-7c13d951]{\n  float:right\n}\n.mx-calendar-header-label[data-v-7c13d951]{\n  font-size:14px\n}\n.mx-calendar-decade-separator[data-v-7c13d951]{\n  margin:0 2px\n}\n.mx-calendar-decade-separator[data-v-7c13d951]:after{\n  content:\"~\"\n}\n.mx-calendar-content[data-v-7c13d951]{\n  position:relative;\n  height:224px;\n  box-sizing:border-box\n}\n.mx-calendar-content .cell[data-v-7c13d951]{\n  cursor:pointer\n}\n.mx-calendar-content .cell[data-v-7c13d951]:hover{\n  color:#73879c;\n  background-color:rgb(243.15,248.85,253.8)\n}\n.mx-calendar-content .cell.active[data-v-7c13d951]{\n  color:#fff;\n  background-color:#1284e7\n}\n.mx-calendar-content .cell.hover-in-range[data-v-7c13d951],.mx-calendar-content .cell.in-range[data-v-7c13d951]{\n  color:#73879c;\n  background-color:rgb(219.45,236.55,251.4)\n}\n.mx-calendar-content .cell.disabled[data-v-7c13d951]{\n  cursor:not-allowed;\n  color:#ccc;\n  background-color:#f3f3f3\n}\n.mx-calendar-week-mode .mx-date-row[data-v-7c13d951]{\n  cursor:pointer\n}\n.mx-calendar-week-mode .mx-date-row[data-v-7c13d951]:hover{\n  background-color:rgb(243.15,248.85,253.8)\n}\n.mx-calendar-week-mode .mx-date-row.mx-active-week[data-v-7c13d951]{\n  background-color:rgb(219.45,236.55,251.4)\n}\n.mx-calendar-week-mode .mx-date-row .cell.active[data-v-7c13d951],.mx-calendar-week-mode .mx-date-row .cell[data-v-7c13d951]:hover{\n  color:inherit;\n  background-color:transparent\n}\n.mx-week-number[data-v-7c13d951]{\n  opacity:.5\n}\n.mx-table[data-v-7c13d951]{\n  table-layout:fixed;\n  border-collapse:separate;\n  border-spacing:0;\n  width:100%;\n  height:100%;\n  box-sizing:border-box;\n  text-align:center\n}\n.mx-table th[data-v-7c13d951]{\n  font-weight:500\n}\n.mx-table td[data-v-7c13d951],.mx-table th[data-v-7c13d951]{\n  padding:0;\n  vertical-align:middle\n}\n.mx-table-date td[data-v-7c13d951],.mx-table-date th[data-v-7c13d951]{\n  font-size:12px\n}\n.mx-table-date .today[data-v-7c13d951]{\n  color:rgb(41.7,144.3,233.4)\n}\n.mx-table-date .cell.not-current-month[data-v-7c13d951]{\n  color:#ccc;\n  background:none\n}\n.mx-time[data-v-7c13d951]{\n  flex:1;\n  width:224px;\n  background:#fff\n}\n.mx-time+.mx-time[data-v-7c13d951]{\n  border-left:1px solid #e8e8e8\n}\n.mx-calendar-time[data-v-7c13d951]{\n  position:absolute;\n  top:0;\n  left:0;\n  width:100%;\n  height:100%\n}\n.mx-time-header[data-v-7c13d951]{\n  border-bottom:1px solid #e8e8e8\n}\n.mx-time-content[data-v-7c13d951]{\n  height:224px;\n  box-sizing:border-box;\n  overflow:hidden\n}\n.mx-time-columns[data-v-7c13d951]{\n  display:flex;\n  width:100%;\n  height:100%;\n  overflow:hidden\n}\n.mx-time-column[data-v-7c13d951]{\n  flex:1;\n  position:relative;\n  border-left:1px solid #e8e8e8;\n  text-align:center\n}\n.mx-time-column[data-v-7c13d951]:first-child{\n  border-left:0\n}\n.mx-time-column .mx-time-list[data-v-7c13d951]{\n  margin:0;\n  padding:0;\n  list-style:none\n}\n.mx-time-column .mx-time-list[data-v-7c13d951]:after{\n  content:\"\";\n  display:block;\n  height:192px\n}\n.mx-time-column .mx-time-item[data-v-7c13d951]{\n  cursor:pointer;\n  font-size:12px;\n  height:32px;\n  line-height:32px\n}\n.mx-time-column .mx-time-item[data-v-7c13d951]:hover{\n  color:#73879c;\n  background-color:rgb(243.15,248.85,253.8)\n}\n.mx-time-column .mx-time-item.active[data-v-7c13d951]{\n  color:#1284e7;\n  background-color:transparent;\n  font-weight:700\n}\n.mx-time-column .mx-time-item.disabled[data-v-7c13d951]{\n  cursor:not-allowed;\n  color:#ccc;\n  background-color:#f3f3f3\n}\n.mx-time-option[data-v-7c13d951]{\n  cursor:pointer;\n  padding:8px 10px;\n  font-size:14px;\n  line-height:20px\n}\n.mx-time-option[data-v-7c13d951]:hover{\n  color:#73879c;\n  background-color:rgb(243.15,248.85,253.8)\n}\n.mx-time-option.active[data-v-7c13d951]{\n  color:#1284e7;\n  background-color:transparent;\n  font-weight:700\n}\n.mx-time-option.disabled[data-v-7c13d951]{\n  cursor:not-allowed;\n  color:#ccc;\n  background-color:#f3f3f3\n}\n.el-input .el-input__inner[data-v-7c13d951]:focus,.el-range-editor.is-active[data-v-7c13d951],.el-range-editor.is-active[data-v-7c13d951]:hover,.el-select .el-input.is-focus .el-input__inner[data-v-7c13d951],.el-select .el-input__inner[data-v-7c13d951]:focus,.el-textarea .el-input__inner[data-v-7c13d951]:focus{\n  border:1.3px solid #1b63d4!important;\n  box-shadow:0 2px 10px rgba(187,209,243,.5)\n}\n.mx-input[data-v-7c13d951]{\n  height:40px!important\n}\n.mx-datepicker-sidebar[data-v-7c13d951]{\n  width:151px!important\n}\n.mx-table-date td[data-v-7c13d951],.mx-table-date th[data-v-7c13d951]{\n  height:32px;\n  font-size:14px!important\n}\n.mx-btn-shortcut[data-v-7c13d951]{\n  display:block;\n  padding:0 6px;\n  line-height:30px!important\n}\n[data-v-7c13d951]:root{\n  --vs-line-height:1.6\n}\n.btn-popover[data-v-7c13d951]{\n  height:40px;\n  background-color:#fff;\n  width:100%;\n  padding:10px;\n  cursor:pointer\n}\n.btn-popover .title-1[data-v-7c13d951]{\n  font-weight:400;\n  font-size:16px;\n  color:#454545;\n  margin-left:10px\n}\n.btn-popover[data-v-7c13d951]:hover{\n  background-color:#f3f4f6\n}\n.el-popover[data-v-7c13d951]{\n  padding:0!important;\n  border-radius:5px!important\n}\n.el-upload[data-v-7c13d951]{\n  width:100%\n}\n.el-upload-dragger[data-v-7c13d951]{\n  width:100%!important;\n  background:linear-gradient(0deg,rgba(33,150,243,.03),rgba(33,150,243,.03)),#fff!important;\n  border:1px dashed transparent!important;\n  border-radius:5px!important;\n  height:100%!important\n}\n.kg-popup[data-v-7c13d951]{\n  transition:all .5s ease-in-out;\n  position:fixed;\n  top:0;\n  left:50%;\n  transform:translateX(-50%)\n}\n.noselect[data-v-7c13d951]{\n  -webkit-touch-callout:none;\n  -webkit-user-select:none;\n  -moz-user-select:none;\n  user-select:none\n}\n.ProseMirror[data-v-7c13d951]{\n  border:0;\n  outline:none\n}\n.ProseMirror>*+*[data-v-7c13d951]{\n  margin-top:.75em\n}\n.ProseMirror ol[data-v-7c13d951],.ProseMirror ul[data-v-7c13d951]{\n  padding:0 1rem\n}\n.ProseMirror h1[data-v-7c13d951],.ProseMirror h2[data-v-7c13d951],.ProseMirror h3[data-v-7c13d951],.ProseMirror h4[data-v-7c13d951],.ProseMirror h5[data-v-7c13d951],.ProseMirror h6[data-v-7c13d951]{\n  line-height:1.1\n}\n.ProseMirror code[data-v-7c13d951]{\n  background-color:rgba(97,97,97,.1);\n  color:#616161\n}\n.ProseMirror pre[data-v-7c13d951]{\n  background:#0d0d0d;\n  color:#fff;\n  font-family:\"JetBrainsMono\",monospace;\n  padding:.75rem 1rem;\n  border-radius:.5rem\n}\n.ProseMirror pre code[data-v-7c13d951]{\n  color:inherit;\n  padding:0;\n  background:none;\n  font-size:.8rem\n}\n.ProseMirror img[data-v-7c13d951]{\n  max-width:100%;\n  height:auto\n}\n.ProseMirror blockquote[data-v-7c13d951]{\n  padding-left:1rem;\n  border-left:2px solid rgba(13,13,13,.1)\n}\n.ProseMirror hr[data-v-7c13d951]{\n  border:none;\n  border-top:2px solid rgba(13,13,13,.1);\n  margin:2rem 0\n}\n.ProseMirror[data-v-7c13d951]:focus-visible{\n  outline:none\n}\n.el-color-picker__trigger[data-v-7c13d951]{\n  border:0!important;\n  padding:0!important;\n  outline:none!important\n}\n.el-color-picker__icon[data-v-7c13d951]{\n  visibility:hidden!important\n}\n.el-color-picker--mini .el-color-picker__trigger[data-v-7c13d951],.el-color-picker__color[data-v-7c13d951]{\n  height:22px!important;\n  width:22px!important\n}\n.el-color-picker__color[data-v-7c13d951]{\n  padding:0!important;\n  border:0!important\n}\n.el-color-picker__empty[data-v-7c13d951]{\n  padding-top:1.4px!important\n}\n.el-color-picker--mini[data-v-7c13d951]{\n  height:22px!important\n}\n.el-color-picker__color-inner[data-v-7c13d951]{\n  border:1px solid #e2e2e2!important\n}\n.el-table thead[data-v-7c13d951]{\n  color:#5c6b7a!important;\n  font-family:\"Cabin\"!important\n}\n.el-table thead[data-v-7c13d951],.th[data-v-7c13d951]{\n  font-weight:600!important\n}\n.el-button--mini[data-v-7c13d951],.el-button--text[data-v-7c13d951],.el-date-range-picker__header div[data-v-7c13d951],.el-date-table td span[data-v-7c13d951],.el-input__inner[data-v-7c13d951],.el-picker-panel__shortcut[data-v-7c13d951],.el-select-dropdown__item[data-v-7c13d951],.el-select-dropdown__item.hover[data-v-7c13d951],.el-select-dropdown__item[data-v-7c13d951]:hover,.el-time-spinner__item[data-v-7c13d951]{\n  font-family:\"Cabin\"!important\n}\n.el-progress-bar__inner[data-v-7c13d951],.el-progress-bar__outer[data-v-7c13d951]{\n  border-bottom-left-radius:100px!important;\n  border-top-left-radius:100px!important\n}\n.el-dropdown .el-dropdown__caret-button[data-v-7c13d951]{\n  bottom:2px!important\n}\n.el-dropdown-menu[data-v-7c13d951],.el-dropdown-menu__item[data-v-7c13d951]{\n  padding:0!important\n}\nbutton[data-v-7c13d951]:active,button[data-v-7c13d951]:focus{\n  outline:0!important\n}\n.el-input-group__append[data-v-7c13d951]{\n  padding:0!important\n}\n.el-input-group__prepend[data-v-7c13d951]{\n  padding-left:5px!important;\n  padding-right:5px!important\n}\n.el-menu-item[data-v-7c13d951],.el-submenu__title[data-v-7c13d951]{\n  height:40px!important;\n  line-height:40px!important;\n  font-family:\"Cabin\"!important;\n  font-size:16px!important;\n  font-style:normal!important;\n  font-weight:400!important;\n  color:#5c6b7a!important;\n  margin-bottom:10px!important;\n  border-left:4px solid transparent!important\n}\n.el-menu-item.is-active[data-v-7c13d951]{\n  color:#1b63d4!important;\n  font-weight:600!important;\n  border-left:4px solid #1b63d4!important;\n  border-top-left-radius:2px!important;\n  border-bottom-left-radius:2px!important\n}\n.el-menu--collapse[data-v-7c13d951]{\n  width:80px!important\n}\n.el-menu[data-v-7c13d951]{\n  border-right:0!important\n}\n.el-dialog__body[data-v-7c13d951],.el-dialog__header[data-v-7c13d951]{\n  padding:0!important\n}\n.el-dialog[data-v-7c13d951]{\n  border-radius:10px!important\n}\n.card-dialog[data-v-7c13d951]{\n  padding:20px!important\n}\n.vue-swatches__trigger[data-v-7c13d951]{\n  width:22px!important;\n  height:22px!important;\n  border-radius:2px!important\n}\n.vue-swatches[data-v-7c13d951]{\n  height:22px!important\n}\n.CodeMirror[data-v-7c13d951]{\n  height:calc(100vh - 150px)!important\n}\n.vue-swatches__trigger[data-v-7c13d951]{\n  border:1px solid #e2e2e2!important\n}\n.dropdown-container .dropdown-btn[data-v-7c13d951]{\n  width:161px;\n  height:40px;\n  background:#1b63d4;\n  border-radius:5px\n}\n.dropdown-container .dropdown-btn .card-dropdown[data-v-7c13d951]{\n  width:120px;\n  height:100%\n}\n.dropdown-container .dropdown-btn .card-dropdown .icon-next[data-v-7c13d951],.dropdown-container .dropdown-btn .card-dropdown .icon-prev[data-v-7c13d951]{\n  margin-right:10px\n}\n.dropdown-container .dropdown-btn .card-dropdown .title-dropdown[data-v-7c13d951]{\n  font-weight:700;\n  font-size:14px;\n  line-height:18px;\n  color:#fff\n}\n.dropdown-container .dropdown-btn .btn-show[data-v-7c13d951]{\n  width:40px;\n  height:100%;\n  border-left:1px solid #e2e2e2\n}\n.dropdown-container .dropdown-btn[data-v-7c13d951]:hover{\n  opacity:.8\n}\n.dropdown-container .dropdown-list[data-v-7c13d951]{\n  position:absolute;\n  top:-24px;\n  z-index:9999;\n  width:161px\n}\n.dropdown-container .dropdown-list .item-menu[data-v-7c13d951]{\n  cursor:pointer;\n  padding-left:20px;\n  border-left:1px solid #e2e2e2;\n  border-right:1px solid #e2e2e2;\n  width:161px;\n  height:40px;\n  background:#fff\n}\n.dropdown-container .dropdown-list .item-menu .icon-item[data-v-7c13d951]{\n  margin-right:12px\n}\n.dropdown-container .dropdown-list .item-menu[data-v-7c13d951]:hover{\n  background-color:#f3f4f6\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImagesEditor_vue_vue_type_style_index_0_id_0a14ad68_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(189);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImagesEditor_vue_vue_type_style_index_0_id_0a14ad68_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImagesEditor_vue_vue_type_style_index_0_id_0a14ad68_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImagesEditor_vue_vue_type_style_index_0_id_0a14ad68_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImagesEditor_vue_vue_type_style_index_0_id_0a14ad68_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(7);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n@font-face{\n  font-family:\"Cabin\";\n\n  src:local(\"Cabin\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\")\n}\n@font-face{\n  font-family:\"Roboto Mono\";\n\n  src:local(\"Roboto Mono\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\")\n}\n.header-1[data-v-0a14ad68]{\n  font-size:32px\n}\n.header-1[data-v-0a14ad68],.header-2[data-v-0a14ad68]{\n  font-family:\"Cabin\";\n  font-weight:600;\n  color:#454545\n}\n.header-2[data-v-0a14ad68]{\n  font-size:28px\n}\n.header-3[data-v-0a14ad68]{\n  font-size:24px\n}\n.header-3[data-v-0a14ad68],.header-4[data-v-0a14ad68]{\n  font-family:\"Cabin\";\n  font-weight:600;\n  color:#454545\n}\n.header-4[data-v-0a14ad68]{\n  font-size:20px\n}\n.header-5[data-v-0a14ad68]{\n  font-size:18px\n}\n.header-5[data-v-0a14ad68],.header-6[data-v-0a14ad68]{\n  font-family:\"Cabin\";\n  font-weight:600;\n  color:#454545\n}\n.header-6[data-v-0a14ad68]{\n  font-size:14px\n}\n.subtitle-1[data-v-0a14ad68]{\n  color:#757575\n}\n.subtitle-1[data-v-0a14ad68],.subtitle-2[data-v-0a14ad68]{\n  font-family:\"Cabin\";\n  font-size:16px;\n  font-weight:400\n}\n.subtitle-2[data-v-0a14ad68]{\n  color:#454545\n}\n.no-select[data-v-0a14ad68]{\n  -webkit-touch-callout:none;\n  -webkit-user-select:none;\n  -moz-user-select:none;\n  user-select:none\n}\n.mx-icon-double-left[data-v-0a14ad68]:after,.mx-icon-double-left[data-v-0a14ad68]:before,.mx-icon-double-right[data-v-0a14ad68]:after,.mx-icon-double-right[data-v-0a14ad68]:before,.mx-icon-left[data-v-0a14ad68]:before,.mx-icon-right[data-v-0a14ad68]:before{\n  content:\"\";\n  position:relative;\n  top:-1px;\n  display:inline-block;\n  width:10px;\n  height:10px;\n  vertical-align:middle;\n  border-color:currentcolor;\n  border-style:solid;\n  border-width:2px 0 0 2px;\n  border-radius:1px;\n  box-sizing:border-box;\n  transform-origin:center;\n  transform:rotate(-45deg) scale(.7)\n}\n.mx-icon-double-left[data-v-0a14ad68]:after{\n  left:-4px\n}\n.mx-icon-double-right[data-v-0a14ad68]:before{\n  left:4px\n}\n.mx-icon-double-right[data-v-0a14ad68]:after,.mx-icon-double-right[data-v-0a14ad68]:before,.mx-icon-right[data-v-0a14ad68]:before{\n  transform:rotate(135deg) scale(.7)\n}\n.mx-btn[data-v-0a14ad68]{\n  box-sizing:border-box;\n  line-height:1;\n  font-size:14px;\n  font-weight:500;\n  padding:7px 15px;\n  margin:0;\n  cursor:pointer;\n  background-color:transparent;\n  outline:none;\n  border:1px solid rgba(0,0,0,.1);\n  border-radius:4px;\n  color:#73879c;\n  white-space:nowrap\n}\n.mx-btn[data-v-0a14ad68]:hover{\n  border-color:#1284e7;\n  color:#1284e7\n}\n.mx-btn.disabled[data-v-0a14ad68],.mx-btn[data-v-0a14ad68]:disabled{\n  color:#ccc;\n  cursor:not-allowed\n}\n.mx-btn-text[data-v-0a14ad68]{\n  border:0;\n  padding:0 4px;\n  text-align:left;\n  line-height:inherit\n}\n.mx-scrollbar[data-v-0a14ad68]{\n  height:100%\n}\n.mx-scrollbar:hover .mx-scrollbar-track[data-v-0a14ad68]{\n  opacity:1\n}\n.mx-scrollbar-wrap[data-v-0a14ad68]{\n  height:100%;\n  overflow-x:hidden;\n  overflow-y:auto\n}\n.mx-scrollbar-track[data-v-0a14ad68]{\n  position:absolute;\n  top:2px;\n  right:2px;\n  bottom:2px;\n  width:6px;\n  z-index:1;\n  border-radius:4px;\n  opacity:0;\n  transition:opacity .24s ease-out\n}\n.mx-scrollbar-track .mx-scrollbar-thumb[data-v-0a14ad68]{\n  position:absolute;\n  width:100%;\n  height:0;\n  cursor:pointer;\n  border-radius:inherit;\n  background-color:rgba(144,147,153,.3);\n  transition:background-color .3s\n}\n.mx-zoom-in-down-enter-active[data-v-0a14ad68],.mx-zoom-in-down-leave-active[data-v-0a14ad68]{\n  opacity:1;\n  transform:scaleY(1);\n  transition:transform .3s cubic-bezier(.23,1,.32,1),opacity .3s cubic-bezier(.23,1,.32,1);\n  transform-origin:center top\n}\n.mx-zoom-in-down-enter[data-v-0a14ad68],.mx-zoom-in-down-enter-from[data-v-0a14ad68],.mx-zoom-in-down-leave-to[data-v-0a14ad68]{\n  opacity:0;\n  transform:scaleY(0)\n}\n.mx-datepicker[data-v-0a14ad68]{\n  position:relative;\n  display:inline-block;\n  width:210px\n}\n.mx-datepicker svg[data-v-0a14ad68]{\n  width:1em;\n  height:1em;\n  vertical-align:-.15em;\n  fill:currentColor;\n  overflow:hidden\n}\n.mx-datepicker-range[data-v-0a14ad68]{\n  width:320px\n}\n.mx-datepicker-inline[data-v-0a14ad68]{\n  width:auto\n}\n.mx-input-wrapper[data-v-0a14ad68]{\n  position:relative\n}\n.mx-input[data-v-0a14ad68]{\n  display:inline-block;\n  box-sizing:border-box;\n  width:100%;\n  height:34px;\n  padding:6px 30px 6px 10px;\n  font-size:14px;\n  line-height:1.4;\n  color:#555;\n  background-color:#fff;\n  border:1px solid #ccc;\n  border-radius:4px;\n  box-shadow:inset 0 1px 1px rgba(0,0,0,.075)\n}\n.mx-input[data-v-0a14ad68]:focus,.mx-input[data-v-0a14ad68]:hover{\n  border-color:#409aff\n}\n.mx-input.disabled[data-v-0a14ad68],.mx-input[data-v-0a14ad68]:disabled{\n  color:#ccc;\n  background-color:#f3f3f3;\n  border-color:#ccc;\n  cursor:not-allowed\n}\n.mx-input[data-v-0a14ad68]:focus{\n  outline:none\n}\n.mx-input[data-v-0a14ad68]::-ms-clear{\n  display:none\n}\n.mx-icon-calendar[data-v-0a14ad68],.mx-icon-clear[data-v-0a14ad68]{\n  position:absolute;\n  top:50%;\n  right:8px;\n  transform:translateY(-50%);\n  font-size:16px;\n  line-height:1;\n  color:rgba(0,0,0,.5);\n  vertical-align:middle\n}\n.mx-icon-clear[data-v-0a14ad68]{\n  cursor:pointer\n}\n.mx-icon-clear[data-v-0a14ad68]:hover{\n  color:rgba(0,0,0,.8)\n}\n.mx-datepicker-main[data-v-0a14ad68]{\n  font:14px/1.5 \"Helvetica Neue\",Helvetica,Arial,\"Microsoft Yahei\",sans-serif;\n  color:#73879c;\n  background-color:#fff;\n  border:1px solid #e8e8e8\n}\n.mx-datepicker-popup[data-v-0a14ad68]{\n  position:absolute;\n  margin-top:1px;\n  margin-bottom:1px;\n  box-shadow:0 6px 12px rgba(0,0,0,.175);\n  z-index:2001\n}\n.mx-datepicker-sidebar[data-v-0a14ad68]{\n  float:left;\n  box-sizing:border-box;\n  width:100px;\n  padding:6px;\n  overflow:auto\n}\n.mx-datepicker-sidebar+.mx-datepicker-content[data-v-0a14ad68]{\n  margin-left:100px;\n  border-left:1px solid #e8e8e8\n}\n.mx-datepicker-body[data-v-0a14ad68]{\n  position:relative;\n  -webkit-user-select:none;\n     -moz-user-select:none;\n          user-select:none\n}\n.mx-btn-shortcut[data-v-0a14ad68]{\n  line-height:24px\n}\n.mx-range-wrapper[data-v-0a14ad68]{\n  display:flex\n}\n@media(max-width:750px){\n.mx-range-wrapper[data-v-0a14ad68]{\n    flex-direction:column\n}\n}\n.mx-datepicker-header[data-v-0a14ad68]{\n  padding:6px 8px;\n  border-bottom:1px solid #e8e8e8\n}\n.mx-datepicker-footer[data-v-0a14ad68]{\n  padding:6px 8px;\n  text-align:right;\n  border-top:1px solid #e8e8e8\n}\n.mx-calendar[data-v-0a14ad68]{\n  box-sizing:border-box;\n  width:248px;\n  padding:6px 12px\n}\n.mx-calendar+.mx-calendar[data-v-0a14ad68]{\n  border-left:1px solid #e8e8e8\n}\n.mx-calendar-header[data-v-0a14ad68],.mx-time-header[data-v-0a14ad68]{\n  box-sizing:border-box;\n  height:34px;\n  line-height:34px;\n  text-align:center;\n  overflow:hidden\n}\n.mx-btn-icon-double-left[data-v-0a14ad68],.mx-btn-icon-left[data-v-0a14ad68]{\n  float:left\n}\n.mx-btn-icon-double-right[data-v-0a14ad68],.mx-btn-icon-right[data-v-0a14ad68]{\n  float:right\n}\n.mx-calendar-header-label[data-v-0a14ad68]{\n  font-size:14px\n}\n.mx-calendar-decade-separator[data-v-0a14ad68]{\n  margin:0 2px\n}\n.mx-calendar-decade-separator[data-v-0a14ad68]:after{\n  content:\"~\"\n}\n.mx-calendar-content[data-v-0a14ad68]{\n  position:relative;\n  height:224px;\n  box-sizing:border-box\n}\n.mx-calendar-content .cell[data-v-0a14ad68]{\n  cursor:pointer\n}\n.mx-calendar-content .cell[data-v-0a14ad68]:hover{\n  color:#73879c;\n  background-color:rgb(243.15,248.85,253.8)\n}\n.mx-calendar-content .cell.active[data-v-0a14ad68]{\n  color:#fff;\n  background-color:#1284e7\n}\n.mx-calendar-content .cell.hover-in-range[data-v-0a14ad68],.mx-calendar-content .cell.in-range[data-v-0a14ad68]{\n  color:#73879c;\n  background-color:rgb(219.45,236.55,251.4)\n}\n.mx-calendar-content .cell.disabled[data-v-0a14ad68]{\n  cursor:not-allowed;\n  color:#ccc;\n  background-color:#f3f3f3\n}\n.mx-calendar-week-mode .mx-date-row[data-v-0a14ad68]{\n  cursor:pointer\n}\n.mx-calendar-week-mode .mx-date-row[data-v-0a14ad68]:hover{\n  background-color:rgb(243.15,248.85,253.8)\n}\n.mx-calendar-week-mode .mx-date-row.mx-active-week[data-v-0a14ad68]{\n  background-color:rgb(219.45,236.55,251.4)\n}\n.mx-calendar-week-mode .mx-date-row .cell.active[data-v-0a14ad68],.mx-calendar-week-mode .mx-date-row .cell[data-v-0a14ad68]:hover{\n  color:inherit;\n  background-color:transparent\n}\n.mx-week-number[data-v-0a14ad68]{\n  opacity:.5\n}\n.mx-table[data-v-0a14ad68]{\n  table-layout:fixed;\n  border-collapse:separate;\n  border-spacing:0;\n  width:100%;\n  height:100%;\n  box-sizing:border-box;\n  text-align:center\n}\n.mx-table th[data-v-0a14ad68]{\n  font-weight:500\n}\n.mx-table td[data-v-0a14ad68],.mx-table th[data-v-0a14ad68]{\n  padding:0;\n  vertical-align:middle\n}\n.mx-table-date td[data-v-0a14ad68],.mx-table-date th[data-v-0a14ad68]{\n  font-size:12px\n}\n.mx-table-date .today[data-v-0a14ad68]{\n  color:rgb(41.7,144.3,233.4)\n}\n.mx-table-date .cell.not-current-month[data-v-0a14ad68]{\n  color:#ccc;\n  background:none\n}\n.mx-time[data-v-0a14ad68]{\n  flex:1;\n  width:224px;\n  background:#fff\n}\n.mx-time+.mx-time[data-v-0a14ad68]{\n  border-left:1px solid #e8e8e8\n}\n.mx-calendar-time[data-v-0a14ad68]{\n  position:absolute;\n  top:0;\n  left:0;\n  width:100%;\n  height:100%\n}\n.mx-time-header[data-v-0a14ad68]{\n  border-bottom:1px solid #e8e8e8\n}\n.mx-time-content[data-v-0a14ad68]{\n  height:224px;\n  box-sizing:border-box;\n  overflow:hidden\n}\n.mx-time-columns[data-v-0a14ad68]{\n  display:flex;\n  width:100%;\n  height:100%;\n  overflow:hidden\n}\n.mx-time-column[data-v-0a14ad68]{\n  flex:1;\n  position:relative;\n  border-left:1px solid #e8e8e8;\n  text-align:center\n}\n.mx-time-column[data-v-0a14ad68]:first-child{\n  border-left:0\n}\n.mx-time-column .mx-time-list[data-v-0a14ad68]{\n  margin:0;\n  padding:0;\n  list-style:none\n}\n.mx-time-column .mx-time-list[data-v-0a14ad68]:after{\n  content:\"\";\n  display:block;\n  height:192px\n}\n.mx-time-column .mx-time-item[data-v-0a14ad68]{\n  cursor:pointer;\n  font-size:12px;\n  height:32px;\n  line-height:32px\n}\n.mx-time-column .mx-time-item[data-v-0a14ad68]:hover{\n  color:#73879c;\n  background-color:rgb(243.15,248.85,253.8)\n}\n.mx-time-column .mx-time-item.active[data-v-0a14ad68]{\n  color:#1284e7;\n  background-color:transparent;\n  font-weight:700\n}\n.mx-time-column .mx-time-item.disabled[data-v-0a14ad68]{\n  cursor:not-allowed;\n  color:#ccc;\n  background-color:#f3f3f3\n}\n.mx-time-option[data-v-0a14ad68]{\n  cursor:pointer;\n  padding:8px 10px;\n  font-size:14px;\n  line-height:20px\n}\n.mx-time-option[data-v-0a14ad68]:hover{\n  color:#73879c;\n  background-color:rgb(243.15,248.85,253.8)\n}\n.mx-time-option.active[data-v-0a14ad68]{\n  color:#1284e7;\n  background-color:transparent;\n  font-weight:700\n}\n.mx-time-option.disabled[data-v-0a14ad68]{\n  cursor:not-allowed;\n  color:#ccc;\n  background-color:#f3f3f3\n}\n.el-input .el-input__inner[data-v-0a14ad68]:focus,.el-range-editor.is-active[data-v-0a14ad68],.el-range-editor.is-active[data-v-0a14ad68]:hover,.el-select .el-input.is-focus .el-input__inner[data-v-0a14ad68],.el-select .el-input__inner[data-v-0a14ad68]:focus,.el-textarea .el-input__inner[data-v-0a14ad68]:focus{\n  border:1.3px solid #1b63d4!important;\n  box-shadow:0 2px 10px rgba(187,209,243,.5)\n}\n.mx-input[data-v-0a14ad68]{\n  height:40px!important\n}\n.mx-datepicker-sidebar[data-v-0a14ad68]{\n  width:151px!important\n}\n.mx-table-date td[data-v-0a14ad68],.mx-table-date th[data-v-0a14ad68]{\n  height:32px;\n  font-size:14px!important\n}\n.mx-btn-shortcut[data-v-0a14ad68]{\n  display:block;\n  padding:0 6px;\n  line-height:30px!important\n}\n[data-v-0a14ad68]:root{\n  --vs-line-height:1.6\n}\n.btn-popover[data-v-0a14ad68]{\n  height:40px;\n  background-color:#fff;\n  width:100%;\n  padding:10px;\n  cursor:pointer\n}\n.btn-popover .title-1[data-v-0a14ad68]{\n  font-weight:400;\n  font-size:16px;\n  color:#454545;\n  margin-left:10px\n}\n.btn-popover[data-v-0a14ad68]:hover{\n  background-color:#f3f4f6\n}\n.el-popover[data-v-0a14ad68]{\n  padding:0!important;\n  border-radius:5px!important\n}\n.el-upload[data-v-0a14ad68]{\n  width:100%\n}\n.el-upload-dragger[data-v-0a14ad68]{\n  width:100%!important;\n  background:linear-gradient(0deg,rgba(33,150,243,.03),rgba(33,150,243,.03)),#fff!important;\n  border:1px dashed transparent!important;\n  border-radius:5px!important;\n  height:100%!important\n}\n.kg-popup[data-v-0a14ad68]{\n  transition:all .5s ease-in-out;\n  position:fixed;\n  top:0;\n  left:50%;\n  transform:translateX(-50%)\n}\n.noselect[data-v-0a14ad68]{\n  -webkit-touch-callout:none;\n  -webkit-user-select:none;\n  -moz-user-select:none;\n  user-select:none\n}\n.ProseMirror[data-v-0a14ad68]{\n  border:0;\n  outline:none\n}\n.ProseMirror>*+*[data-v-0a14ad68]{\n  margin-top:.75em\n}\n.ProseMirror ol[data-v-0a14ad68],.ProseMirror ul[data-v-0a14ad68]{\n  padding:0 1rem\n}\n.ProseMirror h1[data-v-0a14ad68],.ProseMirror h2[data-v-0a14ad68],.ProseMirror h3[data-v-0a14ad68],.ProseMirror h4[data-v-0a14ad68],.ProseMirror h5[data-v-0a14ad68],.ProseMirror h6[data-v-0a14ad68]{\n  line-height:1.1\n}\n.ProseMirror code[data-v-0a14ad68]{\n  background-color:rgba(97,97,97,.1);\n  color:#616161\n}\n.ProseMirror pre[data-v-0a14ad68]{\n  background:#0d0d0d;\n  color:#fff;\n  font-family:\"JetBrainsMono\",monospace;\n  padding:.75rem 1rem;\n  border-radius:.5rem\n}\n.ProseMirror pre code[data-v-0a14ad68]{\n  color:inherit;\n  padding:0;\n  background:none;\n  font-size:.8rem\n}\n.ProseMirror img[data-v-0a14ad68]{\n  max-width:100%;\n  height:auto\n}\n.ProseMirror blockquote[data-v-0a14ad68]{\n  padding-left:1rem;\n  border-left:2px solid rgba(13,13,13,.1)\n}\n.ProseMirror hr[data-v-0a14ad68]{\n  border:none;\n  border-top:2px solid rgba(13,13,13,.1);\n  margin:2rem 0\n}\n.ProseMirror[data-v-0a14ad68]:focus-visible{\n  outline:none\n}\n.el-color-picker__trigger[data-v-0a14ad68]{\n  border:0!important;\n  padding:0!important;\n  outline:none!important\n}\n.el-color-picker__icon[data-v-0a14ad68]{\n  visibility:hidden!important\n}\n.el-color-picker--mini .el-color-picker__trigger[data-v-0a14ad68],.el-color-picker__color[data-v-0a14ad68]{\n  height:22px!important;\n  width:22px!important\n}\n.el-color-picker__color[data-v-0a14ad68]{\n  padding:0!important;\n  border:0!important\n}\n.el-color-picker__empty[data-v-0a14ad68]{\n  padding-top:1.4px!important\n}\n.el-color-picker--mini[data-v-0a14ad68]{\n  height:22px!important\n}\n.el-color-picker__color-inner[data-v-0a14ad68]{\n  border:1px solid #e2e2e2!important\n}\n.el-table thead[data-v-0a14ad68]{\n  color:#5c6b7a!important;\n  font-family:\"Cabin\"!important\n}\n.el-table thead[data-v-0a14ad68],.th[data-v-0a14ad68]{\n  font-weight:600!important\n}\n.el-button--mini[data-v-0a14ad68],.el-button--text[data-v-0a14ad68],.el-date-range-picker__header div[data-v-0a14ad68],.el-date-table td span[data-v-0a14ad68],.el-input__inner[data-v-0a14ad68],.el-picker-panel__shortcut[data-v-0a14ad68],.el-select-dropdown__item[data-v-0a14ad68],.el-select-dropdown__item.hover[data-v-0a14ad68],.el-select-dropdown__item[data-v-0a14ad68]:hover,.el-time-spinner__item[data-v-0a14ad68]{\n  font-family:\"Cabin\"!important\n}\n.el-progress-bar__inner[data-v-0a14ad68],.el-progress-bar__outer[data-v-0a14ad68]{\n  border-bottom-left-radius:100px!important;\n  border-top-left-radius:100px!important\n}\n.el-dropdown .el-dropdown__caret-button[data-v-0a14ad68]{\n  bottom:2px!important\n}\n.el-dropdown-menu[data-v-0a14ad68],.el-dropdown-menu__item[data-v-0a14ad68]{\n  padding:0!important\n}\nbutton[data-v-0a14ad68]:active,button[data-v-0a14ad68]:focus{\n  outline:0!important\n}\n.el-input-group__append[data-v-0a14ad68]{\n  padding:0!important\n}\n.el-input-group__prepend[data-v-0a14ad68]{\n  padding-left:5px!important;\n  padding-right:5px!important\n}\n.el-menu-item[data-v-0a14ad68],.el-submenu__title[data-v-0a14ad68]{\n  height:40px!important;\n  line-height:40px!important;\n  font-family:\"Cabin\"!important;\n  font-size:16px!important;\n  font-style:normal!important;\n  font-weight:400!important;\n  color:#5c6b7a!important;\n  margin-bottom:10px!important;\n  border-left:4px solid transparent!important\n}\n.el-menu-item.is-active[data-v-0a14ad68]{\n  color:#1b63d4!important;\n  font-weight:600!important;\n  border-left:4px solid #1b63d4!important;\n  border-top-left-radius:2px!important;\n  border-bottom-left-radius:2px!important\n}\n.el-menu--collapse[data-v-0a14ad68]{\n  width:80px!important\n}\n.el-menu[data-v-0a14ad68]{\n  border-right:0!important\n}\n.el-dialog__body[data-v-0a14ad68],.el-dialog__header[data-v-0a14ad68]{\n  padding:0!important\n}\n.el-dialog[data-v-0a14ad68]{\n  border-radius:10px!important\n}\n.card-dialog[data-v-0a14ad68]{\n  padding:20px!important\n}\n.vue-swatches__trigger[data-v-0a14ad68]{\n  width:22px!important;\n  height:22px!important;\n  border-radius:2px!important\n}\n.vue-swatches[data-v-0a14ad68]{\n  height:22px!important\n}\n.CodeMirror[data-v-0a14ad68]{\n  height:calc(100vh - 150px)!important\n}\n.vue-swatches__trigger[data-v-0a14ad68]{\n  border:1px solid #e2e2e2!important\n}\ninput[type=file][data-v-0a14ad68]{\n  display:none\n}\n.custom-file-upload[data-v-0a14ad68]{\n  display:inline-block;\n  cursor:pointer\n}\n.container-dialog[data-v-0a14ad68]{\n  height:100vh;\n  width:100%;\n  position:fixed;\n  z-index:1;\n  background:rgba(10,10,10,.5)\n}\n.container-dialog .modal-dialog[data-v-0a14ad68]{\n  padding:20px 40px;\n  height:100%;\n  width:100%\n}\n.container-dialog .modal-dialog .body-dialog[data-v-0a14ad68]{\n  height:100%;\n  width:100%;\n  background-color:#000\n}\n.container-dialog .modal-dialog .body-dialog .crop-title[data-v-0a14ad68]{\n  position:absolute;\n  top:35px;\n  left:60px;\n  font-style:normal;\n  font-weight:600;\n  font-size:18px;\n  color:#fff\n}\n.container-dialog .modal-dialog .body-dialog .icon-close[data-v-0a14ad68]{\n  position:absolute;\n  top:35px;\n  right:60px;\n  cursor:pointer\n}\n.container-dialog .modal-dialog .body-dialog .my-clipper[data-v-0a14ad68]{\n  width:100%;\n  max-width:700px\n}\n.container-dialog .modal-dialog .body-dialog .box-card[data-v-0a14ad68]{\n  margin-top:60px\n}\n.container-dialog .modal-dialog .body-dialog .box-card .btn-box[data-v-0a14ad68]{\n  cursor:pointer;\n  width:56px;\n  height:40px;\n  border:1px solid #fff;\n  border-radius:5px\n}\n.container-dialog .modal-dialog .body-dialog .box-card .btn-box[data-v-0a14ad68]:hover{\n  opacity:.9\n}\n.container-dialog .modal-dialog .body-dialog .footer-btn[data-v-0a14ad68]{\n  position:absolute;\n  bottom:40px;\n  padding-left:60px;\n  padding-right:60px;\n  width:100%\n}\n.container-dialog .modal-dialog .body-dialog .footer-btn .btn-images[data-v-0a14ad68]{\n  padding-right:18px;\n  padding-left:18px;\n  height:40px;\n  border:1px solid #fff;\n  border-radius:5px;\n  color:#fff;\n  cursor:pointer;\n  font-family:\"Cabin\";\n  font-weight:700;\n  font-size:14px\n}\n.container-dialog .modal-dialog .body-dialog .footer-btn .btn-images[data-v-0a14ad68]:hover{\n  opacity:.9\n}\n.container-dialog .modal-dialog .body-dialog .footer-btn .btn-apply[data-v-0a14ad68]{\n  background:#1b63d4;\n  padding-right:18px;\n  padding-left:18px;\n  height:40px;\n  border-radius:5px;\n  color:#fff;\n  cursor:pointer;\n  font-family:\"Cabin\";\n  font-weight:700;\n  font-size:14px;\n  margin-left:10px\n}\n.container-dialog .modal-dialog .body-dialog .footer-btn .btn-apply[data-v-0a14ad68]:hover{\n  opacity:.9\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URL) {/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuex__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'CreateCreativePage',
  layout: 'login',
  props: {
    titleImage: {
      default: '',
      type: String
    },
    dataImage: {
      default: '',
      type: String
    }
  },

  data() {
    return {
      indexImage: null,
      defaultImage: '',
      imageLoaded: false,
      isLoading: false,
      showPanel: true,
      show1: false,
      show2: false,
      name: '',
      resolutionId: 7,
      url: 'https://',
      imageData: '',
      imageUrl: '',
      imageName: '',
      imageFormat: '',
      imageSize: '',
      resolution: {
        width: '',
        height: ''
      },
      image: {
        width: 0,
        height: 0
      },
      editor: null,
      value: '',
      imgBase64: '',
      itemFilter: ['All', 'Media', 'Text', 'Shape', 'URL', 'Button'],
      activeItem: 'All'
    };
  },

  computed: { ...Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])({
      dataResolution: state => {
        return state.creative.dataResolution;
      },
      dataForm: state => {
        return state.creative.dataForm;
      },
      dataImageRaw: state => {
        return state.creative.dataImageRaw;
      }
    }),

    // eslint-disable-next-line vue/return-in-computed-property
    dataUrl() {
      if (this.dataImageRaw[this.indexImage].default !== null) {
        return URL.createObjectURL(this.dataImageRaw[this.indexImage].default.raw);
      }
    }

  },

  mounted() {
    this.imageUrl = this.dataImage;
    this.getAll();
  },

  methods: {
    cropImage() {
      let imageCrop = '';

      if (typeof this.dataImageRaw[this.indexImage].default === 'string') {
        var _this$dataImageRaw$th;

        if ((_this$dataImageRaw$th = this.dataImageRaw[this.indexImage].default) !== null && _this$dataImageRaw$th !== void 0 && _this$dataImageRaw$th.includes(this.$config.baseURL)) {
          imageCrop = this.imageUrl;
        } else {
          imageCrop = this.imageUrl + '?v1=' + Date.now();
        }
      } else {
        imageCrop = URL.createObjectURL(this.dataImageRaw[this.indexImage].default.raw);
      }

      const indexForm = this.dataForm.findIndex(x => x.title === this.titleImage);
      const data = {
        indexRawImage: this.indexImage,
        indexForm,
        title: this.titleImage,
        type: 'Image',
        img: imageCrop,
        dialog: true,
        height: this.dataForm[indexForm].height,
        width: this.dataForm[indexForm].width
      };
      this.$emit('openEditor', data);
    },

    deleteImage() {
      this.imageUrl = null;
      const dataRaw = this.dataImageRaw.findIndex(x => x.title === this.titleImage);
      const dataJSON = {
        index: dataRaw,
        default: 'blank.png'
      };
      this.$store.commit('creative/SET_CHANGE_IMAGE', dataJSON);
      const indexImage = this.dataForm.findIndex(x => x.title === this.titleImage);
      const data = {
        index: indexImage,
        title: this.titleImage,
        type: 'Image',
        src: 'https://unimind.jixie.media/blank.png'
      };
      this.$emit('reloadback', data);
    },

    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$notifier.showMessage({
          content: 'Avatar picture must be JPG format!',
          type: 'failed'
        });
      }

      if (!isLt2M) {
        this.$notifier.showMessage({
          content: 'Avatar picture size can not exceed 2MB!',
          type: 'failed'
        });
      }

      return isJPG && isLt2M;
    },

    getBase64(file) {
      return new Promise(function (resolve, reject) {
        const reader = new FileReader();
        let imgResult = '';
        reader.readAsDataURL(file);

        reader.onload = function () {
          imgResult = reader.result;
        };

        reader.onerror = function (error) {
          reject(error);
        };

        reader.onloadend = function () {
          resolve(imgResult);
        };
      });
    },

    handleChange(file) {
      const formatData = file.raw.type;

      if (formatData === 'image/jpg' || formatData === 'image/jpeg' || formatData === 'image/png' || formatData === 'image/gif' || formatData === 'image/bmp') {
        if (file.size / 1023.4 > 500) {
          this.$notifier.showMessage({
            content: 'Image size can not exceed 500KB!',
            type: 'failed'
          });
        } else {
          this.imageData = file;
          this.imageLoaded = false;
          this.imageUrl = URL.createObjectURL(file.raw);
          this.uploadFile(); // this.getBase64(file.raw).then((res) => {
          //   const params = res.split(',')
          //   if (params.length > 0) {
          //     this.imgBase64 = params[1]
          //     const indexImage = this.dataForm.findIndex(x => x.title === this.titleImage)
          //     const data = {
          //       index: indexImage,
          //       title: this.titleImage,
          //       type: 'Image',
          //       src: 'data:image/png;base64, ' + this.imgBase64
          //     }
          //     this.$emit('reloadback', data)
          //     // send image raw data fo dataimageraw variable
          //     const dataRaw = this.dataImageRaw.findIndex(x => x.title === this.titleImage)
          //     const dataJSON = {
          //       index: dataRaw,
          //       default: this.imageData
          //     }
          //     this.$store.commit('creative/SET_CHANGE_IMAGE', dataJSON)
          //   }
          // })
        }
      } else {
        this.$notifier.showMessage({
          content: 'Image must be JPG, JPEG, PNG, GIF & BMP format',
          type: 'failed'
        });
      }
    },

    async uploadFile() {
      const data = new FormData();
      data.append('files', this.imageData.raw);
      await this.$axios.post('obs/array', data, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => {
        console.log(res);
        const fileKey = this.$config.baseURL + 'obs?fileKey=' + res.data.data.fileKeys[0];
        const indexForm = this.dataForm.findIndex(x => x.title === this.titleImage);
        const dataJSON = {
          index: this.indexImage,
          default: this.imageData
        };
        this.$store.commit('creative/SET_CHANGE_IMAGE', dataJSON);
        const data = {
          index: indexForm,
          title: this.titleImage,
          type: 'Image',
          src: fileKey
        };
        this.$store.commit('creative/SET_DATA_FORM', data);
        this.$emit('reloadback', data); // const data = {
        //   indexRawImage: this.indexImage,
        //   indexForm,
        //   title: this.titleImage,
        //   type: 'Image',
        //   src: fileKey,
        //   data: this.imageData
        // }
        // this.$emit('saveEditor', data)
        // const data = {
        //   index: indexImage,
        //   title: this.titleImage,
        //   type: 'Image',
        //   src: fileKey
        // }
        // // send image raw data fo dataimageraw variable
        // const dataJSON = {
        //   index: this.indexImage,
        //   default: res.data.data.fileKeys[0]
        // }
        // this.$store.commit('template/SET_CHANGE_IMAGE', dataJSON)
        // const dataFile = {
        //   status: 'ready',
        //   name: 'result_crop_' + Date.now() + this.tempIndex++,
        //   size: this.imageData.size,
        //   percentage: 0,
        //   uid: '-',
        //   raw: this.imageData
        // }
        // const data = {
        //   indexRawImage: this.imgSrc.indexRawImage,
        //   indexForm: this.imgSrc.indexForm,
        //   title: this.imgSrc.title,
        //   type: this.imgSrc.type,
        //   src: fileKey,
        //   data: dataFile
        // }
        // this.$emit('saveEditor', data)
        // this.imageUpload = false
      }).catch(error => {
        this.$notifier.showMessage({
          content: 'Upload failed. Please try again ! ' + error,
          type: 'failed'
        });
        this.imageUpload = false;
      });
    },

    getAll() {
      this.getData();
    },

    getData() {
      // this.isLoading = true
      // const data = {
      //   id: this.$route.params.edit
      // }
      // this.$store
      //   .dispatch('creative/getDetail', data)
      //   .then(() => {
      //     this.isLoading = false
      this.defaultImage = this.dataForm.find(item => item.title === this.titleImage);
      this.imageUrl = this.defaultImage.default;
      this.$store.commit('creative/SET_DATA_IMAGE', this.defaultImage);
      this.indexImage = this.dataImageRaw.findIndex(x => x.title === this.titleImage); // })
      // .catch(() => {
      //   this.isLoading = false
      // })
    }

  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(20)["URL"]))

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/icon/component.vue?vue&type=template&id=15fe3e09
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('svg', {
    attrs: {
      "width": "20",
      "height": "22",
      "viewBox": "0 0 20 22",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_vm._ssrNode("<path d=\"M19.648 14.7433C19.7482 14.9151 19.7761 15.1197 19.7254 15.312C19.6748 15.5044 19.5499 15.6687 19.3781 15.769L10.3781 21.019C10.2634 21.0859 10.133 21.1212 10.0002 21.1212C9.8674 21.1212 9.73699 21.0859 9.62229 21.019L0.622287 15.769C0.536508 15.7197 0.461321 15.654 0.401057 15.5755C0.340793 15.4971 0.296641 15.4075 0.271144 15.3119C0.245648 15.2163 0.23931 15.1167 0.252496 15.0186C0.265682 14.9206 0.298132 14.8261 0.347976 14.7407C0.39782 14.6552 0.464074 14.5805 0.542922 14.5208C0.621771 14.461 0.711657 14.4175 0.807405 14.3926C0.903152 14.3678 1.00287 14.3621 1.10081 14.376C1.19876 14.3898 1.293 14.4229 1.3781 14.4733L10.0002 19.5028L18.6223 14.4733C18.7941 14.3731 18.9987 14.3453 19.1911 14.3959C19.3834 14.4465 19.5478 14.5715 19.648 14.7433ZM18.6223 9.97334L10.0002 15.0028L1.37801 9.97334C1.29287 9.92219 1.19843 9.88845 1.10016 9.87409C1.00188 9.85972 0.901733 9.86502 0.805523 9.88968C0.709312 9.91433 0.618957 9.95785 0.539701 10.0177C0.460446 10.0776 0.393867 10.1526 0.343831 10.2384C0.293795 10.3242 0.261297 10.419 0.248225 10.5175C0.235152 10.6159 0.241764 10.716 0.267678 10.8119C0.293591 10.9078 0.33829 10.9975 0.39918 11.076C0.46007 11.1545 0.535938 11.2201 0.62238 11.269L9.62238 16.519C9.73706 16.5859 9.86744 16.6211 10.0002 16.6211C10.133 16.6211 10.2633 16.5859 10.378 16.519L19.3781 11.269C19.5485 11.168 19.672 11.0038 19.7218 10.8121C19.7715 10.6204 19.7434 10.4169 19.6436 10.2458C19.5438 10.0747 19.3805 9.9501 19.1891 9.89906C18.9978 9.84802 18.794 9.87472 18.6223 9.97334ZM0.250193 6.12116C0.250206 5.99007 0.284577 5.86127 0.349881 5.74761C0.415185 5.63394 0.50914 5.53938 0.62238 5.47334L9.62238 0.223343C9.73706 0.156459 9.86744 0.121216 10.0002 0.121216C10.133 0.121216 10.2633 0.156459 10.378 0.223343L19.3781 5.47334C19.4913 5.5394 19.5852 5.63397 19.6505 5.74763C19.7158 5.86129 19.7502 5.99008 19.7502 6.12116C19.7502 6.25223 19.7158 6.38102 19.6505 6.49468C19.5852 6.60835 19.4913 6.70292 19.3781 6.76897L10.3781 12.019C10.2634 12.0859 10.133 12.1212 10.0002 12.1212C9.8674 12.1212 9.73699 12.0859 9.62229 12.019L0.622287 6.76897C0.509063 6.70292 0.415127 6.60835 0.34984 6.49469C0.284554 6.38103 0.250196 6.25224 0.250193 6.12116ZM2.48866 6.12116L10.0002 10.5028L17.5117 6.12116L10.0002 1.73947L2.48866 6.12116Z\"" + _vm._ssrAttr("fill", _vm.bgColor) + "></path>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/icon/component.vue?vue&type=template&id=15fe3e09

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/icon/component.vue?vue&type=script&lang=js
/* harmony default export */ var componentvue_type_script_lang_js = ({
  props: {
    bgColor: {
      type: String,
      default: '#1B63D4'
    }
  }
});
// CONCATENATED MODULE: ./components/icon/component.vue?vue&type=script&lang=js
 /* harmony default export */ var icon_componentvue_type_script_lang_js = (componentvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/icon/component.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  icon_componentvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "00a8a23a"
  
)

/* harmony default export */ var icon_component = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/dropdown/save.vue?vue&type=template&id=7c13d951&scoped=true
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "dropdown-container"
  }, [_vm._ssrNode("<div" + _vm._ssrClass("dropdown-btn noselect flex items-center justify-between cursor-pointer", {
    'disabled': _vm.loading
  }) + _vm._ssrStyle(null, _vm.show ? 'border-top-left-radius:0px;border-top-right-radius:0px' : '', null) + " data-v-7c13d951>", "</div>", [_vm._ssrNode("<div class=\"flex card-dropdown items-center justify-center\" data-v-7c13d951>", "</div>", [_c('IconSave', {
    staticClass: "icon-prev"
  }), _vm._ssrNode(" <div class=\"title-dropdown\" data-v-7c13d951>" + _vm._ssrEscape("\n        " + _vm._s(_vm.nameBtn) + "\n      ") + "</div>")], 2), _vm._ssrNode(" <div class=\"btn-show flex items-center justify-center\" data-v-7c13d951><img" + _vm._ssrAttr("src", __webpack_require__(220)) + " data-v-7c13d951></div>")], 2), _vm._ssrNode(" "), _vm.show ? _vm._ssrNode("<div class=\"dropdown-list\" data-v-7c13d951>", "</div>", [_vm._t("body")], 2) : _vm._e()], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/dropdown/save.vue?vue&type=template&id=7c13d951&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/dropdown/save.vue?vue&type=script&lang=js
/* harmony default export */ var savevue_type_script_lang_js = ({
  props: {
    nameBtn: {
      type: String,
      default: ''
    },
    loading: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      show: false
    };
  },

  methods: {
    open() {
      this.show = !this.show;
    }

  }
});
// CONCATENATED MODULE: ./components/dropdown/save.vue?vue&type=script&lang=js
 /* harmony default export */ var dropdown_savevue_type_script_lang_js = (savevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/dropdown/save.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(221)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  dropdown_savevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7c13d951",
  "6bb692ef"
  
)

/* harmony default export */ var save = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {IconSave: __webpack_require__(40).default})


/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ImagesEditor.vue?vue&type=template&id=0a14ad68&scoped=true
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "container-dialog"
  }, [_vm._ssrNode("<div class=\"modal-dialog\" data-v-0a14ad68>", "</div>", [_vm._ssrNode("<div class=\"body-dialog flex flex-col items-center justify-center\" data-v-0a14ad68>", "</div>", [_vm._ssrNode("<div class=\"crop-title\" data-v-0a14ad68>\n        Crop Image\n      </div> "), _c('IconClose', {
    staticClass: "icon-close no-select",
    attrs: {
      "bg-color": "white"
    },
    nativeOn: {
      "click": function ($event) {
        return _vm.close();
      }
    }
  }), _vm._ssrNode(" "), _c('cropper', {
    ref: "cropper",
    staticClass: "cropper",
    staticStyle: {
      "max-width": "80%",
      "max-height": "60%"
    },
    attrs: {
      "src": _vm.imgSrc.img,
      "stencil-props": {
        handlers: {},
        movable: false,
        scalable: false
      },
      "stencil-size": {
        width: _vm.imgSrc.width,
        height: _vm.imgSrc.height
      },
      "resize-image": {
        adjustStencil: true
      },
      "image-restriction": "stencil"
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"flex items-center justify-center box-card\" data-v-0a14ad68>", "</div>", [_vm._ssrNode("<div class=\"flex items-center justify-center btn-box mr-4 no-select\" data-v-0a14ad68>", "</div>", [_c('IconPlus', {
    attrs: {
      "bg-color": "white"
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"flex items-center justify-center btn-box mr-4 no-select\" data-v-0a14ad68>", "</div>", [_c('IconMinus', {
    attrs: {
      "bg-color": "white"
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"flex items-center justify-center btn-box mr-4 no-select\" data-v-0a14ad68>", "</div>", [_c('IconArrowUp', {
    attrs: {
      "bg-color": "white"
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"flex items-center justify-center btn-box mr-4 no-select\" data-v-0a14ad68>", "</div>", [_c('IconArrowDown', {
    attrs: {
      "bg-color": "white"
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"flex items-center justify-center btn-box mr-4 no-select\" data-v-0a14ad68>", "</div>", [_c('IconArrowRight', {
    attrs: {
      "bg-color": "white"
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"flex items-center justify-center btn-box no-select\" data-v-0a14ad68>", "</div>", [_c('IconArrowLeft', {
    attrs: {
      "bg-color": "white"
    }
  })], 1)], 2), _vm._ssrNode(" <div class=\"flex items-center justify-between footer-btn\" data-v-0a14ad68><div class=\"flex items-center justify-center btn-images no-select\" data-v-0a14ad68>\n          Close\n        </div> <div class=\"flex items-center justify-center items-col\" data-v-0a14ad68><div class=\"flex items-center justify-center btn-images upload no-select\" data-v-0a14ad68><label for=\"file-upload\" class=\"custom-file-upload\" data-v-0a14ad68></label> <input id=\"file-upload\" type=\"file\" accept=\"image/*\" class=\"custom-file-upload\" data-v-0a14ad68>\n            Change Image\n          </div> <div class=\"flex items-center justify-center btn-apply no-select\" data-v-0a14ad68><img" + _vm._ssrAttr("src", __webpack_require__(175)) + " style=\"margin-right:10px;\" data-v-0a14ad68>\n            Apply Changes\n          </div></div></div>")], 2)])]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ImagesEditor.vue?vue&type=template&id=0a14ad68&scoped=true

// EXTERNAL MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ImagesEditor.vue?vue&type=script&lang=js
var ImagesEditorvue_type_script_lang_js = __webpack_require__(165);

// CONCATENATED MODULE: ./components/ImagesEditor.vue?vue&type=script&lang=js
 /* harmony default export */ var components_ImagesEditorvue_type_script_lang_js = (ImagesEditorvue_type_script_lang_js["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/ImagesEditor.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(223)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ImagesEditorvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0a14ad68",
  "6209466e"
  
)

/* harmony default export */ var ImagesEditor = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {IconClose: __webpack_require__(46).default,IconPlus: __webpack_require__(42).default,IconMinus: __webpack_require__(181).default,IconArrowUp: __webpack_require__(131).default,IconArrowDown: __webpack_require__(130).default,IconArrowRight: __webpack_require__(48).default,IconArrowLeft: __webpack_require__(41).default})


/***/ }),

/***/ 281:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(344);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("5f43798a", content, true, context)
};

/***/ }),

/***/ 282:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(346);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("4c5838de", content, true, context)
};

/***/ }),

/***/ 283:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(348);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("9968d680", content, true, context)
};

/***/ }),

/***/ 284:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(350);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("2548d75e", content, true, context)
};

/***/ }),

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(352);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("2130dfa5", content, true, context)
};

/***/ }),

/***/ 286:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(354);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("9ce2db4e", content, true, context)
};

/***/ }),

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(356);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("2957eca0", content, true, context)
};

/***/ }),

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(358);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("135e2b7f", content, true, context)
};

/***/ }),

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(360);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("08d53467", content, true, context)
};

/***/ }),

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(362);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("c3311a38", content, true, context)
};

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URL) {/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuex__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_card_Form_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(200);
/* harmony import */ var _components_form_edit_Audio_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(364);
/* harmony import */ var _components_form_edit_CustomSound_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(365);




/* harmony default export */ __webpack_exports__["a"] = ({
  name: "CreateCreativePage",
  layout: "login",
  components: {
    CardForm: _components_card_Form_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    FormEditAudio: _components_form_edit_Audio_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    FormEditCustomSound: _components_form_edit_CustomSound_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  filters: {
    capitalising(data) {
      const capitalized = [];
      data.split(" ").forEach(word => {
        capitalized.push(word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
      });
      return capitalized.join(" ");
    },

    spaceUnderscore(data) {
      if (!data) {
        return "";
      }

      data = data.toString();
      return data.replace(/_/g, " ");
    }

  },

  data() {
    return {
      isLoadingDuration: false,
      duration: "0",
      dataMood: "",
      showIframe: false,
      thumbnail: null,
      showZoom: false,
      templateName: "",
      isLoading: false,
      creativeName: "",
      ads: "",
      url: "",
      youtubeId: null,
      itemFilter: ["All", "Image", "Text", "Color", "Button"],
      imageLoaded: false,
      showPanel: true,
      show1: false,
      show2: false,
      name: "",
      resolutionId: 8,
      imageData: "",
      imageUrl: "",
      imageName: "",
      imageFormat: "",
      imageSize: "",
      resolution: {
        width: "",
        height: ""
      },
      image: {
        width: 0,
        height: 0
      },
      fileKey: [],
      fileKey2: [],
      dataResolution: [],
      staticSrc: "",
      activeItem: "All",
      defaultImage: "",
      loadingData: false,
      showImages: false,
      dataImageEditor: {},
      type: "",
      newData: [],
      templateId: null,
      selectedResolution: [],
      isLoadingDetail: false,
      selectedAudio: {}
    };
  },

  computed: { ...Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])({
      orgId: state => {
        return state.user.orgId;
      },
      dataDetailCreative: state => {
        return state.creative.dataDetailCreative;
      },
      dataForm: state => {
        return state.creative.dataForm;
      },
      dataImageRaw: state => {
        return state.creative.dataImageRaw;
      },
      keyName: state => {
        return state.creative.keyName;
      },
      keyFilter: state => {
        return state.creative.keyFilter;
      },
      dataImageArrayRaw: state => {
        return state.creative.dataImageArrayRaw;
      },
      dataImageArrayRaw2: state => {
        return state.creative.dataImageArrayRaw2;
      },

      filteredItems() {
        return this.keyFilter.filter(item => item.type !== "Json");
      }

    }),

    // eslint-disable-next-line vue/return-in-computed-property
    dataUrl() {
      if (this.dataImageRaw[0].default !== null) {
        return URL.createObjectURL(this.dataImageRaw[0].default.raw);
      }
    },

    alignCenter() {
      if (this.resolution.width > 1000) {
        if (this.resolution.height > 1080) {
          return "iframe-align";
        } else if (this.resolution.height < 800) {
          return "center-iframe-2";
        } else {
          return "left-iframe";
        }
      } else {
        return "center-iframe";
      }
    }

  },

  mounted() {
    this.$store.commit("creative/SET_CLEAR_IMAGE");
    this.getAll();
  },

  methods: {
    getDuration(bodyTxt, type) {
      this.isLoadingDuration = true;
      this.$store.dispatch("creative/getDuration", {
        templateId: this.templateId,
        bodyTxt: bodyTxt,
        type: type
      }).then(res => {
        console.log("res duration : ", res);
        this.duration = res.data.data.duration + " seconds";
        this.isLoadingDuration = false;
      }).catch(() => {
        this.isLoadingDuration = false;
      });
    },

    onChangeAudio(data) {
      this.selectedAudio = data;
      console.log("audio : ", this.selectedAudio);
    },

    toPlay() {
      this.showIframe = true;
    },

    clickActiveItem(x) {
      this.activeItem = x;
    },

    saveEditor(val) {
      if (val.type === "Image") {
        const dataJSON = {
          index: val.indexRawImage,
          default: val.data
        };
        this.$store.commit("creative/SET_CHANGE_IMAGE", dataJSON);
        const data = {
          index: val.indexForm,
          title: val.title,
          type: "Image",
          src: val.src
        };
        this.$store.commit("creative/SET_DATA_FORM", data);
        this.sendToIframe();
        this.showImages = false;
      }

      if (val.type === "ImageArray") {
        const dataJSON = {
          indexImage: val.indexRawImage,
          default: val.data
        };
        this.$store.commit("creative/SET_CHANGE_IMAGEARRAY", dataJSON);
        const dataJSON2 = {
          indexImage: val.indexRawImage,
          default: val.src
        };
        this.$store.commit("creative/SET_CHANGE_IMAGEARRAY2", dataJSON2);
        const data = {
          index: val.indexForm,
          title: val.title,
          type: val.type,
          src: this.dataImageArrayRaw2
        };
        this.$store.commit("creative/SET_DATA_FORM", data);
        this.sendToIframe();
        this.showImages = false;
        this.$store.commit("user/SET_DROPDOWN", null);
      }
    },

    openEditor(val) {
      this.showImages = val.dialog;
      this.dataImageEditor = val;
    },

    async saveData() {
      if (this.name !== "") {
        this.fileKey = [];
        this.fileKey2 = [];
        const dataUpload = [];

        for (let i = 0; i < this.dataImageRaw.length; i++) {
          if (this.dataImageRaw[i].default instanceof Object) {
            this.fileKey.push({
              src: this.dataImageRaw[i],
              fileKey: ""
            });
          } else {
            var _this$dataImageRaw$i$;

            console.log("string : ", this.dataImageRaw[i].default);

            if ((_this$dataImageRaw$i$ = this.dataImageRaw[i].default) !== null && _this$dataImageRaw$i$ !== void 0 && _this$dataImageRaw$i$.includes(this.$config.baseURL)) {
              const text = this.dataImageRaw[i].default;
              let data = text.indexOf("fileKey=");
              data = data + 8;
              dataUpload.push({
                src: text.slice(data, text.length),
                title: this.dataImageRaw[i].title
              });
            } else {
              dataUpload.push({
                src: this.dataImageRaw[i].default,
                title: this.dataImageRaw[i].title
              });
            }
          }
        }

        if (this.fileKey.length > 0) {
          this.imageLoaded = true;
          const data = new FormData();

          for (let i = 0; i < this.fileKey.length; i++) {
            data.append("files", this.fileKey[i].src.default.raw);
          }

          await this.$axios.post("obs/array", data, {
            headers: {
              "Content-Type": "application/json"
            }
          }).then(res => {
            const keys = res.data.data.fileKeys;

            for (let i = 0; i < keys.length; i++) {
              this.fileKey[i].fileKey = keys[i];
            }

            this.imageLoaded = false;
          }).catch(error => {
            this.$notifier.showMessage({
              content: "Upload failed. Please try again ! " + error,
              type: "failed"
            });
            this.imageLoaded = false;
          });
        }

        if (!this.imageLoaded) {
          for (let i = 0; i < this.fileKey.length; i++) {
            dataUpload.push({
              src: this.fileKey[i].fileKey,
              title: this.fileKey[i].src.title
            });
          }

          for (let i = 0; i < this.dataImageArrayRaw2.length; i++) {
            var _this$dataImageArrayR;

            if ((_this$dataImageArrayR = this.dataImageArrayRaw2[i]) !== null && _this$dataImageArrayR !== void 0 && _this$dataImageArrayR.includes(this.$config.baseURL)) {
              const text = this.dataImageArrayRaw2[i];
              let data = text.indexOf("fileKey=");
              data = data + 8;
              this.dataImageArrayRaw2[i] = text.slice(data, text.length);
            }
          }

          const payloadImage = this.keyName.filter(({
            type
          }) => type === "Image").reduce((item, value) => {
            return { ...item,
              [value.key]: dataUpload.filter(({
                title
              }) => title === value.title)[0].src
            };
          }, {});
          const payloadImage2 = this.keyName.filter(({
            type
          }) => type === "Image_array").reduce((item, value) => {
            return { ...item,
              [value.key]: this.dataImageArrayRaw2
            };
          }, {});
          const payloadTextColor = this.keyName.filter(({
            type
          }) => type === "Text" || type === "Color").reduce((item, value) => {
            return { ...item,
              [value.key]: this.dataForm.filter(({
                title
              }) => title === value.title)[0].default
            };
          }, {});
          const payloadButton = this.keyName.filter(({
            type
          }) => type === "Button").reduce((item, value) => {
            return { ...item,
              [value.key]: this.dataForm.filter(({
                title
              }) => title === value.title)[0].default
            };
          }, {});
          const payloadTextOnly = this.keyName.filter(({
            type
          }) => type === "Text_only").reduce((item, value) => {
            return { ...item,
              [value.key]: this.dataForm.filter(({
                title
              }) => title === value.title)[0].default
            };
          }, {});
          const payloadAudio = this.keyName.filter(({
            type
          }) => type === "Audio").reduce((item, value) => {
            return { ...item,
              [value.key]: this.selectedAudio
            };
          }, {});
          const payloadTextColor2 = this.keyName.filter(({
            type
          }) => type === "Text_color").reduce((item, value) => {
            return { ...item,
              [value.key]: this.dataForm.filter(({
                title
              }) => title === value.title)[0].default
            };
          }, {});
          const payloadColorOnly = this.keyName.filter(({
            type
          }) => type === "Color_pallete").reduce((item, value) => {
            return { ...item,
              [value.key]: this.dataForm.filter(({
                title
              }) => title === value.title)[0].default
            };
          }, {});
          console.log("payloadColorOnly : ", payloadColorOnly);
          const payloadJson = this.keyName.filter(({
            type
          }) => type === "Json").reduce((item, value) => {
            return { ...item,
              [value.key]: this.dataForm.filter(({
                title
              }) => title === value.title)[0].default
            };
          }, {});
          const payloadCustomAudio = this.keyName.filter(({
            type
          }) => type === "Custom_audio").reduce((item, value) => {
            return { ...item,
              [value.key]: this.dataForm.filter(({
                title
              }) => title === value.title)[0].default
            };
          }, {});
          let payload = {};

          if (this.type !== "video") {
            if (this.youtubeId === null) {
              payload = {
                name: this.name,
                resolutionId: this.resolutionId,
                config: {
                  clickUrl: this.url,
                  properties: {}
                }
              };
            } else {
              payload = {
                name: this.name,
                resolutionId: this.resolutionId,
                config: {
                  clickUrl: this.url,
                  youtubeId: this.youtubeId,
                  properties: {}
                }
              };
            }
          } else {
            payload = {
              name: this.name,
              resolutionId: this.resolutionId,
              config: {
                properties: {}
              }
            };
          }

          if (payloadJson !== null) {
            payload.config.properties = Object.assign(payload.config.properties, payloadAudio, payloadJson);
          }

          if (payloadImage.backupImg === undefined) {
            payload.config.properties = Object.assign(payload.config.properties, payloadImage, payloadImage2, payloadTextColor, payloadButton, payloadTextOnly, payloadAudio, payloadTextColor2, payloadColorOnly, payloadCustomAudio);
          } else {
            payload.config.backupImg = payloadImage.backupImg;
            delete payloadImage.backupImg;
            payload.config.properties = Object.assign(payload.config.properties, payloadImage, payloadImage2, payloadTextColor, payloadButton, payloadTextOnly, payloadAudio, payloadTextColor2, payloadColorOnly, payloadCustomAudio);
          }

          this.$store.dispatch("creative/updateCreative", {
            payload,
            id: this.$route.params.edit
          }).then(res => {
            if (res.status === 201 || res.status === 200 || res.status === 202) {
              // this.$store.commit('creative/SET_CLEAR')
              this.$notifier.showMessage({
                content: "Creative edited",
                type: "success"
              });
              this.$router.push({
                path: "/creative/"
              });
            }
          }).catch(error => {
            this.$notifier.showMessage({
              content: "Creative failed. Please try again ! " + error,
              type: "failed"
            });
          });
        }
      } else {
        this.$notifier.showMessage({
          content: '"Name" is not allowed to be empty',
          type: "failed"
        });
      }
    },

    async saveData2() {
      if (this.name !== "") {
        this.fileKey = [];
        this.fileKey2 = [];
        const dataUpload = [];

        for (let i = 0; i < this.dataImageRaw.length; i++) {
          if (this.dataImageRaw[i].default instanceof Object) {
            this.fileKey.push({
              src: this.dataImageRaw[i],
              fileKey: ""
            });
          } else {
            var _this$dataImageRaw$i$2;

            console.log("string : ", this.dataImageRaw[i].default);

            if ((_this$dataImageRaw$i$2 = this.dataImageRaw[i].default) !== null && _this$dataImageRaw$i$2 !== void 0 && _this$dataImageRaw$i$2.includes(this.$config.baseURL)) {
              const text = this.dataImageRaw[i].default;
              let data = text.indexOf("fileKey=");
              data = data + 8;
              dataUpload.push({
                src: text.slice(data, text.length),
                title: this.dataImageRaw[i].title
              });
            } else {
              dataUpload.push({
                src: this.dataImageRaw[i].default,
                title: this.dataImageRaw[i].title
              });
            }
          }
        }

        if (this.fileKey.length > 0) {
          this.imageLoaded = true;
          const data = new FormData();

          for (let i = 0; i < this.fileKey.length; i++) {
            data.append("files", this.fileKey[i].src.default.raw);
          }

          await this.$axios.post("obs/array", data, {
            headers: {
              "Content-Type": "application/json"
            }
          }).then(res => {
            const keys = res.data.data.fileKeys;

            for (let i = 0; i < keys.length; i++) {
              this.fileKey[i].fileKey = keys[i];
            }

            this.imageLoaded = false;
          }).catch(error => {
            this.$notifier.showMessage({
              content: "Upload failed. Please try again ! " + error,
              type: "failed"
            });
            this.imageLoaded = false;
          });
        }

        if (!this.imageLoaded) {
          for (let i = 0; i < this.fileKey.length; i++) {
            dataUpload.push({
              src: this.fileKey[i].fileKey,
              title: this.fileKey[i].src.title
            });
          }

          for (let i = 0; i < this.dataImageArrayRaw2.length; i++) {
            var _this$dataImageArrayR2;

            if ((_this$dataImageArrayR2 = this.dataImageArrayRaw2[i]) !== null && _this$dataImageArrayR2 !== void 0 && _this$dataImageArrayR2.includes(this.$config.baseURL)) {
              const text = this.dataImageArrayRaw2[i];
              let data = text.indexOf("fileKey=");
              data = data + 8;
              this.dataImageArrayRaw2[i] = text.slice(data, text.length);
            }
          }

          const payloadImage = this.keyName.filter(({
            type
          }) => type === "Image").reduce((item, value) => {
            return { ...item,
              [value.key]: dataUpload.filter(({
                title
              }) => title === value.title)[0].src
            };
          }, {});
          const payloadImage2 = this.keyName.filter(({
            type
          }) => type === "Image_array").reduce((item, value) => {
            return { ...item,
              [value.key]: this.dataImageArrayRaw2
            };
          }, {});
          const payloadTextColor = this.keyName.filter(({
            type
          }) => type === "Text" || type === "Color").reduce((item, value) => {
            return { ...item,
              [value.key]: this.dataForm.filter(({
                title
              }) => title === value.title)[0].default
            };
          }, {});
          const payloadButton = this.keyName.filter(({
            type
          }) => type === "Button").reduce((item, value) => {
            return { ...item,
              [value.key]: this.dataForm.filter(({
                title
              }) => title === value.title)[0].default
            };
          }, {});
          const payloadTextOnly = this.keyName.filter(({
            type
          }) => type === "Text_only").reduce((item, value) => {
            return { ...item,
              [value.key]: this.dataForm.filter(({
                title
              }) => title === value.title)[0].default
            };
          }, {});
          const payloadAudio = this.keyName.filter(({
            type
          }) => type === "Audio").reduce((item, value) => {
            return { ...item,
              [value.key]: this.selectedAudio
            };
          }, {});
          const payloadTextColor2 = this.keyName.filter(({
            type
          }) => type === "Text_color").reduce((item, value) => {
            return { ...item,
              [value.key]: this.dataForm.filter(({
                title
              }) => title === value.title)[0].default
            };
          }, {});
          const payloadColorOnly = this.keyName.filter(({
            type
          }) => type === "Color_pallete").reduce((item, value) => {
            return { ...item,
              [value.key]: this.dataForm.filter(({
                title
              }) => title === value.title)[0].default
            };
          }, {});
          console.log("payloadColorOnly : ", payloadColorOnly);
          const payloadJson = this.keyName.filter(({
            type
          }) => type === "Json").reduce((item, value) => {
            return { ...item,
              [value.key]: this.dataForm.filter(({
                title
              }) => title === value.title)[0].default
            };
          }, {});
          let payload = {};

          if (this.type !== "video") {
            if (this.youtubeId === null) {
              payload = {
                name: this.name,
                resolutionId: this.resolutionId,
                config: {
                  clickUrl: this.url,
                  properties: {}
                }
              };
            } else {
              payload = {
                name: this.name,
                resolutionId: this.resolutionId,
                config: {
                  clickUrl: this.url,
                  youtubeId: this.youtubeId,
                  properties: {}
                }
              };
            }
          } else {
            payload = {
              name: this.name,
              resolutionId: this.resolutionId,
              config: {
                properties: {}
              }
            };
          }

          if (payloadJson !== null) {
            payload.config.properties = Object.assign(payload.config.properties, payloadAudio, payloadJson);
          }

          if (payloadImage.backupImg === undefined) {
            payload.config.properties = Object.assign(payload.config.properties, payloadImage, payloadImage2, payloadTextColor, payloadButton, payloadTextOnly, payloadAudio, payloadTextColor2, payloadColorOnly);
          } else {
            payload.config.backupImg = payloadImage.backupImg;
            delete payloadImage.backupImg;
            payload.config.properties = Object.assign(payload.config.properties, payloadImage, payloadImage2, payloadTextColor, payloadButton, payloadTextOnly, payloadAudio, payloadTextColor2, payloadColorOnly);
          }

          this.$store.dispatch("creative/updateCreative", {
            payload,
            id: this.$route.params.edit
          }).then(res => {
            if (res.status === 201 || res.status === 200 || res.status === 202) {
              const data = {
                id: this.$route.params.edit
              };
              this.$store.dispatch("creative/duplicateCreative", data).then(res => {
                if (res.status === 201) {
                  this.$notifier.showMessage({
                    content: "Creative update and duplicate success",
                    type: "success"
                  });
                  this.$router.push({
                    path: `/creative/edit/${res.data.data.id}`
                  });
                }
              }).catch(() => {});
            }
          }).catch(error => {
            this.$notifier.showMessage({
              content: "Creative failed. Please try again ! " + error,
              type: "failed"
            });
          });
        }
      } else {
        this.$notifier.showMessage({
          content: '"Name" is not allowed to be empty',
          type: "failed"
        });
      }
    },

    async toDataUrl(url, callback) {
      const data = await fetch(url);
      const blob = await data.blob();
      return new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);

        reader.onloadend = () => {
          const base64data = reader.result;
          resolve(base64data);
        };
      });
    },

    setDefaultValue() {
      this.loadingData = true;

      for (let i = 0; i < this.dataForm.length; i++) {
        if (this.dataForm[i].type === "Image") {
          this.defaultImage = this.dataForm[i].default;
          this.loadingData = false;
          this.toDataUrl(this.dataForm[i].default).then(res => {
            const val = {
              index: i,
              title: this.dataForm[i].title,
              type: "Image",
              src: res
            };
            this.onChangeData(val);
          });
        }

        if (this.dataForm[i].type === "Json") {
          this.loadingData = false;
        }
      }

      this.isLoadingDetail = false;
    },

    onChangeData(val) {
      if (this.type === "rmb" || this.type === "video") {
        this.$store.commit("creative/SET_DATA_FORM", val);

        if (this.type !== "video") {
          this.sendToIframe();
        }
      }

      this.newData = [];

      for (let i = 0; i < this.dataImageArrayRaw.length; i++) {
        this.newData.push(this.dataImageArrayRaw[i].img);
      }
    },

    onChangeData2() {
      const data = {
        title: "youtubeId",
        src: this.youtubeId
      };
      this.$store.commit("creative/SET_DATA_FORM", data);
      this.sendToIframe();
    },

    scrollX(e) {
      this.$refs.scroll_container.scrollLeft += e.deltaY;
    },

    sendToIframe() {
      if (this.type === "rmb" || this.type === "video") {
        const payloadImage = this.keyName.filter(({
          type
        }) => type === "Image").reduce((item, value) => {
          return { ...item,
            [value.key]: this.dataForm.filter(({
              title
            }) => title === value.title)[0]
          };
        }, {});
        const payloadImage2 = this.keyName.filter(({
          type
        }) => type === "Image_array").reduce((item, value) => {
          return { ...item,
            [value.key]: this.dataForm.filter(({
              title
            }) => title === value.title)[0]
          };
        }, {});
        const payloadTextColor = this.keyName.filter(({
          type
        }) => type === "Text" || type === "Color").reduce((item, value) => {
          return { ...item,
            [value.key]: this.dataForm.filter(({
              title
            }) => title === value.title)[0]
          };
        }, {});
        const payloadButton = this.keyName.filter(({
          type
        }) => type === "Button").reduce((item, value) => {
          return { ...item,
            [value.key]: this.dataForm.filter(({
              title
            }) => title === value.title)[0]
          };
        }, {});
        const payloadTextOnly = this.keyName.filter(({
          type
        }) => type === "Text_only").reduce((item, value) => {
          return { ...item,
            [value.key]: this.dataForm.filter(({
              title
            }) => title === value.title)[0]
          };
        }, {});
        const payloadAudio = this.keyName.filter(({
          type
        }) => type === "Audio").reduce((item, value) => {
          return { ...item,
            [value.key]: this.selectedAudio
          };
        }, {});
        const payloadTextColor2 = this.keyName.filter(({
          type
        }) => type === "Text_color").reduce((item, value) => {
          return { ...item,
            [value.key]: this.dataForm.filter(({
              title
            }) => title === value.title)[0]
          };
        }, {});
        const payloadColorOnly = this.keyName.filter(({
          type
        }) => type === "Color_pallete").reduce((item, value) => {
          return { ...item,
            [value.key]: this.dataForm.filter(({
              title
            }) => title === value.title)[0].default
          };
        }, {});
        const payloadJson = this.keyName.filter(({
          type
        }) => type === "Json").reduce((item, value) => {
          return { ...item,
            [value.key]: this.dataForm.filter(({
              title
            }) => title === value.title)[0].default
          };
        }, {}); // console.log('payloadColorOnly : ', payloadColorOnly)

        if (this.type === "video") {
          if (this.keyName.some(({
            key
          }) => key === "bodyTxt")) {
            const bodyTxt = this.keyName.filter(({
              key
            }) => key === "bodyTxt").reduce((item, value) => {
              return { ...item,
                [value.key]: this.dataForm.filter(({
                  title
                }) => title === value.title)[0].default
              };
            }, {});
            this.getDuration(bodyTxt.bodyTxt.split("\n").join("\\n"), "text");
          }

          if (this.keyName.some(({
            key
          }) => key === "dataCuaca")) {
            const jsonList = this.keyName.filter(({
              type
            }) => type === "Json").reduce((item, value) => {
              return { ...item,
                [value.key]: this.dataForm.filter(({
                  title
                }) => title === value.title)[0].default
              };
            }, {});
            this.getDuration(jsonList.dataCuaca, "json");
          }

          const configSchema = {
            properties: null,
            resolutions: this.selectedResolution,
            format: this.type
          };
          delete payloadImage.backupImg;
          configSchema.properties = Object.assign(payloadImage, payloadImage2, payloadTextColor, payloadButton, payloadTextOnly, payloadAudio, payloadTextColor2, payloadColorOnly, payloadJson);
          const iframeWin2 = document.getElementById("edit-iframe").contentWindow;
          iframeWin2.postMessage(configSchema, "*");
          this.isLoading = false;
        } else {
          const configSchema = {
            properties: null,
            clickUrl: {
              default: this.url,
              description: ""
            },
            resolutions: this.selectedResolution,
            format: this.type
          };
          configSchema.properties = Object.assign(payloadImage, payloadImage2, payloadTextColor, payloadButton, payloadTextOnly, payloadAudio, payloadTextColor2, payloadColorOnly);
          console.log("schema : ", configSchema);
          const iframeWin2 = document.getElementById("edit-iframe").contentWindow;
          iframeWin2.postMessage(configSchema, "*");
          this.isLoading = false; //   console.log('schema : ', this.dataForm)
          //   const iframeWin2 =
          //     document.getElementById('edit-iframe').contentWindow
          //   iframeWin2.postMessage(this.dataForm, '*')
          //   this.isLoading = false
        }
      }
    },

    refresh() {
      const iframe = document.getElementById("edit-iframe");
      iframe.src = iframe.src + "?c=" + Math.random();
      const iframeWin = document.getElementById("edit-iframe").contentWindow;
      iframeWin.postMessage(this.dataForm, "*"); // if (this.$refs.formEditAudio){
      //   this.$refs.formEditAudio[0].callAudio()
      // }
      // if (this.$refs.formEditCustomSound){
      //   this.$refs.formEditCustomSound[0].togglePlay('play')
      // }
    },

    validateUrl(str) {
      const pattern = new RegExp("^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$", "i"); // fragment locator

      return !!pattern.test(str);
    },

    back() {
      this.$router.push({
        path: "/creative/"
      });
    },

    getAll() {
      this.getData();
    },

    getData() {
      this.$store.commit("creative/SET_CHANGE_RESOLUTION", this.selectedResolution);
      this.isLoadingDetail = true;
      const data = {
        id: this.$route.params.edit
      };
      this.$store.dispatch("creative/getDetail", data).then(res => {
        this.type = res.data.data.template.format;
        this.name = res.data.data.name; // this.dataResolution = res.data.data.configSchema.resolutions

        this.resolutionId = res.data.data.resolution.resolutionId;
        this.url = res.data.data.config.clickUrl;
        this.staticSrc = res.data.data.template.staticSrc;
        const thumbnail = res.data.data.template.thumbnail;

        if (this.isValidUrl(thumbnail)) {
          this.thumbnail = thumbnail;
        } else {
          this.thumbnail = this.$config.baseURL + "obs?fileKey=" + thumbnail;
        }

        this.resolution.height = res.data.data.resolution.height;
        this.resolution.width = res.data.data.resolution.width;
        this.templateName = res.data.data.template.name;
        this.templateId = res.data.data.template.templateId;
        const configSchema = res.data.data.configSchema;

        if (configSchema !== null) {
          if (configSchema.youtubeId !== undefined) {
            this.youtubeId = configSchema.youtubeId.currentValue;
          }
        }

        this.setDefaultValue();
        this.getResolutionTemplate();
        console.log("data : ", res.data.data);

        if (res.data.data.config.properties.dataCuaca && Object.keys(res.data.data.config.properties.dataCuaca).length > 0) {
          this.getDuration(res.data.data.config.properties.dataCuaca, "json");
        } else {
          this.getDuration(res.data.data.config.properties.bodyTxt.split("\n").join("\\n"), "text");
        }
      }).catch(() => {
        this.imageLoaded = false;
        this.isLoading = false;
      });
    },

    isValidUrl(string) {
      try {
        // eslint-disable-next-line no-new
        new URL(string);
        return true;
      } catch (err) {
        return false;
      }
    },

    async getTemplateDetail() {
      this.$store.commit("creative/SET_CHANGE_RESOLUTION", this.selectedResolution);
      this.isLoadingDetail = true;
      const payload = {
        id: this.templateId,
        resolution: this.selectedResolution
      };
      const endpoint = `template/${payload.id}?orgId=${this.orgId}&resolutionId=${payload.resolution}`;
      await this.$axios.get(endpoint).then(res => {
        this.templateName = res.data.data.name;
        this.type = res.data.data.format;

        if (this.type === "display") {
          this.staticSrc = this.$config.baseURL + "obs?fileKey=" + res.data.data.configExample.properties.image;
        }

        if (this.type === "rmb") {
          this.staticSrc = res.data.data.staticSrc;
        }

        if (this.type === "video") {
          this.staticSrc = res.data.data.staticSrc;
        }

        const configSchema = res.data.data.configSchema;

        if (configSchema !== null) {
          this.resolutionId = configSchema.resolutions[0].id;
          this.resolution.height = configSchema.resolutions[0].height;
          this.resolution.width = configSchema.resolutions[0].width;
        }

        this.isLoadingDetail = false;
        this.setDefaultValue();
      }).catch(e => {
        this.$notifier.showMessage({
          content: "Error status code: " + e.response.status,
          type: "failed"
        });
      });
    },

    getResolutionTemplate() {
      this.$store.dispatch("template/getResolutionByTemplate", {
        id: this.templateId
      }).then(res => {
        if (res.status === 201 || res.status === 200) {
          const data = res.data.data;

          if (data.length > 0) {
            const id = this.resolutionId;
            this.selectedResolution = data.find(item => item.id === parseInt(id)).id;
            this.dataResolution = data;
            this.$store.commit("creative/SET_CHANGE_RESOLUTION", this.selectedResolution);

            if (this.dataResolution[0].height > 1000 || this.dataResolution[0].width > 1000) {
              this.showZoom = true;
            } else {
              this.showZoom = false;
            }
          }
        }
      }).catch(() => {});
    },

    updateCreative() {
      if (this.imageData === "" && this.imageUrl === "") {
        this.$notifier.showMessage({
          content: "Please select image",
          type: "failed"
        });
      }

      if (this.imageData !== "" && this.imageUrl === "") {
        this.$notifier.showMessage({
          content: "Please select image",
          type: "failed"
        });
      }

      if (this.imageData === "" && this.imageUrl !== "") {
        if (this.validateUrl(this.url)) {
          this.$notifier.showMessage({
            content: "Edit creative...",
            type: "loading"
          });
          const x = setTimeout(() => this.$store.dispatch("creative/updateCreative", {
            name: this.name,
            id: this.$route.params.edit,
            resolutionId: this.resolutionId,
            src: this.fileKey,
            url: this.url,
            thumbnail: this.fileKey,
            resolutions: this.resolution.width + "x" + this.resolution.height
          }).then(res => {
            if (res.status === 200 || res.status === 201 || res.status === 202) {
              this.$notifier.showMessage({
                content: "Creative edited.",
                type: "success"
              });
              clearInterval(x);
              this.$router.push({
                path: "/creative/"
              });
            } else {
              const keys = Object.keys(res.data.data.errors[0]);
              const arr = [];
              keys.forEach((key, index) => {
                arr.push(res.data.data.errors[0][key]);
              });
              this.$notifier.showMessage({
                content: "Creative edit failed : " + arr.join(", "),
                type: "failed"
              });
              clearInterval(x);
            }
          }).catch(error => {
            this.$notifier.showMessage({
              content: "Creative edit failed : " + error,
              type: "failed"
            });
            clearInterval(x);
          }), 1000);
        } else {
          this.$notifier.showMessage({
            content: "URL is not valid",
            type: "failed"
          });
        }
      }

      if (this.imageData !== "" && this.imageUrl !== "") {
        if (this.validateUrl(this.url)) {
          this.saveCreative();
        } else {
          this.$notifier.showMessage({
            content: "URL is not valid",
            type: "failed"
          });
        }
      }
    }

  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(20)["URL"]))

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Audio_vue_vue_type_style_index_0_id_4f6001c2_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(281);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Audio_vue_vue_type_style_index_0_id_4f6001c2_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Audio_vue_vue_type_style_index_0_id_4f6001c2_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Audio_vue_vue_type_style_index_0_id_4f6001c2_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Audio_vue_vue_type_style_index_0_id_4f6001c2_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 344:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(7);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n@font-face{\n  font-family:\"Cabin\";\n\n  src:local(\"Cabin\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\")\n}\n@font-face{\n  font-family:\"Roboto Mono\";\n\n  src:local(\"Roboto Mono\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\")\n}\n.header-1[data-v-4f6001c2]{\n  font-size:32px\n}\n.header-1[data-v-4f6001c2],.header-2[data-v-4f6001c2]{\n  font-family:\"Cabin\";\n  font-weight:600;\n  color:#454545\n}\n.header-2[data-v-4f6001c2]{\n  font-size:28px\n}\n.header-3[data-v-4f6001c2]{\n  font-size:24px\n}\n.header-3[data-v-4f6001c2],.header-4[data-v-4f6001c2]{\n  font-family:\"Cabin\";\n  font-weight:600;\n  color:#454545\n}\n.header-4[data-v-4f6001c2]{\n  font-size:20px\n}\n.header-5[data-v-4f6001c2]{\n  font-size:18px\n}\n.header-5[data-v-4f6001c2],.header-6[data-v-4f6001c2]{\n  font-family:\"Cabin\";\n  font-weight:600;\n  color:#454545\n}\n.header-6[data-v-4f6001c2]{\n  font-size:14px\n}\n.subtitle-1[data-v-4f6001c2]{\n  color:#757575\n}\n.subtitle-1[data-v-4f6001c2],.subtitle-2[data-v-4f6001c2]{\n  font-family:\"Cabin\";\n  font-size:16px;\n  font-weight:400\n}\n.subtitle-2[data-v-4f6001c2]{\n  color:#454545\n}\n.no-select[data-v-4f6001c2]{\n  -webkit-touch-callout:none;\n  -webkit-user-select:none;\n  -moz-user-select:none;\n  user-select:none\n}\n.mx-icon-double-left[data-v-4f6001c2]:after,.mx-icon-double-left[data-v-4f6001c2]:before,.mx-icon-double-right[data-v-4f6001c2]:after,.mx-icon-double-right[data-v-4f6001c2]:before,.mx-icon-left[data-v-4f6001c2]:before,.mx-icon-right[data-v-4f6001c2]:before{\n  content:\"\";\n  position:relative;\n  top:-1px;\n  display:inline-block;\n  width:10px;\n  height:10px;\n  vertical-align:middle;\n  border-color:currentcolor;\n  border-style:solid;\n  border-width:2px 0 0 2px;\n  border-radius:1px;\n  box-sizing:border-box;\n  transform-origin:center;\n  transform:rotate(-45deg) scale(.7)\n}\n.mx-icon-double-left[data-v-4f6001c2]:after{\n  left:-4px\n}\n.mx-icon-double-right[data-v-4f6001c2]:before{\n  left:4px\n}\n.mx-icon-double-right[data-v-4f6001c2]:after,.mx-icon-double-right[data-v-4f6001c2]:before,.mx-icon-right[data-v-4f6001c2]:before{\n  transform:rotate(135deg) scale(.7)\n}\n.mx-btn[data-v-4f6001c2]{\n  box-sizing:border-box;\n  line-height:1;\n  font-size:14px;\n  font-weight:500;\n  padding:7px 15px;\n  margin:0;\n  cursor:pointer;\n  background-color:transparent;\n  outline:none;\n  border:1px solid rgba(0,0,0,.1);\n  border-radius:4px;\n  color:#73879c;\n  white-space:nowrap\n}\n.mx-btn[data-v-4f6001c2]:hover{\n  border-color:#1284e7;\n  color:#1284e7\n}\n.mx-btn.disabled[data-v-4f6001c2],.mx-btn[data-v-4f6001c2]:disabled{\n  color:#ccc;\n  cursor:not-allowed\n}\n.mx-btn-text[data-v-4f6001c2]{\n  border:0;\n  padding:0 4px;\n  text-align:left;\n  line-height:inherit\n}\n.mx-scrollbar[data-v-4f6001c2]{\n  height:100%\n}\n.mx-scrollbar:hover .mx-scrollbar-track[data-v-4f6001c2]{\n  opacity:1\n}\n.mx-scrollbar-wrap[data-v-4f6001c2]{\n  height:100%;\n  overflow-x:hidden;\n  overflow-y:auto\n}\n.mx-scrollbar-track[data-v-4f6001c2]{\n  position:absolute;\n  top:2px;\n  right:2px;\n  bottom:2px;\n  width:6px;\n  z-index:1;\n  border-radius:4px;\n  opacity:0;\n  transition:opacity .24s ease-out\n}\n.mx-scrollbar-track .mx-scrollbar-thumb[data-v-4f6001c2]{\n  position:absolute;\n  width:100%;\n  height:0;\n  cursor:pointer;\n  border-radius:inherit;\n  background-color:rgba(144,147,153,.3);\n  transition:background-color .3s\n}\n.mx-zoom-in-down-enter-active[data-v-4f6001c2],.mx-zoom-in-down-leave-active[data-v-4f6001c2]{\n  opacity:1;\n  transform:scaleY(1);\n  transition:transform .3s cubic-bezier(.23,1,.32,1),opacity .3s cubic-bezier(.23,1,.32,1);\n  transform-origin:center top\n}\n.mx-zoom-in-down-enter[data-v-4f6001c2],.mx-zoom-in-down-enter-from[data-v-4f6001c2],.mx-zoom-in-down-leave-to[data-v-4f6001c2]{\n  opacity:0;\n  transform:scaleY(0)\n}\n.mx-datepicker[data-v-4f6001c2]{\n  position:relative;\n  display:inline-block;\n  width:210px\n}\n.mx-datepicker svg[data-v-4f6001c2]{\n  width:1em;\n  height:1em;\n  vertical-align:-.15em;\n  fill:currentColor;\n  overflow:hidden\n}\n.mx-datepicker-range[data-v-4f6001c2]{\n  width:320px\n}\n.mx-datepicker-inline[data-v-4f6001c2]{\n  width:auto\n}\n.mx-input-wrapper[data-v-4f6001c2]{\n  position:relative\n}\n.mx-input[data-v-4f6001c2]{\n  display:inline-block;\n  box-sizing:border-box;\n  width:100%;\n  height:34px;\n  padding:6px 30px 6px 10px;\n  font-size:14px;\n  line-height:1.4;\n  color:#555;\n  background-color:#fff;\n  border:1px solid #ccc;\n  border-radius:4px;\n  box-shadow:inset 0 1px 1px rgba(0,0,0,.075)\n}\n.mx-input[data-v-4f6001c2]:focus,.mx-input[data-v-4f6001c2]:hover{\n  border-color:#409aff\n}\n.mx-input.disabled[data-v-4f6001c2],.mx-input[data-v-4f6001c2]:disabled{\n  color:#ccc;\n  background-color:#f3f3f3;\n  border-color:#ccc;\n  cursor:not-allowed\n}\n.mx-input[data-v-4f6001c2]:focus{\n  outline:none\n}\n.mx-input[data-v-4f6001c2]::-ms-clear{\n  display:none\n}\n.mx-icon-calendar[data-v-4f6001c2],.mx-icon-clear[data-v-4f6001c2]{\n  position:absolute;\n  top:50%;\n  right:8px;\n  transform:translateY(-50%);\n  font-size:16px;\n  line-height:1;\n  color:rgba(0,0,0,.5);\n  vertical-align:middle\n}\n.mx-icon-clear[data-v-4f6001c2]{\n  cursor:pointer\n}\n.mx-icon-clear[data-v-4f6001c2]:hover{\n  color:rgba(0,0,0,.8)\n}\n.mx-datepicker-main[data-v-4f6001c2]{\n  font:14px/1.5 \"Helvetica Neue\",Helvetica,Arial,\"Microsoft Yahei\",sans-serif;\n  color:#73879c;\n  background-color:#fff;\n  border:1px solid #e8e8e8\n}\n.mx-datepicker-popup[data-v-4f6001c2]{\n  position:absolute;\n  margin-top:1px;\n  margin-bottom:1px;\n  box-shadow:0 6px 12px rgba(0,0,0,.175);\n  z-index:2001\n}\n.mx-datepicker-sidebar[data-v-4f6001c2]{\n  float:left;\n  box-sizing:border-box;\n  width:100px;\n  padding:6px;\n  overflow:auto\n}\n.mx-datepicker-sidebar+.mx-datepicker-content[data-v-4f6001c2]{\n  margin-left:100px;\n  border-left:1px solid #e8e8e8\n}\n.mx-datepicker-body[data-v-4f6001c2]{\n  position:relative;\n  -webkit-user-select:none;\n     -moz-user-select:none;\n          user-select:none\n}\n.mx-btn-shortcut[data-v-4f6001c2]{\n  line-height:24px\n}\n.mx-range-wrapper[data-v-4f6001c2]{\n  display:flex\n}\n@media(max-width:750px){\n.mx-range-wrapper[data-v-4f6001c2]{\n    flex-direction:column\n}\n}\n.mx-datepicker-header[data-v-4f6001c2]{\n  padding:6px 8px;\n  border-bottom:1px solid #e8e8e8\n}\n.mx-datepicker-footer[data-v-4f6001c2]{\n  padding:6px 8px;\n  text-align:right;\n  border-top:1px solid #e8e8e8\n}\n.mx-calendar[data-v-4f6001c2]{\n  box-sizing:border-box;\n  width:248px;\n  padding:6px 12px\n}\n.mx-calendar+.mx-calendar[data-v-4f6001c2]{\n  border-left:1px solid #e8e8e8\n}\n.mx-calendar-header[data-v-4f6001c2],.mx-time-header[data-v-4f6001c2]{\n  box-sizing:border-box;\n  height:34px;\n  line-height:34px;\n  text-align:center;\n  overflow:hidden\n}\n.mx-btn-icon-double-left[data-v-4f6001c2],.mx-btn-icon-left[data-v-4f6001c2]{\n  float:left\n}\n.mx-btn-icon-double-right[data-v-4f6001c2],.mx-btn-icon-right[data-v-4f6001c2]{\n  float:right\n}\n.mx-calendar-header-label[data-v-4f6001c2]{\n  font-size:14px\n}\n.mx-calendar-decade-separator[data-v-4f6001c2]{\n  margin:0 2px\n}\n.mx-calendar-decade-separator[data-v-4f6001c2]:after{\n  content:\"~\"\n}\n.mx-calendar-content[data-v-4f6001c2]{\n  position:relative;\n  height:224px;\n  box-sizing:border-box\n}\n.mx-calendar-content .cell[data-v-4f6001c2]{\n  cursor:pointer\n}\n.mx-calendar-content .cell[data-v-4f6001c2]:hover{\n  color:#73879c;\n  background-color:rgb(243.15,248.85,253.8)\n}\n.mx-calendar-content .cell.active[data-v-4f6001c2]{\n  color:#fff;\n  background-color:#1284e7\n}\n.mx-calendar-content .cell.hover-in-range[data-v-4f6001c2],.mx-calendar-content .cell.in-range[data-v-4f6001c2]{\n  color:#73879c;\n  background-color:rgb(219.45,236.55,251.4)\n}\n.mx-calendar-content .cell.disabled[data-v-4f6001c2]{\n  cursor:not-allowed;\n  color:#ccc;\n  background-color:#f3f3f3\n}\n.mx-calendar-week-mode .mx-date-row[data-v-4f6001c2]{\n  cursor:pointer\n}\n.mx-calendar-week-mode .mx-date-row[data-v-4f6001c2]:hover{\n  background-color:rgb(243.15,248.85,253.8)\n}\n.mx-calendar-week-mode .mx-date-row.mx-active-week[data-v-4f6001c2]{\n  background-color:rgb(219.45,236.55,251.4)\n}\n.mx-calendar-week-mode .mx-date-row .cell.active[data-v-4f6001c2],.mx-calendar-week-mode .mx-date-row .cell[data-v-4f6001c2]:hover{\n  color:inherit;\n  background-color:transparent\n}\n.mx-week-number[data-v-4f6001c2]{\n  opacity:.5\n}\n.mx-table[data-v-4f6001c2]{\n  table-layout:fixed;\n  border-collapse:separate;\n  border-spacing:0;\n  width:100%;\n  height:100%;\n  box-sizing:border-box;\n  text-align:center\n}\n.mx-table th[data-v-4f6001c2]{\n  font-weight:500\n}\n.mx-table td[data-v-4f6001c2],.mx-table th[data-v-4f6001c2]{\n  padding:0;\n  vertical-align:middle\n}\n.mx-table-date td[data-v-4f6001c2],.mx-table-date th[data-v-4f6001c2]{\n  font-size:12px\n}\n.mx-table-date .today[data-v-4f6001c2]{\n  color:rgb(41.7,144.3,233.4)\n}\n.mx-table-date .cell.not-current-month[data-v-4f6001c2]{\n  color:#ccc;\n  background:none\n}\n.mx-time[data-v-4f6001c2]{\n  flex:1;\n  width:224px;\n  background:#fff\n}\n.mx-time+.mx-time[data-v-4f6001c2]{\n  border-left:1px solid #e8e8e8\n}\n.mx-calendar-time[data-v-4f6001c2]{\n  position:absolute;\n  top:0;\n  left:0;\n  width:100%;\n  height:100%\n}\n.mx-time-header[data-v-4f6001c2]{\n  border-bottom:1px solid #e8e8e8\n}\n.mx-time-content[data-v-4f6001c2]{\n  height:224px;\n  box-sizing:border-box;\n  overflow:hidden\n}\n.mx-time-columns[data-v-4f6001c2]{\n  display:flex;\n  width:100%;\n  height:100%;\n  overflow:hidden\n}\n.mx-time-column[data-v-4f6001c2]{\n  flex:1;\n  position:relative;\n  border-left:1px solid #e8e8e8;\n  text-align:center\n}\n.mx-time-column[data-v-4f6001c2]:first-child{\n  border-left:0\n}\n.mx-time-column .mx-time-list[data-v-4f6001c2]{\n  margin:0;\n  padding:0;\n  list-style:none\n}\n.mx-time-column .mx-time-list[data-v-4f6001c2]:after{\n  content:\"\";\n  display:block;\n  height:192px\n}\n.mx-time-column .mx-time-item[data-v-4f6001c2]{\n  cursor:pointer;\n  font-size:12px;\n  height:32px;\n  line-height:32px\n}\n.mx-time-column .mx-time-item[data-v-4f6001c2]:hover{\n  color:#73879c;\n  background-color:rgb(243.15,248.85,253.8)\n}\n.mx-time-column .mx-time-item.active[data-v-4f6001c2]{\n  color:#1284e7;\n  background-color:transparent;\n  font-weight:700\n}\n.mx-time-column .mx-time-item.disabled[data-v-4f6001c2]{\n  cursor:not-allowed;\n  color:#ccc;\n  background-color:#f3f3f3\n}\n.mx-time-option[data-v-4f6001c2]{\n  cursor:pointer;\n  padding:8px 10px;\n  font-size:14px;\n  line-height:20px\n}\n.mx-time-option[data-v-4f6001c2]:hover{\n  color:#73879c;\n  background-color:rgb(243.15,248.85,253.8)\n}\n.mx-time-option.active[data-v-4f6001c2]{\n  color:#1284e7;\n  background-color:transparent;\n  font-weight:700\n}\n.mx-time-option.disabled[data-v-4f6001c2]{\n  cursor:not-allowed;\n  color:#ccc;\n  background-color:#f3f3f3\n}\n.el-input .el-input__inner[data-v-4f6001c2]:focus,.el-range-editor.is-active[data-v-4f6001c2],.el-range-editor.is-active[data-v-4f6001c2]:hover,.el-select .el-input.is-focus .el-input__inner[data-v-4f6001c2],.el-select .el-input__inner[data-v-4f6001c2]:focus,.el-textarea .el-input__inner[data-v-4f6001c2]:focus{\n  border:1.3px solid #1b63d4!important;\n  box-shadow:0 2px 10px rgba(187,209,243,.5)\n}\n.mx-input[data-v-4f6001c2]{\n  height:40px!important\n}\n.mx-datepicker-sidebar[data-v-4f6001c2]{\n  width:151px!important\n}\n.mx-table-date td[data-v-4f6001c2],.mx-table-date th[data-v-4f6001c2]{\n  height:32px;\n  font-size:14px!important\n}\n.mx-btn-shortcut[data-v-4f6001c2]{\n  display:block;\n  padding:0 6px;\n  line-height:30px!important\n}\n[data-v-4f6001c2]:root{\n  --vs-line-height:1.6\n}\n.btn-popover[data-v-4f6001c2]{\n  height:40px;\n  background-color:#fff;\n  width:100%;\n  padding:10px;\n  cursor:pointer\n}\n.btn-popover .title-1[data-v-4f6001c2]{\n  font-weight:400;\n  font-size:16px;\n  color:#454545;\n  margin-left:10px\n}\n.btn-popover[data-v-4f6001c2]:hover{\n  background-color:#f3f4f6\n}\n.el-popover[data-v-4f6001c2]{\n  padding:0!important;\n  border-radius:5px!important\n}\n.el-upload[data-v-4f6001c2]{\n  width:100%\n}\n.el-upload-dragger[data-v-4f6001c2]{\n  width:100%!important;\n  background:linear-gradient(0deg,rgba(33,150,243,.03),rgba(33,150,243,.03)),#fff!important;\n  border:1px dashed transparent!important;\n  border-radius:5px!important;\n  height:100%!important\n}\n.kg-popup[data-v-4f6001c2]{\n  transition:all .5s ease-in-out;\n  position:fixed;\n  top:0;\n  left:50%;\n  transform:translateX(-50%)\n}\n.noselect[data-v-4f6001c2]{\n  -webkit-touch-callout:none;\n  -webkit-user-select:none;\n  -moz-user-select:none;\n  user-select:none\n}\n.ProseMirror[data-v-4f6001c2]{\n  border:0;\n  outline:none\n}\n.ProseMirror>*+*[data-v-4f6001c2]{\n  margin-top:.75em\n}\n.ProseMirror ol[data-v-4f6001c2],.ProseMirror ul[data-v-4f6001c2]{\n  padding:0 1rem\n}\n.ProseMirror h1[data-v-4f6001c2],.ProseMirror h2[data-v-4f6001c2],.ProseMirror h3[data-v-4f6001c2],.ProseMirror h4[data-v-4f6001c2],.ProseMirror h5[data-v-4f6001c2],.ProseMirror h6[data-v-4f6001c2]{\n  line-height:1.1\n}\n.ProseMirror code[data-v-4f6001c2]{\n  background-color:rgba(97,97,97,.1);\n  color:#616161\n}\n.ProseMirror pre[data-v-4f6001c2]{\n  background:#0d0d0d;\n  color:#fff;\n  font-family:\"JetBrainsMono\",monospace;\n  padding:.75rem 1rem;\n  border-radius:.5rem\n}\n.ProseMirror pre code[data-v-4f6001c2]{\n  color:inherit;\n  padding:0;\n  background:none;\n  font-size:.8rem\n}\n.ProseMirror img[data-v-4f6001c2]{\n  max-width:100%;\n  height:auto\n}\n.ProseMirror blockquote[data-v-4f6001c2]{\n  padding-left:1rem;\n  border-left:2px solid rgba(13,13,13,.1)\n}\n.ProseMirror hr[data-v-4f6001c2]{\n  border:none;\n  border-top:2px solid rgba(13,13,13,.1);\n  margin:2rem 0\n}\n.ProseMirror[data-v-4f6001c2]:focus-visible{\n  outline:none\n}\n.el-color-picker__trigger[data-v-4f6001c2]{\n  border:0!important;\n  padding:0!important;\n  outline:none!important\n}\n.el-color-picker__icon[data-v-4f6001c2]{\n  visibility:hidden!important\n}\n.el-color-picker--mini .el-color-picker__trigger[data-v-4f6001c2],.el-color-picker__color[data-v-4f6001c2]{\n  height:22px!important;\n  width:22px!important\n}\n.el-color-picker__color[data-v-4f6001c2]{\n  padding:0!important;\n  border:0!important\n}\n.el-color-picker__empty[data-v-4f6001c2]{\n  padding-top:1.4px!important\n}\n.el-color-picker--mini[data-v-4f6001c2]{\n  height:22px!important\n}\n.el-color-picker__color-inner[data-v-4f6001c2]{\n  border:1px solid #e2e2e2!important\n}\n.el-table thead[data-v-4f6001c2]{\n  color:#5c6b7a!important;\n  font-family:\"Cabin\"!important\n}\n.el-table thead[data-v-4f6001c2],.th[data-v-4f6001c2]{\n  font-weight:600!important\n}\n.el-button--mini[data-v-4f6001c2],.el-button--text[data-v-4f6001c2],.el-date-range-picker__header div[data-v-4f6001c2],.el-date-table td span[data-v-4f6001c2],.el-input__inner[data-v-4f6001c2],.el-picker-panel__shortcut[data-v-4f6001c2],.el-select-dropdown__item[data-v-4f6001c2],.el-select-dropdown__item.hover[data-v-4f6001c2],.el-select-dropdown__item[data-v-4f6001c2]:hover,.el-time-spinner__item[data-v-4f6001c2]{\n  font-family:\"Cabin\"!important\n}\n.el-progress-bar__inner[data-v-4f6001c2],.el-progress-bar__outer[data-v-4f6001c2]{\n  border-bottom-left-radius:100px!important;\n  border-top-left-radius:100px!important\n}\n.el-dropdown .el-dropdown__caret-button[data-v-4f6001c2]{\n  bottom:2px!important\n}\n.el-dropdown-menu[data-v-4f6001c2],.el-dropdown-menu__item[data-v-4f6001c2]{\n  padding:0!important\n}\nbutton[data-v-4f6001c2]:active,button[data-v-4f6001c2]:focus{\n  outline:0!important\n}\n.el-input-group__append[data-v-4f6001c2]{\n  padding:0!important\n}\n.el-input-group__prepend[data-v-4f6001c2]{\n  padding-left:5px!important;\n  padding-right:5px!important\n}\n.el-menu-item[data-v-4f6001c2],.el-submenu__title[data-v-4f6001c2]{\n  height:40px!important;\n  line-height:40px!important;\n  font-family:\"Cabin\"!important;\n  font-size:16px!important;\n  font-style:normal!important;\n  font-weight:400!important;\n  color:#5c6b7a!important;\n  margin-bottom:10px!important;\n  border-left:4px solid transparent!important\n}\n.el-menu-item.is-active[data-v-4f6001c2]{\n  color:#1b63d4!important;\n  font-weight:600!important;\n  border-left:4px solid #1b63d4!important;\n  border-top-left-radius:2px!important;\n  border-bottom-left-radius:2px!important\n}\n.el-menu--collapse[data-v-4f6001c2]{\n  width:80px!important\n}\n.el-menu[data-v-4f6001c2]{\n  border-right:0!important\n}\n.el-dialog__body[data-v-4f6001c2],.el-dialog__header[data-v-4f6001c2]{\n  padding:0!important\n}\n.el-dialog[data-v-4f6001c2]{\n  border-radius:10px!important\n}\n.card-dialog[data-v-4f6001c2]{\n  padding:20px!important\n}\n.vue-swatches__trigger[data-v-4f6001c2]{\n  width:22px!important;\n  height:22px!important;\n  border-radius:2px!important\n}\n.vue-swatches[data-v-4f6001c2]{\n  height:22px!important\n}\n.CodeMirror[data-v-4f6001c2]{\n  height:calc(100vh - 150px)!important\n}\n.vue-swatches__trigger[data-v-4f6001c2]{\n  border:1px solid #e2e2e2!important\n}\n[data-v-4f6001c2]::-webkit-scrollbar{\n  width:9px;\n  height:18px\n}\n[data-v-4f6001c2]::-webkit-scrollbar-thumb{\n  height:6px;\n  border:2px solid transparent;\n  background-clip:padding-box;\n  background-color:#e2e2e2;\n  -webkit-border-radius:7px\n}\n[data-v-4f6001c2]::-webkit-scrollbar-button{\n  display:none;\n  width:0;\n  height:0\n}\n[data-v-4f6001c2]::-webkit-scrollbar-corner{\n  background-color:transparent\n}\n.option-card[data-v-4f6001c2]{\n  height:470px;\n  overflow-y:scroll;\n  overflow-x:hidden\n}\n.option-card .list-card[data-v-4f6001c2]{\n  width:100%;\n  height:60px;\n  background:#fff;\n  border:1px solid #c3ced9;\n  border-radius:5px;\n  padding-left:12px;\n  padding-right:12px;\n  margin-bottom:8px\n}\n.option-card .list-card .circle[data-v-4f6001c2]{\n  height:20px;\n  width:20px;\n  border-radius:50%;\n  border:1px solid #7a8a99;\n  cursor:pointer\n}\n.option-card .list-card .circle-active[data-v-4f6001c2]{\n  height:10px;\n  width:10px;\n  background:#1b63d4;\n  border-radius:50%\n}\n.option-card .list-card .title-option[data-v-4f6001c2]{\n  font-family:\"Cabin\";\n  font-style:normal;\n  font-weight:400;\n  font-size:16px;\n  color:#5c6b7a;\n  margin-left:12px\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomSound_vue_vue_type_style_index_0_id_477e18a9_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(282);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomSound_vue_vue_type_style_index_0_id_477e18a9_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomSound_vue_vue_type_style_index_0_id_477e18a9_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomSound_vue_vue_type_style_index_0_id_477e18a9_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomSound_vue_vue_type_style_index_0_id_477e18a9_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 346:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(7);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n@font-face{\n  font-family:\"Cabin\";\n\n  src:local(\"Cabin\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\")\n}\n@font-face{\n  font-family:\"Roboto Mono\";\n\n  src:local(\"Roboto Mono\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\")\n}\n.header-1[data-v-477e18a9]{\n  font-size:32px\n}\n.header-1[data-v-477e18a9],.header-2[data-v-477e18a9]{\n  font-family:\"Cabin\";\n  font-weight:600;\n  color:#454545\n}\n.header-2[data-v-477e18a9]{\n  font-size:28px\n}\n.header-3[data-v-477e18a9]{\n  font-size:24px\n}\n.header-3[data-v-477e18a9],.header-4[data-v-477e18a9]{\n  font-family:\"Cabin\";\n  font-weight:600;\n  color:#454545\n}\n.header-4[data-v-477e18a9]{\n  font-size:20px\n}\n.header-5[data-v-477e18a9]{\n  font-size:18px\n}\n.header-5[data-v-477e18a9],.header-6[data-v-477e18a9]{\n  font-family:\"Cabin\";\n  font-weight:600;\n  color:#454545\n}\n.header-6[data-v-477e18a9]{\n  font-size:14px\n}\n.subtitle-1[data-v-477e18a9]{\n  color:#757575\n}\n.subtitle-1[data-v-477e18a9],.subtitle-2[data-v-477e18a9]{\n  font-family:\"Cabin\";\n  font-size:16px;\n  font-weight:400\n}\n.subtitle-2[data-v-477e18a9]{\n  color:#454545\n}\n.no-select[data-v-477e18a9]{\n  -webkit-touch-callout:none;\n  -webkit-user-select:none;\n  -moz-user-select:none;\n  user-select:none\n}\n.mx-icon-double-left[data-v-477e18a9]:after,.mx-icon-double-left[data-v-477e18a9]:before,.mx-icon-double-right[data-v-477e18a9]:after,.mx-icon-double-right[data-v-477e18a9]:before,.mx-icon-left[data-v-477e18a9]:before,.mx-icon-right[data-v-477e18a9]:before{\n  content:\"\";\n  position:relative;\n  top:-1px;\n  display:inline-block;\n  width:10px;\n  height:10px;\n  vertical-align:middle;\n  border-color:currentcolor;\n  border-style:solid;\n  border-width:2px 0 0 2px;\n  border-radius:1px;\n  box-sizing:border-box;\n  transform-origin:center;\n  transform:rotate(-45deg) scale(.7)\n}\n.mx-icon-double-left[data-v-477e18a9]:after{\n  left:-4px\n}\n.mx-icon-double-right[data-v-477e18a9]:before{\n  left:4px\n}\n.mx-icon-double-right[data-v-477e18a9]:after,.mx-icon-double-right[data-v-477e18a9]:before,.mx-icon-right[data-v-477e18a9]:before{\n  transform:rotate(135deg) scale(.7)\n}\n.mx-btn[data-v-477e18a9]{\n  box-sizing:border-box;\n  line-height:1;\n  font-size:14px;\n  font-weight:500;\n  padding:7px 15px;\n  margin:0;\n  cursor:pointer;\n  background-color:transparent;\n  outline:none;\n  border:1px solid rgba(0,0,0,.1);\n  border-radius:4px;\n  color:#73879c;\n  white-space:nowrap\n}\n.mx-btn[data-v-477e18a9]:hover{\n  border-color:#1284e7;\n  color:#1284e7\n}\n.mx-btn.disabled[data-v-477e18a9],.mx-btn[data-v-477e18a9]:disabled{\n  color:#ccc;\n  cursor:not-allowed\n}\n.mx-btn-text[data-v-477e18a9]{\n  border:0;\n  padding:0 4px;\n  text-align:left;\n  line-height:inherit\n}\n.mx-scrollbar[data-v-477e18a9]{\n  height:100%\n}\n.mx-scrollbar:hover .mx-scrollbar-track[data-v-477e18a9]{\n  opacity:1\n}\n.mx-scrollbar-wrap[data-v-477e18a9]{\n  height:100%;\n  overflow-x:hidden;\n  overflow-y:auto\n}\n.mx-scrollbar-track[data-v-477e18a9]{\n  position:absolute;\n  top:2px;\n  right:2px;\n  bottom:2px;\n  width:6px;\n  z-index:1;\n  border-radius:4px;\n  opacity:0;\n  transition:opacity .24s ease-out\n}\n.mx-scrollbar-track .mx-scrollbar-thumb[data-v-477e18a9]{\n  position:absolute;\n  width:100%;\n  height:0;\n  cursor:pointer;\n  border-radius:inherit;\n  background-color:rgba(144,147,153,.3);\n  transition:background-color .3s\n}\n.mx-zoom-in-down-enter-active[data-v-477e18a9],.mx-zoom-in-down-leave-active[data-v-477e18a9]{\n  opacity:1;\n  transform:scaleY(1);\n  transition:transform .3s cubic-bezier(.23,1,.32,1),opacity .3s cubic-bezier(.23,1,.32,1);\n  transform-origin:center top\n}\n.mx-zoom-in-down-enter[data-v-477e18a9],.mx-zoom-in-down-enter-from[data-v-477e18a9],.mx-zoom-in-down-leave-to[data-v-477e18a9]{\n  opacity:0;\n  transform:scaleY(0)\n}\n.mx-datepicker[data-v-477e18a9]{\n  position:relative;\n  display:inline-block;\n  width:210px\n}\n.mx-datepicker svg[data-v-477e18a9]{\n  width:1em;\n  height:1em;\n  vertical-align:-.15em;\n  fill:currentColor;\n  overflow:hidden\n}\n.mx-datepicker-range[data-v-477e18a9]{\n  width:320px\n}\n.mx-datepicker-inline[data-v-477e18a9]{\n  width:auto\n}\n.mx-input-wrapper[data-v-477e18a9]{\n  position:relative\n}\n.mx-input[data-v-477e18a9]{\n  display:inline-block;\n  box-sizing:border-box;\n  width:100%;\n  height:34px;\n  padding:6px 30px 6px 10px;\n  font-size:14px;\n  line-height:1.4;\n  color:#555;\n  background-color:#fff;\n  border:1px solid #ccc;\n  border-radius:4px;\n  box-shadow:inset 0 1px 1px rgba(0,0,0,.075)\n}\n.mx-input[data-v-477e18a9]:focus,.mx-input[data-v-477e18a9]:hover{\n  border-color:#409aff\n}\n.mx-input.disabled[data-v-477e18a9],.mx-input[data-v-477e18a9]:disabled{\n  color:#ccc;\n  background-color:#f3f3f3;\n  border-color:#ccc;\n  cursor:not-allowed\n}\n.mx-input[data-v-477e18a9]:focus{\n  outline:none\n}\n.mx-input[data-v-477e18a9]::-ms-clear{\n  display:none\n}\n.mx-icon-calendar[data-v-477e18a9],.mx-icon-clear[data-v-477e18a9]{\n  position:absolute;\n  top:50%;\n  right:8px;\n  transform:translateY(-50%);\n  font-size:16px;\n  line-height:1;\n  color:rgba(0,0,0,.5);\n  vertical-align:middle\n}\n.mx-icon-clear[data-v-477e18a9]{\n  cursor:pointer\n}\n.mx-icon-clear[data-v-477e18a9]:hover{\n  color:rgba(0,0,0,.8)\n}\n.mx-datepicker-main[data-v-477e18a9]{\n  font:14px/1.5 \"Helvetica Neue\",Helvetica,Arial,\"Microsoft Yahei\",sans-serif;\n  color:#73879c;\n  background-color:#fff;\n  border:1px solid #e8e8e8\n}\n.mx-datepicker-popup[data-v-477e18a9]{\n  position:absolute;\n  margin-top:1px;\n  margin-bottom:1px;\n  box-shadow:0 6px 12px rgba(0,0,0,.175);\n  z-index:2001\n}\n.mx-datepicker-sidebar[data-v-477e18a9]{\n  float:left;\n  box-sizing:border-box;\n  width:100px;\n  padding:6px;\n  overflow:auto\n}\n.mx-datepicker-sidebar+.mx-datepicker-content[data-v-477e18a9]{\n  margin-left:100px;\n  border-left:1px solid #e8e8e8\n}\n.mx-datepicker-body[data-v-477e18a9]{\n  position:relative;\n  -webkit-user-select:none;\n     -moz-user-select:none;\n          user-select:none\n}\n.mx-btn-shortcut[data-v-477e18a9]{\n  line-height:24px\n}\n.mx-range-wrapper[data-v-477e18a9]{\n  display:flex\n}\n@media(max-width:750px){\n.mx-range-wrapper[data-v-477e18a9]{\n    flex-direction:column\n}\n}\n.mx-datepicker-header[data-v-477e18a9]{\n  padding:6px 8px;\n  border-bottom:1px solid #e8e8e8\n}\n.mx-datepicker-footer[data-v-477e18a9]{\n  padding:6px 8px;\n  text-align:right;\n  border-top:1px solid #e8e8e8\n}\n.mx-calendar[data-v-477e18a9]{\n  box-sizing:border-box;\n  width:248px;\n  padding:6px 12px\n}\n.mx-calendar+.mx-calendar[data-v-477e18a9]{\n  border-left:1px solid #e8e8e8\n}\n.mx-calendar-header[data-v-477e18a9],.mx-time-header[data-v-477e18a9]{\n  box-sizing:border-box;\n  height:34px;\n  line-height:34px;\n  text-align:center;\n  overflow:hidden\n}\n.mx-btn-icon-double-left[data-v-477e18a9],.mx-btn-icon-left[data-v-477e18a9]{\n  float:left\n}\n.mx-btn-icon-double-right[data-v-477e18a9],.mx-btn-icon-right[data-v-477e18a9]{\n  float:right\n}\n.mx-calendar-header-label[data-v-477e18a9]{\n  font-size:14px\n}\n.mx-calendar-decade-separator[data-v-477e18a9]{\n  margin:0 2px\n}\n.mx-calendar-decade-separator[data-v-477e18a9]:after{\n  content:\"~\"\n}\n.mx-calendar-content[data-v-477e18a9]{\n  position:relative;\n  height:224px;\n  box-sizing:border-box\n}\n.mx-calendar-content .cell[data-v-477e18a9]{\n  cursor:pointer\n}\n.mx-calendar-content .cell[data-v-477e18a9]:hover{\n  color:#73879c;\n  background-color:rgb(243.15,248.85,253.8)\n}\n.mx-calendar-content .cell.active[data-v-477e18a9]{\n  color:#fff;\n  background-color:#1284e7\n}\n.mx-calendar-content .cell.hover-in-range[data-v-477e18a9],.mx-calendar-content .cell.in-range[data-v-477e18a9]{\n  color:#73879c;\n  background-color:rgb(219.45,236.55,251.4)\n}\n.mx-calendar-content .cell.disabled[data-v-477e18a9]{\n  cursor:not-allowed;\n  color:#ccc;\n  background-color:#f3f3f3\n}\n.mx-calendar-week-mode .mx-date-row[data-v-477e18a9]{\n  cursor:pointer\n}\n.mx-calendar-week-mode .mx-date-row[data-v-477e18a9]:hover{\n  background-color:rgb(243.15,248.85,253.8)\n}\n.mx-calendar-week-mode .mx-date-row.mx-active-week[data-v-477e18a9]{\n  background-color:rgb(219.45,236.55,251.4)\n}\n.mx-calendar-week-mode .mx-date-row .cell.active[data-v-477e18a9],.mx-calendar-week-mode .mx-date-row .cell[data-v-477e18a9]:hover{\n  color:inherit;\n  background-color:transparent\n}\n.mx-week-number[data-v-477e18a9]{\n  opacity:.5\n}\n.mx-table[data-v-477e18a9]{\n  table-layout:fixed;\n  border-collapse:separate;\n  border-spacing:0;\n  width:100%;\n  height:100%;\n  box-sizing:border-box;\n  text-align:center\n}\n.mx-table th[data-v-477e18a9]{\n  font-weight:500\n}\n.mx-table td[data-v-477e18a9],.mx-table th[data-v-477e18a9]{\n  padding:0;\n  vertical-align:middle\n}\n.mx-table-date td[data-v-477e18a9],.mx-table-date th[data-v-477e18a9]{\n  font-size:12px\n}\n.mx-table-date .today[data-v-477e18a9]{\n  color:rgb(41.7,144.3,233.4)\n}\n.mx-table-date .cell.not-current-month[data-v-477e18a9]{\n  color:#ccc;\n  background:none\n}\n.mx-time[data-v-477e18a9]{\n  flex:1;\n  width:224px;\n  background:#fff\n}\n.mx-time+.mx-time[data-v-477e18a9]{\n  border-left:1px solid #e8e8e8\n}\n.mx-calendar-time[data-v-477e18a9]{\n  position:absolute;\n  top:0;\n  left:0;\n  width:100%;\n  height:100%\n}\n.mx-time-header[data-v-477e18a9]{\n  border-bottom:1px solid #e8e8e8\n}\n.mx-time-content[data-v-477e18a9]{\n  height:224px;\n  box-sizing:border-box;\n  overflow:hidden\n}\n.mx-time-columns[data-v-477e18a9]{\n  display:flex;\n  width:100%;\n  height:100%;\n  overflow:hidden\n}\n.mx-time-column[data-v-477e18a9]{\n  flex:1;\n  position:relative;\n  border-left:1px solid #e8e8e8;\n  text-align:center\n}\n.mx-time-column[data-v-477e18a9]:first-child{\n  border-left:0\n}\n.mx-time-column .mx-time-list[data-v-477e18a9]{\n  margin:0;\n  padding:0;\n  list-style:none\n}\n.mx-time-column .mx-time-list[data-v-477e18a9]:after{\n  content:\"\";\n  display:block;\n  height:192px\n}\n.mx-time-column .mx-time-item[data-v-477e18a9]{\n  cursor:pointer;\n  font-size:12px;\n  height:32px;\n  line-height:32px\n}\n.mx-time-column .mx-time-item[data-v-477e18a9]:hover{\n  color:#73879c;\n  background-color:rgb(243.15,248.85,253.8)\n}\n.mx-time-column .mx-time-item.active[data-v-477e18a9]{\n  color:#1284e7;\n  background-color:transparent;\n  font-weight:700\n}\n.mx-time-column .mx-time-item.disabled[data-v-477e18a9]{\n  cursor:not-allowed;\n  color:#ccc;\n  background-color:#f3f3f3\n}\n.mx-time-option[data-v-477e18a9]{\n  cursor:pointer;\n  padding:8px 10px;\n  font-size:14px;\n  line-height:20px\n}\n.mx-time-option[data-v-477e18a9]:hover{\n  color:#73879c;\n  background-color:rgb(243.15,248.85,253.8)\n}\n.mx-time-option.active[data-v-477e18a9]{\n  color:#1284e7;\n  background-color:transparent;\n  font-weight:700\n}\n.mx-time-option.disabled[data-v-477e18a9]{\n  cursor:not-allowed;\n  color:#ccc;\n  background-color:#f3f3f3\n}\n.el-input .el-input__inner[data-v-477e18a9]:focus,.el-range-editor.is-active[data-v-477e18a9],.el-range-editor.is-active[data-v-477e18a9]:hover,.el-select .el-input.is-focus .el-input__inner[data-v-477e18a9],.el-select .el-input__inner[data-v-477e18a9]:focus,.el-textarea .el-input__inner[data-v-477e18a9]:focus{\n  border:1.3px solid #1b63d4!important;\n  box-shadow:0 2px 10px rgba(187,209,243,.5)\n}\n.mx-input[data-v-477e18a9]{\n  height:40px!important\n}\n.mx-datepicker-sidebar[data-v-477e18a9]{\n  width:151px!important\n}\n.mx-table-date td[data-v-477e18a9],.mx-table-date th[data-v-477e18a9]{\n  height:32px;\n  font-size:14px!important\n}\n.mx-btn-shortcut[data-v-477e18a9]{\n  display:block;\n  padding:0 6px;\n  line-height:30px!important\n}\n[data-v-477e18a9]:root{\n  --vs-line-height:1.6\n}\n.btn-popover[data-v-477e18a9]{\n  height:40px;\n  background-color:#fff;\n  width:100%;\n  padding:10px;\n  cursor:pointer\n}\n.btn-popover .title-1[data-v-477e18a9]{\n  font-weight:400;\n  font-size:16px;\n  color:#454545;\n  margin-left:10px\n}\n.btn-popover[data-v-477e18a9]:hover{\n  background-color:#f3f4f6\n}\n.el-popover[data-v-477e18a9]{\n  padding:0!important;\n  border-radius:5px!important\n}\n.el-upload[data-v-477e18a9]{\n  width:100%\n}\n.el-upload-dragger[data-v-477e18a9]{\n  width:100%!important;\n  background:linear-gradient(0deg,rgba(33,150,243,.03),rgba(33,150,243,.03)),#fff!important;\n  border:1px dashed transparent!important;\n  border-radius:5px!important;\n  height:100%!important\n}\n.kg-popup[data-v-477e18a9]{\n  transition:all .5s ease-in-out;\n  position:fixed;\n  top:0;\n  left:50%;\n  transform:translateX(-50%)\n}\n.noselect[data-v-477e18a9]{\n  -webkit-touch-callout:none;\n  -webkit-user-select:none;\n  -moz-user-select:none;\n  user-select:none\n}\n.ProseMirror[data-v-477e18a9]{\n  border:0;\n  outline:none\n}\n.ProseMirror>*+*[data-v-477e18a9]{\n  margin-top:.75em\n}\n.ProseMirror ol[data-v-477e18a9],.ProseMirror ul[data-v-477e18a9]{\n  padding:0 1rem\n}\n.ProseMirror h1[data-v-477e18a9],.ProseMirror h2[data-v-477e18a9],.ProseMirror h3[data-v-477e18a9],.ProseMirror h4[data-v-477e18a9],.ProseMirror h5[data-v-477e18a9],.ProseMirror h6[data-v-477e18a9]{\n  line-height:1.1\n}\n.ProseMirror code[data-v-477e18a9]{\n  background-color:rgba(97,97,97,.1);\n  color:#616161\n}\n.ProseMirror pre[data-v-477e18a9]{\n  background:#0d0d0d;\n  color:#fff;\n  font-family:\"JetBrainsMono\",monospace;\n  padding:.75rem 1rem;\n  border-radius:.5rem\n}\n.ProseMirror pre code[data-v-477e18a9]{\n  color:inherit;\n  padding:0;\n  background:none;\n  font-size:.8rem\n}\n.ProseMirror img[data-v-477e18a9]{\n  max-width:100%;\n  height:auto\n}\n.ProseMirror blockquote[data-v-477e18a9]{\n  padding-left:1rem;\n  border-left:2px solid rgba(13,13,13,.1)\n}\n.ProseMirror hr[data-v-477e18a9]{\n  border:none;\n  border-top:2px solid rgba(13,13,13,.1);\n  margin:2rem 0\n}\n.ProseMirror[data-v-477e18a9]:focus-visible{\n  outline:none\n}\n.el-color-picker__trigger[data-v-477e18a9]{\n  border:0!important;\n  padding:0!important;\n  outline:none!important\n}\n.el-color-picker__icon[data-v-477e18a9]{\n  visibility:hidden!important\n}\n.el-color-picker--mini .el-color-picker__trigger[data-v-477e18a9],.el-color-picker__color[data-v-477e18a9]{\n  height:22px!important;\n  width:22px!important\n}\n.el-color-picker__color[data-v-477e18a9]{\n  padding:0!important;\n  border:0!important\n}\n.el-color-picker__empty[data-v-477e18a9]{\n  padding-top:1.4px!important\n}\n.el-color-picker--mini[data-v-477e18a9]{\n  height:22px!important\n}\n.el-color-picker__color-inner[data-v-477e18a9]{\n  border:1px solid #e2e2e2!important\n}\n.el-table thead[data-v-477e18a9]{\n  color:#5c6b7a!important;\n  font-family:\"Cabin\"!important\n}\n.el-table thead[data-v-477e18a9],.th[data-v-477e18a9]{\n  font-weight:600!important\n}\n.el-button--mini[data-v-477e18a9],.el-button--text[data-v-477e18a9],.el-date-range-picker__header div[data-v-477e18a9],.el-date-table td span[data-v-477e18a9],.el-input__inner[data-v-477e18a9],.el-picker-panel__shortcut[data-v-477e18a9],.el-select-dropdown__item[data-v-477e18a9],.el-select-dropdown__item.hover[data-v-477e18a9],.el-select-dropdown__item[data-v-477e18a9]:hover,.el-time-spinner__item[data-v-477e18a9]{\n  font-family:\"Cabin\"!important\n}\n.el-progress-bar__inner[data-v-477e18a9],.el-progress-bar__outer[data-v-477e18a9]{\n  border-bottom-left-radius:100px!important;\n  border-top-left-radius:100px!important\n}\n.el-dropdown .el-dropdown__caret-button[data-v-477e18a9]{\n  bottom:2px!important\n}\n.el-dropdown-menu[data-v-477e18a9],.el-dropdown-menu__item[data-v-477e18a9]{\n  padding:0!important\n}\nbutton[data-v-477e18a9]:active,button[data-v-477e18a9]:focus{\n  outline:0!important\n}\n.el-input-group__append[data-v-477e18a9]{\n  padding:0!important\n}\n.el-input-group__prepend[data-v-477e18a9]{\n  padding-left:5px!important;\n  padding-right:5px!important\n}\n.el-menu-item[data-v-477e18a9],.el-submenu__title[data-v-477e18a9]{\n  height:40px!important;\n  line-height:40px!important;\n  font-family:\"Cabin\"!important;\n  font-size:16px!important;\n  font-style:normal!important;\n  font-weight:400!important;\n  color:#5c6b7a!important;\n  margin-bottom:10px!important;\n  border-left:4px solid transparent!important\n}\n.el-menu-item.is-active[data-v-477e18a9]{\n  color:#1b63d4!important;\n  font-weight:600!important;\n  border-left:4px solid #1b63d4!important;\n  border-top-left-radius:2px!important;\n  border-bottom-left-radius:2px!important\n}\n.el-menu--collapse[data-v-477e18a9]{\n  width:80px!important\n}\n.el-menu[data-v-477e18a9]{\n  border-right:0!important\n}\n.el-dialog__body[data-v-477e18a9],.el-dialog__header[data-v-477e18a9]{\n  padding:0!important\n}\n.el-dialog[data-v-477e18a9]{\n  border-radius:10px!important\n}\n.card-dialog[data-v-477e18a9]{\n  padding:20px!important\n}\n.vue-swatches__trigger[data-v-477e18a9]{\n  width:22px!important;\n  height:22px!important;\n  border-radius:2px!important\n}\n.vue-swatches[data-v-477e18a9]{\n  height:22px!important\n}\n.CodeMirror[data-v-477e18a9]{\n  height:calc(100vh - 150px)!important\n}\n.vue-swatches__trigger[data-v-477e18a9]{\n  border:1px solid #e2e2e2!important\n}\n.upload-demo[data-v-477e18a9],.upload-demo .el-upload[data-v-477e18a9]{\n  width:100%\n}\n.upload-card[data-v-477e18a9]{\n  height:100%;\n  border:1px dashed #1b63d4\n}\n.upload-card .icon-upload[data-v-477e18a9]{\n  height:45.5px;\n  padding-left:15px;\n  margin-right:8px\n}\n.upload-card .empty-space[data-v-477e18a9]{\n  font-weight:700;\n  font-size:14px;\n  text-align:left;\n  color:#333\n}\n.upload-card .upload-name[data-v-477e18a9]{\n  font-weight:400;\n  font-size:12px;\n  text-align:left;\n  color:#757575\n}\n.upload-card .btn-upload[data-v-477e18a9]{\n  width:90%;\n  margin-left:auto;\n  margin-right:auto;\n  background:#fff;\n  border:1px solid #1b63d4;\n  color:#1b63d4;\n  border-radius:5px;\n  height:34px;\n  margin-top:20px;\n  cursor:pointer\n}\n.upload-card .btn-upload .name-btn[data-v-477e18a9]{\n  font-weight:700;\n  font-size:14px;\n  color:#1b63d4;\n  padding-left:10px\n}\n.upload-card .btn-upload[data-v-477e18a9]:hover{\n  background-color:#f3f4f6;\n  border:0\n}\n.option-card .list-card[data-v-477e18a9]{\n  width:100%;\n  height:60px;\n  background:#fff;\n  border:1px solid #c3ced9;\n  border-radius:5px;\n  padding-left:12px;\n  padding-right:12px;\n  margin-bottom:8px\n}\n.option-card .list-card .title-option[data-v-477e18a9]{\n  font-family:\"Cabin\";\n  font-style:normal;\n  font-weight:550;\n  font-size:16px;\n  color:#5c6b7a;\n  margin-left:12px;\n  line-height:18px;\n  text-overflow:ellipsis;\n  white-space:nowrap;\n  overflow:hidden\n}\n#player-container #play-pause[data-v-477e18a9]{\n  cursor:pointer;\n  text-indent:-999999px;\n  height:40px;\n  width:40px;\n  padding:12px 18px;\n  z-index:2;\n  background-repeat:no-repeat!important;\n  background-size:16px;\n  background-repeat:no-repeat;\n  background-position:50%;\n  background-size:20px;\n  background-color:#dcdcdc\n}\n#player-container #play-pause[data-v-477e18a9],.play[data-v-477e18a9]{\n  background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZD0iTTIgMjRWMGwyMCAxMkwyIDI0eiIvPjwvc3ZnPg==)\n}\n.pause[data-v-477e18a9]{\n  background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZD0iTTEwIDI0SDRWMGg2djI0ek0yMCAwaC02djI0aDZWMHoiLz48L3N2Zz4=)!important\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextOnly_vue_vue_type_style_index_0_id_f6508f98_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(283);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextOnly_vue_vue_type_style_index_0_id_f6508f98_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextOnly_vue_vue_type_style_index_0_id_f6508f98_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextOnly_vue_vue_type_style_index_0_id_f6508f98_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextOnly_vue_vue_type_style_index_0_id_f6508f98_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 348:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(7);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n@font-face{\n  font-family:\"Cabin\";\n\n  src:local(\"Cabin\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\")\n}\n@font-face{\n  font-family:\"Roboto Mono\";\n\n  src:local(\"Roboto Mono\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\")\n}\n.header-1[data-v-f6508f98]{\n  font-size:32px\n}\n.header-1[data-v-f6508f98],.header-2[data-v-f6508f98]{\n  font-family:\"Cabin\";\n  font-weight:600;\n  color:#454545\n}\n.header-2[data-v-f6508f98]{\n  font-size:28px\n}\n.header-3[data-v-f6508f98]{\n  font-size:24px\n}\n.header-3[data-v-f6508f98],.header-4[data-v-f6508f98]{\n  font-family:\"Cabin\";\n  font-weight:600;\n  color:#454545\n}\n.header-4[data-v-f6508f98]{\n  font-size:20px\n}\n.header-5[data-v-f6508f98]{\n  font-size:18px\n}\n.header-5[data-v-f6508f98],.header-6[data-v-f6508f98]{\n  font-family:\"Cabin\";\n  font-weight:600;\n  color:#454545\n}\n.header-6[data-v-f6508f98]{\n  font-size:14px\n}\n.subtitle-1[data-v-f6508f98]{\n  color:#757575\n}\n.subtitle-1[data-v-f6508f98],.subtitle-2[data-v-f6508f98]{\n  font-family:\"Cabin\";\n  font-size:16px;\n  font-weight:400\n}\n.subtitle-2[data-v-f6508f98]{\n  color:#454545\n}\n.no-select[data-v-f6508f98]{\n  -webkit-touch-callout:none;\n  -webkit-user-select:none;\n  -moz-user-select:none;\n  user-select:none\n}\n.mx-icon-double-left[data-v-f6508f98]:after,.mx-icon-double-left[data-v-f6508f98]:before,.mx-icon-double-right[data-v-f6508f98]:after,.mx-icon-double-right[data-v-f6508f98]:before,.mx-icon-left[data-v-f6508f98]:before,.mx-icon-right[data-v-f6508f98]:before{\n  content:\"\";\n  position:relative;\n  top:-1px;\n  display:inline-block;\n  width:10px;\n  height:10px;\n  vertical-align:middle;\n  border-color:currentcolor;\n  border-style:solid;\n  border-width:2px 0 0 2px;\n  border-radius:1px;\n  box-sizing:border-box;\n  transform-origin:center;\n  transform:rotate(-45deg) scale(.7)\n}\n.mx-icon-double-left[data-v-f6508f98]:after{\n  left:-4px\n}\n.mx-icon-double-right[data-v-f6508f98]:before{\n  left:4px\n}\n.mx-icon-double-right[data-v-f6508f98]:after,.mx-icon-double-right[data-v-f6508f98]:before,.mx-icon-right[data-v-f6508f98]:before{\n  transform:rotate(135deg) scale(.7)\n}\n.mx-btn[data-v-f6508f98]{\n  box-sizing:border-box;\n  line-height:1;\n  font-size:14px;\n  font-weight:500;\n  padding:7px 15px;\n  margin:0;\n  cursor:pointer;\n  background-color:transparent;\n  outline:none;\n  border:1px solid rgba(0,0,0,.1);\n  border-radius:4px;\n  color:#73879c;\n  white-space:nowrap\n}\n.mx-btn[data-v-f6508f98]:hover{\n  border-color:#1284e7;\n  color:#1284e7\n}\n.mx-btn.disabled[data-v-f6508f98],.mx-btn[data-v-f6508f98]:disabled{\n  color:#ccc;\n  cursor:not-allowed\n}\n.mx-btn-text[data-v-f6508f98]{\n  border:0;\n  padding:0 4px;\n  text-align:left;\n  line-height:inherit\n}\n.mx-scrollbar[data-v-f6508f98]{\n  height:100%\n}\n.mx-scrollbar:hover .mx-scrollbar-track[data-v-f6508f98]{\n  opacity:1\n}\n.mx-scrollbar-wrap[data-v-f6508f98]{\n  height:100%;\n  overflow-x:hidden;\n  overflow-y:auto\n}\n.mx-scrollbar-track[data-v-f6508f98]{\n  position:absolute;\n  top:2px;\n  right:2px;\n  bottom:2px;\n  width:6px;\n  z-index:1;\n  border-radius:4px;\n  opacity:0;\n  transition:opacity .24s ease-out\n}\n.mx-scrollbar-track .mx-scrollbar-thumb[data-v-f6508f98]{\n  position:absolute;\n  width:100%;\n  height:0;\n  cursor:pointer;\n  border-radius:inherit;\n  background-color:rgba(144,147,153,.3);\n  transition:background-color .3s\n}\n.mx-zoom-in-down-enter-active[data-v-f6508f98],.mx-zoom-in-down-leave-active[data-v-f6508f98]{\n  opacity:1;\n  transform:scaleY(1);\n  transition:transform .3s cubic-bezier(.23,1,.32,1),opacity .3s cubic-bezier(.23,1,.32,1);\n  transform-origin:center top\n}\n.mx-zoom-in-down-enter[data-v-f6508f98],.mx-zoom-in-down-enter-from[data-v-f6508f98],.mx-zoom-in-down-leave-to[data-v-f6508f98]{\n  opacity:0;\n  transform:scaleY(0)\n}\n.mx-datepicker[data-v-f6508f98]{\n  position:relative;\n  display:inline-block;\n  width:210px\n}\n.mx-datepicker svg[data-v-f6508f98]{\n  width:1em;\n  height:1em;\n  vertical-align:-.15em;\n  fill:currentColor;\n  overflow:hidden\n}\n.mx-datepicker-range[data-v-f6508f98]{\n  width:320px\n}\n.mx-datepicker-inline[data-v-f6508f98]{\n  width:auto\n}\n.mx-input-wrapper[data-v-f6508f98]{\n  position:relative\n}\n.mx-input[data-v-f6508f98]{\n  display:inline-block;\n  box-sizing:border-box;\n  width:100%;\n  height:34px;\n  padding:6px 30px 6px 10px;\n  font-size:14px;\n  line-height:1.4;\n  color:#555;\n  background-color:#fff;\n  border:1px solid #ccc;\n  border-radius:4px;\n  box-shadow:inset 0 1px 1px rgba(0,0,0,.075)\n}\n.mx-input[data-v-f6508f98]:focus,.mx-input[data-v-f6508f98]:hover{\n  border-color:#409aff\n}\n.mx-input.disabled[data-v-f6508f98],.mx-input[data-v-f6508f98]:disabled{\n  color:#ccc;\n  background-color:#f3f3f3;\n  border-color:#ccc;\n  cursor:not-allowed\n}\n.mx-input[data-v-f6508f98]:focus{\n  outline:none\n}\n.mx-input[data-v-f6508f98]::-ms-clear{\n  display:none\n}\n.mx-icon-calendar[data-v-f6508f98],.mx-icon-clear[data-v-f6508f98]{\n  position:absolute;\n  top:50%;\n  right:8px;\n  transform:translateY(-50%);\n  font-size:16px;\n  line-height:1;\n  color:rgba(0,0,0,.5);\n  vertical-align:middle\n}\n.mx-icon-clear[data-v-f6508f98]{\n  cursor:pointer\n}\n.mx-icon-clear[data-v-f6508f98]:hover{\n  color:rgba(0,0,0,.8)\n}\n.mx-datepicker-main[data-v-f6508f98]{\n  font:14px/1.5 \"Helvetica Neue\",Helvetica,Arial,\"Microsoft Yahei\",sans-serif;\n  color:#73879c;\n  background-color:#fff;\n  border:1px solid #e8e8e8\n}\n.mx-datepicker-popup[data-v-f6508f98]{\n  position:absolute;\n  margin-top:1px;\n  margin-bottom:1px;\n  box-shadow:0 6px 12px rgba(0,0,0,.175);\n  z-index:2001\n}\n.mx-datepicker-sidebar[data-v-f6508f98]{\n  float:left;\n  box-sizing:border-box;\n  width:100px;\n  padding:6px;\n  overflow:auto\n}\n.mx-datepicker-sidebar+.mx-datepicker-content[data-v-f6508f98]{\n  margin-left:100px;\n  border-left:1px solid #e8e8e8\n}\n.mx-datepicker-body[data-v-f6508f98]{\n  position:relative;\n  -webkit-user-select:none;\n     -moz-user-select:none;\n          user-select:none\n}\n.mx-btn-shortcut[data-v-f6508f98]{\n  line-height:24px\n}\n.mx-range-wrapper[data-v-f6508f98]{\n  display:flex\n}\n@media(max-width:750px){\n.mx-range-wrapper[data-v-f6508f98]{\n    flex-direction:column\n}\n}\n.mx-datepicker-header[data-v-f6508f98]{\n  padding:6px 8px;\n  border-bottom:1px solid #e8e8e8\n}\n.mx-datepicker-footer[data-v-f6508f98]{\n  padding:6px 8px;\n  text-align:right;\n  border-top:1px solid #e8e8e8\n}\n.mx-calendar[data-v-f6508f98]{\n  box-sizing:border-box;\n  width:248px;\n  padding:6px 12px\n}\n.mx-calendar+.mx-calendar[data-v-f6508f98]{\n  border-left:1px solid #e8e8e8\n}\n.mx-calendar-header[data-v-f6508f98],.mx-time-header[data-v-f6508f98]{\n  box-sizing:border-box;\n  height:34px;\n  line-height:34px;\n  text-align:center;\n  overflow:hidden\n}\n.mx-btn-icon-double-left[data-v-f6508f98],.mx-btn-icon-left[data-v-f6508f98]{\n  float:left\n}\n.mx-btn-icon-double-right[data-v-f6508f98],.mx-btn-icon-right[data-v-f6508f98]{\n  float:right\n}\n.mx-calendar-header-label[data-v-f6508f98]{\n  font-size:14px\n}\n.mx-calendar-decade-separator[data-v-f6508f98]{\n  margin:0 2px\n}\n.mx-calendar-decade-separator[data-v-f6508f98]:after{\n  content:\"~\"\n}\n.mx-calendar-content[data-v-f6508f98]{\n  position:relative;\n  height:224px;\n  box-sizing:border-box\n}\n.mx-calendar-content .cell[data-v-f6508f98]{\n  cursor:pointer\n}\n.mx-calendar-content .cell[data-v-f6508f98]:hover{\n  color:#73879c;\n  background-color:rgb(243.15,248.85,253.8)\n}\n.mx-calendar-content .cell.active[data-v-f6508f98]{\n  color:#fff;\n  background-color:#1284e7\n}\n.mx-calendar-content .cell.hover-in-range[data-v-f6508f98],.mx-calendar-content .cell.in-range[data-v-f6508f98]{\n  color:#73879c;\n  background-color:rgb(219.45,236.55,251.4)\n}\n.mx-calendar-content .cell.disabled[data-v-f6508f98]{\n  cursor:not-allowed;\n  color:#ccc;\n  background-color:#f3f3f3\n}\n.mx-calendar-week-mode .mx-date-row[data-v-f6508f98]{\n  cursor:pointer\n}\n.mx-calendar-week-mode .mx-date-row[data-v-f6508f98]:hover{\n  background-color:rgb(243.15,248.85,253.8)\n}\n.mx-calendar-week-mode .mx-date-row.mx-active-week[data-v-f6508f98]{\n  background-color:rgb(219.45,236.55,251.4)\n}\n.mx-calendar-week-mode .mx-date-row .cell.active[data-v-f6508f98],.mx-calendar-week-mode .mx-date-row .cell[data-v-f6508f98]:hover{\n  color:inherit;\n  background-color:transparent\n}\n.mx-week-number[data-v-f6508f98]{\n  opacity:.5\n}\n.mx-table[data-v-f6508f98]{\n  table-layout:fixed;\n  border-collapse:separate;\n  border-spacing:0;\n  width:100%;\n  height:100%;\n  box-sizing:border-box;\n  text-align:center\n}\n.mx-table th[data-v-f6508f98]{\n  font-weight:500\n}\n.mx-table td[data-v-f6508f98],.mx-table th[data-v-f6508f98]{\n  padding:0;\n  vertical-align:middle\n}\n.mx-table-date td[data-v-f6508f98],.mx-table-date th[data-v-f6508f98]{\n  font-size:12px\n}\n.mx-table-date .today[data-v-f6508f98]{\n  color:rgb(41.7,144.3,233.4)\n}\n.mx-table-date .cell.not-current-month[data-v-f6508f98]{\n  color:#ccc;\n  background:none\n}\n.mx-time[data-v-f6508f98]{\n  flex:1;\n  width:224px;\n  background:#fff\n}\n.mx-time+.mx-time[data-v-f6508f98]{\n  border-left:1px solid #e8e8e8\n}\n.mx-calendar-time[data-v-f6508f98]{\n  position:absolute;\n  top:0;\n  left:0;\n  width:100%;\n  height:100%\n}\n.mx-time-header[data-v-f6508f98]{\n  border-bottom:1px solid #e8e8e8\n}\n.mx-time-content[data-v-f6508f98]{\n  height:224px;\n  box-sizing:border-box;\n  overflow:hidden\n}\n.mx-time-columns[data-v-f6508f98]{\n  display:flex;\n  width:100%;\n  height:100%;\n  overflow:hidden\n}\n.mx-time-column[data-v-f6508f98]{\n  flex:1;\n  position:relative;\n  border-left:1px solid #e8e8e8;\n  text-align:center\n}\n.mx-time-column[data-v-f6508f98]:first-child{\n  border-left:0\n}\n.mx-time-column .mx-time-list[data-v-f6508f98]{\n  margin:0;\n  padding:0;\n  list-style:none\n}\n.mx-time-column .mx-time-list[data-v-f6508f98]:after{\n  content:\"\";\n  display:block;\n  height:192px\n}\n.mx-time-column .mx-time-item[data-v-f6508f98]{\n  cursor:pointer;\n  font-size:12px;\n  height:32px;\n  line-height:32px\n}\n.mx-time-column .mx-time-item[data-v-f6508f98]:hover{\n  color:#73879c;\n  background-color:rgb(243.15,248.85,253.8)\n}\n.mx-time-column .mx-time-item.active[data-v-f6508f98]{\n  color:#1284e7;\n  background-color:transparent;\n  font-weight:700\n}\n.mx-time-column .mx-time-item.disabled[data-v-f6508f98]{\n  cursor:not-allowed;\n  color:#ccc;\n  background-color:#f3f3f3\n}\n.mx-time-option[data-v-f6508f98]{\n  cursor:pointer;\n  padding:8px 10px;\n  font-size:14px;\n  line-height:20px\n}\n.mx-time-option[data-v-f6508f98]:hover{\n  color:#73879c;\n  background-color:rgb(243.15,248.85,253.8)\n}\n.mx-time-option.active[data-v-f6508f98]{\n  color:#1284e7;\n  background-color:transparent;\n  font-weight:700\n}\n.mx-time-option.disabled[data-v-f6508f98]{\n  cursor:not-allowed;\n  color:#ccc;\n  background-color:#f3f3f3\n}\n.el-input .el-input__inner[data-v-f6508f98]:focus,.el-range-editor.is-active[data-v-f6508f98],.el-range-editor.is-active[data-v-f6508f98]:hover,.el-select .el-input.is-focus .el-input__inner[data-v-f6508f98],.el-select .el-input__inner[data-v-f6508f98]:focus,.el-textarea .el-input__inner[data-v-f6508f98]:focus{\n  border:1.3px solid #1b63d4!important;\n  box-shadow:0 2px 10px rgba(187,209,243,.5)\n}\n.mx-input[data-v-f6508f98]{\n  height:40px!important\n}\n.mx-datepicker-sidebar[data-v-f6508f98]{\n  width:151px!important\n}\n.mx-table-date td[data-v-f6508f98],.mx-table-date th[data-v-f6508f98]{\n  height:32px;\n  font-size:14px!important\n}\n.mx-btn-shortcut[data-v-f6508f98]{\n  display:block;\n  padding:0 6px;\n  line-height:30px!important\n}\n[data-v-f6508f98]:root{\n  --vs-line-height:1.6\n}\n.btn-popover[data-v-f6508f98]{\n  height:40px;\n  background-color:#fff;\n  width:100%;\n  padding:10px;\n  cursor:pointer\n}\n.btn-popover .title-1[data-v-f6508f98]{\n  font-weight:400;\n  font-size:16px;\n  color:#454545;\n  margin-left:10px\n}\n.btn-popover[data-v-f6508f98]:hover{\n  background-color:#f3f4f6\n}\n.el-popover[data-v-f6508f98]{\n  padding:0!important;\n  border-radius:5px!important\n}\n.el-upload[data-v-f6508f98]{\n  width:100%\n}\n.el-upload-dragger[data-v-f6508f98]{\n  width:100%!important;\n  background:linear-gradient(0deg,rgba(33,150,243,.03),rgba(33,150,243,.03)),#fff!important;\n  border:1px dashed transparent!important;\n  border-radius:5px!important;\n  height:100%!important\n}\n.kg-popup[data-v-f6508f98]{\n  transition:all .5s ease-in-out;\n  position:fixed;\n  top:0;\n  left:50%;\n  transform:translateX(-50%)\n}\n.noselect[data-v-f6508f98]{\n  -webkit-touch-callout:none;\n  -webkit-user-select:none;\n  -moz-user-select:none;\n  user-select:none\n}\n.ProseMirror[data-v-f6508f98]{\n  border:0;\n  outline:none\n}\n.ProseMirror>*+*[data-v-f6508f98]{\n  margin-top:.75em\n}\n.ProseMirror ol[data-v-f6508f98],.ProseMirror ul[data-v-f6508f98]{\n  padding:0 1rem\n}\n.ProseMirror h1[data-v-f6508f98],.ProseMirror h2[data-v-f6508f98],.ProseMirror h3[data-v-f6508f98],.ProseMirror h4[data-v-f6508f98],.ProseMirror h5[data-v-f6508f98],.ProseMirror h6[data-v-f6508f98]{\n  line-height:1.1\n}\n.ProseMirror code[data-v-f6508f98]{\n  background-color:rgba(97,97,97,.1);\n  color:#616161\n}\n.ProseMirror pre[data-v-f6508f98]{\n  background:#0d0d0d;\n  color:#fff;\n  font-family:\"JetBrainsMono\",monospace;\n  padding:.75rem 1rem;\n  border-radius:.5rem\n}\n.ProseMirror pre code[data-v-f6508f98]{\n  color:inherit;\n  padding:0;\n  background:none;\n  font-size:.8rem\n}\n.ProseMirror img[data-v-f6508f98]{\n  max-width:100%;\n  height:auto\n}\n.ProseMirror blockquote[data-v-f6508f98]{\n  padding-left:1rem;\n  border-left:2px solid rgba(13,13,13,.1)\n}\n.ProseMirror hr[data-v-f6508f98]{\n  border:none;\n  border-top:2px solid rgba(13,13,13,.1);\n  margin:2rem 0\n}\n.ProseMirror[data-v-f6508f98]:focus-visible{\n  outline:none\n}\n.el-color-picker__trigger[data-v-f6508f98]{\n  border:0!important;\n  padding:0!important;\n  outline:none!important\n}\n.el-color-picker__icon[data-v-f6508f98]{\n  visibility:hidden!important\n}\n.el-color-picker--mini .el-color-picker__trigger[data-v-f6508f98],.el-color-picker__color[data-v-f6508f98]{\n  height:22px!important;\n  width:22px!important\n}\n.el-color-picker__color[data-v-f6508f98]{\n  padding:0!important;\n  border:0!important\n}\n.el-color-picker__empty[data-v-f6508f98]{\n  padding-top:1.4px!important\n}\n.el-color-picker--mini[data-v-f6508f98]{\n  height:22px!important\n}\n.el-color-picker__color-inner[data-v-f6508f98]{\n  border:1px solid #e2e2e2!important\n}\n.el-table thead[data-v-f6508f98]{\n  color:#5c6b7a!important;\n  font-family:\"Cabin\"!important\n}\n.el-table thead[data-v-f6508f98],.th[data-v-f6508f98]{\n  font-weight:600!important\n}\n.el-button--mini[data-v-f6508f98],.el-button--text[data-v-f6508f98],.el-date-range-picker__header div[data-v-f6508f98],.el-date-table td span[data-v-f6508f98],.el-input__inner[data-v-f6508f98],.el-picker-panel__shortcut[data-v-f6508f98],.el-select-dropdown__item[data-v-f6508f98],.el-select-dropdown__item.hover[data-v-f6508f98],.el-select-dropdown__item[data-v-f6508f98]:hover,.el-time-spinner__item[data-v-f6508f98]{\n  font-family:\"Cabin\"!important\n}\n.el-progress-bar__inner[data-v-f6508f98],.el-progress-bar__outer[data-v-f6508f98]{\n  border-bottom-left-radius:100px!important;\n  border-top-left-radius:100px!important\n}\n.el-dropdown .el-dropdown__caret-button[data-v-f6508f98]{\n  bottom:2px!important\n}\n.el-dropdown-menu[data-v-f6508f98],.el-dropdown-menu__item[data-v-f6508f98]{\n  padding:0!important\n}\nbutton[data-v-f6508f98]:active,button[data-v-f6508f98]:focus{\n  outline:0!important\n}\n.el-input-group__append[data-v-f6508f98]{\n  padding:0!important\n}\n.el-input-group__prepend[data-v-f6508f98]{\n  padding-left:5px!important;\n  padding-right:5px!important\n}\n.el-menu-item[data-v-f6508f98],.el-submenu__title[data-v-f6508f98]{\n  height:40px!important;\n  line-height:40px!important;\n  font-family:\"Cabin\"!important;\n  font-size:16px!important;\n  font-style:normal!important;\n  font-weight:400!important;\n  color:#5c6b7a!important;\n  margin-bottom:10px!important;\n  border-left:4px solid transparent!important\n}\n.el-menu-item.is-active[data-v-f6508f98]{\n  color:#1b63d4!important;\n  font-weight:600!important;\n  border-left:4px solid #1b63d4!important;\n  border-top-left-radius:2px!important;\n  border-bottom-left-radius:2px!important\n}\n.el-menu--collapse[data-v-f6508f98]{\n  width:80px!important\n}\n.el-menu[data-v-f6508f98]{\n  border-right:0!important\n}\n.el-dialog__body[data-v-f6508f98],.el-dialog__header[data-v-f6508f98]{\n  padding:0!important\n}\n.el-dialog[data-v-f6508f98]{\n  border-radius:10px!important\n}\n.card-dialog[data-v-f6508f98]{\n  padding:20px!important\n}\n.vue-swatches__trigger[data-v-f6508f98]{\n  width:22px!important;\n  height:22px!important;\n  border-radius:2px!important\n}\n.vue-swatches[data-v-f6508f98]{\n  height:22px!important\n}\n.CodeMirror[data-v-f6508f98]{\n  height:calc(100vh - 150px)!important\n}\n.vue-swatches__trigger[data-v-f6508f98]{\n  border:1px solid #e2e2e2!important\n}\ntextarea[data-v-f6508f98]{\n  resize:none\n}\n.textarea-with-counter[data-v-f6508f98]{\n  position:relative;\n  width:100%\n}\n.textarea-with-counter .char-counter[data-v-f6508f98]{\n  bottom:-10px;\n  color:#999;\n  font-size:12px;\n  padding-top:15px;\n  position:absolute;\n  right:0\n}\n[data-v-f6508f98]::-webkit-scrollbar{\n  width:9px;\n  height:18px\n}\n[data-v-f6508f98]::-webkit-scrollbar-thumb{\n  height:6px;\n  border:2px solid transparent;\n  background-clip:padding-box;\n  background-color:#e2e2e2;\n  -webkit-border-radius:7px\n}\n[data-v-f6508f98]::-webkit-scrollbar-button{\n  display:none;\n  width:0;\n  height:0\n}\n[data-v-f6508f98]::-webkit-scrollbar-corner{\n  background-color:transparent\n}\n.form-input .input-box[data-v-f6508f98]{\n  height:157px;\n  width:100%;\n  resize:none;\n  background:#fff;\n  border:1px solid #e2e2e2;\n  border-radius:5px;\n  padding:10px\n}\n.form-input .input-box[data-v-f6508f98]:focus{\n  outline:none!important;\n  background:#fff;\n  border:1.3px solid #1b63d4;\n  box-shadow:0 2px 10px #bbd1f3;\n  border-radius:5px\n}\n.form-input .style-box .title-box[data-v-f6508f98]{\n  font-weight:600;\n  font-size:14px;\n  letter-spacing:.05em;\n  text-transform:uppercase;\n  color:#454545;\n  margin-bottom:8px\n}\n.form-input .style-box .card-font[data-v-f6508f98]{\n  margin-bottom:8px\n}\n.form-input .style-box .card-font .font-family-card[data-v-f6508f98]{\n  width:66%\n}\n.form-input .style-box .card-font .font-size-card[data-v-f6508f98]{\n  width:30%;\n  margin-left:10px\n}\n.form-input .style-box .btn-card[data-v-f6508f98]{\n  height:34px;\n  background:#fff;\n  border:1px solid #e2e2e2;\n  border-radius:5px;\n  cursor:pointer\n}\n.form-input .style-box .btn-card-active[data-v-f6508f98]{\n  background:#1b63d4\n}\n.form-input .style-box .color-container .title-color[data-v-f6508f98]{\n  font-weight:400;\n  font-size:16px;\n  color:#454545\n}\n.form-input .style-box .color-container .color-card[data-v-f6508f98]{\n  height:100px;\n  background:#fff;\n  border:1px solid #e2e2e2;\n  border-radius:5px;\n  padding-left:10px;\n  padding-right:10px\n}\n.form-input .style-box .color-container .color-card .text-color[data-v-f6508f98]{\n  font-weight:400;\n  font-size:16px;\n  color:#454545;\n  margin-left:5px;\n  width:100%\n}\n.form-input .style-box .color-container .color-card .text-color[data-v-f6508f98]:focus{\n  outline:none\n}\n.form-input .style-box .color-container .color-card .percent-color[data-v-f6508f98]{\n  font-weight:500;\n  font-size:16px;\n  color:#333\n}\n.form-input .style-box .color-container .color-card .percent-color .hr-vertical[data-v-f6508f98]{\n  border:1px solid #e2e2e2;\n  height:15px;\n  margin-right:8px\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Image_vue_vue_type_style_index_0_id_2883ab56_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(284);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Image_vue_vue_type_style_index_0_id_2883ab56_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Image_vue_vue_type_style_index_0_id_2883ab56_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Image_vue_vue_type_style_index_0_id_2883ab56_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Image_vue_vue_type_style_index_0_id_2883ab56_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 350:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(7);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n@font-face{\n  font-family:\"Cabin\";\n\n  src:local(\"Cabin\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\")\n}\n@font-face{\n  font-family:\"Roboto Mono\";\n\n  src:local(\"Roboto Mono\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\")\n}\n.header-1[data-v-2883ab56]{\n  font-size:32px\n}\n.header-1[data-v-2883ab56],.header-2[data-v-2883ab56]{\n  font-family:\"Cabin\";\n  font-weight:600;\n  color:#454545\n}\n.header-2[data-v-2883ab56]{\n  font-size:28px\n}\n.header-3[data-v-2883ab56]{\n  font-size:24px\n}\n.header-3[data-v-2883ab56],.header-4[data-v-2883ab56]{\n  font-family:\"Cabin\";\n  font-weight:600;\n  color:#454545\n}\n.header-4[data-v-2883ab56]{\n  font-size:20px\n}\n.header-5[data-v-2883ab56]{\n  font-size:18px\n}\n.header-5[data-v-2883ab56],.header-6[data-v-2883ab56]{\n  font-family:\"Cabin\";\n  font-weight:600;\n  color:#454545\n}\n.header-6[data-v-2883ab56]{\n  font-size:14px\n}\n.subtitle-1[data-v-2883ab56]{\n  color:#757575\n}\n.subtitle-1[data-v-2883ab56],.subtitle-2[data-v-2883ab56]{\n  font-family:\"Cabin\";\n  font-size:16px;\n  font-weight:400\n}\n.subtitle-2[data-v-2883ab56]{\n  color:#454545\n}\n.no-select[data-v-2883ab56]{\n  -webkit-touch-callout:none;\n  -webkit-user-select:none;\n  -moz-user-select:none;\n  user-select:none\n}\n.mx-icon-double-left[data-v-2883ab56]:after,.mx-icon-double-left[data-v-2883ab56]:before,.mx-icon-double-right[data-v-2883ab56]:after,.mx-icon-double-right[data-v-2883ab56]:before,.mx-icon-left[data-v-2883ab56]:before,.mx-icon-right[data-v-2883ab56]:before{\n  content:\"\";\n  position:relative;\n  top:-1px;\n  display:inline-block;\n  width:10px;\n  height:10px;\n  vertical-align:middle;\n  border-color:currentcolor;\n  border-style:solid;\n  border-width:2px 0 0 2px;\n  border-radius:1px;\n  box-sizing:border-box;\n  transform-origin:center;\n  transform:rotate(-45deg) scale(.7)\n}\n.mx-icon-double-left[data-v-2883ab56]:after{\n  left:-4px\n}\n.mx-icon-double-right[data-v-2883ab56]:before{\n  left:4px\n}\n.mx-icon-double-right[data-v-2883ab56]:after,.mx-icon-double-right[data-v-2883ab56]:before,.mx-icon-right[data-v-2883ab56]:before{\n  transform:rotate(135deg) scale(.7)\n}\n.mx-btn[data-v-2883ab56]{\n  box-sizing:border-box;\n  line-height:1;\n  font-size:14px;\n  font-weight:500;\n  padding:7px 15px;\n  margin:0;\n  cursor:pointer;\n  background-color:transparent;\n  outline:none;\n  border:1px solid rgba(0,0,0,.1);\n  border-radius:4px;\n  color:#73879c;\n  white-space:nowrap\n}\n.mx-btn[data-v-2883ab56]:hover{\n  border-color:#1284e7;\n  color:#1284e7\n}\n.mx-btn.disabled[data-v-2883ab56],.mx-btn[data-v-2883ab56]:disabled{\n  color:#ccc;\n  cursor:not-allowed\n}\n.mx-btn-text[data-v-2883ab56]{\n  border:0;\n  padding:0 4px;\n  text-align:left;\n  line-height:inherit\n}\n.mx-scrollbar[data-v-2883ab56]{\n  height:100%\n}\n.mx-scrollbar:hover .mx-scrollbar-track[data-v-2883ab56]{\n  opacity:1\n}\n.mx-scrollbar-wrap[data-v-2883ab56]{\n  height:100%;\n  overflow-x:hidden;\n  overflow-y:auto\n}\n.mx-scrollbar-track[data-v-2883ab56]{\n  position:absolute;\n  top:2px;\n  right:2px;\n  bottom:2px;\n  width:6px;\n  z-index:1;\n  border-radius:4px;\n  opacity:0;\n  transition:opacity .24s ease-out\n}\n.mx-scrollbar-track .mx-scrollbar-thumb[data-v-2883ab56]{\n  position:absolute;\n  width:100%;\n  height:0;\n  cursor:pointer;\n  border-radius:inherit;\n  background-color:rgba(144,147,153,.3);\n  transition:background-color .3s\n}\n.mx-zoom-in-down-enter-active[data-v-2883ab56],.mx-zoom-in-down-leave-active[data-v-2883ab56]{\n  opacity:1;\n  transform:scaleY(1);\n  transition:transform .3s cubic-bezier(.23,1,.32,1),opacity .3s cubic-bezier(.23,1,.32,1);\n  transform-origin:center top\n}\n.mx-zoom-in-down-enter[data-v-2883ab56],.mx-zoom-in-down-enter-from[data-v-2883ab56],.mx-zoom-in-down-leave-to[data-v-2883ab56]{\n  opacity:0;\n  transform:scaleY(0)\n}\n.mx-datepicker[data-v-2883ab56]{\n  position:relative;\n  display:inline-block;\n  width:210px\n}\n.mx-datepicker svg[data-v-2883ab56]{\n  width:1em;\n  height:1em;\n  vertical-align:-.15em;\n  fill:currentColor;\n  overflow:hidden\n}\n.mx-datepicker-range[data-v-2883ab56]{\n  width:320px\n}\n.mx-datepicker-inline[data-v-2883ab56]{\n  width:auto\n}\n.mx-input-wrapper[data-v-2883ab56]{\n  position:relative\n}\n.mx-input[data-v-2883ab56]{\n  display:inline-block;\n  box-sizing:border-box;\n  width:100%;\n  height:34px;\n  padding:6px 30px 6px 10px;\n  font-size:14px;\n  line-height:1.4;\n  color:#555;\n  background-color:#fff;\n  border:1px solid #ccc;\n  border-radius:4px;\n  box-shadow:inset 0 1px 1px rgba(0,0,0,.075)\n}\n.mx-input[data-v-2883ab56]:focus,.mx-input[data-v-2883ab56]:hover{\n  border-color:#409aff\n}\n.mx-input.disabled[data-v-2883ab56],.mx-input[data-v-2883ab56]:disabled{\n  color:#ccc;\n  background-color:#f3f3f3;\n  border-color:#ccc;\n  cursor:not-allowed\n}\n.mx-input[data-v-2883ab56]:focus{\n  outline:none\n}\n.mx-input[data-v-2883ab56]::-ms-clear{\n  display:none\n}\n.mx-icon-calendar[data-v-2883ab56],.mx-icon-clear[data-v-2883ab56]{\n  position:absolute;\n  top:50%;\n  right:8px;\n  transform:translateY(-50%);\n  font-size:16px;\n  line-height:1;\n  color:rgba(0,0,0,.5);\n  vertical-align:middle\n}\n.mx-icon-clear[data-v-2883ab56]{\n  cursor:pointer\n}\n.mx-icon-clear[data-v-2883ab56]:hover{\n  color:rgba(0,0,0,.8)\n}\n.mx-datepicker-main[data-v-2883ab56]{\n  font:14px/1.5 \"Helvetica Neue\",Helvetica,Arial,\"Microsoft Yahei\",sans-serif;\n  color:#73879c;\n  background-color:#fff;\n  border:1px solid #e8e8e8\n}\n.mx-datepicker-popup[data-v-2883ab56]{\n  position:absolute;\n  margin-top:1px;\n  margin-bottom:1px;\n  box-shadow:0 6px 12px rgba(0,0,0,.175);\n  z-index:2001\n}\n.mx-datepicker-sidebar[data-v-2883ab56]{\n  float:left;\n  box-sizing:border-box;\n  width:100px;\n  padding:6px;\n  overflow:auto\n}\n.mx-datepicker-sidebar+.mx-datepicker-content[data-v-2883ab56]{\n  margin-left:100px;\n  border-left:1px solid #e8e8e8\n}\n.mx-datepicker-body[data-v-2883ab56]{\n  position:relative;\n  -webkit-user-select:none;\n     -moz-user-select:none;\n          user-select:none\n}\n.mx-btn-shortcut[data-v-2883ab56]{\n  line-height:24px\n}\n.mx-range-wrapper[data-v-2883ab56]{\n  display:flex\n}\n@media(max-width:750px){\n.mx-range-wrapper[data-v-2883ab56]{\n    flex-direction:column\n}\n}\n.mx-datepicker-header[data-v-2883ab56]{\n  padding:6px 8px;\n  border-bottom:1px solid #e8e8e8\n}\n.mx-datepicker-footer[data-v-2883ab56]{\n  padding:6px 8px;\n  text-align:right;\n  border-top:1px solid #e8e8e8\n}\n.mx-calendar[data-v-2883ab56]{\n  box-sizing:border-box;\n  width:248px;\n  padding:6px 12px\n}\n.mx-calendar+.mx-calendar[data-v-2883ab56]{\n  border-left:1px solid #e8e8e8\n}\n.mx-calendar-header[data-v-2883ab56],.mx-time-header[data-v-2883ab56]{\n  box-sizing:border-box;\n  height:34px;\n  line-height:34px;\n  text-align:center;\n  overflow:hidden\n}\n.mx-btn-icon-double-left[data-v-2883ab56],.mx-btn-icon-left[data-v-2883ab56]{\n  float:left\n}\n.mx-btn-icon-double-right[data-v-2883ab56],.mx-btn-icon-right[data-v-2883ab56]{\n  float:right\n}\n.mx-calendar-header-label[data-v-2883ab56]{\n  font-size:14px\n}\n.mx-calendar-decade-separator[data-v-2883ab56]{\n  margin:0 2px\n}\n.mx-calendar-decade-separator[data-v-2883ab56]:after{\n  content:\"~\"\n}\n.mx-calendar-content[data-v-2883ab56]{\n  position:relative;\n  height:224px;\n  box-sizing:border-box\n}\n.mx-calendar-content .cell[data-v-2883ab56]{\n  cursor:pointer\n}\n.mx-calendar-content .cell[data-v-2883ab56]:hover{\n  color:#73879c;\n  background-color:rgb(243.15,248.85,253.8)\n}\n.mx-calendar-content .cell.active[data-v-2883ab56]{\n  color:#fff;\n  background-color:#1284e7\n}\n.mx-calendar-content .cell.hover-in-range[data-v-2883ab56],.mx-calendar-content .cell.in-range[data-v-2883ab56]{\n  color:#73879c;\n  background-color:rgb(219.45,236.55,251.4)\n}\n.mx-calendar-content .cell.disabled[data-v-2883ab56]{\n  cursor:not-allowed;\n  color:#ccc;\n  background-color:#f3f3f3\n}\n.mx-calendar-week-mode .mx-date-row[data-v-2883ab56]{\n  cursor:pointer\n}\n.mx-calendar-week-mode .mx-date-row[data-v-2883ab56]:hover{\n  background-color:rgb(243.15,248.85,253.8)\n}\n.mx-calendar-week-mode .mx-date-row.mx-active-week[data-v-2883ab56]{\n  background-color:rgb(219.45,236.55,251.4)\n}\n.mx-calendar-week-mode .mx-date-row .cell.active[data-v-2883ab56],.mx-calendar-week-mode .mx-date-row .cell[data-v-2883ab56]:hover{\n  color:inherit;\n  background-color:transparent\n}\n.mx-week-number[data-v-2883ab56]{\n  opacity:.5\n}\n.mx-table[data-v-2883ab56]{\n  table-layout:fixed;\n  border-collapse:separate;\n  border-spacing:0;\n  width:100%;\n  height:100%;\n  box-sizing:border-box;\n  text-align:center\n}\n.mx-table th[data-v-2883ab56]{\n  font-weight:500\n}\n.mx-table td[data-v-2883ab56],.mx-table th[data-v-2883ab56]{\n  padding:0;\n  vertical-align:middle\n}\n.mx-table-date td[data-v-2883ab56],.mx-table-date th[data-v-2883ab56]{\n  font-size:12px\n}\n.mx-table-date .today[data-v-2883ab56]{\n  color:rgb(41.7,144.3,233.4)\n}\n.mx-table-date .cell.not-current-month[data-v-2883ab56]{\n  color:#ccc;\n  background:none\n}\n.mx-time[data-v-2883ab56]{\n  flex:1;\n  width:224px;\n  background:#fff\n}\n.mx-time+.mx-time[data-v-2883ab56]{\n  border-left:1px solid #e8e8e8\n}\n.mx-calendar-time[data-v-2883ab56]{\n  position:absolute;\n  top:0;\n  left:0;\n  width:100%;\n  height:100%\n}\n.mx-time-header[data-v-2883ab56]{\n  border-bottom:1px solid #e8e8e8\n}\n.mx-time-content[data-v-2883ab56]{\n  height:224px;\n  box-sizing:border-box;\n  overflow:hidden\n}\n.mx-time-columns[data-v-2883ab56]{\n  display:flex;\n  width:100%;\n  height:100%;\n  overflow:hidden\n}\n.mx-time-column[data-v-2883ab56]{\n  flex:1;\n  position:relative;\n  border-left:1px solid #e8e8e8;\n  text-align:center\n}\n.mx-time-column[data-v-2883ab56]:first-child{\n  border-left:0\n}\n.mx-time-column .mx-time-list[data-v-2883ab56]{\n  margin:0;\n  padding:0;\n  list-style:none\n}\n.mx-time-column .mx-time-list[data-v-2883ab56]:after{\n  content:\"\";\n  display:block;\n  height:192px\n}\n.mx-time-column .mx-time-item[data-v-2883ab56]{\n  cursor:pointer;\n  font-size:12px;\n  height:32px;\n  line-height:32px\n}\n.mx-time-column .mx-time-item[data-v-2883ab56]:hover{\n  color:#73879c;\n  background-color:rgb(243.15,248.85,253.8)\n}\n.mx-time-column .mx-time-item.active[data-v-2883ab56]{\n  color:#1284e7;\n  background-color:transparent;\n  font-weight:700\n}\n.mx-time-column .mx-time-item.disabled[data-v-2883ab56]{\n  cursor:not-allowed;\n  color:#ccc;\n  background-color:#f3f3f3\n}\n.mx-time-option[data-v-2883ab56]{\n  cursor:pointer;\n  padding:8px 10px;\n  font-size:14px;\n  line-height:20px\n}\n.mx-time-option[data-v-2883ab56]:hover{\n  color:#73879c;\n  background-color:rgb(243.15,248.85,253.8)\n}\n.mx-time-option.active[data-v-2883ab56]{\n  color:#1284e7;\n  background-color:transparent;\n  font-weight:700\n}\n.mx-time-option.disabled[data-v-2883ab56]{\n  cursor:not-allowed;\n  color:#ccc;\n  background-color:#f3f3f3\n}\n.el-input .el-input__inner[data-v-2883ab56]:focus,.el-range-editor.is-active[data-v-2883ab56],.el-range-editor.is-active[data-v-2883ab56]:hover,.el-select .el-input.is-focus .el-input__inner[data-v-2883ab56],.el-select .el-input__inner[data-v-2883ab56]:focus,.el-textarea .el-input__inner[data-v-2883ab56]:focus{\n  border:1.3px solid #1b63d4!important;\n  box-shadow:0 2px 10px rgba(187,209,243,.5)\n}\n.mx-input[data-v-2883ab56]{\n  height:40px!important\n}\n.mx-datepicker-sidebar[data-v-2883ab56]{\n  width:151px!important\n}\n.mx-table-date td[data-v-2883ab56],.mx-table-date th[data-v-2883ab56]{\n  height:32px;\n  font-size:14px!important\n}\n.mx-btn-shortcut[data-v-2883ab56]{\n  display:block;\n  padding:0 6px;\n  line-height:30px!important\n}\n[data-v-2883ab56]:root{\n  --vs-line-height:1.6\n}\n.btn-popover[data-v-2883ab56]{\n  height:40px;\n  background-color:#fff;\n  width:100%;\n  padding:10px;\n  cursor:pointer\n}\n.btn-popover .title-1[data-v-2883ab56]{\n  font-weight:400;\n  font-size:16px;\n  color:#454545;\n  margin-left:10px\n}\n.btn-popover[data-v-2883ab56]:hover{\n  background-color:#f3f4f6\n}\n.el-popover[data-v-2883ab56]{\n  padding:0!important;\n  border-radius:5px!important\n}\n.el-upload[data-v-2883ab56]{\n  width:100%\n}\n.el-upload-dragger[data-v-2883ab56]{\n  width:100%!important;\n  background:linear-gradient(0deg,rgba(33,150,243,.03),rgba(33,150,243,.03)),#fff!important;\n  border:1px dashed transparent!important;\n  border-radius:5px!important;\n  height:100%!important\n}\n.kg-popup[data-v-2883ab56]{\n  transition:all .5s ease-in-out;\n  position:fixed;\n  top:0;\n  left:50%;\n  transform:translateX(-50%)\n}\n.noselect[data-v-2883ab56]{\n  -webkit-touch-callout:none;\n  -webkit-user-select:none;\n  -moz-user-select:none;\n  user-select:none\n}\n.ProseMirror[data-v-2883ab56]{\n  border:0;\n  outline:none\n}\n.ProseMirror>*+*[data-v-2883ab56]{\n  margin-top:.75em\n}\n.ProseMirror ol[data-v-2883ab56],.ProseMirror ul[data-v-2883ab56]{\n  padding:0 1rem\n}\n.ProseMirror h1[data-v-2883ab56],.ProseMirror h2[data-v-2883ab56],.ProseMirror h3[data-v-2883ab56],.ProseMirror h4[data-v-2883ab56],.ProseMirror h5[data-v-2883ab56],.ProseMirror h6[data-v-2883ab56]{\n  line-height:1.1\n}\n.ProseMirror code[data-v-2883ab56]{\n  background-color:rgba(97,97,97,.1);\n  color:#616161\n}\n.ProseMirror pre[data-v-2883ab56]{\n  background:#0d0d0d;\n  color:#fff;\n  font-family:\"JetBrainsMono\",monospace;\n  padding:.75rem 1rem;\n  border-radius:.5rem\n}\n.ProseMirror pre code[data-v-2883ab56]{\n  color:inherit;\n  padding:0;\n  background:none;\n  font-size:.8rem\n}\n.ProseMirror img[data-v-2883ab56]{\n  max-width:100%;\n  height:auto\n}\n.ProseMirror blockquote[data-v-2883ab56]{\n  padding-left:1rem;\n  border-left:2px solid rgba(13,13,13,.1)\n}\n.ProseMirror hr[data-v-2883ab56]{\n  border:none;\n  border-top:2px solid rgba(13,13,13,.1);\n  margin:2rem 0\n}\n.ProseMirror[data-v-2883ab56]:focus-visible{\n  outline:none\n}\n.el-color-picker__trigger[data-v-2883ab56]{\n  border:0!important;\n  padding:0!important;\n  outline:none!important\n}\n.el-color-picker__icon[data-v-2883ab56]{\n  visibility:hidden!important\n}\n.el-color-picker--mini .el-color-picker__trigger[data-v-2883ab56],.el-color-picker__color[data-v-2883ab56]{\n  height:22px!important;\n  width:22px!important\n}\n.el-color-picker__color[data-v-2883ab56]{\n  padding:0!important;\n  border:0!important\n}\n.el-color-picker__empty[data-v-2883ab56]{\n  padding-top:1.4px!important\n}\n.el-color-picker--mini[data-v-2883ab56]{\n  height:22px!important\n}\n.el-color-picker__color-inner[data-v-2883ab56]{\n  border:1px solid #e2e2e2!important\n}\n.el-table thead[data-v-2883ab56]{\n  color:#5c6b7a!important;\n  font-family:\"Cabin\"!important\n}\n.el-table thead[data-v-2883ab56],.th[data-v-2883ab56]{\n  font-weight:600!important\n}\n.el-button--mini[data-v-2883ab56],.el-button--text[data-v-2883ab56],.el-date-range-picker__header div[data-v-2883ab56],.el-date-table td span[data-v-2883ab56],.el-input__inner[data-v-2883ab56],.el-picker-panel__shortcut[data-v-2883ab56],.el-select-dropdown__item[data-v-2883ab56],.el-select-dropdown__item.hover[data-v-2883ab56],.el-select-dropdown__item[data-v-2883ab56]:hover,.el-time-spinner__item[data-v-2883ab56]{\n  font-family:\"Cabin\"!important\n}\n.el-progress-bar__inner[data-v-2883ab56],.el-progress-bar__outer[data-v-2883ab56]{\n  border-bottom-left-radius:100px!important;\n  border-top-left-radius:100px!important\n}\n.el-dropdown .el-dropdown__caret-button[data-v-2883ab56]{\n  bottom:2px!important\n}\n.el-dropdown-menu[data-v-2883ab56],.el-dropdown-menu__item[data-v-2883ab56]{\n  padding:0!important\n}\nbutton[data-v-2883ab56]:active,button[data-v-2883ab56]:focus{\n  outline:0!important\n}\n.el-input-group__append[data-v-2883ab56]{\n  padding:0!important\n}\n.el-input-group__prepend[data-v-2883ab56]{\n  padding-left:5px!important;\n  padding-right:5px!important\n}\n.el-menu-item[data-v-2883ab56],.el-submenu__title[data-v-2883ab56]{\n  height:40px!important;\n  line-height:40px!important;\n  font-family:\"Cabin\"!important;\n  font-size:16px!important;\n  font-style:normal!important;\n  font-weight:400!important;\n  color:#5c6b7a!important;\n  margin-bottom:10px!important;\n  border-left:4px solid transparent!important\n}\n.el-menu-item.is-active[data-v-2883ab56]{\n  color:#1b63d4!important;\n  font-weight:600!important;\n  border-left:4px solid #1b63d4!important;\n  border-top-left-radius:2px!important;\n  border-bottom-left-radius:2px!important\n}\n.el-menu--collapse[data-v-2883ab56]{\n  width:80px!important\n}\n.el-menu[data-v-2883ab56]{\n  border-right:0!important\n}\n.el-dialog__body[data-v-2883ab56],.el-dialog__header[data-v-2883ab56]{\n  padding:0!important\n}\n.el-dialog[data-v-2883ab56]{\n  border-radius:10px!important\n}\n.card-dialog[data-v-2883ab56]{\n  padding:20px!important\n}\n.vue-swatches__trigger[data-v-2883ab56]{\n  width:22px!important;\n  height:22px!important;\n  border-radius:2px!important\n}\n.vue-swatches[data-v-2883ab56]{\n  height:22px!important\n}\n.CodeMirror[data-v-2883ab56]{\n  height:calc(100vh - 150px)!important\n}\n.vue-swatches__trigger[data-v-2883ab56]{\n  border:1px solid #e2e2e2!important\n}\n.gradient-pattern[data-v-2883ab56]{\n  box-sizing:content-box;\n  width:320px;\n  height:135px;\n  border:none;\n  font:normal 100%/normal Arial,Helvetica,sans-serif;\n  color:#fff;\n  text-overflow:clip;\n  background:linear-gradient(45deg,rgba(0,0,0,.0980392) 25%,transparent 0,transparent 75%,rgba(0,0,0,.0980392) 0,rgba(0,0,0,.0980392) 0),linear-gradient(45deg,rgba(0,0,0,.0980392) 25%,transparent 0,transparent 75%,rgba(0,0,0,.0980392) 0,rgba(0,0,0,.0980392) 0),#fff;\n  background-position:0 0,40px 40px;\n  background-origin:padding-box;\n  -webkit-background-clip:border-box;\n  background-clip:border-box;\n  background-size:80px 80px\n}\n.upload-demo[data-v-2883ab56],.upload-demo .el-upload[data-v-2883ab56]{\n  width:100%\n}\n.btn-icon[data-v-2883ab56]{\n  height:40px;\n  padding:10px;\n  width:40px;\n  position:absolute;\n  bottom:18px;\n  right:11px;\n  background:#fff;\n  border:1px solid #e2e2e2;\n  border-radius:5px;\n  margin-left:18px;\n  cursor:pointer\n}\n.btn-icon[data-v-2883ab56]:hover{\n  background-color:#f3f4f6\n}\n.btn-crop[data-v-2883ab56]{\n  height:40px;\n  padding:10px;\n  width:40px;\n  position:absolute;\n  bottom:18px;\n  right:60px;\n  background:#fff;\n  border:1px solid #e2e2e2;\n  border-radius:5px;\n  margin-left:18px;\n  cursor:pointer\n}\n.btn-crop[data-v-2883ab56]:hover{\n  background-color:#f3f4f6\n}\n.image-data-2[data-v-2883ab56]{\n  position:absolute;\n  top:2px;\n  width:267px;\n  left:2px;\n  border-top-right-radius:5px;\n  border-top-left-radius:5px\n}\n.image-data-2 .img-iklan[data-v-2883ab56]{\n  height:135px;\n  border-radius:5px 5px 0 0;\n  -o-object-fit:cover;\n     object-fit:cover;\n  width:100%\n}\n.kg-container .preview[data-v-2883ab56]{\n  background:#fafbfc\n}\n.kg-container .preview .box-container[data-v-2883ab56]{\n  width:300px;\n  height:600px;\n  background:#fff;\n  border:1px solid #e2e2e2;\n  margin-bottom:20px\n}\n.kg-container .preview .box-container .img-empty[data-v-2883ab56]{\n  opacity:.5\n}\n.kg-container .preview .box-container .img-data[data-v-2883ab56]{\n  width:100%;\n  height:100%;\n  -o-object-fit:none;\n     object-fit:none;\n  -o-object-position:left top;\n     object-position:left top\n}\n.kg-container .preview .box-container .title-1[data-v-2883ab56]{\n  font-weight:600;\n  font-size:20px;\n  color:#454545;\n  margin-top:18px;\n  margin-bottom:5px;\n  text-align:center;\n  padding-left:20px;\n  padding-right:20px\n}\n.kg-container .preview .box-container .subtitle-1[data-v-2883ab56]{\n  font-style:italic;\n  font-weight:400;\n  font-size:12px;\n  color:#9a9a9a;\n  text-align:center;\n  padding-left:20px;\n  padding-right:20px;\n  padding-bottom:20px\n}\n.kg-container .preview .btn-save[data-v-2883ab56]{\n  max-width:125px;\n  background:#fff;\n  border:1px solid #e2e2e2;\n  border-radius:5px;\n  height:36px;\n  padding-left:15px;\n  padding-right:15px;\n  cursor:pointer\n}\n.kg-container .preview .btn-save .name-btn[data-v-2883ab56]{\n  font-weight:700;\n  font-size:14px;\n  padding-bottom:1px;\n  color:#1b63d4;\n  padding-left:10px\n}\n.kg-container .preview .btn-save[data-v-2883ab56]:hover{\n  background-color:#f3f4f6;\n  border:1px solid transparent\n}\n.kg-container .panel-customize[data-v-2883ab56]{\n  width:360px;\n  height:100vh;\n  background:#f8f8f8;\n  border:1px solid #e2e2e2;\n  box-shadow:0 0 12px rgba(51,51,51,.1);\n  transform:translateX(0);\n  transition-duration:.2s;\n  transition-timing-function:cubic-bezier(.4,0,.2,1);\n  transition-property:transform,visibility,width\n}\n.kg-container .panel-customize .back-btn[data-v-2883ab56]{\n  width:100%;\n  height:40px;\n  background:#fff;\n  padding-left:20px;\n  font-weight:700;\n  font-size:14px;\n  color:#1b63d4;\n  cursor:pointer\n}\n.kg-container .panel-customize .back-btn[data-v-2883ab56]:hover{\n  background:#f8f8f8\n}\n.kg-container .panel-customize .header-panel[data-v-2883ab56]{\n  margin-bottom:10px;\n  padding:15px;\n  border-top:1px solid #e2e2e2;\n  background:#fff;\n  border-bottom:1px solid #e2e2e2\n}\n.kg-container .panel-customize .header-panel .back-button[data-v-2883ab56]{\n  width:40px;\n  margin-right:10px;\n  height:40px;\n  background:#fff;\n  border:1px solid #e2e2e2;\n  border-radius:5px;\n  cursor:pointer\n}\n.kg-container .panel-customize .header-panel .back-button[data-v-2883ab56]:hover{\n  background-color:#f3f4f6\n}\n.kg-container .panel-customize .header-panel .title-header[data-v-2883ab56]{\n  font-weight:400;\n  font-size:12px;\n  color:#9a9a9a\n}\n.kg-container .panel-customize .header-panel .sub-header[data-v-2883ab56]{\n  font-weight:500;\n  font-size:16px;\n  color:#333\n}\n.kg-container .panel-customize .body-panel[data-v-2883ab56]{\n  overflow-y:scroll\n}\n.kg-container .panel-customize .body-panel .card-box[data-v-2883ab56]{\n  width:100%;\n  padding:15px;\n  background:#fff;\n  border-top:1px solid #e2e2e2;\n  border-bottom:1px solid #e2e2e2;\n  border-left:2px solid transparent;\n  margin-bottom:10px\n}\n.kg-container .panel-customize .body-panel .card-box .header-card[data-v-2883ab56]{\n  margin-bottom:22px;\n  font-weight:500;\n  font-size:16px;\n  color:#454545\n}\n.kg-container .panel-customize .body-panel .card-box .form-panel[data-v-2883ab56]{\n  padding:0;\n  background:#fff;\n  position:relative\n}\n.kg-container .panel-customize .body-panel .card-box .form-panel .card-assets[data-v-2883ab56]{\n  margin-bottom:10px;\n  overflow-x:scroll;\n  scrollbar-width:none;\n  -ms-overflow-style:none\n}\n.kg-container .panel-customize .body-panel .card-box .form-panel .card-assets .item-assets[data-v-2883ab56]{\n  padding:2px 12px;\n  background:#fff;\n  border:1px solid #e2e2e2;\n  font-size:14px;\n  border-radius:500px;\n  color:#1b63d4;\n  cursor:pointer;\n  margin-right:4px\n}\n.kg-container .panel-customize .body-panel .card-box .form-panel .card-assets .item-active[data-v-2883ab56]{\n  background:#1b63d4;\n  border:1px solid #1b63d4;\n  color:#fff\n}\n.kg-container .panel-customize .body-panel .card-box .form-panel .card-assets[data-v-2883ab56]::-webkit-scrollbar{\n  width:0;\n  height:0\n}\n.kg-container .panel-customize .body-panel .card-box .form-panel .image-data[data-v-2883ab56]{\n  background:#fff;\n  border:1px solid #e2e2e2;\n  border-radius:5px;\n  padding-bottom:10px\n}\n.kg-container .panel-customize .body-panel .card-box .form-panel .image-data .img-iklan[data-v-2883ab56]{\n  height:135px;\n  border-radius:5px 5px 0 0;\n  -o-object-fit:cover;\n     object-fit:cover;\n  width:100%\n}\n.kg-container .panel-customize .body-panel .card-box .form-panel .image-data .footer-iklan[data-v-2883ab56]{\n  padding-left:11px;\n  width:157px;\n  margin-top:10px\n}\n.kg-container .panel-customize .body-panel .card-box .form-panel .image-data .footer-iklan .btn-change[data-v-2883ab56]{\n  background:#fff;\n  border:1px solid #e2e2e2;\n  border-radius:5px;\n  height:40px;\n  padding-left:15px;\n  padding-right:15px;\n  cursor:pointer\n}\n.kg-container .panel-customize .body-panel .card-box .form-panel .image-data .footer-iklan .btn-change .name-btn[data-v-2883ab56]{\n  font-weight:700;\n  font-size:14px;\n  padding-bottom:1px;\n  color:#1b63d4;\n  padding-left:10px\n}\n.kg-container .panel-customize .body-panel .card-box .form-panel .image-data .footer-iklan .btn-change[data-v-2883ab56]:hover{\n  background-color:#f3f4f6\n}\n.kg-container .panel-customize .body-panel .card-box .form-panel .box-form[data-v-2883ab56]{\n  margin-bottom:10px\n}\n.kg-container .panel-customize .body-panel .card-box .form-panel .box-form .title-form[data-v-2883ab56]{\n  font-weight:400;\n  font-size:16px;\n  color:#454545;\n  margin-bottom:3px\n}\n.kg-container .panel-customize .body-panel .card-box .form-panel .upload-card[data-v-2883ab56]{\n  height:100%;\n  border:1px dashed #1b63d4\n}\n.kg-container .panel-customize .body-panel .card-box .form-panel .upload-card .icon-upload[data-v-2883ab56]{\n  height:45.5px;\n  padding-left:15px;\n  margin-right:8px\n}\n.kg-container .panel-customize .body-panel .card-box .form-panel .upload-card .empty-space[data-v-2883ab56]{\n  font-weight:700;\n  font-size:14px;\n  text-align:left;\n  color:#333\n}\n.kg-container .panel-customize .body-panel .card-box .form-panel .upload-card .upload-name[data-v-2883ab56]{\n  font-weight:400;\n  font-size:12px;\n  text-align:left;\n  color:#757575\n}\n.kg-container .panel-customize .body-panel .card-box .form-panel .upload-card .btn-upload[data-v-2883ab56]{\n  width:90%;\n  margin-left:auto;\n  margin-right:auto;\n  background:#fff;\n  border:1px solid #1b63d4;\n  color:#1b63d4;\n  border-radius:5px;\n  height:34px;\n  margin-top:20px;\n  cursor:pointer\n}\n.kg-container .panel-customize .body-panel .card-box .form-panel .upload-card .btn-upload .name-btn[data-v-2883ab56]{\n  font-weight:700;\n  font-size:14px;\n  color:#1b63d4;\n  padding-left:10px\n}\n.kg-container .panel-customize .body-panel .card-box .form-panel .upload-card .btn-upload[data-v-2883ab56]:hover{\n  background-color:#f3f4f6;\n  border:0\n}\n.kg-container .panel-customize .body-panel .card-box .component-card[data-v-2883ab56]{\n  background:#fff;\n  border:1px solid #e2e2e2;\n  margin-bottom:10px\n}\n.kg-container .panel-customize .body-panel .card-box .component-card .header-component[data-v-2883ab56]{\n  border-bottom:1px solid #e2e2e2;\n  height:48px;\n  padding-left:15px;\n  padding-right:15px;\n  font-weight:500;\n  font-size:16px;\n  color:#333\n}\n.kg-container .panel-customize .body-panel .card-box .component-card .header-component .icon-header[data-v-2883ab56]{\n  margin-right:10px\n}\n.kg-container .panel-customize .body-panel .card-box .component-card .header-component .btn-preview[data-v-2883ab56]{\n  cursor:pointer\n}\n.kg-container .panel-customize .body-panel .card-box .component-card .body-component[data-v-2883ab56]{\n  padding:10px 15px\n}\n.kg-container .panel-customize .footer-panel[data-v-2883ab56]{\n  bottom:0;\n  position:fixed;\n  width:100%\n}\n.kg-container .panel-customize .footer-panel .hide-panel[data-v-2883ab56]{\n  height:40px;\n  background:#fff;\n  width:inherit;\n  cursor:pointer;\n  padding-right:15px;\n  padding-left:15px\n}\n.kg-container .panel-customize .footer-panel .hide-panel .hide-text[data-v-2883ab56]{\n  font-weight:700;\n  font-size:14px;\n  color:#1b63d4\n}\n.kg-container .panel-customize .footer-panel .hide-panel[data-v-2883ab56]:hover{\n  background:#f8f8f8\n}\n.kg-container .panel-customize .footer-panel .box-action[data-v-2883ab56]{\n  height:70px;\n  background:#fff;\n  width:inherit;\n  border-top:1px solid #e2e2e2\n}\n.kg-container .panel-hide[data-v-2883ab56]{\n  width:50px;\n  height:100vh;\n  background:#f8f8f8;\n  border:1px solid #e2e2e2;\n  box-shadow:0 0 12px rgba(51,51,51,.1);\n  transform:translateX(0);\n  transition-duration:.2s;\n  transition-timing-function:cubic-bezier(.4,0,.2,1);\n  transition-property:transform,visibility,width\n}\n.kg-container .panel-hide .btn-show[data-v-2883ab56]{\n  width:100%;\n  height:40px;\n  background:#fff;\n  border-bottom:1px solid #e2e2e2;\n  cursor:pointer\n}\n.kg-container .panel-hide .btn-show[data-v-2883ab56]:hover{\n  background:#f8f8f8\n}\n.kg-container .panel-hide .name-panel[data-v-2883ab56]{\n  font-weight:600;\n  font-size:14px;\n  letter-spacing:.05em;\n  text-transform:uppercase;\n  color:#757575;\n  width:107px;\n  transform:rotate(-90deg);\n  white-space:nowrap;\n  overflow:hidden\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageArray_vue_vue_type_style_index_0_id_350ca3a7_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(285);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageArray_vue_vue_type_style_index_0_id_350ca3a7_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageArray_vue_vue_type_style_index_0_id_350ca3a7_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageArray_vue_vue_type_style_index_0_id_350ca3a7_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageArray_vue_vue_type_style_index_0_id_350ca3a7_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 352:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(7);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n@font-face{\n  font-family:\"Cabin\";\n\n  src:local(\"Cabin\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\")\n}\n@font-face{\n  font-family:\"Roboto Mono\";\n\n  src:local(\"Roboto Mono\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\")\n}\n.header-1[data-v-350ca3a7]{\n  font-size:32px\n}\n.header-1[data-v-350ca3a7],.header-2[data-v-350ca3a7]{\n  font-family:\"Cabin\";\n  font-weight:600;\n  color:#454545\n}\n.header-2[data-v-350ca3a7]{\n  font-size:28px\n}\n.header-3[data-v-350ca3a7]{\n  font-size:24px\n}\n.header-3[data-v-350ca3a7],.header-4[data-v-350ca3a7]{\n  font-family:\"Cabin\";\n  font-weight:600;\n  color:#454545\n}\n.header-4[data-v-350ca3a7]{\n  font-size:20px\n}\n.header-5[data-v-350ca3a7]{\n  font-size:18px\n}\n.header-5[data-v-350ca3a7],.header-6[data-v-350ca3a7]{\n  font-family:\"Cabin\";\n  font-weight:600;\n  color:#454545\n}\n.header-6[data-v-350ca3a7]{\n  font-size:14px\n}\n.subtitle-1[data-v-350ca3a7]{\n  color:#757575\n}\n.subtitle-1[data-v-350ca3a7],.subtitle-2[data-v-350ca3a7]{\n  font-family:\"Cabin\";\n  font-size:16px;\n  font-weight:400\n}\n.subtitle-2[data-v-350ca3a7]{\n  color:#454545\n}\n.no-select[data-v-350ca3a7]{\n  -webkit-touch-callout:none;\n  -webkit-user-select:none;\n  -moz-user-select:none;\n  user-select:none\n}\n.mx-icon-double-left[data-v-350ca3a7]:after,.mx-icon-double-left[data-v-350ca3a7]:before,.mx-icon-double-right[data-v-350ca3a7]:after,.mx-icon-double-right[data-v-350ca3a7]:before,.mx-icon-left[data-v-350ca3a7]:before,.mx-icon-right[data-v-350ca3a7]:before{\n  content:\"\";\n  position:relative;\n  top:-1px;\n  display:inline-block;\n  width:10px;\n  height:10px;\n  vertical-align:middle;\n  border-color:currentcolor;\n  border-style:solid;\n  border-width:2px 0 0 2px;\n  border-radius:1px;\n  box-sizing:border-box;\n  transform-origin:center;\n  transform:rotate(-45deg) scale(.7)\n}\n.mx-icon-double-left[data-v-350ca3a7]:after{\n  left:-4px\n}\n.mx-icon-double-right[data-v-350ca3a7]:before{\n  left:4px\n}\n.mx-icon-double-right[data-v-350ca3a7]:after,.mx-icon-double-right[data-v-350ca3a7]:before,.mx-icon-right[data-v-350ca3a7]:before{\n  transform:rotate(135deg) scale(.7)\n}\n.mx-btn[data-v-350ca3a7]{\n  box-sizing:border-box;\n  line-height:1;\n  font-size:14px;\n  font-weight:500;\n  padding:7px 15px;\n  margin:0;\n  cursor:pointer;\n  background-color:transparent;\n  outline:none;\n  border:1px solid rgba(0,0,0,.1);\n  border-radius:4px;\n  color:#73879c;\n  white-space:nowrap\n}\n.mx-btn[data-v-350ca3a7]:hover{\n  border-color:#1284e7;\n  color:#1284e7\n}\n.mx-btn.disabled[data-v-350ca3a7],.mx-btn[data-v-350ca3a7]:disabled{\n  color:#ccc;\n  cursor:not-allowed\n}\n.mx-btn-text[data-v-350ca3a7]{\n  border:0;\n  padding:0 4px;\n  text-align:left;\n  line-height:inherit\n}\n.mx-scrollbar[data-v-350ca3a7]{\n  height:100%\n}\n.mx-scrollbar:hover .mx-scrollbar-track[data-v-350ca3a7]{\n  opacity:1\n}\n.mx-scrollbar-wrap[data-v-350ca3a7]{\n  height:100%;\n  overflow-x:hidden;\n  overflow-y:auto\n}\n.mx-scrollbar-track[data-v-350ca3a7]{\n  position:absolute;\n  top:2px;\n  right:2px;\n  bottom:2px;\n  width:6px;\n  z-index:1;\n  border-radius:4px;\n  opacity:0;\n  transition:opacity .24s ease-out\n}\n.mx-scrollbar-track .mx-scrollbar-thumb[data-v-350ca3a7]{\n  position:absolute;\n  width:100%;\n  height:0;\n  cursor:pointer;\n  border-radius:inherit;\n  background-color:rgba(144,147,153,.3);\n  transition:background-color .3s\n}\n.mx-zoom-in-down-enter-active[data-v-350ca3a7],.mx-zoom-in-down-leave-active[data-v-350ca3a7]{\n  opacity:1;\n  transform:scaleY(1);\n  transition:transform .3s cubic-bezier(.23,1,.32,1),opacity .3s cubic-bezier(.23,1,.32,1);\n  transform-origin:center top\n}\n.mx-zoom-in-down-enter[data-v-350ca3a7],.mx-zoom-in-down-enter-from[data-v-350ca3a7],.mx-zoom-in-down-leave-to[data-v-350ca3a7]{\n  opacity:0;\n  transform:scaleY(0)\n}\n.mx-datepicker[data-v-350ca3a7]{\n  position:relative;\n  display:inline-block;\n  width:210px\n}\n.mx-datepicker svg[data-v-350ca3a7]{\n  width:1em;\n  height:1em;\n  vertical-align:-.15em;\n  fill:currentColor;\n  overflow:hidden\n}\n.mx-datepicker-range[data-v-350ca3a7]{\n  width:320px\n}\n.mx-datepicker-inline[data-v-350ca3a7]{\n  width:auto\n}\n.mx-input-wrapper[data-v-350ca3a7]{\n  position:relative\n}\n.mx-input[data-v-350ca3a7]{\n  display:inline-block;\n  box-sizing:border-box;\n  width:100%;\n  height:34px;\n  padding:6px 30px 6px 10px;\n  font-size:14px;\n  line-height:1.4;\n  color:#555;\n  background-color:#fff;\n  border:1px solid #ccc;\n  border-radius:4px;\n  box-shadow:inset 0 1px 1px rgba(0,0,0,.075)\n}\n.mx-input[data-v-350ca3a7]:focus,.mx-input[data-v-350ca3a7]:hover{\n  border-color:#409aff\n}\n.mx-input.disabled[data-v-350ca3a7],.mx-input[data-v-350ca3a7]:disabled{\n  color:#ccc;\n  background-color:#f3f3f3;\n  border-color:#ccc;\n  cursor:not-allowed\n}\n.mx-input[data-v-350ca3a7]:focus{\n  outline:none\n}\n.mx-input[data-v-350ca3a7]::-ms-clear{\n  display:none\n}\n.mx-icon-calendar[data-v-350ca3a7],.mx-icon-clear[data-v-350ca3a7]{\n  position:absolute;\n  top:50%;\n  right:8px;\n  transform:translateY(-50%);\n  font-size:16px;\n  line-height:1;\n  color:rgba(0,0,0,.5);\n  vertical-align:middle\n}\n.mx-icon-clear[data-v-350ca3a7]{\n  cursor:pointer\n}\n.mx-icon-clear[data-v-350ca3a7]:hover{\n  color:rgba(0,0,0,.8)\n}\n.mx-datepicker-main[data-v-350ca3a7]{\n  font:14px/1.5 \"Helvetica Neue\",Helvetica,Arial,\"Microsoft Yahei\",sans-serif;\n  color:#73879c;\n  background-color:#fff;\n  border:1px solid #e8e8e8\n}\n.mx-datepicker-popup[data-v-350ca3a7]{\n  position:absolute;\n  margin-top:1px;\n  margin-bottom:1px;\n  box-shadow:0 6px 12px rgba(0,0,0,.175);\n  z-index:2001\n}\n.mx-datepicker-sidebar[data-v-350ca3a7]{\n  float:left;\n  box-sizing:border-box;\n  width:100px;\n  padding:6px;\n  overflow:auto\n}\n.mx-datepicker-sidebar+.mx-datepicker-content[data-v-350ca3a7]{\n  margin-left:100px;\n  border-left:1px solid #e8e8e8\n}\n.mx-datepicker-body[data-v-350ca3a7]{\n  position:relative;\n  -webkit-user-select:none;\n     -moz-user-select:none;\n          user-select:none\n}\n.mx-btn-shortcut[data-v-350ca3a7]{\n  line-height:24px\n}\n.mx-range-wrapper[data-v-350ca3a7]{\n  display:flex\n}\n@media(max-width:750px){\n.mx-range-wrapper[data-v-350ca3a7]{\n    flex-direction:column\n}\n}\n.mx-datepicker-header[data-v-350ca3a7]{\n  padding:6px 8px;\n  border-bottom:1px solid #e8e8e8\n}\n.mx-datepicker-footer[data-v-350ca3a7]{\n  padding:6px 8px;\n  text-align:right;\n  border-top:1px solid #e8e8e8\n}\n.mx-calendar[data-v-350ca3a7]{\n  box-sizing:border-box;\n  width:248px;\n  padding:6px 12px\n}\n.mx-calendar+.mx-calendar[data-v-350ca3a7]{\n  border-left:1px solid #e8e8e8\n}\n.mx-calendar-header[data-v-350ca3a7],.mx-time-header[data-v-350ca3a7]{\n  box-sizing:border-box;\n  height:34px;\n  line-height:34px;\n  text-align:center;\n  overflow:hidden\n}\n.mx-btn-icon-double-left[data-v-350ca3a7],.mx-btn-icon-left[data-v-350ca3a7]{\n  float:left\n}\n.mx-btn-icon-double-right[data-v-350ca3a7],.mx-btn-icon-right[data-v-350ca3a7]{\n  float:right\n}\n.mx-calendar-header-label[data-v-350ca3a7]{\n  font-size:14px\n}\n.mx-calendar-decade-separator[data-v-350ca3a7]{\n  margin:0 2px\n}\n.mx-calendar-decade-separator[data-v-350ca3a7]:after{\n  content:\"~\"\n}\n.mx-calendar-content[data-v-350ca3a7]{\n  position:relative;\n  height:224px;\n  box-sizing:border-box\n}\n.mx-calendar-content .cell[data-v-350ca3a7]{\n  cursor:pointer\n}\n.mx-calendar-content .cell[data-v-350ca3a7]:hover{\n  color:#73879c;\n  background-color:rgb(243.15,248.85,253.8)\n}\n.mx-calendar-content .cell.active[data-v-350ca3a7]{\n  color:#fff;\n  background-color:#1284e7\n}\n.mx-calendar-content .cell.hover-in-range[data-v-350ca3a7],.mx-calendar-content .cell.in-range[data-v-350ca3a7]{\n  color:#73879c;\n  background-color:rgb(219.45,236.55,251.4)\n}\n.mx-calendar-content .cell.disabled[data-v-350ca3a7]{\n  cursor:not-allowed;\n  color:#ccc;\n  background-color:#f3f3f3\n}\n.mx-calendar-week-mode .mx-date-row[data-v-350ca3a7]{\n  cursor:pointer\n}\n.mx-calendar-week-mode .mx-date-row[data-v-350ca3a7]:hover{\n  background-color:rgb(243.15,248.85,253.8)\n}\n.mx-calendar-week-mode .mx-date-row.mx-active-week[data-v-350ca3a7]{\n  background-color:rgb(219.45,236.55,251.4)\n}\n.mx-calendar-week-mode .mx-date-row .cell.active[data-v-350ca3a7],.mx-calendar-week-mode .mx-date-row .cell[data-v-350ca3a7]:hover{\n  color:inherit;\n  background-color:transparent\n}\n.mx-week-number[data-v-350ca3a7]{\n  opacity:.5\n}\n.mx-table[data-v-350ca3a7]{\n  table-layout:fixed;\n  border-collapse:separate;\n  border-spacing:0;\n  width:100%;\n  height:100%;\n  box-sizing:border-box;\n  text-align:center\n}\n.mx-table th[data-v-350ca3a7]{\n  font-weight:500\n}\n.mx-table td[data-v-350ca3a7],.mx-table th[data-v-350ca3a7]{\n  padding:0;\n  vertical-align:middle\n}\n.mx-table-date td[data-v-350ca3a7],.mx-table-date th[data-v-350ca3a7]{\n  font-size:12px\n}\n.mx-table-date .today[data-v-350ca3a7]{\n  color:rgb(41.7,144.3,233.4)\n}\n.mx-table-date .cell.not-current-month[data-v-350ca3a7]{\n  color:#ccc;\n  background:none\n}\n.mx-time[data-v-350ca3a7]{\n  flex:1;\n  width:224px;\n  background:#fff\n}\n.mx-time+.mx-time[data-v-350ca3a7]{\n  border-left:1px solid #e8e8e8\n}\n.mx-calendar-time[data-v-350ca3a7]{\n  position:absolute;\n  top:0;\n  left:0;\n  width:100%;\n  height:100%\n}\n.mx-time-header[data-v-350ca3a7]{\n  border-bottom:1px solid #e8e8e8\n}\n.mx-time-content[data-v-350ca3a7]{\n  height:224px;\n  box-sizing:border-box;\n  overflow:hidden\n}\n.mx-time-columns[data-v-350ca3a7]{\n  display:flex;\n  width:100%;\n  height:100%;\n  overflow:hidden\n}\n.mx-time-column[data-v-350ca3a7]{\n  flex:1;\n  position:relative;\n  border-left:1px solid #e8e8e8;\n  text-align:center\n}\n.mx-time-column[data-v-350ca3a7]:first-child{\n  border-left:0\n}\n.mx-time-column .mx-time-list[data-v-350ca3a7]{\n  margin:0;\n  padding:0;\n  list-style:none\n}\n.mx-time-column .mx-time-list[data-v-350ca3a7]:after{\n  content:\"\";\n  display:block;\n  height:192px\n}\n.mx-time-column .mx-time-item[data-v-350ca3a7]{\n  cursor:pointer;\n  font-size:12px;\n  height:32px;\n  line-height:32px\n}\n.mx-time-column .mx-time-item[data-v-350ca3a7]:hover{\n  color:#73879c;\n  background-color:rgb(243.15,248.85,253.8)\n}\n.mx-time-column .mx-time-item.active[data-v-350ca3a7]{\n  color:#1284e7;\n  background-color:transparent;\n  font-weight:700\n}\n.mx-time-column .mx-time-item.disabled[data-v-350ca3a7]{\n  cursor:not-allowed;\n  color:#ccc;\n  background-color:#f3f3f3\n}\n.mx-time-option[data-v-350ca3a7]{\n  cursor:pointer;\n  padding:8px 10px;\n  font-size:14px;\n  line-height:20px\n}\n.mx-time-option[data-v-350ca3a7]:hover{\n  color:#73879c;\n  background-color:rgb(243.15,248.85,253.8)\n}\n.mx-time-option.active[data-v-350ca3a7]{\n  color:#1284e7;\n  background-color:transparent;\n  font-weight:700\n}\n.mx-time-option.disabled[data-v-350ca3a7]{\n  cursor:not-allowed;\n  color:#ccc;\n  background-color:#f3f3f3\n}\n.el-input .el-input__inner[data-v-350ca3a7]:focus,.el-range-editor.is-active[data-v-350ca3a7],.el-range-editor.is-active[data-v-350ca3a7]:hover,.el-select .el-input.is-focus .el-input__inner[data-v-350ca3a7],.el-select .el-input__inner[data-v-350ca3a7]:focus,.el-textarea .el-input__inner[data-v-350ca3a7]:focus{\n  border:1.3px solid #1b63d4!important;\n  box-shadow:0 2px 10px rgba(187,209,243,.5)\n}\n.mx-input[data-v-350ca3a7]{\n  height:40px!important\n}\n.mx-datepicker-sidebar[data-v-350ca3a7]{\n  width:151px!important\n}\n.mx-table-date td[data-v-350ca3a7],.mx-table-date th[data-v-350ca3a7]{\n  height:32px;\n  font-size:14px!important\n}\n.mx-btn-shortcut[data-v-350ca3a7]{\n  display:block;\n  padding:0 6px;\n  line-height:30px!important\n}\n[data-v-350ca3a7]:root{\n  --vs-line-height:1.6\n}\n.btn-popover[data-v-350ca3a7]{\n  height:40px;\n  background-color:#fff;\n  width:100%;\n  padding:10px;\n  cursor:pointer\n}\n.btn-popover .title-1[data-v-350ca3a7]{\n  font-weight:400;\n  font-size:16px;\n  color:#454545;\n  margin-left:10px\n}\n.btn-popover[data-v-350ca3a7]:hover{\n  background-color:#f3f4f6\n}\n.el-popover[data-v-350ca3a7]{\n  padding:0!important;\n  border-radius:5px!important\n}\n.el-upload[data-v-350ca3a7]{\n  width:100%\n}\n.el-upload-dragger[data-v-350ca3a7]{\n  width:100%!important;\n  background:linear-gradient(0deg,rgba(33,150,243,.03),rgba(33,150,243,.03)),#fff!important;\n  border:1px dashed transparent!important;\n  border-radius:5px!important;\n  height:100%!important\n}\n.kg-popup[data-v-350ca3a7]{\n  transition:all .5s ease-in-out;\n  position:fixed;\n  top:0;\n  left:50%;\n  transform:translateX(-50%)\n}\n.noselect[data-v-350ca3a7]{\n  -webkit-touch-callout:none;\n  -webkit-user-select:none;\n  -moz-user-select:none;\n  user-select:none\n}\n.ProseMirror[data-v-350ca3a7]{\n  border:0;\n  outline:none\n}\n.ProseMirror>*+*[data-v-350ca3a7]{\n  margin-top:.75em\n}\n.ProseMirror ol[data-v-350ca3a7],.ProseMirror ul[data-v-350ca3a7]{\n  padding:0 1rem\n}\n.ProseMirror h1[data-v-350ca3a7],.ProseMirror h2[data-v-350ca3a7],.ProseMirror h3[data-v-350ca3a7],.ProseMirror h4[data-v-350ca3a7],.ProseMirror h5[data-v-350ca3a7],.ProseMirror h6[data-v-350ca3a7]{\n  line-height:1.1\n}\n.ProseMirror code[data-v-350ca3a7]{\n  background-color:rgba(97,97,97,.1);\n  color:#616161\n}\n.ProseMirror pre[data-v-350ca3a7]{\n  background:#0d0d0d;\n  color:#fff;\n  font-family:\"JetBrainsMono\",monospace;\n  padding:.75rem 1rem;\n  border-radius:.5rem\n}\n.ProseMirror pre code[data-v-350ca3a7]{\n  color:inherit;\n  padding:0;\n  background:none;\n  font-size:.8rem\n}\n.ProseMirror img[data-v-350ca3a7]{\n  max-width:100%;\n  height:auto\n}\n.ProseMirror blockquote[data-v-350ca3a7]{\n  padding-left:1rem;\n  border-left:2px solid rgba(13,13,13,.1)\n}\n.ProseMirror hr[data-v-350ca3a7]{\n  border:none;\n  border-top:2px solid rgba(13,13,13,.1);\n  margin:2rem 0\n}\n.ProseMirror[data-v-350ca3a7]:focus-visible{\n  outline:none\n}\n.el-color-picker__trigger[data-v-350ca3a7]{\n  border:0!important;\n  padding:0!important;\n  outline:none!important\n}\n.el-color-picker__icon[data-v-350ca3a7]{\n  visibility:hidden!important\n}\n.el-color-picker--mini .el-color-picker__trigger[data-v-350ca3a7],.el-color-picker__color[data-v-350ca3a7]{\n  height:22px!important;\n  width:22px!important\n}\n.el-color-picker__color[data-v-350ca3a7]{\n  padding:0!important;\n  border:0!important\n}\n.el-color-picker__empty[data-v-350ca3a7]{\n  padding-top:1.4px!important\n}\n.el-color-picker--mini[data-v-350ca3a7]{\n  height:22px!important\n}\n.el-color-picker__color-inner[data-v-350ca3a7]{\n  border:1px solid #e2e2e2!important\n}\n.el-table thead[data-v-350ca3a7]{\n  color:#5c6b7a!important;\n  font-family:\"Cabin\"!important\n}\n.el-table thead[data-v-350ca3a7],.th[data-v-350ca3a7]{\n  font-weight:600!important\n}\n.el-button--mini[data-v-350ca3a7],.el-button--text[data-v-350ca3a7],.el-date-range-picker__header div[data-v-350ca3a7],.el-date-table td span[data-v-350ca3a7],.el-input__inner[data-v-350ca3a7],.el-picker-panel__shortcut[data-v-350ca3a7],.el-select-dropdown__item[data-v-350ca3a7],.el-select-dropdown__item.hover[data-v-350ca3a7],.el-select-dropdown__item[data-v-350ca3a7]:hover,.el-time-spinner__item[data-v-350ca3a7]{\n  font-family:\"Cabin\"!important\n}\n.el-progress-bar__inner[data-v-350ca3a7],.el-progress-bar__outer[data-v-350ca3a7]{\n  border-bottom-left-radius:100px!important;\n  border-top-left-radius:100px!important\n}\n.el-dropdown .el-dropdown__caret-button[data-v-350ca3a7]{\n  bottom:2px!important\n}\n.el-dropdown-menu[data-v-350ca3a7],.el-dropdown-menu__item[data-v-350ca3a7]{\n  padding:0!important\n}\nbutton[data-v-350ca3a7]:active,button[data-v-350ca3a7]:focus{\n  outline:0!important\n}\n.el-input-group__append[data-v-350ca3a7]{\n  padding:0!important\n}\n.el-input-group__prepend[data-v-350ca3a7]{\n  padding-left:5px!important;\n  padding-right:5px!important\n}\n.el-menu-item[data-v-350ca3a7],.el-submenu__title[data-v-350ca3a7]{\n  height:40px!important;\n  line-height:40px!important;\n  font-family:\"Cabin\"!important;\n  font-size:16px!important;\n  font-style:normal!important;\n  font-weight:400!important;\n  color:#5c6b7a!important;\n  margin-bottom:10px!important;\n  border-left:4px solid transparent!important\n}\n.el-menu-item.is-active[data-v-350ca3a7]{\n  color:#1b63d4!important;\n  font-weight:600!important;\n  border-left:4px solid #1b63d4!important;\n  border-top-left-radius:2px!important;\n  border-bottom-left-radius:2px!important\n}\n.el-menu--collapse[data-v-350ca3a7]{\n  width:80px!important\n}\n.el-menu[data-v-350ca3a7]{\n  border-right:0!important\n}\n.el-dialog__body[data-v-350ca3a7],.el-dialog__header[data-v-350ca3a7]{\n  padding:0!important\n}\n.el-dialog[data-v-350ca3a7]{\n  border-radius:10px!important\n}\n.card-dialog[data-v-350ca3a7]{\n  padding:20px!important\n}\n.vue-swatches__trigger[data-v-350ca3a7]{\n  width:22px!important;\n  height:22px!important;\n  border-radius:2px!important\n}\n.vue-swatches[data-v-350ca3a7]{\n  height:22px!important\n}\n.CodeMirror[data-v-350ca3a7]{\n  height:calc(100vh - 150px)!important\n}\n.vue-swatches__trigger[data-v-350ca3a7]{\n  border:1px solid #e2e2e2!important\n}\ninput[type=file][data-v-350ca3a7]{\n  display:none\n}\n.custom-file-upload[data-v-350ca3a7]{\n  display:none;\n  cursor:pointer\n}\n.selected-image[data-v-350ca3a7]{\n  width:100%;\n  height:60px;\n  background:#fff;\n  border:1px solid #e2e2e2;\n  border-radius:5px;\n  padding-left:10px;\n  padding-right:10px;\n  margin-bottom:8px\n}\n.selected-image .btn-drag[data-v-350ca3a7]{\n  cursor:pointer;\n  width:20px;\n  height:40px;\n  margin-right:10px\n}\n.selected-image .image-drag[data-v-350ca3a7]{\n  width:40px;\n  height:40px;\n  border-radius:3px;\n  margin-right:10px\n}\n.selected-image .item-menu[data-v-350ca3a7]{\n  font-size:14px;\n  border-bottom:1px solid #e2e2e2\n}\n.selected-image .btn-change[data-v-350ca3a7]{\n  background:#fff;\n  border:1px solid #e2e2e2;\n  border-radius:5px;\n  height:40px;\n  width:120px;\n  cursor:pointer\n}\n.selected-image .btn-change .name-btn[data-v-350ca3a7]{\n  font-weight:700;\n  font-size:14px;\n  padding-bottom:1px;\n  color:#1b63d4;\n  padding-left:10px\n}\n.selected-image .btn-change[data-v-350ca3a7]:hover{\n  background-color:#f3f4f6\n}\n.selected-image .btn-icon2[data-v-350ca3a7]{\n  height:40px;\n  padding:10px;\n  width:40px;\n  background:#fff;\n  border:1px solid #e2e2e2;\n  border-radius:5px;\n  margin-left:10px;\n  cursor:pointer\n}\n.selected-image .btn-icon2[data-v-350ca3a7]:hover{\n  background-color:#f3f4f6\n}\n.gradient-pattern[data-v-350ca3a7]{\n  box-sizing:content-box;\n  width:320px;\n  height:135px;\n  border:none;\n  font:normal 100%/normal Arial,Helvetica,sans-serif;\n  color:#fff;\n  text-overflow:clip;\n  background:linear-gradient(45deg,rgba(0,0,0,.0980392) 25%,transparent 0,transparent 75%,rgba(0,0,0,.0980392) 0,rgba(0,0,0,.0980392) 0),linear-gradient(45deg,rgba(0,0,0,.0980392) 25%,transparent 0,transparent 75%,rgba(0,0,0,.0980392) 0,rgba(0,0,0,.0980392) 0),#fff;\n  background-position:0 0,40px 40px;\n  background-origin:padding-box;\n  -webkit-background-clip:border-box;\n  background-clip:border-box;\n  background-size:80px 80px\n}\n.upload-demo[data-v-350ca3a7],.upload-demo .el-upload[data-v-350ca3a7]{\n  width:100%\n}\n.btn-icon[data-v-350ca3a7]{\n  height:40px;\n  padding:10px;\n  width:40px;\n  position:absolute;\n  bottom:18px;\n  right:11px;\n  background:#fff;\n  border:1px solid #e2e2e2;\n  border-radius:5px;\n  margin-left:18px;\n  cursor:pointer\n}\n.btn-icon[data-v-350ca3a7]:hover{\n  background-color:#f3f4f6\n}\n.btn-crop[data-v-350ca3a7]{\n  height:40px;\n  padding:10px;\n  width:40px;\n  position:absolute;\n  bottom:18px;\n  right:60px;\n  background:#fff;\n  border:1px solid #e2e2e2;\n  border-radius:5px;\n  margin-left:18px;\n  cursor:pointer\n}\n.btn-crop[data-v-350ca3a7]:hover{\n  background-color:#f3f4f6\n}\n.image-data-2[data-v-350ca3a7]{\n  position:absolute;\n  top:2px;\n  width:267px;\n  left:2px;\n  border-top-right-radius:5px;\n  border-top-left-radius:5px\n}\n.image-data-2 .img-iklan[data-v-350ca3a7]{\n  height:135px;\n  border-radius:5px 5px 0 0;\n  -o-object-fit:cover;\n     object-fit:cover;\n  width:100%\n}\n.kg-container .preview[data-v-350ca3a7]{\n  background:#fafbfc\n}\n.kg-container .preview .box-container[data-v-350ca3a7]{\n  width:300px;\n  height:600px;\n  background:#fff;\n  border:1px solid #e2e2e2;\n  margin-bottom:20px\n}\n.kg-container .preview .box-container .img-empty[data-v-350ca3a7]{\n  opacity:.5\n}\n.kg-container .preview .box-container .img-data[data-v-350ca3a7]{\n  width:100%;\n  height:100%;\n  -o-object-fit:none;\n     object-fit:none;\n  -o-object-position:left top;\n     object-position:left top\n}\n.kg-container .preview .box-container .title-1[data-v-350ca3a7]{\n  font-weight:600;\n  font-size:20px;\n  color:#454545;\n  margin-top:18px;\n  margin-bottom:5px;\n  text-align:center;\n  padding-left:20px;\n  padding-right:20px\n}\n.kg-container .preview .box-container .subtitle-1[data-v-350ca3a7]{\n  font-style:italic;\n  font-weight:400;\n  font-size:12px;\n  color:#9a9a9a;\n  text-align:center;\n  padding-left:20px;\n  padding-right:20px;\n  padding-bottom:20px\n}\n.kg-container .preview .btn-save[data-v-350ca3a7]{\n  max-width:125px;\n  background:#fff;\n  border:1px solid #e2e2e2;\n  border-radius:5px;\n  height:36px;\n  padding-left:15px;\n  padding-right:15px;\n  cursor:pointer\n}\n.kg-container .preview .btn-save .name-btn[data-v-350ca3a7]{\n  font-weight:700;\n  font-size:14px;\n  padding-bottom:1px;\n  color:#1b63d4;\n  padding-left:10px\n}\n.kg-container .preview .btn-save[data-v-350ca3a7]:hover{\n  background-color:#f3f4f6;\n  border:1px solid transparent\n}\n.kg-container .panel-customize[data-v-350ca3a7]{\n  width:360px;\n  height:100vh;\n  background:#f8f8f8;\n  border:1px solid #e2e2e2;\n  box-shadow:0 0 12px rgba(51,51,51,.1);\n  transform:translateX(0);\n  transition-duration:.2s;\n  transition-timing-function:cubic-bezier(.4,0,.2,1);\n  transition-property:transform,visibility,width\n}\n.kg-container .panel-customize .back-btn[data-v-350ca3a7]{\n  width:100%;\n  height:40px;\n  background:#fff;\n  padding-left:20px;\n  font-weight:700;\n  font-size:14px;\n  color:#1b63d4;\n  cursor:pointer\n}\n.kg-container .panel-customize .back-btn[data-v-350ca3a7]:hover{\n  background:#f8f8f8\n}\n.kg-container .panel-customize .header-panel[data-v-350ca3a7]{\n  margin-bottom:10px;\n  padding:15px;\n  border-top:1px solid #e2e2e2;\n  background:#fff;\n  border-bottom:1px solid #e2e2e2\n}\n.kg-container .panel-customize .header-panel .back-button[data-v-350ca3a7]{\n  width:40px;\n  margin-right:10px;\n  height:40px;\n  background:#fff;\n  border:1px solid #e2e2e2;\n  border-radius:5px;\n  cursor:pointer\n}\n.kg-container .panel-customize .header-panel .back-button[data-v-350ca3a7]:hover{\n  background-color:#f3f4f6\n}\n.kg-container .panel-customize .header-panel .title-header[data-v-350ca3a7]{\n  font-weight:400;\n  font-size:12px;\n  color:#9a9a9a\n}\n.kg-container .panel-customize .header-panel .sub-header[data-v-350ca3a7]{\n  font-weight:500;\n  font-size:16px;\n  color:#333\n}\n.kg-container .panel-customize .body-panel[data-v-350ca3a7]{\n  overflow-y:scroll\n}\n.kg-container .panel-customize .body-panel .card-box[data-v-350ca3a7]{\n  width:100%;\n  padding:15px;\n  background:#fff;\n  border-top:1px solid #e2e2e2;\n  border-bottom:1px solid #e2e2e2;\n  border-left:2px solid transparent;\n  margin-bottom:10px\n}\n.kg-container .panel-customize .body-panel .card-box .header-card[data-v-350ca3a7]{\n  margin-bottom:22px;\n  font-weight:500;\n  font-size:16px;\n  color:#454545\n}\n.kg-container .panel-customize .body-panel .card-box .form-panel[data-v-350ca3a7]{\n  padding:0;\n  background:#fff;\n  position:relative\n}\n.kg-container .panel-customize .body-panel .card-box .form-panel .card-assets[data-v-350ca3a7]{\n  margin-bottom:10px;\n  overflow-x:scroll;\n  scrollbar-width:none;\n  -ms-overflow-style:none\n}\n.kg-container .panel-customize .body-panel .card-box .form-panel .card-assets .item-assets[data-v-350ca3a7]{\n  padding:2px 12px;\n  background:#fff;\n  border:1px solid #e2e2e2;\n  font-size:14px;\n  border-radius:500px;\n  color:#1b63d4;\n  cursor:pointer;\n  margin-right:4px\n}\n.kg-container .panel-customize .body-panel .card-box .form-panel .card-assets .item-active[data-v-350ca3a7]{\n  background:#1b63d4;\n  border:1px solid #1b63d4;\n  color:#fff\n}\n.kg-container .panel-customize .body-panel .card-box .form-panel .card-assets[data-v-350ca3a7]::-webkit-scrollbar{\n  width:0;\n  height:0\n}\n.kg-container .panel-customize .body-panel .card-box .form-panel .image-data[data-v-350ca3a7]{\n  background:#fff;\n  border:1px solid #e2e2e2;\n  border-radius:5px;\n  padding-bottom:10px\n}\n.kg-container .panel-customize .body-panel .card-box .form-panel .image-data .img-iklan[data-v-350ca3a7]{\n  height:135px;\n  border-radius:5px 5px 0 0;\n  -o-object-fit:cover;\n     object-fit:cover;\n  width:100%\n}\n.kg-container .panel-customize .body-panel .card-box .form-panel .image-data .footer-iklan[data-v-350ca3a7]{\n  padding-left:11px;\n  width:157px;\n  margin-top:10px\n}\n.kg-container .panel-customize .body-panel .card-box .form-panel .image-data .footer-iklan .btn-change[data-v-350ca3a7]{\n  background:#fff;\n  border:1px solid #e2e2e2;\n  border-radius:5px;\n  height:40px;\n  padding-left:15px;\n  padding-right:15px;\n  cursor:pointer\n}\n.kg-container .panel-customize .body-panel .card-box .form-panel .image-data .footer-iklan .btn-change .name-btn[data-v-350ca3a7]{\n  font-weight:700;\n  font-size:14px;\n  padding-bottom:1px;\n  color:#1b63d4;\n  padding-left:10px\n}\n.kg-container .panel-customize .body-panel .card-box .form-panel .image-data .footer-iklan .btn-change[data-v-350ca3a7]:hover{\n  background-color:#f3f4f6\n}\n.kg-container .panel-customize .body-panel .card-box .form-panel .box-form[data-v-350ca3a7]{\n  margin-bottom:10px\n}\n.kg-container .panel-customize .body-panel .card-box .form-panel .box-form .title-form[data-v-350ca3a7]{\n  font-weight:400;\n  font-size:16px;\n  color:#454545;\n  margin-bottom:3px\n}\n.kg-container .panel-customize .body-panel .card-box .form-panel .upload-card[data-v-350ca3a7]{\n  height:100%;\n  border:1px dashed #1b63d4\n}\n.kg-container .panel-customize .body-panel .card-box .form-panel .upload-card .icon-upload[data-v-350ca3a7]{\n  height:45.5px;\n  padding-left:15px;\n  margin-right:8px\n}\n.kg-container .panel-customize .body-panel .card-box .form-panel .upload-card .empty-space[data-v-350ca3a7]{\n  font-weight:700;\n  font-size:14px;\n  text-align:left;\n  color:#333\n}\n.kg-container .panel-customize .body-panel .card-box .form-panel .upload-card .upload-name[data-v-350ca3a7]{\n  font-weight:400;\n  font-size:12px;\n  text-align:left;\n  color:#757575\n}\n.kg-container .panel-customize .body-panel .card-box .form-panel .upload-card .btn-upload[data-v-350ca3a7]{\n  width:90%;\n  margin-left:auto;\n  margin-right:auto;\n  background:#fff;\n  border:1px solid #1b63d4;\n  color:#1b63d4;\n  border-radius:5px;\n  height:34px;\n  margin-top:20px;\n  cursor:pointer\n}\n.kg-container .panel-customize .body-panel .card-box .form-panel .upload-card .btn-upload .name-btn[data-v-350ca3a7]{\n  font-weight:700;\n  font-size:14px;\n  color:#1b63d4;\n  padding-left:10px\n}\n.kg-container .panel-customize .body-panel .card-box .form-panel .upload-card .btn-upload[data-v-350ca3a7]:hover{\n  background-color:#f3f4f6;\n  border:0\n}\n.kg-container .panel-customize .body-panel .card-box .component-card[data-v-350ca3a7]{\n  background:#fff;\n  border:1px solid #e2e2e2;\n  margin-bottom:10px\n}\n.kg-container .panel-customize .body-panel .card-box .component-card .header-component[data-v-350ca3a7]{\n  border-bottom:1px solid #e2e2e2;\n  height:48px;\n  padding-left:15px;\n  padding-right:15px;\n  font-weight:500;\n  font-size:16px;\n  color:#333\n}\n.kg-container .panel-customize .body-panel .card-box .component-card .header-component .icon-header[data-v-350ca3a7]{\n  margin-right:10px\n}\n.kg-container .panel-customize .body-panel .card-box .component-card .header-component .btn-preview[data-v-350ca3a7]{\n  cursor:pointer\n}\n.kg-container .panel-customize .body-panel .card-box .component-card .body-component[data-v-350ca3a7]{\n  padding:10px 15px\n}\n.kg-container .panel-customize .footer-panel[data-v-350ca3a7]{\n  bottom:0;\n  position:fixed;\n  width:100%\n}\n.kg-container .panel-customize .footer-panel .hide-panel[data-v-350ca3a7]{\n  height:40px;\n  background:#fff;\n  width:inherit;\n  cursor:pointer;\n  padding-right:15px;\n  padding-left:15px\n}\n.kg-container .panel-customize .footer-panel .hide-panel .hide-text[data-v-350ca3a7]{\n  font-weight:700;\n  font-size:14px;\n  color:#1b63d4\n}\n.kg-container .panel-customize .footer-panel .hide-panel[data-v-350ca3a7]:hover{\n  background:#f8f8f8\n}\n.kg-container .panel-customize .footer-panel .box-action[data-v-350ca3a7]{\n  height:70px;\n  background:#fff;\n  width:inherit;\n  border-top:1px solid #e2e2e2\n}\n.kg-container .panel-hide[data-v-350ca3a7]{\n  width:50px;\n  height:100vh;\n  background:#f8f8f8;\n  border:1px solid #e2e2e2;\n  box-shadow:0 0 12px rgba(51,51,51,.1);\n  transform:translateX(0);\n  transition-duration:.2s;\n  transition-timing-function:cubic-bezier(.4,0,.2,1);\n  transition-property:transform,visibility,width\n}\n.kg-container .panel-hide .btn-show[data-v-350ca3a7]{\n  width:100%;\n  height:40px;\n  background:#fff;\n  border-bottom:1px solid #e2e2e2;\n  cursor:pointer\n}\n.kg-container .panel-hide .btn-show[data-v-350ca3a7]:hover{\n  background:#f8f8f8\n}\n.kg-container .panel-hide .name-panel[data-v-350ca3a7]{\n  font-weight:600;\n  font-size:14px;\n  letter-spacing:.05em;\n  text-transform:uppercase;\n  color:#757575;\n  width:107px;\n  transform:rotate(-90deg);\n  white-space:nowrap;\n  overflow:hidden\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Color_vue_vue_type_style_index_0_id_419cbe23_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(286);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Color_vue_vue_type_style_index_0_id_419cbe23_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Color_vue_vue_type_style_index_0_id_419cbe23_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Color_vue_vue_type_style_index_0_id_419cbe23_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Color_vue_vue_type_style_index_0_id_419cbe23_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 354:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(7);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n@font-face{\n  font-family:\"Cabin\";\n\n  src:local(\"Cabin\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\")\n}\n@font-face{\n  font-family:\"Roboto Mono\";\n\n  src:local(\"Roboto Mono\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\")\n}\n.header-1[data-v-419cbe23]{\n  font-size:32px\n}\n.header-1[data-v-419cbe23],.header-2[data-v-419cbe23]{\n  font-family:\"Cabin\";\n  font-weight:600;\n  color:#454545\n}\n.header-2[data-v-419cbe23]{\n  font-size:28px\n}\n.header-3[data-v-419cbe23]{\n  font-size:24px\n}\n.header-3[data-v-419cbe23],.header-4[data-v-419cbe23]{\n  font-family:\"Cabin\";\n  font-weight:600;\n  color:#454545\n}\n.header-4[data-v-419cbe23]{\n  font-size:20px\n}\n.header-5[data-v-419cbe23]{\n  font-size:18px\n}\n.header-5[data-v-419cbe23],.header-6[data-v-419cbe23]{\n  font-family:\"Cabin\";\n  font-weight:600;\n  color:#454545\n}\n.header-6[data-v-419cbe23]{\n  font-size:14px\n}\n.subtitle-1[data-v-419cbe23]{\n  color:#757575\n}\n.subtitle-1[data-v-419cbe23],.subtitle-2[data-v-419cbe23]{\n  font-family:\"Cabin\";\n  font-size:16px;\n  font-weight:400\n}\n.subtitle-2[data-v-419cbe23]{\n  color:#454545\n}\n.no-select[data-v-419cbe23]{\n  -webkit-touch-callout:none;\n  -webkit-user-select:none;\n  -moz-user-select:none;\n  user-select:none\n}\n.mx-icon-double-left[data-v-419cbe23]:after,.mx-icon-double-left[data-v-419cbe23]:before,.mx-icon-double-right[data-v-419cbe23]:after,.mx-icon-double-right[data-v-419cbe23]:before,.mx-icon-left[data-v-419cbe23]:before,.mx-icon-right[data-v-419cbe23]:before{\n  content:\"\";\n  position:relative;\n  top:-1px;\n  display:inline-block;\n  width:10px;\n  height:10px;\n  vertical-align:middle;\n  border-color:currentcolor;\n  border-style:solid;\n  border-width:2px 0 0 2px;\n  border-radius:1px;\n  box-sizing:border-box;\n  transform-origin:center;\n  transform:rotate(-45deg) scale(.7)\n}\n.mx-icon-double-left[data-v-419cbe23]:after{\n  left:-4px\n}\n.mx-icon-double-right[data-v-419cbe23]:before{\n  left:4px\n}\n.mx-icon-double-right[data-v-419cbe23]:after,.mx-icon-double-right[data-v-419cbe23]:before,.mx-icon-right[data-v-419cbe23]:before{\n  transform:rotate(135deg) scale(.7)\n}\n.mx-btn[data-v-419cbe23]{\n  box-sizing:border-box;\n  line-height:1;\n  font-size:14px;\n  font-weight:500;\n  padding:7px 15px;\n  margin:0;\n  cursor:pointer;\n  background-color:transparent;\n  outline:none;\n  border:1px solid rgba(0,0,0,.1);\n  border-radius:4px;\n  color:#73879c;\n  white-space:nowrap\n}\n.mx-btn[data-v-419cbe23]:hover{\n  border-color:#1284e7;\n  color:#1284e7\n}\n.mx-btn.disabled[data-v-419cbe23],.mx-btn[data-v-419cbe23]:disabled{\n  color:#ccc;\n  cursor:not-allowed\n}\n.mx-btn-text[data-v-419cbe23]{\n  border:0;\n  padding:0 4px;\n  text-align:left;\n  line-height:inherit\n}\n.mx-scrollbar[data-v-419cbe23]{\n  height:100%\n}\n.mx-scrollbar:hover .mx-scrollbar-track[data-v-419cbe23]{\n  opacity:1\n}\n.mx-scrollbar-wrap[data-v-419cbe23]{\n  height:100%;\n  overflow-x:hidden;\n  overflow-y:auto\n}\n.mx-scrollbar-track[data-v-419cbe23]{\n  position:absolute;\n  top:2px;\n  right:2px;\n  bottom:2px;\n  width:6px;\n  z-index:1;\n  border-radius:4px;\n  opacity:0;\n  transition:opacity .24s ease-out\n}\n.mx-scrollbar-track .mx-scrollbar-thumb[data-v-419cbe23]{\n  position:absolute;\n  width:100%;\n  height:0;\n  cursor:pointer;\n  border-radius:inherit;\n  background-color:rgba(144,147,153,.3);\n  transition:background-color .3s\n}\n.mx-zoom-in-down-enter-active[data-v-419cbe23],.mx-zoom-in-down-leave-active[data-v-419cbe23]{\n  opacity:1;\n  transform:scaleY(1);\n  transition:transform .3s cubic-bezier(.23,1,.32,1),opacity .3s cubic-bezier(.23,1,.32,1);\n  transform-origin:center top\n}\n.mx-zoom-in-down-enter[data-v-419cbe23],.mx-zoom-in-down-enter-from[data-v-419cbe23],.mx-zoom-in-down-leave-to[data-v-419cbe23]{\n  opacity:0;\n  transform:scaleY(0)\n}\n.mx-datepicker[data-v-419cbe23]{\n  position:relative;\n  display:inline-block;\n  width:210px\n}\n.mx-datepicker svg[data-v-419cbe23]{\n  width:1em;\n  height:1em;\n  vertical-align:-.15em;\n  fill:currentColor;\n  overflow:hidden\n}\n.mx-datepicker-range[data-v-419cbe23]{\n  width:320px\n}\n.mx-datepicker-inline[data-v-419cbe23]{\n  width:auto\n}\n.mx-input-wrapper[data-v-419cbe23]{\n  position:relative\n}\n.mx-input[data-v-419cbe23]{\n  display:inline-block;\n  box-sizing:border-box;\n  width:100%;\n  height:34px;\n  padding:6px 30px 6px 10px;\n  font-size:14px;\n  line-height:1.4;\n  color:#555;\n  background-color:#fff;\n  border:1px solid #ccc;\n  border-radius:4px;\n  box-shadow:inset 0 1px 1px rgba(0,0,0,.075)\n}\n.mx-input[data-v-419cbe23]:focus,.mx-input[data-v-419cbe23]:hover{\n  border-color:#409aff\n}\n.mx-input.disabled[data-v-419cbe23],.mx-input[data-v-419cbe23]:disabled{\n  color:#ccc;\n  background-color:#f3f3f3;\n  border-color:#ccc;\n  cursor:not-allowed\n}\n.mx-input[data-v-419cbe23]:focus{\n  outline:none\n}\n.mx-input[data-v-419cbe23]::-ms-clear{\n  display:none\n}\n.mx-icon-calendar[data-v-419cbe23],.mx-icon-clear[data-v-419cbe23]{\n  position:absolute;\n  top:50%;\n  right:8px;\n  transform:translateY(-50%);\n  font-size:16px;\n  line-height:1;\n  color:rgba(0,0,0,.5);\n  vertical-align:middle\n}\n.mx-icon-clear[data-v-419cbe23]{\n  cursor:pointer\n}\n.mx-icon-clear[data-v-419cbe23]:hover{\n  color:rgba(0,0,0,.8)\n}\n.mx-datepicker-main[data-v-419cbe23]{\n  font:14px/1.5 \"Helvetica Neue\",Helvetica,Arial,\"Microsoft Yahei\",sans-serif;\n  color:#73879c;\n  background-color:#fff;\n  border:1px solid #e8e8e8\n}\n.mx-datepicker-popup[data-v-419cbe23]{\n  position:absolute;\n  margin-top:1px;\n  margin-bottom:1px;\n  box-shadow:0 6px 12px rgba(0,0,0,.175);\n  z-index:2001\n}\n.mx-datepicker-sidebar[data-v-419cbe23]{\n  float:left;\n  box-sizing:border-box;\n  width:100px;\n  padding:6px;\n  overflow:auto\n}\n.mx-datepicker-sidebar+.mx-datepicker-content[data-v-419cbe23]{\n  margin-left:100px;\n  border-left:1px solid #e8e8e8\n}\n.mx-datepicker-body[data-v-419cbe23]{\n  position:relative;\n  -webkit-user-select:none;\n     -moz-user-select:none;\n          user-select:none\n}\n.mx-btn-shortcut[data-v-419cbe23]{\n  line-height:24px\n}\n.mx-range-wrapper[data-v-419cbe23]{\n  display:flex\n}\n@media(max-width:750px){\n.mx-range-wrapper[data-v-419cbe23]{\n    flex-direction:column\n}\n}\n.mx-datepicker-header[data-v-419cbe23]{\n  padding:6px 8px;\n  border-bottom:1px solid #e8e8e8\n}\n.mx-datepicker-footer[data-v-419cbe23]{\n  padding:6px 8px;\n  text-align:right;\n  border-top:1px solid #e8e8e8\n}\n.mx-calendar[data-v-419cbe23]{\n  box-sizing:border-box;\n  width:248px;\n  padding:6px 12px\n}\n.mx-calendar+.mx-calendar[data-v-419cbe23]{\n  border-left:1px solid #e8e8e8\n}\n.mx-calendar-header[data-v-419cbe23],.mx-time-header[data-v-419cbe23]{\n  box-sizing:border-box;\n  height:34px;\n  line-height:34px;\n  text-align:center;\n  overflow:hidden\n}\n.mx-btn-icon-double-left[data-v-419cbe23],.mx-btn-icon-left[data-v-419cbe23]{\n  float:left\n}\n.mx-btn-icon-double-right[data-v-419cbe23],.mx-btn-icon-right[data-v-419cbe23]{\n  float:right\n}\n.mx-calendar-header-label[data-v-419cbe23]{\n  font-size:14px\n}\n.mx-calendar-decade-separator[data-v-419cbe23]{\n  margin:0 2px\n}\n.mx-calendar-decade-separator[data-v-419cbe23]:after{\n  content:\"~\"\n}\n.mx-calendar-content[data-v-419cbe23]{\n  position:relative;\n  height:224px;\n  box-sizing:border-box\n}\n.mx-calendar-content .cell[data-v-419cbe23]{\n  cursor:pointer\n}\n.mx-calendar-content .cell[data-v-419cbe23]:hover{\n  color:#73879c;\n  background-color:rgb(243.15,248.85,253.8)\n}\n.mx-calendar-content .cell.active[data-v-419cbe23]{\n  color:#fff;\n  background-color:#1284e7\n}\n.mx-calendar-content .cell.hover-in-range[data-v-419cbe23],.mx-calendar-content .cell.in-range[data-v-419cbe23]{\n  color:#73879c;\n  background-color:rgb(219.45,236.55,251.4)\n}\n.mx-calendar-content .cell.disabled[data-v-419cbe23]{\n  cursor:not-allowed;\n  color:#ccc;\n  background-color:#f3f3f3\n}\n.mx-calendar-week-mode .mx-date-row[data-v-419cbe23]{\n  cursor:pointer\n}\n.mx-calendar-week-mode .mx-date-row[data-v-419cbe23]:hover{\n  background-color:rgb(243.15,248.85,253.8)\n}\n.mx-calendar-week-mode .mx-date-row.mx-active-week[data-v-419cbe23]{\n  background-color:rgb(219.45,236.55,251.4)\n}\n.mx-calendar-week-mode .mx-date-row .cell.active[data-v-419cbe23],.mx-calendar-week-mode .mx-date-row .cell[data-v-419cbe23]:hover{\n  color:inherit;\n  background-color:transparent\n}\n.mx-week-number[data-v-419cbe23]{\n  opacity:.5\n}\n.mx-table[data-v-419cbe23]{\n  table-layout:fixed;\n  border-collapse:separate;\n  border-spacing:0;\n  width:100%;\n  height:100%;\n  box-sizing:border-box;\n  text-align:center\n}\n.mx-table th[data-v-419cbe23]{\n  font-weight:500\n}\n.mx-table td[data-v-419cbe23],.mx-table th[data-v-419cbe23]{\n  padding:0;\n  vertical-align:middle\n}\n.mx-table-date td[data-v-419cbe23],.mx-table-date th[data-v-419cbe23]{\n  font-size:12px\n}\n.mx-table-date .today[data-v-419cbe23]{\n  color:rgb(41.7,144.3,233.4)\n}\n.mx-table-date .cell.not-current-month[data-v-419cbe23]{\n  color:#ccc;\n  background:none\n}\n.mx-time[data-v-419cbe23]{\n  flex:1;\n  width:224px;\n  background:#fff\n}\n.mx-time+.mx-time[data-v-419cbe23]{\n  border-left:1px solid #e8e8e8\n}\n.mx-calendar-time[data-v-419cbe23]{\n  position:absolute;\n  top:0;\n  left:0;\n  width:100%;\n  height:100%\n}\n.mx-time-header[data-v-419cbe23]{\n  border-bottom:1px solid #e8e8e8\n}\n.mx-time-content[data-v-419cbe23]{\n  height:224px;\n  box-sizing:border-box;\n  overflow:hidden\n}\n.mx-time-columns[data-v-419cbe23]{\n  display:flex;\n  width:100%;\n  height:100%;\n  overflow:hidden\n}\n.mx-time-column[data-v-419cbe23]{\n  flex:1;\n  position:relative;\n  border-left:1px solid #e8e8e8;\n  text-align:center\n}\n.mx-time-column[data-v-419cbe23]:first-child{\n  border-left:0\n}\n.mx-time-column .mx-time-list[data-v-419cbe23]{\n  margin:0;\n  padding:0;\n  list-style:none\n}\n.mx-time-column .mx-time-list[data-v-419cbe23]:after{\n  content:\"\";\n  display:block;\n  height:192px\n}\n.mx-time-column .mx-time-item[data-v-419cbe23]{\n  cursor:pointer;\n  font-size:12px;\n  height:32px;\n  line-height:32px\n}\n.mx-time-column .mx-time-item[data-v-419cbe23]:hover{\n  color:#73879c;\n  background-color:rgb(243.15,248.85,253.8)\n}\n.mx-time-column .mx-time-item.active[data-v-419cbe23]{\n  color:#1284e7;\n  background-color:transparent;\n  font-weight:700\n}\n.mx-time-column .mx-time-item.disabled[data-v-419cbe23]{\n  cursor:not-allowed;\n  color:#ccc;\n  background-color:#f3f3f3\n}\n.mx-time-option[data-v-419cbe23]{\n  cursor:pointer;\n  padding:8px 10px;\n  font-size:14px;\n  line-height:20px\n}\n.mx-time-option[data-v-419cbe23]:hover{\n  color:#73879c;\n  background-color:rgb(243.15,248.85,253.8)\n}\n.mx-time-option.active[data-v-419cbe23]{\n  color:#1284e7;\n  background-color:transparent;\n  font-weight:700\n}\n.mx-time-option.disabled[data-v-419cbe23]{\n  cursor:not-allowed;\n  color:#ccc;\n  background-color:#f3f3f3\n}\n.el-input .el-input__inner[data-v-419cbe23]:focus,.el-range-editor.is-active[data-v-419cbe23],.el-range-editor.is-active[data-v-419cbe23]:hover,.el-select .el-input.is-focus .el-input__inner[data-v-419cbe23],.el-select .el-input__inner[data-v-419cbe23]:focus,.el-textarea .el-input__inner[data-v-419cbe23]:focus{\n  border:1.3px solid #1b63d4!important;\n  box-shadow:0 2px 10px rgba(187,209,243,.5)\n}\n.mx-input[data-v-419cbe23]{\n  height:40px!important\n}\n.mx-datepicker-sidebar[data-v-419cbe23]{\n  width:151px!important\n}\n.mx-table-date td[data-v-419cbe23],.mx-table-date th[data-v-419cbe23]{\n  height:32px;\n  font-size:14px!important\n}\n.mx-btn-shortcut[data-v-419cbe23]{\n  display:block;\n  padding:0 6px;\n  line-height:30px!important\n}\n[data-v-419cbe23]:root{\n  --vs-line-height:1.6\n}\n.btn-popover[data-v-419cbe23]{\n  height:40px;\n  background-color:#fff;\n  width:100%;\n  padding:10px;\n  cursor:pointer\n}\n.btn-popover .title-1[data-v-419cbe23]{\n  font-weight:400;\n  font-size:16px;\n  color:#454545;\n  margin-left:10px\n}\n.btn-popover[data-v-419cbe23]:hover{\n  background-color:#f3f4f6\n}\n.el-popover[data-v-419cbe23]{\n  padding:0!important;\n  border-radius:5px!important\n}\n.el-upload[data-v-419cbe23]{\n  width:100%\n}\n.el-upload-dragger[data-v-419cbe23]{\n  width:100%!important;\n  background:linear-gradient(0deg,rgba(33,150,243,.03),rgba(33,150,243,.03)),#fff!important;\n  border:1px dashed transparent!important;\n  border-radius:5px!important;\n  height:100%!important\n}\n.kg-popup[data-v-419cbe23]{\n  transition:all .5s ease-in-out;\n  position:fixed;\n  top:0;\n  left:50%;\n  transform:translateX(-50%)\n}\n.noselect[data-v-419cbe23]{\n  -webkit-touch-callout:none;\n  -webkit-user-select:none;\n  -moz-user-select:none;\n  user-select:none\n}\n.ProseMirror[data-v-419cbe23]{\n  border:0;\n  outline:none\n}\n.ProseMirror>*+*[data-v-419cbe23]{\n  margin-top:.75em\n}\n.ProseMirror ol[data-v-419cbe23],.ProseMirror ul[data-v-419cbe23]{\n  padding:0 1rem\n}\n.ProseMirror h1[data-v-419cbe23],.ProseMirror h2[data-v-419cbe23],.ProseMirror h3[data-v-419cbe23],.ProseMirror h4[data-v-419cbe23],.ProseMirror h5[data-v-419cbe23],.ProseMirror h6[data-v-419cbe23]{\n  line-height:1.1\n}\n.ProseMirror code[data-v-419cbe23]{\n  background-color:rgba(97,97,97,.1);\n  color:#616161\n}\n.ProseMirror pre[data-v-419cbe23]{\n  background:#0d0d0d;\n  color:#fff;\n  font-family:\"JetBrainsMono\",monospace;\n  padding:.75rem 1rem;\n  border-radius:.5rem\n}\n.ProseMirror pre code[data-v-419cbe23]{\n  color:inherit;\n  padding:0;\n  background:none;\n  font-size:.8rem\n}\n.ProseMirror img[data-v-419cbe23]{\n  max-width:100%;\n  height:auto\n}\n.ProseMirror blockquote[data-v-419cbe23]{\n  padding-left:1rem;\n  border-left:2px solid rgba(13,13,13,.1)\n}\n.ProseMirror hr[data-v-419cbe23]{\n  border:none;\n  border-top:2px solid rgba(13,13,13,.1);\n  margin:2rem 0\n}\n.ProseMirror[data-v-419cbe23]:focus-visible{\n  outline:none\n}\n.el-color-picker__trigger[data-v-419cbe23]{\n  border:0!important;\n  padding:0!important;\n  outline:none!important\n}\n.el-color-picker__icon[data-v-419cbe23]{\n  visibility:hidden!important\n}\n.el-color-picker--mini .el-color-picker__trigger[data-v-419cbe23],.el-color-picker__color[data-v-419cbe23]{\n  height:22px!important;\n  width:22px!important\n}\n.el-color-picker__color[data-v-419cbe23]{\n  padding:0!important;\n  border:0!important\n}\n.el-color-picker__empty[data-v-419cbe23]{\n  padding-top:1.4px!important\n}\n.el-color-picker--mini[data-v-419cbe23]{\n  height:22px!important\n}\n.el-color-picker__color-inner[data-v-419cbe23]{\n  border:1px solid #e2e2e2!important\n}\n.el-table thead[data-v-419cbe23]{\n  color:#5c6b7a!important;\n  font-family:\"Cabin\"!important\n}\n.el-table thead[data-v-419cbe23],.th[data-v-419cbe23]{\n  font-weight:600!important\n}\n.el-button--mini[data-v-419cbe23],.el-button--text[data-v-419cbe23],.el-date-range-picker__header div[data-v-419cbe23],.el-date-table td span[data-v-419cbe23],.el-input__inner[data-v-419cbe23],.el-picker-panel__shortcut[data-v-419cbe23],.el-select-dropdown__item[data-v-419cbe23],.el-select-dropdown__item.hover[data-v-419cbe23],.el-select-dropdown__item[data-v-419cbe23]:hover,.el-time-spinner__item[data-v-419cbe23]{\n  font-family:\"Cabin\"!important\n}\n.el-progress-bar__inner[data-v-419cbe23],.el-progress-bar__outer[data-v-419cbe23]{\n  border-bottom-left-radius:100px!important;\n  border-top-left-radius:100px!important\n}\n.el-dropdown .el-dropdown__caret-button[data-v-419cbe23]{\n  bottom:2px!important\n}\n.el-dropdown-menu[data-v-419cbe23],.el-dropdown-menu__item[data-v-419cbe23]{\n  padding:0!important\n}\nbutton[data-v-419cbe23]:active,button[data-v-419cbe23]:focus{\n  outline:0!important\n}\n.el-input-group__append[data-v-419cbe23]{\n  padding:0!important\n}\n.el-input-group__prepend[data-v-419cbe23]{\n  padding-left:5px!important;\n  padding-right:5px!important\n}\n.el-menu-item[data-v-419cbe23],.el-submenu__title[data-v-419cbe23]{\n  height:40px!important;\n  line-height:40px!important;\n  font-family:\"Cabin\"!important;\n  font-size:16px!important;\n  font-style:normal!important;\n  font-weight:400!important;\n  color:#5c6b7a!important;\n  margin-bottom:10px!important;\n  border-left:4px solid transparent!important\n}\n.el-menu-item.is-active[data-v-419cbe23]{\n  color:#1b63d4!important;\n  font-weight:600!important;\n  border-left:4px solid #1b63d4!important;\n  border-top-left-radius:2px!important;\n  border-bottom-left-radius:2px!important\n}\n.el-menu--collapse[data-v-419cbe23]{\n  width:80px!important\n}\n.el-menu[data-v-419cbe23]{\n  border-right:0!important\n}\n.el-dialog__body[data-v-419cbe23],.el-dialog__header[data-v-419cbe23]{\n  padding:0!important\n}\n.el-dialog[data-v-419cbe23]{\n  border-radius:10px!important\n}\n.card-dialog[data-v-419cbe23]{\n  padding:20px!important\n}\n.vue-swatches__trigger[data-v-419cbe23]{\n  width:22px!important;\n  height:22px!important;\n  border-radius:2px!important\n}\n.vue-swatches[data-v-419cbe23]{\n  height:22px!important\n}\n.CodeMirror[data-v-419cbe23]{\n  height:calc(100vh - 150px)!important\n}\n.vue-swatches__trigger[data-v-419cbe23]{\n  border:1px solid #e2e2e2!important\n}\n.form-input .input-box[data-v-419cbe23]{\n  height:157px;\n  width:100%;\n  resize:none;\n  background:#fff;\n  border:1px solid #e2e2e2;\n  border-radius:5px;\n  padding:10px\n}\n.form-input .input-box[data-v-419cbe23]:focus{\n  outline:none!important;\n  background:#fff;\n  border:1.3px solid #1b63d4;\n  box-shadow:0 2px 10px #bbd1f3;\n  border-radius:5px\n}\n.form-input .style-box .title-box[data-v-419cbe23]{\n  font-weight:600;\n  font-size:14px;\n  letter-spacing:.05em;\n  text-transform:uppercase;\n  color:#454545;\n  margin-bottom:8px\n}\n.form-input .style-box .card-font[data-v-419cbe23]{\n  margin-bottom:8px\n}\n.form-input .style-box .card-font .font-family-card[data-v-419cbe23]{\n  width:66%\n}\n.form-input .style-box .card-font .font-size-card[data-v-419cbe23]{\n  width:30%;\n  margin-left:10px\n}\n.form-input .style-box .btn-card[data-v-419cbe23]{\n  height:34px;\n  background:#fff;\n  border:1px solid #e2e2e2;\n  border-radius:5px;\n  cursor:pointer\n}\n.form-input .style-box .btn-card-active[data-v-419cbe23]{\n  background:#1b63d4\n}\n.form-input .style-box .color-container .title-color[data-v-419cbe23]{\n  font-weight:400;\n  font-size:16px;\n  color:#454545\n}\n.form-input .style-box .color-container .color-card[data-v-419cbe23]{\n  height:40px;\n  background:#fff;\n  border:1px solid #e2e2e2;\n  border-radius:5px;\n  padding-left:10px;\n  padding-right:10px\n}\n.form-input .style-box .color-container .color-card .text-color[data-v-419cbe23]{\n  font-weight:400;\n  font-size:16px;\n  color:#454545;\n  margin-left:5px;\n  width:80px\n}\n.form-input .style-box .color-container .color-card .text-color[data-v-419cbe23]:focus{\n  outline:none\n}\n.form-input .style-box .color-container .color-card .percent-color[data-v-419cbe23]{\n  font-weight:500;\n  font-size:16px;\n  color:#333\n}\n.form-input .style-box .color-container .color-card .percent-color .hr-vertical[data-v-419cbe23]{\n  border:1px solid #e2e2e2;\n  height:15px;\n  margin-right:8px\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Text_vue_vue_type_style_index_0_id_9f9ef728_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(287);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Text_vue_vue_type_style_index_0_id_9f9ef728_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Text_vue_vue_type_style_index_0_id_9f9ef728_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Text_vue_vue_type_style_index_0_id_9f9ef728_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Text_vue_vue_type_style_index_0_id_9f9ef728_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 356:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(7);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n@font-face{\n  font-family:\"Cabin\";\n\n  src:local(\"Cabin\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\")\n}\n@font-face{\n  font-family:\"Roboto Mono\";\n\n  src:local(\"Roboto Mono\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\")\n}\n.header-1[data-v-9f9ef728]{\n  font-size:32px\n}\n.header-1[data-v-9f9ef728],.header-2[data-v-9f9ef728]{\n  font-family:\"Cabin\";\n  font-weight:600;\n  color:#454545\n}\n.header-2[data-v-9f9ef728]{\n  font-size:28px\n}\n.header-3[data-v-9f9ef728]{\n  font-size:24px\n}\n.header-3[data-v-9f9ef728],.header-4[data-v-9f9ef728]{\n  font-family:\"Cabin\";\n  font-weight:600;\n  color:#454545\n}\n.header-4[data-v-9f9ef728]{\n  font-size:20px\n}\n.header-5[data-v-9f9ef728]{\n  font-size:18px\n}\n.header-5[data-v-9f9ef728],.header-6[data-v-9f9ef728]{\n  font-family:\"Cabin\";\n  font-weight:600;\n  color:#454545\n}\n.header-6[data-v-9f9ef728]{\n  font-size:14px\n}\n.subtitle-1[data-v-9f9ef728]{\n  color:#757575\n}\n.subtitle-1[data-v-9f9ef728],.subtitle-2[data-v-9f9ef728]{\n  font-family:\"Cabin\";\n  font-size:16px;\n  font-weight:400\n}\n.subtitle-2[data-v-9f9ef728]{\n  color:#454545\n}\n.no-select[data-v-9f9ef728]{\n  -webkit-touch-callout:none;\n  -webkit-user-select:none;\n  -moz-user-select:none;\n  user-select:none\n}\n.mx-icon-double-left[data-v-9f9ef728]:after,.mx-icon-double-left[data-v-9f9ef728]:before,.mx-icon-double-right[data-v-9f9ef728]:after,.mx-icon-double-right[data-v-9f9ef728]:before,.mx-icon-left[data-v-9f9ef728]:before,.mx-icon-right[data-v-9f9ef728]:before{\n  content:\"\";\n  position:relative;\n  top:-1px;\n  display:inline-block;\n  width:10px;\n  height:10px;\n  vertical-align:middle;\n  border-color:currentcolor;\n  border-style:solid;\n  border-width:2px 0 0 2px;\n  border-radius:1px;\n  box-sizing:border-box;\n  transform-origin:center;\n  transform:rotate(-45deg) scale(.7)\n}\n.mx-icon-double-left[data-v-9f9ef728]:after{\n  left:-4px\n}\n.mx-icon-double-right[data-v-9f9ef728]:before{\n  left:4px\n}\n.mx-icon-double-right[data-v-9f9ef728]:after,.mx-icon-double-right[data-v-9f9ef728]:before,.mx-icon-right[data-v-9f9ef728]:before{\n  transform:rotate(135deg) scale(.7)\n}\n.mx-btn[data-v-9f9ef728]{\n  box-sizing:border-box;\n  line-height:1;\n  font-size:14px;\n  font-weight:500;\n  padding:7px 15px;\n  margin:0;\n  cursor:pointer;\n  background-color:transparent;\n  outline:none;\n  border:1px solid rgba(0,0,0,.1);\n  border-radius:4px;\n  color:#73879c;\n  white-space:nowrap\n}\n.mx-btn[data-v-9f9ef728]:hover{\n  border-color:#1284e7;\n  color:#1284e7\n}\n.mx-btn.disabled[data-v-9f9ef728],.mx-btn[data-v-9f9ef728]:disabled{\n  color:#ccc;\n  cursor:not-allowed\n}\n.mx-btn-text[data-v-9f9ef728]{\n  border:0;\n  padding:0 4px;\n  text-align:left;\n  line-height:inherit\n}\n.mx-scrollbar[data-v-9f9ef728]{\n  height:100%\n}\n.mx-scrollbar:hover .mx-scrollbar-track[data-v-9f9ef728]{\n  opacity:1\n}\n.mx-scrollbar-wrap[data-v-9f9ef728]{\n  height:100%;\n  overflow-x:hidden;\n  overflow-y:auto\n}\n.mx-scrollbar-track[data-v-9f9ef728]{\n  position:absolute;\n  top:2px;\n  right:2px;\n  bottom:2px;\n  width:6px;\n  z-index:1;\n  border-radius:4px;\n  opacity:0;\n  transition:opacity .24s ease-out\n}\n.mx-scrollbar-track .mx-scrollbar-thumb[data-v-9f9ef728]{\n  position:absolute;\n  width:100%;\n  height:0;\n  cursor:pointer;\n  border-radius:inherit;\n  background-color:rgba(144,147,153,.3);\n  transition:background-color .3s\n}\n.mx-zoom-in-down-enter-active[data-v-9f9ef728],.mx-zoom-in-down-leave-active[data-v-9f9ef728]{\n  opacity:1;\n  transform:scaleY(1);\n  transition:transform .3s cubic-bezier(.23,1,.32,1),opacity .3s cubic-bezier(.23,1,.32,1);\n  transform-origin:center top\n}\n.mx-zoom-in-down-enter[data-v-9f9ef728],.mx-zoom-in-down-enter-from[data-v-9f9ef728],.mx-zoom-in-down-leave-to[data-v-9f9ef728]{\n  opacity:0;\n  transform:scaleY(0)\n}\n.mx-datepicker[data-v-9f9ef728]{\n  position:relative;\n  display:inline-block;\n  width:210px\n}\n.mx-datepicker svg[data-v-9f9ef728]{\n  width:1em;\n  height:1em;\n  vertical-align:-.15em;\n  fill:currentColor;\n  overflow:hidden\n}\n.mx-datepicker-range[data-v-9f9ef728]{\n  width:320px\n}\n.mx-datepicker-inline[data-v-9f9ef728]{\n  width:auto\n}\n.mx-input-wrapper[data-v-9f9ef728]{\n  position:relative\n}\n.mx-input[data-v-9f9ef728]{\n  display:inline-block;\n  box-sizing:border-box;\n  width:100%;\n  height:34px;\n  padding:6px 30px 6px 10px;\n  font-size:14px;\n  line-height:1.4;\n  color:#555;\n  background-color:#fff;\n  border:1px solid #ccc;\n  border-radius:4px;\n  box-shadow:inset 0 1px 1px rgba(0,0,0,.075)\n}\n.mx-input[data-v-9f9ef728]:focus,.mx-input[data-v-9f9ef728]:hover{\n  border-color:#409aff\n}\n.mx-input.disabled[data-v-9f9ef728],.mx-input[data-v-9f9ef728]:disabled{\n  color:#ccc;\n  background-color:#f3f3f3;\n  border-color:#ccc;\n  cursor:not-allowed\n}\n.mx-input[data-v-9f9ef728]:focus{\n  outline:none\n}\n.mx-input[data-v-9f9ef728]::-ms-clear{\n  display:none\n}\n.mx-icon-calendar[data-v-9f9ef728],.mx-icon-clear[data-v-9f9ef728]{\n  position:absolute;\n  top:50%;\n  right:8px;\n  transform:translateY(-50%);\n  font-size:16px;\n  line-height:1;\n  color:rgba(0,0,0,.5);\n  vertical-align:middle\n}\n.mx-icon-clear[data-v-9f9ef728]{\n  cursor:pointer\n}\n.mx-icon-clear[data-v-9f9ef728]:hover{\n  color:rgba(0,0,0,.8)\n}\n.mx-datepicker-main[data-v-9f9ef728]{\n  font:14px/1.5 \"Helvetica Neue\",Helvetica,Arial,\"Microsoft Yahei\",sans-serif;\n  color:#73879c;\n  background-color:#fff;\n  border:1px solid #e8e8e8\n}\n.mx-datepicker-popup[data-v-9f9ef728]{\n  position:absolute;\n  margin-top:1px;\n  margin-bottom:1px;\n  box-shadow:0 6px 12px rgba(0,0,0,.175);\n  z-index:2001\n}\n.mx-datepicker-sidebar[data-v-9f9ef728]{\n  float:left;\n  box-sizing:border-box;\n  width:100px;\n  padding:6px;\n  overflow:auto\n}\n.mx-datepicker-sidebar+.mx-datepicker-content[data-v-9f9ef728]{\n  margin-left:100px;\n  border-left:1px solid #e8e8e8\n}\n.mx-datepicker-body[data-v-9f9ef728]{\n  position:relative;\n  -webkit-user-select:none;\n     -moz-user-select:none;\n          user-select:none\n}\n.mx-btn-shortcut[data-v-9f9ef728]{\n  line-height:24px\n}\n.mx-range-wrapper[data-v-9f9ef728]{\n  display:flex\n}\n@media(max-width:750px){\n.mx-range-wrapper[data-v-9f9ef728]{\n    flex-direction:column\n}\n}\n.mx-datepicker-header[data-v-9f9ef728]{\n  padding:6px 8px;\n  border-bottom:1px solid #e8e8e8\n}\n.mx-datepicker-footer[data-v-9f9ef728]{\n  padding:6px 8px;\n  text-align:right;\n  border-top:1px solid #e8e8e8\n}\n.mx-calendar[data-v-9f9ef728]{\n  box-sizing:border-box;\n  width:248px;\n  padding:6px 12px\n}\n.mx-calendar+.mx-calendar[data-v-9f9ef728]{\n  border-left:1px solid #e8e8e8\n}\n.mx-calendar-header[data-v-9f9ef728],.mx-time-header[data-v-9f9ef728]{\n  box-sizing:border-box;\n  height:34px;\n  line-height:34px;\n  text-align:center;\n  overflow:hidden\n}\n.mx-btn-icon-double-left[data-v-9f9ef728],.mx-btn-icon-left[data-v-9f9ef728]{\n  float:left\n}\n.mx-btn-icon-double-right[data-v-9f9ef728],.mx-btn-icon-right[data-v-9f9ef728]{\n  float:right\n}\n.mx-calendar-header-label[data-v-9f9ef728]{\n  font-size:14px\n}\n.mx-calendar-decade-separator[data-v-9f9ef728]{\n  margin:0 2px\n}\n.mx-calendar-decade-separator[data-v-9f9ef728]:after{\n  content:\"~\"\n}\n.mx-calendar-content[data-v-9f9ef728]{\n  position:relative;\n  height:224px;\n  box-sizing:border-box\n}\n.mx-calendar-content .cell[data-v-9f9ef728]{\n  cursor:pointer\n}\n.mx-calendar-content .cell[data-v-9f9ef728]:hover{\n  color:#73879c;\n  background-color:rgb(243.15,248.85,253.8)\n}\n.mx-calendar-content .cell.active[data-v-9f9ef728]{\n  color:#fff;\n  background-color:#1284e7\n}\n.mx-calendar-content .cell.hover-in-range[data-v-9f9ef728],.mx-calendar-content .cell.in-range[data-v-9f9ef728]{\n  color:#73879c;\n  background-color:rgb(219.45,236.55,251.4)\n}\n.mx-calendar-content .cell.disabled[data-v-9f9ef728]{\n  cursor:not-allowed;\n  color:#ccc;\n  background-color:#f3f3f3\n}\n.mx-calendar-week-mode .mx-date-row[data-v-9f9ef728]{\n  cursor:pointer\n}\n.mx-calendar-week-mode .mx-date-row[data-v-9f9ef728]:hover{\n  background-color:rgb(243.15,248.85,253.8)\n}\n.mx-calendar-week-mode .mx-date-row.mx-active-week[data-v-9f9ef728]{\n  background-color:rgb(219.45,236.55,251.4)\n}\n.mx-calendar-week-mode .mx-date-row .cell.active[data-v-9f9ef728],.mx-calendar-week-mode .mx-date-row .cell[data-v-9f9ef728]:hover{\n  color:inherit;\n  background-color:transparent\n}\n.mx-week-number[data-v-9f9ef728]{\n  opacity:.5\n}\n.mx-table[data-v-9f9ef728]{\n  table-layout:fixed;\n  border-collapse:separate;\n  border-spacing:0;\n  width:100%;\n  height:100%;\n  box-sizing:border-box;\n  text-align:center\n}\n.mx-table th[data-v-9f9ef728]{\n  font-weight:500\n}\n.mx-table td[data-v-9f9ef728],.mx-table th[data-v-9f9ef728]{\n  padding:0;\n  vertical-align:middle\n}\n.mx-table-date td[data-v-9f9ef728],.mx-table-date th[data-v-9f9ef728]{\n  font-size:12px\n}\n.mx-table-date .today[data-v-9f9ef728]{\n  color:rgb(41.7,144.3,233.4)\n}\n.mx-table-date .cell.not-current-month[data-v-9f9ef728]{\n  color:#ccc;\n  background:none\n}\n.mx-time[data-v-9f9ef728]{\n  flex:1;\n  width:224px;\n  background:#fff\n}\n.mx-time+.mx-time[data-v-9f9ef728]{\n  border-left:1px solid #e8e8e8\n}\n.mx-calendar-time[data-v-9f9ef728]{\n  position:absolute;\n  top:0;\n  left:0;\n  width:100%;\n  height:100%\n}\n.mx-time-header[data-v-9f9ef728]{\n  border-bottom:1px solid #e8e8e8\n}\n.mx-time-content[data-v-9f9ef728]{\n  height:224px;\n  box-sizing:border-box;\n  overflow:hidden\n}\n.mx-time-columns[data-v-9f9ef728]{\n  display:flex;\n  width:100%;\n  height:100%;\n  overflow:hidden\n}\n.mx-time-column[data-v-9f9ef728]{\n  flex:1;\n  position:relative;\n  border-left:1px solid #e8e8e8;\n  text-align:center\n}\n.mx-time-column[data-v-9f9ef728]:first-child{\n  border-left:0\n}\n.mx-time-column .mx-time-list[data-v-9f9ef728]{\n  margin:0;\n  padding:0;\n  list-style:none\n}\n.mx-time-column .mx-time-list[data-v-9f9ef728]:after{\n  content:\"\";\n  display:block;\n  height:192px\n}\n.mx-time-column .mx-time-item[data-v-9f9ef728]{\n  cursor:pointer;\n  font-size:12px;\n  height:32px;\n  line-height:32px\n}\n.mx-time-column .mx-time-item[data-v-9f9ef728]:hover{\n  color:#73879c;\n  background-color:rgb(243.15,248.85,253.8)\n}\n.mx-time-column .mx-time-item.active[data-v-9f9ef728]{\n  color:#1284e7;\n  background-color:transparent;\n  font-weight:700\n}\n.mx-time-column .mx-time-item.disabled[data-v-9f9ef728]{\n  cursor:not-allowed;\n  color:#ccc;\n  background-color:#f3f3f3\n}\n.mx-time-option[data-v-9f9ef728]{\n  cursor:pointer;\n  padding:8px 10px;\n  font-size:14px;\n  line-height:20px\n}\n.mx-time-option[data-v-9f9ef728]:hover{\n  color:#73879c;\n  background-color:rgb(243.15,248.85,253.8)\n}\n.mx-time-option.active[data-v-9f9ef728]{\n  color:#1284e7;\n  background-color:transparent;\n  font-weight:700\n}\n.mx-time-option.disabled[data-v-9f9ef728]{\n  cursor:not-allowed;\n  color:#ccc;\n  background-color:#f3f3f3\n}\n.el-input .el-input__inner[data-v-9f9ef728]:focus,.el-range-editor.is-active[data-v-9f9ef728],.el-range-editor.is-active[data-v-9f9ef728]:hover,.el-select .el-input.is-focus .el-input__inner[data-v-9f9ef728],.el-select .el-input__inner[data-v-9f9ef728]:focus,.el-textarea .el-input__inner[data-v-9f9ef728]:focus{\n  border:1.3px solid #1b63d4!important;\n  box-shadow:0 2px 10px rgba(187,209,243,.5)\n}\n.mx-input[data-v-9f9ef728]{\n  height:40px!important\n}\n.mx-datepicker-sidebar[data-v-9f9ef728]{\n  width:151px!important\n}\n.mx-table-date td[data-v-9f9ef728],.mx-table-date th[data-v-9f9ef728]{\n  height:32px;\n  font-size:14px!important\n}\n.mx-btn-shortcut[data-v-9f9ef728]{\n  display:block;\n  padding:0 6px;\n  line-height:30px!important\n}\n[data-v-9f9ef728]:root{\n  --vs-line-height:1.6\n}\n.btn-popover[data-v-9f9ef728]{\n  height:40px;\n  background-color:#fff;\n  width:100%;\n  padding:10px;\n  cursor:pointer\n}\n.btn-popover .title-1[data-v-9f9ef728]{\n  font-weight:400;\n  font-size:16px;\n  color:#454545;\n  margin-left:10px\n}\n.btn-popover[data-v-9f9ef728]:hover{\n  background-color:#f3f4f6\n}\n.el-popover[data-v-9f9ef728]{\n  padding:0!important;\n  border-radius:5px!important\n}\n.el-upload[data-v-9f9ef728]{\n  width:100%\n}\n.el-upload-dragger[data-v-9f9ef728]{\n  width:100%!important;\n  background:linear-gradient(0deg,rgba(33,150,243,.03),rgba(33,150,243,.03)),#fff!important;\n  border:1px dashed transparent!important;\n  border-radius:5px!important;\n  height:100%!important\n}\n.kg-popup[data-v-9f9ef728]{\n  transition:all .5s ease-in-out;\n  position:fixed;\n  top:0;\n  left:50%;\n  transform:translateX(-50%)\n}\n.noselect[data-v-9f9ef728]{\n  -webkit-touch-callout:none;\n  -webkit-user-select:none;\n  -moz-user-select:none;\n  user-select:none\n}\n.ProseMirror[data-v-9f9ef728]{\n  border:0;\n  outline:none\n}\n.ProseMirror>*+*[data-v-9f9ef728]{\n  margin-top:.75em\n}\n.ProseMirror ol[data-v-9f9ef728],.ProseMirror ul[data-v-9f9ef728]{\n  padding:0 1rem\n}\n.ProseMirror h1[data-v-9f9ef728],.ProseMirror h2[data-v-9f9ef728],.ProseMirror h3[data-v-9f9ef728],.ProseMirror h4[data-v-9f9ef728],.ProseMirror h5[data-v-9f9ef728],.ProseMirror h6[data-v-9f9ef728]{\n  line-height:1.1\n}\n.ProseMirror code[data-v-9f9ef728]{\n  background-color:rgba(97,97,97,.1);\n  color:#616161\n}\n.ProseMirror pre[data-v-9f9ef728]{\n  background:#0d0d0d;\n  color:#fff;\n  font-family:\"JetBrainsMono\",monospace;\n  padding:.75rem 1rem;\n  border-radius:.5rem\n}\n.ProseMirror pre code[data-v-9f9ef728]{\n  color:inherit;\n  padding:0;\n  background:none;\n  font-size:.8rem\n}\n.ProseMirror img[data-v-9f9ef728]{\n  max-width:100%;\n  height:auto\n}\n.ProseMirror blockquote[data-v-9f9ef728]{\n  padding-left:1rem;\n  border-left:2px solid rgba(13,13,13,.1)\n}\n.ProseMirror hr[data-v-9f9ef728]{\n  border:none;\n  border-top:2px solid rgba(13,13,13,.1);\n  margin:2rem 0\n}\n.ProseMirror[data-v-9f9ef728]:focus-visible{\n  outline:none\n}\n.el-color-picker__trigger[data-v-9f9ef728]{\n  border:0!important;\n  padding:0!important;\n  outline:none!important\n}\n.el-color-picker__icon[data-v-9f9ef728]{\n  visibility:hidden!important\n}\n.el-color-picker--mini .el-color-picker__trigger[data-v-9f9ef728],.el-color-picker__color[data-v-9f9ef728]{\n  height:22px!important;\n  width:22px!important\n}\n.el-color-picker__color[data-v-9f9ef728]{\n  padding:0!important;\n  border:0!important\n}\n.el-color-picker__empty[data-v-9f9ef728]{\n  padding-top:1.4px!important\n}\n.el-color-picker--mini[data-v-9f9ef728]{\n  height:22px!important\n}\n.el-color-picker__color-inner[data-v-9f9ef728]{\n  border:1px solid #e2e2e2!important\n}\n.el-table thead[data-v-9f9ef728]{\n  color:#5c6b7a!important;\n  font-family:\"Cabin\"!important\n}\n.el-table thead[data-v-9f9ef728],.th[data-v-9f9ef728]{\n  font-weight:600!important\n}\n.el-button--mini[data-v-9f9ef728],.el-button--text[data-v-9f9ef728],.el-date-range-picker__header div[data-v-9f9ef728],.el-date-table td span[data-v-9f9ef728],.el-input__inner[data-v-9f9ef728],.el-picker-panel__shortcut[data-v-9f9ef728],.el-select-dropdown__item[data-v-9f9ef728],.el-select-dropdown__item.hover[data-v-9f9ef728],.el-select-dropdown__item[data-v-9f9ef728]:hover,.el-time-spinner__item[data-v-9f9ef728]{\n  font-family:\"Cabin\"!important\n}\n.el-progress-bar__inner[data-v-9f9ef728],.el-progress-bar__outer[data-v-9f9ef728]{\n  border-bottom-left-radius:100px!important;\n  border-top-left-radius:100px!important\n}\n.el-dropdown .el-dropdown__caret-button[data-v-9f9ef728]{\n  bottom:2px!important\n}\n.el-dropdown-menu[data-v-9f9ef728],.el-dropdown-menu__item[data-v-9f9ef728]{\n  padding:0!important\n}\nbutton[data-v-9f9ef728]:active,button[data-v-9f9ef728]:focus{\n  outline:0!important\n}\n.el-input-group__append[data-v-9f9ef728]{\n  padding:0!important\n}\n.el-input-group__prepend[data-v-9f9ef728]{\n  padding-left:5px!important;\n  padding-right:5px!important\n}\n.el-menu-item[data-v-9f9ef728],.el-submenu__title[data-v-9f9ef728]{\n  height:40px!important;\n  line-height:40px!important;\n  font-family:\"Cabin\"!important;\n  font-size:16px!important;\n  font-style:normal!important;\n  font-weight:400!important;\n  color:#5c6b7a!important;\n  margin-bottom:10px!important;\n  border-left:4px solid transparent!important\n}\n.el-menu-item.is-active[data-v-9f9ef728]{\n  color:#1b63d4!important;\n  font-weight:600!important;\n  border-left:4px solid #1b63d4!important;\n  border-top-left-radius:2px!important;\n  border-bottom-left-radius:2px!important\n}\n.el-menu--collapse[data-v-9f9ef728]{\n  width:80px!important\n}\n.el-menu[data-v-9f9ef728]{\n  border-right:0!important\n}\n.el-dialog__body[data-v-9f9ef728],.el-dialog__header[data-v-9f9ef728]{\n  padding:0!important\n}\n.el-dialog[data-v-9f9ef728]{\n  border-radius:10px!important\n}\n.card-dialog[data-v-9f9ef728]{\n  padding:20px!important\n}\n.vue-swatches__trigger[data-v-9f9ef728]{\n  width:22px!important;\n  height:22px!important;\n  border-radius:2px!important\n}\n.vue-swatches[data-v-9f9ef728]{\n  height:22px!important\n}\n.CodeMirror[data-v-9f9ef728]{\n  height:calc(100vh - 150px)!important\n}\n.vue-swatches__trigger[data-v-9f9ef728]{\n  border:1px solid #e2e2e2!important\n}\n.form-input .input-box[data-v-9f9ef728]{\n  overflow-wrap:break-word;\n  overflow-y:scroll;\n  -ms-overflow-style:none;\n  scrollbar-width:none;\n  height:157px;\n  width:100%;\n  resize:none;\n  background:#9a9a9a;\n  border:1px solid #e2e2e2;\n  border-radius:5px;\n  padding:10px\n}\n.form-input .input-box[data-v-9f9ef728]::-webkit-scrollbar{\n  display:none\n}\n.form-input .input-box[data-v-9f9ef728]:focus{\n  outline:none!important;\n  background:#fff;\n  border:1.3px solid #1b63d4;\n  box-shadow:0 2px 10px #bbd1f3;\n  border-radius:5px\n}\n.form-input .style-box[data-v-9f9ef728]{\n  margin-top:8px\n}\n.form-input .style-box .title-box[data-v-9f9ef728]{\n  font-weight:600;\n  font-size:14px;\n  letter-spacing:.05em;\n  text-transform:uppercase;\n  color:#454545;\n  margin-bottom:8px\n}\n.form-input .style-box .card-font[data-v-9f9ef728]{\n  margin-bottom:8px\n}\n.form-input .style-box .card-font .font-family-card[data-v-9f9ef728]{\n  width:66%\n}\n.form-input .style-box .card-font .font-size-card[data-v-9f9ef728]{\n  width:30%;\n  margin-left:10px\n}\n.form-input .style-box .btn-card[data-v-9f9ef728]{\n  height:34px;\n  background:#fff;\n  border:1px solid #e2e2e2;\n  border-radius:5px;\n  cursor:pointer\n}\n.form-input .style-box .btn-card-active[data-v-9f9ef728]{\n  background:#1b63d4\n}\n.form-input .style-box .color-container[data-v-9f9ef728]{\n  margin-top:8px\n}\n.form-input .style-box .color-container .title-color[data-v-9f9ef728]{\n  font-weight:400;\n  font-size:16px;\n  color:#454545\n}\n.form-input .style-box .color-container .color-card[data-v-9f9ef728]{\n  height:40px;\n  background:#fff;\n  border:1px solid #e2e2e2;\n  border-radius:5px;\n  padding-left:10px;\n  padding-right:10px\n}\n.form-input .style-box .color-container .color-card .text-color[data-v-9f9ef728]{\n  font-weight:400;\n  font-size:16px;\n  color:#454545;\n  margin-left:5px;\n  width:80px\n}\n.form-input .style-box .color-container .color-card .text-color[data-v-9f9ef728]:focus{\n  outline:none\n}\n.form-input .style-box .color-container .color-card .percent-color[data-v-9f9ef728]{\n  font-weight:500;\n  font-size:16px;\n  color:#333\n}\n.form-input .style-box .color-container .color-card .percent-color .hr-vertical[data-v-9f9ef728]{\n  border:1px solid #e2e2e2;\n  height:15px;\n  margin-right:8px\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_style_index_0_id_426252c7_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(288);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_style_index_0_id_426252c7_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_style_index_0_id_426252c7_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_style_index_0_id_426252c7_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_style_index_0_id_426252c7_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 358:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(7);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n@font-face{\n  font-family:\"Cabin\";\n\n  src:local(\"Cabin\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\")\n}\n@font-face{\n  font-family:\"Roboto Mono\";\n\n  src:local(\"Roboto Mono\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\")\n}\n.header-1[data-v-426252c7]{\n  font-size:32px\n}\n.header-1[data-v-426252c7],.header-2[data-v-426252c7]{\n  font-family:\"Cabin\";\n  font-weight:600;\n  color:#454545\n}\n.header-2[data-v-426252c7]{\n  font-size:28px\n}\n.header-3[data-v-426252c7]{\n  font-size:24px\n}\n.header-3[data-v-426252c7],.header-4[data-v-426252c7]{\n  font-family:\"Cabin\";\n  font-weight:600;\n  color:#454545\n}\n.header-4[data-v-426252c7]{\n  font-size:20px\n}\n.header-5[data-v-426252c7]{\n  font-size:18px\n}\n.header-5[data-v-426252c7],.header-6[data-v-426252c7]{\n  font-family:\"Cabin\";\n  font-weight:600;\n  color:#454545\n}\n.header-6[data-v-426252c7]{\n  font-size:14px\n}\n.subtitle-1[data-v-426252c7]{\n  color:#757575\n}\n.subtitle-1[data-v-426252c7],.subtitle-2[data-v-426252c7]{\n  font-family:\"Cabin\";\n  font-size:16px;\n  font-weight:400\n}\n.subtitle-2[data-v-426252c7]{\n  color:#454545\n}\n.no-select[data-v-426252c7]{\n  -webkit-touch-callout:none;\n  -webkit-user-select:none;\n  -moz-user-select:none;\n  user-select:none\n}\n.mx-icon-double-left[data-v-426252c7]:after,.mx-icon-double-left[data-v-426252c7]:before,.mx-icon-double-right[data-v-426252c7]:after,.mx-icon-double-right[data-v-426252c7]:before,.mx-icon-left[data-v-426252c7]:before,.mx-icon-right[data-v-426252c7]:before{\n  content:\"\";\n  position:relative;\n  top:-1px;\n  display:inline-block;\n  width:10px;\n  height:10px;\n  vertical-align:middle;\n  border-color:currentcolor;\n  border-style:solid;\n  border-width:2px 0 0 2px;\n  border-radius:1px;\n  box-sizing:border-box;\n  transform-origin:center;\n  transform:rotate(-45deg) scale(.7)\n}\n.mx-icon-double-left[data-v-426252c7]:after{\n  left:-4px\n}\n.mx-icon-double-right[data-v-426252c7]:before{\n  left:4px\n}\n.mx-icon-double-right[data-v-426252c7]:after,.mx-icon-double-right[data-v-426252c7]:before,.mx-icon-right[data-v-426252c7]:before{\n  transform:rotate(135deg) scale(.7)\n}\n.mx-btn[data-v-426252c7]{\n  box-sizing:border-box;\n  line-height:1;\n  font-size:14px;\n  font-weight:500;\n  padding:7px 15px;\n  margin:0;\n  cursor:pointer;\n  background-color:transparent;\n  outline:none;\n  border:1px solid rgba(0,0,0,.1);\n  border-radius:4px;\n  color:#73879c;\n  white-space:nowrap\n}\n.mx-btn[data-v-426252c7]:hover{\n  border-color:#1284e7;\n  color:#1284e7\n}\n.mx-btn.disabled[data-v-426252c7],.mx-btn[data-v-426252c7]:disabled{\n  color:#ccc;\n  cursor:not-allowed\n}\n.mx-btn-text[data-v-426252c7]{\n  border:0;\n  padding:0 4px;\n  text-align:left;\n  line-height:inherit\n}\n.mx-scrollbar[data-v-426252c7]{\n  height:100%\n}\n.mx-scrollbar:hover .mx-scrollbar-track[data-v-426252c7]{\n  opacity:1\n}\n.mx-scrollbar-wrap[data-v-426252c7]{\n  height:100%;\n  overflow-x:hidden;\n  overflow-y:auto\n}\n.mx-scrollbar-track[data-v-426252c7]{\n  position:absolute;\n  top:2px;\n  right:2px;\n  bottom:2px;\n  width:6px;\n  z-index:1;\n  border-radius:4px;\n  opacity:0;\n  transition:opacity .24s ease-out\n}\n.mx-scrollbar-track .mx-scrollbar-thumb[data-v-426252c7]{\n  position:absolute;\n  width:100%;\n  height:0;\n  cursor:pointer;\n  border-radius:inherit;\n  background-color:rgba(144,147,153,.3);\n  transition:background-color .3s\n}\n.mx-zoom-in-down-enter-active[data-v-426252c7],.mx-zoom-in-down-leave-active[data-v-426252c7]{\n  opacity:1;\n  transform:scaleY(1);\n  transition:transform .3s cubic-bezier(.23,1,.32,1),opacity .3s cubic-bezier(.23,1,.32,1);\n  transform-origin:center top\n}\n.mx-zoom-in-down-enter[data-v-426252c7],.mx-zoom-in-down-enter-from[data-v-426252c7],.mx-zoom-in-down-leave-to[data-v-426252c7]{\n  opacity:0;\n  transform:scaleY(0)\n}\n.mx-datepicker[data-v-426252c7]{\n  position:relative;\n  display:inline-block;\n  width:210px\n}\n.mx-datepicker svg[data-v-426252c7]{\n  width:1em;\n  height:1em;\n  vertical-align:-.15em;\n  fill:currentColor;\n  overflow:hidden\n}\n.mx-datepicker-range[data-v-426252c7]{\n  width:320px\n}\n.mx-datepicker-inline[data-v-426252c7]{\n  width:auto\n}\n.mx-input-wrapper[data-v-426252c7]{\n  position:relative\n}\n.mx-input[data-v-426252c7]{\n  display:inline-block;\n  box-sizing:border-box;\n  width:100%;\n  height:34px;\n  padding:6px 30px 6px 10px;\n  font-size:14px;\n  line-height:1.4;\n  color:#555;\n  background-color:#fff;\n  border:1px solid #ccc;\n  border-radius:4px;\n  box-shadow:inset 0 1px 1px rgba(0,0,0,.075)\n}\n.mx-input[data-v-426252c7]:focus,.mx-input[data-v-426252c7]:hover{\n  border-color:#409aff\n}\n.mx-input.disabled[data-v-426252c7],.mx-input[data-v-426252c7]:disabled{\n  color:#ccc;\n  background-color:#f3f3f3;\n  border-color:#ccc;\n  cursor:not-allowed\n}\n.mx-input[data-v-426252c7]:focus{\n  outline:none\n}\n.mx-input[data-v-426252c7]::-ms-clear{\n  display:none\n}\n.mx-icon-calendar[data-v-426252c7],.mx-icon-clear[data-v-426252c7]{\n  position:absolute;\n  top:50%;\n  right:8px;\n  transform:translateY(-50%);\n  font-size:16px;\n  line-height:1;\n  color:rgba(0,0,0,.5);\n  vertical-align:middle\n}\n.mx-icon-clear[data-v-426252c7]{\n  cursor:pointer\n}\n.mx-icon-clear[data-v-426252c7]:hover{\n  color:rgba(0,0,0,.8)\n}\n.mx-datepicker-main[data-v-426252c7]{\n  font:14px/1.5 \"Helvetica Neue\",Helvetica,Arial,\"Microsoft Yahei\",sans-serif;\n  color:#73879c;\n  background-color:#fff;\n  border:1px solid #e8e8e8\n}\n.mx-datepicker-popup[data-v-426252c7]{\n  position:absolute;\n  margin-top:1px;\n  margin-bottom:1px;\n  box-shadow:0 6px 12px rgba(0,0,0,.175);\n  z-index:2001\n}\n.mx-datepicker-sidebar[data-v-426252c7]{\n  float:left;\n  box-sizing:border-box;\n  width:100px;\n  padding:6px;\n  overflow:auto\n}\n.mx-datepicker-sidebar+.mx-datepicker-content[data-v-426252c7]{\n  margin-left:100px;\n  border-left:1px solid #e8e8e8\n}\n.mx-datepicker-body[data-v-426252c7]{\n  position:relative;\n  -webkit-user-select:none;\n     -moz-user-select:none;\n          user-select:none\n}\n.mx-btn-shortcut[data-v-426252c7]{\n  line-height:24px\n}\n.mx-range-wrapper[data-v-426252c7]{\n  display:flex\n}\n@media(max-width:750px){\n.mx-range-wrapper[data-v-426252c7]{\n    flex-direction:column\n}\n}\n.mx-datepicker-header[data-v-426252c7]{\n  padding:6px 8px;\n  border-bottom:1px solid #e8e8e8\n}\n.mx-datepicker-footer[data-v-426252c7]{\n  padding:6px 8px;\n  text-align:right;\n  border-top:1px solid #e8e8e8\n}\n.mx-calendar[data-v-426252c7]{\n  box-sizing:border-box;\n  width:248px;\n  padding:6px 12px\n}\n.mx-calendar+.mx-calendar[data-v-426252c7]{\n  border-left:1px solid #e8e8e8\n}\n.mx-calendar-header[data-v-426252c7],.mx-time-header[data-v-426252c7]{\n  box-sizing:border-box;\n  height:34px;\n  line-height:34px;\n  text-align:center;\n  overflow:hidden\n}\n.mx-btn-icon-double-left[data-v-426252c7],.mx-btn-icon-left[data-v-426252c7]{\n  float:left\n}\n.mx-btn-icon-double-right[data-v-426252c7],.mx-btn-icon-right[data-v-426252c7]{\n  float:right\n}\n.mx-calendar-header-label[data-v-426252c7]{\n  font-size:14px\n}\n.mx-calendar-decade-separator[data-v-426252c7]{\n  margin:0 2px\n}\n.mx-calendar-decade-separator[data-v-426252c7]:after{\n  content:\"~\"\n}\n.mx-calendar-content[data-v-426252c7]{\n  position:relative;\n  height:224px;\n  box-sizing:border-box\n}\n.mx-calendar-content .cell[data-v-426252c7]{\n  cursor:pointer\n}\n.mx-calendar-content .cell[data-v-426252c7]:hover{\n  color:#73879c;\n  background-color:rgb(243.15,248.85,253.8)\n}\n.mx-calendar-content .cell.active[data-v-426252c7]{\n  color:#fff;\n  background-color:#1284e7\n}\n.mx-calendar-content .cell.hover-in-range[data-v-426252c7],.mx-calendar-content .cell.in-range[data-v-426252c7]{\n  color:#73879c;\n  background-color:rgb(219.45,236.55,251.4)\n}\n.mx-calendar-content .cell.disabled[data-v-426252c7]{\n  cursor:not-allowed;\n  color:#ccc;\n  background-color:#f3f3f3\n}\n.mx-calendar-week-mode .mx-date-row[data-v-426252c7]{\n  cursor:pointer\n}\n.mx-calendar-week-mode .mx-date-row[data-v-426252c7]:hover{\n  background-color:rgb(243.15,248.85,253.8)\n}\n.mx-calendar-week-mode .mx-date-row.mx-active-week[data-v-426252c7]{\n  background-color:rgb(219.45,236.55,251.4)\n}\n.mx-calendar-week-mode .mx-date-row .cell.active[data-v-426252c7],.mx-calendar-week-mode .mx-date-row .cell[data-v-426252c7]:hover{\n  color:inherit;\n  background-color:transparent\n}\n.mx-week-number[data-v-426252c7]{\n  opacity:.5\n}\n.mx-table[data-v-426252c7]{\n  table-layout:fixed;\n  border-collapse:separate;\n  border-spacing:0;\n  width:100%;\n  height:100%;\n  box-sizing:border-box;\n  text-align:center\n}\n.mx-table th[data-v-426252c7]{\n  font-weight:500\n}\n.mx-table td[data-v-426252c7],.mx-table th[data-v-426252c7]{\n  padding:0;\n  vertical-align:middle\n}\n.mx-table-date td[data-v-426252c7],.mx-table-date th[data-v-426252c7]{\n  font-size:12px\n}\n.mx-table-date .today[data-v-426252c7]{\n  color:rgb(41.7,144.3,233.4)\n}\n.mx-table-date .cell.not-current-month[data-v-426252c7]{\n  color:#ccc;\n  background:none\n}\n.mx-time[data-v-426252c7]{\n  flex:1;\n  width:224px;\n  background:#fff\n}\n.mx-time+.mx-time[data-v-426252c7]{\n  border-left:1px solid #e8e8e8\n}\n.mx-calendar-time[data-v-426252c7]{\n  position:absolute;\n  top:0;\n  left:0;\n  width:100%;\n  height:100%\n}\n.mx-time-header[data-v-426252c7]{\n  border-bottom:1px solid #e8e8e8\n}\n.mx-time-content[data-v-426252c7]{\n  height:224px;\n  box-sizing:border-box;\n  overflow:hidden\n}\n.mx-time-columns[data-v-426252c7]{\n  display:flex;\n  width:100%;\n  height:100%;\n  overflow:hidden\n}\n.mx-time-column[data-v-426252c7]{\n  flex:1;\n  position:relative;\n  border-left:1px solid #e8e8e8;\n  text-align:center\n}\n.mx-time-column[data-v-426252c7]:first-child{\n  border-left:0\n}\n.mx-time-column .mx-time-list[data-v-426252c7]{\n  margin:0;\n  padding:0;\n  list-style:none\n}\n.mx-time-column .mx-time-list[data-v-426252c7]:after{\n  content:\"\";\n  display:block;\n  height:192px\n}\n.mx-time-column .mx-time-item[data-v-426252c7]{\n  cursor:pointer;\n  font-size:12px;\n  height:32px;\n  line-height:32px\n}\n.mx-time-column .mx-time-item[data-v-426252c7]:hover{\n  color:#73879c;\n  background-color:rgb(243.15,248.85,253.8)\n}\n.mx-time-column .mx-time-item.active[data-v-426252c7]{\n  color:#1284e7;\n  background-color:transparent;\n  font-weight:700\n}\n.mx-time-column .mx-time-item.disabled[data-v-426252c7]{\n  cursor:not-allowed;\n  color:#ccc;\n  background-color:#f3f3f3\n}\n.mx-time-option[data-v-426252c7]{\n  cursor:pointer;\n  padding:8px 10px;\n  font-size:14px;\n  line-height:20px\n}\n.mx-time-option[data-v-426252c7]:hover{\n  color:#73879c;\n  background-color:rgb(243.15,248.85,253.8)\n}\n.mx-time-option.active[data-v-426252c7]{\n  color:#1284e7;\n  background-color:transparent;\n  font-weight:700\n}\n.mx-time-option.disabled[data-v-426252c7]{\n  cursor:not-allowed;\n  color:#ccc;\n  background-color:#f3f3f3\n}\n.el-input .el-input__inner[data-v-426252c7]:focus,.el-range-editor.is-active[data-v-426252c7],.el-range-editor.is-active[data-v-426252c7]:hover,.el-select .el-input.is-focus .el-input__inner[data-v-426252c7],.el-select .el-input__inner[data-v-426252c7]:focus,.el-textarea .el-input__inner[data-v-426252c7]:focus{\n  border:1.3px solid #1b63d4!important;\n  box-shadow:0 2px 10px rgba(187,209,243,.5)\n}\n.mx-input[data-v-426252c7]{\n  height:40px!important\n}\n.mx-datepicker-sidebar[data-v-426252c7]{\n  width:151px!important\n}\n.mx-table-date td[data-v-426252c7],.mx-table-date th[data-v-426252c7]{\n  height:32px;\n  font-size:14px!important\n}\n.mx-btn-shortcut[data-v-426252c7]{\n  display:block;\n  padding:0 6px;\n  line-height:30px!important\n}\n[data-v-426252c7]:root{\n  --vs-line-height:1.6\n}\n.btn-popover[data-v-426252c7]{\n  height:40px;\n  background-color:#fff;\n  width:100%;\n  padding:10px;\n  cursor:pointer\n}\n.btn-popover .title-1[data-v-426252c7]{\n  font-weight:400;\n  font-size:16px;\n  color:#454545;\n  margin-left:10px\n}\n.btn-popover[data-v-426252c7]:hover{\n  background-color:#f3f4f6\n}\n.el-popover[data-v-426252c7]{\n  padding:0!important;\n  border-radius:5px!important\n}\n.el-upload[data-v-426252c7]{\n  width:100%\n}\n.el-upload-dragger[data-v-426252c7]{\n  width:100%!important;\n  background:linear-gradient(0deg,rgba(33,150,243,.03),rgba(33,150,243,.03)),#fff!important;\n  border:1px dashed transparent!important;\n  border-radius:5px!important;\n  height:100%!important\n}\n.kg-popup[data-v-426252c7]{\n  transition:all .5s ease-in-out;\n  position:fixed;\n  top:0;\n  left:50%;\n  transform:translateX(-50%)\n}\n.noselect[data-v-426252c7]{\n  -webkit-touch-callout:none;\n  -webkit-user-select:none;\n  -moz-user-select:none;\n  user-select:none\n}\n.ProseMirror[data-v-426252c7]{\n  border:0;\n  outline:none\n}\n.ProseMirror>*+*[data-v-426252c7]{\n  margin-top:.75em\n}\n.ProseMirror ol[data-v-426252c7],.ProseMirror ul[data-v-426252c7]{\n  padding:0 1rem\n}\n.ProseMirror h1[data-v-426252c7],.ProseMirror h2[data-v-426252c7],.ProseMirror h3[data-v-426252c7],.ProseMirror h4[data-v-426252c7],.ProseMirror h5[data-v-426252c7],.ProseMirror h6[data-v-426252c7]{\n  line-height:1.1\n}\n.ProseMirror code[data-v-426252c7]{\n  background-color:rgba(97,97,97,.1);\n  color:#616161\n}\n.ProseMirror pre[data-v-426252c7]{\n  background:#0d0d0d;\n  color:#fff;\n  font-family:\"JetBrainsMono\",monospace;\n  padding:.75rem 1rem;\n  border-radius:.5rem\n}\n.ProseMirror pre code[data-v-426252c7]{\n  color:inherit;\n  padding:0;\n  background:none;\n  font-size:.8rem\n}\n.ProseMirror img[data-v-426252c7]{\n  max-width:100%;\n  height:auto\n}\n.ProseMirror blockquote[data-v-426252c7]{\n  padding-left:1rem;\n  border-left:2px solid rgba(13,13,13,.1)\n}\n.ProseMirror hr[data-v-426252c7]{\n  border:none;\n  border-top:2px solid rgba(13,13,13,.1);\n  margin:2rem 0\n}\n.ProseMirror[data-v-426252c7]:focus-visible{\n  outline:none\n}\n.el-color-picker__trigger[data-v-426252c7]{\n  border:0!important;\n  padding:0!important;\n  outline:none!important\n}\n.el-color-picker__icon[data-v-426252c7]{\n  visibility:hidden!important\n}\n.el-color-picker--mini .el-color-picker__trigger[data-v-426252c7],.el-color-picker__color[data-v-426252c7]{\n  height:22px!important;\n  width:22px!important\n}\n.el-color-picker__color[data-v-426252c7]{\n  padding:0!important;\n  border:0!important\n}\n.el-color-picker__empty[data-v-426252c7]{\n  padding-top:1.4px!important\n}\n.el-color-picker--mini[data-v-426252c7]{\n  height:22px!important\n}\n.el-color-picker__color-inner[data-v-426252c7]{\n  border:1px solid #e2e2e2!important\n}\n.el-table thead[data-v-426252c7]{\n  color:#5c6b7a!important;\n  font-family:\"Cabin\"!important\n}\n.el-table thead[data-v-426252c7],.th[data-v-426252c7]{\n  font-weight:600!important\n}\n.el-button--mini[data-v-426252c7],.el-button--text[data-v-426252c7],.el-date-range-picker__header div[data-v-426252c7],.el-date-table td span[data-v-426252c7],.el-input__inner[data-v-426252c7],.el-picker-panel__shortcut[data-v-426252c7],.el-select-dropdown__item[data-v-426252c7],.el-select-dropdown__item.hover[data-v-426252c7],.el-select-dropdown__item[data-v-426252c7]:hover,.el-time-spinner__item[data-v-426252c7]{\n  font-family:\"Cabin\"!important\n}\n.el-progress-bar__inner[data-v-426252c7],.el-progress-bar__outer[data-v-426252c7]{\n  border-bottom-left-radius:100px!important;\n  border-top-left-radius:100px!important\n}\n.el-dropdown .el-dropdown__caret-button[data-v-426252c7]{\n  bottom:2px!important\n}\n.el-dropdown-menu[data-v-426252c7],.el-dropdown-menu__item[data-v-426252c7]{\n  padding:0!important\n}\nbutton[data-v-426252c7]:active,button[data-v-426252c7]:focus{\n  outline:0!important\n}\n.el-input-group__append[data-v-426252c7]{\n  padding:0!important\n}\n.el-input-group__prepend[data-v-426252c7]{\n  padding-left:5px!important;\n  padding-right:5px!important\n}\n.el-menu-item[data-v-426252c7],.el-submenu__title[data-v-426252c7]{\n  height:40px!important;\n  line-height:40px!important;\n  font-family:\"Cabin\"!important;\n  font-size:16px!important;\n  font-style:normal!important;\n  font-weight:400!important;\n  color:#5c6b7a!important;\n  margin-bottom:10px!important;\n  border-left:4px solid transparent!important\n}\n.el-menu-item.is-active[data-v-426252c7]{\n  color:#1b63d4!important;\n  font-weight:600!important;\n  border-left:4px solid #1b63d4!important;\n  border-top-left-radius:2px!important;\n  border-bottom-left-radius:2px!important\n}\n.el-menu--collapse[data-v-426252c7]{\n  width:80px!important\n}\n.el-menu[data-v-426252c7]{\n  border-right:0!important\n}\n.el-dialog__body[data-v-426252c7],.el-dialog__header[data-v-426252c7]{\n  padding:0!important\n}\n.el-dialog[data-v-426252c7]{\n  border-radius:10px!important\n}\n.card-dialog[data-v-426252c7]{\n  padding:20px!important\n}\n.vue-swatches__trigger[data-v-426252c7]{\n  width:22px!important;\n  height:22px!important;\n  border-radius:2px!important\n}\n.vue-swatches[data-v-426252c7]{\n  height:22px!important\n}\n.CodeMirror[data-v-426252c7]{\n  height:calc(100vh - 150px)!important\n}\n.vue-swatches__trigger[data-v-426252c7]{\n  border:1px solid #e2e2e2!important\n}\n.form-input .title-btn[data-v-426252c7]{\n  font-weight:400;\n  font-size:16px;\n  margin-bottom:3px;\n  color:#454545\n}\n.form-input .input-box[data-v-426252c7]{\n  height:40px;\n  width:100%;\n  resize:none;\n  background:#9a9a9a;\n  border:1px solid #e2e2e2;\n  border-radius:5px;\n  padding:6px 10px 4px;\n  margin-bottom:10px\n}\n.form-input .input-box[data-v-426252c7]:focus{\n  outline:none!important;\n  background:#fff;\n  border:1.3px solid #1b63d4;\n  box-shadow:0 2px 10px #bbd1f3;\n  border-radius:5px\n}\n.form-input .style-box[data-v-426252c7]{\n  margin-top:8px\n}\n.form-input .style-box .title-box[data-v-426252c7]{\n  font-weight:600;\n  font-size:14px;\n  letter-spacing:.05em;\n  text-transform:uppercase;\n  color:#454545;\n  margin-bottom:8px\n}\n.form-input .style-box .card-font[data-v-426252c7]{\n  margin-bottom:8px\n}\n.form-input .style-box .card-font .font-family-card[data-v-426252c7]{\n  width:66%\n}\n.form-input .style-box .card-font .font-size-card[data-v-426252c7]{\n  width:30%;\n  margin-left:10px\n}\n.form-input .style-box .btn-card[data-v-426252c7]{\n  height:34px;\n  background:#fff;\n  border:1px solid #e2e2e2;\n  border-radius:5px;\n  cursor:pointer\n}\n.form-input .style-box .btn-card-active[data-v-426252c7]{\n  background:#1b63d4\n}\n.form-input .style-box .color-container[data-v-426252c7]{\n  margin-top:8px\n}\n.form-input .style-box .color-container .title-color[data-v-426252c7]{\n  font-weight:400;\n  font-size:16px;\n  color:#454545\n}\n.form-input .style-box .color-container .color-card[data-v-426252c7]{\n  height:40px;\n  background:#fff;\n  border:1px solid #e2e2e2;\n  border-radius:5px;\n  padding-left:10px;\n  padding-right:10px\n}\n.form-input .style-box .color-container .color-card .text-color[data-v-426252c7]{\n  font-weight:400;\n  font-size:16px;\n  color:#454545;\n  margin-left:5px;\n  width:80px\n}\n.form-input .style-box .color-container .color-card .text-color[data-v-426252c7]:focus{\n  outline:none\n}\n.form-input .style-box .color-container .color-card .percent-color[data-v-426252c7]{\n  font-weight:500;\n  font-size:16px;\n  color:#333\n}\n.form-input .style-box .color-container .color-card .percent-color .hr-vertical[data-v-426252c7]{\n  border:1px solid #e2e2e2;\n  height:15px;\n  margin-right:8px\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextColor_vue_vue_type_style_index_0_id_f43c0292_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(289);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextColor_vue_vue_type_style_index_0_id_f43c0292_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextColor_vue_vue_type_style_index_0_id_f43c0292_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextColor_vue_vue_type_style_index_0_id_f43c0292_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextColor_vue_vue_type_style_index_0_id_f43c0292_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 360:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(7);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n@font-face{\n  font-family:\"Cabin\";\n\n  src:local(\"Cabin\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\")\n}\n@font-face{\n  font-family:\"Roboto Mono\";\n\n  src:local(\"Roboto Mono\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\")\n}\n.header-1[data-v-f43c0292]{\n  font-size:32px\n}\n.header-1[data-v-f43c0292],.header-2[data-v-f43c0292]{\n  font-family:\"Cabin\";\n  font-weight:600;\n  color:#454545\n}\n.header-2[data-v-f43c0292]{\n  font-size:28px\n}\n.header-3[data-v-f43c0292]{\n  font-size:24px\n}\n.header-3[data-v-f43c0292],.header-4[data-v-f43c0292]{\n  font-family:\"Cabin\";\n  font-weight:600;\n  color:#454545\n}\n.header-4[data-v-f43c0292]{\n  font-size:20px\n}\n.header-5[data-v-f43c0292]{\n  font-size:18px\n}\n.header-5[data-v-f43c0292],.header-6[data-v-f43c0292]{\n  font-family:\"Cabin\";\n  font-weight:600;\n  color:#454545\n}\n.header-6[data-v-f43c0292]{\n  font-size:14px\n}\n.subtitle-1[data-v-f43c0292]{\n  color:#757575\n}\n.subtitle-1[data-v-f43c0292],.subtitle-2[data-v-f43c0292]{\n  font-family:\"Cabin\";\n  font-size:16px;\n  font-weight:400\n}\n.subtitle-2[data-v-f43c0292]{\n  color:#454545\n}\n.no-select[data-v-f43c0292]{\n  -webkit-touch-callout:none;\n  -webkit-user-select:none;\n  -moz-user-select:none;\n  user-select:none\n}\n.mx-icon-double-left[data-v-f43c0292]:after,.mx-icon-double-left[data-v-f43c0292]:before,.mx-icon-double-right[data-v-f43c0292]:after,.mx-icon-double-right[data-v-f43c0292]:before,.mx-icon-left[data-v-f43c0292]:before,.mx-icon-right[data-v-f43c0292]:before{\n  content:\"\";\n  position:relative;\n  top:-1px;\n  display:inline-block;\n  width:10px;\n  height:10px;\n  vertical-align:middle;\n  border-color:currentcolor;\n  border-style:solid;\n  border-width:2px 0 0 2px;\n  border-radius:1px;\n  box-sizing:border-box;\n  transform-origin:center;\n  transform:rotate(-45deg) scale(.7)\n}\n.mx-icon-double-left[data-v-f43c0292]:after{\n  left:-4px\n}\n.mx-icon-double-right[data-v-f43c0292]:before{\n  left:4px\n}\n.mx-icon-double-right[data-v-f43c0292]:after,.mx-icon-double-right[data-v-f43c0292]:before,.mx-icon-right[data-v-f43c0292]:before{\n  transform:rotate(135deg) scale(.7)\n}\n.mx-btn[data-v-f43c0292]{\n  box-sizing:border-box;\n  line-height:1;\n  font-size:14px;\n  font-weight:500;\n  padding:7px 15px;\n  margin:0;\n  cursor:pointer;\n  background-color:transparent;\n  outline:none;\n  border:1px solid rgba(0,0,0,.1);\n  border-radius:4px;\n  color:#73879c;\n  white-space:nowrap\n}\n.mx-btn[data-v-f43c0292]:hover{\n  border-color:#1284e7;\n  color:#1284e7\n}\n.mx-btn.disabled[data-v-f43c0292],.mx-btn[data-v-f43c0292]:disabled{\n  color:#ccc;\n  cursor:not-allowed\n}\n.mx-btn-text[data-v-f43c0292]{\n  border:0;\n  padding:0 4px;\n  text-align:left;\n  line-height:inherit\n}\n.mx-scrollbar[data-v-f43c0292]{\n  height:100%\n}\n.mx-scrollbar:hover .mx-scrollbar-track[data-v-f43c0292]{\n  opacity:1\n}\n.mx-scrollbar-wrap[data-v-f43c0292]{\n  height:100%;\n  overflow-x:hidden;\n  overflow-y:auto\n}\n.mx-scrollbar-track[data-v-f43c0292]{\n  position:absolute;\n  top:2px;\n  right:2px;\n  bottom:2px;\n  width:6px;\n  z-index:1;\n  border-radius:4px;\n  opacity:0;\n  transition:opacity .24s ease-out\n}\n.mx-scrollbar-track .mx-scrollbar-thumb[data-v-f43c0292]{\n  position:absolute;\n  width:100%;\n  height:0;\n  cursor:pointer;\n  border-radius:inherit;\n  background-color:rgba(144,147,153,.3);\n  transition:background-color .3s\n}\n.mx-zoom-in-down-enter-active[data-v-f43c0292],.mx-zoom-in-down-leave-active[data-v-f43c0292]{\n  opacity:1;\n  transform:scaleY(1);\n  transition:transform .3s cubic-bezier(.23,1,.32,1),opacity .3s cubic-bezier(.23,1,.32,1);\n  transform-origin:center top\n}\n.mx-zoom-in-down-enter[data-v-f43c0292],.mx-zoom-in-down-enter-from[data-v-f43c0292],.mx-zoom-in-down-leave-to[data-v-f43c0292]{\n  opacity:0;\n  transform:scaleY(0)\n}\n.mx-datepicker[data-v-f43c0292]{\n  position:relative;\n  display:inline-block;\n  width:210px\n}\n.mx-datepicker svg[data-v-f43c0292]{\n  width:1em;\n  height:1em;\n  vertical-align:-.15em;\n  fill:currentColor;\n  overflow:hidden\n}\n.mx-datepicker-range[data-v-f43c0292]{\n  width:320px\n}\n.mx-datepicker-inline[data-v-f43c0292]{\n  width:auto\n}\n.mx-input-wrapper[data-v-f43c0292]{\n  position:relative\n}\n.mx-input[data-v-f43c0292]{\n  display:inline-block;\n  box-sizing:border-box;\n  width:100%;\n  height:34px;\n  padding:6px 30px 6px 10px;\n  font-size:14px;\n  line-height:1.4;\n  color:#555;\n  background-color:#fff;\n  border:1px solid #ccc;\n  border-radius:4px;\n  box-shadow:inset 0 1px 1px rgba(0,0,0,.075)\n}\n.mx-input[data-v-f43c0292]:focus,.mx-input[data-v-f43c0292]:hover{\n  border-color:#409aff\n}\n.mx-input.disabled[data-v-f43c0292],.mx-input[data-v-f43c0292]:disabled{\n  color:#ccc;\n  background-color:#f3f3f3;\n  border-color:#ccc;\n  cursor:not-allowed\n}\n.mx-input[data-v-f43c0292]:focus{\n  outline:none\n}\n.mx-input[data-v-f43c0292]::-ms-clear{\n  display:none\n}\n.mx-icon-calendar[data-v-f43c0292],.mx-icon-clear[data-v-f43c0292]{\n  position:absolute;\n  top:50%;\n  right:8px;\n  transform:translateY(-50%);\n  font-size:16px;\n  line-height:1;\n  color:rgba(0,0,0,.5);\n  vertical-align:middle\n}\n.mx-icon-clear[data-v-f43c0292]{\n  cursor:pointer\n}\n.mx-icon-clear[data-v-f43c0292]:hover{\n  color:rgba(0,0,0,.8)\n}\n.mx-datepicker-main[data-v-f43c0292]{\n  font:14px/1.5 \"Helvetica Neue\",Helvetica,Arial,\"Microsoft Yahei\",sans-serif;\n  color:#73879c;\n  background-color:#fff;\n  border:1px solid #e8e8e8\n}\n.mx-datepicker-popup[data-v-f43c0292]{\n  position:absolute;\n  margin-top:1px;\n  margin-bottom:1px;\n  box-shadow:0 6px 12px rgba(0,0,0,.175);\n  z-index:2001\n}\n.mx-datepicker-sidebar[data-v-f43c0292]{\n  float:left;\n  box-sizing:border-box;\n  width:100px;\n  padding:6px;\n  overflow:auto\n}\n.mx-datepicker-sidebar+.mx-datepicker-content[data-v-f43c0292]{\n  margin-left:100px;\n  border-left:1px solid #e8e8e8\n}\n.mx-datepicker-body[data-v-f43c0292]{\n  position:relative;\n  -webkit-user-select:none;\n     -moz-user-select:none;\n          user-select:none\n}\n.mx-btn-shortcut[data-v-f43c0292]{\n  line-height:24px\n}\n.mx-range-wrapper[data-v-f43c0292]{\n  display:flex\n}\n@media(max-width:750px){\n.mx-range-wrapper[data-v-f43c0292]{\n    flex-direction:column\n}\n}\n.mx-datepicker-header[data-v-f43c0292]{\n  padding:6px 8px;\n  border-bottom:1px solid #e8e8e8\n}\n.mx-datepicker-footer[data-v-f43c0292]{\n  padding:6px 8px;\n  text-align:right;\n  border-top:1px solid #e8e8e8\n}\n.mx-calendar[data-v-f43c0292]{\n  box-sizing:border-box;\n  width:248px;\n  padding:6px 12px\n}\n.mx-calendar+.mx-calendar[data-v-f43c0292]{\n  border-left:1px solid #e8e8e8\n}\n.mx-calendar-header[data-v-f43c0292],.mx-time-header[data-v-f43c0292]{\n  box-sizing:border-box;\n  height:34px;\n  line-height:34px;\n  text-align:center;\n  overflow:hidden\n}\n.mx-btn-icon-double-left[data-v-f43c0292],.mx-btn-icon-left[data-v-f43c0292]{\n  float:left\n}\n.mx-btn-icon-double-right[data-v-f43c0292],.mx-btn-icon-right[data-v-f43c0292]{\n  float:right\n}\n.mx-calendar-header-label[data-v-f43c0292]{\n  font-size:14px\n}\n.mx-calendar-decade-separator[data-v-f43c0292]{\n  margin:0 2px\n}\n.mx-calendar-decade-separator[data-v-f43c0292]:after{\n  content:\"~\"\n}\n.mx-calendar-content[data-v-f43c0292]{\n  position:relative;\n  height:224px;\n  box-sizing:border-box\n}\n.mx-calendar-content .cell[data-v-f43c0292]{\n  cursor:pointer\n}\n.mx-calendar-content .cell[data-v-f43c0292]:hover{\n  color:#73879c;\n  background-color:rgb(243.15,248.85,253.8)\n}\n.mx-calendar-content .cell.active[data-v-f43c0292]{\n  color:#fff;\n  background-color:#1284e7\n}\n.mx-calendar-content .cell.hover-in-range[data-v-f43c0292],.mx-calendar-content .cell.in-range[data-v-f43c0292]{\n  color:#73879c;\n  background-color:rgb(219.45,236.55,251.4)\n}\n.mx-calendar-content .cell.disabled[data-v-f43c0292]{\n  cursor:not-allowed;\n  color:#ccc;\n  background-color:#f3f3f3\n}\n.mx-calendar-week-mode .mx-date-row[data-v-f43c0292]{\n  cursor:pointer\n}\n.mx-calendar-week-mode .mx-date-row[data-v-f43c0292]:hover{\n  background-color:rgb(243.15,248.85,253.8)\n}\n.mx-calendar-week-mode .mx-date-row.mx-active-week[data-v-f43c0292]{\n  background-color:rgb(219.45,236.55,251.4)\n}\n.mx-calendar-week-mode .mx-date-row .cell.active[data-v-f43c0292],.mx-calendar-week-mode .mx-date-row .cell[data-v-f43c0292]:hover{\n  color:inherit;\n  background-color:transparent\n}\n.mx-week-number[data-v-f43c0292]{\n  opacity:.5\n}\n.mx-table[data-v-f43c0292]{\n  table-layout:fixed;\n  border-collapse:separate;\n  border-spacing:0;\n  width:100%;\n  height:100%;\n  box-sizing:border-box;\n  text-align:center\n}\n.mx-table th[data-v-f43c0292]{\n  font-weight:500\n}\n.mx-table td[data-v-f43c0292],.mx-table th[data-v-f43c0292]{\n  padding:0;\n  vertical-align:middle\n}\n.mx-table-date td[data-v-f43c0292],.mx-table-date th[data-v-f43c0292]{\n  font-size:12px\n}\n.mx-table-date .today[data-v-f43c0292]{\n  color:rgb(41.7,144.3,233.4)\n}\n.mx-table-date .cell.not-current-month[data-v-f43c0292]{\n  color:#ccc;\n  background:none\n}\n.mx-time[data-v-f43c0292]{\n  flex:1;\n  width:224px;\n  background:#fff\n}\n.mx-time+.mx-time[data-v-f43c0292]{\n  border-left:1px solid #e8e8e8\n}\n.mx-calendar-time[data-v-f43c0292]{\n  position:absolute;\n  top:0;\n  left:0;\n  width:100%;\n  height:100%\n}\n.mx-time-header[data-v-f43c0292]{\n  border-bottom:1px solid #e8e8e8\n}\n.mx-time-content[data-v-f43c0292]{\n  height:224px;\n  box-sizing:border-box;\n  overflow:hidden\n}\n.mx-time-columns[data-v-f43c0292]{\n  display:flex;\n  width:100%;\n  height:100%;\n  overflow:hidden\n}\n.mx-time-column[data-v-f43c0292]{\n  flex:1;\n  position:relative;\n  border-left:1px solid #e8e8e8;\n  text-align:center\n}\n.mx-time-column[data-v-f43c0292]:first-child{\n  border-left:0\n}\n.mx-time-column .mx-time-list[data-v-f43c0292]{\n  margin:0;\n  padding:0;\n  list-style:none\n}\n.mx-time-column .mx-time-list[data-v-f43c0292]:after{\n  content:\"\";\n  display:block;\n  height:192px\n}\n.mx-time-column .mx-time-item[data-v-f43c0292]{\n  cursor:pointer;\n  font-size:12px;\n  height:32px;\n  line-height:32px\n}\n.mx-time-column .mx-time-item[data-v-f43c0292]:hover{\n  color:#73879c;\n  background-color:rgb(243.15,248.85,253.8)\n}\n.mx-time-column .mx-time-item.active[data-v-f43c0292]{\n  color:#1284e7;\n  background-color:transparent;\n  font-weight:700\n}\n.mx-time-column .mx-time-item.disabled[data-v-f43c0292]{\n  cursor:not-allowed;\n  color:#ccc;\n  background-color:#f3f3f3\n}\n.mx-time-option[data-v-f43c0292]{\n  cursor:pointer;\n  padding:8px 10px;\n  font-size:14px;\n  line-height:20px\n}\n.mx-time-option[data-v-f43c0292]:hover{\n  color:#73879c;\n  background-color:rgb(243.15,248.85,253.8)\n}\n.mx-time-option.active[data-v-f43c0292]{\n  color:#1284e7;\n  background-color:transparent;\n  font-weight:700\n}\n.mx-time-option.disabled[data-v-f43c0292]{\n  cursor:not-allowed;\n  color:#ccc;\n  background-color:#f3f3f3\n}\n.el-input .el-input__inner[data-v-f43c0292]:focus,.el-range-editor.is-active[data-v-f43c0292],.el-range-editor.is-active[data-v-f43c0292]:hover,.el-select .el-input.is-focus .el-input__inner[data-v-f43c0292],.el-select .el-input__inner[data-v-f43c0292]:focus,.el-textarea .el-input__inner[data-v-f43c0292]:focus{\n  border:1.3px solid #1b63d4!important;\n  box-shadow:0 2px 10px rgba(187,209,243,.5)\n}\n.mx-input[data-v-f43c0292]{\n  height:40px!important\n}\n.mx-datepicker-sidebar[data-v-f43c0292]{\n  width:151px!important\n}\n.mx-table-date td[data-v-f43c0292],.mx-table-date th[data-v-f43c0292]{\n  height:32px;\n  font-size:14px!important\n}\n.mx-btn-shortcut[data-v-f43c0292]{\n  display:block;\n  padding:0 6px;\n  line-height:30px!important\n}\n[data-v-f43c0292]:root{\n  --vs-line-height:1.6\n}\n.btn-popover[data-v-f43c0292]{\n  height:40px;\n  background-color:#fff;\n  width:100%;\n  padding:10px;\n  cursor:pointer\n}\n.btn-popover .title-1[data-v-f43c0292]{\n  font-weight:400;\n  font-size:16px;\n  color:#454545;\n  margin-left:10px\n}\n.btn-popover[data-v-f43c0292]:hover{\n  background-color:#f3f4f6\n}\n.el-popover[data-v-f43c0292]{\n  padding:0!important;\n  border-radius:5px!important\n}\n.el-upload[data-v-f43c0292]{\n  width:100%\n}\n.el-upload-dragger[data-v-f43c0292]{\n  width:100%!important;\n  background:linear-gradient(0deg,rgba(33,150,243,.03),rgba(33,150,243,.03)),#fff!important;\n  border:1px dashed transparent!important;\n  border-radius:5px!important;\n  height:100%!important\n}\n.kg-popup[data-v-f43c0292]{\n  transition:all .5s ease-in-out;\n  position:fixed;\n  top:0;\n  left:50%;\n  transform:translateX(-50%)\n}\n.noselect[data-v-f43c0292]{\n  -webkit-touch-callout:none;\n  -webkit-user-select:none;\n  -moz-user-select:none;\n  user-select:none\n}\n.ProseMirror[data-v-f43c0292]{\n  border:0;\n  outline:none\n}\n.ProseMirror>*+*[data-v-f43c0292]{\n  margin-top:.75em\n}\n.ProseMirror ol[data-v-f43c0292],.ProseMirror ul[data-v-f43c0292]{\n  padding:0 1rem\n}\n.ProseMirror h1[data-v-f43c0292],.ProseMirror h2[data-v-f43c0292],.ProseMirror h3[data-v-f43c0292],.ProseMirror h4[data-v-f43c0292],.ProseMirror h5[data-v-f43c0292],.ProseMirror h6[data-v-f43c0292]{\n  line-height:1.1\n}\n.ProseMirror code[data-v-f43c0292]{\n  background-color:rgba(97,97,97,.1);\n  color:#616161\n}\n.ProseMirror pre[data-v-f43c0292]{\n  background:#0d0d0d;\n  color:#fff;\n  font-family:\"JetBrainsMono\",monospace;\n  padding:.75rem 1rem;\n  border-radius:.5rem\n}\n.ProseMirror pre code[data-v-f43c0292]{\n  color:inherit;\n  padding:0;\n  background:none;\n  font-size:.8rem\n}\n.ProseMirror img[data-v-f43c0292]{\n  max-width:100%;\n  height:auto\n}\n.ProseMirror blockquote[data-v-f43c0292]{\n  padding-left:1rem;\n  border-left:2px solid rgba(13,13,13,.1)\n}\n.ProseMirror hr[data-v-f43c0292]{\n  border:none;\n  border-top:2px solid rgba(13,13,13,.1);\n  margin:2rem 0\n}\n.ProseMirror[data-v-f43c0292]:focus-visible{\n  outline:none\n}\n.el-color-picker__trigger[data-v-f43c0292]{\n  border:0!important;\n  padding:0!important;\n  outline:none!important\n}\n.el-color-picker__icon[data-v-f43c0292]{\n  visibility:hidden!important\n}\n.el-color-picker--mini .el-color-picker__trigger[data-v-f43c0292],.el-color-picker__color[data-v-f43c0292]{\n  height:22px!important;\n  width:22px!important\n}\n.el-color-picker__color[data-v-f43c0292]{\n  padding:0!important;\n  border:0!important\n}\n.el-color-picker__empty[data-v-f43c0292]{\n  padding-top:1.4px!important\n}\n.el-color-picker--mini[data-v-f43c0292]{\n  height:22px!important\n}\n.el-color-picker__color-inner[data-v-f43c0292]{\n  border:1px solid #e2e2e2!important\n}\n.el-table thead[data-v-f43c0292]{\n  color:#5c6b7a!important;\n  font-family:\"Cabin\"!important\n}\n.el-table thead[data-v-f43c0292],.th[data-v-f43c0292]{\n  font-weight:600!important\n}\n.el-button--mini[data-v-f43c0292],.el-button--text[data-v-f43c0292],.el-date-range-picker__header div[data-v-f43c0292],.el-date-table td span[data-v-f43c0292],.el-input__inner[data-v-f43c0292],.el-picker-panel__shortcut[data-v-f43c0292],.el-select-dropdown__item[data-v-f43c0292],.el-select-dropdown__item.hover[data-v-f43c0292],.el-select-dropdown__item[data-v-f43c0292]:hover,.el-time-spinner__item[data-v-f43c0292]{\n  font-family:\"Cabin\"!important\n}\n.el-progress-bar__inner[data-v-f43c0292],.el-progress-bar__outer[data-v-f43c0292]{\n  border-bottom-left-radius:100px!important;\n  border-top-left-radius:100px!important\n}\n.el-dropdown .el-dropdown__caret-button[data-v-f43c0292]{\n  bottom:2px!important\n}\n.el-dropdown-menu[data-v-f43c0292],.el-dropdown-menu__item[data-v-f43c0292]{\n  padding:0!important\n}\nbutton[data-v-f43c0292]:active,button[data-v-f43c0292]:focus{\n  outline:0!important\n}\n.el-input-group__append[data-v-f43c0292]{\n  padding:0!important\n}\n.el-input-group__prepend[data-v-f43c0292]{\n  padding-left:5px!important;\n  padding-right:5px!important\n}\n.el-menu-item[data-v-f43c0292],.el-submenu__title[data-v-f43c0292]{\n  height:40px!important;\n  line-height:40px!important;\n  font-family:\"Cabin\"!important;\n  font-size:16px!important;\n  font-style:normal!important;\n  font-weight:400!important;\n  color:#5c6b7a!important;\n  margin-bottom:10px!important;\n  border-left:4px solid transparent!important\n}\n.el-menu-item.is-active[data-v-f43c0292]{\n  color:#1b63d4!important;\n  font-weight:600!important;\n  border-left:4px solid #1b63d4!important;\n  border-top-left-radius:2px!important;\n  border-bottom-left-radius:2px!important\n}\n.el-menu--collapse[data-v-f43c0292]{\n  width:80px!important\n}\n.el-menu[data-v-f43c0292]{\n  border-right:0!important\n}\n.el-dialog__body[data-v-f43c0292],.el-dialog__header[data-v-f43c0292]{\n  padding:0!important\n}\n.el-dialog[data-v-f43c0292]{\n  border-radius:10px!important\n}\n.card-dialog[data-v-f43c0292]{\n  padding:20px!important\n}\n.vue-swatches__trigger[data-v-f43c0292]{\n  width:22px!important;\n  height:22px!important;\n  border-radius:2px!important\n}\n.vue-swatches[data-v-f43c0292]{\n  height:22px!important\n}\n.CodeMirror[data-v-f43c0292]{\n  height:calc(100vh - 150px)!important\n}\n.vue-swatches__trigger[data-v-f43c0292]{\n  border:1px solid #e2e2e2!important\n}\ntextarea[data-v-f43c0292]{\n  resize:none\n}\n[data-v-f43c0292]::-webkit-scrollbar{\n  width:9px;\n  height:18px\n}\n[data-v-f43c0292]::-webkit-scrollbar-thumb{\n  height:6px;\n  border:2px solid transparent;\n  background-clip:padding-box;\n  background-color:#e2e2e2;\n  -webkit-border-radius:7px\n}\n[data-v-f43c0292]::-webkit-scrollbar-button{\n  display:none;\n  width:0;\n  height:0\n}\n[data-v-f43c0292]::-webkit-scrollbar-corner{\n  background-color:transparent\n}\n.form-input .title-btn[data-v-f43c0292]{\n  font-weight:400;\n  font-size:16px;\n  margin-bottom:3px;\n  color:#454545\n}\n.form-input .input-box[data-v-f43c0292]{\n  height:40px;\n  width:100%;\n  resize:none;\n  background:#9a9a9a;\n  border:1px solid #e2e2e2;\n  border-radius:5px;\n  padding:6px 10px 4px;\n  margin-bottom:10px\n}\n.form-input .input-box[data-v-f43c0292]:focus{\n  outline:none!important;\n  background:#fff;\n  border:1.3px solid #1b63d4;\n  box-shadow:0 2px 10px #bbd1f3;\n  border-radius:5px\n}\n.form-input .style-box .title-box[data-v-f43c0292]{\n  font-weight:600;\n  font-size:14px;\n  letter-spacing:.05em;\n  text-transform:uppercase;\n  color:#454545;\n  margin-bottom:8px\n}\n.form-input .style-box .card-font[data-v-f43c0292]{\n  margin-bottom:8px\n}\n.form-input .style-box .card-font .font-family-card[data-v-f43c0292]{\n  width:66%\n}\n.form-input .style-box .card-font .font-size-card[data-v-f43c0292]{\n  width:30%;\n  margin-left:10px\n}\n.form-input .style-box .btn-card[data-v-f43c0292]{\n  height:34px;\n  background:#fff;\n  border:1px solid #e2e2e2;\n  border-radius:5px;\n  cursor:pointer\n}\n.form-input .style-box .btn-card-active[data-v-f43c0292]{\n  background:#1b63d4\n}\n.form-input .style-box .color-container .text-color[data-v-f43c0292]{\n  font-weight:400;\n  font-size:16px;\n  color:#454545;\n  margin-left:5px;\n  width:80px\n}\n.form-input .style-box .color-container .text-color[data-v-f43c0292]:focus{\n  outline:none\n}\n.form-input .style-box .color-container .title-color[data-v-f43c0292]{\n  font-weight:400;\n  font-size:16px;\n  margin-bottom:3px;\n  color:#454545\n}\n.form-input .style-box .color-container .text-area-custom[data-v-f43c0292]{\n  height:100px;\n  background:#fff;\n  border:1px solid #e2e2e2;\n  border-radius:5px;\n  padding-left:10px;\n  padding-right:10px\n}\n.form-input .style-box .color-container .text-area-custom .text-color[data-v-f43c0292]{\n  font-weight:400;\n  font-size:16px;\n  color:#454545;\n  margin-left:5px;\n  width:100%\n}\n.form-input .style-box .color-container .text-area-custom .text-color[data-v-f43c0292]:focus{\n  outline:none\n}\n.form-input .style-box .color-container .text-area-custom .percent-color[data-v-f43c0292]{\n  font-weight:500;\n  font-size:16px;\n  color:#333\n}\n.form-input .style-box .color-container .text-area-custom .percent-color .hr-vertical[data-v-f43c0292]{\n  border:1px solid #e2e2e2;\n  height:15px;\n  margin-right:8px\n}\n.form-input .style-box .color-container .color-card[data-v-f43c0292]{\n  height:40px;\n  background:#fff;\n  border:1px solid #e2e2e2;\n  border-radius:5px;\n  padding-left:10px;\n  padding-right:10px\n}\n.form-input .style-box .color-container .color-card .percent-color[data-v-f43c0292]{\n  font-weight:500;\n  font-size:16px;\n  color:#333\n}\n.form-input .style-box .color-container .color-card .percent-color .hr-vertical[data-v-f43c0292]{\n  border:1px solid #e2e2e2;\n  height:15px;\n  margin-right:8px\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorPallete_vue_vue_type_style_index_0_id_21e8ef1d_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(290);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorPallete_vue_vue_type_style_index_0_id_21e8ef1d_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorPallete_vue_vue_type_style_index_0_id_21e8ef1d_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorPallete_vue_vue_type_style_index_0_id_21e8ef1d_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorPallete_vue_vue_type_style_index_0_id_21e8ef1d_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 362:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(7);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n@font-face{\n  font-family:\"Cabin\";\n\n  src:local(\"Cabin\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\")\n}\n@font-face{\n  font-family:\"Roboto Mono\";\n\n  src:local(\"Roboto Mono\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\")\n}\n.header-1[data-v-21e8ef1d]{\n  font-size:32px\n}\n.header-1[data-v-21e8ef1d],.header-2[data-v-21e8ef1d]{\n  font-family:\"Cabin\";\n  font-weight:600;\n  color:#454545\n}\n.header-2[data-v-21e8ef1d]{\n  font-size:28px\n}\n.header-3[data-v-21e8ef1d]{\n  font-size:24px\n}\n.header-3[data-v-21e8ef1d],.header-4[data-v-21e8ef1d]{\n  font-family:\"Cabin\";\n  font-weight:600;\n  color:#454545\n}\n.header-4[data-v-21e8ef1d]{\n  font-size:20px\n}\n.header-5[data-v-21e8ef1d]{\n  font-size:18px\n}\n.header-5[data-v-21e8ef1d],.header-6[data-v-21e8ef1d]{\n  font-family:\"Cabin\";\n  font-weight:600;\n  color:#454545\n}\n.header-6[data-v-21e8ef1d]{\n  font-size:14px\n}\n.subtitle-1[data-v-21e8ef1d]{\n  color:#757575\n}\n.subtitle-1[data-v-21e8ef1d],.subtitle-2[data-v-21e8ef1d]{\n  font-family:\"Cabin\";\n  font-size:16px;\n  font-weight:400\n}\n.subtitle-2[data-v-21e8ef1d]{\n  color:#454545\n}\n.no-select[data-v-21e8ef1d]{\n  -webkit-touch-callout:none;\n  -webkit-user-select:none;\n  -moz-user-select:none;\n  user-select:none\n}\n.mx-icon-double-left[data-v-21e8ef1d]:after,.mx-icon-double-left[data-v-21e8ef1d]:before,.mx-icon-double-right[data-v-21e8ef1d]:after,.mx-icon-double-right[data-v-21e8ef1d]:before,.mx-icon-left[data-v-21e8ef1d]:before,.mx-icon-right[data-v-21e8ef1d]:before{\n  content:\"\";\n  position:relative;\n  top:-1px;\n  display:inline-block;\n  width:10px;\n  height:10px;\n  vertical-align:middle;\n  border-color:currentcolor;\n  border-style:solid;\n  border-width:2px 0 0 2px;\n  border-radius:1px;\n  box-sizing:border-box;\n  transform-origin:center;\n  transform:rotate(-45deg) scale(.7)\n}\n.mx-icon-double-left[data-v-21e8ef1d]:after{\n  left:-4px\n}\n.mx-icon-double-right[data-v-21e8ef1d]:before{\n  left:4px\n}\n.mx-icon-double-right[data-v-21e8ef1d]:after,.mx-icon-double-right[data-v-21e8ef1d]:before,.mx-icon-right[data-v-21e8ef1d]:before{\n  transform:rotate(135deg) scale(.7)\n}\n.mx-btn[data-v-21e8ef1d]{\n  box-sizing:border-box;\n  line-height:1;\n  font-size:14px;\n  font-weight:500;\n  padding:7px 15px;\n  margin:0;\n  cursor:pointer;\n  background-color:transparent;\n  outline:none;\n  border:1px solid rgba(0,0,0,.1);\n  border-radius:4px;\n  color:#73879c;\n  white-space:nowrap\n}\n.mx-btn[data-v-21e8ef1d]:hover{\n  border-color:#1284e7;\n  color:#1284e7\n}\n.mx-btn.disabled[data-v-21e8ef1d],.mx-btn[data-v-21e8ef1d]:disabled{\n  color:#ccc;\n  cursor:not-allowed\n}\n.mx-btn-text[data-v-21e8ef1d]{\n  border:0;\n  padding:0 4px;\n  text-align:left;\n  line-height:inherit\n}\n.mx-scrollbar[data-v-21e8ef1d]{\n  height:100%\n}\n.mx-scrollbar:hover .mx-scrollbar-track[data-v-21e8ef1d]{\n  opacity:1\n}\n.mx-scrollbar-wrap[data-v-21e8ef1d]{\n  height:100%;\n  overflow-x:hidden;\n  overflow-y:auto\n}\n.mx-scrollbar-track[data-v-21e8ef1d]{\n  position:absolute;\n  top:2px;\n  right:2px;\n  bottom:2px;\n  width:6px;\n  z-index:1;\n  border-radius:4px;\n  opacity:0;\n  transition:opacity .24s ease-out\n}\n.mx-scrollbar-track .mx-scrollbar-thumb[data-v-21e8ef1d]{\n  position:absolute;\n  width:100%;\n  height:0;\n  cursor:pointer;\n  border-radius:inherit;\n  background-color:rgba(144,147,153,.3);\n  transition:background-color .3s\n}\n.mx-zoom-in-down-enter-active[data-v-21e8ef1d],.mx-zoom-in-down-leave-active[data-v-21e8ef1d]{\n  opacity:1;\n  transform:scaleY(1);\n  transition:transform .3s cubic-bezier(.23,1,.32,1),opacity .3s cubic-bezier(.23,1,.32,1);\n  transform-origin:center top\n}\n.mx-zoom-in-down-enter[data-v-21e8ef1d],.mx-zoom-in-down-enter-from[data-v-21e8ef1d],.mx-zoom-in-down-leave-to[data-v-21e8ef1d]{\n  opacity:0;\n  transform:scaleY(0)\n}\n.mx-datepicker[data-v-21e8ef1d]{\n  position:relative;\n  display:inline-block;\n  width:210px\n}\n.mx-datepicker svg[data-v-21e8ef1d]{\n  width:1em;\n  height:1em;\n  vertical-align:-.15em;\n  fill:currentColor;\n  overflow:hidden\n}\n.mx-datepicker-range[data-v-21e8ef1d]{\n  width:320px\n}\n.mx-datepicker-inline[data-v-21e8ef1d]{\n  width:auto\n}\n.mx-input-wrapper[data-v-21e8ef1d]{\n  position:relative\n}\n.mx-input[data-v-21e8ef1d]{\n  display:inline-block;\n  box-sizing:border-box;\n  width:100%;\n  height:34px;\n  padding:6px 30px 6px 10px;\n  font-size:14px;\n  line-height:1.4;\n  color:#555;\n  background-color:#fff;\n  border:1px solid #ccc;\n  border-radius:4px;\n  box-shadow:inset 0 1px 1px rgba(0,0,0,.075)\n}\n.mx-input[data-v-21e8ef1d]:focus,.mx-input[data-v-21e8ef1d]:hover{\n  border-color:#409aff\n}\n.mx-input.disabled[data-v-21e8ef1d],.mx-input[data-v-21e8ef1d]:disabled{\n  color:#ccc;\n  background-color:#f3f3f3;\n  border-color:#ccc;\n  cursor:not-allowed\n}\n.mx-input[data-v-21e8ef1d]:focus{\n  outline:none\n}\n.mx-input[data-v-21e8ef1d]::-ms-clear{\n  display:none\n}\n.mx-icon-calendar[data-v-21e8ef1d],.mx-icon-clear[data-v-21e8ef1d]{\n  position:absolute;\n  top:50%;\n  right:8px;\n  transform:translateY(-50%);\n  font-size:16px;\n  line-height:1;\n  color:rgba(0,0,0,.5);\n  vertical-align:middle\n}\n.mx-icon-clear[data-v-21e8ef1d]{\n  cursor:pointer\n}\n.mx-icon-clear[data-v-21e8ef1d]:hover{\n  color:rgba(0,0,0,.8)\n}\n.mx-datepicker-main[data-v-21e8ef1d]{\n  font:14px/1.5 \"Helvetica Neue\",Helvetica,Arial,\"Microsoft Yahei\",sans-serif;\n  color:#73879c;\n  background-color:#fff;\n  border:1px solid #e8e8e8\n}\n.mx-datepicker-popup[data-v-21e8ef1d]{\n  position:absolute;\n  margin-top:1px;\n  margin-bottom:1px;\n  box-shadow:0 6px 12px rgba(0,0,0,.175);\n  z-index:2001\n}\n.mx-datepicker-sidebar[data-v-21e8ef1d]{\n  float:left;\n  box-sizing:border-box;\n  width:100px;\n  padding:6px;\n  overflow:auto\n}\n.mx-datepicker-sidebar+.mx-datepicker-content[data-v-21e8ef1d]{\n  margin-left:100px;\n  border-left:1px solid #e8e8e8\n}\n.mx-datepicker-body[data-v-21e8ef1d]{\n  position:relative;\n  -webkit-user-select:none;\n     -moz-user-select:none;\n          user-select:none\n}\n.mx-btn-shortcut[data-v-21e8ef1d]{\n  line-height:24px\n}\n.mx-range-wrapper[data-v-21e8ef1d]{\n  display:flex\n}\n@media(max-width:750px){\n.mx-range-wrapper[data-v-21e8ef1d]{\n    flex-direction:column\n}\n}\n.mx-datepicker-header[data-v-21e8ef1d]{\n  padding:6px 8px;\n  border-bottom:1px solid #e8e8e8\n}\n.mx-datepicker-footer[data-v-21e8ef1d]{\n  padding:6px 8px;\n  text-align:right;\n  border-top:1px solid #e8e8e8\n}\n.mx-calendar[data-v-21e8ef1d]{\n  box-sizing:border-box;\n  width:248px;\n  padding:6px 12px\n}\n.mx-calendar+.mx-calendar[data-v-21e8ef1d]{\n  border-left:1px solid #e8e8e8\n}\n.mx-calendar-header[data-v-21e8ef1d],.mx-time-header[data-v-21e8ef1d]{\n  box-sizing:border-box;\n  height:34px;\n  line-height:34px;\n  text-align:center;\n  overflow:hidden\n}\n.mx-btn-icon-double-left[data-v-21e8ef1d],.mx-btn-icon-left[data-v-21e8ef1d]{\n  float:left\n}\n.mx-btn-icon-double-right[data-v-21e8ef1d],.mx-btn-icon-right[data-v-21e8ef1d]{\n  float:right\n}\n.mx-calendar-header-label[data-v-21e8ef1d]{\n  font-size:14px\n}\n.mx-calendar-decade-separator[data-v-21e8ef1d]{\n  margin:0 2px\n}\n.mx-calendar-decade-separator[data-v-21e8ef1d]:after{\n  content:\"~\"\n}\n.mx-calendar-content[data-v-21e8ef1d]{\n  position:relative;\n  height:224px;\n  box-sizing:border-box\n}\n.mx-calendar-content .cell[data-v-21e8ef1d]{\n  cursor:pointer\n}\n.mx-calendar-content .cell[data-v-21e8ef1d]:hover{\n  color:#73879c;\n  background-color:rgb(243.15,248.85,253.8)\n}\n.mx-calendar-content .cell.active[data-v-21e8ef1d]{\n  color:#fff;\n  background-color:#1284e7\n}\n.mx-calendar-content .cell.hover-in-range[data-v-21e8ef1d],.mx-calendar-content .cell.in-range[data-v-21e8ef1d]{\n  color:#73879c;\n  background-color:rgb(219.45,236.55,251.4)\n}\n.mx-calendar-content .cell.disabled[data-v-21e8ef1d]{\n  cursor:not-allowed;\n  color:#ccc;\n  background-color:#f3f3f3\n}\n.mx-calendar-week-mode .mx-date-row[data-v-21e8ef1d]{\n  cursor:pointer\n}\n.mx-calendar-week-mode .mx-date-row[data-v-21e8ef1d]:hover{\n  background-color:rgb(243.15,248.85,253.8)\n}\n.mx-calendar-week-mode .mx-date-row.mx-active-week[data-v-21e8ef1d]{\n  background-color:rgb(219.45,236.55,251.4)\n}\n.mx-calendar-week-mode .mx-date-row .cell.active[data-v-21e8ef1d],.mx-calendar-week-mode .mx-date-row .cell[data-v-21e8ef1d]:hover{\n  color:inherit;\n  background-color:transparent\n}\n.mx-week-number[data-v-21e8ef1d]{\n  opacity:.5\n}\n.mx-table[data-v-21e8ef1d]{\n  table-layout:fixed;\n  border-collapse:separate;\n  border-spacing:0;\n  width:100%;\n  height:100%;\n  box-sizing:border-box;\n  text-align:center\n}\n.mx-table th[data-v-21e8ef1d]{\n  font-weight:500\n}\n.mx-table td[data-v-21e8ef1d],.mx-table th[data-v-21e8ef1d]{\n  padding:0;\n  vertical-align:middle\n}\n.mx-table-date td[data-v-21e8ef1d],.mx-table-date th[data-v-21e8ef1d]{\n  font-size:12px\n}\n.mx-table-date .today[data-v-21e8ef1d]{\n  color:rgb(41.7,144.3,233.4)\n}\n.mx-table-date .cell.not-current-month[data-v-21e8ef1d]{\n  color:#ccc;\n  background:none\n}\n.mx-time[data-v-21e8ef1d]{\n  flex:1;\n  width:224px;\n  background:#fff\n}\n.mx-time+.mx-time[data-v-21e8ef1d]{\n  border-left:1px solid #e8e8e8\n}\n.mx-calendar-time[data-v-21e8ef1d]{\n  position:absolute;\n  top:0;\n  left:0;\n  width:100%;\n  height:100%\n}\n.mx-time-header[data-v-21e8ef1d]{\n  border-bottom:1px solid #e8e8e8\n}\n.mx-time-content[data-v-21e8ef1d]{\n  height:224px;\n  box-sizing:border-box;\n  overflow:hidden\n}\n.mx-time-columns[data-v-21e8ef1d]{\n  display:flex;\n  width:100%;\n  height:100%;\n  overflow:hidden\n}\n.mx-time-column[data-v-21e8ef1d]{\n  flex:1;\n  position:relative;\n  border-left:1px solid #e8e8e8;\n  text-align:center\n}\n.mx-time-column[data-v-21e8ef1d]:first-child{\n  border-left:0\n}\n.mx-time-column .mx-time-list[data-v-21e8ef1d]{\n  margin:0;\n  padding:0;\n  list-style:none\n}\n.mx-time-column .mx-time-list[data-v-21e8ef1d]:after{\n  content:\"\";\n  display:block;\n  height:192px\n}\n.mx-time-column .mx-time-item[data-v-21e8ef1d]{\n  cursor:pointer;\n  font-size:12px;\n  height:32px;\n  line-height:32px\n}\n.mx-time-column .mx-time-item[data-v-21e8ef1d]:hover{\n  color:#73879c;\n  background-color:rgb(243.15,248.85,253.8)\n}\n.mx-time-column .mx-time-item.active[data-v-21e8ef1d]{\n  color:#1284e7;\n  background-color:transparent;\n  font-weight:700\n}\n.mx-time-column .mx-time-item.disabled[data-v-21e8ef1d]{\n  cursor:not-allowed;\n  color:#ccc;\n  background-color:#f3f3f3\n}\n.mx-time-option[data-v-21e8ef1d]{\n  cursor:pointer;\n  padding:8px 10px;\n  font-size:14px;\n  line-height:20px\n}\n.mx-time-option[data-v-21e8ef1d]:hover{\n  color:#73879c;\n  background-color:rgb(243.15,248.85,253.8)\n}\n.mx-time-option.active[data-v-21e8ef1d]{\n  color:#1284e7;\n  background-color:transparent;\n  font-weight:700\n}\n.mx-time-option.disabled[data-v-21e8ef1d]{\n  cursor:not-allowed;\n  color:#ccc;\n  background-color:#f3f3f3\n}\n.el-input .el-input__inner[data-v-21e8ef1d]:focus,.el-range-editor.is-active[data-v-21e8ef1d],.el-range-editor.is-active[data-v-21e8ef1d]:hover,.el-select .el-input.is-focus .el-input__inner[data-v-21e8ef1d],.el-select .el-input__inner[data-v-21e8ef1d]:focus,.el-textarea .el-input__inner[data-v-21e8ef1d]:focus{\n  border:1.3px solid #1b63d4!important;\n  box-shadow:0 2px 10px rgba(187,209,243,.5)\n}\n.mx-input[data-v-21e8ef1d]{\n  height:40px!important\n}\n.mx-datepicker-sidebar[data-v-21e8ef1d]{\n  width:151px!important\n}\n.mx-table-date td[data-v-21e8ef1d],.mx-table-date th[data-v-21e8ef1d]{\n  height:32px;\n  font-size:14px!important\n}\n.mx-btn-shortcut[data-v-21e8ef1d]{\n  display:block;\n  padding:0 6px;\n  line-height:30px!important\n}\n[data-v-21e8ef1d]:root{\n  --vs-line-height:1.6\n}\n.btn-popover[data-v-21e8ef1d]{\n  height:40px;\n  background-color:#fff;\n  width:100%;\n  padding:10px;\n  cursor:pointer\n}\n.btn-popover .title-1[data-v-21e8ef1d]{\n  font-weight:400;\n  font-size:16px;\n  color:#454545;\n  margin-left:10px\n}\n.btn-popover[data-v-21e8ef1d]:hover{\n  background-color:#f3f4f6\n}\n.el-popover[data-v-21e8ef1d]{\n  padding:0!important;\n  border-radius:5px!important\n}\n.el-upload[data-v-21e8ef1d]{\n  width:100%\n}\n.el-upload-dragger[data-v-21e8ef1d]{\n  width:100%!important;\n  background:linear-gradient(0deg,rgba(33,150,243,.03),rgba(33,150,243,.03)),#fff!important;\n  border:1px dashed transparent!important;\n  border-radius:5px!important;\n  height:100%!important\n}\n.kg-popup[data-v-21e8ef1d]{\n  transition:all .5s ease-in-out;\n  position:fixed;\n  top:0;\n  left:50%;\n  transform:translateX(-50%)\n}\n.noselect[data-v-21e8ef1d]{\n  -webkit-touch-callout:none;\n  -webkit-user-select:none;\n  -moz-user-select:none;\n  user-select:none\n}\n.ProseMirror[data-v-21e8ef1d]{\n  border:0;\n  outline:none\n}\n.ProseMirror>*+*[data-v-21e8ef1d]{\n  margin-top:.75em\n}\n.ProseMirror ol[data-v-21e8ef1d],.ProseMirror ul[data-v-21e8ef1d]{\n  padding:0 1rem\n}\n.ProseMirror h1[data-v-21e8ef1d],.ProseMirror h2[data-v-21e8ef1d],.ProseMirror h3[data-v-21e8ef1d],.ProseMirror h4[data-v-21e8ef1d],.ProseMirror h5[data-v-21e8ef1d],.ProseMirror h6[data-v-21e8ef1d]{\n  line-height:1.1\n}\n.ProseMirror code[data-v-21e8ef1d]{\n  background-color:rgba(97,97,97,.1);\n  color:#616161\n}\n.ProseMirror pre[data-v-21e8ef1d]{\n  background:#0d0d0d;\n  color:#fff;\n  font-family:\"JetBrainsMono\",monospace;\n  padding:.75rem 1rem;\n  border-radius:.5rem\n}\n.ProseMirror pre code[data-v-21e8ef1d]{\n  color:inherit;\n  padding:0;\n  background:none;\n  font-size:.8rem\n}\n.ProseMirror img[data-v-21e8ef1d]{\n  max-width:100%;\n  height:auto\n}\n.ProseMirror blockquote[data-v-21e8ef1d]{\n  padding-left:1rem;\n  border-left:2px solid rgba(13,13,13,.1)\n}\n.ProseMirror hr[data-v-21e8ef1d]{\n  border:none;\n  border-top:2px solid rgba(13,13,13,.1);\n  margin:2rem 0\n}\n.ProseMirror[data-v-21e8ef1d]:focus-visible{\n  outline:none\n}\n.el-color-picker__trigger[data-v-21e8ef1d]{\n  border:0!important;\n  padding:0!important;\n  outline:none!important\n}\n.el-color-picker__icon[data-v-21e8ef1d]{\n  visibility:hidden!important\n}\n.el-color-picker--mini .el-color-picker__trigger[data-v-21e8ef1d],.el-color-picker__color[data-v-21e8ef1d]{\n  height:22px!important;\n  width:22px!important\n}\n.el-color-picker__color[data-v-21e8ef1d]{\n  padding:0!important;\n  border:0!important\n}\n.el-color-picker__empty[data-v-21e8ef1d]{\n  padding-top:1.4px!important\n}\n.el-color-picker--mini[data-v-21e8ef1d]{\n  height:22px!important\n}\n.el-color-picker__color-inner[data-v-21e8ef1d]{\n  border:1px solid #e2e2e2!important\n}\n.el-table thead[data-v-21e8ef1d]{\n  color:#5c6b7a!important;\n  font-family:\"Cabin\"!important\n}\n.el-table thead[data-v-21e8ef1d],.th[data-v-21e8ef1d]{\n  font-weight:600!important\n}\n.el-button--mini[data-v-21e8ef1d],.el-button--text[data-v-21e8ef1d],.el-date-range-picker__header div[data-v-21e8ef1d],.el-date-table td span[data-v-21e8ef1d],.el-input__inner[data-v-21e8ef1d],.el-picker-panel__shortcut[data-v-21e8ef1d],.el-select-dropdown__item[data-v-21e8ef1d],.el-select-dropdown__item.hover[data-v-21e8ef1d],.el-select-dropdown__item[data-v-21e8ef1d]:hover,.el-time-spinner__item[data-v-21e8ef1d]{\n  font-family:\"Cabin\"!important\n}\n.el-progress-bar__inner[data-v-21e8ef1d],.el-progress-bar__outer[data-v-21e8ef1d]{\n  border-bottom-left-radius:100px!important;\n  border-top-left-radius:100px!important\n}\n.el-dropdown .el-dropdown__caret-button[data-v-21e8ef1d]{\n  bottom:2px!important\n}\n.el-dropdown-menu[data-v-21e8ef1d],.el-dropdown-menu__item[data-v-21e8ef1d]{\n  padding:0!important\n}\nbutton[data-v-21e8ef1d]:active,button[data-v-21e8ef1d]:focus{\n  outline:0!important\n}\n.el-input-group__append[data-v-21e8ef1d]{\n  padding:0!important\n}\n.el-input-group__prepend[data-v-21e8ef1d]{\n  padding-left:5px!important;\n  padding-right:5px!important\n}\n.el-menu-item[data-v-21e8ef1d],.el-submenu__title[data-v-21e8ef1d]{\n  height:40px!important;\n  line-height:40px!important;\n  font-family:\"Cabin\"!important;\n  font-size:16px!important;\n  font-style:normal!important;\n  font-weight:400!important;\n  color:#5c6b7a!important;\n  margin-bottom:10px!important;\n  border-left:4px solid transparent!important\n}\n.el-menu-item.is-active[data-v-21e8ef1d]{\n  color:#1b63d4!important;\n  font-weight:600!important;\n  border-left:4px solid #1b63d4!important;\n  border-top-left-radius:2px!important;\n  border-bottom-left-radius:2px!important\n}\n.el-menu--collapse[data-v-21e8ef1d]{\n  width:80px!important\n}\n.el-menu[data-v-21e8ef1d]{\n  border-right:0!important\n}\n.el-dialog__body[data-v-21e8ef1d],.el-dialog__header[data-v-21e8ef1d]{\n  padding:0!important\n}\n.el-dialog[data-v-21e8ef1d]{\n  border-radius:10px!important\n}\n.card-dialog[data-v-21e8ef1d]{\n  padding:20px!important\n}\n.vue-swatches__trigger[data-v-21e8ef1d]{\n  width:22px!important;\n  height:22px!important;\n  border-radius:2px!important\n}\n.vue-swatches[data-v-21e8ef1d]{\n  height:22px!important\n}\n.CodeMirror[data-v-21e8ef1d]{\n  height:calc(100vh - 150px)!important\n}\n.vue-swatches__trigger[data-v-21e8ef1d]{\n  border:1px solid #e2e2e2!important\n}\ntextarea[data-v-21e8ef1d]{\n  resize:none\n}\n[data-v-21e8ef1d]::-webkit-scrollbar{\n  width:9px;\n  height:18px\n}\n[data-v-21e8ef1d]::-webkit-scrollbar-thumb{\n  height:6px;\n  border:2px solid transparent;\n  background-clip:padding-box;\n  background-color:#e2e2e2;\n  -webkit-border-radius:7px\n}\n[data-v-21e8ef1d]::-webkit-scrollbar-button{\n  display:none;\n  width:0;\n  height:0\n}\n[data-v-21e8ef1d]::-webkit-scrollbar-corner{\n  background-color:transparent\n}\n.form-input .title-btn[data-v-21e8ef1d]{\n  font-weight:400;\n  font-size:16px;\n  margin-bottom:3px;\n  color:#454545\n}\n.form-input .input-box[data-v-21e8ef1d]{\n  height:40px;\n  width:100%;\n  resize:none;\n  background:#9a9a9a;\n  border:1px solid #e2e2e2;\n  border-radius:5px;\n  padding:6px 10px 4px;\n  margin-bottom:10px\n}\n.form-input .input-box[data-v-21e8ef1d]:focus{\n  outline:none!important;\n  background:#fff;\n  border:1.3px solid #1b63d4;\n  box-shadow:0 2px 10px #bbd1f3;\n  border-radius:5px\n}\n.form-input .style-box .title-box[data-v-21e8ef1d]{\n  font-weight:600;\n  font-size:14px;\n  letter-spacing:.05em;\n  text-transform:uppercase;\n  color:#454545;\n  margin-bottom:8px\n}\n.form-input .style-box .card-font[data-v-21e8ef1d]{\n  margin-bottom:8px\n}\n.form-input .style-box .card-font .font-family-card[data-v-21e8ef1d]{\n  width:66%\n}\n.form-input .style-box .card-font .font-size-card[data-v-21e8ef1d]{\n  width:30%;\n  margin-left:10px\n}\n.form-input .style-box .btn-card[data-v-21e8ef1d]{\n  height:34px;\n  background:#fff;\n  border:1px solid #e2e2e2;\n  border-radius:5px;\n  cursor:pointer\n}\n.form-input .style-box .btn-card-active[data-v-21e8ef1d]{\n  background:#1b63d4\n}\n.form-input .style-box .color-container .text-color[data-v-21e8ef1d]{\n  font-weight:400;\n  font-size:16px;\n  color:#454545;\n  margin-left:5px;\n  width:80px\n}\n.form-input .style-box .color-container .text-color[data-v-21e8ef1d]:focus{\n  outline:none\n}\n.form-input .style-box .color-container .title-color[data-v-21e8ef1d]{\n  font-weight:400;\n  font-size:16px;\n  margin-bottom:3px;\n  color:#454545\n}\n.form-input .style-box .color-container .text-area-custom[data-v-21e8ef1d]{\n  height:100px;\n  background:#fff;\n  border:1px solid #e2e2e2;\n  border-radius:5px;\n  padding-left:10px;\n  padding-right:10px\n}\n.form-input .style-box .color-container .text-area-custom .text-color[data-v-21e8ef1d]{\n  font-weight:400;\n  font-size:16px;\n  color:#454545;\n  margin-left:5px;\n  width:100%\n}\n.form-input .style-box .color-container .text-area-custom .text-color[data-v-21e8ef1d]:focus{\n  outline:none\n}\n.form-input .style-box .color-container .text-area-custom .percent-color[data-v-21e8ef1d]{\n  font-weight:500;\n  font-size:16px;\n  color:#333\n}\n.form-input .style-box .color-container .text-area-custom .percent-color .hr-vertical[data-v-21e8ef1d]{\n  border:1px solid #e2e2e2;\n  height:15px;\n  margin-right:8px\n}\n.form-input .style-box .color-container .color-card[data-v-21e8ef1d]{\n  height:40px;\n  background:#fff;\n  border:1px solid #e2e2e2;\n  border-radius:5px;\n  padding-left:10px;\n  padding-right:10px\n}\n.form-input .style-box .color-container .color-card .percent-color[data-v-21e8ef1d]{\n  font-weight:500;\n  font-size:16px;\n  color:#333\n}\n.form-input .style-box .color-container .color-card .percent-color .hr-vertical[data-v-21e8ef1d]{\n  border:1px solid #e2e2e2;\n  height:15px;\n  margin-right:8px\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/form/edit/Audio.vue?vue&type=template&id=4f6001c2&scoped=true
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return !_vm.isLoading ? _c('div', {
    staticClass: "option-card"
  }, [_vm._ssrNode(_vm._ssrList(_vm.dataAudio, function (item, index) {
    return "<div class=\"cursor-pointer no-select list-card flex items-center justify-between\" data-v-4f6001c2><div class=\"flex items-center justify-start\" style=\"width: 80%\" data-v-4f6001c2><div class=\"circle flex items-center justify-center\"" + _vm._ssrStyle(null, item.status ? 'border: 1px solid #1B63D4;' : '', null) + " data-v-4f6001c2>" + (item.status ? "<div class=\"circle-active\" data-v-4f6001c2></div>" : "<!---->") + "</div> <div class=\"title-option\" data-v-4f6001c2>" + _vm._ssrEscape("\n        " + _vm._s(item.name) + "\n        ") + "<div class=\"mood\" data-v-4f6001c2>" + _vm._ssrEscape("\n          " + _vm._s(item.mood.join(', ')) + "\n        ") + "</div></div></div> <audio" + _vm._ssrAttr("id", 'yourAudio' + index) + " data-v-4f6001c2><source" + _vm._ssrAttr("src", item.fileUrl) + " type=\"audio/mpeg\" data-v-4f6001c2></audio> " + (index !== 0 ? "<div data-v-4f6001c2><img" + _vm._ssrAttr("id", 'audioControl' + index) + " src=\"https://dev-space.unimind.id/icon/play_v1.png\" style=\"height: 15px; margin-right: 5px\" data-v-4f6001c2></div>" : "<div data-v-4f6001c2><img" + _vm._ssrAttr("id", 'audioControl' + index) + " src style=\"height: 15px; margin-right: 5px\" data-v-4f6001c2></div>") + "</div>";
  }))]) : _vm._e();
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/form/edit/Audio.vue?vue&type=template&id=4f6001c2&scoped=true

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/form/edit/Audio.vue?vue&type=script&lang=js

/* harmony default export */ var Audiovue_type_script_lang_js = ({
  name: 'FormEditAudio',
  props: {
    titleForm: {
      default: '',
      type: String
    },
    mood: {
      default: '',
      type: String
    }
  },

  data() {
    return {
      dataAudio: {},
      defaultData: {},
      selectedAudio: {},
      isLoading: false
    };
  },

  computed: { ...Object(external_vuex_["mapState"])({
      dataForm: state => {
        return state.creative.dataForm;
      }
    }),

    currentValue() {
      const data = this.dataForm.find(item => item.title === this.titleForm).default; // data.forEach((item, index) => {
      //   item.url = 'https://unimind.jixie.media/' + item.url
      // })

      return data;
    }

  },

  mounted() {
    this.getDetail();
  },

  methods: {
    async getAudio() {
      await this.$axios.get('audio?mood=' + this.mood).then(res => {
        this.dataAudio = res.data.data;
        this.dataAudio.forEach((item, index) => {
          this.$set(item, 'status', false);
        });
        const index = this.dataAudio.findIndex(x => x.name === this.currentValue.name);
        this.dataAudio[index].status = true;
        this.selectedAudio = {
          fileUrl: this.dataAudio[index].fileUrl,
          name: this.dataAudio[index].name
        };
        this.$emit('changeAudio', this.selectedAudio);
      }).catch(error => {
        this.$notifier.showMessage({
          content: 'Get Audio failed. Please try again ! ' + error,
          type: 'failed'
        });
      });
    },

    togglePlay(index, type = '') {
      const yourAudio = document.getElementById('yourAudio' + index);
      const ctrl = document.getElementById('audioControl' + index);

      if (type === '' && index !== 0) {
        const pause = ctrl.src === 'https://dev-space.unimind.id/icon/pause_v1.png';
        ctrl.src = pause ? 'https://dev-space.unimind.id/icon/play_v1.png' : 'https://dev-space.unimind.id/icon/pause_v1.png';
        const method = pause ? 'pause' : 'play';
        yourAudio[method]();
      } else if (type === 'play') {
        ctrl.src = 'https://dev-space.unimind.id/icon/pause_v1.png';
        yourAudio.pause();
        setTimeout(() => {
          yourAudio.currentTime = 0;
          yourAudio.play();
        }, 500);
      }

      this.dataAudio.forEach((item, indexData) => {
        if (indexData !== index) {
          this.$set(item, 'status', false);
          const yourAudio = document.getElementById('yourAudio' + indexData);
          const ctrl = document.getElementById('audioControl' + indexData);

          if (indexData === 0) {
            ctrl.src = '';
          } else {
            ctrl.src = 'https://dev-space.unimind.id/icon/play_v1.png';
          }

          const method = 'pause';
          yourAudio[method]();
        } else {
          this.$set(item, 'status', true);
          this.selectedAudio = {
            fileUrl: item.fileUrl,
            name: item.name
          };
          this.$emit('changeAudio', this.selectedAudio);
        }
      });
    },

    changeStatus(data, indexData) {
      this.dataAudio.forEach((item, index) => {
        if (index === indexData) {
          this.$set(item, 'status', true);
          this.selectedAudio = {
            fileUrl: item.fileUrl,
            name: item.name
          };
          this.$emit('changeAudio', this.selectedAudio);
          this.togglePlay(indexData);
        } else {
          this.$set(item, 'status', false);
          this.togglePlay(indexData);
        }
      });
    },

    getDetail() {
      const data = {
        id: this.$route.params.edit
      };
      this.isLoading = true;
      this.$store.dispatch('creative/getDetail', data).then(res => {
        this.getAudio();
        this.isLoading = false;
      }).catch(() => {});
    },

    callAudio() {
      const activeAudio = this.dataAudio.find(item => item.status);
      const activeAudioIndex = this.dataAudio.indexOf(activeAudio);
      this.togglePlay(activeAudioIndex, 'play');
    }

  }
});
// CONCATENATED MODULE: ./components/form/edit/Audio.vue?vue&type=script&lang=js
 /* harmony default export */ var edit_Audiovue_type_script_lang_js = (Audiovue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/form/edit/Audio.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(343)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  edit_Audiovue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4f6001c2",
  "8d892f7a"
  
)

/* harmony default export */ var Audio = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/form/edit/CustomSound.vue?vue&type=template&id=477e18a9&scoped=true
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticStyle: {
      "position": "relative"
    }
  }, [_vm.audioUrl ? _vm._ssrNode("<div class=\"option-card\" data-v-477e18a9>", "</div>", [_vm._ssrNode("<div drag action" + _vm._ssrAttr("on-change", _vm.handleChange) + _vm._ssrAttr("auto-upload", false) + _vm._ssrAttr("show-file-list", false) + " class=\"upload-demo cursor-pointer no-select list-card flex items-center justify-between\" data-v-477e18a9>", "</div>", [_vm._ssrNode("<div class=\"flex items-center justify-start\" style=\"width: 80%\" data-v-477e18a9>", "</div>", [_vm._ssrNode("<div class=\"flex items-center justify-center\" data-v-477e18a9>", "</div>", [_c('IconClose', {
    staticClass: "flex items-center justify-center"
  })], 1), _vm._ssrNode(" <div class=\"mr-2 title-option\" data-v-477e18a9>" + _vm._ssrEscape("\n          " + _vm._s(_vm.audioTitle) + "\n        ") + "</div>")], 2), _vm._ssrNode(" <audio id=\"yourAudio\" data-v-477e18a9><source" + _vm._ssrAttr("src", _vm.audioUrl) + " type=\"audio/mpeg\" data-v-477e18a9></audio> <img id=\"audioControl\" src=\"https://dev-space.unimind.id/icon/play_v1.png\" style=\"height: 15px; margin-right: 5px\" data-v-477e18a9>")], 2)]) : _vm._e(), _vm._ssrNode(" "), !_vm.audioUrl ? _vm._ssrNode("<span data-v-477e18a9>", "</span>", [_c('el-upload', {
    staticClass: "upload-demo",
    attrs: {
      "drag": "",
      "action": "",
      "on-change": _vm.handleChange,
      "auto-upload": false,
      "show-file-list": false,
      "before-upload": _vm.beforeAudioUpload
    }
  }, [_c('div', {
    staticClass: "flex flex-col upload-card pt-4 pb-4 pr-2"
  }, [_c('div', {
    staticClass: "flex items-center"
  }, [_c('div', {
    staticClass: "mr-2 icon-upload"
  }, [_c('iconCustomSound')], 1), _vm._v(" "), _c('div', {
    staticClass: "flex flex-col"
  }, [_c('div', {
    staticClass: "empty-space"
  }, [_vm._v("\n              Upload Sound Here\n            ")]), _vm._v(" "), _c('div', {
    staticClass: "upload-name"
  }, [_vm._v("\n              Supported format:"), _c('br'), _vm._v(".mp3, .wav\n            ")])])]), _vm._v(" "), _c('button', {
    staticClass: "flex items-center justify-center btn-upload no-select",
    attrs: {
      "disabled": _vm.audioLoaded
    }
  }, [_c('IconUpload'), _vm._v(" "), _c('span', {
    staticClass: "name-btn"
  }, [_vm._v(_vm._s(_vm.audioLoaded ? 'Uploading...' : 'Upload File'))])], 1)])])], 1) : _vm._e()], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/form/edit/CustomSound.vue?vue&type=template&id=477e18a9&scoped=true

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/form/edit/CustomSound.vue?vue&type=script&lang=js

/* harmony default export */ var CustomSoundvue_type_script_lang_js = ({
  name: 'FormEditCustomSound',
  props: {
    titleAudio: {
      default: '',
      type: String
    },
    dataAudio: {
      default: '',
      type: String
    }
  },

  data() {
    return {
      audioUrl: '',
      audioData: '',
      audioLoaded: false,
      audioTitle: ''
    };
  },

  computed: { ...Object(external_vuex_["mapState"])({
      dataForm: state => {
        return state.creative.dataForm;
      }
    })
  },

  mounted() {
    this.getData();
  },

  methods: {
    togglePlay(type = '') {
      const audio = document.getElementById('yourAudio');
      const audioControl = document.getElementById('audioControl');

      if (audio !== null) {
        if (audio.paused || type === 'play') {
          audio.currentTime = 0;
          audio.play();
          audioControl.src = 'https://dev-space.unimind.id/icon/pause_v1.png';
        } else {
          audio.pause();
          audioControl.src = 'https://dev-space.unimind.id/icon/play_v1.png';
        }
      }
    },

    deleteAudio() {
      this.audioUrl = '';
      this.audioLoaded = false;
      const data = {
        title: this.titleAudio,
        type: 'Custom_audio',
        src: null
      };
      this.$emit('reloadback', data);
    },

    beforeAudioUpload(file) {
      const isAudio = file.type === 'audio/mpeg';
      const isLt10M = file.size / 1024 / 1024 < 10;

      if (!isAudio) {
        this.$notifier.showMessage({
          content: 'Audio must be mp3 or wav format!',
          type: 'failed'
        });
      }

      if (!isLt10M) {
        this.$notifier.showMessage({
          content: 'Audio size can not exceed 10MB!',
          type: 'failed'
        });
      }

      return isAudio && isLt10M;
    },

    handleChange(file) {
      const formatData = file.raw.type;

      if (formatData === 'audio/mpeg') {
        if (file.size / 1024 / 1024 > 10) {
          this.$notifier.showMessage({
            content: 'File size cannot exceed 10MB!',
            type: 'failed'
          });
        } else {
          this.audioData = file;
          this.audioLoaded = true;
          this.uploadFile();
        }
      } else {
        this.$notifier.showMessage({
          content: 'Audio must be wav or mp3 format',
          type: 'failed'
        });
      }
    },

    async uploadFile() {
      const data = new FormData();
      data.append('file', this.audioData.raw);
      await this.$axios.post('audio/upload', data, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => {
        const fileKey = res.data.data.fileKey;
        this.audioUrl = fileKey;
        this.audioTitle = res.data.data.fileName;
        const indexForm = this.dataForm.findIndex(x => x.title === this.titleAudio);
        const data = {
          title: this.titleAudio,
          type: 'Custom_audio',
          src: fileKey
        };
        this.$store.commit('creative/SET_DATA_FORM', data);
        this.$emit('reloadback', data);
        this.audioLoaded = false;
      }).catch(error => {
        this.$notifier.showMessage({
          content: 'Upload failed. Please try again ! ' + error,
          type: 'failed'
        });
        this.audioUpload = false;
      });
    },

    getData() {
      this.defaultCustomSound = this.dataForm.find(item => item.title === this.titleAudio);

      if (this.defaultCustomSound.default === null) {
        this.audioUrl = '';
        this.audioTitle = '';
      } else {
        this.audioUrl = this.defaultCustomSound.default;
        this.audioTitle = this.audioUrl.substring(this.audioUrl.lastIndexOf('/') + 1);
      }
    }

  }
});
// CONCATENATED MODULE: ./components/form/edit/CustomSound.vue?vue&type=script&lang=js
 /* harmony default export */ var edit_CustomSoundvue_type_script_lang_js = (CustomSoundvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/form/edit/CustomSound.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(345)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  edit_CustomSoundvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "477e18a9",
  "7c7680cb"
  
)

/* harmony default export */ var CustomSound = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {IconClose: __webpack_require__(46).default,IconUpload: __webpack_require__(126).default})


/***/ }),

/***/ 386:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(465);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("6096f10e", content, true, context)
};

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/form/edit/TextOnly.vue?vue&type=template&id=f6508f98&scoped=true
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "form-input"
  }, [_vm._ssrNode("<div class=\"style-box\" data-v-f6508f98><div class=\"grid grid-cols-1 gap-2\" data-v-f6508f98><div class=\"flex flex-col color-container\" data-v-f6508f98><div class=\"color-card flex items-center justify-between\"" + _vm._ssrStyle(null, 'height:' + _vm.lineHeight2 + 'px', null) + " data-v-f6508f98>" + (_vm.titleForm == 'Body Text' ? "<div class=\"textarea-with-counter\" data-v-f6508f98><textarea" + _vm._ssrAttr("rows", _vm.lineHeight) + _vm._ssrAttr("maxlength", _vm.maxLength) + " class=\"text-color\" data-v-f6508f98>" + _vm._ssrEscape(_vm._s(_vm.data)) + "</textarea> <div class=\"char-counter\" data-v-f6508f98>" + _vm._ssrEscape("\n              " + _vm._s(_vm.charCount) + "/" + _vm._s(_vm.maxLength) + "\n            ") + "</div></div>" : "<div data-v-f6508f98><textarea" + _vm._ssrAttr("rows", _vm.lineHeight) + " class=\"text-color\" data-v-f6508f98>" + _vm._ssrEscape(_vm._s(_vm.data)) + "</textarea></div>") + "</div></div></div></div>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/form/edit/TextOnly.vue?vue&type=template&id=f6508f98&scoped=true

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/form/edit/TextOnly.vue?vue&type=script&lang=js

/* harmony default export */ var TextOnlyvue_type_script_lang_js = ({
  props: {
    titleForm: {
      default: '',
      type: String
    }
  },

  data() {
    return {
      data: '',
      defaultData: {},
      lineHeight: 3,
      lineHeight2: '100',
      charCount: 0,
      maxLength: 2000
    };
  },

  computed: { ...Object(external_vuex_["mapState"])({
      dataForm: state => {
        return state.creative.dataForm;
      }
    })
  },

  mounted() {
    console.log('ini', this.titleForm);
    this.getDetail();
  },

  methods: {
    changeData() {
      if (this.titleForm === 'Body Text') {
        this.charCount = this.data.length;
      }

      const data = {
        title: this.titleForm,
        src: this.data,
        type: 'TextOnly'
      };
      this.$emit('changeText', data);
    },

    getDetail() {
      // const data = {
      //   id: this.$route.params.edit
      // }
      // this.$store
      //   .dispatch('creative/getDetail', data)
      //   .then((res) => {
      this.defaultData = this.dataForm.find(item => item.title === this.titleForm);

      if (this.defaultData.lineHeight !== undefined) {
        this.lineHeight = Math.ceil(parseFloat(this.defaultData.lineHeight) / 24);
        this.lineHeight2 = this.defaultData.lineHeight + 40;
      }

      this.data = this.defaultData.default;
      this.changeData(); //     })
      //     .catch(() => {
      //     })
    } // getTemplateDetail () {
    //   this.$store
    //     .dispatch('template/getDetail', {
    //       id: this.$route.params.index,
    //       resolution: this.selectedResolution
    //     })
    //     .then((res) => {
    //       this.defaultData = this.dataForm.find(
    //         item => item.title === this.titleForm
    //       )
    //       this.data = this.defaultData.default
    //       this.changeData()
    //     })
    //     .catch(() => {
    //     })
    // }


  }
});
// CONCATENATED MODULE: ./components/form/edit/TextOnly.vue?vue&type=script&lang=js
 /* harmony default export */ var edit_TextOnlyvue_type_script_lang_js = (TextOnlyvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/form/edit/TextOnly.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(347)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  edit_TextOnlyvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "f6508f98",
  "e554b0c8"
  
)

/* harmony default export */ var TextOnly = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/form/edit/ImageArray.vue?vue&type=template&id=350ca3a7&scoped=true
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', [_c('Container', {
    staticClass: "mt-1",
    attrs: {
      "get-ghost-parent": _vm.getGhostParent,
      "drag-handle-selector": ".column-drag-handle"
    },
    on: {
      "drop": _vm.onDrop
    }
  }, _vm._l(_vm.dataImageArrayRaw, function (item, index) {
    return _c('Draggable', {
      key: index
    }, [_c('div', {
      staticClass: "selected-image flex items-center no-select"
    }, [_c('div', {
      staticClass: "flex items-center justify-center no-select btn-drag column-drag-handle"
    }, [_c('IconDrag', {
      staticClass: "icon-drag"
    })], 1), _vm._v(" "), _c('img', {
      staticClass: "image-drag",
      attrs: {
        "src": item.img
      }
    }), _vm._v(" "), _c('button', {
      staticClass: "flex items-center justify-center btn-change no-select",
      on: {
        "click": function ($event) {
          return _vm.cropImage(index);
        }
      }
    }, [_c('IconCrop', {
      staticClass: "icon-item"
    }), _vm._v(" "), _c('span', {
      staticClass: "name-btn"
    }, [_vm._v("Edit")])], 1), _vm._v(" "), _c('button', {
      staticClass: "flex btn-icon2 items-center justify-center no-select",
      on: {
        "click": function ($event) {
          return _vm.removeList(index);
        }
      }
    }, [_c('IconDelete', {
      staticStyle: {
        "height": "16px",
        "width": "15px",
        "margin-top": "1px"
      }
    })], 1)])]);
  }), 1)], 1);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/form/edit/ImageArray.vue?vue&type=template&id=350ca3a7&scoped=true

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// EXTERNAL MODULE: external "vue-smooth-dnd"
var external_vue_smooth_dnd_ = __webpack_require__(121);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/form/edit/ImageArray.vue?vue&type=script&lang=js



const applyDrag = (arr, dragResult) => {
  const {
    removedIndex,
    addedIndex,
    payload
  } = dragResult;

  if (removedIndex === null && addedIndex === null) {
    return arr;
  }

  const result = [...arr];
  let itemToAdd = payload;

  if (removedIndex !== null) {
    itemToAdd = result.splice(removedIndex, 1)[0];
  }

  if (addedIndex !== null) {
    result.splice(addedIndex, 0, itemToAdd);
  }

  return result;
};

/* harmony default export */ var ImageArrayvue_type_script_lang_js = ({
  name: 'CreateCreativePage',
  layout: 'login',
  components: {
    Container: external_vue_smooth_dnd_["Container"],
    Draggable: external_vue_smooth_dnd_["Draggable"]
  },
  props: {
    titleImage: {
      default: '',
      type: String
    },
    dataImage: {
      default: '',
      type: String
    }
  },

  data() {
    return {
      indexImage: null,
      defaultImage: '',
      defaultImage2: '',
      imageLoaded: false,
      isLoading: false,
      showPanel: true,
      show1: false,
      show2: false,
      name: '',
      resolutionId: 7,
      url: 'https://',
      imageData: [],
      imageUrl: '',
      imageName: '',
      imageFormat: '',
      imageSize: '',
      resolution: {
        width: '',
        height: ''
      },
      image: {
        width: 0,
        height: 0
      },
      editor: null,
      value: '',
      imgBase64: '',
      itemFilter: ['All', 'Media', 'Text', 'Shape', 'URL', 'Button'],
      activeItem: 'All',
      indexList: 0,
      totalImage: 0,
      indexForm: 0
    };
  },

  computed: { ...Object(external_vuex_["mapState"])({
      dataForm: state => {
        return state.creative.dataForm;
      },
      dataImageArrayRaw: state => {
        return state.creative.dataImageArrayRaw;
      },
      dataImageArrayRaw2: state => {
        return state.creative.dataImageArrayRaw2;
      }
    })
  },

  mounted() {
    this.imageUrl = this.dataImage;
    this.getTemplateDetail();
  },

  methods: {
    getTemplateDetail() {
      this.isLoading = true; // this.$store
      //   .dispatch('creative/getDetail', {
      //     id: this.$route.params.edit
      //   })
      //   .then(() => {

      this.indexForm = this.dataForm.findIndex(x => x.title === this.titleImage);
      this.defaultImage = this.dataForm.find(item => item.title === this.titleImage);
      this.defaultImage2 = this.defaultImage.default.split(',');
      this.totalImage = this.defaultImage.maxCount;
      this.$store.commit('creative/SET_DATA_IMAGEARRAY', this.defaultImage);
      this.$store.commit('creative/SET_DATA_IMAGEARRAY2', this.defaultImage);
      const data = {
        index: this.indexForm,
        title: this.titleImage,
        type: 'ImageArray',
        src: this.dataImageArrayRaw2
      };
      this.$emit('reloadback', data);
      this.isLoading = false; // })
      // .catch(() => {
      //   this.isLoading = false
      // })
    },

    onDrop(dropResult) {
      this.defaultImage2 = applyDrag(this.defaultImage2, dropResult);
      const data = applyDrag(this.dataImageArrayRaw, dropResult);
      this.$store.commit('creative/SET_DRAG_IMAGEARRAY', data);
      const data2 = applyDrag(this.dataImageArrayRaw2, dropResult);
      this.$store.commit('creative/SET_DRAG_IMAGEARRAY2', data2);
      const dataIframe = {
        index: this.indexForm,
        title: this.titleImage,
        type: 'ImageArray',
        src: data2
      };
      this.$emit('reloadback', dataIframe);
    },

    removeList(index) {
      // if (this.dataImageArrayRaw[index].file !== null) {
      const data = {
        index,
        src: 'blank.png'
      };
      const dataarray2 = {
        index,
        src: 'https://unimind.jixie.media/blank.png'
      };
      this.$store.commit('creative/SET_REMOVE_IMAGEARRAY', data);
      this.$store.commit('creative/SET_REMOVE_IMAGEARRAY2', dataarray2); // const sendData = []
      // for (let i = 0; i < this.dataImageArrayRaw.length; i++) {
      //   sendData.push(this.dataImageArrayRaw[i].img)
      // }

      const data2 = {
        index: this.indexForm,
        title: this.titleImage,
        type: 'ImageArray',
        src: this.dataImageArrayRaw2
      };
      this.$emit('reloadback', data2); // }
      // this.$store.commit('user/SET_DROPDOWN', null)
    },

    cropImage(index) {
      const indexForm = this.dataForm.findIndex(x => x.title === this.titleImage);
      let imageCrop = '';

      if (this.dataImageArrayRaw2[index].includes('fileKey')) {
        imageCrop = this.dataImageArrayRaw2[index];
      } else {
        imageCrop = this.dataImageArrayRaw2[index] + '?v1=' + Date.now();
      }

      const data = {
        indexRawImage: index,
        indexForm,
        title: this.titleImage,
        type: 'ImageArray',
        img: imageCrop,
        dialog: true,
        height: this.dataForm[indexForm].height,
        width: this.dataForm[indexForm].width
      };
      this.$emit('openEditor', data);
    },

    getGhostParent() {
      return document.body;
    }

  }
});
// CONCATENATED MODULE: ./components/form/edit/ImageArray.vue?vue&type=script&lang=js
 /* harmony default export */ var edit_ImageArrayvue_type_script_lang_js = (ImageArrayvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/form/edit/ImageArray.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(351)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  edit_ImageArrayvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "350ca3a7",
  "4fdce5a1"
  
)

/* harmony default export */ var ImageArray = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {IconDrag: __webpack_require__(192).default,IconCrop: __webpack_require__(141).default,IconDelete: __webpack_require__(129).default})


/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/form/edit/Color.vue?vue&type=template&id=419cbe23&scoped=true
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "form-input"
  }, [_vm._ssrNode("<div class=\"style-box\" data-v-419cbe23>", "</div>", [_vm._ssrNode("<div class=\"grid grid-cols-2 gap-2\" data-v-419cbe23>", "</div>", [_vm._ssrNode("<div class=\"flex flex-col color-container\" data-v-419cbe23>", "</div>", [_vm._ssrNode("<div class=\"title-color\" data-v-419cbe23>\n          Color\n        </div> "), _vm._ssrNode("<div class=\"color-card flex items-center\" data-v-419cbe23>", "</div>", [_c('el-color-picker', {
    attrs: {
      "predefine": _vm.predefineColors,
      "size": "mini"
    },
    on: {
      "change": function ($event) {
        return _vm.changeData();
      }
    },
    model: {
      value: _vm.color,
      callback: function ($$v) {
        _vm.color = $$v;
      },
      expression: "color"
    }
  }), _vm._ssrNode(" <input" + _vm._ssrAttr("value", _vm.color) + " class=\"text-color\" data-v-419cbe23>")], 2)], 2), _vm._ssrNode(" <div class=\"flex flex-col color-container\" data-v-419cbe23><div class=\"title-color\" data-v-419cbe23>\n          Opacity\n        </div> <div class=\"color-card flex items-center justify-between\" data-v-419cbe23><input" + _vm._ssrAttr("value", _vm.opacity) + " class=\"text-color\" data-v-419cbe23> <div class=\"flex items-center justify-center percent-color\" data-v-419cbe23><div class=\"hr-vertical\" data-v-419cbe23></div>\n            %\n          </div></div></div>")], 2)])]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/form/edit/Color.vue?vue&type=template&id=419cbe23&scoped=true

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/form/edit/Color.vue?vue&type=script&lang=js

/* harmony default export */ var Colorvue_type_script_lang_js = ({
  props: {
    titleForm: {
      default: '',
      type: String
    }
  },

  data() {
    return {
      color: '#000000',
      opacity: 100,
      predefineColors: ['#ff4500', '#ff8c00', '#ffd700', '#90ee90', '#00ced1', '#1e90ff', '#c71585', 'rgba(255, 69, 0, 0.68)', 'rgb(255, 120, 0)', 'hsv(51, 100, 98)', 'hsva(120, 40, 94, 0.5)', 'hsl(181, 100%, 37%)', 'hsla(209, 100%, 56%, 0.73)', '#c7158577'],
      defaultData: {}
    };
  },

  computed: { ...Object(external_vuex_["mapState"])({
      dataForm: state => {
        return state.creative.dataForm;
      }
    })
  },

  mounted() {
    this.getDetail();
  },

  methods: {
    rgb2hex(rgb) {
      rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
      return rgb && rgb.length === 4 ? '#' + ('0' + parseInt(rgb[1], 10).toString(16)).slice(-2) + ('0' + parseInt(rgb[2], 10).toString(16)).slice(-2) + ('0' + parseInt(rgb[3], 10).toString(16)).slice(-2) : '';
    },

    changeData() {
      const data = {
        title: this.titleForm,
        color: this.color,
        opacity: this.opacity,
        type: 'Color'
      };
      this.$emit('changeColor', data);
    },

    getDetail() {
      // const data = {
      //   id: this.$route.params.edit
      // }
      // this.$store
      //   .dispatch('creative/getDetail', data)
      //   .then((res) => {
      this.defaultData = this.dataForm.find(item => item.title === this.titleForm);
      this.color = this.defaultData.default.split(/[;]/)[0];
      this.color = this.color.substring(this.color.indexOf(':') + 1);

      if (!this.color.includes('#')) {
        this.color = this.rgb2hex(this.color);
      }

      this.opacity = this.defaultData.default.split(/[;]/)[1];
      this.opacity = this.opacity.substring(this.opacity.indexOf(':') + 1);
      this.opacity = this.opacity.replace('%', '');
      this.changeData(); // })
      // .catch(() => {
      // })
    }

  }
});
// CONCATENATED MODULE: ./components/form/edit/Color.vue?vue&type=script&lang=js
 /* harmony default export */ var edit_Colorvue_type_script_lang_js = (Colorvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/form/edit/Color.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(353)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  edit_Colorvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "419cbe23",
  "24166d50"
  
)

/* harmony default export */ var Color = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/form/edit/Text.vue?vue&type=template&id=9f9ef728&scoped=true
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return !_vm.isLoading ? _c('div', [_vm.editor ? _vm._ssrNode("<div class=\"form-input\" data-v-9f9ef728>", "</div>", [_c('editor-content', {
    ref: "markdowndetails",
    staticClass: "input-box",
    attrs: {
      "editor": _vm.editor
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"style-box\" data-v-9f9ef728>", "</div>", [_vm._ssrNode("<div class=\"title-box\" data-v-9f9ef728>\n        Style\n      </div> "), _vm._ssrNode("<div class=\"flex flex-row card-font\" data-v-9f9ef728>", "</div>", [_c('el-select', {
    staticClass: "font-family-card",
    attrs: {
      "value": _vm.findFamily(),
      "placeholder": "Select"
    },
    on: {
      "change": function ($event) {
        return _vm.changeFont(_vm.selectedFont);
      }
    },
    model: {
      value: _vm.selectedFont,
      callback: function ($$v) {
        _vm.selectedFont = $$v;
      },
      expression: "selectedFont"
    }
  }, _vm._l(_vm.options, function (item) {
    return _c('el-option', {
      key: item.value,
      attrs: {
        "label": item.label,
        "value": item.value
      }
    });
  }), 1), _vm._ssrNode(" "), _c('el-select', {
    staticClass: "font-size-card",
    attrs: {
      "value": _vm.findSize(),
      "placeholder": ""
    },
    on: {
      "change": function ($event) {
        return _vm.selectFontSize();
      }
    },
    model: {
      value: _vm.value2,
      callback: function ($$v) {
        _vm.value2 = $$v;
      },
      expression: "value2"
    }
  }, _vm._l(_vm.options2, function (item) {
    return _c('el-option', {
      key: item.value,
      attrs: {
        "label": item.label,
        "value": item.value
      }
    });
  }), 1)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"grid grid-cols-4 gap-2\" data-v-9f9ef728>", "</div>", [_vm._ssrNode("<div" + _vm._ssrClass("btn-card flex items-center justify-center", {
    'btn-card-active': _vm.editor.isActive('bold')
  }) + " data-v-9f9ef728>", "</div>", [_c('IconTextBold', {
    attrs: {
      "bg-color": _vm.editor.isActive('bold') ? 'white' : '#1B63D4'
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div" + _vm._ssrClass("btn-card flex items-center justify-center", {
    'btn-card-active': _vm.editor.isActive('italic')
  }) + " data-v-9f9ef728>", "</div>", [_c('IconTextItalic', {
    attrs: {
      "bg-color": _vm.editor.isActive('italic') ? 'white' : '#1B63D4'
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div" + _vm._ssrClass("btn-card flex items-center justify-center", {
    'btn-card-active': _vm.editor.isActive('underline')
  }) + " data-v-9f9ef728>", "</div>", [_c('IconTextUnderlined', {
    attrs: {
      "bg-color": _vm.editor.isActive('underline') ? 'white' : '#1B63D4'
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div" + _vm._ssrClass("btn-card flex items-center justify-center", {
    'btn-card-active': _vm.editor.isActive('strike')
  }) + " data-v-9f9ef728>", "</div>", [_c('IconTextStrike', {
    attrs: {
      "bg-color": _vm.editor.isActive('strike') ? 'white' : '#1B63D4'
    }
  })], 1)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"grid grid-cols-4 gap-2 mt-2\" data-v-9f9ef728>", "</div>", [_vm._ssrNode("<div" + _vm._ssrClass("btn-card flex items-center justify-center", {
    'btn-card-active': _vm.editor.isActive({
      textAlign: 'left'
    })
  }) + " data-v-9f9ef728>", "</div>", [_c('IconTextLeft', {
    attrs: {
      "bg-color": _vm.editor.isActive({
        textAlign: 'left'
      }) ? 'white' : '#1B63D4'
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div" + _vm._ssrClass("btn-card flex items-center justify-center", {
    'btn-card-active': _vm.editor.isActive({
      textAlign: 'center'
    })
  }) + " data-v-9f9ef728>", "</div>", [_c('IconTextCenter', {
    attrs: {
      "bg-color": _vm.editor.isActive({
        textAlign: 'center'
      }) ? 'white' : '#1B63D4'
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div" + _vm._ssrClass("btn-card flex items-center justify-center", {
    'btn-card-active': _vm.editor.isActive({
      textAlign: 'right'
    })
  }) + " data-v-9f9ef728>", "</div>", [_c('IconTextRight', {
    attrs: {
      "bg-color": _vm.editor.isActive({
        textAlign: 'right'
      }) ? 'white' : '#1B63D4'
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div" + _vm._ssrClass("btn-card flex items-center justify-center", {
    'btn-card-active': _vm.editor.isActive({
      textAlign: 'justify'
    })
  }) + " data-v-9f9ef728>", "</div>", [_c('IconTextJustify', {
    attrs: {
      "bg-color": _vm.editor.isActive({
        textAlign: 'justify'
      }) ? 'white' : '#1B63D4'
    }
  })], 1)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"grid grid-cols-2 gap-2\" data-v-9f9ef728>", "</div>", [_vm._ssrNode("<div class=\"flex flex-col color-container\" data-v-9f9ef728>", "</div>", [_vm._ssrNode("<div class=\"title-color\" data-v-9f9ef728>\n            Text Color\n          </div> "), _vm._ssrNode("<div class=\"color-card flex items-center\" data-v-9f9ef728>", "</div>", [_c('el-color-picker', {
    attrs: {
      "value": _vm.findColor(),
      "size": "mini",
      "color-format": "hex"
    },
    on: {
      "change": function ($event) {
        return _vm.changeColor($event);
      }
    },
    model: {
      value: _vm.color,
      callback: function ($$v) {
        _vm.color = $$v;
      },
      expression: "color"
    }
  }), _vm._ssrNode(" <input" + _vm._ssrAttr("value", _vm.color) + " class=\"text-color\" data-v-9f9ef728>")], 2)], 2), _vm._ssrNode(" <div class=\"flex flex-col color-container\" data-v-9f9ef728><div class=\"title-color\" data-v-9f9ef728>\n            Opacity\n          </div> <div class=\"color-card flex items-center justify-between\" data-v-9f9ef728><input" + _vm._ssrAttr("value", _vm.opacity) + " class=\"text-color\" data-v-9f9ef728> <div class=\"flex items-center justify-center percent-color\" data-v-9f9ef728><div class=\"hr-vertical\" data-v-9f9ef728></div>\n              %\n            </div></div></div>")], 2)], 2)], 2) : _vm._e()]) : _vm._e();
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/form/edit/Text.vue?vue&type=template&id=9f9ef728&scoped=true

// EXTERNAL MODULE: external "@tiptap/starter-kit"
var starter_kit_ = __webpack_require__(110);
var starter_kit_default = /*#__PURE__*/__webpack_require__.n(starter_kit_);

// EXTERNAL MODULE: external "@tiptap/vue-2"
var vue_2_ = __webpack_require__(111);

// EXTERNAL MODULE: external "@tiptap/extension-document"
var extension_document_ = __webpack_require__(112);
var extension_document_default = /*#__PURE__*/__webpack_require__.n(extension_document_);

// EXTERNAL MODULE: external "@tiptap/extension-font-family"
var extension_font_family_ = __webpack_require__(113);
var extension_font_family_default = /*#__PURE__*/__webpack_require__.n(extension_font_family_);

// EXTERNAL MODULE: external "@tiptap/extension-paragraph"
var extension_paragraph_ = __webpack_require__(114);
var extension_paragraph_default = /*#__PURE__*/__webpack_require__.n(extension_paragraph_);

// EXTERNAL MODULE: external "@tiptap/extension-text"
var extension_text_ = __webpack_require__(115);
var extension_text_default = /*#__PURE__*/__webpack_require__.n(extension_text_);

// EXTERNAL MODULE: external "@tiptap/extension-text-style"
var extension_text_style_ = __webpack_require__(116);
var extension_text_style_default = /*#__PURE__*/__webpack_require__.n(extension_text_style_);

// EXTERNAL MODULE: external "@tiptap/extension-text-align"
var extension_text_align_ = __webpack_require__(117);
var extension_text_align_default = /*#__PURE__*/__webpack_require__.n(extension_text_align_);

// EXTERNAL MODULE: external "@tiptap/extension-underline"
var extension_underline_ = __webpack_require__(118);
var extension_underline_default = /*#__PURE__*/__webpack_require__.n(extension_underline_);

// EXTERNAL MODULE: external "@tiptap/extension-color"
var extension_color_ = __webpack_require__(119);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/form/edit/Text.vue?vue&type=script&lang=js











const FontSize = vue_2_["Extension"].create({
  name: 'fontSize',

  addOptions() {
    return {
      types: ['textStyle']
    };
  },

  addGlobalAttributes() {
    return [{
      types: this.options.types,
      attributes: {
        fontSize: {
          default: null,
          parseHTML: element => element.style.fontSize.replace(/['"]+/g, ''),
          renderHTML: attributes => {
            if (!attributes.fontSize) {
              return {};
            }

            return {
              style: `font-size: ${attributes.fontSize}`
            };
          }
        }
      }
    }];
  },

  addCommands() {
    return {
      setFontSize: fontSize => ({
        chain
      }) => {
        return chain().setMark('textStyle', {
          fontSize: fontSize + 'px'
        }).run();
      },
      unsetFontSize: () => ({
        chain
      }) => {
        return chain().setMark('textStyle', {
          fontSize: null
        }).removeEmptyTextStyle().run();
      }
    };
  }

});
const FontSize2 = vue_2_["Extension"].create({
  name: 'fontSize2',

  addOptions() {
    return {
      types: ['textStyle']
    };
  },

  addGlobalAttributes() {
    return [{
      types: this.options.types,
      attributes: {
        fontSize2: {
          default: null,
          parseHTML: element => element.style.opacity.replace(/['"]+/g, ''),
          renderHTML: attributes => {
            if (!attributes.fontSize2) {
              return {};
            }

            return {
              style: `opacity: ${attributes.fontSize2}`
            };
          }
        }
      }
    }];
  },

  addCommands() {
    return {
      setFontSize2: fontSize2 => ({
        chain
      }) => {
        return chain().setMark('textStyle', {
          fontSize2: fontSize2 + '%'
        }).run();
      },
      unsetFontSize2: () => ({
        chain
      }) => {
        return chain().setMark('textStyle', {
          fontSize2: null
        }).removeEmptyTextStyle().run();
      }
    };
  }

});
/* harmony default export */ var Textvue_type_script_lang_js = ({
  components: {
    EditorContent: vue_2_["EditorContent"]
  },
  props: {
    titleForm: {
      default: '',
      type: String
    }
  },

  data() {
    return {
      isLoading: true,
      defaultData: {},
      color: '#000000',
      opacity: 100,
      text: 'testing',
      editor: null,
      options: [{
        value: 'Arial, Helvetica, sans-serif',
        label: 'Arial, Helvetica, sans-serif'
      }, {
        value: 'Arial, sans-serif',
        label: 'Arial, sans-serif'
      }, {
        value: 'Comic Sans MS, Comic Sans',
        label: 'Comic Sans MS'
      }, {
        value: 'Inter',
        label: 'Inter'
      }, {
        value: 'serif',
        label: 'Serif'
      }, {
        value: 'monospace',
        label: 'Monospace'
      }, {
        value: 'cursive',
        label: 'Cursive'
      }, {
        value: 'Lato, Roboto',
        label: 'Lato, Roboto'
      }, {
        value: 'Montserrat',
        label: 'Montserrat'
      }, {
        value: 'Fira Sans',
        label: 'Fira Sans'
      }, {
        value: 'Fira Code',
        label: 'Fira Code'
      }, {
        value: 'Roboto',
        label: 'Roboto'
      }, {
        value: 'Roboto Mono',
        label: 'Roboto Mono'
      }, {
        value: 'Roboto Condensed',
        label: 'Roboto Condensed'
      }, {
        value: 'Roboto Slab',
        label: 'Roboto Slab'
      }, {
        value: 'IBM Plex Sans',
        label: 'IBM Plex Sans'
      }, {
        value: 'IBM Plex Serif',
        label: 'IBM Plex Serif'
      }, {
        value: 'Poppins',
        label: 'Poppins'
      }, {
        value: 'Oswald',
        label: 'Oswald'
      }, {
        value: 'Bebas Neue',
        label: 'Bebas Neue'
      }, {
        value: 'Raleway',
        label: 'Raleway'
      }, {
        value: 'Noto Sans',
        label: 'Noto Sans'
      }, {
        value: 'Mukta',
        label: 'Mukta'
      }, {
        value: 'Nunito',
        label: 'Nunito'
      }, {
        value: 'Nunito Sans',
        label: 'Nunito Sans'
      }, {
        value: 'Segoe UI, Arial, sans-serif',
        label: 'Segoe UI, Arial, sans-serif'
      }],
      options2: [{
        value: '6',
        label: '6px'
      }, {
        value: '7',
        label: '7px'
      }, {
        value: '8',
        label: '8px'
      }, {
        value: '9',
        label: '9px'
      }, {
        value: '10',
        label: '10px'
      }, {
        value: '11',
        label: '11px'
      }, {
        value: '12',
        label: '12px'
      }, {
        value: '13',
        label: '13px'
      }, {
        value: '14',
        label: '14px'
      }, {
        value: '15',
        label: '15px'
      }, {
        value: '16',
        label: '16px'
      }, {
        value: '17',
        label: '17px'
      }, {
        value: '18',
        label: '18px'
      }, {
        value: '19',
        label: '19px'
      }, {
        value: '20',
        label: '20px'
      }, {
        value: '21',
        label: '21px'
      }, {
        value: '22',
        label: '22px'
      }, {
        value: '23',
        label: '23px'
      }, {
        value: '24',
        label: '24px'
      }, {
        value: '25',
        label: '25px'
      }, {
        value: '26',
        label: '26px'
      }, {
        value: '27',
        label: '27px'
      }, {
        value: '28',
        label: '28px'
      }, {
        value: '29',
        label: '29px'
      }, {
        value: '30',
        label: '30px'
      }],
      value: '',
      value2: '12',
      selectedFont: ''
    };
  },

  computed: { ...Object(external_vuex_["mapState"])({
      dataForm: state => {
        return state.creative.dataForm;
      }
    })
  },

  mounted() {
    this.checkEditor();
  },

  beforeUnmount() {
    this.editor.destroy();
  },

  methods: {
    checkEditor() {
      this.isLoading = true;
      this.editor = new vue_2_["Editor"]({
        onUpdate: ({
          editor
        }) => {
          const data = {
            title: this.titleForm,
            type: 'Text',
            src: editor.getHTML()
          };
          this.$emit('changeText', data);
        },
        extensions: [starter_kit_default.a, extension_document_default.a, extension_paragraph_default.a.configure({
          HTMLAttributes: {
            class: 'text-unimind'
          }
        }), extension_text_default.a, extension_text_style_default.a, extension_font_family_default.a, FontSize, extension_underline_default.a, extension_text_align_default.a.configure({
          types: ['paragraph']
        }), extension_color_["Color"], FontSize2],
        content: `
          <p><span style="">Text</span></p>
        `
      });
      this.getDetail();
    },

    changeFont(data) {
      this.selectedFont = data;
      this.editor.chain().focus().setFontFamily(data).run();
    },

    findFamily() {
      this.options.forEach((item, index) => {
        if (this.editor.isActive('textStyle', {
          fontFamily: item.value
        })) {
          this.selectedFont = item.value;
        }
      });
    },

    findSize() {
      this.options2.forEach((item, index) => {
        if (this.editor.isActive('textStyle', {
          fontSize: item.value + 'px'
        })) {
          this.value2 = item.value;
        }
      });
    },

    findColor() {
      this.color = this.editor.getAttributes('textStyle').color;
    },

    rgb2hex(rgb) {
      rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
      return rgb && rgb.length === 4 ? '#' + ('0' + parseInt(rgb[1], 10).toString(16)).slice(-2) + ('0' + parseInt(rgb[2], 10).toString(16)).slice(-2) + ('0' + parseInt(rgb[3], 10).toString(16)).slice(-2) : '';
    },

    getDetail() {
      // const data = {
      //   id: this.$route.params.edit
      // }
      // this.$store
      //   .dispatch('creative/getDetail', data)
      //   .then((res) => {
      this.defaultData = this.dataForm.find(item => item.title === this.titleForm);
      this.editor.commands.setContent(this.defaultData.default);

      for (let i = 0; i < this.options.length; i++) {
        if (this.editor.isActive('textStyle', {
          fontFamily: this.options[i].value
        })) {
          this.value = this.options[i].value;
        }
      }

      for (let i = 0; i < this.options2.length; i++) {
        if (this.editor.isActive('textStyle', {
          fontSize: this.options2[i].label
        })) {
          this.value2 = this.options2[i].value;
        }
      }

      this.color = this.editor.getAttributes('textStyle').color;

      if (!this.color.includes('#')) {
        this.color = this.rgb2hex(this.color);
      }

      if (this.editor.getAttributes('textStyle').fontSize2 === '') {
        this.opacity = 100;
      } else {
        this.opacity = this.editor.getAttributes('textStyle').fontSize2 * 100;
      }

      this.isLoading = false;
    },

    selectFontSize() {
      this.editor.commands.setFontSize(this.value2);
    },

    selectFontOpacity() {
      this.editor.commands.setFontSize2(this.opacity);
    },

    setText(data1) {
      if (data1 === 'bold') {
        this.editor.chain().focus().toggleBold().run();
      }
    },

    changeColor(x) {
      this.editor.chain().focus().setColor(x).run();
      this.color = x;
    }

  }
});
// CONCATENATED MODULE: ./components/form/edit/Text.vue?vue&type=script&lang=js
 /* harmony default export */ var edit_Textvue_type_script_lang_js = (Textvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/form/edit/Text.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(355)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  edit_Textvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "9f9ef728",
  "4ddb35d0"
  
)

/* harmony default export */ var Text = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {IconTextBold: __webpack_require__(142).default,IconTextItalic: __webpack_require__(143).default,IconTextUnderlined: __webpack_require__(144).default,IconTextStrike: __webpack_require__(145).default,IconTextLeft: __webpack_require__(146).default,IconTextCenter: __webpack_require__(147).default,IconTextRight: __webpack_require__(148).default,IconTextJustify: __webpack_require__(149).default})


/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/form/edit/Button.vue?vue&type=template&id=426252c7&scoped=true
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return !_vm.isLoading ? _c('div', [_vm.editor ? _vm._ssrNode("<div class=\"form-input\" data-v-426252c7>", "</div>", [_vm._ssrNode("<div class=\"title-btn\" data-v-426252c7>\n      Text\n    </div> "), _c('editor-content', {
    staticClass: "input-box",
    attrs: {
      "editor": _vm.editor
    }
  }), _vm._ssrNode(" <div class=\"title-btn\" data-v-426252c7>\n      Link\n    </div> "), _c('el-input', {
    on: {
      "change": function ($event) {
        return _vm.changeData();
      }
    },
    model: {
      value: _vm.link,
      callback: function ($$v) {
        _vm.link = $$v;
      },
      expression: "link"
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"style-box\" data-v-426252c7>", "</div>", [_vm._ssrNode("<div class=\"title-box\" data-v-426252c7>\n        Style\n      </div> "), _vm._ssrNode("<div class=\"flex flex-row card-font\" data-v-426252c7>", "</div>", [_c('el-select', {
    staticClass: "font-family-card",
    attrs: {
      "value": _vm.findFamily(),
      "placeholder": "Select"
    },
    on: {
      "change": function ($event) {
        return _vm.changeFont(_vm.selectedFont);
      }
    },
    model: {
      value: _vm.selectedFont,
      callback: function ($$v) {
        _vm.selectedFont = $$v;
      },
      expression: "selectedFont"
    }
  }, _vm._l(_vm.options, function (item) {
    return _c('el-option', {
      key: item.value,
      attrs: {
        "label": item.label,
        "value": item.value
      }
    });
  }), 1), _vm._ssrNode(" "), _c('el-select', {
    staticClass: "font-size-card",
    attrs: {
      "value": _vm.findSize(),
      "placeholder": ""
    },
    on: {
      "change": function ($event) {
        return _vm.selectFontSize();
      }
    },
    model: {
      value: _vm.value2,
      callback: function ($$v) {
        _vm.value2 = $$v;
      },
      expression: "value2"
    }
  }, _vm._l(_vm.options2, function (item) {
    return _c('el-option', {
      key: item.value,
      attrs: {
        "label": item.label,
        "value": item.value
      }
    });
  }), 1)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"grid grid-cols-4 gap-2\" data-v-426252c7>", "</div>", [_vm._ssrNode("<div" + _vm._ssrClass("btn-card flex items-center justify-center", {
    'btn-card-active': _vm.editor.isActive('bold')
  }) + " data-v-426252c7>", "</div>", [_c('IconTextBold', {
    attrs: {
      "bg-color": _vm.editor.isActive('bold') ? 'white' : '#1B63D4'
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div" + _vm._ssrClass("btn-card flex items-center justify-center", {
    'btn-card-active': _vm.editor.isActive('italic')
  }) + " data-v-426252c7>", "</div>", [_c('IconTextItalic', {
    attrs: {
      "bg-color": _vm.editor.isActive('italic') ? 'white' : '#1B63D4'
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div" + _vm._ssrClass("btn-card flex items-center justify-center", {
    'btn-card-active': _vm.editor.isActive('underline')
  }) + " data-v-426252c7>", "</div>", [_c('IconTextUnderlined', {
    attrs: {
      "bg-color": _vm.editor.isActive('underline') ? 'white' : '#1B63D4'
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div" + _vm._ssrClass("btn-card flex items-center justify-center", {
    'btn-card-active': _vm.editor.isActive('strike')
  }) + " data-v-426252c7>", "</div>", [_c('IconTextStrike', {
    attrs: {
      "bg-color": _vm.editor.isActive('strike') ? 'white' : '#1B63D4'
    }
  })], 1)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"grid grid-cols-4 gap-2 mt-2\" data-v-426252c7>", "</div>", [_vm._ssrNode("<div" + _vm._ssrClass("btn-card flex items-center justify-center", {
    'btn-card-active': _vm.editor.isActive({
      textAlign: 'left'
    })
  }) + " data-v-426252c7>", "</div>", [_c('IconTextLeft', {
    attrs: {
      "bg-color": _vm.editor.isActive({
        textAlign: 'left'
      }) ? 'white' : '#1B63D4'
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div" + _vm._ssrClass("btn-card flex items-center justify-center", {
    'btn-card-active': _vm.editor.isActive({
      textAlign: 'center'
    })
  }) + " data-v-426252c7>", "</div>", [_c('IconTextCenter', {
    attrs: {
      "bg-color": _vm.editor.isActive({
        textAlign: 'center'
      }) ? 'white' : '#1B63D4'
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div" + _vm._ssrClass("btn-card flex items-center justify-center", {
    'btn-card-active': _vm.editor.isActive({
      textAlign: 'right'
    })
  }) + " data-v-426252c7>", "</div>", [_c('IconTextRight', {
    attrs: {
      "bg-color": _vm.editor.isActive({
        textAlign: 'right'
      }) ? 'white' : '#1B63D4'
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div" + _vm._ssrClass("btn-card flex items-center justify-center", {
    'btn-card-active': _vm.editor.isActive({
      textAlign: 'justify'
    })
  }) + " data-v-426252c7>", "</div>", [_c('IconTextJustify', {
    attrs: {
      "bg-color": _vm.editor.isActive({
        textAlign: 'justify'
      }) ? 'white' : '#1B63D4'
    }
  })], 1)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"grid grid-cols-2 gap-2\" data-v-426252c7>", "</div>", [_vm._ssrNode("<div class=\"flex flex-col color-container\" data-v-426252c7>", "</div>", [_vm._ssrNode("<div class=\"title-color\" data-v-426252c7>\n            Text Color\n          </div> "), _vm._ssrNode("<div class=\"color-card flex items-center\" data-v-426252c7>", "</div>", [_c('el-color-picker', {
    attrs: {
      "value": _vm.findColor(),
      "size": "mini",
      "color-format": "hex"
    },
    on: {
      "change": function ($event) {
        return _vm.changeColor($event);
      }
    },
    model: {
      value: _vm.color,
      callback: function ($$v) {
        _vm.color = $$v;
      },
      expression: "color"
    }
  }), _vm._ssrNode(" <input" + _vm._ssrAttr("value", _vm.color) + " class=\"text-color\" data-v-426252c7>")], 2)], 2), _vm._ssrNode(" <div class=\"flex flex-col color-container\" data-v-426252c7><div class=\"title-color\" data-v-426252c7>\n            Opacity\n          </div> <div class=\"color-card flex items-center justify-between\" data-v-426252c7><input" + _vm._ssrAttr("value", _vm.opacity) + " class=\"text-color\" data-v-426252c7> <div class=\"flex items-center justify-center percent-color\" data-v-426252c7><div class=\"hr-vertical\" data-v-426252c7></div>\n              %\n            </div></div></div>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"grid grid-cols-2 gap-2\" data-v-426252c7>", "</div>", [_vm._ssrNode("<div class=\"flex flex-col color-container\" data-v-426252c7>", "</div>", [_vm._ssrNode("<div class=\"title-color\" data-v-426252c7>\n            Button Color\n          </div> "), _vm._ssrNode("<div class=\"color-card flex items-center\" data-v-426252c7>", "</div>", [_c('el-color-picker', {
    attrs: {
      "size": "mini"
    },
    on: {
      "change": function ($event) {
        return _vm.changeData();
      }
    },
    model: {
      value: _vm.color2,
      callback: function ($$v) {
        _vm.color2 = $$v;
      },
      expression: "color2"
    }
  }), _vm._ssrNode(" <input" + _vm._ssrAttr("value", _vm.color2) + " class=\"text-color\" data-v-426252c7>")], 2)], 2), _vm._ssrNode(" <div class=\"flex flex-col color-container\" data-v-426252c7><div class=\"title-color\" data-v-426252c7>\n            Opacity\n          </div> <div class=\"color-card flex items-center justify-between\" data-v-426252c7><input" + _vm._ssrAttr("value", _vm.opacity2) + " class=\"text-color\" data-v-426252c7> <div class=\"flex items-center justify-center percent-color\" data-v-426252c7><div class=\"hr-vertical\" data-v-426252c7></div>\n              %\n            </div></div></div>")], 2)], 2)], 2) : _vm._e()]) : _vm._e();
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/form/edit/Button.vue?vue&type=template&id=426252c7&scoped=true

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// EXTERNAL MODULE: external "@tiptap/starter-kit"
var starter_kit_ = __webpack_require__(110);
var starter_kit_default = /*#__PURE__*/__webpack_require__.n(starter_kit_);

// EXTERNAL MODULE: external "@tiptap/vue-2"
var vue_2_ = __webpack_require__(111);

// EXTERNAL MODULE: external "@tiptap/extension-document"
var extension_document_ = __webpack_require__(112);
var extension_document_default = /*#__PURE__*/__webpack_require__.n(extension_document_);

// EXTERNAL MODULE: external "@tiptap/extension-font-family"
var extension_font_family_ = __webpack_require__(113);
var extension_font_family_default = /*#__PURE__*/__webpack_require__.n(extension_font_family_);

// EXTERNAL MODULE: external "@tiptap/extension-paragraph"
var extension_paragraph_ = __webpack_require__(114);
var extension_paragraph_default = /*#__PURE__*/__webpack_require__.n(extension_paragraph_);

// EXTERNAL MODULE: external "@tiptap/extension-text"
var extension_text_ = __webpack_require__(115);
var extension_text_default = /*#__PURE__*/__webpack_require__.n(extension_text_);

// EXTERNAL MODULE: external "@tiptap/extension-text-style"
var extension_text_style_ = __webpack_require__(116);
var extension_text_style_default = /*#__PURE__*/__webpack_require__.n(extension_text_style_);

// EXTERNAL MODULE: external "@tiptap/extension-text-align"
var extension_text_align_ = __webpack_require__(117);
var extension_text_align_default = /*#__PURE__*/__webpack_require__.n(extension_text_align_);

// EXTERNAL MODULE: external "@tiptap/extension-underline"
var extension_underline_ = __webpack_require__(118);
var extension_underline_default = /*#__PURE__*/__webpack_require__.n(extension_underline_);

// EXTERNAL MODULE: external "@tiptap/extension-color"
var extension_color_ = __webpack_require__(119);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/form/edit/Button.vue?vue&type=script&lang=js











const FontSize = vue_2_["Extension"].create({
  name: 'fontSize',

  addOptions() {
    return {
      types: ['textStyle']
    };
  },

  addGlobalAttributes() {
    return [{
      types: this.options.types,
      attributes: {
        fontSize: {
          default: null,
          parseHTML: element => element.style.fontSize.replace(/['"]+/g, ''),
          renderHTML: attributes => {
            if (!attributes.fontSize) {
              return {};
            }

            return {
              style: `font-size: ${attributes.fontSize}`
            };
          }
        }
      }
    }];
  },

  addCommands() {
    return {
      setFontSize: fontSize => ({
        chain
      }) => {
        return chain().setMark('textStyle', {
          fontSize: fontSize + 'px'
        }).run();
      },
      unsetFontSize: () => ({
        chain
      }) => {
        return chain().setMark('textStyle', {
          fontSize: null
        }).removeEmptyTextStyle().run();
      }
    };
  }

});
const FontSize2 = vue_2_["Extension"].create({
  name: 'fontSize2',

  addOptions() {
    return {
      types: ['textStyle']
    };
  },

  addGlobalAttributes() {
    return [{
      types: this.options.types,
      attributes: {
        fontSize2: {
          default: null,
          parseHTML: element => element.style.opacity.replace(/['"]+/g, ''),
          renderHTML: attributes => {
            if (!attributes.fontSize2) {
              return {};
            }

            return {
              style: `opacity: ${attributes.fontSize2}`
            };
          }
        }
      }
    }];
  },

  addCommands() {
    return {
      setFontSize2: fontSize2 => ({
        chain
      }) => {
        return chain().setMark('textStyle', {
          fontSize2: fontSize2 + '%'
        }).run();
      },
      unsetFontSize2: () => ({
        chain
      }) => {
        return chain().setMark('textStyle', {
          fontSize2: null
        }).removeEmptyTextStyle().run();
      }
    };
  }

});
/* harmony default export */ var Buttonvue_type_script_lang_js = ({
  components: {
    EditorContent: vue_2_["EditorContent"]
  },
  props: {
    titleForm: {
      default: '',
      type: String
    }
  },

  data() {
    return {
      isLoading: true,
      dataText: '',
      defaultData: {},
      link: '',
      color: '#352F2F',
      color2: '#ffffff',
      opacity: 0,
      opacity2: 0,
      text: 'testing',
      editor: null,
      selectedFont: '',
      options: [{
        value: 'Arial, Helvetica, sans-serif',
        label: 'Arial, Helvetica, sans-serif'
      }, {
        value: 'Arial, sans-serif',
        label: 'Arial, sans-serif'
      }, {
        value: 'Comic Sans MS, Comic Sans',
        label: 'Comic Sans MS'
      }, {
        value: 'Inter',
        label: 'Inter'
      }, {
        value: 'serif',
        label: 'Serif'
      }, {
        value: 'DM Serif Display, Roboto',
        label: 'DM Serif Display, Roboto'
      }, {
        value: 'monospace',
        label: 'Monospace'
      }, {
        value: 'cursive',
        label: 'Cursive'
      }, {
        value: 'Lato, Roboto',
        label: 'Lato, Roboto'
      }, {
        value: 'Montserrat',
        label: 'Montserrat'
      }, {
        value: 'Fira Sans',
        label: 'Fira Sans'
      }, {
        value: 'Fira Code',
        label: 'Fira Code'
      }, {
        value: 'Roboto',
        label: 'Roboto'
      }, {
        value: 'Roboto Mono',
        label: 'Roboto Mono'
      }, {
        value: 'Roboto Condensed',
        label: 'Roboto Condensed'
      }, {
        value: 'Roboto Slab',
        label: 'Roboto Slab'
      }, {
        value: 'IBM Plex Sans',
        label: 'IBM Plex Sans'
      }, {
        value: 'IBM Plex Serif',
        label: 'IBM Plex Serif'
      }, {
        value: 'Poppins',
        label: 'Poppins'
      }, {
        value: 'Oswald',
        label: 'Oswald'
      }, {
        value: 'Bebas Neue',
        label: 'Bebas Neue'
      }, {
        value: 'Raleway',
        label: 'Raleway'
      }, {
        value: 'Noto Sans',
        label: 'Noto Sans'
      }, {
        value: 'Mukta',
        label: 'Mukta'
      }, {
        value: 'Nunito',
        label: 'Nunito'
      }, {
        value: 'Nunito Sans',
        label: 'Nunito Sans'
      }, {
        value: 'Segoe UI, Arial, sans-serif',
        label: 'Segoe UI, Arial, sans-serif'
      }],
      options2: [{
        value: '6',
        label: '6px'
      }, {
        value: '7',
        label: '7px'
      }, {
        value: '8',
        label: '8px'
      }, {
        value: '9',
        label: '9px'
      }, {
        value: '10',
        label: '10px'
      }, {
        value: '11',
        label: '11px'
      }, {
        value: '12',
        label: '12px'
      }, {
        value: '13',
        label: '13px'
      }, {
        value: '14',
        label: '14px'
      }, {
        value: '15',
        label: '15px'
      }, {
        value: '16',
        label: '16px'
      }, {
        value: '17',
        label: '17px'
      }, {
        value: '18',
        label: '18px'
      }, {
        value: '19',
        label: '19px'
      }, {
        value: '20',
        label: '20px'
      }, {
        value: '21',
        label: '21px'
      }, {
        value: '22',
        label: '22px'
      }, {
        value: '23',
        label: '23px'
      }, {
        value: '24',
        label: '24px'
      }, {
        value: '25',
        label: '25px'
      }, {
        value: '26',
        label: '26px'
      }, {
        value: '27',
        label: '27px'
      }, {
        value: '28',
        label: '28px'
      }, {
        value: '29',
        label: '29px'
      }, {
        value: '30',
        label: '30px'
      }],
      value: '',
      value2: ''
    };
  },

  mounted() {
    this.checkEditor();
  },

  computed: { ...Object(external_vuex_["mapState"])({
      dataForm: state => {
        return state.creative.dataForm;
      }
    })
  },

  beforeUnmount() {
    this.editor.destroy();
  },

  methods: {
    changeFont(data) {
      this.selectedFont = data;
      this.editor.chain().focus().setFontFamily(data).run();
    },

    findFamily() {
      this.options.forEach((item, index) => {
        if (this.editor.isActive('textStyle', {
          fontFamily: item.value
        })) {
          this.selectedFont = item.value;
        }
      });
    },

    findSize() {
      this.options2.forEach((item, index) => {
        if (this.editor.isActive('textStyle', {
          fontSize: item.value + 'px'
        })) {
          this.value2 = item.value;
        }
      });
    },

    findColor() {
      this.color = this.editor.getAttributes('textStyle').color;
    },

    checkEditor() {
      this.isLoading = false;
      this.editor = new vue_2_["Editor"]({
        onUpdate: ({
          editor
        }) => {
          const data = {
            title: this.titleForm,
            type: 'Button',
            src: editor.getHTML(),
            color2: this.color2,
            opacity2: this.opacity2,
            link: this.link
          };
          this.$emit('changeButton', data);
        },
        extensions: [starter_kit_default.a, extension_document_default.a, extension_paragraph_default.a.configure({
          HTMLAttributes: {
            class: 'btn-unimind'
          }
        }), extension_text_default.a, extension_text_style_default.a, extension_font_family_default.a, FontSize, extension_underline_default.a, extension_text_align_default.a.configure({
          types: ['paragraph']
        }), extension_color_["Color"], FontSize2],
        content: `
            <p></p>
          `
      });
      this.getDetail();
    },

    rgb2hex(rgb) {
      rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
      return rgb && rgb.length === 4 ? '#' + ('0' + parseInt(rgb[1], 10).toString(16)).slice(-2) + ('0' + parseInt(rgb[2], 10).toString(16)).slice(-2) + ('0' + parseInt(rgb[3], 10).toString(16)).slice(-2) : '';
    },

    getDetail() {
      this.defaultData = this.dataForm.find(item => item.title === this.titleForm);
      this.link = this.defaultData.default.link;
      this.color2 = this.defaultData.default.bg_color.split(/[;]/)[0];
      this.color2 = this.color2.substring(this.color2.indexOf(':') + 1);
      this.opacity2 = this.defaultData.default.bg_color.split(/[;]/)[1];
      this.opacity2 = this.opacity2.substring(this.opacity2.indexOf(':') + 1);
      this.opacity2 = this.opacity2.replace('%', '');
      this.dataText = this.defaultData.default.text;
      this.editor.commands.setContent(this.dataText);

      for (let i = 0; i < this.options.length; i++) {
        if (this.editor.isActive('textStyle', {
          fontFamily: this.options[i].value
        })) {
          this.value = this.options[i].value;
        }
      }

      for (let i = 0; i < this.options2.length; i++) {
        if (this.editor.isActive('textStyle', {
          fontSize: this.options2[i].label
        })) {
          this.value2 = this.options2[i].value;
        }
      }

      this.color = this.editor.getAttributes('textStyle').color;

      if (!this.color.includes('#')) {
        this.color = this.rgb2hex(this.color);
      }

      this.opacity = this.editor.getAttributes('textStyle').fontSize2 * 100;
      this.changeData();
      this.isLoading = false;
    },

    changeData() {
      const data = {
        title: this.titleForm,
        type: 'Button',
        src: this.editor.getHTML(),
        color2: this.color2,
        opacity2: this.opacity2,
        link: this.link
      };
      this.$emit('changeButton', data);
    },

    selectFontSize() {
      this.editor.commands.setFontSize(this.value2);
    },

    selectFontOpacity() {
      this.editor.commands.setFontSize2(this.opacity);
    },

    setText(data1) {
      if (data1 === 'bold') {
        this.editor.chain().focus().toggleBold().run();
      }
    },

    changeColor(x) {
      this.editor.chain().focus().setColor(x).run();
      this.color = x;
    }

  }
});
// CONCATENATED MODULE: ./components/form/edit/Button.vue?vue&type=script&lang=js
 /* harmony default export */ var edit_Buttonvue_type_script_lang_js = (Buttonvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/form/edit/Button.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(357)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  edit_Buttonvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "426252c7",
  "29d79695"
  
)

/* harmony default export */ var Button = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {IconTextBold: __webpack_require__(142).default,IconTextItalic: __webpack_require__(143).default,IconTextUnderlined: __webpack_require__(144).default,IconTextStrike: __webpack_require__(145).default,IconTextLeft: __webpack_require__(146).default,IconTextCenter: __webpack_require__(147).default,IconTextRight: __webpack_require__(148).default,IconTextJustify: __webpack_require__(149).default})


/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/form/edit/TextColor.vue?vue&type=template&id=f43c0292&scoped=true
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return !_vm.isLoading ? _c('div', {
    staticClass: "form-input"
  }, [_vm._ssrNode("<div class=\"style-box\" data-v-f43c0292>", "</div>", [_vm._ssrNode("<div class=\"color-container mb-2\" data-v-f43c0292><div class=\"title-color\" data-v-f43c0292>\n        Text :\n      </div> <div class=\"flex flex-col\" data-v-f43c0292><div class=\"text-area-custom flex items-center justify-between\"" + _vm._ssrStyle(null, 'height:' + _vm.lineHeight2 + 'px', null) + " data-v-f43c0292><textarea" + _vm._ssrAttr("rows", _vm.lineHeight) + " class=\"text-color\" style=\"margin-left: 0px\" data-v-f43c0292>" + _vm._ssrEscape(_vm._s(_vm.text)) + "</textarea></div></div></div> "), _vm._ssrNode("<div class=\"flex flex-col color-container\" data-v-f43c0292>", "</div>", [_vm._ssrNode("<div class=\"title-color\" data-v-f43c0292>\n        Color :\n      </div> "), _vm._ssrNode("<div class=\"color-card flex items-center\" data-v-f43c0292>", "</div>", [_c('v-swatches', {
    attrs: {
      "swatches": _vm.swatches,
      "row-length": "5",
      "shapes": "squares",
      "swatch-size": "30",
      "show-border": "",
      "popover-x": "right"
    },
    on: {
      "input": function ($event) {
        return _vm.changeData();
      }
    },
    model: {
      value: _vm.color,
      callback: function ($$v) {
        _vm.color = $$v;
      },
      expression: "color"
    }
  }), _vm._ssrNode(" <input disabled=\"disabled\"" + _vm._ssrAttr("value", _vm.color) + " class=\"text-color\" data-v-f43c0292>")], 2)], 2)], 2)]) : _vm._e();
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/form/edit/TextColor.vue?vue&type=template&id=f43c0292&scoped=true

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// EXTERNAL MODULE: external "vue-swatches"
var external_vue_swatches_ = __webpack_require__(120);
var external_vue_swatches_default = /*#__PURE__*/__webpack_require__.n(external_vue_swatches_);

// EXTERNAL MODULE: ./node_modules/vue-swatches/dist/vue-swatches.css
var vue_swatches = __webpack_require__(150);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/form/edit/TextColor.vue?vue&type=script&lang=js



/* harmony default export */ var TextColorvue_type_script_lang_js = ({
  components: {
    VSwatches: external_vue_swatches_default.a
  },
  props: {
    titleForm: {
      default: '',
      type: String
    }
  },

  data() {
    return {
      lineHeight: 3,
      lineHeight2: '100',
      isLoading: true,
      swatches: ['#359EA6', '#473885', '#FABE19', '#F3631B', '#8C2466', '#FFFFFF'],
      color: '#359EA6',
      defaultData: {},
      text: ''
    };
  },

  computed: { ...Object(external_vuex_["mapState"])({
      dataForm: state => {
        return state.creative.dataForm;
      }
    })
  },

  mounted() {
    this.getDetail();
  },

  methods: {
    getDetail() {
      this.isLoading = true;
      this.defaultData = this.dataForm.find(item => item.title === this.titleForm);
      this.text = this.defaultData.default.text;
      this.color = this.defaultData.default.color;

      if (this.defaultData.lineHeight !== undefined) {
        this.lineHeight = Math.ceil(parseFloat(this.defaultData.lineHeight) / 24);
        this.lineHeight2 = this.defaultData.lineHeight + 20;
      }

      this.changeData();
      this.isLoading = false;
    },

    changeData() {
      const payload = {
        color: this.color,
        text: this.text
      };
      const data = {
        title: this.titleForm,
        src: payload,
        type: 'Text_color'
      };
      this.$emit('changeTextColor', data);
    }

  }
});
// CONCATENATED MODULE: ./components/form/edit/TextColor.vue?vue&type=script&lang=js
 /* harmony default export */ var edit_TextColorvue_type_script_lang_js = (TextColorvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/form/edit/TextColor.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(359)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  edit_TextColorvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "f43c0292",
  "f6cf4fba"
  
)

/* harmony default export */ var TextColor = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/form/edit/ColorPallete.vue?vue&type=template&id=21e8ef1d&scoped=true
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return !_vm.isLoading ? _c('div', {
    staticClass: "form-input"
  }, [_vm._ssrNode("<div class=\"style-box\" data-v-21e8ef1d>", "</div>", [_vm._ssrNode("<div class=\"flex flex-col color-container\" data-v-21e8ef1d>", "</div>", [_vm._ssrNode("<div class=\"title-color\" data-v-21e8ef1d>\n        Color :\n      </div> "), _vm._ssrNode("<div class=\"color-card flex items-center\" data-v-21e8ef1d>", "</div>", [_c('v-swatches', {
    attrs: {
      "swatches": _vm.swatches,
      "row-length": "5",
      "shapes": "squares",
      "swatch-size": "30",
      "show-border": "",
      "popover-x": "right"
    },
    on: {
      "input": function ($event) {
        return _vm.changeData();
      }
    },
    model: {
      value: _vm.color,
      callback: function ($$v) {
        _vm.color = $$v;
      },
      expression: "color"
    }
  }), _vm._ssrNode(" <input disabled=\"disabled\"" + _vm._ssrAttr("value", _vm.color) + " class=\"text-color\" data-v-21e8ef1d>")], 2)], 2)])]) : _vm._e();
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/form/edit/ColorPallete.vue?vue&type=template&id=21e8ef1d&scoped=true

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// EXTERNAL MODULE: external "vue-swatches"
var external_vue_swatches_ = __webpack_require__(120);
var external_vue_swatches_default = /*#__PURE__*/__webpack_require__.n(external_vue_swatches_);

// EXTERNAL MODULE: ./node_modules/vue-swatches/dist/vue-swatches.css
var vue_swatches = __webpack_require__(150);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/form/edit/ColorPallete.vue?vue&type=script&lang=js



/* harmony default export */ var ColorPalletevue_type_script_lang_js = ({
  components: {
    VSwatches: external_vue_swatches_default.a
  },
  props: {
    titleForm: {
      default: '',
      type: String
    }
  },

  data() {
    return {
      isLoading: true,
      swatches: ['#359EA6', '#473885', '#FABE19', '#F3631B', '#8C2466'],
      color: '#359EA6',
      defaultData: {},
      text: ''
    };
  },

  computed: { ...Object(external_vuex_["mapState"])({
      dataForm: state => {
        return state.creative.dataForm;
      }
    })
  },

  mounted() {
    this.getDetail();
  },

  methods: {
    getDetail() {
      this.isLoading = true;
      this.defaultData = this.dataForm.find(item => item.title === this.titleForm);
      console.log('edit color palete : ', this.defaultData);
      this.color = this.defaultData.default;
      this.changeData();
      this.isLoading = false;
    },

    changeData() {
      const data = {
        title: this.titleForm,
        src: this.color,
        type: 'Color_pallete'
      };
      this.$emit('changeColorOnly', data);
    }

  }
});
// CONCATENATED MODULE: ./components/form/edit/ColorPallete.vue?vue&type=script&lang=js
 /* harmony default export */ var edit_ColorPalletevue_type_script_lang_js = (ColorPalletevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/form/edit/ColorPallete.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(361)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  edit_ColorPalletevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "21e8ef1d",
  "d5ab79f6"
  
)

/* harmony default export */ var ColorPallete = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/form/edit/Image.vue?vue&type=template&id=2883ab56&scoped=true
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticStyle: {
      "position": "relative"
    }
  }, [_vm.imageUrl ? _vm._ssrNode("<span data-v-2883ab56>", "</span>", [_c('el-upload', {
    staticClass: "upload-demo",
    attrs: {
      "drag": "",
      "action": "",
      "on-change": _vm.handleChange,
      "auto-upload": false,
      "show-file-list": false
    }
  }, [_c('div', {
    staticClass: "image-data"
  }, [_c('div', {
    staticClass: "img-iklan"
  }), _vm._v(" "), _c('div', {
    staticClass: "flex footer-iklan"
  }, [_c('button', {
    staticClass: "flex flex-auto items-center justify-center btn-change no-select",
    attrs: {
      "slot": "trigger"
    },
    slot: "trigger"
  }, [_c('IconRefresh'), _vm._v(" "), _c('span', {
    staticClass: "name-btn"
  }, [_vm._v("Change")])], 1)])])]), _vm._ssrNode(" " + (typeof _vm.dataImageRaw[_vm.indexImage].default === 'string' ? "<div class=\"image-data-2 gradient-pattern\" data-v-2883ab56><img" + _vm._ssrAttr("src", _vm.dataImageRaw[_vm.indexImage].default) + " class=\"img-iklan\" data-v-2883ab56></div>" : "<div class=\"image-data-2 gradient-pattern\" data-v-2883ab56><img" + _vm._ssrAttr("src", _vm.dataUrl) + " class=\"img-iklan\" data-v-2883ab56></div>") + " "), _vm._ssrNode("<div class=\"flex btn-crop justify-center\" data-v-2883ab56>", "</div>", [_c('IconCrop', {
    staticStyle: {
      "height": "16px",
      "width": "15px",
      "margin-top": "1px"
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"flex btn-icon justify-center\" data-v-2883ab56>", "</div>", [_c('IconDelete', {
    staticStyle: {
      "height": "16px",
      "width": "15px",
      "margin-top": "1px"
    }
  })], 1)], 2) : _c('el-upload', {
    staticClass: "upload-demo",
    attrs: {
      "drag": "",
      "action": "",
      "on-change": _vm.handleChange,
      "auto-upload": false,
      "show-file-list": false,
      "before-upload": _vm.beforeAvatarUpload
    }
  }, [_c('div', {
    staticClass: "flex flex-col upload-card pt-4 pb-4 pr-2"
  }, [_c('div', {
    staticClass: "flex items-center"
  }, [_c('img', {
    staticClass: "mr-2 icon-upload",
    attrs: {
      "src": __webpack_require__(176)
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "flex flex-col"
  }, [_c('div', {
    staticClass: "empty-space"
  }, [_vm._v("\n            Upload Image Here\n          ")]), _vm._v(" "), _c('div', {
    staticClass: "upload-name"
  }, [_vm._v("\n            Supported format:"), _c('br'), _vm._v(".jpg, .jpeg .png, .gif, .bmp\n          ")])])]), _vm._v(" "), _c('button', {
    staticClass: "flex items-center justify-center btn-upload no-select"
  }, [_c('IconUpload'), _vm._v(" "), _c('span', {
    staticClass: "name-btn"
  }, [_vm._v("Upload File")])], 1)])])], 1);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/form/edit/Image.vue?vue&type=template&id=2883ab56&scoped=true

// EXTERNAL MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/form/edit/Image.vue?vue&type=script&lang=js
var Imagevue_type_script_lang_js = __webpack_require__(225);

// CONCATENATED MODULE: ./components/form/edit/Image.vue?vue&type=script&lang=js
 /* harmony default export */ var edit_Imagevue_type_script_lang_js = (Imagevue_type_script_lang_js["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/form/edit/Image.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(349)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  edit_Imagevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2883ab56",
  "79ac2b48"
  
)

/* harmony default export */ var Image = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {IconRefresh: __webpack_require__(183).default,IconCrop: __webpack_require__(141).default,IconDelete: __webpack_require__(129).default,IconUpload: __webpack_require__(126).default})


/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_id_1d400a80_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_id_1d400a80_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_id_1d400a80_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_id_1d400a80_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_id_1d400a80_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 465:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(7);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n@font-face{\n  font-family:\"Cabin\";\n\n  src:local(\"Cabin\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\")\n}\n@font-face{\n  font-family:\"Roboto Mono\";\n\n  src:local(\"Roboto Mono\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\")\n}\n.header-1[data-v-1d400a80]{\n  font-size:32px\n}\n.header-1[data-v-1d400a80],.header-2[data-v-1d400a80]{\n  font-family:\"Cabin\";\n  font-weight:600;\n  color:#454545\n}\n.header-2[data-v-1d400a80]{\n  font-size:28px\n}\n.header-3[data-v-1d400a80]{\n  font-size:24px\n}\n.header-3[data-v-1d400a80],.header-4[data-v-1d400a80]{\n  font-family:\"Cabin\";\n  font-weight:600;\n  color:#454545\n}\n.header-4[data-v-1d400a80]{\n  font-size:20px\n}\n.header-5[data-v-1d400a80]{\n  font-size:18px\n}\n.header-5[data-v-1d400a80],.header-6[data-v-1d400a80]{\n  font-family:\"Cabin\";\n  font-weight:600;\n  color:#454545\n}\n.header-6[data-v-1d400a80]{\n  font-size:14px\n}\n.subtitle-1[data-v-1d400a80]{\n  color:#757575\n}\n.subtitle-1[data-v-1d400a80],.subtitle-2[data-v-1d400a80]{\n  font-family:\"Cabin\";\n  font-size:16px;\n  font-weight:400\n}\n.subtitle-2[data-v-1d400a80]{\n  color:#454545\n}\n.no-select[data-v-1d400a80]{\n  -webkit-touch-callout:none;\n  -webkit-user-select:none;\n  -moz-user-select:none;\n  user-select:none\n}\n.mx-icon-double-left[data-v-1d400a80]:after,.mx-icon-double-left[data-v-1d400a80]:before,.mx-icon-double-right[data-v-1d400a80]:after,.mx-icon-double-right[data-v-1d400a80]:before,.mx-icon-left[data-v-1d400a80]:before,.mx-icon-right[data-v-1d400a80]:before{\n  content:\"\";\n  position:relative;\n  top:-1px;\n  display:inline-block;\n  width:10px;\n  height:10px;\n  vertical-align:middle;\n  border-color:currentcolor;\n  border-style:solid;\n  border-width:2px 0 0 2px;\n  border-radius:1px;\n  box-sizing:border-box;\n  transform-origin:center;\n  transform:rotate(-45deg) scale(.7)\n}\n.mx-icon-double-left[data-v-1d400a80]:after{\n  left:-4px\n}\n.mx-icon-double-right[data-v-1d400a80]:before{\n  left:4px\n}\n.mx-icon-double-right[data-v-1d400a80]:after,.mx-icon-double-right[data-v-1d400a80]:before,.mx-icon-right[data-v-1d400a80]:before{\n  transform:rotate(135deg) scale(.7)\n}\n.mx-btn[data-v-1d400a80]{\n  box-sizing:border-box;\n  line-height:1;\n  font-size:14px;\n  font-weight:500;\n  padding:7px 15px;\n  margin:0;\n  cursor:pointer;\n  background-color:transparent;\n  outline:none;\n  border:1px solid rgba(0,0,0,.1);\n  border-radius:4px;\n  color:#73879c;\n  white-space:nowrap\n}\n.mx-btn[data-v-1d400a80]:hover{\n  border-color:#1284e7;\n  color:#1284e7\n}\n.mx-btn.disabled[data-v-1d400a80],.mx-btn[data-v-1d400a80]:disabled{\n  color:#ccc;\n  cursor:not-allowed\n}\n.mx-btn-text[data-v-1d400a80]{\n  border:0;\n  padding:0 4px;\n  text-align:left;\n  line-height:inherit\n}\n.mx-scrollbar[data-v-1d400a80]{\n  height:100%\n}\n.mx-scrollbar:hover .mx-scrollbar-track[data-v-1d400a80]{\n  opacity:1\n}\n.mx-scrollbar-wrap[data-v-1d400a80]{\n  height:100%;\n  overflow-x:hidden;\n  overflow-y:auto\n}\n.mx-scrollbar-track[data-v-1d400a80]{\n  position:absolute;\n  top:2px;\n  right:2px;\n  bottom:2px;\n  width:6px;\n  z-index:1;\n  border-radius:4px;\n  opacity:0;\n  transition:opacity .24s ease-out\n}\n.mx-scrollbar-track .mx-scrollbar-thumb[data-v-1d400a80]{\n  position:absolute;\n  width:100%;\n  height:0;\n  cursor:pointer;\n  border-radius:inherit;\n  background-color:rgba(144,147,153,.3);\n  transition:background-color .3s\n}\n.mx-zoom-in-down-enter-active[data-v-1d400a80],.mx-zoom-in-down-leave-active[data-v-1d400a80]{\n  opacity:1;\n  transform:scaleY(1);\n  transition:transform .3s cubic-bezier(.23,1,.32,1),opacity .3s cubic-bezier(.23,1,.32,1);\n  transform-origin:center top\n}\n.mx-zoom-in-down-enter[data-v-1d400a80],.mx-zoom-in-down-enter-from[data-v-1d400a80],.mx-zoom-in-down-leave-to[data-v-1d400a80]{\n  opacity:0;\n  transform:scaleY(0)\n}\n.mx-datepicker[data-v-1d400a80]{\n  position:relative;\n  display:inline-block;\n  width:210px\n}\n.mx-datepicker svg[data-v-1d400a80]{\n  width:1em;\n  height:1em;\n  vertical-align:-.15em;\n  fill:currentColor;\n  overflow:hidden\n}\n.mx-datepicker-range[data-v-1d400a80]{\n  width:320px\n}\n.mx-datepicker-inline[data-v-1d400a80]{\n  width:auto\n}\n.mx-input-wrapper[data-v-1d400a80]{\n  position:relative\n}\n.mx-input[data-v-1d400a80]{\n  display:inline-block;\n  box-sizing:border-box;\n  width:100%;\n  height:34px;\n  padding:6px 30px 6px 10px;\n  font-size:14px;\n  line-height:1.4;\n  color:#555;\n  background-color:#fff;\n  border:1px solid #ccc;\n  border-radius:4px;\n  box-shadow:inset 0 1px 1px rgba(0,0,0,.075)\n}\n.mx-input[data-v-1d400a80]:focus,.mx-input[data-v-1d400a80]:hover{\n  border-color:#409aff\n}\n.mx-input.disabled[data-v-1d400a80],.mx-input[data-v-1d400a80]:disabled{\n  color:#ccc;\n  background-color:#f3f3f3;\n  border-color:#ccc;\n  cursor:not-allowed\n}\n.mx-input[data-v-1d400a80]:focus{\n  outline:none\n}\n.mx-input[data-v-1d400a80]::-ms-clear{\n  display:none\n}\n.mx-icon-calendar[data-v-1d400a80],.mx-icon-clear[data-v-1d400a80]{\n  position:absolute;\n  top:50%;\n  right:8px;\n  transform:translateY(-50%);\n  font-size:16px;\n  line-height:1;\n  color:rgba(0,0,0,.5);\n  vertical-align:middle\n}\n.mx-icon-clear[data-v-1d400a80]{\n  cursor:pointer\n}\n.mx-icon-clear[data-v-1d400a80]:hover{\n  color:rgba(0,0,0,.8)\n}\n.mx-datepicker-main[data-v-1d400a80]{\n  font:14px/1.5 \"Helvetica Neue\",Helvetica,Arial,\"Microsoft Yahei\",sans-serif;\n  color:#73879c;\n  background-color:#fff;\n  border:1px solid #e8e8e8\n}\n.mx-datepicker-popup[data-v-1d400a80]{\n  position:absolute;\n  margin-top:1px;\n  margin-bottom:1px;\n  box-shadow:0 6px 12px rgba(0,0,0,.175);\n  z-index:2001\n}\n.mx-datepicker-sidebar[data-v-1d400a80]{\n  float:left;\n  box-sizing:border-box;\n  width:100px;\n  padding:6px;\n  overflow:auto\n}\n.mx-datepicker-sidebar+.mx-datepicker-content[data-v-1d400a80]{\n  margin-left:100px;\n  border-left:1px solid #e8e8e8\n}\n.mx-datepicker-body[data-v-1d400a80]{\n  position:relative;\n  -webkit-user-select:none;\n     -moz-user-select:none;\n          user-select:none\n}\n.mx-btn-shortcut[data-v-1d400a80]{\n  line-height:24px\n}\n.mx-range-wrapper[data-v-1d400a80]{\n  display:flex\n}\n@media(max-width:750px){\n.mx-range-wrapper[data-v-1d400a80]{\n    flex-direction:column\n}\n}\n.mx-datepicker-header[data-v-1d400a80]{\n  padding:6px 8px;\n  border-bottom:1px solid #e8e8e8\n}\n.mx-datepicker-footer[data-v-1d400a80]{\n  padding:6px 8px;\n  text-align:right;\n  border-top:1px solid #e8e8e8\n}\n.mx-calendar[data-v-1d400a80]{\n  box-sizing:border-box;\n  width:248px;\n  padding:6px 12px\n}\n.mx-calendar+.mx-calendar[data-v-1d400a80]{\n  border-left:1px solid #e8e8e8\n}\n.mx-calendar-header[data-v-1d400a80],.mx-time-header[data-v-1d400a80]{\n  box-sizing:border-box;\n  height:34px;\n  line-height:34px;\n  text-align:center;\n  overflow:hidden\n}\n.mx-btn-icon-double-left[data-v-1d400a80],.mx-btn-icon-left[data-v-1d400a80]{\n  float:left\n}\n.mx-btn-icon-double-right[data-v-1d400a80],.mx-btn-icon-right[data-v-1d400a80]{\n  float:right\n}\n.mx-calendar-header-label[data-v-1d400a80]{\n  font-size:14px\n}\n.mx-calendar-decade-separator[data-v-1d400a80]{\n  margin:0 2px\n}\n.mx-calendar-decade-separator[data-v-1d400a80]:after{\n  content:\"~\"\n}\n.mx-calendar-content[data-v-1d400a80]{\n  position:relative;\n  height:224px;\n  box-sizing:border-box\n}\n.mx-calendar-content .cell[data-v-1d400a80]{\n  cursor:pointer\n}\n.mx-calendar-content .cell[data-v-1d400a80]:hover{\n  color:#73879c;\n  background-color:rgb(243.15,248.85,253.8)\n}\n.mx-calendar-content .cell.active[data-v-1d400a80]{\n  color:#fff;\n  background-color:#1284e7\n}\n.mx-calendar-content .cell.hover-in-range[data-v-1d400a80],.mx-calendar-content .cell.in-range[data-v-1d400a80]{\n  color:#73879c;\n  background-color:rgb(219.45,236.55,251.4)\n}\n.mx-calendar-content .cell.disabled[data-v-1d400a80]{\n  cursor:not-allowed;\n  color:#ccc;\n  background-color:#f3f3f3\n}\n.mx-calendar-week-mode .mx-date-row[data-v-1d400a80]{\n  cursor:pointer\n}\n.mx-calendar-week-mode .mx-date-row[data-v-1d400a80]:hover{\n  background-color:rgb(243.15,248.85,253.8)\n}\n.mx-calendar-week-mode .mx-date-row.mx-active-week[data-v-1d400a80]{\n  background-color:rgb(219.45,236.55,251.4)\n}\n.mx-calendar-week-mode .mx-date-row .cell.active[data-v-1d400a80],.mx-calendar-week-mode .mx-date-row .cell[data-v-1d400a80]:hover{\n  color:inherit;\n  background-color:transparent\n}\n.mx-week-number[data-v-1d400a80]{\n  opacity:.5\n}\n.mx-table[data-v-1d400a80]{\n  table-layout:fixed;\n  border-collapse:separate;\n  border-spacing:0;\n  width:100%;\n  height:100%;\n  box-sizing:border-box;\n  text-align:center\n}\n.mx-table th[data-v-1d400a80]{\n  font-weight:500\n}\n.mx-table td[data-v-1d400a80],.mx-table th[data-v-1d400a80]{\n  padding:0;\n  vertical-align:middle\n}\n.mx-table-date td[data-v-1d400a80],.mx-table-date th[data-v-1d400a80]{\n  font-size:12px\n}\n.mx-table-date .today[data-v-1d400a80]{\n  color:rgb(41.7,144.3,233.4)\n}\n.mx-table-date .cell.not-current-month[data-v-1d400a80]{\n  color:#ccc;\n  background:none\n}\n.mx-time[data-v-1d400a80]{\n  flex:1;\n  width:224px;\n  background:#fff\n}\n.mx-time+.mx-time[data-v-1d400a80]{\n  border-left:1px solid #e8e8e8\n}\n.mx-calendar-time[data-v-1d400a80]{\n  position:absolute;\n  top:0;\n  left:0;\n  width:100%;\n  height:100%\n}\n.mx-time-header[data-v-1d400a80]{\n  border-bottom:1px solid #e8e8e8\n}\n.mx-time-content[data-v-1d400a80]{\n  height:224px;\n  box-sizing:border-box;\n  overflow:hidden\n}\n.mx-time-columns[data-v-1d400a80]{\n  display:flex;\n  width:100%;\n  height:100%;\n  overflow:hidden\n}\n.mx-time-column[data-v-1d400a80]{\n  flex:1;\n  position:relative;\n  border-left:1px solid #e8e8e8;\n  text-align:center\n}\n.mx-time-column[data-v-1d400a80]:first-child{\n  border-left:0\n}\n.mx-time-column .mx-time-list[data-v-1d400a80]{\n  margin:0;\n  padding:0;\n  list-style:none\n}\n.mx-time-column .mx-time-list[data-v-1d400a80]:after{\n  content:\"\";\n  display:block;\n  height:192px\n}\n.mx-time-column .mx-time-item[data-v-1d400a80]{\n  cursor:pointer;\n  font-size:12px;\n  height:32px;\n  line-height:32px\n}\n.mx-time-column .mx-time-item[data-v-1d400a80]:hover{\n  color:#73879c;\n  background-color:rgb(243.15,248.85,253.8)\n}\n.mx-time-column .mx-time-item.active[data-v-1d400a80]{\n  color:#1284e7;\n  background-color:transparent;\n  font-weight:700\n}\n.mx-time-column .mx-time-item.disabled[data-v-1d400a80]{\n  cursor:not-allowed;\n  color:#ccc;\n  background-color:#f3f3f3\n}\n.mx-time-option[data-v-1d400a80]{\n  cursor:pointer;\n  padding:8px 10px;\n  font-size:14px;\n  line-height:20px\n}\n.mx-time-option[data-v-1d400a80]:hover{\n  color:#73879c;\n  background-color:rgb(243.15,248.85,253.8)\n}\n.mx-time-option.active[data-v-1d400a80]{\n  color:#1284e7;\n  background-color:transparent;\n  font-weight:700\n}\n.mx-time-option.disabled[data-v-1d400a80]{\n  cursor:not-allowed;\n  color:#ccc;\n  background-color:#f3f3f3\n}\n.el-input .el-input__inner[data-v-1d400a80]:focus,.el-range-editor.is-active[data-v-1d400a80],.el-range-editor.is-active[data-v-1d400a80]:hover,.el-select .el-input.is-focus .el-input__inner[data-v-1d400a80],.el-select .el-input__inner[data-v-1d400a80]:focus,.el-textarea .el-input__inner[data-v-1d400a80]:focus{\n  border:1.3px solid #1b63d4!important;\n  box-shadow:0 2px 10px rgba(187,209,243,.5)\n}\n.mx-input[data-v-1d400a80]{\n  height:40px!important\n}\n.mx-datepicker-sidebar[data-v-1d400a80]{\n  width:151px!important\n}\n.mx-table-date td[data-v-1d400a80],.mx-table-date th[data-v-1d400a80]{\n  height:32px;\n  font-size:14px!important\n}\n.mx-btn-shortcut[data-v-1d400a80]{\n  display:block;\n  padding:0 6px;\n  line-height:30px!important\n}\n[data-v-1d400a80]:root{\n  --vs-line-height:1.6\n}\n.btn-popover[data-v-1d400a80]{\n  height:40px;\n  background-color:#fff;\n  width:100%;\n  padding:10px;\n  cursor:pointer\n}\n.btn-popover .title-1[data-v-1d400a80]{\n  font-weight:400;\n  font-size:16px;\n  color:#454545;\n  margin-left:10px\n}\n.btn-popover[data-v-1d400a80]:hover{\n  background-color:#f3f4f6\n}\n.el-popover[data-v-1d400a80]{\n  padding:0!important;\n  border-radius:5px!important\n}\n.el-upload[data-v-1d400a80]{\n  width:100%\n}\n.el-upload-dragger[data-v-1d400a80]{\n  width:100%!important;\n  background:linear-gradient(0deg,rgba(33,150,243,.03),rgba(33,150,243,.03)),#fff!important;\n  border:1px dashed transparent!important;\n  border-radius:5px!important;\n  height:100%!important\n}\n.kg-popup[data-v-1d400a80]{\n  transition:all .5s ease-in-out;\n  position:fixed;\n  top:0;\n  left:50%;\n  transform:translateX(-50%)\n}\n.noselect[data-v-1d400a80]{\n  -webkit-touch-callout:none;\n  -webkit-user-select:none;\n  -moz-user-select:none;\n  user-select:none\n}\n.ProseMirror[data-v-1d400a80]{\n  border:0;\n  outline:none\n}\n.ProseMirror>*+*[data-v-1d400a80]{\n  margin-top:.75em\n}\n.ProseMirror ol[data-v-1d400a80],.ProseMirror ul[data-v-1d400a80]{\n  padding:0 1rem\n}\n.ProseMirror h1[data-v-1d400a80],.ProseMirror h2[data-v-1d400a80],.ProseMirror h3[data-v-1d400a80],.ProseMirror h4[data-v-1d400a80],.ProseMirror h5[data-v-1d400a80],.ProseMirror h6[data-v-1d400a80]{\n  line-height:1.1\n}\n.ProseMirror code[data-v-1d400a80]{\n  background-color:rgba(97,97,97,.1);\n  color:#616161\n}\n.ProseMirror pre[data-v-1d400a80]{\n  background:#0d0d0d;\n  color:#fff;\n  font-family:\"JetBrainsMono\",monospace;\n  padding:.75rem 1rem;\n  border-radius:.5rem\n}\n.ProseMirror pre code[data-v-1d400a80]{\n  color:inherit;\n  padding:0;\n  background:none;\n  font-size:.8rem\n}\n.ProseMirror img[data-v-1d400a80]{\n  max-width:100%;\n  height:auto\n}\n.ProseMirror blockquote[data-v-1d400a80]{\n  padding-left:1rem;\n  border-left:2px solid rgba(13,13,13,.1)\n}\n.ProseMirror hr[data-v-1d400a80]{\n  border:none;\n  border-top:2px solid rgba(13,13,13,.1);\n  margin:2rem 0\n}\n.ProseMirror[data-v-1d400a80]:focus-visible{\n  outline:none\n}\n.el-color-picker__trigger[data-v-1d400a80]{\n  border:0!important;\n  padding:0!important;\n  outline:none!important\n}\n.el-color-picker__icon[data-v-1d400a80]{\n  visibility:hidden!important\n}\n.el-color-picker--mini .el-color-picker__trigger[data-v-1d400a80],.el-color-picker__color[data-v-1d400a80]{\n  height:22px!important;\n  width:22px!important\n}\n.el-color-picker__color[data-v-1d400a80]{\n  padding:0!important;\n  border:0!important\n}\n.el-color-picker__empty[data-v-1d400a80]{\n  padding-top:1.4px!important\n}\n.el-color-picker--mini[data-v-1d400a80]{\n  height:22px!important\n}\n.el-color-picker__color-inner[data-v-1d400a80]{\n  border:1px solid #e2e2e2!important\n}\n.el-table thead[data-v-1d400a80]{\n  color:#5c6b7a!important;\n  font-family:\"Cabin\"!important\n}\n.el-table thead[data-v-1d400a80],.th[data-v-1d400a80]{\n  font-weight:600!important\n}\n.el-button--mini[data-v-1d400a80],.el-button--text[data-v-1d400a80],.el-date-range-picker__header div[data-v-1d400a80],.el-date-table td span[data-v-1d400a80],.el-input__inner[data-v-1d400a80],.el-picker-panel__shortcut[data-v-1d400a80],.el-select-dropdown__item[data-v-1d400a80],.el-select-dropdown__item.hover[data-v-1d400a80],.el-select-dropdown__item[data-v-1d400a80]:hover,.el-time-spinner__item[data-v-1d400a80]{\n  font-family:\"Cabin\"!important\n}\n.el-progress-bar__inner[data-v-1d400a80],.el-progress-bar__outer[data-v-1d400a80]{\n  border-bottom-left-radius:100px!important;\n  border-top-left-radius:100px!important\n}\n.el-dropdown .el-dropdown__caret-button[data-v-1d400a80]{\n  bottom:2px!important\n}\n.el-dropdown-menu[data-v-1d400a80],.el-dropdown-menu__item[data-v-1d400a80]{\n  padding:0!important\n}\nbutton[data-v-1d400a80]:active,button[data-v-1d400a80]:focus{\n  outline:0!important\n}\n.el-input-group__append[data-v-1d400a80]{\n  padding:0!important\n}\n.el-input-group__prepend[data-v-1d400a80]{\n  padding-left:5px!important;\n  padding-right:5px!important\n}\n.el-menu-item[data-v-1d400a80],.el-submenu__title[data-v-1d400a80]{\n  height:40px!important;\n  line-height:40px!important;\n  font-family:\"Cabin\"!important;\n  font-size:16px!important;\n  font-style:normal!important;\n  font-weight:400!important;\n  color:#5c6b7a!important;\n  margin-bottom:10px!important;\n  border-left:4px solid transparent!important\n}\n.el-menu-item.is-active[data-v-1d400a80]{\n  color:#1b63d4!important;\n  font-weight:600!important;\n  border-left:4px solid #1b63d4!important;\n  border-top-left-radius:2px!important;\n  border-bottom-left-radius:2px!important\n}\n.el-menu--collapse[data-v-1d400a80]{\n  width:80px!important\n}\n.el-menu[data-v-1d400a80]{\n  border-right:0!important\n}\n.el-dialog__body[data-v-1d400a80],.el-dialog__header[data-v-1d400a80]{\n  padding:0!important\n}\n.el-dialog[data-v-1d400a80]{\n  border-radius:10px!important\n}\n.card-dialog[data-v-1d400a80]{\n  padding:20px!important\n}\n.vue-swatches__trigger[data-v-1d400a80]{\n  width:22px!important;\n  height:22px!important;\n  border-radius:2px!important\n}\n.vue-swatches[data-v-1d400a80]{\n  height:22px!important\n}\n.CodeMirror[data-v-1d400a80]{\n  height:calc(100vh - 150px)!important\n}\n.vue-swatches__trigger[data-v-1d400a80]{\n  border:1px solid #e2e2e2!important\n}\n.iframe-card[data-v-1d400a80]{\n  height:250px;\n  width:300px\n}\n.thumbnail-video[data-v-1d400a80]{\n  position:relative\n}\n.thumbnail-video .linear-background[data-v-1d400a80]{\n  position:absolute;\n  top:0;\n  z-index:10;\n  width:100%;\n  height:100%;\n  background-color:#0845a4\n}\n.thumbnail-video .thumbnail-image[data-v-1d400a80]{\n  position:absolute;\n  top:0;\n  z-index:9;\n  -o-object-fit:cover;\n     object-fit:cover;\n  width:100%;\n  height:100%;\n  background:#000\n}\n.thumbnail-video .play-btn[data-v-1d400a80]{\n  height:200px;\n  width:200px;\n  cursor:pointer;\n  border-radius:50%;\n  background:hsla(0,0%,100%,.7);\n  position:absolute;\n  z-index:11\n}\n.thumbnail-video .play-btn .icon-play[data-v-1d400a80]{\n  height:85px;\n  width:85px;\n  margin-left:18px\n}\n.thumbnail-video .play-btn[data-v-1d400a80]:hover{\n  opacity:.8\n}\n.iframe-align[data-v-1d400a80]{\n  margin-top:10px;\n  transform:scale(.32);\n  transform-origin:top center;\n  position:relative;\n  left:-35px\n}\n.center-iframe[data-v-1d400a80]{\n  margin-top:50px;\n  transform:scale(.5);\n  transform-origin:top center\n}\n.left-iframe[data-v-1d400a80]{\n  margin-top:10px;\n  transform:scale(.5);\n  transform-origin:top left;\n  position:relative;\n  left:35px\n}\n.center-iframe-2[data-v-1d400a80]{\n  position:relative;\n  margin-top:60px;\n  transform:scale(.6);\n  left:-120px!important;\n  transform-origin:top center\n}\n.dropdown-action[data-v-1d400a80]{\n  width:160px;\n  cursor:pointer;\n  font-family:\"Cabin\";\n  font-style:normal;\n  font-weight:400;\n  font-size:14px;\n  color:#1b63d4;\n  height:40px;\n  background:#fff;\n  border:solid #c3ced9;\n  border-width:1px 1px 0;\n  border-radius:5px 5px 0 0\n}\n.dropdown-action .icon-item[data-v-1d400a80]{\n  margin-right:13px\n}\n.dropdown-action[data-v-1d400a80]:hover{\n  background-color:#f3f4f6\n}\n.title-dropdown[data-v-1d400a80]{\n  font-weight:700;\n  font-size:14px;\n  color:#1b63d4\n}\n.kg-container .header-content[data-v-1d400a80]{\n  position:fixed;\n  top:0;\n  padding:0 30px;\n  border-bottom:1px solid #c3ced9;\n  height:75px\n}\n.kg-container .header-content .made-in[data-v-1d400a80]{\n  font-weight:400;\n  font-size:12px;\n  color:#333\n}\n.kg-container .header-content .made-in .logo-unimind[data-v-1d400a80]{\n  width:95px;\n  margin-left:5px\n}\n.kg-container .header-content .btn-refresh[data-v-1d400a80]{\n  margin-right:10px;\n  width:40px;\n  background:#fff;\n  border:1px solid #e2e2e2;\n  border-radius:5px;\n  height:40px;\n  cursor:pointer\n}\n.kg-container .header-content .btn-refresh[data-v-1d400a80]:hover{\n  background-color:#f3f4f6;\n  border:1px solid transparent\n}\n.kg-container .preview[data-v-1d400a80]{\n  background:#fafbfc\n}\n.kg-container .preview .box-container[data-v-1d400a80]{\n  width:300px;\n  height:600px;\n  background:#fff;\n  border:1px solid #e2e2e2;\n  margin-bottom:20px\n}\n.kg-container .preview .box-container .img-empty[data-v-1d400a80]{\n  opacity:.5\n}\n.kg-container .preview .box-container .img-data[data-v-1d400a80]{\n  width:100%;\n  height:100%;\n  -o-object-fit:none;\n     object-fit:none;\n  -o-object-position:left top;\n     object-position:left top\n}\n.kg-container .preview .box-container .title-1[data-v-1d400a80]{\n  font-weight:600;\n  font-size:20px;\n  color:#454545;\n  margin-top:18px;\n  margin-bottom:5px;\n  text-align:center;\n  padding-left:20px;\n  padding-right:20px\n}\n.kg-container .preview .box-container .subtitle-1[data-v-1d400a80]{\n  font-style:italic;\n  font-weight:400;\n  font-size:12px;\n  color:#9a9a9a;\n  text-align:center;\n  padding-left:20px;\n  padding-right:20px;\n  padding-bottom:20px\n}\n.kg-container .preview .btn-save[data-v-1d400a80]{\n  max-width:125px;\n  background:#fff;\n  border:1px solid #e2e2e2;\n  border-radius:5px;\n  height:36px;\n  padding-left:15px;\n  padding-right:15px;\n  cursor:pointer\n}\n.kg-container .preview .btn-save .name-btn[data-v-1d400a80]{\n  font-weight:700;\n  font-size:14px;\n  padding-bottom:1px;\n  color:#1b63d4;\n  padding-left:10px\n}\n.kg-container .preview .btn-save[data-v-1d400a80]:hover{\n  background-color:#f3f4f6;\n  border:1px solid transparent\n}\n.kg-container .panel-customize[data-v-1d400a80]{\n  width:360px;\n  height:100vh;\n  display:flex;\n  flex-direction:column;\n  justify-content:center;\n  background:#f8f8f8;\n  border:1px solid #e2e2e2;\n  box-shadow:0 0 12px rgba(51,51,51,.1);\n  transform:translateX(0);\n  transition-duration:.2s;\n  transition-timing-function:cubic-bezier(.4,0,.2,1);\n  transition-property:transform,visibility,width\n}\n.kg-container .panel-customize .back-btn[data-v-1d400a80]{\n  width:100%;\n  height:40px;\n  background:#fff;\n  padding-left:20px;\n  font-weight:700;\n  font-size:14px;\n  color:#1b63d4;\n  cursor:pointer\n}\n.kg-container .panel-customize .back-btn[data-v-1d400a80]:hover{\n  background:#f8f8f8\n}\n.kg-container .panel-customize .header-panel[data-v-1d400a80]{\n  margin-bottom:10px;\n  padding:15px;\n  border-top:1px solid #e2e2e2;\n  background:#fff;\n  border-bottom:1px solid #e2e2e2\n}\n.kg-container .panel-customize .header-panel .back-button[data-v-1d400a80]{\n  width:40px;\n  margin-right:10px;\n  height:40px;\n  background:#fff;\n  border:1px solid #e2e2e2;\n  border-radius:5px;\n  cursor:pointer\n}\n.kg-container .panel-customize .header-panel .back-button[data-v-1d400a80]:hover{\n  background-color:#f3f4f6\n}\n.kg-container .panel-customize .header-panel .title-header[data-v-1d400a80]{\n  font-weight:400;\n  font-size:12px;\n  color:#9a9a9a\n}\n.kg-container .panel-customize .header-panel .sub-header[data-v-1d400a80]{\n  font-weight:500;\n  font-size:16px;\n  color:#333\n}\n.kg-container .panel-customize .body-panel[data-v-1d400a80]{\n  overflow-y:scroll\n}\n.kg-container .panel-customize .body-panel .card-box[data-v-1d400a80]{\n  width:100%;\n  padding:15px;\n  background:#fff;\n  border-top:1px solid #e2e2e2;\n  border-bottom:1px solid #e2e2e2;\n  border-left:2px solid transparent;\n  margin-bottom:10px\n}\n.kg-container .panel-customize .body-panel .card-box .header-card[data-v-1d400a80]{\n  margin-bottom:22px;\n  font-weight:500;\n  font-size:16px;\n  color:#454545\n}\n.kg-container .panel-customize .body-panel .card-box .form-panel[data-v-1d400a80]{\n  padding:0;\n  background:#fff;\n  position:relative\n}\n.kg-container .panel-customize .body-panel .card-box .form-panel .card-assets .item-assets[data-v-1d400a80]{\n  padding:2px 12px;\n  background:#fff;\n  border:1px solid #e2e2e2;\n  font-size:14px;\n  border-radius:500px;\n  color:#1b63d4;\n  width:-moz-fit-content;\n  width:fit-content;\n  cursor:pointer;\n  margin-right:4px;\n  margin-bottom:10px\n}\n.kg-container .panel-customize .body-panel .card-box .form-panel .card-assets .item-active[data-v-1d400a80]{\n  background:#1b63d4;\n  border:1px solid #1b63d4;\n  color:#fff\n}\n.kg-container .panel-customize .body-panel .card-box .form-panel .card-assets[data-v-1d400a80]::-webkit-scrollbar{\n  width:0;\n  height:0\n}\n.kg-container .panel-customize .body-panel .card-box .form-panel .image-data-2[data-v-1d400a80]{\n  position:absolute;\n  top:16px;\n  width:266px;\n  left:16px\n}\n.kg-container .panel-customize .body-panel .card-box .form-panel .image-data-2 .img-iklan[data-v-1d400a80]{\n  height:135px;\n  border-radius:5px 5px 0 0;\n  -o-object-fit:cover;\n     object-fit:cover;\n  width:100%\n}\n.kg-container .panel-customize .body-panel .card-box .form-panel .btn-icon[data-v-1d400a80]{\n  height:40px;\n  padding:10px;\n  width:40px;\n  position:absolute;\n  bottom:33px;\n  right:26px;\n  background:#fff;\n  border:1px solid #e2e2e2;\n  border-radius:5px;\n  margin-left:10px;\n  cursor:pointer\n}\n.kg-container .panel-customize .body-panel .card-box .form-panel .btn-icon[data-v-1d400a80]:hover{\n  background-color:#f3f4f6\n}\n.kg-container .panel-customize .body-panel .card-box .form-panel .image-data[data-v-1d400a80]{\n  background:#fff;\n  border:1px solid #e2e2e2;\n  border-radius:5px;\n  padding-bottom:10px\n}\n.kg-container .panel-customize .body-panel .card-box .form-panel .image-data .img-iklan[data-v-1d400a80]{\n  height:135px;\n  border-radius:5px 5px 0 0;\n  -o-object-fit:cover;\n     object-fit:cover;\n  width:100%\n}\n.kg-container .panel-customize .body-panel .card-box .form-panel .image-data .footer-iklan[data-v-1d400a80]{\n  padding-left:10px;\n  width:205px;\n  margin-top:10px\n}\n.kg-container .panel-customize .body-panel .card-box .form-panel .image-data .footer-iklan .btn-change[data-v-1d400a80]{\n  background:#fff;\n  border:1px solid #e2e2e2;\n  border-radius:5px;\n  height:40px;\n  padding-left:15px;\n  padding-right:15px;\n  cursor:pointer\n}\n.kg-container .panel-customize .body-panel .card-box .form-panel .image-data .footer-iklan .btn-change .name-btn[data-v-1d400a80]{\n  font-weight:700;\n  font-size:14px;\n  padding-bottom:1px;\n  color:#1b63d4;\n  padding-left:10px\n}\n.kg-container .panel-customize .body-panel .card-box .form-panel .image-data .footer-iklan .btn-change[data-v-1d400a80]:hover{\n  background-color:#f3f4f6;\n  border:1px solid transparent\n}\n.kg-container .panel-customize .body-panel .card-box .form-panel .box-form[data-v-1d400a80]{\n  margin-bottom:10px\n}\n.kg-container .panel-customize .body-panel .card-box .form-panel .box-form .title-form[data-v-1d400a80]{\n  font-weight:400;\n  font-size:16px;\n  color:#454545;\n  margin-bottom:3px\n}\n.kg-container .panel-customize .body-panel .card-box .form-panel .upload-demo[data-v-1d400a80],.kg-container .panel-customize .body-panel .card-box .form-panel .upload-demo .el-upload[data-v-1d400a80]{\n  width:100%\n}\n.kg-container .panel-customize .body-panel .card-box .form-panel .upload-card[data-v-1d400a80]{\n  height:100%;\n  border:1px dashed #1b63d4\n}\n.kg-container .panel-customize .body-panel .card-box .form-panel .upload-card .icon-upload[data-v-1d400a80]{\n  height:45.5px;\n  padding-left:15px;\n  margin-right:8px\n}\n.kg-container .panel-customize .body-panel .card-box .form-panel .upload-card .empty-space[data-v-1d400a80]{\n  font-weight:700;\n  font-size:14px;\n  text-align:left;\n  color:#333\n}\n.kg-container .panel-customize .body-panel .card-box .form-panel .upload-card .upload-name[data-v-1d400a80]{\n  font-weight:400;\n  font-size:12px;\n  text-align:left;\n  color:#757575\n}\n.kg-container .panel-customize .body-panel .card-box .form-panel .upload-card .btn-upload[data-v-1d400a80]{\n  width:90%;\n  margin-left:auto;\n  margin-right:auto;\n  background:#fff;\n  border:1px solid #1b63d4;\n  color:#1b63d4;\n  border-radius:5px;\n  height:34px;\n  margin-top:20px;\n  cursor:pointer\n}\n.kg-container .panel-customize .body-panel .card-box .form-panel .upload-card .btn-upload .name-btn[data-v-1d400a80]{\n  font-weight:700;\n  font-size:14px;\n  color:#1b63d4;\n  padding-left:10px\n}\n.kg-container .panel-customize .body-panel .card-box .form-panel .upload-card .btn-upload[data-v-1d400a80]:hover{\n  background-color:#f3f4f6;\n  border:0\n}\n.kg-container .panel-customize .body-panel .card-box .component-card[data-v-1d400a80]{\n  background:#fff;\n  border:1px solid #e2e2e2;\n  margin-bottom:10px\n}\n.kg-container .panel-customize .body-panel .card-box .component-card .header-component[data-v-1d400a80]{\n  border-bottom:1px solid #e2e2e2;\n  height:48px;\n  padding-left:15px;\n  padding-right:15px;\n  font-weight:500;\n  font-size:16px;\n  color:#333\n}\n.kg-container .panel-customize .body-panel .card-box .component-card .header-component .icon-header[data-v-1d400a80]{\n  margin-right:10px\n}\n.kg-container .panel-customize .body-panel .card-box .component-card .header-component .btn-preview[data-v-1d400a80]{\n  cursor:pointer\n}\n.kg-container .panel-customize .body-panel .card-box .component-card .body-component[data-v-1d400a80]{\n  padding:10px 15px\n}\n.kg-container .panel-customize .footer-panel[data-v-1d400a80]{\n  bottom:0;\n  position:fixed;\n  width:100%\n}\n.kg-container .panel-customize .footer-panel .hide-panel[data-v-1d400a80]{\n  height:40px;\n  background:#fff;\n  width:inherit;\n  cursor:pointer;\n  padding-right:15px;\n  padding-left:15px\n}\n.kg-container .panel-customize .footer-panel .hide-panel .hide-text[data-v-1d400a80]{\n  font-weight:700;\n  font-size:14px;\n  color:#1b63d4\n}\n.kg-container .panel-customize .footer-panel .hide-panel[data-v-1d400a80]:hover{\n  background:#f8f8f8\n}\n.kg-container .panel-customize .footer-panel .box-action[data-v-1d400a80]{\n  height:70px;\n  background:#fff;\n  width:inherit;\n  border-top:1px solid #e2e2e2\n}\n.kg-container .panel-hide[data-v-1d400a80]{\n  width:50px;\n  height:100vh;\n  background:#f8f8f8;\n  border:1px solid #e2e2e2;\n  box-shadow:0 0 12px rgba(51,51,51,.1);\n  transform:translateX(0);\n  transition-duration:.2s;\n  transition-timing-function:cubic-bezier(.4,0,.2,1);\n  transition-property:transform,visibility,width\n}\n.kg-container .panel-hide .btn-show[data-v-1d400a80]{\n  width:100%;\n  height:40px;\n  background:#fff;\n  border-bottom:1px solid #e2e2e2;\n  cursor:pointer\n}\n.kg-container .panel-hide .btn-show[data-v-1d400a80]:hover{\n  background:#f8f8f8\n}\n.kg-container .panel-hide .name-panel[data-v-1d400a80]{\n  font-weight:600;\n  font-size:14px;\n  letter-spacing:.05em;\n  text-transform:uppercase;\n  color:#757575;\n  width:107px;\n  transform:rotate(-90deg);\n  white-space:nowrap;\n  overflow:hidden\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/creative/edit/_edit.vue?vue&type=template&id=1d400a80&scoped=true
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "kg-container flex"
  }, [_vm._ssrNode("<div class=\"header-content flex items-center justify-between\"" + _vm._ssrStyle(null, _vm.showPanel ? 'width:calc(100% - 360px)' : 'width:calc(100% - 50px)', null) + " data-v-1d400a80>", "</div>", [_vm._ssrNode("<div class=\"flex items-center made-in\" data-v-1d400a80>\n      Made with\n      <img" + _vm._ssrAttr("src", __webpack_require__(47)) + " class=\"logo-unimind\" data-v-1d400a80></div> "), _vm._ssrNode("<div class=\"flex items-center\" data-v-1d400a80>", "</div>", [_vm._ssrNode("<div class=\"flex items-center justify-center btn-refresh no-select\" data-v-1d400a80>", "</div>", [_c('IconReload')], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"flex items-center justify-center btn-refresh no-select\" style=\"margin-right: 0px\" data-v-1d400a80>", "</div>", [_c('IconInfo', {
    attrs: {
      "bg-color": "#757575"
    }
  })], 1)], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"preview flex-auto flex flex-col items-center justify-center\" data-v-1d400a80>", "</div>", [!_vm.isLoadingDetail ? _vm._ssrNode("<span" + _vm._ssrStyle(null, _vm.type === 'video' && _vm.showZoom ? 'height:670px;max-width:1000px;' : '', null) + " data-v-1d400a80>", "</span>", [_vm._ssrNode((_vm.type === 'rmb' ? "<span data-v-1d400a80><iframe id=\"edit-iframe\" contenteditable=\"true\"" + _vm._ssrAttr("src", _vm.staticSrc) + _vm._ssrStyle({
    "margin-bottom": "20px"
  }, 'height: ' + _vm.resolution.height + 'px;width: ' + _vm.resolution.width + 'px;', null) + " data-v-1d400a80></iframe></span>" : "<!---->") + " "), _vm.type === 'video' ? _vm._ssrNode("<div style=\"height: 100%\" data-v-1d400a80>", "</div>", [!_vm.showIframe ? _vm._ssrNode("<div" + _vm._ssrClass("thumbnail-video flex items-center justify-center", _vm.showZoom ? _vm.alignCenter : '') + _vm._ssrStyle(null, 'height: ' + _vm.resolution.height + 'px;width: ' + _vm.resolution.width + 'px;', null) + " data-v-1d400a80>", "</div>", [_vm._ssrNode("<div class=\"linear-background\" data-v-1d400a80></div> <div class=\"thumbnail-image\" data-v-1d400a80></div> "), _vm._ssrNode("<div class=\"play-btn flex items-center justify-center\" data-v-1d400a80>", "</div>", [_c('IconPlayV2', {
    staticClass: "icon-play",
    attrs: {
      "bg-color": "#0056DE"
    }
  })], 1)], 2) : _vm._ssrNode("<iframe id=\"edit-iframe\" contenteditable=\"true\"" + _vm._ssrAttr("src", _vm.staticSrc) + " scrolling=\"no\"" + _vm._ssrClass(null, _vm.showZoom ? _vm.alignCenter : '') + _vm._ssrStyle(null, 'height: ' + _vm.resolution.height + 'px;width: ' + _vm.resolution.width + 'px;', null) + " data-v-1d400a80></iframe>")]) : _vm._e(), _vm._ssrNode(" " + (_vm.type === 'display' ? "<span style=\"margin-bottom: 20px\" data-v-1d400a80>" + (typeof _vm.dataImageRaw[0].default === 'string' ? "<img" + _vm._ssrAttr("src", _vm.dataImageRaw[0].default) + " data-v-1d400a80>" : "<img" + _vm._ssrAttr("src", _vm.dataUrl) + " data-v-1d400a80>") + "</span>" : "<!---->"))], 2) : _c('el-skeleton', {
    staticClass: "mb-4",
    staticStyle: {
      "width": "240px"
    },
    attrs: {
      "animated": ""
    }
  }, [_c('template', {
    slot: "template"
  }, [_c('el-skeleton-item', {
    staticStyle: {
      "width": "240px",
      "height": "270px"
    },
    attrs: {
      "variant": "image"
    }
  }), _vm._v(" "), _c('div', {
    staticStyle: {
      "padding": "5px"
    }
  }, [_c('div', {
    staticStyle: {
      "display": "flex",
      "align-items": "center",
      "justify-items": "space-between",
      "margin-top": "16px",
      "height": "16px"
    }
  }, [_c('el-skeleton-item', {
    staticStyle: {
      "margin-right": "16px"
    },
    attrs: {
      "variant": "text"
    }
  }), _vm._v(" "), _c('el-skeleton-item', {
    staticStyle: {
      "width": "30%"
    },
    attrs: {
      "variant": "text"
    }
  })], 1)])], 1)], 2)], 1), _vm._ssrNode(" "), _c('transition', {
    attrs: {
      "name": "slide"
    }
  }, [_vm.showPanel ? _c('div', {
    staticClass: "panel-customize flex flex-col"
  }, [_c('div', {
    staticClass: "header-panel flex flex-col justify-start"
  }, [_c('div', {
    staticClass: "title-header"
  }, [_vm._v("Chosen template")]), _vm._v(" "), _c('div', {
    staticClass: "sub-header"
  }, [_vm._v("\n          " + _vm._s(_vm.templateName) + "\n        ")])]), _vm._v(" "), _c('div', {
    staticClass: "body-panel"
  }, [_c('div', {
    staticClass: "card-box flex flex-col"
  }, [_c('div', {
    staticClass: "flex header-card items-center"
  }, [_c('IconInfo', {
    staticClass: "mr-3"
  }), _vm._v("Basic Properties\n          ")], 1), _vm._v(" "), _c('div', {
    staticClass: "form-panel"
  }, [_c('div', {
    staticClass: "flex flex-col box-form"
  }, [_c('div', {
    staticClass: "title-form"
  }, [_vm._v("Creative Name")]), _vm._v(" "), _c('el-input', {
    model: {
      value: _vm.name,
      callback: function ($$v) {
        _vm.name = $$v;
      },
      expression: "name"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "flex flex-col box-form"
  }, [_c('div', {
    staticClass: "title-form"
  }, [_vm._v("Dimension")]), _vm._v(" "), _c('el-select', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "placeholder": "Choose Dimension"
    },
    on: {
      "change": function ($event) {
        return _vm.getTemplateDetail();
      }
    },
    model: {
      value: _vm.selectedResolution,
      callback: function ($$v) {
        _vm.selectedResolution = $$v;
      },
      expression: "selectedResolution"
    }
  }, _vm._l(_vm.dataResolution, function (item) {
    return _c('el-option', {
      key: item.id,
      attrs: {
        "label": item.name,
        "value": item.id
      }
    });
  }), 1)], 1), _vm._v(" "), _vm.type !== 'video' ? _c('div', {
    staticClass: "flex flex-col box-form"
  }, [_c('div', {
    staticClass: "title-form"
  }, [_vm._v("URL")]), _vm._v(" "), _c('el-input', {
    on: {
      "change": function ($event) {
        return _vm.sendToIframe();
      }
    },
    model: {
      value: _vm.url,
      callback: function ($$v) {
        _vm.url = $$v;
      },
      expression: "url"
    }
  })], 1) : _vm._e(), _vm._v(" "), _vm.youtubeId !== null ? _c('div', {
    staticClass: "flex flex-col box-form"
  }, [_c('div', {
    staticClass: "title-form"
  }, [_vm._v("Youtube ID")]), _vm._v(" "), _c('el-input', {
    on: {
      "input": function ($event) {
        return _vm.onChangeData2();
      }
    },
    model: {
      value: _vm.youtubeId,
      callback: function ($$v) {
        _vm.youtubeId = $$v;
      },
      expression: "youtubeId"
    }
  })], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "flex flex-col box-form"
  }, [_c('div', {
    staticClass: "title-form"
  }, [_vm._v("Duration")]), _vm._v(" "), !_vm.isLoadingDuration ? _c('el-input', {
    attrs: {
      "disabled": ""
    },
    model: {
      value: _vm.duration,
      callback: function ($$v) {
        _vm.duration = $$v;
      },
      expression: "duration"
    }
  }) : _c('el-skeleton', {
    attrs: {
      "rows": 2,
      "animated": ""
    }
  })], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "card-box flex flex-col",
    staticStyle: {
      "margin-bottom": "125px"
    }
  }, [_c('div', {
    staticClass: "flex header-card items-center"
  }, [_c('IconComponent', {
    staticClass: "mr-3"
  }), _vm._v("Assets\n          ")], 1), _vm._v(" "), _c('div', {
    staticClass: "form-panel"
  }, [_c('div', {
    ref: "scroll_container",
    staticClass: "card-assets flex flex-row flex-wrap",
    on: {
      "mousewheel": _vm.scrollX
    }
  }, _vm._l(_vm.filteredItems, function (item, index) {
    return _c('div', {
      key: index,
      staticClass: "flex flex-row items-center justify-center item-assets noselect",
      class: {
        'item-active': item.type === _vm.activeItem
      },
      on: {
        "click": function ($event) {
          return _vm.clickActiveItem(item.type);
        }
      }
    }, [item.type === 'Image_array' ? _c('span', [_vm._v("\n                  Multiple Image\n                ")]) : _vm._e(), _vm._v(" "), item.type === 'Color_pallete' ? _c('span', [_vm._v(" Color Only ")]) : _vm._e(), _vm._v(" "), item.type !== 'Image_array' && item.type !== 'Color_pallete' ? _c('span', [_vm._v("\n                  " + _vm._s(_vm._f("spaceUnderscore")(item.type)) + "\n                ")]) : _vm._e()]);
  }), 0), _vm._v(" "), _vm._l(_vm.dataForm, function (itemForm, IndexForm) {
    return _c('div', {
      key: IndexForm
    }, [itemForm.type !== undefined && itemForm.type !== 'Json' ? _c('CardForm', {
      style: itemForm.type === _vm.activeItem || _vm.activeItem === 'All' ? '' : 'display:none',
      scopedSlots: _vm._u([{
        key: "header",
        fn: function () {
          return [_vm._v("\n                  " + _vm._s(itemForm.title) + "\n                ")];
        },
        proxy: true
      }, {
        key: "body",
        fn: function () {
          return [!_vm.loadingData ? _c('div', [itemForm.type === 'Audio' ? _c('FormEditAudio', {
            ref: "formEditAudio",
            refInFor: true,
            attrs: {
              "title-form": itemForm.title,
              "mood": _vm.dataMood
            },
            on: {
              "changeAudio": _vm.onChangeAudio
            }
          }) : _vm._e(), _vm._v(" "), itemForm.type === 'Text_only' ? _c('FormEditTextOnly', {
            attrs: {
              "title-form": itemForm.title
            },
            on: {
              "changeText": _vm.onChangeData
            }
          }) : _vm._e(), _vm._v(" "), itemForm.type === 'Image' ? _c('FormEditImage', {
            staticClass: "mr-2",
            attrs: {
              "title-image": itemForm.title,
              "data-image": _vm.defaultImage
            },
            on: {
              "reloadback": _vm.onChangeData,
              "openEditor": _vm.openEditor
            }
          }) : _vm._e(), _vm._v(" "), itemForm.type === 'Image_array' ? _c('FormEditImageArray', {
            attrs: {
              "title-image": itemForm.title,
              "data-image": _vm.defaultImage
            },
            on: {
              "reloadback": _vm.onChangeData,
              "openEditor": _vm.openEditor
            }
          }) : _vm._e(), _vm._v(" "), itemForm.type === 'Color' ? _c('FormEditColor', {
            staticClass: "mr-2",
            attrs: {
              "title-form": itemForm.title
            },
            on: {
              "changeColor": _vm.onChangeData
            }
          }) : _vm._e(), _vm._v(" "), itemForm.type === 'Text' ? _c('FormEditText', {
            staticClass: "mr-2",
            attrs: {
              "title-form": itemForm.title
            },
            on: {
              "changeText": _vm.onChangeData
            }
          }) : _vm._e(), _vm._v(" "), itemForm.type === 'Button' ? _c('FormEditButton', {
            staticClass: "mr-2",
            attrs: {
              "title-form": itemForm.title
            },
            on: {
              "changeButton": _vm.onChangeData
            }
          }) : _vm._e(), _vm._v(" "), itemForm.type === 'Text_color' ? _c('FormEditTextColor', {
            attrs: {
              "title-form": itemForm.title
            },
            on: {
              "changeTextColor": _vm.onChangeData
            }
          }) : _vm._e(), _vm._v(" "), itemForm.type === 'Color_pallete' ? _c('FormEditColorPallete', {
            attrs: {
              "title-form": itemForm.title
            },
            on: {
              "changeColorOnly": _vm.onChangeData
            }
          }) : _vm._e(), _vm._v(" "), itemForm.type === 'Custom_audio' ? _c('FormEditCustomSound', {
            ref: "formEditCustomSound",
            refInFor: true,
            attrs: {
              "title-audio": itemForm.title
            },
            on: {
              "reloadback": _vm.onChangeData
            }
          }) : _vm._e()], 1) : _vm._e()];
        },
        proxy: true
      }], null, true)
    }) : _vm._e()], 1);
  })], 2)])]), _vm._v(" "), _c('div', {
    staticClass: "footer-panel"
  }, [_c('div', {
    staticClass: "box-action flex items-center"
  }, [_c('k-button', {
    staticClass: "grow w-full pl-3 pr-1",
    attrs: {
      "text": "Discard",
      "type": "secondary"
    },
    nativeOn: {
      "click": function ($event) {
        return _vm.back();
      }
    }
  }), _vm._v(" "), _c('DropdownSave', {
    staticClass: "grow w-full pr-3 pl-1",
    attrs: {
      "name-btn": "Save"
    },
    on: {
      "preview": function ($event) {
        return _vm.saveData();
      }
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function () {
        return [_c('div', {
          staticClass: "dropdown-action flex items-center justify-center no-select",
          on: {
            "click": function ($event) {
              return _vm.saveData2();
            }
          }
        }, [_c('img', {
          staticClass: "icon-item",
          attrs: {
            "src": __webpack_require__(138)
          }
        }), _vm._v("\n                Save & Duplicate\n              ")])];
      },
      proxy: true
    }], null, false, 601353775)
  })], 1)])]) : _c('div', {
    staticClass: "panel-hide flex flex-col items-center justify-center"
  }, [_c('div', {
    staticClass: "name-panel"
  }, [_vm._v("DESIGN PANEL")])])]), _vm._ssrNode(" "), _vm.showImages ? _c('ImagesEditor', {
    attrs: {
      "img-src": _vm.dataImageEditor
    },
    on: {
      "closeEditor": function ($event) {
        _vm.showImages = false;
      },
      "saveEditor": _vm.saveEditor
    }
  }) : _vm._e()], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/creative/edit/_edit.vue?vue&type=template&id=1d400a80&scoped=true

// EXTERNAL MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/creative/edit/_edit.vue?vue&type=script&lang=js
var _editvue_type_script_lang_js = __webpack_require__(342);

// CONCATENATED MODULE: ./pages/creative/edit/_edit.vue?vue&type=script&lang=js
 /* harmony default export */ var edit_editvue_type_script_lang_js = (_editvue_type_script_lang_js["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./pages/creative/edit/_edit.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(464)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  edit_editvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1d400a80",
  "018e26cf"
  
)

/* harmony default export */ var _edit = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {IconReload: __webpack_require__(191).default,IconInfo: __webpack_require__(178).default,IconPlayV2: __webpack_require__(179).default,IconComponent: __webpack_require__(235).default,FormEditAudio: __webpack_require__(364).default,FormEditTextOnly: __webpack_require__(407).default,FormEditImage: __webpack_require__(415).default,FormEditImageArray: __webpack_require__(408).default,FormEditColor: __webpack_require__(409).default,FormEditText: __webpack_require__(410).default,FormEditButton: __webpack_require__(411).default,FormEditTextColor: __webpack_require__(412).default,FormEditColorPallete: __webpack_require__(413).default,FormEditCustomSound: __webpack_require__(365).default,CardForm: __webpack_require__(200).default,KButton: __webpack_require__(123).default,DropdownSave: __webpack_require__(236).default,ImagesEditor: __webpack_require__(238).default})


/***/ })

};;
//# sourceMappingURL=_edit.js.map