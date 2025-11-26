<template>
  <div v-if="!isLoading">
    <div v-if="editor" class="form-input">
      <editor-content
        ref="markdowndetails"
        :editor="editor"
        class="input-box"
      />
      <div class="style-box">
        <div class="title-box">Style</div>
        <div class="flex flex-row card-font">
          <el-select
            v-model="selectedFont"
            :value="findFamily()"
            placeholder="Select"
            class="font-family-card"
            @change="changeFont(selectedFont)"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
          <el-select
            v-model="value2"
            :value="findSize()"
            filterable
            placeholder=""
            class="font-size-card"
            @change="selectFontSize()"
          >
            <el-option
              v-for="item in options2"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
        <div class="grid grid-cols-4 gap-2">
          <div
            class="btn-card flex items-center justify-center"
            :class="{ 'btn-card-active': editor.isActive('bold') }"
            @click="editor.chain().focus().toggleBold().run()"
          >
            <IconTextBold
              :bg-color="editor.isActive('bold') ? 'white' : '#1B63D4'"
            />
          </div>
          <div
            class="btn-card flex items-center justify-center"
            :class="{ 'btn-card-active': editor.isActive('italic') }"
            @click="editor.chain().focus().toggleItalic().run()"
          >
            <IconTextItalic
              :bg-color="editor.isActive('italic') ? 'white' : '#1B63D4'"
            />
          </div>
          <div
            class="btn-card flex items-center justify-center"
            :class="{ 'btn-card-active': editor.isActive('underline') }"
            @click="editor.chain().focus().toggleUnderline().run()"
          >
            <IconTextUnderlined
              :bg-color="editor.isActive('underline') ? 'white' : '#1B63D4'"
            />
          </div>
          <div
            class="btn-card flex items-center justify-center"
            :class="{ 'btn-card-active': editor.isActive('strike') }"
            @click="editor.chain().focus().toggleStrike().run()"
          >
            <IconTextStrike
              :bg-color="editor.isActive('strike') ? 'white' : '#1B63D4'"
            />
          </div>
        </div>
        <div class="grid grid-cols-4 gap-2 mt-2">
          <div
            class="btn-card flex items-center justify-center"
            :class="{
              'btn-card-active': editor.isActive({ textAlign: 'left' }),
            }"
            @click="editor.commands.setTextAlign('left')"
          >
            <IconTextLeft
              :bg-color="
                editor.isActive({ textAlign: 'left' }) ? 'white' : '#1B63D4'
              "
            />
          </div>
          <div
            class="btn-card flex items-center justify-center"
            :class="{
              'btn-card-active': editor.isActive({ textAlign: 'center' }),
            }"
            @click="editor.commands.setTextAlign('center')"
          >
            <IconTextCenter
              :bg-color="
                editor.isActive({ textAlign: 'center' }) ? 'white' : '#1B63D4'
              "
            />
          </div>
          <div
            class="btn-card flex items-center justify-center"
            :class="{
              'btn-card-active': editor.isActive({ textAlign: 'right' }),
            }"
            @click="editor.commands.setTextAlign('right')"
          >
            <IconTextRight
              :bg-color="
                editor.isActive({ textAlign: 'right' }) ? 'white' : '#1B63D4'
              "
            />
          </div>
          <div
            class="btn-card flex items-center justify-center"
            :class="{
              'btn-card-active': editor.isActive({ textAlign: 'justify' }),
            }"
            @click="editor.commands.setTextAlign('justify')"
          >
            <IconTextJustify
              :bg-color="
                editor.isActive({ textAlign: 'justify' }) ? 'white' : '#1B63D4'
              "
            />
          </div>
        </div>
        <div class="grid grid-cols-2 gap-2">
          <div class="flex flex-col color-container">
            <div class="title-color">Text Color</div>
            <div class="color-card flex items-center">
              <el-color-picker
                v-model="color"
                :value="findColor()"
                size="mini"
                color-format="hex"
                @change="changeColor($event)"
              />
              <input v-model="color" class="text-color" />
            </div>
          </div>
          <div class="flex flex-col color-container">
            <div class="title-color">Opacity</div>
            <div
              class="color-card flex items-center justify-between"
              style="padding-left: 0px; padding-right: 0px"
            >
              <input
                v-model="opacity"
                class="text-color"
                @input="selectFontOpacity()"
              />
              <div class="flex items-center justify-center percent-color">
                <div class="hr-vertical" />
                %
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StarterKit from '@tiptap/starter-kit'
import { Editor, EditorContent, Extension } from '@tiptap/vue-2'
import Document from '@tiptap/extension-document'
import FontFamily from '@tiptap/extension-font-family'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import TextStyle from '@tiptap/extension-text-style'
import TextAlign from '@tiptap/extension-text-align'
import TextUnderline from '@tiptap/extension-underline'
import { Color } from '@tiptap/extension-color'
import { mapState } from 'vuex'

