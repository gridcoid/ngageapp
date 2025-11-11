exports.ids = [137,68,90,111];
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

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/icon/left.vue?vue&type=template&id=3c81fe1b
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
  }, [_vm._ssrNode("<path d=\"M15.5001 7.00002C15.5001 7.16578 15.4343 7.32475 15.3171 7.44196C15.1999 7.55917 15.0409 7.62502 14.8751 7.62502H2.63405L7.1921 12.1831C7.25014 12.2411 7.29617 12.31 7.32758 12.3858C7.35899 12.4617 7.37516 12.5429 7.37516 12.625C7.37516 12.7071 7.35899 12.7884 7.32758 12.8642C7.29617 12.94 7.25014 13.0089 7.1921 13.067C7.13406 13.125 7.06516 13.171 6.98933 13.2025C6.9135 13.2339 6.83222 13.25 6.75014 13.25C6.66807 13.25 6.58679 13.2339 6.51096 13.2025C6.43513 13.171 6.36623 13.125 6.30819 13.067L0.683192 7.44197C0.625152 7.38393 0.579112 7.31503 0.5477 7.2392C0.516289 7.16337 0.500122 7.0821 0.500122 7.00002C0.500122 6.91794 0.516289 6.83666 0.5477 6.76083C0.579112 6.685 0.625152 6.6161 0.683192 6.55806L6.30819 0.933063C6.42541 0.81585 6.58438 0.75 6.75014 0.75C6.91591 0.75 7.07488 0.81585 7.1921 0.933063C7.30931 1.05028 7.37516 1.20925 7.37516 1.37502C7.37516 1.54078 7.30931 1.69976 7.1921 1.81697L2.63405 6.37502H14.8751C15.0409 6.37502 15.1999 6.44086 15.3171 6.55807C15.4343 6.67528 15.5001 6.83426 15.5001 7.00002Z\"" + _vm._ssrAttr("fill", _vm.bgColor) + "></path>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/icon/left.vue?vue&type=template&id=3c81fe1b

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/icon/left.vue?vue&type=script&lang=js
/* harmony default export */ var leftvue_type_script_lang_js = ({
  props: {
    bgColor: {
      type: String,
      default: '#454545'
    }
  }
});
// CONCATENATED MODULE: ./components/icon/left.vue?vue&type=script&lang=js
 /* harmony default export */ var icon_leftvue_type_script_lang_js = (leftvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/icon/left.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  icon_leftvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "767c6891"
  
)

/* harmony default export */ var left = __webpack_exports__["default"] = (component.exports);

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

/***/ 382:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(453);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("28e86cf6", content, true, context)
};

/***/ }),

