exports.ids = [120];
exports.modules = {

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(330);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("45b966de", content, true, context)
};

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateOrganization_vue_vue_type_style_index_0_id_088e66ac_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(274);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateOrganization_vue_vue_type_style_index_0_id_088e66ac_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateOrganization_vue_vue_type_style_index_0_id_088e66ac_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateOrganization_vue_vue_type_style_index_0_id_088e66ac_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateOrganization_vue_vue_type_style_index_0_id_088e66ac_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 330:
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
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n@font-face{\n  font-family:\"Cabin\";\n\n  src:local(\"Cabin\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\")\n}\n@font-face{\n  font-family:\"Roboto Mono\";\n\n  src:local(\"Roboto Mono\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\")\n}\n.header-1[data-v-088e66ac]{\n  font-size:32px\n}\n.header-1[data-v-088e66ac],.header-2[data-v-088e66ac]{\n  font-family:\"Cabin\";\n  font-weight:600;\n  color:#454545\n}\n.header-2[data-v-088e66ac]{\n  font-size:28px\n}\n.header-3[data-v-088e66ac]{\n  font-size:24px\n}\n.header-3[data-v-088e66ac],.header-4[data-v-088e66ac]{\n  font-family:\"Cabin\";\n  font-weight:600;\n  color:#454545\n}\n.header-4[data-v-088e66ac]{\n  font-size:20px\n}\n.header-5[data-v-088e66ac]{\n  font-size:18px\n}\n.header-5[data-v-088e66ac],.header-6[data-v-088e66ac]{\n  font-family:\"Cabin\";\n  font-weight:600;\n  color:#454545\n}\n.header-6[data-v-088e66ac]{\n  font-size:14px\n}\n.subtitle-1[data-v-088e66ac]{\n  color:#757575\n}\n.subtitle-1[data-v-088e66ac],.subtitle-2[data-v-088e66ac]{\n  font-family:\"Cabin\";\n  font-size:16px;\n  font-weight:400\n}\n.subtitle-2[data-v-088e66ac]{\n  color:#454545\n}\n.no-select[data-v-088e66ac]{\n  -webkit-touch-callout:none;\n  -webkit-user-select:none;\n  -moz-user-select:none;\n  user-select:none\n}\n.mx-icon-double-left[data-v-088e66ac]:after,.mx-icon-double-left[data-v-088e66ac]:before,.mx-icon-double-right[data-v-088e66ac]:after,.mx-icon-double-right[data-v-088e66ac]:before,.mx-icon-left[data-v-088e66ac]:before,.mx-icon-right[data-v-088e66ac]:before{\n  content:\"\";\n  position:relative;\n  top:-1px;\n  display:inline-block;\n  width:10px;\n  height:10px;\n  vertical-align:middle;\n  border-color:currentcolor;\n  border-style:solid;\n  border-width:2px 0 0 2px;\n  border-radius:1px;\n  box-sizing:border-box;\n  transform-origin:center;\n  transform:rotate(-45deg) scale(.7)\n}\n.mx-icon-double-left[data-v-088e66ac]:after{\n  left:-4px\n}\n.mx-icon-double-right[data-v-088e66ac]:before{\n  left:4px\n}\n.mx-icon-double-right[data-v-088e66ac]:after,.mx-icon-double-right[data-v-088e66ac]:before,.mx-icon-right[data-v-088e66ac]:before{\n  transform:rotate(135deg) scale(.7)\n}\n.mx-btn[data-v-088e66ac]{\n  box-sizing:border-box;\n  line-height:1;\n  font-size:14px;\n  font-weight:500;\n  padding:7px 15px;\n  margin:0;\n  cursor:pointer;\n  background-color:transparent;\n  outline:none;\n  border:1px solid rgba(0,0,0,.1);\n  border-radius:4px;\n  color:#73879c;\n  white-space:nowrap\n}\n.mx-btn[data-v-088e66ac]:hover{\n  border-color:#1284e7;\n  color:#1284e7\n}\n.mx-btn.disabled[data-v-088e66ac],.mx-btn[data-v-088e66ac]:disabled{\n  color:#ccc;\n  cursor:not-allowed\n}\n.mx-btn-text[data-v-088e66ac]{\n  border:0;\n  padding:0 4px;\n  text-align:left;\n  line-height:inherit\n}\n.mx-scrollbar[data-v-088e66ac]{\n  height:100%\n}\n.mx-scrollbar:hover .mx-scrollbar-track[data-v-088e66ac]{\n  opacity:1\n}\n.mx-scrollbar-wrap[data-v-088e66ac]{\n  height:100%;\n  overflow-x:hidden;\n  overflow-y:auto\n}\n.mx-scrollbar-track[data-v-088e66ac]{\n  position:absolute;\n  top:2px;\n  right:2px;\n  bottom:2px;\n  width:6px;\n  z-index:1;\n  border-radius:4px;\n  opacity:0;\n  transition:opacity .24s ease-out\n}\n.mx-scrollbar-track .mx-scrollbar-thumb[data-v-088e66ac]{\n  position:absolute;\n  width:100%;\n  height:0;\n  cursor:pointer;\n  border-radius:inherit;\n  background-color:rgba(144,147,153,.3);\n  transition:background-color .3s\n}\n.mx-zoom-in-down-enter-active[data-v-088e66ac],.mx-zoom-in-down-leave-active[data-v-088e66ac]{\n  opacity:1;\n  transform:scaleY(1);\n  transition:transform .3s cubic-bezier(.23,1,.32,1),opacity .3s cubic-bezier(.23,1,.32,1);\n  transform-origin:center top\n}\n.mx-zoom-in-down-enter[data-v-088e66ac],.mx-zoom-in-down-enter-from[data-v-088e66ac],.mx-zoom-in-down-leave-to[data-v-088e66ac]{\n  opacity:0;\n  transform:scaleY(0)\n}\n.mx-datepicker[data-v-088e66ac]{\n  position:relative;\n  display:inline-block;\n  width:210px\n}\n.mx-datepicker svg[data-v-088e66ac]{\n  width:1em;\n  height:1em;\n  vertical-align:-.15em;\n  fill:currentColor;\n  overflow:hidden\n}\n.mx-datepicker-range[data-v-088e66ac]{\n  width:320px\n}\n.mx-datepicker-inline[data-v-088e66ac]{\n  width:auto\n}\n.mx-input-wrapper[data-v-088e66ac]{\n  position:relative\n}\n.mx-input[data-v-088e66ac]{\n  display:inline-block;\n  box-sizing:border-box;\n  width:100%;\n  height:34px;\n  padding:6px 30px 6px 10px;\n  font-size:14px;\n  line-height:1.4;\n  color:#555;\n  background-color:#fff;\n  border:1px solid #ccc;\n  border-radius:4px;\n  box-shadow:inset 0 1px 1px rgba(0,0,0,.075)\n}\n.mx-input[data-v-088e66ac]:focus,.mx-input[data-v-088e66ac]:hover{\n  border-color:#409aff\n}\n.mx-input.disabled[data-v-088e66ac],.mx-input[data-v-088e66ac]:disabled{\n  color:#ccc;\n  background-color:#f3f3f3;\n  border-color:#ccc;\n  cursor:not-allowed\n}\n.mx-input[data-v-088e66ac]:focus{\n  outline:none\n}\n.mx-input[data-v-088e66ac]::-ms-clear{\n  display:none\n}\n.mx-icon-calendar[data-v-088e66ac],.mx-icon-clear[data-v-088e66ac]{\n  position:absolute;\n  top:50%;\n  right:8px;\n  transform:translateY(-50%);\n  font-size:16px;\n  line-height:1;\n  color:rgba(0,0,0,.5);\n  vertical-align:middle\n}\n.mx-icon-clear[data-v-088e66ac]{\n  cursor:pointer\n}\n.mx-icon-clear[data-v-088e66ac]:hover{\n  color:rgba(0,0,0,.8)\n}\n.mx-datepicker-main[data-v-088e66ac]{\n  font:14px/1.5 \"Helvetica Neue\",Helvetica,Arial,\"Microsoft Yahei\",sans-serif;\n  color:#73879c;\n  background-color:#fff;\n  border:1px solid #e8e8e8\n}\n.mx-datepicker-popup[data-v-088e66ac]{\n  position:absolute;\n  margin-top:1px;\n  margin-bottom:1px;\n  box-shadow:0 6px 12px rgba(0,0,0,.175);\n  z-index:2001\n}\n.mx-datepicker-sidebar[data-v-088e66ac]{\n  float:left;\n  box-sizing:border-box;\n  width:100px;\n  padding:6px;\n  overflow:auto\n}\n.mx-datepicker-sidebar+.mx-datepicker-content[data-v-088e66ac]{\n  margin-left:100px;\n  border-left:1px solid #e8e8e8\n}\n.mx-datepicker-body[data-v-088e66ac]{\n  position:relative;\n  -webkit-user-select:none;\n     -moz-user-select:none;\n          user-select:none\n}\n.mx-btn-shortcut[data-v-088e66ac]{\n  line-height:24px\n}\n.mx-range-wrapper[data-v-088e66ac]{\n  display:flex\n}\n@media(max-width:750px){\n.mx-range-wrapper[data-v-088e66ac]{\n    flex-direction:column\n}\n}\n.mx-datepicker-header[data-v-088e66ac]{\n  padding:6px 8px;\n  border-bottom:1px solid #e8e8e8\n}\n.mx-datepicker-footer[data-v-088e66ac]{\n  padding:6px 8px;\n  text-align:right;\n  border-top:1px solid #e8e8e8\n}\n.mx-calendar[data-v-088e66ac]{\n  box-sizing:border-box;\n  width:248px;\n  padding:6px 12px\n}\n.mx-calendar+.mx-calendar[data-v-088e66ac]{\n  border-left:1px solid #e8e8e8\n}\n.mx-calendar-header[data-v-088e66ac],.mx-time-header[data-v-088e66ac]{\n  box-sizing:border-box;\n  height:34px;\n  line-height:34px;\n  text-align:center;\n  overflow:hidden\n}\n.mx-btn-icon-double-left[data-v-088e66ac],.mx-btn-icon-left[data-v-088e66ac]{\n  float:left\n}\n.mx-btn-icon-double-right[data-v-088e66ac],.mx-btn-icon-right[data-v-088e66ac]{\n  float:right\n}\n.mx-calendar-header-label[data-v-088e66ac]{\n  font-size:14px\n}\n.mx-calendar-decade-separator[data-v-088e66ac]{\n  margin:0 2px\n}\n.mx-calendar-decade-separator[data-v-088e66ac]:after{\n  content:\"~\"\n}\n.mx-calendar-content[data-v-088e66ac]{\n  position:relative;\n  height:224px;\n  box-sizing:border-box\n}\n.mx-calendar-content .cell[data-v-088e66ac]{\n  cursor:pointer\n}\n.mx-calendar-content .cell[data-v-088e66ac]:hover{\n  color:#73879c;\n  background-color:rgb(243.15,248.85,253.8)\n}\n.mx-calendar-content .cell.active[data-v-088e66ac]{\n  color:#fff;\n  background-color:#1284e7\n}\n.mx-calendar-content .cell.hover-in-range[data-v-088e66ac],.mx-calendar-content .cell.in-range[data-v-088e66ac]{\n  color:#73879c;\n  background-color:rgb(219.45,236.55,251.4)\n}\n.mx-calendar-content .cell.disabled[data-v-088e66ac]{\n  cursor:not-allowed;\n  color:#ccc;\n  background-color:#f3f3f3\n}\n.mx-calendar-week-mode .mx-date-row[data-v-088e66ac]{\n  cursor:pointer\n}\n.mx-calendar-week-mode .mx-date-row[data-v-088e66ac]:hover{\n  background-color:rgb(243.15,248.85,253.8)\n}\n.mx-calendar-week-mode .mx-date-row.mx-active-week[data-v-088e66ac]{\n  background-color:rgb(219.45,236.55,251.4)\n}\n.mx-calendar-week-mode .mx-date-row .cell.active[data-v-088e66ac],.mx-calendar-week-mode .mx-date-row .cell[data-v-088e66ac]:hover{\n  color:inherit;\n  background-color:transparent\n}\n.mx-week-number[data-v-088e66ac]{\n  opacity:.5\n}\n.mx-table[data-v-088e66ac]{\n  table-layout:fixed;\n  border-collapse:separate;\n  border-spacing:0;\n  width:100%;\n  height:100%;\n  box-sizing:border-box;\n  text-align:center\n}\n.mx-table th[data-v-088e66ac]{\n  font-weight:500\n}\n.mx-table td[data-v-088e66ac],.mx-table th[data-v-088e66ac]{\n  padding:0;\n  vertical-align:middle\n}\n.mx-table-date td[data-v-088e66ac],.mx-table-date th[data-v-088e66ac]{\n  font-size:12px\n}\n.mx-table-date .today[data-v-088e66ac]{\n  color:rgb(41.7,144.3,233.4)\n}\n.mx-table-date .cell.not-current-month[data-v-088e66ac]{\n  color:#ccc;\n  background:none\n}\n.mx-time[data-v-088e66ac]{\n  flex:1;\n  width:224px;\n  background:#fff\n}\n.mx-time+.mx-time[data-v-088e66ac]{\n  border-left:1px solid #e8e8e8\n}\n.mx-calendar-time[data-v-088e66ac]{\n  position:absolute;\n  top:0;\n  left:0;\n  width:100%;\n  height:100%\n}\n.mx-time-header[data-v-088e66ac]{\n  border-bottom:1px solid #e8e8e8\n}\n.mx-time-content[data-v-088e66ac]{\n  height:224px;\n  box-sizing:border-box;\n  overflow:hidden\n}\n.mx-time-columns[data-v-088e66ac]{\n  display:flex;\n  width:100%;\n  height:100%;\n  overflow:hidden\n}\n.mx-time-column[data-v-088e66ac]{\n  flex:1;\n  position:relative;\n  border-left:1px solid #e8e8e8;\n  text-align:center\n}\n.mx-time-column[data-v-088e66ac]:first-child{\n  border-left:0\n}\n.mx-time-column .mx-time-list[data-v-088e66ac]{\n  margin:0;\n  padding:0;\n  list-style:none\n}\n.mx-time-column .mx-time-list[data-v-088e66ac]:after{\n  content:\"\";\n  display:block;\n  height:192px\n}\n.mx-time-column .mx-time-item[data-v-088e66ac]{\n  cursor:pointer;\n  font-size:12px;\n  height:32px;\n  line-height:32px\n}\n.mx-time-column .mx-time-item[data-v-088e66ac]:hover{\n  color:#73879c;\n  background-color:rgb(243.15,248.85,253.8)\n}\n.mx-time-column .mx-time-item.active[data-v-088e66ac]{\n  color:#1284e7;\n  background-color:transparent;\n  font-weight:700\n}\n.mx-time-column .mx-time-item.disabled[data-v-088e66ac]{\n  cursor:not-allowed;\n  color:#ccc;\n  background-color:#f3f3f3\n}\n.mx-time-option[data-v-088e66ac]{\n  cursor:pointer;\n  padding:8px 10px;\n  font-size:14px;\n  line-height:20px\n}\n.mx-time-option[data-v-088e66ac]:hover{\n  color:#73879c;\n  background-color:rgb(243.15,248.85,253.8)\n}\n.mx-time-option.active[data-v-088e66ac]{\n  color:#1284e7;\n  background-color:transparent;\n  font-weight:700\n}\n.mx-time-option.disabled[data-v-088e66ac]{\n  cursor:not-allowed;\n  color:#ccc;\n  background-color:#f3f3f3\n}\n.el-input .el-input__inner[data-v-088e66ac]:focus,.el-range-editor.is-active[data-v-088e66ac],.el-range-editor.is-active[data-v-088e66ac]:hover,.el-select .el-input.is-focus .el-input__inner[data-v-088e66ac],.el-select .el-input__inner[data-v-088e66ac]:focus,.el-textarea .el-input__inner[data-v-088e66ac]:focus{\n  border:1.3px solid #1b63d4!important;\n  box-shadow:0 2px 10px rgba(187,209,243,.5)\n}\n.mx-input[data-v-088e66ac]{\n  height:40px!important\n}\n.mx-datepicker-sidebar[data-v-088e66ac]{\n  width:151px!important\n}\n.mx-table-date td[data-v-088e66ac],.mx-table-date th[data-v-088e66ac]{\n  height:32px;\n  font-size:14px!important\n}\n.mx-btn-shortcut[data-v-088e66ac]{\n  display:block;\n  padding:0 6px;\n  line-height:30px!important\n}\n[data-v-088e66ac]:root{\n  --vs-line-height:1.6\n}\n.btn-popover[data-v-088e66ac]{\n  height:40px;\n  background-color:#fff;\n  width:100%;\n  padding:10px;\n  cursor:pointer\n}\n.btn-popover .title-1[data-v-088e66ac]{\n  font-weight:400;\n  font-size:16px;\n  color:#454545;\n  margin-left:10px\n}\n.btn-popover[data-v-088e66ac]:hover{\n  background-color:#f3f4f6\n}\n.el-popover[data-v-088e66ac]{\n  padding:0!important;\n  border-radius:5px!important\n}\n.el-upload[data-v-088e66ac]{\n  width:100%\n}\n.el-upload-dragger[data-v-088e66ac]{\n  width:100%!important;\n  background:linear-gradient(0deg,rgba(33,150,243,.03),rgba(33,150,243,.03)),#fff!important;\n  border:1px dashed transparent!important;\n  border-radius:5px!important;\n  height:100%!important\n}\n.kg-popup[data-v-088e66ac]{\n  transition:all .5s ease-in-out;\n  position:fixed;\n  top:0;\n  left:50%;\n  transform:translateX(-50%)\n}\n.noselect[data-v-088e66ac]{\n  -webkit-touch-callout:none;\n  -webkit-user-select:none;\n  -moz-user-select:none;\n  user-select:none\n}\n.ProseMirror[data-v-088e66ac]{\n  border:0;\n  outline:none\n}\n.ProseMirror>*+*[data-v-088e66ac]{\n  margin-top:.75em\n}\n.ProseMirror ol[data-v-088e66ac],.ProseMirror ul[data-v-088e66ac]{\n  padding:0 1rem\n}\n.ProseMirror h1[data-v-088e66ac],.ProseMirror h2[data-v-088e66ac],.ProseMirror h3[data-v-088e66ac],.ProseMirror h4[data-v-088e66ac],.ProseMirror h5[data-v-088e66ac],.ProseMirror h6[data-v-088e66ac]{\n  line-height:1.1\n}\n.ProseMirror code[data-v-088e66ac]{\n  background-color:rgba(97,97,97,.1);\n  color:#616161\n}\n.ProseMirror pre[data-v-088e66ac]{\n  background:#0d0d0d;\n  color:#fff;\n  font-family:\"JetBrainsMono\",monospace;\n  padding:.75rem 1rem;\n  border-radius:.5rem\n}\n.ProseMirror pre code[data-v-088e66ac]{\n  color:inherit;\n  padding:0;\n  background:none;\n  font-size:.8rem\n}\n.ProseMirror img[data-v-088e66ac]{\n  max-width:100%;\n  height:auto\n}\n.ProseMirror blockquote[data-v-088e66ac]{\n  padding-left:1rem;\n  border-left:2px solid rgba(13,13,13,.1)\n}\n.ProseMirror hr[data-v-088e66ac]{\n  border:none;\n  border-top:2px solid rgba(13,13,13,.1);\n  margin:2rem 0\n}\n.ProseMirror[data-v-088e66ac]:focus-visible{\n  outline:none\n}\n.el-color-picker__trigger[data-v-088e66ac]{\n  border:0!important;\n  padding:0!important;\n  outline:none!important\n}\n.el-color-picker__icon[data-v-088e66ac]{\n  visibility:hidden!important\n}\n.el-color-picker--mini .el-color-picker__trigger[data-v-088e66ac],.el-color-picker__color[data-v-088e66ac]{\n  height:22px!important;\n  width:22px!important\n}\n.el-color-picker__color[data-v-088e66ac]{\n  padding:0!important;\n  border:0!important\n}\n.el-color-picker__empty[data-v-088e66ac]{\n  padding-top:1.4px!important\n}\n.el-color-picker--mini[data-v-088e66ac]{\n  height:22px!important\n}\n.el-color-picker__color-inner[data-v-088e66ac]{\n  border:1px solid #e2e2e2!important\n}\n.el-table thead[data-v-088e66ac]{\n  color:#5c6b7a!important;\n  font-family:\"Cabin\"!important\n}\n.el-table thead[data-v-088e66ac],.th[data-v-088e66ac]{\n  font-weight:600!important\n}\n.el-button--mini[data-v-088e66ac],.el-button--text[data-v-088e66ac],.el-date-range-picker__header div[data-v-088e66ac],.el-date-table td span[data-v-088e66ac],.el-input__inner[data-v-088e66ac],.el-picker-panel__shortcut[data-v-088e66ac],.el-select-dropdown__item[data-v-088e66ac],.el-select-dropdown__item.hover[data-v-088e66ac],.el-select-dropdown__item[data-v-088e66ac]:hover,.el-time-spinner__item[data-v-088e66ac]{\n  font-family:\"Cabin\"!important\n}\n.el-progress-bar__inner[data-v-088e66ac],.el-progress-bar__outer[data-v-088e66ac]{\n  border-bottom-left-radius:100px!important;\n  border-top-left-radius:100px!important\n}\n.el-dropdown .el-dropdown__caret-button[data-v-088e66ac]{\n  bottom:2px!important\n}\n.el-dropdown-menu[data-v-088e66ac],.el-dropdown-menu__item[data-v-088e66ac]{\n  padding:0!important\n}\nbutton[data-v-088e66ac]:active,button[data-v-088e66ac]:focus{\n  outline:0!important\n}\n.el-input-group__append[data-v-088e66ac]{\n  padding:0!important\n}\n.el-input-group__prepend[data-v-088e66ac]{\n  padding-left:5px!important;\n  padding-right:5px!important\n}\n.el-menu-item[data-v-088e66ac],.el-submenu__title[data-v-088e66ac]{\n  height:40px!important;\n  line-height:40px!important;\n  font-family:\"Cabin\"!important;\n  font-size:16px!important;\n  font-style:normal!important;\n  font-weight:400!important;\n  color:#5c6b7a!important;\n  margin-bottom:10px!important;\n  border-left:4px solid transparent!important\n}\n.el-menu-item.is-active[data-v-088e66ac]{\n  color:#1b63d4!important;\n  font-weight:600!important;\n  border-left:4px solid #1b63d4!important;\n  border-top-left-radius:2px!important;\n  border-bottom-left-radius:2px!important\n}\n.el-menu--collapse[data-v-088e66ac]{\n  width:80px!important\n}\n.el-menu[data-v-088e66ac]{\n  border-right:0!important\n}\n.el-dialog__body[data-v-088e66ac],.el-dialog__header[data-v-088e66ac]{\n  padding:0!important\n}\n.el-dialog[data-v-088e66ac]{\n  border-radius:10px!important\n}\n.card-dialog[data-v-088e66ac]{\n  padding:20px!important\n}\n.vue-swatches__trigger[data-v-088e66ac]{\n  width:22px!important;\n  height:22px!important;\n  border-radius:2px!important\n}\n.vue-swatches[data-v-088e66ac]{\n  height:22px!important\n}\n.CodeMirror[data-v-088e66ac]{\n  height:calc(100vh - 150px)!important\n}\n.vue-swatches__trigger[data-v-088e66ac]{\n  border:1px solid #e2e2e2!important\n}\n.border-red-validation[data-v-088e66ac]{\n  border:1.3px solid #ed543a;\n  box-shadow:0 2px 10px #fdcece\n}\n.kg-popup .body-popup[data-v-088e66ac]{\n  padding:20px;\n  overflow-y:auto\n}\n.kg-popup .body-popup .title-dialog[data-v-088e66ac]{\n  font-family:\"Cabin\";\n  font-style:normal;\n  font-weight:600;\n  font-size:20px;\n  color:#5c6b7a\n}\n.kg-popup .body-popup .sub-dialog[data-v-088e66ac]{\n  font-family:\"Cabin\";\n  font-style:normal;\n  font-weight:400;\n  font-size:16px;\n  color:#7a8a99;\n  margin-top:5px;\n  margin-bottom:15px\n}\n.kg-popup .body-popup .score[data-v-088e66ac]{\n  font-family:\"Cabin\";\n  font-style:italic;\n  font-weight:400;\n  font-size:14px;\n  color:#7bbc49\n}\n.kg-popup .body-popup .subtitle-2[data-v-088e66ac]{\n  margin-top:20px\n}\n.kg-popup .body-popup .subtitle-2[data-v-088e66ac],.kg-popup .body-popup .user-role-subtitle[data-v-088e66ac]{\n  font-family:\"Cabin\";\n  font-style:normal;\n  font-weight:400;\n  font-size:16px;\n  color:#5c6b7a\n}\n.kg-popup .body-popup .user-role-container[data-v-088e66ac]{\n  margin-top:20px;\n  padding:15px;\n  gap:15px;\n  border-radius:5px;\n  border:1px solid #c3ced9;\n  background-color:#fafafa\n}\n.kg-popup .body-popup .footer-card-password[data-v-088e66ac]{\n  margin-top:15px\n}\n.kg-popup .body-popup .footer-card-password .cancel-btn[data-v-088e66ac]{\n  border:1px solid #1b63d4;\n  color:#1b63d4;\n  font-weight:700;\n  font-size:14px;\n  border-radius:5px;\n  height:40px\n}\n.kg-popup .body-popup .footer-card-password .cancel-btn[data-v-088e66ac]:hover{\n  background-color:#f3f4f6\n}\n.kg-popup .body-popup .footer-card-password .save-btn[data-v-088e66ac]{\n  font-family:\"Cabin\";\n  font-size:14px;\n  background:#1b63d4;\n  color:#fff;\n  border-radius:5px;\n  height:40px\n}\n.kg-popup .body-popup .footer-card-password .save-btn[data-v-088e66ac]:hover{\n  opacity:1\n}\n.kg-popup .body-popup .footer-card-password .disable-btn[data-v-088e66ac]{\n  font-family:\"Cabin\";\n  font-size:14px;\n  background:#f1f1f1;\n  border:1px solid #c3ced9;\n  border-radius:5px;\n  color:#a1adb9;\n  height:40px\n}\n.kg-popup .body-popup .footer-card-password .disable-btn[data-v-088e66ac]:hover{\n  opacity:1\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/user/CreateOrganization.vue?vue&type=template&id=088e66ac&scoped=true
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('Popup2', {
    staticClass: "kg-popup",
    attrs: {
      "width": "400"
    },
    on: {
      "close-modal": function ($event) {
        return _vm.closeDialog();
      }
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function () {
        return [_c('div', {
          staticClass: "body-popup"
        }, [_c('div', {
          staticClass: "flex justify-between items-center"
        }, [_c('div', {
          staticClass: "title-dialog"
        }, [_vm._v("\n          Create New Organization\n        ")])]), _vm._v(" "), _c('div', {
          staticClass: "sub-dialog"
        }, [_vm._v("\n        Input New Organization name.\n      ")]), _vm._v(" "), _c('div', {
          staticClass: "relative w-full"
        }, [_c('div', {
          staticClass: "flex"
        }, [_c('el-input', {
          staticClass: "mt-2",
          staticStyle: {
            "width": "100%"
          },
          attrs: {
            "placeholder": "New Organization"
          },
          model: {
            value: _vm.name,
            callback: function ($$v) {
              _vm.name = $$v;
            },
            expression: "name"
          }
        })], 1)]), _vm._v(" "), _c('Transition', [_c('Alert', {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: _vm.showMessage,
            expression: "showMessage"
          }],
          staticClass: "mt-6 mb-0",
          attrs: {
            "text": _vm.messageError
          }
        })], 1), _vm._v(" "), _c('div', {
          staticClass: "footer-card-password grid grid-cols-2 gap-4 place-content-stretch"
        }, [_c('button', {
          staticClass: "flex items-center justify-center cancel-btn no-select",
          on: {
            "click": function ($event) {
              return _vm.closeDialog();
            }
          }
        }, [_c('span', {
          staticClass: "name-btn no-select",
          staticStyle: {
            "color": "#1B63D4"
          }
        }, [_vm._v("Cancel")])]), _vm._v(" "), _c('button', {
          staticClass: "flex items-center justify-center no-select",
          class: _vm.validationBtnSave ? 'save-btn' : 'disable-btn',
          on: {
            "click": function ($event) {
              return _vm.save();
            }
          }
        }, [_c('IconSave', {
          staticClass: "mr-2",
          attrs: {
            "bg-color": _vm.validationBtnSave ? 'white' : '#A1ADB9'
          }
        }), _vm._v("\n          Save\n        ")], 1)])], 1)];
      },
      proxy: true
    }])
  });
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/user/CreateOrganization.vue?vue&type=template&id=088e66ac&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/user/CreateOrganization.vue?vue&type=script&lang=js
// import { mapState } from 'vuex'
/* harmony default export */ var CreateOrganizationvue_type_script_lang_js = ({
  data() {
    return {
      name: '',
      showMessage: false,
      messageError: ''
    };
  },

  computed: {
    validationBtnSave() {
      return this.name !== '';
    }

  },

  mounted() {},

  methods: {
    closeDialog() {
      document.querySelector('body').style.overflow = '';
      this.$store.commit('user/SET_ORG_CHANGE_DIALOG', false);
    },

    save() {
      if (this.validationBtnSave) {
        this.$notifier.showMessage({
          content: 'Saving changes...',
          type: 'loading'
        });
        const data = {
          name: this.name
        };
        const x = setTimeout(() => this.$store.dispatch('user/createOrganization', data).then(res => {
          if (res.status === 201 || res.status === 200) {
            this.$notifier.showMessage({
              content: 'Organization Save!.',
              type: 'success'
            });
            this.name = '';
            document.querySelector('body').style.overflow = '';
            this.$store.commit('user/SET_ORG_CHANGE_DIALOG', false);
            this.$store.dispatch('user/getOrgUser', {
              all: true
            });
            clearInterval(x);
          } else {
            this.showMessage = true;
            this.messageError = res.data.data.message;
            clearInterval(x);
          }
        }).catch(() => {
          clearInterval(x);
        }), 1000);
      } else {
        this.showMessage = true;
        this.messageError = 'Please fill in the required fields';
      }
    }

  }
});
// CONCATENATED MODULE: ./components/user/CreateOrganization.vue?vue&type=script&lang=js
 /* harmony default export */ var user_CreateOrganizationvue_type_script_lang_js = (CreateOrganizationvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/user/CreateOrganization.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(329)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  user_CreateOrganizationvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "088e66ac",
  "30961de7"
  
)

/* harmony default export */ var CreateOrganization = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Alert: __webpack_require__(43).default,IconSave: __webpack_require__(40).default,Popup2: __webpack_require__(44).default})


/***/ })

};;
//# sourceMappingURL=user-create-organization.js.map