const FontSize = Extension.create({
  name: 'fontSize',
  addOptions() {
    return {
      types: ['textStyle'],
    }
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          fontSize: {
            default: null,
            parseHTML: (element) =>
              element.style.fontSize.replace(/['"]+/g, ''),
            renderHTML: (attributes) => {
              if (!attributes.fontSize) {
                return {}
              }
              return {
                style: `font-size: ${attributes.fontSize}`,
              }
            },
          },
        },
      },
    ]
  },
  addCommands() {
    return {
      setFontSize:
        (fontSize) =>
        ({ chain }) => {
          return chain()
            .setMark('textStyle', { fontSize: fontSize + 'px' })
            .run()
        },
      unsetFontSize:
        () =>
        ({ chain }) => {
          return chain()
            .setMark('textStyle', { fontSize: null })
            .removeEmptyTextStyle()
            .run()
        },
    }
  },
})

const FontSize2 = Extension.create({
  name: 'fontSize2',
  addOptions() {
    return {
      types: ['textStyle'],
    }
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          fontSize2: {
            default: null,
            parseHTML: (element) => element.style.opacity.replace(/['"]+/g, ''),
            renderHTML: (attributes) => {
              if (!attributes.fontSize2) {
                return {}
              }
              return {
                style: `opacity: ${attributes.fontSize2}`,
              }
            },
          },
        },
      },
    ]
  },
  addCommands() {
    return {
      setFontSize2:
        (fontSize2) =>
        ({ chain }) => {
          return chain()
            .setMark('textStyle', { fontSize2: fontSize2 + '%' })
            .run()
        },
      unsetFontSize2:
        () =>
        ({ chain }) => {
          return chain()
            .setMark('textStyle', { fontSize2: null })
            .removeEmptyTextStyle()
            .run()
        },
    }
  },
})

