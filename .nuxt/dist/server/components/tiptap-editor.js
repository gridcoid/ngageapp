exports.ids = [116];
exports.modules = {

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TiptapEditor.vue?vue&type=template&id=1cce49d8
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', [_c('editor-content', {
    staticStyle: {
      "height": "200px",
      "border": "1px solid red"
    },
    attrs: {
      "editor": _vm.editor
    }
  }), _vm._ssrNode(_vm._ssrEscape("\n  " + _vm._s(_vm.modelValue) + "\n"))], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/TiptapEditor.vue?vue&type=template&id=1cce49d8

// EXTERNAL MODULE: external "@tiptap/starter-kit"
var starter_kit_ = __webpack_require__(110);
var starter_kit_default = /*#__PURE__*/__webpack_require__.n(starter_kit_);

// EXTERNAL MODULE: external "@tiptap/vue-2"
var vue_2_ = __webpack_require__(111);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TiptapEditor.vue?vue&type=script&lang=js


/* harmony default export */ var TiptapEditorvue_type_script_lang_js = ({
  components: {
    EditorContent: vue_2_["EditorContent"]
  },
  props: {
    modelValue: {
      type: String,
      default: ''
    }
  },
  emits: ['update:modelValue'],

  data() {
    return {
      editor: null
    };
  },

  watch: {
    modelValue(value) {
      const isSame = this.editor.getHTML() === value;

      if (isSame) {
        return;
      }

      this.editor.commands.setContent(value, false);
    }

  },

  mounted() {
    this.editor = new vue_2_["Editor"]({
      extensions: [starter_kit_default.a],
      content: this.modelValue,
      onUpdate: () => {
        this.$emit('update:modelValue', this.editor.getHTML());
      }
    });
  },

  beforeDestroy() {
    this.editor.destroy();
  }

});
// CONCATENATED MODULE: ./components/TiptapEditor.vue?vue&type=script&lang=js
 /* harmony default export */ var components_TiptapEditorvue_type_script_lang_js = (TiptapEditorvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/TiptapEditor.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TiptapEditorvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "27119d1e"
  
)

/* harmony default export */ var TiptapEditor = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=tiptap-editor.js.map