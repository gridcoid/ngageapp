exports.ids = [138,3,54,68,107,111];
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

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(140);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("9bcf2bf2", content, true, context)
};

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

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_backPage_vue_vue_type_style_index_0_id_0b2885c5_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(128);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_backPage_vue_vue_type_style_index_0_id_0b2885c5_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_backPage_vue_vue_type_style_index_0_id_0b2885c5_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_backPage_vue_vue_type_style_index_0_id_0b2885c5_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_backPage_vue_vue_type_style_index_0_id_0b2885c5_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 140:
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
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n@font-face{\n  font-family:\"Cabin\";\n\n  src:local(\"Cabin\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\")\n}\n@font-face{\n  font-family:\"Roboto Mono\";\n\n  src:local(\"Roboto Mono\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\")\n}\n.header-1[data-v-0b2885c5]{\n  font-size:32px\n}\n.header-1[data-v-0b2885c5],.header-2[data-v-0b2885c5]{\n  font-family:\"Cabin\";\n  font-weight:600;\n  color:#454545\n}\n.header-2[data-v-0b2885c5]{\n  font-size:28px\n}\n.header-3[data-v-0b2885c5]{\n  font-size:24px\n}\n.header-3[data-v-0b2885c5],.header-4[data-v-0b2885c5]{\n  font-family:\"Cabin\";\n  font-weight:600;\n  color:#454545\n}\n.header-4[data-v-0b2885c5]{\n  font-size:20px\n}\n.header-5[data-v-0b2885c5]{\n  font-size:18px\n}\n.header-5[data-v-0b2885c5],.header-6[data-v-0b2885c5]{\n  font-family:\"Cabin\";\n  font-weight:600;\n  color:#454545\n}\n.header-6[data-v-0b2885c5]{\n  font-size:14px\n}\n.subtitle-1[data-v-0b2885c5]{\n  color:#757575\n}\n.subtitle-1[data-v-0b2885c5],.subtitle-2[data-v-0b2885c5]{\n  font-family:\"Cabin\";\n  font-size:16px;\n  font-weight:400\n}\n.subtitle-2[data-v-0b2885c5]{\n  color:#454545\n}\n.no-select[data-v-0b2885c5]{\n  -webkit-touch-callout:none;\n  -webkit-user-select:none;\n  -moz-user-select:none;\n  user-select:none\n}\n.mx-icon-double-left[data-v-0b2885c5]:after,.mx-icon-double-left[data-v-0b2885c5]:before,.mx-icon-double-right[data-v-0b2885c5]:after,.mx-icon-double-right[data-v-0b2885c5]:before,.mx-icon-left[data-v-0b2885c5]:before,.mx-icon-right[data-v-0b2885c5]:before{\n  content:\"\";\n  position:relative;\n  top:-1px;\n  display:inline-block;\n  width:10px;\n  height:10px;\n  vertical-align:middle;\n  border-color:currentcolor;\n  border-style:solid;\n  border-width:2px 0 0 2px;\n  border-radius:1px;\n  box-sizing:border-box;\n  transform-origin:center;\n  transform:rotate(-45deg) scale(.7)\n}\n.mx-icon-double-left[data-v-0b2885c5]:after{\n  left:-4px\n}\n.mx-icon-double-right[data-v-0b2885c5]:before{\n  left:4px\n}\n.mx-icon-double-right[data-v-0b2885c5]:after,.mx-icon-double-right[data-v-0b2885c5]:before,.mx-icon-right[data-v-0b2885c5]:before{\n  transform:rotate(135deg) scale(.7)\n}\n.mx-btn[data-v-0b2885c5]{\n  box-sizing:border-box;\n  line-height:1;\n  font-size:14px;\n  font-weight:500;\n  padding:7px 15px;\n  margin:0;\n  cursor:pointer;\n  background-color:transparent;\n  outline:none;\n  border:1px solid rgba(0,0,0,.1);\n  border-radius:4px;\n  color:#73879c;\n  white-space:nowrap\n}\n.mx-btn[data-v-0b2885c5]:hover{\n  border-color:#1284e7;\n  color:#1284e7\n}\n.mx-btn.disabled[data-v-0b2885c5],.mx-btn[data-v-0b2885c5]:disabled{\n  color:#ccc;\n  cursor:not-allowed\n}\n.mx-btn-text[data-v-0b2885c5]{\n  border:0;\n  padding:0 4px;\n  text-align:left;\n  line-height:inherit\n}\n.mx-scrollbar[data-v-0b2885c5]{\n  height:100%\n}\n.mx-scrollbar:hover .mx-scrollbar-track[data-v-0b2885c5]{\n  opacity:1\n}\n.mx-scrollbar-wrap[data-v-0b2885c5]{\n  height:100%;\n  overflow-x:hidden;\n  overflow-y:auto\n}\n.mx-scrollbar-track[data-v-0b2885c5]{\n  position:absolute;\n  top:2px;\n  right:2px;\n  bottom:2px;\n  width:6px;\n  z-index:1;\n  border-radius:4px;\n  opacity:0;\n  transition:opacity .24s ease-out\n}\n.mx-scrollbar-track .mx-scrollbar-thumb[data-v-0b2885c5]{\n  position:absolute;\n  width:100%;\n  height:0;\n  cursor:pointer;\n  border-radius:inherit;\n  background-color:rgba(144,147,153,.3);\n  transition:background-color .3s\n}\n.mx-zoom-in-down-enter-active[data-v-0b2885c5],.mx-zoom-in-down-leave-active[data-v-0b2885c5]{\n  opacity:1;\n  transform:scaleY(1);\n  transition:transform .3s cubic-bezier(.23,1,.32,1),opacity .3s cubic-bezier(.23,1,.32,1);\n  transform-origin:center top\n}\n.mx-zoom-in-down-enter[data-v-0b2885c5],.mx-zoom-in-down-enter-from[data-v-0b2885c5],.mx-zoom-in-down-leave-to[data-v-0b2885c5]{\n  opacity:0;\n  transform:scaleY(0)\n}\n.mx-datepicker[data-v-0b2885c5]{\n  position:relative;\n  display:inline-block;\n  width:210px\n}\n.mx-datepicker svg[data-v-0b2885c5]{\n  width:1em;\n  height:1em;\n  vertical-align:-.15em;\n  fill:currentColor;\n  overflow:hidden\n}\n.mx-datepicker-range[data-v-0b2885c5]{\n  width:320px\n}\n.mx-datepicker-inline[data-v-0b2885c5]{\n  width:auto\n}\n.mx-input-wrapper[data-v-0b2885c5]{\n  position:relative\n}\n.mx-input[data-v-0b2885c5]{\n  display:inline-block;\n  box-sizing:border-box;\n  width:100%;\n  height:34px;\n  padding:6px 30px 6px 10px;\n  font-size:14px;\n  line-height:1.4;\n  color:#555;\n  background-color:#fff;\n  border:1px solid #ccc;\n  border-radius:4px;\n  box-shadow:inset 0 1px 1px rgba(0,0,0,.075)\n}\n.mx-input[data-v-0b2885c5]:focus,.mx-input[data-v-0b2885c5]:hover{\n  border-color:#409aff\n}\n.mx-input.disabled[data-v-0b2885c5],.mx-input[data-v-0b2885c5]:disabled{\n  color:#ccc;\n  background-color:#f3f3f3;\n  border-color:#ccc;\n  cursor:not-allowed\n}\n.mx-input[data-v-0b2885c5]:focus{\n  outline:none\n}\n.mx-input[data-v-0b2885c5]::-ms-clear{\n  display:none\n}\n.mx-icon-calendar[data-v-0b2885c5],.mx-icon-clear[data-v-0b2885c5]{\n  position:absolute;\n  top:50%;\n  right:8px;\n  transform:translateY(-50%);\n  font-size:16px;\n  line-height:1;\n  color:rgba(0,0,0,.5);\n  vertical-align:middle\n}\n.mx-icon-clear[data-v-0b2885c5]{\n  cursor:pointer\n}\n.mx-icon-clear[data-v-0b2885c5]:hover{\n  color:rgba(0,0,0,.8)\n}\n.mx-datepicker-main[data-v-0b2885c5]{\n  font:14px/1.5 \"Helvetica Neue\",Helvetica,Arial,\"Microsoft Yahei\",sans-serif;\n  color:#73879c;\n  background-color:#fff;\n  border:1px solid #e8e8e8\n}\n.mx-datepicker-popup[data-v-0b2885c5]{\n  position:absolute;\n  margin-top:1px;\n  margin-bottom:1px;\n  box-shadow:0 6px 12px rgba(0,0,0,.175);\n  z-index:2001\n}\n.mx-datepicker-sidebar[data-v-0b2885c5]{\n  float:left;\n  box-sizing:border-box;\n  width:100px;\n  padding:6px;\n  overflow:auto\n}\n.mx-datepicker-sidebar+.mx-datepicker-content[data-v-0b2885c5]{\n  margin-left:100px;\n  border-left:1px solid #e8e8e8\n}\n.mx-datepicker-body[data-v-0b2885c5]{\n  position:relative;\n  -webkit-user-select:none;\n     -moz-user-select:none;\n          user-select:none\n}\n.mx-btn-shortcut[data-v-0b2885c5]{\n  line-height:24px\n}\n.mx-range-wrapper[data-v-0b2885c5]{\n  display:flex\n}\n@media(max-width:750px){\n.mx-range-wrapper[data-v-0b2885c5]{\n    flex-direction:column\n}\n}\n.mx-datepicker-header[data-v-0b2885c5]{\n  padding:6px 8px;\n  border-bottom:1px solid #e8e8e8\n}\n.mx-datepicker-footer[data-v-0b2885c5]{\n  padding:6px 8px;\n  text-align:right;\n  border-top:1px solid #e8e8e8\n}\n.mx-calendar[data-v-0b2885c5]{\n  box-sizing:border-box;\n  width:248px;\n  padding:6px 12px\n}\n.mx-calendar+.mx-calendar[data-v-0b2885c5]{\n  border-left:1px solid #e8e8e8\n}\n.mx-calendar-header[data-v-0b2885c5],.mx-time-header[data-v-0b2885c5]{\n  box-sizing:border-box;\n  height:34px;\n  line-height:34px;\n  text-align:center;\n  overflow:hidden\n}\n.mx-btn-icon-double-left[data-v-0b2885c5],.mx-btn-icon-left[data-v-0b2885c5]{\n  float:left\n}\n.mx-btn-icon-double-right[data-v-0b2885c5],.mx-btn-icon-right[data-v-0b2885c5]{\n  float:right\n}\n.mx-calendar-header-label[data-v-0b2885c5]{\n  font-size:14px\n}\n.mx-calendar-decade-separator[data-v-0b2885c5]{\n  margin:0 2px\n}\n.mx-calendar-decade-separator[data-v-0b2885c5]:after{\n  content:\"~\"\n}\n.mx-calendar-content[data-v-0b2885c5]{\n  position:relative;\n  height:224px;\n  box-sizing:border-box\n}\n.mx-calendar-content .cell[data-v-0b2885c5]{\n  cursor:pointer\n}\n.mx-calendar-content .cell[data-v-0b2885c5]:hover{\n  color:#73879c;\n  background-color:rgb(243.15,248.85,253.8)\n}\n.mx-calendar-content .cell.active[data-v-0b2885c5]{\n  color:#fff;\n  background-color:#1284e7\n}\n.mx-calendar-content .cell.hover-in-range[data-v-0b2885c5],.mx-calendar-content .cell.in-range[data-v-0b2885c5]{\n  color:#73879c;\n  background-color:rgb(219.45,236.55,251.4)\n}\n.mx-calendar-content .cell.disabled[data-v-0b2885c5]{\n  cursor:not-allowed;\n  color:#ccc;\n  background-color:#f3f3f3\n}\n.mx-calendar-week-mode .mx-date-row[data-v-0b2885c5]{\n  cursor:pointer\n}\n.mx-calendar-week-mode .mx-date-row[data-v-0b2885c5]:hover{\n  background-color:rgb(243.15,248.85,253.8)\n}\n.mx-calendar-week-mode .mx-date-row.mx-active-week[data-v-0b2885c5]{\n  background-color:rgb(219.45,236.55,251.4)\n}\n.mx-calendar-week-mode .mx-date-row .cell.active[data-v-0b2885c5],.mx-calendar-week-mode .mx-date-row .cell[data-v-0b2885c5]:hover{\n  color:inherit;\n  background-color:transparent\n}\n.mx-week-number[data-v-0b2885c5]{\n  opacity:.5\n}\n.mx-table[data-v-0b2885c5]{\n  table-layout:fixed;\n  border-collapse:separate;\n  border-spacing:0;\n  width:100%;\n  height:100%;\n  box-sizing:border-box;\n  text-align:center\n}\n.mx-table th[data-v-0b2885c5]{\n  font-weight:500\n}\n.mx-table td[data-v-0b2885c5],.mx-table th[data-v-0b2885c5]{\n  padding:0;\n  vertical-align:middle\n}\n.mx-table-date td[data-v-0b2885c5],.mx-table-date th[data-v-0b2885c5]{\n  font-size:12px\n}\n.mx-table-date .today[data-v-0b2885c5]{\n  color:rgb(41.7,144.3,233.4)\n}\n.mx-table-date .cell.not-current-month[data-v-0b2885c5]{\n  color:#ccc;\n  background:none\n}\n.mx-time[data-v-0b2885c5]{\n  flex:1;\n  width:224px;\n  background:#fff\n}\n.mx-time+.mx-time[data-v-0b2885c5]{\n  border-left:1px solid #e8e8e8\n}\n.mx-calendar-time[data-v-0b2885c5]{\n  position:absolute;\n  top:0;\n  left:0;\n  width:100%;\n  height:100%\n}\n.mx-time-header[data-v-0b2885c5]{\n  border-bottom:1px solid #e8e8e8\n}\n.mx-time-content[data-v-0b2885c5]{\n  height:224px;\n  box-sizing:border-box;\n  overflow:hidden\n}\n.mx-time-columns[data-v-0b2885c5]{\n  display:flex;\n  width:100%;\n  height:100%;\n  overflow:hidden\n}\n.mx-time-column[data-v-0b2885c5]{\n  flex:1;\n  position:relative;\n  border-left:1px solid #e8e8e8;\n  text-align:center\n}\n.mx-time-column[data-v-0b2885c5]:first-child{\n  border-left:0\n}\n.mx-time-column .mx-time-list[data-v-0b2885c5]{\n  margin:0;\n  padding:0;\n  list-style:none\n}\n.mx-time-column .mx-time-list[data-v-0b2885c5]:after{\n  content:\"\";\n  display:block;\n  height:192px\n}\n.mx-time-column .mx-time-item[data-v-0b2885c5]{\n  cursor:pointer;\n  font-size:12px;\n  height:32px;\n  line-height:32px\n}\n.mx-time-column .mx-time-item[data-v-0b2885c5]:hover{\n  color:#73879c;\n  background-color:rgb(243.15,248.85,253.8)\n}\n.mx-time-column .mx-time-item.active[data-v-0b2885c5]{\n  color:#1284e7;\n  background-color:transparent;\n  font-weight:700\n}\n.mx-time-column .mx-time-item.disabled[data-v-0b2885c5]{\n  cursor:not-allowed;\n  color:#ccc;\n  background-color:#f3f3f3\n}\n.mx-time-option[data-v-0b2885c5]{\n  cursor:pointer;\n  padding:8px 10px;\n  font-size:14px;\n  line-height:20px\n}\n.mx-time-option[data-v-0b2885c5]:hover{\n  color:#73879c;\n  background-color:rgb(243.15,248.85,253.8)\n}\n.mx-time-option.active[data-v-0b2885c5]{\n  color:#1284e7;\n  background-color:transparent;\n  font-weight:700\n}\n.mx-time-option.disabled[data-v-0b2885c5]{\n  cursor:not-allowed;\n  color:#ccc;\n  background-color:#f3f3f3\n}\n.el-input .el-input__inner[data-v-0b2885c5]:focus,.el-range-editor.is-active[data-v-0b2885c5],.el-range-editor.is-active[data-v-0b2885c5]:hover,.el-select .el-input.is-focus .el-input__inner[data-v-0b2885c5],.el-select .el-input__inner[data-v-0b2885c5]:focus,.el-textarea .el-input__inner[data-v-0b2885c5]:focus{\n  border:1.3px solid #1b63d4!important;\n  box-shadow:0 2px 10px rgba(187,209,243,.5)\n}\n.mx-input[data-v-0b2885c5]{\n  height:40px!important\n}\n.mx-datepicker-sidebar[data-v-0b2885c5]{\n  width:151px!important\n}\n.mx-table-date td[data-v-0b2885c5],.mx-table-date th[data-v-0b2885c5]{\n  height:32px;\n  font-size:14px!important\n}\n.mx-btn-shortcut[data-v-0b2885c5]{\n  display:block;\n  padding:0 6px;\n  line-height:30px!important\n}\n[data-v-0b2885c5]:root{\n  --vs-line-height:1.6\n}\n.btn-popover[data-v-0b2885c5]{\n  height:40px;\n  background-color:#fff;\n  width:100%;\n  padding:10px;\n  cursor:pointer\n}\n.btn-popover .title-1[data-v-0b2885c5]{\n  font-weight:400;\n  font-size:16px;\n  color:#454545;\n  margin-left:10px\n}\n.btn-popover[data-v-0b2885c5]:hover{\n  background-color:#f3f4f6\n}\n.el-popover[data-v-0b2885c5]{\n  padding:0!important;\n  border-radius:5px!important\n}\n.el-upload[data-v-0b2885c5]{\n  width:100%\n}\n.el-upload-dragger[data-v-0b2885c5]{\n  width:100%!important;\n  background:linear-gradient(0deg,rgba(33,150,243,.03),rgba(33,150,243,.03)),#fff!important;\n  border:1px dashed transparent!important;\n  border-radius:5px!important;\n  height:100%!important\n}\n.kg-popup[data-v-0b2885c5]{\n  transition:all .5s ease-in-out;\n  position:fixed;\n  top:0;\n  left:50%;\n  transform:translateX(-50%)\n}\n.noselect[data-v-0b2885c5]{\n  -webkit-touch-callout:none;\n  -webkit-user-select:none;\n  -moz-user-select:none;\n  user-select:none\n}\n.ProseMirror[data-v-0b2885c5]{\n  border:0;\n  outline:none\n}\n.ProseMirror>*+*[data-v-0b2885c5]{\n  margin-top:.75em\n}\n.ProseMirror ol[data-v-0b2885c5],.ProseMirror ul[data-v-0b2885c5]{\n  padding:0 1rem\n}\n.ProseMirror h1[data-v-0b2885c5],.ProseMirror h2[data-v-0b2885c5],.ProseMirror h3[data-v-0b2885c5],.ProseMirror h4[data-v-0b2885c5],.ProseMirror h5[data-v-0b2885c5],.ProseMirror h6[data-v-0b2885c5]{\n  line-height:1.1\n}\n.ProseMirror code[data-v-0b2885c5]{\n  background-color:rgba(97,97,97,.1);\n  color:#616161\n}\n.ProseMirror pre[data-v-0b2885c5]{\n  background:#0d0d0d;\n  color:#fff;\n  font-family:\"JetBrainsMono\",monospace;\n  padding:.75rem 1rem;\n  border-radius:.5rem\n}\n.ProseMirror pre code[data-v-0b2885c5]{\n  color:inherit;\n  padding:0;\n  background:none;\n  font-size:.8rem\n}\n.ProseMirror img[data-v-0b2885c5]{\n  max-width:100%;\n  height:auto\n}\n.ProseMirror blockquote[data-v-0b2885c5]{\n  padding-left:1rem;\n  border-left:2px solid rgba(13,13,13,.1)\n}\n.ProseMirror hr[data-v-0b2885c5]{\n  border:none;\n  border-top:2px solid rgba(13,13,13,.1);\n  margin:2rem 0\n}\n.ProseMirror[data-v-0b2885c5]:focus-visible{\n  outline:none\n}\n.el-color-picker__trigger[data-v-0b2885c5]{\n  border:0!important;\n  padding:0!important;\n  outline:none!important\n}\n.el-color-picker__icon[data-v-0b2885c5]{\n  visibility:hidden!important\n}\n.el-color-picker--mini .el-color-picker__trigger[data-v-0b2885c5],.el-color-picker__color[data-v-0b2885c5]{\n  height:22px!important;\n  width:22px!important\n}\n.el-color-picker__color[data-v-0b2885c5]{\n  padding:0!important;\n  border:0!important\n}\n.el-color-picker__empty[data-v-0b2885c5]{\n  padding-top:1.4px!important\n}\n.el-color-picker--mini[data-v-0b2885c5]{\n  height:22px!important\n}\n.el-color-picker__color-inner[data-v-0b2885c5]{\n  border:1px solid #e2e2e2!important\n}\n.el-table thead[data-v-0b2885c5]{\n  color:#5c6b7a!important;\n  font-family:\"Cabin\"!important\n}\n.el-table thead[data-v-0b2885c5],.th[data-v-0b2885c5]{\n  font-weight:600!important\n}\n.el-button--mini[data-v-0b2885c5],.el-button--text[data-v-0b2885c5],.el-date-range-picker__header div[data-v-0b2885c5],.el-date-table td span[data-v-0b2885c5],.el-input__inner[data-v-0b2885c5],.el-picker-panel__shortcut[data-v-0b2885c5],.el-select-dropdown__item[data-v-0b2885c5],.el-select-dropdown__item.hover[data-v-0b2885c5],.el-select-dropdown__item[data-v-0b2885c5]:hover,.el-time-spinner__item[data-v-0b2885c5]{\n  font-family:\"Cabin\"!important\n}\n.el-progress-bar__inner[data-v-0b2885c5],.el-progress-bar__outer[data-v-0b2885c5]{\n  border-bottom-left-radius:100px!important;\n  border-top-left-radius:100px!important\n}\n.el-dropdown .el-dropdown__caret-button[data-v-0b2885c5]{\n  bottom:2px!important\n}\n.el-dropdown-menu[data-v-0b2885c5],.el-dropdown-menu__item[data-v-0b2885c5]{\n  padding:0!important\n}\nbutton[data-v-0b2885c5]:active,button[data-v-0b2885c5]:focus{\n  outline:0!important\n}\n.el-input-group__append[data-v-0b2885c5]{\n  padding:0!important\n}\n.el-input-group__prepend[data-v-0b2885c5]{\n  padding-left:5px!important;\n  padding-right:5px!important\n}\n.el-menu-item[data-v-0b2885c5],.el-submenu__title[data-v-0b2885c5]{\n  height:40px!important;\n  line-height:40px!important;\n  font-family:\"Cabin\"!important;\n  font-size:16px!important;\n  font-style:normal!important;\n  font-weight:400!important;\n  color:#5c6b7a!important;\n  margin-bottom:10px!important;\n  border-left:4px solid transparent!important\n}\n.el-menu-item.is-active[data-v-0b2885c5]{\n  color:#1b63d4!important;\n  font-weight:600!important;\n  border-left:4px solid #1b63d4!important;\n  border-top-left-radius:2px!important;\n  border-bottom-left-radius:2px!important\n}\n.el-menu--collapse[data-v-0b2885c5]{\n  width:80px!important\n}\n.el-menu[data-v-0b2885c5]{\n  border-right:0!important\n}\n.el-dialog__body[data-v-0b2885c5],.el-dialog__header[data-v-0b2885c5]{\n  padding:0!important\n}\n.el-dialog[data-v-0b2885c5]{\n  border-radius:10px!important\n}\n.card-dialog[data-v-0b2885c5]{\n  padding:20px!important\n}\n.vue-swatches__trigger[data-v-0b2885c5]{\n  width:22px!important;\n  height:22px!important;\n  border-radius:2px!important\n}\n.vue-swatches[data-v-0b2885c5]{\n  height:22px!important\n}\n.CodeMirror[data-v-0b2885c5]{\n  height:calc(100vh - 150px)!important\n}\n.vue-swatches__trigger[data-v-0b2885c5]{\n  border:1px solid #e2e2e2!important\n}\n.btn-back[data-v-0b2885c5]{\n  width:-moz-fit-content;\n  width:fit-content;\n  background:#fff;\n  border:1px solid #e2e2e2;\n  border-radius:5px;\n  height:34px;\n  padding-left:15px;\n  padding-right:15px;\n  cursor:pointer\n}\n.btn-back .name-btn[data-v-0b2885c5]{\n  font-family:\"Cabin\";\n  font-weight:700;\n  font-size:14px;\n  padding-bottom:1px;\n  color:#1b63d4;\n  padding-left:10px\n}\n.btn-back[data-v-0b2885c5]:hover{\n  background-color:#f3f4f6;\n  border:1px solid #f3f4f6\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/button/backPage.vue?vue&type=template&id=0b2885c5&scoped=true
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "flex items-center justify-center btn-back no-select"
  }, [_c('IconLeft'), _vm._ssrNode(" <span class=\"name-btn\" data-v-0b2885c5>" + _vm._ssrEscape(_vm._s(_vm.text)) + "</span>")], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/button/backPage.vue?vue&type=template&id=0b2885c5&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/button/backPage.vue?vue&type=script&lang=js
