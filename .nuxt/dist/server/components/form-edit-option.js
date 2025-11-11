exports.ids = [31];
exports.modules = {

/***/ 395:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(485);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("6aa417f3", content, true, context)
};

/***/ }),

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Option_vue_vue_type_style_index_0_id_5c82b546_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(395);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Option_vue_vue_type_style_index_0_id_5c82b546_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Option_vue_vue_type_style_index_0_id_5c82b546_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Option_vue_vue_type_style_index_0_id_5c82b546_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Option_vue_vue_type_style_index_0_id_5c82b546_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 485:
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
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n@font-face{\n  font-family:\"Cabin\";\n\n  src:local(\"Cabin\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\")\n}\n@font-face{\n  font-family:\"Roboto Mono\";\n\n  src:local(\"Roboto Mono\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\")\n}\n.header-1[data-v-5c82b546]{\n  font-size:32px\n}\n.header-1[data-v-5c82b546],.header-2[data-v-5c82b546]{\n  font-family:\"Cabin\";\n  font-weight:600;\n  color:#454545\n}\n.header-2[data-v-5c82b546]{\n  font-size:28px\n}\n.header-3[data-v-5c82b546]{\n  font-size:24px\n}\n.header-3[data-v-5c82b546],.header-4[data-v-5c82b546]{\n  font-family:\"Cabin\";\n  font-weight:600;\n  color:#454545\n}\n.header-4[data-v-5c82b546]{\n  font-size:20px\n}\n.header-5[data-v-5c82b546]{\n  font-size:18px\n}\n.header-5[data-v-5c82b546],.header-6[data-v-5c82b546]{\n  font-family:\"Cabin\";\n  font-weight:600;\n  color:#454545\n}\n.header-6[data-v-5c82b546]{\n  font-size:14px\n}\n.subtitle-1[data-v-5c82b546]{\n  color:#757575\n}\n.subtitle-1[data-v-5c82b546],.subtitle-2[data-v-5c82b546]{\n  font-family:\"Cabin\";\n  font-size:16px;\n  font-weight:400\n}\n.subtitle-2[data-v-5c82b546]{\n  color:#454545\n}\n.no-select[data-v-5c82b546]{\n  -webkit-touch-callout:none;\n  -webkit-user-select:none;\n  -moz-user-select:none;\n  user-select:none\n}\n.mx-icon-double-left[data-v-5c82b546]:after,.mx-icon-double-left[data-v-5c82b546]:before,.mx-icon-double-right[data-v-5c82b546]:after,.mx-icon-double-right[data-v-5c82b546]:before,.mx-icon-left[data-v-5c82b546]:before,.mx-icon-right[data-v-5c82b546]:before{\n  content:\"\";\n  position:relative;\n  top:-1px;\n  display:inline-block;\n  width:10px;\n  height:10px;\n  vertical-align:middle;\n  border-color:currentcolor;\n  border-style:solid;\n  border-width:2px 0 0 2px;\n  border-radius:1px;\n  box-sizing:border-box;\n  transform-origin:center;\n  transform:rotate(-45deg) scale(.7)\n}\n.mx-icon-double-left[data-v-5c82b546]:after{\n  left:-4px\n}\n.mx-icon-double-right[data-v-5c82b546]:before{\n  left:4px\n}\n.mx-icon-double-right[data-v-5c82b546]:after,.mx-icon-double-right[data-v-5c82b546]:before,.mx-icon-right[data-v-5c82b546]:before{\n  transform:rotate(135deg) scale(.7)\n}\n.mx-btn[data-v-5c82b546]{\n  box-sizing:border-box;\n  line-height:1;\n  font-size:14px;\n  font-weight:500;\n  padding:7px 15px;\n  margin:0;\n  cursor:pointer;\n  background-color:transparent;\n  outline:none;\n  border:1px solid rgba(0,0,0,.1);\n  border-radius:4px;\n  color:#73879c;\n  white-space:nowrap\n}\n.mx-btn[data-v-5c82b546]:hover{\n  border-color:#1284e7;\n  color:#1284e7\n}\n.mx-btn.disabled[data-v-5c82b546],.mx-btn[data-v-5c82b546]:disabled{\n  color:#ccc;\n  cursor:not-allowed\n}\n.mx-btn-text[data-v-5c82b546]{\n  border:0;\n  padding:0 4px;\n  text-align:left;\n  line-height:inherit\n}\n.mx-scrollbar[data-v-5c82b546]{\n  height:100%\n}\n.mx-scrollbar:hover .mx-scrollbar-track[data-v-5c82b546]{\n  opacity:1\n}\n.mx-scrollbar-wrap[data-v-5c82b546]{\n  height:100%;\n  overflow-x:hidden;\n  overflow-y:auto\n}\n.mx-scrollbar-track[data-v-5c82b546]{\n  position:absolute;\n  top:2px;\n  right:2px;\n  bottom:2px;\n  width:6px;\n  z-index:1;\n  border-radius:4px;\n  opacity:0;\n  transition:opacity .24s ease-out\n}\n.mx-scrollbar-track .mx-scrollbar-thumb[data-v-5c82b546]{\n  position:absolute;\n  width:100%;\n  height:0;\n  cursor:pointer;\n  border-radius:inherit;\n  background-color:rgba(144,147,153,.3);\n  transition:background-color .3s\n}\n.mx-zoom-in-down-enter-active[data-v-5c82b546],.mx-zoom-in-down-leave-active[data-v-5c82b546]{\n  opacity:1;\n  transform:scaleY(1);\n  transition:transform .3s cubic-bezier(.23,1,.32,1),opacity .3s cubic-bezier(.23,1,.32,1);\n  transform-origin:center top\n}\n.mx-zoom-in-down-enter[data-v-5c82b546],.mx-zoom-in-down-enter-from[data-v-5c82b546],.mx-zoom-in-down-leave-to[data-v-5c82b546]{\n  opacity:0;\n  transform:scaleY(0)\n}\n.mx-datepicker[data-v-5c82b546]{\n  position:relative;\n  display:inline-block;\n  width:210px\n}\n.mx-datepicker svg[data-v-5c82b546]{\n  width:1em;\n  height:1em;\n  vertical-align:-.15em;\n  fill:currentColor;\n  overflow:hidden\n}\n.mx-datepicker-range[data-v-5c82b546]{\n  width:320px\n}\n.mx-datepicker-inline[data-v-5c82b546]{\n  width:auto\n}\n.mx-input-wrapper[data-v-5c82b546]{\n  position:relative\n}\n.mx-input[data-v-5c82b546]{\n  display:inline-block;\n  box-sizing:border-box;\n  width:100%;\n  height:34px;\n  padding:6px 30px 6px 10px;\n  font-size:14px;\n  line-height:1.4;\n  color:#555;\n  background-color:#fff;\n  border:1px solid #ccc;\n  border-radius:4px;\n  box-shadow:inset 0 1px 1px rgba(0,0,0,.075)\n}\n.mx-input[data-v-5c82b546]:focus,.mx-input[data-v-5c82b546]:hover{\n  border-color:#409aff\n}\n.mx-input.disabled[data-v-5c82b546],.mx-input[data-v-5c82b546]:disabled{\n  color:#ccc;\n  background-color:#f3f3f3;\n  border-color:#ccc;\n  cursor:not-allowed\n}\n.mx-input[data-v-5c82b546]:focus{\n  outline:none\n}\n.mx-input[data-v-5c82b546]::-ms-clear{\n  display:none\n}\n.mx-icon-calendar[data-v-5c82b546],.mx-icon-clear[data-v-5c82b546]{\n  position:absolute;\n  top:50%;\n  right:8px;\n  transform:translateY(-50%);\n  font-size:16px;\n  line-height:1;\n  color:rgba(0,0,0,.5);\n  vertical-align:middle\n}\n.mx-icon-clear[data-v-5c82b546]{\n  cursor:pointer\n}\n.mx-icon-clear[data-v-5c82b546]:hover{\n  color:rgba(0,0,0,.8)\n}\n.mx-datepicker-main[data-v-5c82b546]{\n  font:14px/1.5 \"Helvetica Neue\",Helvetica,Arial,\"Microsoft Yahei\",sans-serif;\n  color:#73879c;\n  background-color:#fff;\n  border:1px solid #e8e8e8\n}\n.mx-datepicker-popup[data-v-5c82b546]{\n  position:absolute;\n  margin-top:1px;\n  margin-bottom:1px;\n  box-shadow:0 6px 12px rgba(0,0,0,.175);\n  z-index:2001\n}\n.mx-datepicker-sidebar[data-v-5c82b546]{\n  float:left;\n  box-sizing:border-box;\n  width:100px;\n  padding:6px;\n  overflow:auto\n}\n.mx-datepicker-sidebar+.mx-datepicker-content[data-v-5c82b546]{\n  margin-left:100px;\n  border-left:1px solid #e8e8e8\n}\n.mx-datepicker-body[data-v-5c82b546]{\n  position:relative;\n  -webkit-user-select:none;\n     -moz-user-select:none;\n          user-select:none\n}\n.mx-btn-shortcut[data-v-5c82b546]{\n  line-height:24px\n}\n.mx-range-wrapper[data-v-5c82b546]{\n  display:flex\n}\n@media(max-width:750px){\n.mx-range-wrapper[data-v-5c82b546]{\n    flex-direction:column\n}\n}\n.mx-datepicker-header[data-v-5c82b546]{\n  padding:6px 8px;\n  border-bottom:1px solid #e8e8e8\n}\n.mx-datepicker-footer[data-v-5c82b546]{\n  padding:6px 8px;\n  text-align:right;\n  border-top:1px solid #e8e8e8\n}\n.mx-calendar[data-v-5c82b546]{\n  box-sizing:border-box;\n  width:248px;\n  padding:6px 12px\n}\n.mx-calendar+.mx-calendar[data-v-5c82b546]{\n  border-left:1px solid #e8e8e8\n}\n.mx-calendar-header[data-v-5c82b546],.mx-time-header[data-v-5c82b546]{\n  box-sizing:border-box;\n  height:34px;\n  line-height:34px;\n  text-align:center;\n  overflow:hidden\n}\n.mx-btn-icon-double-left[data-v-5c82b546],.mx-btn-icon-left[data-v-5c82b546]{\n  float:left\n}\n.mx-btn-icon-double-right[data-v-5c82b546],.mx-btn-icon-right[data-v-5c82b546]{\n  float:right\n}\n.mx-calendar-header-label[data-v-5c82b546]{\n  font-size:14px\n}\n.mx-calendar-decade-separator[data-v-5c82b546]{\n  margin:0 2px\n}\n.mx-calendar-decade-separator[data-v-5c82b546]:after{\n  content:\"~\"\n}\n.mx-calendar-content[data-v-5c82b546]{\n  position:relative;\n  height:224px;\n  box-sizing:border-box\n}\n.mx-calendar-content .cell[data-v-5c82b546]{\n  cursor:pointer\n}\n.mx-calendar-content .cell[data-v-5c82b546]:hover{\n  color:#73879c;\n  background-color:rgb(243.15,248.85,253.8)\n}\n.mx-calendar-content .cell.active[data-v-5c82b546]{\n  color:#fff;\n  background-color:#1284e7\n}\n.mx-calendar-content .cell.hover-in-range[data-v-5c82b546],.mx-calendar-content .cell.in-range[data-v-5c82b546]{\n  color:#73879c;\n  background-color:rgb(219.45,236.55,251.4)\n}\n.mx-calendar-content .cell.disabled[data-v-5c82b546]{\n  cursor:not-allowed;\n  color:#ccc;\n  background-color:#f3f3f3\n}\n.mx-calendar-week-mode .mx-date-row[data-v-5c82b546]{\n  cursor:pointer\n}\n.mx-calendar-week-mode .mx-date-row[data-v-5c82b546]:hover{\n  background-color:rgb(243.15,248.85,253.8)\n}\n.mx-calendar-week-mode .mx-date-row.mx-active-week[data-v-5c82b546]{\n  background-color:rgb(219.45,236.55,251.4)\n}\n.mx-calendar-week-mode .mx-date-row .cell.active[data-v-5c82b546],.mx-calendar-week-mode .mx-date-row .cell[data-v-5c82b546]:hover{\n  color:inherit;\n  background-color:transparent\n}\n.mx-week-number[data-v-5c82b546]{\n  opacity:.5\n}\n.mx-table[data-v-5c82b546]{\n  table-layout:fixed;\n  border-collapse:separate;\n  border-spacing:0;\n  width:100%;\n  height:100%;\n  box-sizing:border-box;\n  text-align:center\n}\n.mx-table th[data-v-5c82b546]{\n  font-weight:500\n}\n.mx-table td[data-v-5c82b546],.mx-table th[data-v-5c82b546]{\n  padding:0;\n  vertical-align:middle\n}\n.mx-table-date td[data-v-5c82b546],.mx-table-date th[data-v-5c82b546]{\n  font-size:12px\n}\n.mx-table-date .today[data-v-5c82b546]{\n  color:rgb(41.7,144.3,233.4)\n}\n.mx-table-date .cell.not-current-month[data-v-5c82b546]{\n  color:#ccc;\n  background:none\n}\n.mx-time[data-v-5c82b546]{\n  flex:1;\n  width:224px;\n  background:#fff\n}\n.mx-time+.mx-time[data-v-5c82b546]{\n  border-left:1px solid #e8e8e8\n}\n.mx-calendar-time[data-v-5c82b546]{\n  position:absolute;\n  top:0;\n  left:0;\n  width:100%;\n  height:100%\n}\n.mx-time-header[data-v-5c82b546]{\n  border-bottom:1px solid #e8e8e8\n}\n.mx-time-content[data-v-5c82b546]{\n  height:224px;\n  box-sizing:border-box;\n  overflow:hidden\n}\n.mx-time-columns[data-v-5c82b546]{\n  display:flex;\n  width:100%;\n  height:100%;\n  overflow:hidden\n}\n.mx-time-column[data-v-5c82b546]{\n  flex:1;\n  position:relative;\n  border-left:1px solid #e8e8e8;\n  text-align:center\n}\n.mx-time-column[data-v-5c82b546]:first-child{\n  border-left:0\n}\n.mx-time-column .mx-time-list[data-v-5c82b546]{\n  margin:0;\n  padding:0;\n  list-style:none\n}\n.mx-time-column .mx-time-list[data-v-5c82b546]:after{\n  content:\"\";\n  display:block;\n  height:192px\n}\n.mx-time-column .mx-time-item[data-v-5c82b546]{\n  cursor:pointer;\n  font-size:12px;\n  height:32px;\n  line-height:32px\n}\n.mx-time-column .mx-time-item[data-v-5c82b546]:hover{\n  color:#73879c;\n  background-color:rgb(243.15,248.85,253.8)\n}\n.mx-time-column .mx-time-item.active[data-v-5c82b546]{\n  color:#1284e7;\n  background-color:transparent;\n  font-weight:700\n}\n.mx-time-column .mx-time-item.disabled[data-v-5c82b546]{\n  cursor:not-allowed;\n  color:#ccc;\n  background-color:#f3f3f3\n}\n.mx-time-option[data-v-5c82b546]{\n  cursor:pointer;\n  padding:8px 10px;\n  font-size:14px;\n  line-height:20px\n}\n.mx-time-option[data-v-5c82b546]:hover{\n  color:#73879c;\n  background-color:rgb(243.15,248.85,253.8)\n}\n.mx-time-option.active[data-v-5c82b546]{\n  color:#1284e7;\n  background-color:transparent;\n  font-weight:700\n}\n.mx-time-option.disabled[data-v-5c82b546]{\n  cursor:not-allowed;\n  color:#ccc;\n  background-color:#f3f3f3\n}\n.el-input .el-input__inner[data-v-5c82b546]:focus,.el-range-editor.is-active[data-v-5c82b546],.el-range-editor.is-active[data-v-5c82b546]:hover,.el-select .el-input.is-focus .el-input__inner[data-v-5c82b546],.el-select .el-input__inner[data-v-5c82b546]:focus,.el-textarea .el-input__inner[data-v-5c82b546]:focus{\n  border:1.3px solid #1b63d4!important;\n  box-shadow:0 2px 10px rgba(187,209,243,.5)\n}\n.mx-input[data-v-5c82b546]{\n  height:40px!important\n}\n.mx-datepicker-sidebar[data-v-5c82b546]{\n  width:151px!important\n}\n.mx-table-date td[data-v-5c82b546],.mx-table-date th[data-v-5c82b546]{\n  height:32px;\n  font-size:14px!important\n}\n.mx-btn-shortcut[data-v-5c82b546]{\n  display:block;\n  padding:0 6px;\n  line-height:30px!important\n}\n[data-v-5c82b546]:root{\n  --vs-line-height:1.6\n}\n.btn-popover[data-v-5c82b546]{\n  height:40px;\n  background-color:#fff;\n  width:100%;\n  padding:10px;\n  cursor:pointer\n}\n.btn-popover .title-1[data-v-5c82b546]{\n  font-weight:400;\n  font-size:16px;\n  color:#454545;\n  margin-left:10px\n}\n.btn-popover[data-v-5c82b546]:hover{\n  background-color:#f3f4f6\n}\n.el-popover[data-v-5c82b546]{\n  padding:0!important;\n  border-radius:5px!important\n}\n.el-upload[data-v-5c82b546]{\n  width:100%\n}\n.el-upload-dragger[data-v-5c82b546]{\n  width:100%!important;\n  background:linear-gradient(0deg,rgba(33,150,243,.03),rgba(33,150,243,.03)),#fff!important;\n  border:1px dashed transparent!important;\n  border-radius:5px!important;\n  height:100%!important\n}\n.kg-popup[data-v-5c82b546]{\n  transition:all .5s ease-in-out;\n  position:fixed;\n  top:0;\n  left:50%;\n  transform:translateX(-50%)\n}\n.noselect[data-v-5c82b546]{\n  -webkit-touch-callout:none;\n  -webkit-user-select:none;\n  -moz-user-select:none;\n  user-select:none\n}\n.ProseMirror[data-v-5c82b546]{\n  border:0;\n  outline:none\n}\n.ProseMirror>*+*[data-v-5c82b546]{\n  margin-top:.75em\n}\n.ProseMirror ol[data-v-5c82b546],.ProseMirror ul[data-v-5c82b546]{\n  padding:0 1rem\n}\n.ProseMirror h1[data-v-5c82b546],.ProseMirror h2[data-v-5c82b546],.ProseMirror h3[data-v-5c82b546],.ProseMirror h4[data-v-5c82b546],.ProseMirror h5[data-v-5c82b546],.ProseMirror h6[data-v-5c82b546]{\n  line-height:1.1\n}\n.ProseMirror code[data-v-5c82b546]{\n  background-color:rgba(97,97,97,.1);\n  color:#616161\n}\n.ProseMirror pre[data-v-5c82b546]{\n  background:#0d0d0d;\n  color:#fff;\n  font-family:\"JetBrainsMono\",monospace;\n  padding:.75rem 1rem;\n  border-radius:.5rem\n}\n.ProseMirror pre code[data-v-5c82b546]{\n  color:inherit;\n  padding:0;\n  background:none;\n  font-size:.8rem\n}\n.ProseMirror img[data-v-5c82b546]{\n  max-width:100%;\n  height:auto\n}\n.ProseMirror blockquote[data-v-5c82b546]{\n  padding-left:1rem;\n  border-left:2px solid rgba(13,13,13,.1)\n}\n.ProseMirror hr[data-v-5c82b546]{\n  border:none;\n  border-top:2px solid rgba(13,13,13,.1);\n  margin:2rem 0\n}\n.ProseMirror[data-v-5c82b546]:focus-visible{\n  outline:none\n}\n.el-color-picker__trigger[data-v-5c82b546]{\n  border:0!important;\n  padding:0!important;\n  outline:none!important\n}\n.el-color-picker__icon[data-v-5c82b546]{\n  visibility:hidden!important\n}\n.el-color-picker--mini .el-color-picker__trigger[data-v-5c82b546],.el-color-picker__color[data-v-5c82b546]{\n  height:22px!important;\n  width:22px!important\n}\n.el-color-picker__color[data-v-5c82b546]{\n  padding:0!important;\n  border:0!important\n}\n.el-color-picker__empty[data-v-5c82b546]{\n  padding-top:1.4px!important\n}\n.el-color-picker--mini[data-v-5c82b546]{\n  height:22px!important\n}\n.el-color-picker__color-inner[data-v-5c82b546]{\n  border:1px solid #e2e2e2!important\n}\n.el-table thead[data-v-5c82b546]{\n  color:#5c6b7a!important;\n  font-family:\"Cabin\"!important\n}\n.el-table thead[data-v-5c82b546],.th[data-v-5c82b546]{\n  font-weight:600!important\n}\n.el-button--mini[data-v-5c82b546],.el-button--text[data-v-5c82b546],.el-date-range-picker__header div[data-v-5c82b546],.el-date-table td span[data-v-5c82b546],.el-input__inner[data-v-5c82b546],.el-picker-panel__shortcut[data-v-5c82b546],.el-select-dropdown__item[data-v-5c82b546],.el-select-dropdown__item.hover[data-v-5c82b546],.el-select-dropdown__item[data-v-5c82b546]:hover,.el-time-spinner__item[data-v-5c82b546]{\n  font-family:\"Cabin\"!important\n}\n.el-progress-bar__inner[data-v-5c82b546],.el-progress-bar__outer[data-v-5c82b546]{\n  border-bottom-left-radius:100px!important;\n  border-top-left-radius:100px!important\n}\n.el-dropdown .el-dropdown__caret-button[data-v-5c82b546]{\n  bottom:2px!important\n}\n.el-dropdown-menu[data-v-5c82b546],.el-dropdown-menu__item[data-v-5c82b546]{\n  padding:0!important\n}\nbutton[data-v-5c82b546]:active,button[data-v-5c82b546]:focus{\n  outline:0!important\n}\n.el-input-group__append[data-v-5c82b546]{\n  padding:0!important\n}\n.el-input-group__prepend[data-v-5c82b546]{\n  padding-left:5px!important;\n  padding-right:5px!important\n}\n.el-menu-item[data-v-5c82b546],.el-submenu__title[data-v-5c82b546]{\n  height:40px!important;\n  line-height:40px!important;\n  font-family:\"Cabin\"!important;\n  font-size:16px!important;\n  font-style:normal!important;\n  font-weight:400!important;\n  color:#5c6b7a!important;\n  margin-bottom:10px!important;\n  border-left:4px solid transparent!important\n}\n.el-menu-item.is-active[data-v-5c82b546]{\n  color:#1b63d4!important;\n  font-weight:600!important;\n  border-left:4px solid #1b63d4!important;\n  border-top-left-radius:2px!important;\n  border-bottom-left-radius:2px!important\n}\n.el-menu--collapse[data-v-5c82b546]{\n  width:80px!important\n}\n.el-menu[data-v-5c82b546]{\n  border-right:0!important\n}\n.el-dialog__body[data-v-5c82b546],.el-dialog__header[data-v-5c82b546]{\n  padding:0!important\n}\n.el-dialog[data-v-5c82b546]{\n  border-radius:10px!important\n}\n.card-dialog[data-v-5c82b546]{\n  padding:20px!important\n}\n.vue-swatches__trigger[data-v-5c82b546]{\n  width:22px!important;\n  height:22px!important;\n  border-radius:2px!important\n}\n.vue-swatches[data-v-5c82b546]{\n  height:22px!important\n}\n.CodeMirror[data-v-5c82b546]{\n  height:calc(100vh - 150px)!important\n}\n.vue-swatches__trigger[data-v-5c82b546]{\n  border:1px solid #e2e2e2!important\n}\n.option-card .list-card[data-v-5c82b546]{\n  width:100%;\n  height:60px;\n  background:#fff;\n  border:1px solid #c3ced9;\n  border-radius:5px;\n  padding-left:12px;\n  padding-right:12px;\n  margin-bottom:8px\n}\n.option-card .list-card .circle[data-v-5c82b546]{\n  height:20px;\n  width:20px;\n  border-radius:50%;\n  border:1px solid #7a8a99;\n  cursor:pointer\n}\n.option-card .list-card .circle-active[data-v-5c82b546]{\n  height:10px;\n  width:10px;\n  background:#1b63d4;\n  border-radius:50%\n}\n.option-card .list-card .title-option[data-v-5c82b546]{\n  font-family:\"Cabin\";\n  font-style:normal;\n  font-weight:400;\n  font-size:16px;\n  color:#5c6b7a;\n  margin-left:12px\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/form/edit/Option.vue?vue&type=template&id=5c82b546&scoped=true
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "option-card"
  }, [_vm._ssrNode(_vm._ssrList(_vm.dataOption, function (item, index) {
    return !_vm.isLoading ? "<div class=\"cursor-pointer no-select list-card flex items-center justify-between\" data-v-5c82b546><div class=\"flex items-center justify-start\" style=\"width:70%\" data-v-5c82b546><div class=\"circle flex items-center justify-center\"" + _vm._ssrStyle(null, item.status ? 'border: 1px solid #1B63D4;' : '', null) + " data-v-5c82b546>" + (item.status ? "<div class=\"circle-active\" data-v-5c82b546></div>" : "<!---->") + "</div> <div class=\"title-option\" data-v-5c82b546>" + _vm._ssrEscape("\n        " + _vm._s(item.name) + "\n      ") + "</div></div> <audio" + _vm._ssrAttr("id", 'yourAudio' + index) + " data-v-5c82b546><source" + _vm._ssrAttr("src", item.url) + " type=\"audio/mpeg\" data-v-5c82b546></audio> <img" + _vm._ssrAttr("id", 'audioControl' + index) + " src=\"https://dev-space.unimind.id/icon/play_v1.png\" style=\"height:15px;margin-right:5px;\" data-v-5c82b546></div>" : "<!---->";
  }))]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/form/edit/Option.vue?vue&type=template&id=5c82b546&scoped=true

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/form/edit/Option.vue?vue&type=script&lang=js