export default {
  components: {
    EditorContent,
  },
  props: {
    titleForm: {
      default: '',
      type: String,
    },
  },

  data() {
    return {
      isLoading: true,
      defaultData: {},
      color: '#000000',
      opacity: 100,
      text: 'testing',
      editor: null,
      selectedFont: '',
      options: [
        {
          value: 'Arial, Helvetica, sans-serif',
          label: 'Arial, Helvetica, sans-serif',
        },
        {
          value: 'Arial, sans-serif',
          label: 'Arial, sans-serif',
        },
        {
          value: 'Comic Sans MS, Comic Sans',
          label: 'Comic Sans MS',
        },
        {
          value: 'Inter',
          label: 'Inter',
        },
        {
          value: 'serif',
          label: 'Serif',
        },
        {
          value: 'monospace',
          label: 'Monospace',
        },
        {
          value: 'cursive',
          label: 'Cursive',
        },
        {
          value: 'Lato, Roboto',
          label: 'Lato, Roboto',
        },
        {
          value: 'Montserrat',
          label: 'Montserrat',
        },
        {
          value: 'Fira Sans',
          label: 'Fira Sans',
        },
        {
          value: 'Fira Code',
          label: 'Fira Code',
        },
        {
          value: 'Roboto',
          label: 'Roboto',
        },
        {
          value: 'Roboto Mono',
          label: 'Roboto Mono',
        },
        {
          value: 'Roboto Condensed',
          label: 'Roboto Condensed',
        },
        {
          value: 'Roboto Slab',
          label: 'Roboto Slab',
        },
        {
          value: 'IBM Plex Sans',
          label: 'IBM Plex Sans',
        },
        {
          value: 'IBM Plex Serif',
          label: 'IBM Plex Serif',
        },
        {
          value: 'Poppins',
          label: 'Poppins',
        },
        {
          value: 'Oswald',
          label: 'Oswald',
        },
        {
          value: 'Bebas Neue',
          label: 'Bebas Neue',
        },
        {
          value: 'Raleway',
          label: 'Raleway',
        },
        {
          value: 'Noto Sans',
          label: 'Noto Sans',
        },
        {
          value: 'Mukta',
          label: 'Mukta',
        },
        {
          value: 'Nunito',
          label: 'Nunito',
        },
        {
          value: 'Nunito Sans',
          label: 'Nunito Sans',
        },
        {
          value: 'Segoe UI, Arial, sans-serif',
          label: 'Segoe UI, Arial, sans-serif',
        },
      ],
      options2: [
        {
          value: '6',
          label: '6px',
        },
        {
          value: '7',
          label: '7px',
        },
        {
          value: '8',
          label: '8px',
        },
        {
          value: '9',
          label: '9px',
        },
        {
          value: '10',
          label: '10px',
        },
        {
          value: '11',
          label: '11px',
        },
        {
          value: '12',
          label: '12px',
        },
        {
          value: '13',
          label: '13px',
        },
        {
          value: '14',
          label: '14px',
        },
        {
          value: '15',
          label: '15px',
        },
        {
          value: '16',
          label: '16px',
        },
        {
          value: '17',
          label: '17px',
        },
        {
          value: '18',
          label: '18px',
        },
        {
          value: '19',
          label: '19px',
        },
        {
          value: '20',
          label: '20px',
        },
        {
          value: '21',
          label: '21px',
        },
        {
          value: '22',
          label: '22px',
        },
        {
          value: '23',
          label: '23px',
        },
        {
          value: '24',
          label: '24px',
        },
        {
          value: '25',
          label: '25px',
        },
        {
          value: '26',
          label: '26px',
        },
        {
          value: '27',
          label: '27px',
        },
        {
          value: '28',
          label: '28px',
        },
        {
          value: '29',
          label: '29px',
        },
        {
          value: '30',
          label: '30px',
        },
      ],
      value: '',
      value2: '12',
      dataFont: {},
    }
  },
  computed: {
    ...mapState({
      dataForm: (state) => {
        return state.template.dataForm
      },
      selectedResolution: (state) => {
        return state.template.selectedResolution
      },
    }),
  },

  mounted() {
    this.checkEditor()
  },

  beforeUnmount() {
    this.editor.destroy()
  },
  methods: {
    checkEditor() {
      this.isLoading = true

      this.editor = new Editor({
        onUpdate: ({ editor }) => {
          const data = {
            title: this.titleForm,
            type: 'Text',
            src: editor.getHTML(),
          }
          this.$emit('changeText', data)
        },
        extensions: [
          StarterKit,
          Document,
          Paragraph.configure({
            HTMLAttributes: {
              class: 'text-unimind',
            },
          }),
          Text,
          TextStyle,
          FontFamily,
          FontSize,
          TextUnderline,
          TextAlign.configure({
            types: ['paragraph'],
          }),
          Color,
          FontSize2,
        ],
        content: `
          <p><span style="">Text</span></p>
        `,
      })
      this.getTemplateDetail()
    },
    changeFont(data) {
      this.selectedFont = data
      this.editor.chain().focus().setFontFamily(data).run()
    },
    findFamily() {
      this.options.forEach((item, index) => {
        if (this.editor.isActive('textStyle', { fontFamily: item.value })) {
          this.selectedFont = item.value
        }
      })
    },
    findSize() {
      this.options2.forEach((item, index) => {
        if (
          this.editor.isActive('textStyle', { fontSize: item.value + 'px' })
        ) {
          this.value2 = item.value
        }
      })
    },
    findColor() {
      this.color = this.editor.getAttributes('textStyle').color
    },
    findOpacity() {
      this.editor.on('update', ({ editor }) => {})

      this.editor.on('selectionUpdate', ({ editor }) => {})

      // this.editor.on('transaction', ({ editor, transaction }) => {
      //
      //
      // })

      // this.editor.on('focus', ({ editor, event }) => {
      //
      //
      // })

      // this.editor.on('blur', ({ editor, event }) => {
      //
      //
      // })

      // this.editor.on('destroy', () => {
      //
      //
      // })
      // if (this.editor.getAttributes('textStyle').fontSize2 === '') {
      //   this.opacity = 100
      // } else {
      //
      //   console.log(
      //     'getAttributes : ',
      //     this.editor.getAttributes('textStyle').fontSize2
      //   )
      //   // this.opacity = this.editor.getAttributes('textStyle').fontSize2 * 100
      // }
    },
    async getfont() {
      await this.$axios
        .get(
          'https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyAdGPY4_bsWi8c9fHhfdDmwF881W8HLOvk'
        )
        .then((res) => {
          this.dataFont = res.data.items
        })
        .catch((error) => {
          this.$notifier.showMessage({
            content: error,
            type: 'failed',
          })
          this.imageLoaded = false
        })
    },
    getTemplateDetail() {
      this.defaultData = this.dataForm.find(
        (item) => item.title === this.titleForm
      )
      this.editor.commands.setContent(this.defaultData.default)
      for (let i = 0; i < this.options2.length; i++) {
        if (
          this.editor.isActive('textStyle', {
            fontSize: this.options2[i].label,
          })
        ) {
          this.value2 = this.options2[i].value
        }
      }
      this.color = this.editor.getAttributes('textStyle').color
      if (!this.color.includes('#')) {
        this.color = this.rgb2hex(this.color)
      }
      if (this.editor.getAttributes('textStyle').fontSize2 === '') {
        this.opacity = 100
      } else {
        this.opacity = this.editor.getAttributes('textStyle').fontSize2 * 100
      }
      this.isLoading = false
    },
    selectFontSize() {
      this.editor.commands.setFontSize(this.value2)
    },
    rgb2hex(rgb) {
      rgb = rgb.match(
        /^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i
      )
      return rgb && rgb.length === 4
        ? '#' +
            ('0' + parseInt(rgb[1], 10).toString(16)).slice(-2) +
            ('0' + parseInt(rgb[2], 10).toString(16)).slice(-2) +
            ('0' + parseInt(rgb[3], 10).toString(16)).slice(-2)
        : ''
    },
    selectFontOpacity() {
      this.editor.commands.setFontSize2(this.opacity)
    },
    setText(data1) {
      if (data1 === 'bold') {
        this.editor.chain().focus().toggleBold().run()
      }
    },
    changeColor(x) {
      this.editor.chain().focus().setColor(x).run()
      this.color = x
    },
  },
}
</script>