/* harmony default export */ var backPagevue_type_script_lang_js = ({
  props: {
    text: {
      type: String,
      default: ''
    }
  }
});
// CONCATENATED MODULE: ./components/button/backPage.vue?vue&type=script&lang=js
 /* harmony default export */ var button_backPagevue_type_script_lang_js = (backPagevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/button/backPage.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(139)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  button_backPagevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0b2885c5",
  "2a7d7a47"
  
)

/* harmony default export */ var backPage = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {IconLeft: __webpack_require__(127).default})


/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/upload.efec700.svg";

/***/ }),

/***/ 333:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/checklist.65b6274.svg";

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URL) {/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuex__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'UploadCreative',
  layout: 'default',

  data() {
    return {
      imageLoaded: false,
      imageData: '',
      imageUrl: '',
      step1: true,
      step2: false,
      checkAll: false,
      data: {
        name: '',
        dimension: '',
        url: 'https://',
        previewUrl: '',
        backupImg: ''
      },
      uploadPercentage: 0,
      isLoading: false,
      messageError: '',
      showMessage: false
    };
  },

  computed: { ...Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])({
      orgId: state => {
        return state.user.orgId;
      } // dataResolution: (state) => {
      //   return state.creative.dataResolution
      // }

    }),

    disabledSave() {
      if (this.data.name === '' || this.data.dimension === '' || this.data.url === '') {
        return false;
      } else {
        return true;
      }
    }

  },

  mounted() {
    this.getResolution();
  },

  methods: {
    save() {
      this.$notifier.showMessage({
        content: 'Creating creative...',
        type: 'loading'
      });
      const data = {
        name: this.data.name,
        resolutionId: this.data.dimension,
        clickUrl: this.data.url,
        previewUrl: this.data.previewUrl,
        backupImg: this.data.backupImg
      };
      const x = setTimeout(() => this.$store.dispatch('creative/createCreativeCustom', data).then(res => {
        if (res.status === 201 || res.status === 200) {
          this.$router.push({
            path: '/creative'
          });
          this.$notifier.showMessage({
            content: 'Creative created.',
            type: 'success'
          });
          clearInterval(x);
        } else {
          this.showMessage = true;
          const keys = Object.keys(res.data.data.errors[0]);
          const arr = [];
          keys.forEach((key, index) => {
            arr.push(res.data.data.errors[0][key]);
          });
          this.messageError = arr.join(', ');
          this.$notifier.showMessage({
            content: 'Creative failed. Please try again! ' + this.messageError,
            type: 'failed'
          });
          clearInterval(x);
        }
      }).catch(() => {
        this.isLoading = false;
        clearInterval(x);
      }), 1000);
    },

    async getResolution() {
      this.isLoading = true;
      await this.$axios.get('creative/resolutions?orgId=' + this.orgId + '&all=true').then(res => {
        this.dataResolution = res.data.data;
        this.isLoading = false;
      }).catch(() => {
        this.isLoading = false;
      }); // this.$store
      //   .dispatch('creative/getResolution')
      //   .then(() => {
      //     this.isLoading = false
      //   })
      //   .catch(() => {
      //     this.isLoading = false
      //   })
    },

    removeExtension(filename) {
      return filename.substring(0, filename.lastIndexOf('.')) || filename;
    },

    continueTab() {
      this.step1 = false;
      this.step2 = true;
    },

    async uploadZIP() {
      this.imageLoaded = true;
      const data = new FormData();
      data.append('file', this.imageData.raw);
      await this.$axios.post('zip', data, {
        headers: {
          'Content-Type': 'application/json'
        },
        onUploadProgress: function (progressEvent) {
          this.uploadPercentage = parseInt(Math.round(progressEvent.loaded / progressEvent.total * 100));
        }.bind(this)
      }).then(res => {
        this.data.previewUrl = res.data.previewUrl;
        this.data.backupImg = res.data.backupImg;
      }).catch(error => {
        this.$notifier.showMessage({
          content: 'Upload failed. Please try again ! ' + error,
          type: 'failed'
        });
        this.imageLoaded = false;
      });
    },

    back() {
      this.$router.push({
        path: '/creative'
      });
    },

    backStep1() {
      this.imageData = '';
      this.step1 = true;
      this.step2 = false;
    },

    beforeAvatarUpload(file) {},

    handleChange(file) {
      const formatData = file.raw.type;
      const origins = ['image/gif', 'image/jpg', 'image/jpeg', 'image/png', 'application/x-zip', 'application/x-zip-compressed', 'application/zip', 'application/zip-compressed', 'application/octet-stream', 'multipart/x-zip'];

      if (!origins.includes(formatData)) {
        this.$notifier.showMessage({
          content: '.gif, .jpg/.jpeg, .png, .js, .txt, .html, .html, .zip. Maximum of 50 files',
          type: 'failed'
        });
      } else if (file.size / 1000 > 1000) {
        this.$notifier.showMessage({
          content: 'File size can not exceed 1000 KB!',
          type: 'failed'
        });
      } else {
        this.imageData = file;
        this.imageLoaded = false;
        this.imageUrl = URL.createObjectURL(file.raw);
        this.data.name = this.removeExtension(this.imageData.name);
        this.uploadZIP();
      }
    }

  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(20)["URL"]))