/* harmony default export */ var Optionvue_type_script_lang_js = ({
  props: {
    titleForm: {
      default: '',
      type: String
    }
  },

  data() {
    return {
      defaultData: {},
      isLoading: false
    };
  },

  computed: { ...Object(external_vuex_["mapState"])({
      dataForm: state => {
        return state.creative.dataForm;
      }
    }),

    dataOption() {
      const data = this.dataForm.find(item => item.title === this.titleForm).default;
      data.forEach((item, index) => {
        item.url = 'https://unimind.jixie.media/' + item.url;
      });
      return data;
    }

  },

  mounted() {
    this.getDetail();
  },

  methods: {
    togglePlay(index) {
      const yourAudio = document.getElementById('yourAudio' + index);
      const ctrl = document.getElementById('audioControl' + index);
      const pause = ctrl.src === 'https://dev-space.unimind.id/icon/pause_v1.png';
      ctrl.src = pause ? 'https://dev-space.unimind.id/icon/play_v1.png' : 'https://dev-space.unimind.id/icon/pause_v1.png';
      const method = pause ? 'pause' : 'play';
      yourAudio[method]();
      return false;
    },

    changeStatus(data, index) {
      const payload = {
        index,
        data,
        titleForm: this.titleForm
      };
      this.$store.commit('creative/SET_CHANGE_OPTION', payload); // const myAudio = new Audio('https://unimind.jixie.media/' + data.url)
      // const myAudio = new Audio()
      // myAudio.load()
      // myAudio.play()

      this.changeData();
    },

    getDetail() {
      const data = {
        id: this.$route.params.edit
      };
      this.isLoading = true;
      this.$store.dispatch('creative/getDetail', data).then(res => {
        this.isLoading = false;
        this.changeData();
      }).catch(() => {});
    },

    changeData() {
      const data = {
        title: this.titleForm,
        default: this.dataOption,
        type: 'Option'
      };
      this.$emit('changeOption', data);
    }

  }
});
// CONCATENATED MODULE: ./components/form/edit/Option.vue?vue&type=script&lang=js
 /* harmony default export */ var edit_Optionvue_type_script_lang_js = (Optionvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/form/edit/Option.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(484)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  edit_Optionvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5c82b546",
  "66579e58"
  
)

/* harmony default export */ var Option = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=form-edit-option.js.map