/***/ 451:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/hak_cipta.1f61443.svg";

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_499322b9_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(382);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_499322b9_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_499322b9_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_499322b9_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_499322b9_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 453:
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
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n@font-face{\n  font-family:\"Cabin\";\n\n  src:local(\"Cabin\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\")\n}\n@font-face{\n  font-family:\"Roboto Mono\";\n\n  src:local(\"Roboto Mono\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\")\n}\n.header-1[data-v-499322b9]{\n  font-size:32px\n}\n.header-1[data-v-499322b9],.header-2[data-v-499322b9]{\n  font-family:\"Cabin\";\n  font-weight:600;\n  color:#454545\n}\n.header-2[data-v-499322b9]{\n  font-size:28px\n}\n.header-3[data-v-499322b9]{\n  font-size:24px\n}\n.header-3[data-v-499322b9],.header-4[data-v-499322b9]{\n  font-family:\"Cabin\";\n  font-weight:600;\n  color:#454545\n}\n.header-4[data-v-499322b9]{\n  font-size:20px\n}\n.header-5[data-v-499322b9]{\n  font-size:18px\n}\n.header-5[data-v-499322b9],.header-6[data-v-499322b9]{\n  font-family:\"Cabin\";\n  font-weight:600;\n  color:#454545\n}\n.header-6[data-v-499322b9]{\n  font-size:14px\n}\n.subtitle-1[data-v-499322b9]{\n  color:#757575\n}\n.subtitle-1[data-v-499322b9],.subtitle-2[data-v-499322b9]{\n  font-family:\"Cabin\";\n  font-size:16px;\n  font-weight:400\n}\n.subtitle-2[data-v-499322b9]{\n  color:#454545\n}\n.no-select[data-v-499322b9]{\n  -webkit-touch-callout:none;\n  -webkit-user-select:none;\n  -moz-user-select:none;\n  user-select:none\n}\n.mx-icon-double-left[data-v-499322b9]:after,.mx-icon-double-left[data-v-499322b9]:before,.mx-icon-double-right[data-v-499322b9]:after,.mx-icon-double-right[data-v-499322b9]:before,.mx-icon-left[data-v-499322b9]:before,.mx-icon-right[data-v-499322b9]:before{\n  content:\"\";\n  position:relative;\n  top:-1px;\n  display:inline-block;\n  width:10px;\n  height:10px;\n  vertical-align:middle;\n  border-color:currentcolor;\n  border-style:solid;\n  border-width:2px 0 0 2px;\n  border-radius:1px;\n  box-sizing:border-box;\n  transform-origin:center;\n  transform:rotate(-45deg) scale(.7)\n}\n.mx-icon-double-left[data-v-499322b9]:after{\n  left:-4px\n}\n.mx-icon-double-right[data-v-499322b9]:before{\n  left:4px\n}\n.mx-icon-double-right[data-v-499322b9]:after,.mx-icon-double-right[data-v-499322b9]:before,.mx-icon-right[data-v-499322b9]:before{\n  transform:rotate(135deg) scale(.7)\n}\n.mx-btn[data-v-499322b9]{\n  box-sizing:border-box;\n  line-height:1;\n  font-size:14px;\n  font-weight:500;\n  padding:7px 15px;\n  margin:0;\n  cursor:pointer;\n  background-color:transparent;\n  outline:none;\n  border:1px solid rgba(0,0,0,.1);\n  border-radius:4px;\n  color:#73879c;\n  white-space:nowrap\n}\n.mx-btn[data-v-499322b9]:hover{\n  border-color:#1284e7;\n  color:#1284e7\n}\n.mx-btn.disabled[data-v-499322b9],.mx-btn[data-v-499322b9]:disabled{\n  color:#ccc;\n  cursor:not-allowed\n}\n.mx-btn-text[data-v-499322b9]{\n  border:0;\n  padding:0 4px;\n  text-align:left;\n  line-height:inherit\n}\n.mx-scrollbar[data-v-499322b9]{\n  height:100%\n}\n.mx-scrollbar:hover .mx-scrollbar-track[data-v-499322b9]{\n  opacity:1\n}\n.mx-scrollbar-wrap[data-v-499322b9]{\n  height:100%;\n  overflow-x:hidden;\n  overflow-y:auto\n}\n.mx-scrollbar-track[data-v-499322b9]{\n  position:absolute;\n  top:2px;\n  right:2px;\n  bottom:2px;\n  width:6px;\n  z-index:1;\n  border-radius:4px;\n  opacity:0;\n  transition:opacity .24s ease-out\n}\n.mx-scrollbar-track .mx-scrollbar-thumb[data-v-499322b9]{\n  position:absolute;\n  width:100%;\n  height:0;\n  cursor:pointer;\n  border-radius:inherit;\n  background-color:rgba(144,147,153,.3);\n  transition:background-color .3s\n}\n.mx-zoom-in-down-enter-active[data-v-499322b9],.mx-zoom-in-down-leave-active[data-v-499322b9]{\n  opacity:1;\n  transform:scaleY(1);\n  transition:transform .3s cubic-bezier(.23,1,.32,1),opacity .3s cubic-bezier(.23,1,.32,1);\n  transform-origin:center top\n}\n.mx-zoom-in-down-enter[data-v-499322b9],.mx-zoom-in-down-enter-from[data-v-499322b9],.mx-zoom-in-down-leave-to[data-v-499322b9]{\n  opacity:0;\n  transform:scaleY(0)\n}\n.mx-datepicker[data-v-499322b9]{\n  position:relative;\n  display:inline-block;\n  width:210px\n}\n.mx-datepicker svg[data-v-499322b9]{\n  width:1em;\n  height:1em;\n  vertical-align:-.15em;\n  fill:currentColor;\n  overflow:hidden\n}\n.mx-datepicker-range[data-v-499322b9]{\n  width:320px\n}\n.mx-datepicker-inline[data-v-499322b9]{\n  width:auto\n}\n.mx-input-wrapper[data-v-499322b9]{\n  position:relative\n}\n.mx-input[data-v-499322b9]{\n  display:inline-block;\n  box-sizing:border-box;\n  width:100%;\n  height:34px;\n  padding:6px 30px 6px 10px;\n  font-size:14px;\n  line-height:1.4;\n  color:#555;\n  background-color:#fff;\n  border:1px solid #ccc;\n  border-radius:4px;\n  box-shadow:inset 0 1px 1px rgba(0,0,0,.075)\n}\n.mx-input[data-v-499322b9]:focus,.mx-input[data-v-499322b9]:hover{\n  border-color:#409aff\n}\n.mx-input.disabled[data-v-499322b9],.mx-input[data-v-499322b9]:disabled{\n  color:#ccc;\n  background-color:#f3f3f3;\n  border-color:#ccc;\n  cursor:not-allowed\n}\n.mx-input[data-v-499322b9]:focus{\n  outline:none\n}\n.mx-input[data-v-499322b9]::-ms-clear{\n  display:none\n}\n.mx-icon-calendar[data-v-499322b9],.mx-icon-clear[data-v-499322b9]{\n  position:absolute;\n  top:50%;\n  right:8px;\n  transform:translateY(-50%);\n  font-size:16px;\n  line-height:1;\n  color:rgba(0,0,0,.5);\n  vertical-align:middle\n}\n.mx-icon-clear[data-v-499322b9]{\n  cursor:pointer\n}\n.mx-icon-clear[data-v-499322b9]:hover{\n  color:rgba(0,0,0,.8)\n}\n.mx-datepicker-main[data-v-499322b9]{\n  font:14px/1.5 \"Helvetica Neue\",Helvetica,Arial,\"Microsoft Yahei\",sans-serif;\n  color:#73879c;\n  background-color:#fff;\n  border:1px solid #e8e8e8\n}\n.mx-datepicker-popup[data-v-499322b9]{\n  position:absolute;\n  margin-top:1px;\n  margin-bottom:1px;\n  box-shadow:0 6px 12px rgba(0,0,0,.175);\n  z-index:2001\n}\n.mx-datepicker-sidebar[data-v-499322b9]{\n  float:left;\n  box-sizing:border-box;\n  width:100px;\n  padding:6px;\n  overflow:auto\n}\n.mx-datepicker-sidebar+.mx-datepicker-content[data-v-499322b9]{\n  margin-left:100px;\n  border-left:1px solid #e8e8e8\n}\n.mx-datepicker-body[data-v-499322b9]{\n  position:relative;\n  -webkit-user-select:none;\n     -moz-user-select:none;\n          user-select:none\n}\n.mx-btn-shortcut[data-v-499322b9]{\n  line-height:24px\n}\n.mx-range-wrapper[data-v-499322b9]{\n  display:flex\n}\n@media(max-width:750px){\n.mx-range-wrapper[data-v-499322b9]{\n    flex-direction:column\n}\n}\n.mx-datepicker-header[data-v-499322b9]{\n  padding:6px 8px;\n  border-bottom:1px solid #e8e8e8\n}\n.mx-datepicker-footer[data-v-499322b9]{\n  padding:6px 8px;\n  text-align:right;\n  border-top:1px solid #e8e8e8\n}\n.mx-calendar[data-v-499322b9]{\n  box-sizing:border-box;\n  width:248px;\n  padding:6px 12px\n}\n.mx-calendar+.mx-calendar[data-v-499322b9]{\n  border-left:1px solid #e8e8e8\n}\n.mx-calendar-header[data-v-499322b9],.mx-time-header[data-v-499322b9]{\n  box-sizing:border-box;\n  height:34px;\n  line-height:34px;\n  text-align:center;\n  overflow:hidden\n}\n.mx-btn-icon-double-left[data-v-499322b9],.mx-btn-icon-left[data-v-499322b9]{\n  float:left\n}\n.mx-btn-icon-double-right[data-v-499322b9],.mx-btn-icon-right[data-v-499322b9]{\n  float:right\n}\n.mx-calendar-header-label[data-v-499322b9]{\n  font-size:14px\n}\n.mx-calendar-decade-separator[data-v-499322b9]{\n  margin:0 2px\n}\n.mx-calendar-decade-separator[data-v-499322b9]:after{\n  content:\"~\"\n}\n.mx-calendar-content[data-v-499322b9]{\n  position:relative;\n  height:224px;\n  box-sizing:border-box\n}\n.mx-calendar-content .cell[data-v-499322b9]{\n  cursor:pointer\n}\n.mx-calendar-content .cell[data-v-499322b9]:hover{\n  color:#73879c;\n  background-color:rgb(243.15,248.85,253.8)\n}\n.mx-calendar-content .cell.active[data-v-499322b9]{\n  color:#fff;\n  background-color:#1284e7\n}\n.mx-calendar-content .cell.hover-in-range[data-v-499322b9],.mx-calendar-content .cell.in-range[data-v-499322b9]{\n  color:#73879c;\n  background-color:rgb(219.45,236.55,251.4)\n}\n.mx-calendar-content .cell.disabled[data-v-499322b9]{\n  cursor:not-allowed;\n  color:#ccc;\n  background-color:#f3f3f3\n}\n.mx-calendar-week-mode .mx-date-row[data-v-499322b9]{\n  cursor:pointer\n}\n.mx-calendar-week-mode .mx-date-row[data-v-499322b9]:hover{\n  background-color:rgb(243.15,248.85,253.8)\n}\n.mx-calendar-week-mode .mx-date-row.mx-active-week[data-v-499322b9]{\n  background-color:rgb(219.45,236.55,251.4)\n}\n.mx-calendar-week-mode .mx-date-row .cell.active[data-v-499322b9],.mx-calendar-week-mode .mx-date-row .cell[data-v-499322b9]:hover{\n  color:inherit;\n  background-color:transparent\n}\n.mx-week-number[data-v-499322b9]{\n  opacity:.5\n}\n.mx-table[data-v-499322b9]{\n  table-layout:fixed;\n  border-collapse:separate;\n  border-spacing:0;\n  width:100%;\n  height:100%;\n  box-sizing:border-box;\n  text-align:center\n}\n.mx-table th[data-v-499322b9]{\n  font-weight:500\n}\n.mx-table td[data-v-499322b9],.mx-table th[data-v-499322b9]{\n  padding:0;\n  vertical-align:middle\n}\n.mx-table-date td[data-v-499322b9],.mx-table-date th[data-v-499322b9]{\n  font-size:12px\n}\n.mx-table-date .today[data-v-499322b9]{\n  color:rgb(41.7,144.3,233.4)\n}\n.mx-table-date .cell.not-current-month[data-v-499322b9]{\n  color:#ccc;\n  background:none\n}\n.mx-time[data-v-499322b9]{\n  flex:1;\n  width:224px;\n  background:#fff\n}\n.mx-time+.mx-time[data-v-499322b9]{\n  border-left:1px solid #e8e8e8\n}\n.mx-calendar-time[data-v-499322b9]{\n  position:absolute;\n  top:0;\n  left:0;\n  width:100%;\n  height:100%\n}\n.mx-time-header[data-v-499322b9]{\n  border-bottom:1px solid #e8e8e8\n}\n.mx-time-content[data-v-499322b9]{\n  height:224px;\n  box-sizing:border-box;\n  overflow:hidden\n}\n.mx-time-columns[data-v-499322b9]{\n  display:flex;\n  width:100%;\n  height:100%;\n  overflow:hidden\n}\n.mx-time-column[data-v-499322b9]{\n  flex:1;\n  position:relative;\n  border-left:1px solid #e8e8e8;\n  text-align:center\n}\n.mx-time-column[data-v-499322b9]:first-child{\n  border-left:0\n}\n.mx-time-column .mx-time-list[data-v-499322b9]{\n  margin:0;\n  padding:0;\n  list-style:none\n}\n.mx-time-column .mx-time-list[data-v-499322b9]:after{\n  content:\"\";\n  display:block;\n  height:192px\n}\n.mx-time-column .mx-time-item[data-v-499322b9]{\n  cursor:pointer;\n  font-size:12px;\n  height:32px;\n  line-height:32px\n}\n.mx-time-column .mx-time-item[data-v-499322b9]:hover{\n  color:#73879c;\n  background-color:rgb(243.15,248.85,253.8)\n}\n.mx-time-column .mx-time-item.active[data-v-499322b9]{\n  color:#1284e7;\n  background-color:transparent;\n  font-weight:700\n}\n.mx-time-column .mx-time-item.disabled[data-v-499322b9]{\n  cursor:not-allowed;\n  color:#ccc;\n  background-color:#f3f3f3\n}\n.mx-time-option[data-v-499322b9]{\n  cursor:pointer;\n  padding:8px 10px;\n  font-size:14px;\n  line-height:20px\n}\n.mx-time-option[data-v-499322b9]:hover{\n  color:#73879c;\n  background-color:rgb(243.15,248.85,253.8)\n}\n.mx-time-option.active[data-v-499322b9]{\n  color:#1284e7;\n  background-color:transparent;\n  font-weight:700\n}\n.mx-time-option.disabled[data-v-499322b9]{\n  cursor:not-allowed;\n  color:#ccc;\n  background-color:#f3f3f3\n}\n.el-input .el-input__inner[data-v-499322b9]:focus,.el-range-editor.is-active[data-v-499322b9],.el-range-editor.is-active[data-v-499322b9]:hover,.el-select .el-input.is-focus .el-input__inner[data-v-499322b9],.el-select .el-input__inner[data-v-499322b9]:focus,.el-textarea .el-input__inner[data-v-499322b9]:focus{\n  border:1.3px solid #1b63d4!important;\n  box-shadow:0 2px 10px rgba(187,209,243,.5)\n}\n.mx-input[data-v-499322b9]{\n  height:40px!important\n}\n.mx-datepicker-sidebar[data-v-499322b9]{\n  width:151px!important\n}\n.mx-table-date td[data-v-499322b9],.mx-table-date th[data-v-499322b9]{\n  height:32px;\n  font-size:14px!important\n}\n.mx-btn-shortcut[data-v-499322b9]{\n  display:block;\n  padding:0 6px;\n  line-height:30px!important\n}\n[data-v-499322b9]:root{\n  --vs-line-height:1.6\n}\n.btn-popover[data-v-499322b9]{\n  height:40px;\n  background-color:#fff;\n  width:100%;\n  padding:10px;\n  cursor:pointer\n}\n.btn-popover .title-1[data-v-499322b9]{\n  font-weight:400;\n  font-size:16px;\n  color:#454545;\n  margin-left:10px\n}\n.btn-popover[data-v-499322b9]:hover{\n  background-color:#f3f4f6\n}\n.el-popover[data-v-499322b9]{\n  padding:0!important;\n  border-radius:5px!important\n}\n.el-upload[data-v-499322b9]{\n  width:100%\n}\n.el-upload-dragger[data-v-499322b9]{\n  width:100%!important;\n  background:linear-gradient(0deg,rgba(33,150,243,.03),rgba(33,150,243,.03)),#fff!important;\n  border:1px dashed transparent!important;\n  border-radius:5px!important;\n  height:100%!important\n}\n.kg-popup[data-v-499322b9]{\n  transition:all .5s ease-in-out;\n  position:fixed;\n  top:0;\n  left:50%;\n  transform:translateX(-50%)\n}\n.noselect[data-v-499322b9]{\n  -webkit-touch-callout:none;\n  -webkit-user-select:none;\n  -moz-user-select:none;\n  user-select:none\n}\n.ProseMirror[data-v-499322b9]{\n  border:0;\n  outline:none\n}\n.ProseMirror>*+*[data-v-499322b9]{\n  margin-top:.75em\n}\n.ProseMirror ol[data-v-499322b9],.ProseMirror ul[data-v-499322b9]{\n  padding:0 1rem\n}\n.ProseMirror h1[data-v-499322b9],.ProseMirror h2[data-v-499322b9],.ProseMirror h3[data-v-499322b9],.ProseMirror h4[data-v-499322b9],.ProseMirror h5[data-v-499322b9],.ProseMirror h6[data-v-499322b9]{\n  line-height:1.1\n}\n.ProseMirror code[data-v-499322b9]{\n  background-color:rgba(97,97,97,.1);\n  color:#616161\n}\n.ProseMirror pre[data-v-499322b9]{\n  background:#0d0d0d;\n  color:#fff;\n  font-family:\"JetBrainsMono\",monospace;\n  padding:.75rem 1rem;\n  border-radius:.5rem\n}\n.ProseMirror pre code[data-v-499322b9]{\n  color:inherit;\n  padding:0;\n  background:none;\n  font-size:.8rem\n}\n.ProseMirror img[data-v-499322b9]{\n  max-width:100%;\n  height:auto\n}\n.ProseMirror blockquote[data-v-499322b9]{\n  padding-left:1rem;\n  border-left:2px solid rgba(13,13,13,.1)\n}\n.ProseMirror hr[data-v-499322b9]{\n  border:none;\n  border-top:2px solid rgba(13,13,13,.1);\n  margin:2rem 0\n}\n.ProseMirror[data-v-499322b9]:focus-visible{\n  outline:none\n}\n.el-color-picker__trigger[data-v-499322b9]{\n  border:0!important;\n  padding:0!important;\n  outline:none!important\n}\n.el-color-picker__icon[data-v-499322b9]{\n  visibility:hidden!important\n}\n.el-color-picker--mini .el-color-picker__trigger[data-v-499322b9],.el-color-picker__color[data-v-499322b9]{\n  height:22px!important;\n  width:22px!important\n}\n.el-color-picker__color[data-v-499322b9]{\n  padding:0!important;\n  border:0!important\n}\n.el-color-picker__empty[data-v-499322b9]{\n  padding-top:1.4px!important\n}\n.el-color-picker--mini[data-v-499322b9]{\n  height:22px!important\n}\n.el-color-picker__color-inner[data-v-499322b9]{\n  border:1px solid #e2e2e2!important\n}\n.el-table thead[data-v-499322b9]{\n  color:#5c6b7a!important;\n  font-family:\"Cabin\"!important\n}\n.el-table thead[data-v-499322b9],.th[data-v-499322b9]{\n  font-weight:600!important\n}\n.el-button--mini[data-v-499322b9],.el-button--text[data-v-499322b9],.el-date-range-picker__header div[data-v-499322b9],.el-date-table td span[data-v-499322b9],.el-input__inner[data-v-499322b9],.el-picker-panel__shortcut[data-v-499322b9],.el-select-dropdown__item[data-v-499322b9],.el-select-dropdown__item.hover[data-v-499322b9],.el-select-dropdown__item[data-v-499322b9]:hover,.el-time-spinner__item[data-v-499322b9]{\n  font-family:\"Cabin\"!important\n}\n.el-progress-bar__inner[data-v-499322b9],.el-progress-bar__outer[data-v-499322b9]{\n  border-bottom-left-radius:100px!important;\n  border-top-left-radius:100px!important\n}\n.el-dropdown .el-dropdown__caret-button[data-v-499322b9]{\n  bottom:2px!important\n}\n.el-dropdown-menu[data-v-499322b9],.el-dropdown-menu__item[data-v-499322b9]{\n  padding:0!important\n}\nbutton[data-v-499322b9]:active,button[data-v-499322b9]:focus{\n  outline:0!important\n}\n.el-input-group__append[data-v-499322b9]{\n  padding:0!important\n}\n.el-input-group__prepend[data-v-499322b9]{\n  padding-left:5px!important;\n  padding-right:5px!important\n}\n.el-menu-item[data-v-499322b9],.el-submenu__title[data-v-499322b9]{\n  height:40px!important;\n  line-height:40px!important;\n  font-family:\"Cabin\"!important;\n  font-size:16px!important;\n  font-style:normal!important;\n  font-weight:400!important;\n  color:#5c6b7a!important;\n  margin-bottom:10px!important;\n  border-left:4px solid transparent!important\n}\n.el-menu-item.is-active[data-v-499322b9]{\n  color:#1b63d4!important;\n  font-weight:600!important;\n  border-left:4px solid #1b63d4!important;\n  border-top-left-radius:2px!important;\n  border-bottom-left-radius:2px!important\n}\n.el-menu--collapse[data-v-499322b9]{\n  width:80px!important\n}\n.el-menu[data-v-499322b9]{\n  border-right:0!important\n}\n.el-dialog__body[data-v-499322b9],.el-dialog__header[data-v-499322b9]{\n  padding:0!important\n}\n.el-dialog[data-v-499322b9]{\n  border-radius:10px!important\n}\n.card-dialog[data-v-499322b9]{\n  padding:20px!important\n}\n.vue-swatches__trigger[data-v-499322b9]{\n  width:22px!important;\n  height:22px!important;\n  border-radius:2px!important\n}\n.vue-swatches[data-v-499322b9]{\n  height:22px!important\n}\n.CodeMirror[data-v-499322b9]{\n  height:calc(100vh - 150px)!important\n}\n.vue-swatches__trigger[data-v-499322b9]{\n  border:1px solid #e2e2e2!important\n}\n.iframe-align[data-v-499322b9]{\n  margin-top:10px;\n  transform:scale(.32);\n  transform-origin:top center;\n  position:relative;\n  left:-35px\n}\n.center-iframe[data-v-499322b9],.left-iframe[data-v-499322b9]{\n  margin-top:10px;\n  transform:scale(.5);\n  transform-origin:top center\n}\n.left-iframe[data-v-499322b9]{\n  position:relative;\n  left:35px\n}\n.center-iframe-2[data-v-499322b9]{\n  position:relative;\n  margin-top:10px;\n  transform:scale(.6);\n  left:-50px!important;\n  transform-origin:top center\n}\n.kg-container[data-v-499322b9]{\n  height:100vh;\n  width:100%\n}\n.kg-container .header-content[data-v-499322b9]{\n  padding-top:20px;\n  padding-right:20px;\n  padding-left:20px;\n  margin-bottom:20px\n}\n.kg-container .header-content .btn-create[data-v-499322b9]{\n  max-width:190px;\n  background:#fff;\n  border:1px solid #e2e2e2;\n  border-radius:5px;\n  height:40px;\n  padding-left:15px;\n  padding-right:15px;\n  cursor:pointer\n}\n.kg-container .header-content .btn-create .name-btn[data-v-499322b9]{\n  font-weight:700;\n  font-size:14px;\n  padding-bottom:1px;\n  color:#1b63d4;\n  padding-left:10px\n}\n.kg-container .header-content .btn-create[data-v-499322b9]:hover{\n  background-color:#f3f4f6;\n  border:1px solid transparent\n}\n.kg-container .header-content .btn-refresh[data-v-499322b9]{\n  width:40px;\n  background:#fff;\n  border:1px solid #e2e2e2;\n  border-radius:5px;\n  height:40px;\n  cursor:pointer\n}\n.kg-container .header-content .btn-refresh[data-v-499322b9]:hover{\n  background-color:#f3f4f6;\n  border:1px solid transparent\n}\n.kg-container .body-content[data-v-499322b9]{\n  margin-top:30px\n}\n.kg-container .body-content .iframe-body[data-v-499322b9]{\n  width:320px;\n  height:480px;\n  -ms-overflow-style:none;\n  scrollbar-width:none;\n  overflow:hidden\n}\n.kg-container .body-content .iframe-body[data-v-499322b9]::-webkit-scrollbar{\n  display:none\n}\n.kg-container .footer-content[data-v-499322b9]{\n  position:fixed;\n  bottom:0;\n  height:64px;\n  width:100%;\n  background:#fff;\n  border:1px solid #e2e2e2;\n  padding-left:30px;\n  padding-right:30px\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/creative/templates/preview/_index.vue?vue&type=template&id=499322b9&scoped=true
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "kg-container"
  }, [_vm._ssrNode("<div class=\"header-content flex justify-between\" data-v-499322b9>", "</div>", [_vm._ssrNode("<div class=\"flex items-center justify-between btn-create no-select\" data-v-499322b9>", "</div>", [_c('IconLeft'), _vm._ssrNode(" <span class=\"name-btn\" data-v-499322b9>Back to Templates</span>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"flex items-center justify-center btn-refresh no-select\" data-v-499322b9>", "</div>", [_c('IconRefresh')], 1)], 2), _vm._ssrNode(" " + (!_vm.isLoading ? "<div class=\"body-content flex items-center justify-center\" data-v-499322b9>" + (_vm.type === 'rmb' ? "<iframe" + _vm._ssrAttr("src", _vm.staticSrc) + " class=\"iframe-body\"" + _vm._ssrStyle(null, 'height: ' + _vm.height + 'px;width: ' + _vm.width + 'px;', null) + " data-v-499322b9></iframe>" : "<!---->") + " " + (_vm.type === 'display' ? "<img" + _vm._ssrAttr("src", _vm.staticSrc) + " data-v-499322b9>" : "<!---->") + " " + (_vm.type === 'video' ? "<div style=\"height: 100%\" data-v-499322b9><iframe" + _vm._ssrAttr("src", _vm.staticSrc) + " scrolling=\"no\"" + _vm._ssrClass("iframe-body", _vm.showZoom ? _vm.alignCenter : '') + _vm._ssrStyle(null, 'height: ' + _vm.height + 'px;width: ' + _vm.width + 'px;', null) + " data-v-499322b9></iframe></div>" : "<!---->") + "</div>" : "<!---->") + " "), _vm._ssrNode("<div class=\"footer-content flex items-center justify-between\" data-v-499322b9>", "</div>", [_vm._ssrNode("<img" + _vm._ssrAttr("src", __webpack_require__(451)) + " data-v-499322b9> "), !_vm.isActive ? _c('k-button', {
    staticStyle: {
      "font-weight": "700",
      "font-size": "14px",
      "width": "200px",
      "height": "40px"
    },
    attrs: {
      "text": "Use this Template",
      "size": "large",
      "type": "disabled"
    }
  }) : _c('k-button', {
    staticStyle: {
      "font-weight": "700",
      "font-size": "14px",
      "width": "200px",
      "height": "40px"
    },
    attrs: {
      "text": "Use this Template",
      "size": "large"
    },
    nativeOn: {
      "click": function ($event) {
        return _vm.create(_vm.$route.params.index, _vm.resolutionId);
      }
    }
  })], 2)], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/creative/templates/preview/_index.vue?vue&type=template&id=499322b9&scoped=true

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/creative/templates/preview/_index.vue?vue&type=script&lang=js

/* harmony default export */ var _indexvue_type_script_lang_js = ({
  name: 'PrevieTemplatePage',
  layout: 'login',

  data() {
    return {
      url: '',
      isLoading: false,
      staticSrc: '',
      isActive: false,
      type: '',
      height: 0,
      width: 0,
      resolutionId: null,
      showZoom: false
    };
  },

  computed: { ...Object(external_vuex_["mapState"])({
      dataDetailTemplate: state => {
        return state.template.dataDetailTemplate;
      },
      orgId: state => {
        return state.user.orgId;
      }
    }),

    alignCenter() {
      if (this.width > 1000) {
        if (this.height > 1080) {
          return 'iframe-align';
        } else if (this.height < 800) {
          return 'center-iframe-2';
        } else {
          return 'left-iframe';
        }
      } else {
        return 'center-iframe';
      }
    }

  },

  mounted() {
    this.getTemplateDetail();
  },

  methods: {
    create(id, resId) {
      this.$router.push({
        path: `/creative/create/${id}?resolution=${resId}`
      });
    },

    getTemplateDetail() {
      this.isLoading = true;
      this.$store.dispatch('template/getDetail', {
        id: this.$route.params.index,
        resolution: this.$router.currentRoute.query.resolution
      }).then(res => {
        this.type = res.data.data.format;

        if (this.type === 'display') {
          this.staticSrc = this.$config.baseURL + 'obs?fileKey=' + res.data.data.configExample.properties.image;
        }

        if (this.type === 'rmb') {
          this.staticSrc = this.$config.baseURL + 'template/' + this.$route.params.index + '/html';
        }

        if (this.type === 'video') {
          this.staticSrc = res.data.data.staticSrc;
        }

        this.isActive = res.data.data.isActive;
        this.height = res.data.data.configSchema.resolutions[0].height;
        this.width = res.data.data.configSchema.resolutions[0].width;
        this.resolutionId = res.data.data.resolutionId;

        if (this.height > 1000 || this.width > 1000) {
          this.showZoom = true;
        } else {
          this.showZoom = false;
        }

        this.isLoading = false;
      }).catch(() => {
        this.isLoading = false;
      });
    },

    back() {
      this.$router.go(-1);
    },

    refresh() {}

  }
});
// CONCATENATED MODULE: ./pages/creative/templates/preview/_index.vue?vue&type=script&lang=js
 /* harmony default export */ var preview_indexvue_type_script_lang_js = (_indexvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./pages/creative/templates/preview/_index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(452)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  preview_indexvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "499322b9",
  "529be422"
  
)

/* harmony default export */ var _index = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {IconLeft: __webpack_require__(127).default,IconRefresh: __webpack_require__(183).default,KButton: __webpack_require__(123).default})


/***/ })

};;
//# sourceMappingURL=_index.js.map