/***/ }),

/***/ 380:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(448);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("8b276e2a", content, true, context)
};

/***/ }),

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_upload_vue_vue_type_style_index_0_id_2a0440b3_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(380);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_upload_vue_vue_type_style_index_0_id_2a0440b3_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_upload_vue_vue_type_style_index_0_id_2a0440b3_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_upload_vue_vue_type_style_index_0_id_2a0440b3_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_upload_vue_vue_type_style_index_0_id_2a0440b3_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 448:
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
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n@font-face{\n  font-family:\"Cabin\";\n\n  src:local(\"Cabin\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\")\n}\n@font-face{\n  font-family:\"Roboto Mono\";\n\n  src:local(\"Roboto Mono\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\")\n}\n.header-1[data-v-2a0440b3]{\n  font-size:32px\n}\n.header-1[data-v-2a0440b3],.header-2[data-v-2a0440b3]{\n  font-family:\"Cabin\";\n  font-weight:600;\n  color:#454545\n}\n.header-2[data-v-2a0440b3]{\n  font-size:28px\n}\n.header-3[data-v-2a0440b3]{\n  font-size:24px\n}\n.header-3[data-v-2a0440b3],.header-4[data-v-2a0440b3]{\n  font-family:\"Cabin\";\n  font-weight:600;\n  color:#454545\n}\n.header-4[data-v-2a0440b3]{\n  font-size:20px\n}\n.header-5[data-v-2a0440b3]{\n  font-size:18px\n}\n.header-5[data-v-2a0440b3],.header-6[data-v-2a0440b3]{\n  font-family:\"Cabin\";\n  font-weight:600;\n  color:#454545\n}\n.header-6[data-v-2a0440b3]{\n  font-size:14px\n}\n.subtitle-1[data-v-2a0440b3]{\n  color:#757575\n}\n.subtitle-1[data-v-2a0440b3],.subtitle-2[data-v-2a0440b3]{\n  font-family:\"Cabin\";\n  font-size:16px;\n  font-weight:400\n}\n.subtitle-2[data-v-2a0440b3]{\n  color:#454545\n}\n.no-select[data-v-2a0440b3]{\n  -webkit-touch-callout:none;\n  -webkit-user-select:none;\n  -moz-user-select:none;\n  user-select:none\n}\n.mx-icon-double-left[data-v-2a0440b3]:after,.mx-icon-double-left[data-v-2a0440b3]:before,.mx-icon-double-right[data-v-2a0440b3]:after,.mx-icon-double-right[data-v-2a0440b3]:before,.mx-icon-left[data-v-2a0440b3]:before,.mx-icon-right[data-v-2a0440b3]:before{\n  content:\"\";\n  position:relative;\n  top:-1px;\n  display:inline-block;\n  width:10px;\n  height:10px;\n  vertical-align:middle;\n  border-color:currentcolor;\n  border-style:solid;\n  border-width:2px 0 0 2px;\n  border-radius:1px;\n  box-sizing:border-box;\n  transform-origin:center;\n  transform:rotate(-45deg) scale(.7)\n}\n.mx-icon-double-left[data-v-2a0440b3]:after{\n  left:-4px\n}\n.mx-icon-double-right[data-v-2a0440b3]:before{\n  left:4px\n}\n.mx-icon-double-right[data-v-2a0440b3]:after,.mx-icon-double-right[data-v-2a0440b3]:before,.mx-icon-right[data-v-2a0440b3]:before{\n  transform:rotate(135deg) scale(.7)\n}\n.mx-btn[data-v-2a0440b3]{\n  box-sizing:border-box;\n  line-height:1;\n  font-size:14px;\n  font-weight:500;\n  padding:7px 15px;\n  margin:0;\n  cursor:pointer;\n  background-color:transparent;\n  outline:none;\n  border:1px solid rgba(0,0,0,.1);\n  border-radius:4px;\n  color:#73879c;\n  white-space:nowrap\n}\n.mx-btn[data-v-2a0440b3]:hover{\n  border-color:#1284e7;\n  color:#1284e7\n}\n.mx-btn.disabled[data-v-2a0440b3],.mx-btn[data-v-2a0440b3]:disabled{\n  color:#ccc;\n  cursor:not-allowed\n}\n.mx-btn-text[data-v-2a0440b3]{\n  border:0;\n  padding:0 4px;\n  text-align:left;\n  line-height:inherit\n}\n.mx-scrollbar[data-v-2a0440b3]{\n  height:100%\n}\n.mx-scrollbar:hover .mx-scrollbar-track[data-v-2a0440b3]{\n  opacity:1\n}\n.mx-scrollbar-wrap[data-v-2a0440b3]{\n  height:100%;\n  overflow-x:hidden;\n  overflow-y:auto\n}\n.mx-scrollbar-track[data-v-2a0440b3]{\n  position:absolute;\n  top:2px;\n  right:2px;\n  bottom:2px;\n  width:6px;\n  z-index:1;\n  border-radius:4px;\n  opacity:0;\n  transition:opacity .24s ease-out\n}\n.mx-scrollbar-track .mx-scrollbar-thumb[data-v-2a0440b3]{\n  position:absolute;\n  width:100%;\n  height:0;\n  cursor:pointer;\n  border-radius:inherit;\n  background-color:rgba(144,147,153,.3);\n  transition:background-color .3s\n}\n.mx-zoom-in-down-enter-active[data-v-2a0440b3],.mx-zoom-in-down-leave-active[data-v-2a0440b3]{\n  opacity:1;\n  transform:scaleY(1);\n  transition:transform .3s cubic-bezier(.23,1,.32,1),opacity .3s cubic-bezier(.23,1,.32,1);\n  transform-origin:center top\n}\n.mx-zoom-in-down-enter[data-v-2a0440b3],.mx-zoom-in-down-enter-from[data-v-2a0440b3],.mx-zoom-in-down-leave-to[data-v-2a0440b3]{\n  opacity:0;\n  transform:scaleY(0)\n}\n.mx-datepicker[data-v-2a0440b3]{\n  position:relative;\n  display:inline-block;\n  width:210px\n}\n.mx-datepicker svg[data-v-2a0440b3]{\n  width:1em;\n  height:1em;\n  vertical-align:-.15em;\n  fill:currentColor;\n  overflow:hidden\n}\n.mx-datepicker-range[data-v-2a0440b3]{\n  width:320px\n}\n.mx-datepicker-inline[data-v-2a0440b3]{\n  width:auto\n}\n.mx-input-wrapper[data-v-2a0440b3]{\n  position:relative\n}\n.mx-input[data-v-2a0440b3]{\n  display:inline-block;\n  box-sizing:border-box;\n  width:100%;\n  height:34px;\n  padding:6px 30px 6px 10px;\n  font-size:14px;\n  line-height:1.4;\n  color:#555;\n  background-color:#fff;\n  border:1px solid #ccc;\n  border-radius:4px;\n  box-shadow:inset 0 1px 1px rgba(0,0,0,.075)\n}\n.mx-input[data-v-2a0440b3]:focus,.mx-input[data-v-2a0440b3]:hover{\n  border-color:#409aff\n}\n.mx-input.disabled[data-v-2a0440b3],.mx-input[data-v-2a0440b3]:disabled{\n  color:#ccc;\n  background-color:#f3f3f3;\n  border-color:#ccc;\n  cursor:not-allowed\n}\n.mx-input[data-v-2a0440b3]:focus{\n  outline:none\n}\n.mx-input[data-v-2a0440b3]::-ms-clear{\n  display:none\n}\n.mx-icon-calendar[data-v-2a0440b3],.mx-icon-clear[data-v-2a0440b3]{\n  position:absolute;\n  top:50%;\n  right:8px;\n  transform:translateY(-50%);\n  font-size:16px;\n  line-height:1;\n  color:rgba(0,0,0,.5);\n  vertical-align:middle\n}\n.mx-icon-clear[data-v-2a0440b3]{\n  cursor:pointer\n}\n.mx-icon-clear[data-v-2a0440b3]:hover{\n  color:rgba(0,0,0,.8)\n}\n.mx-datepicker-main[data-v-2a0440b3]{\n  font:14px/1.5 \"Helvetica Neue\",Helvetica,Arial,\"Microsoft Yahei\",sans-serif;\n  color:#73879c;\n  background-color:#fff;\n  border:1px solid #e8e8e8\n}\n.mx-datepicker-popup[data-v-2a0440b3]{\n  position:absolute;\n  margin-top:1px;\n  margin-bottom:1px;\n  box-shadow:0 6px 12px rgba(0,0,0,.175);\n  z-index:2001\n}\n.mx-datepicker-sidebar[data-v-2a0440b3]{\n  float:left;\n  box-sizing:border-box;\n  width:100px;\n  padding:6px;\n  overflow:auto\n}\n.mx-datepicker-sidebar+.mx-datepicker-content[data-v-2a0440b3]{\n  margin-left:100px;\n  border-left:1px solid #e8e8e8\n}\n.mx-datepicker-body[data-v-2a0440b3]{\n  position:relative;\n  -webkit-user-select:none;\n     -moz-user-select:none;\n          user-select:none\n}\n.mx-btn-shortcut[data-v-2a0440b3]{\n  line-height:24px\n}\n.mx-range-wrapper[data-v-2a0440b3]{\n  display:flex\n}\n@media(max-width:750px){\n.mx-range-wrapper[data-v-2a0440b3]{\n    flex-direction:column\n}\n}\n.mx-datepicker-header[data-v-2a0440b3]{\n  padding:6px 8px;\n  border-bottom:1px solid #e8e8e8\n}\n.mx-datepicker-footer[data-v-2a0440b3]{\n  padding:6px 8px;\n  text-align:right;\n  border-top:1px solid #e8e8e8\n}\n.mx-calendar[data-v-2a0440b3]{\n  box-sizing:border-box;\n  width:248px;\n  padding:6px 12px\n}\n.mx-calendar+.mx-calendar[data-v-2a0440b3]{\n  border-left:1px solid #e8e8e8\n}\n.mx-calendar-header[data-v-2a0440b3],.mx-time-header[data-v-2a0440b3]{\n  box-sizing:border-box;\n  height:34px;\n  line-height:34px;\n  text-align:center;\n  overflow:hidden\n}\n.mx-btn-icon-double-left[data-v-2a0440b3],.mx-btn-icon-left[data-v-2a0440b3]{\n  float:left\n}\n.mx-btn-icon-double-right[data-v-2a0440b3],.mx-btn-icon-right[data-v-2a0440b3]{\n  float:right\n}\n.mx-calendar-header-label[data-v-2a0440b3]{\n  font-size:14px\n}\n.mx-calendar-decade-separator[data-v-2a0440b3]{\n  margin:0 2px\n}\n.mx-calendar-decade-separator[data-v-2a0440b3]:after{\n  content:\"~\"\n}\n.mx-calendar-content[data-v-2a0440b3]{\n  position:relative;\n  height:224px;\n  box-sizing:border-box\n}\n.mx-calendar-content .cell[data-v-2a0440b3]{\n  cursor:pointer\n}\n.mx-calendar-content .cell[data-v-2a0440b3]:hover{\n  color:#73879c;\n  background-color:rgb(243.15,248.85,253.8)\n}\n.mx-calendar-content .cell.active[data-v-2a0440b3]{\n  color:#fff;\n  background-color:#1284e7\n}\n.mx-calendar-content .cell.hover-in-range[data-v-2a0440b3],.mx-calendar-content .cell.in-range[data-v-2a0440b3]{\n  color:#73879c;\n  background-color:rgb(219.45,236.55,251.4)\n}\n.mx-calendar-content .cell.disabled[data-v-2a0440b3]{\n  cursor:not-allowed;\n  color:#ccc;\n  background-color:#f3f3f3\n}\n.mx-calendar-week-mode .mx-date-row[data-v-2a0440b3]{\n  cursor:pointer\n}\n.mx-calendar-week-mode .mx-date-row[data-v-2a0440b3]:hover{\n  background-color:rgb(243.15,248.85,253.8)\n}\n.mx-calendar-week-mode .mx-date-row.mx-active-week[data-v-2a0440b3]{\n  background-color:rgb(219.45,236.55,251.4)\n}\n.mx-calendar-week-mode .mx-date-row .cell.active[data-v-2a0440b3],.mx-calendar-week-mode .mx-date-row .cell[data-v-2a0440b3]:hover{\n  color:inherit;\n  background-color:transparent\n}\n.mx-week-number[data-v-2a0440b3]{\n  opacity:.5\n}\n.mx-table[data-v-2a0440b3]{\n  table-layout:fixed;\n  border-collapse:separate;\n  border-spacing:0;\n  width:100%;\n  height:100%;\n  box-sizing:border-box;\n  text-align:center\n}\n.mx-table th[data-v-2a0440b3]{\n  font-weight:500\n}\n.mx-table td[data-v-2a0440b3],.mx-table th[data-v-2a0440b3]{\n  padding:0;\n  vertical-align:middle\n}\n.mx-table-date td[data-v-2a0440b3],.mx-table-date th[data-v-2a0440b3]{\n  font-size:12px\n}\n.mx-table-date .today[data-v-2a0440b3]{\n  color:rgb(41.7,144.3,233.4)\n}\n.mx-table-date .cell.not-current-month[data-v-2a0440b3]{\n  color:#ccc;\n  background:none\n}\n.mx-time[data-v-2a0440b3]{\n  flex:1;\n  width:224px;\n  background:#fff\n}\n.mx-time+.mx-time[data-v-2a0440b3]{\n  border-left:1px solid #e8e8e8\n}\n.mx-calendar-time[data-v-2a0440b3]{\n  position:absolute;\n  top:0;\n  left:0;\n  width:100%;\n  height:100%\n}\n.mx-time-header[data-v-2a0440b3]{\n  border-bottom:1px solid #e8e8e8\n}\n.mx-time-content[data-v-2a0440b3]{\n  height:224px;\n  box-sizing:border-box;\n  overflow:hidden\n}\n.mx-time-columns[data-v-2a0440b3]{\n  display:flex;\n  width:100%;\n  height:100%;\n  overflow:hidden\n}\n.mx-time-column[data-v-2a0440b3]{\n  flex:1;\n  position:relative;\n  border-left:1px solid #e8e8e8;\n  text-align:center\n}\n.mx-time-column[data-v-2a0440b3]:first-child{\n  border-left:0\n}\n.mx-time-column .mx-time-list[data-v-2a0440b3]{\n  margin:0;\n  padding:0;\n  list-style:none\n}\n.mx-time-column .mx-time-list[data-v-2a0440b3]:after{\n  content:\"\";\n  display:block;\n  height:192px\n}\n.mx-time-column .mx-time-item[data-v-2a0440b3]{\n  cursor:pointer;\n  font-size:12px;\n  height:32px;\n  line-height:32px\n}\n.mx-time-column .mx-time-item[data-v-2a0440b3]:hover{\n  color:#73879c;\n  background-color:rgb(243.15,248.85,253.8)\n}\n.mx-time-column .mx-time-item.active[data-v-2a0440b3]{\n  color:#1284e7;\n  background-color:transparent;\n  font-weight:700\n}\n.mx-time-column .mx-time-item.disabled[data-v-2a0440b3]{\n  cursor:not-allowed;\n  color:#ccc;\n  background-color:#f3f3f3\n}\n.mx-time-option[data-v-2a0440b3]{\n  cursor:pointer;\n  padding:8px 10px;\n  font-size:14px;\n  line-height:20px\n}\n.mx-time-option[data-v-2a0440b3]:hover{\n  color:#73879c;\n  background-color:rgb(243.15,248.85,253.8)\n}\n.mx-time-option.active[data-v-2a0440b3]{\n  color:#1284e7;\n  background-color:transparent;\n  font-weight:700\n}\n.mx-time-option.disabled[data-v-2a0440b3]{\n  cursor:not-allowed;\n  color:#ccc;\n  background-color:#f3f3f3\n}\n.el-input .el-input__inner[data-v-2a0440b3]:focus,.el-range-editor.is-active[data-v-2a0440b3],.el-range-editor.is-active[data-v-2a0440b3]:hover,.el-select .el-input.is-focus .el-input__inner[data-v-2a0440b3],.el-select .el-input__inner[data-v-2a0440b3]:focus,.el-textarea .el-input__inner[data-v-2a0440b3]:focus{\n  border:1.3px solid #1b63d4!important;\n  box-shadow:0 2px 10px rgba(187,209,243,.5)\n}\n.mx-input[data-v-2a0440b3]{\n  height:40px!important\n}\n.mx-datepicker-sidebar[data-v-2a0440b3]{\n  width:151px!important\n}\n.mx-table-date td[data-v-2a0440b3],.mx-table-date th[data-v-2a0440b3]{\n  height:32px;\n  font-size:14px!important\n}\n.mx-btn-shortcut[data-v-2a0440b3]{\n  display:block;\n  padding:0 6px;\n  line-height:30px!important\n}\n[data-v-2a0440b3]:root{\n  --vs-line-height:1.6\n}\n.btn-popover[data-v-2a0440b3]{\n  height:40px;\n  background-color:#fff;\n  width:100%;\n  padding:10px;\n  cursor:pointer\n}\n.btn-popover .title-1[data-v-2a0440b3]{\n  font-weight:400;\n  font-size:16px;\n  color:#454545;\n  margin-left:10px\n}\n.btn-popover[data-v-2a0440b3]:hover{\n  background-color:#f3f4f6\n}\n.el-popover[data-v-2a0440b3]{\n  padding:0!important;\n  border-radius:5px!important\n}\n.el-upload[data-v-2a0440b3]{\n  width:100%\n}\n.el-upload-dragger[data-v-2a0440b3]{\n  width:100%!important;\n  background:linear-gradient(0deg,rgba(33,150,243,.03),rgba(33,150,243,.03)),#fff!important;\n  border:1px dashed transparent!important;\n  border-radius:5px!important;\n  height:100%!important\n}\n.kg-popup[data-v-2a0440b3]{\n  transition:all .5s ease-in-out;\n  position:fixed;\n  top:0;\n  left:50%;\n  transform:translateX(-50%)\n}\n.noselect[data-v-2a0440b3]{\n  -webkit-touch-callout:none;\n  -webkit-user-select:none;\n  -moz-user-select:none;\n  user-select:none\n}\n.ProseMirror[data-v-2a0440b3]{\n  border:0;\n  outline:none\n}\n.ProseMirror>*+*[data-v-2a0440b3]{\n  margin-top:.75em\n}\n.ProseMirror ol[data-v-2a0440b3],.ProseMirror ul[data-v-2a0440b3]{\n  padding:0 1rem\n}\n.ProseMirror h1[data-v-2a0440b3],.ProseMirror h2[data-v-2a0440b3],.ProseMirror h3[data-v-2a0440b3],.ProseMirror h4[data-v-2a0440b3],.ProseMirror h5[data-v-2a0440b3],.ProseMirror h6[data-v-2a0440b3]{\n  line-height:1.1\n}\n.ProseMirror code[data-v-2a0440b3]{\n  background-color:rgba(97,97,97,.1);\n  color:#616161\n}\n.ProseMirror pre[data-v-2a0440b3]{\n  background:#0d0d0d;\n  color:#fff;\n  font-family:\"JetBrainsMono\",monospace;\n  padding:.75rem 1rem;\n  border-radius:.5rem\n}\n.ProseMirror pre code[data-v-2a0440b3]{\n  color:inherit;\n  padding:0;\n  background:none;\n  font-size:.8rem\n}\n.ProseMirror img[data-v-2a0440b3]{\n  max-width:100%;\n  height:auto\n}\n.ProseMirror blockquote[data-v-2a0440b3]{\n  padding-left:1rem;\n  border-left:2px solid rgba(13,13,13,.1)\n}\n.ProseMirror hr[data-v-2a0440b3]{\n  border:none;\n  border-top:2px solid rgba(13,13,13,.1);\n  margin:2rem 0\n}\n.ProseMirror[data-v-2a0440b3]:focus-visible{\n  outline:none\n}\n.el-color-picker__trigger[data-v-2a0440b3]{\n  border:0!important;\n  padding:0!important;\n  outline:none!important\n}\n.el-color-picker__icon[data-v-2a0440b3]{\n  visibility:hidden!important\n}\n.el-color-picker--mini .el-color-picker__trigger[data-v-2a0440b3],.el-color-picker__color[data-v-2a0440b3]{\n  height:22px!important;\n  width:22px!important\n}\n.el-color-picker__color[data-v-2a0440b3]{\n  padding:0!important;\n  border:0!important\n}\n.el-color-picker__empty[data-v-2a0440b3]{\n  padding-top:1.4px!important\n}\n.el-color-picker--mini[data-v-2a0440b3]{\n  height:22px!important\n}\n.el-color-picker__color-inner[data-v-2a0440b3]{\n  border:1px solid #e2e2e2!important\n}\n.el-table thead[data-v-2a0440b3]{\n  color:#5c6b7a!important;\n  font-family:\"Cabin\"!important\n}\n.el-table thead[data-v-2a0440b3],.th[data-v-2a0440b3]{\n  font-weight:600!important\n}\n.el-button--mini[data-v-2a0440b3],.el-button--text[data-v-2a0440b3],.el-date-range-picker__header div[data-v-2a0440b3],.el-date-table td span[data-v-2a0440b3],.el-input__inner[data-v-2a0440b3],.el-picker-panel__shortcut[data-v-2a0440b3],.el-select-dropdown__item[data-v-2a0440b3],.el-select-dropdown__item.hover[data-v-2a0440b3],.el-select-dropdown__item[data-v-2a0440b3]:hover,.el-time-spinner__item[data-v-2a0440b3]{\n  font-family:\"Cabin\"!important\n}\n.el-progress-bar__inner[data-v-2a0440b3],.el-progress-bar__outer[data-v-2a0440b3]{\n  border-bottom-left-radius:100px!important;\n  border-top-left-radius:100px!important\n}\n.el-dropdown .el-dropdown__caret-button[data-v-2a0440b3]{\n  bottom:2px!important\n}\n.el-dropdown-menu[data-v-2a0440b3],.el-dropdown-menu__item[data-v-2a0440b3]{\n  padding:0!important\n}\nbutton[data-v-2a0440b3]:active,button[data-v-2a0440b3]:focus{\n  outline:0!important\n}\n.el-input-group__append[data-v-2a0440b3]{\n  padding:0!important\n}\n.el-input-group__prepend[data-v-2a0440b3]{\n  padding-left:5px!important;\n  padding-right:5px!important\n}\n.el-menu-item[data-v-2a0440b3],.el-submenu__title[data-v-2a0440b3]{\n  height:40px!important;\n  line-height:40px!important;\n  font-family:\"Cabin\"!important;\n  font-size:16px!important;\n  font-style:normal!important;\n  font-weight:400!important;\n  color:#5c6b7a!important;\n  margin-bottom:10px!important;\n  border-left:4px solid transparent!important\n}\n.el-menu-item.is-active[data-v-2a0440b3]{\n  color:#1b63d4!important;\n  font-weight:600!important;\n  border-left:4px solid #1b63d4!important;\n  border-top-left-radius:2px!important;\n  border-bottom-left-radius:2px!important\n}\n.el-menu--collapse[data-v-2a0440b3]{\n  width:80px!important\n}\n.el-menu[data-v-2a0440b3]{\n  border-right:0!important\n}\n.el-dialog__body[data-v-2a0440b3],.el-dialog__header[data-v-2a0440b3]{\n  padding:0!important\n}\n.el-dialog[data-v-2a0440b3]{\n  border-radius:10px!important\n}\n.card-dialog[data-v-2a0440b3]{\n  padding:20px!important\n}\n.vue-swatches__trigger[data-v-2a0440b3]{\n  width:22px!important;\n  height:22px!important;\n  border-radius:2px!important\n}\n.vue-swatches[data-v-2a0440b3]{\n  height:22px!important\n}\n.CodeMirror[data-v-2a0440b3]{\n  height:calc(100vh - 150px)!important\n}\n.vue-swatches__trigger[data-v-2a0440b3]{\n  border:1px solid #e2e2e2!important\n}\n.upload-container[data-v-2a0440b3]{\n  padding:20px;\n  min-height:100vh\n}\n.upload-container .body-upload[data-v-2a0440b3]{\n  margin-top:20px\n}\n.upload-container .body-upload .card-upload[data-v-2a0440b3]{\n  height:100%;\n  background:#fff;\n  border:1px solid #c3ced9;\n  border-radius:10px\n}\n.upload-container .body-upload .card-upload .card-header[data-v-2a0440b3]{\n  font-family:\"Cabin\";\n  font-style:normal;\n  font-weight:600;\n  font-size:20px;\n  color:#2b3947;\n  padding:10px 20px;\n  border-bottom:1px solid #c3ced9\n}\n.upload-container .body-upload .card-upload .card-body[data-v-2a0440b3]{\n  background:#fafafa;\n  border-bottom:1px solid #c3ced9;\n  padding:20px\n}\n.upload-container .body-upload .card-upload .card-body .card-file-upload[data-v-2a0440b3]{\n  height:60px;\n  background:#fff;\n  border:1px solid #c3ced9;\n  border-radius:8px;\n  width:100%;\n  padding-left:12px;\n  padding-right:12px;\n  position:relative\n}\n.upload-container .body-upload .card-upload .card-body .card-file-upload .checklist-icon .name-list[data-v-2a0440b3]{\n  font-family:\"Cabin\";\n  font-style:normal;\n  font-weight:500;\n  font-size:16px;\n  color:#5c6b7a\n}\n.upload-container .body-upload .card-upload .card-body .card-file-upload .delete-btn[data-v-2a0440b3]{\n  width:40px;\n  height:40px;\n  background:#fff;\n  border:1px solid #c3ced9;\n  border-radius:5px\n}\n.upload-container .body-upload .card-upload .card-body .card-file-upload .delete-btn[data-v-2a0440b3]:hover{\n  background-color:#f3f4f6\n}\n.upload-container .body-upload .card-upload .card-body .upload-demo[data-v-2a0440b3],.upload-container .body-upload .card-upload .card-body .upload-demo .el-upload[data-v-2a0440b3]{\n  width:100%\n}\n.upload-container .body-upload .card-upload .card-body .upload-demo .upload-card[data-v-2a0440b3]{\n  height:100%;\n  border:1px dashed #1b63d4\n}\n.upload-container .body-upload .card-upload .card-body .upload-demo .upload-card .icon-upload[data-v-2a0440b3]{\n  height:45.5px;\n  padding-left:15px;\n  margin-right:8px\n}\n.upload-container .body-upload .card-upload .card-body .upload-demo .upload-card .empty-space[data-v-2a0440b3]{\n  font-weight:700;\n  font-size:14px;\n  text-align:left;\n  color:#333\n}\n.upload-container .body-upload .card-upload .card-body .upload-demo .upload-card .upload-name[data-v-2a0440b3]{\n  font-weight:400;\n  font-size:12px;\n  text-align:left;\n  color:#757575\n}\n.upload-container .body-upload .card-upload .card-body .upload-demo .upload-card .btn-upload[data-v-2a0440b3]{\n  width:90%;\n  margin-left:auto;\n  margin-right:auto;\n  background:#fff;\n  border:1px solid #1b63d4;\n  color:#1b63d4;\n  border-radius:5px;\n  height:34px;\n  margin-top:20px;\n  cursor:pointer\n}\n.upload-container .body-upload .card-upload .card-body .upload-demo .upload-card .btn-upload .name-btn[data-v-2a0440b3]{\n  font-weight:700;\n  font-size:14px;\n  color:#1b63d4;\n  padding-left:10px\n}\n.upload-container .body-upload .card-upload .card-body .upload-demo .upload-card .btn-upload[data-v-2a0440b3]:hover{\n  background-color:#f3f4f6;\n  border:0\n}\n.upload-container .body-upload .card-upload .footer-body[data-v-2a0440b3]{\n  padding:15px 20px\n}\n.upload-container .uploaded-creative[data-v-2a0440b3]{\n  margin-top:20px;\n  background:#fff;\n  border:1px solid #c3ced9;\n  border-radius:10px\n}\n.upload-container .uploaded-creative .card-uploads[data-v-2a0440b3]{\n  height:400px\n}\n.upload-container .uploaded-creative .card-uploads .left-side[data-v-2a0440b3]{\n  position:relative;\n  height:100%;\n  background:#fafafa;\n  border-radius:10px 0 0 10px;\n  border-right:1px solid #c3ced9\n}\n.upload-container .uploaded-creative .card-uploads .left-side .circle-next[data-v-2a0440b3]{\n  cursor:pointer;\n  position:absolute;\n  top:200px;\n  right:-18px;\n  width:36px;\n  height:36px;\n  background:#fff;\n  border:1px solid #c3ced9;\n  border-radius:1000px\n}\n.upload-container .uploaded-creative .card-uploads .left-side .header-uploads[data-v-2a0440b3]{\n  height:54px;\n  border-bottom:1px solid #c3ced9\n}\n.upload-container .uploaded-creative .card-uploads .left-side .header-uploads .title-uploads[data-v-2a0440b3]{\n  font-family:\"Cabin\";\n  font-style:normal;\n  font-weight:600;\n  font-size:18px;\n  color:#2b3947;\n  padding-left:20px\n}\n.upload-container .uploaded-creative .card-uploads .left-side .body-uploads[data-v-2a0440b3]{\n  padding:20px\n}\n.upload-container .uploaded-creative .card-uploads .left-side .body-uploads .tick-title[data-v-2a0440b3]{\n  font-family:\"Cabin\";\n  font-style:normal;\n  font-weight:400;\n  font-size:16px;\n  color:#5c6b7a\n}\n.upload-container .uploaded-creative .card-uploads .left-side .body-uploads .select-tick .select-all[data-v-2a0440b3]{\n  margin-left:13px;\n  font-family:\"Cabin\";\n  font-style:normal;\n  font-weight:400;\n  font-size:16px;\n  color:#5c6b7a\n}\n.upload-container .uploaded-creative .card-uploads .left-side .body-uploads .list-card[data-v-2a0440b3]{\n  margin-top:10px\n}\n.upload-container .uploaded-creative .card-uploads .left-side .body-uploads .list-card .card-list[data-v-2a0440b3]{\n  width:100%;\n  height:60px;\n  background:#fff;\n  border:1px solid #c3ced9;\n  border-radius:8px;\n  margin-bottom:10px;\n  padding-left:12px;\n  padding-right:12px\n}\n.upload-container .uploaded-creative .card-uploads .left-side .body-uploads .list-card .card-list .left-card .name-list[data-v-2a0440b3]{\n  font-family:\"Cabin\";\n  font-style:normal;\n  font-weight:500;\n  font-size:16px;\n  color:#5c6b7a\n}\n.upload-container .uploaded-creative .card-uploads .left-side .body-uploads .list-card .card-list .delete-btn[data-v-2a0440b3]{\n  width:40px;\n  height:40px;\n  background:#fff;\n  border:1px solid #c3ced9;\n  border-radius:5px\n}\n.upload-container .uploaded-creative .card-uploads .left-side .body-uploads .list-card .card-list .delete-btn[data-v-2a0440b3]:hover{\n  background-color:#f3f4f6\n}\n.upload-container .uploaded-creative .card-uploads .right-side[data-v-2a0440b3]{\n  border-radius:0 10px 10px 0;\n  background:#fff\n}\n.upload-container .uploaded-creative .card-uploads .right-side .header-uploads[data-v-2a0440b3]{\n  height:54px;\n  border-bottom:1px solid #c3ced9;\n  background:#fff\n}\n.upload-container .uploaded-creative .card-uploads .right-side .header-uploads .title-uploads[data-v-2a0440b3]{\n  font-family:\"Cabin\";\n  font-style:normal;\n  font-weight:600;\n  font-size:18px;\n  color:#2b3947;\n  padding-left:20px\n}\n.upload-container .uploaded-creative .card-uploads .right-side .form-panel[data-v-2a0440b3]{\n  height:346px;\n  padding-left:40px;\n  padding-right:40px\n}\n.upload-container .uploaded-creative .card-uploads .right-side .form-panel .title-form[data-v-2a0440b3]{\n  margin-bottom:5px;\n  font-family:\"Cabin\";\n  font-style:normal;\n  font-weight:400;\n  font-size:16px;\n  color:#5c6b7a\n}\n.upload-container .action-btn[data-v-2a0440b3]{\n  margin-top:20px;\n  width:100%;\n  height:70px;\n  background:#fff;\n  border:1px solid #c3ced9;\n  border-radius:10px\n}\n.upload-container .action-btn .save-btn[data-v-2a0440b3]{\n  width:165px;\n  background:#1b63d4;\n  border:1px solid #1b63d4;\n  color:#fff;\n  border-radius:5px;\n  height:34px;\n  padding-left:15px;\n  padding-right:15px;\n  margin-left:10px;\n  cursor:pointer\n}\n.upload-container .action-btn .save-btn .name-btn[data-v-2a0440b3]{\n  font-family:\"Cabin\";\n  font-weight:700;\n  font-size:14px;\n  padding-top:1.4px;\n  color:#fff;\n  padding-left:10px\n}\n.upload-container .action-btn .save-btn[data-v-2a0440b3]:hover{\n  background-color:#053f67;\n  border:0\n}\n.upload-container .action-btn .disabled-btn[data-v-2a0440b3]{\n  background:#f1f1f1;\n  cursor:not-allowed;\n  width:165px;\n  color:#fff;\n  border-radius:5px;\n  height:34px;\n  padding-left:15px;\n  padding-right:15px;\n  margin-left:10px\n}\n.upload-container .action-btn .disabled-btn .name-btn[data-v-2a0440b3]{\n  font-family:\"Cabin\";\n  font-weight:700;\n  font-size:14px;\n  color:#9a9a9a;\n  padding-left:10px;\n  padding-top:1.4px\n}\n.checkbox-kg[data-v-2a0440b3]{\n  cursor:pointer;\n  -webkit-user-select:none;\n  -moz-user-select:none;\n  user-select:none\n}\n.checkbox-kg input[data-v-2a0440b3]{\n  position:absolute;\n  opacity:0;\n  cursor:pointer;\n  height:0;\n  width:0\n}\n.checkmark[data-v-2a0440b3]{\n  position:absolute;\n  top:0;\n  left:0;\n  height:25px;\n  width:25px;\n  background-color:#eee\n}\n.checkbox-kg:hover input~.checkmark[data-v-2a0440b3]{\n  background-color:#ccc\n}\n.checkbox-kg input:checked~.checkmark[data-v-2a0440b3]{\n  background-color:#2196f3\n}\n.checkmark[data-v-2a0440b3]:after{\n  content:\"\";\n  position:absolute;\n  display:none\n}\n.checkbox-kg input:checked~.checkmark[data-v-2a0440b3]:after{\n  display:block\n}\n.checkbox-kg .checkmark[data-v-2a0440b3]:after{\n  left:9px;\n  top:5px;\n  width:5px;\n  height:10px;\n  border:solid #fff;\n  border-width:0 3px 3px 0;\n  transform:rotate(45deg)\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/creative/upload.vue?vue&type=template&id=2a0440b3&scoped=true
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "upload-container"
  }, [_vm._ssrNode("<div class=\"header-upload\" data-v-2a0440b3>", "</div>", [_c('ButtonBackPage', {
    attrs: {
      "text": "Back to Creative"
    },
    nativeOn: {
      "click": function ($event) {
        return _vm.back();
      }
    }
  })], 1), _vm._ssrNode(" "), _vm.step1 ? _vm._ssrNode("<div class=\"body-upload\" data-v-2a0440b3>", "</div>", [_vm._ssrNode("<div class=\"card-upload\" data-v-2a0440b3>", "</div>", [_vm._ssrNode("<div class=\"card-header\" data-v-2a0440b3>\n        Bulk Upload Creatives\n      </div> "), _vm._ssrNode("<div class=\"card-body\" data-v-2a0440b3>", "</div>", [_c('el-upload', {
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
    staticClass: "flex items-center justify-center"
  }, [_c('img', {
    staticClass: "mr-2 icon-upload",
    attrs: {
      "src": __webpack_require__(176)
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "flex flex-col"
  }, [_c('div', {
    staticClass: "empty-space"
  }, [_vm._v("\n                  Drop File Here or use button below\n                ")]), _vm._v(" "), _c('div', {
    staticClass: "upload-name"
  }, [_vm._v("\n                  Supported format: .gif, .jpg/.jpeg, .png, .js, "), _c('br'), _vm._v("\n                  .txt, .html, .html, .zip. Maximum of 50 files\n                ")])])]), _vm._v(" "), _c('button', {
    staticClass: "flex items-center justify-center btn-upload no-select"
  }, [_c('IconUpload'), _vm._v(" "), _c('span', {
    staticClass: "name-btn"
  }, [_vm._v("Choose File")])], 1)])]), _vm._ssrNode(" "), _vm.imageData ? _vm._ssrNode("<div class=\"grid grid-cols-2 gap-4\" style=\"margin-top: 10px\" data-v-2a0440b3>", "</div>", [_vm._ssrNode("<div class=\"card-file-upload flex items-center justify-between\" data-v-2a0440b3>", "</div>", [_vm._ssrNode("<div class=\"checklist-icon flex\" data-v-2a0440b3>" + (_vm.uploadPercentage == 100 ? "<img" + _vm._ssrAttr("src", __webpack_require__(333)) + " style=\"margin-right: 13px\" data-v-2a0440b3>" : "<!---->") + " <div class=\"name-list\" data-v-2a0440b3>" + _vm._ssrEscape("\n                " + _vm._s(_vm.imageData.name) + "\n              ") + "</div></div> "), _vm._ssrNode("<div class=\"delete-btn flex items-center justify-center cursor-pointer\" data-v-2a0440b3>", "</div>", [_c('IconDelete')], 1), _vm._ssrNode(" "), _vm.uploadPercentage < 100 ? _c('el-progress', {
    staticStyle: {
      "position": "absolute",
      "bottom": "0px",
      "width": "100%",
      "left": "0px"
    },
    attrs: {
      "percentage": _vm.uploadPercentage,
      "stroke-width": 4,
      "show-text": false
    }
  }) : _vm._e()], 2)]) : _vm._e()], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"footer-body flex justify-end\" data-v-2a0440b3>", "</div>", [_c('k-button', {
    staticClass: "grow",
    staticStyle: {
      "width": "130px",
      "margin-right": "10px"
    },
    attrs: {
      "text": "Discard",
      "type": "secondary"
    },
    nativeOn: {
      "click": function ($event) {
        return _vm.back();
      }
    }
  }), _vm._ssrNode(" "), _c('k-button', {
    staticClass: "grow",
    staticStyle: {
      "width": "130px"
    },
    attrs: {
      "text": "Continue",
      "type": _vm.imageData ? 'primary' : 'disabled'
    },
    nativeOn: {
      "click": function ($event) {
        return _vm.continueTab();
      }
    }
  })], 2)], 2)]) : _vm._e(), _vm._ssrNode(" "), _vm.step2 ? _vm._ssrNode("<div data-v-2a0440b3>", "</div>", [_vm._ssrNode("<div class=\"uploaded-creative\" data-v-2a0440b3>", "</div>", [_vm._ssrNode("<div class=\"grid grid-cols-2 card-uploads\" data-v-2a0440b3>", "</div>", [_vm._ssrNode("<div class=\"left-side\" data-v-2a0440b3>", "</div>", [_vm._ssrNode("<div class=\"header-uploads flex items-center justify-between\" data-v-2a0440b3><div class=\"title-uploads\" data-v-2a0440b3>\n              Uploaded Creatives\n            </div></div> "), _vm._ssrNode("<div class=\"body-uploads\" data-v-2a0440b3>", "</div>", [_vm._ssrNode("<div class=\"flex items-center justify-between\" data-v-2a0440b3><div class=\"tick-title\" data-v-2a0440b3>\n                Tick a creative to edit it’s properties\n              </div></div> "), _vm._ssrNode("<div class=\"list-card\" data-v-2a0440b3>", "</div>", [_vm._ssrNode("<div class=\"card-list flex items-center justify-between\" data-v-2a0440b3>", "</div>", [_vm._ssrNode("<div class=\"flex items-center left-card\" data-v-2a0440b3><div class=\"name-list\" data-v-2a0440b3>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.imageData.name) + "\n                  ") + "</div></div> "), _vm._ssrNode("<div class=\"delete-btn flex items-center justify-center cursor-pointer\" data-v-2a0440b3>", "</div>", [_c('IconDelete')], 1)], 2)])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"circle-next flex no-select items-center justify-center\" data-v-2a0440b3>", "</div>", [_c('IconArrowRight')], 1)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"right-side\" data-v-2a0440b3>", "</div>", [_vm._ssrNode("<div class=\"header-uploads flex items-center justify-between\" data-v-2a0440b3><div class=\"title-uploads\" data-v-2a0440b3>\n              Creatives Properties\n            </div></div> "), _vm._ssrNode("<div class=\"form-panel flex flex-col justify-center\" data-v-2a0440b3>", "</div>", [_vm._ssrNode("<div class=\"flex flex-col box-form\" data-v-2a0440b3>", "</div>", [_vm._ssrNode("<div class=\"title-form\" data-v-2a0440b3>\n                Creative Name\n              </div> "), _c('el-input', {
    staticStyle: {
      "width": "100%"
    },
    model: {
      value: _vm.data.name,
      callback: function ($$v) {
        _vm.$set(_vm.data, "name", $$v);
      },
      expression: "data.name"
    }
  })], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"flex flex-col box-form mt-4\" data-v-2a0440b3>", "</div>", [_vm._ssrNode("<div class=\"title-form\" data-v-2a0440b3>\n                Creative Dimension<span style=\"color: red\" data-v-2a0440b3>*</span></div> "), _c('el-select', {
    staticStyle: {
      "width": "100%"
    },
    model: {
      value: _vm.data.dimension,
      callback: function ($$v) {
        _vm.$set(_vm.data, "dimension", $$v);
      },
      expression: "data.dimension"
    }
  }, _vm._l(_vm.dataResolution, function (item) {
    return _c('el-option', {
      key: item.id,
      attrs: {
        "label": item.name,
        "value": item.id
      }
    });
  }), 1)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"flex flex-col box-form mt-4\" data-v-2a0440b3>", "</div>", [_vm._ssrNode("<div class=\"title-form\" data-v-2a0440b3>\n                URL\n              </div> "), _c('el-input', {
    staticStyle: {
      "width": "100%"
    },
    model: {
      value: _vm.data.url,
      callback: function ($$v) {
        _vm.$set(_vm.data, "url", $$v);
      },
      expression: "data.url"
    }
  })], 2)], 2)], 2)], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"action-btn flex items-center justify-end\" data-v-2a0440b3>", "</div>", [_c('k-button', {
    staticClass: "ml-4",
    staticStyle: {
      "width": "165px"
    },
    attrs: {
      "text": "Discard",
      "type": "secondary"
    },
    nativeOn: {
      "click": function ($event) {
        return _vm.backStep1();
      }
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<button" + _vm._ssrClass("flex items-center justify-center no-select", _vm.disabledSave ? 'save-btn' : 'disabled-btn') + " style=\"margin-right: 20px\" data-v-2a0440b3>", "</button>", [_c('IconSave', {
    attrs: {
      "bg-color": _vm.disabledSave ? 'white' : '#9a9a9a'
    }
  }), _vm._ssrNode(" <span class=\"name-btn\" data-v-2a0440b3>Save</span>")], 2)], 2)], 2) : _vm._e()], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/creative/upload.vue?vue&type=template&id=2a0440b3&scoped=true

// EXTERNAL MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/creative/upload.vue?vue&type=script&lang=js
var uploadvue_type_script_lang_js = __webpack_require__(337);

// CONCATENATED MODULE: ./pages/creative/upload.vue?vue&type=script&lang=js
 /* harmony default export */ var creative_uploadvue_type_script_lang_js = (uploadvue_type_script_lang_js["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./pages/creative/upload.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(447)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  creative_uploadvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2a0440b3",
  "ad127d8e"
  
)

/* harmony default export */ var upload = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ButtonBackPage: __webpack_require__(155).default,IconUpload: __webpack_require__(126).default,IconDelete: __webpack_require__(129).default,KButton: __webpack_require__(123).default,IconArrowRight: __webpack_require__(48).default,IconSave: __webpack_require__(40).default})


/***/ })

};;
//# sourceMappingURL=upload.js.map