<style lang="scss" scoped>
.form-input {
  .input-box {
    overflow-wrap: break-word;
    overflow-y: scroll;
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */
    height: 157px;
    width: 100%;
    resize: none;
    background: #9a9a9a;
    border: 1px solid #e2e2e2;
    border-radius: 5px;
    padding: 10px;
  }
  .input-box::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
  .input-box:focus {
    outline: none !important;
    background: #ffffff;
    border: 1.3px solid #1b63d4;
    box-shadow: 0px 2px 10px #bbd1f3;
    border-radius: 5px;
  }
  .style-box {
    margin-top: 8px;
    .title-box {
      font-weight: 600;
      font-size: 14px;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      color: #454545;
      margin-bottom: 8px;
    }
    .card-font {
      margin-bottom: 8px;
      .font-family-card {
        width: 66%;
      }
      .font-size-card {
        width: 30%;
        margin-left: 10px;
      }
    }
    .btn-card {
      height: 34px;
      background: #ffffff;
      border: 1px solid #e2e2e2;
      border-radius: 5px;
      cursor: pointer;
    }
    .btn-card-active {
      background: #1b63d4;
    }
    .color-container {
      margin-top: 8px;
      .title-color {
        font-weight: 400;
        font-size: 16px;
        color: #454545;
      }
      .color-card {
        height: 40px;
        background: #ffffff;
        border: 1px solid #e2e2e2;
        border-radius: 5px;
        padding-left: 10px;
        padding-right: 10px;
        .text-color {
          font-weight: 400;
          font-size: 16px;
          color: #454545;
          margin-left: 5px;
          width: 80px;
        }
        .text-color:focus {
          outline: none !important;
        }
        .percent-color {
          font-weight: 500;
          font-size: 16px;
          color: #333333;
          .hr-vertical {
            border: 1px solid #e2e2e2;
            height: 15px;
            margin-right: 8px;
          }
        }
      }
    }
  }
}
</style>
