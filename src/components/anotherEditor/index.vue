<template>
    <div class="q-editor" :id="`q-editor-${uploadBtnId}`">
        <el-upload
            :class="`avatar-upload-${uploadBtnId}`"
            style="height: 0;"
            :name="uploadFileName"
            :action="imageUploadPath"
            :show-file-list="false"
            :on-success="handleSuccess"
            :on-error="uploadError">
        </el-upload>
        <quill-editor
            v-model="localValue"
            :ref="`myQuillEditor-${uploadBtnId}`"
            :options="editorOption"
            @change="handleChange"
            @blur="onEditorBlur"
            @focus="onEditorFocus"
            @ready="onEditorReady"></quill-editor>
    </div>
</template>

<script>
import { quillEditor } from 'vue-quill-editor'
// import { quillEditor, Quill } from 'vue-quill-editor'
// import { ImageExtend, QuillWatch } from 'quill-image-extend-module'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'

// Quill.register('modules/ImageExtend', ImageExtend)

export default {
    props: {
        uploadBtnId: {
            type: String,
            default: 'u01'
        },
        value: {
            type: String,
            default: ''
        },
        imageUploadPath: {  // 上传图片的路径
            type: String,
            default: ''
        },
        uploadFileName: {   // 上传图片的后台需要的文件名
            type: String,
            default: 'pic'
        },
        maxLength: {    // 字数限制
            type: Number,
            default: 500
        },
        toolbar: {      // toolbar配置
            type: Array,
            default: () => [
                ['bold', 'italic', 'underline', 'strike', { 'color': [] }, { 'background': [] }, { 'align': [] }, 'image', 'clean'],        // 加粗，斜体，下划线，删除线，颜色选择，居中
                // ['blockquote', 'code-block'],                      //引用，代码块
                // [{ 'header': 1 }, { 'header': 2 }],               // 几级标题
                // [{ 'list': 'ordered'}, { 'list': 'bullet' }],     // 有序列表，无序列表
                // [{ 'script': 'sub'}, { 'script': 'super' }],      // 下角标，上角标
                // [{ 'indent': '-1'}, { 'indent': '+1' }],          // 缩进
                // [{ 'direction': 'rtl' }],                         // 文字输入方向
                // [{ 'size': ['small', false, 'large', 'huge'] }],  // 字体大小
                // [{ 'header': [1, 2, 3, 4, 5, 6, false] }],// 标题
                // [{ 'font': [] }],// 字体
            ]
        },
        placeholder: {
            type: String,
            default: '请输入'
        },
        imageSize: {
            type: Number,
            default: 3
        }
    },
    data() {
        return {
            localValue: '',
            titleConfig: {
                'ql-bold': '加粗',
                'ql-color': '颜色',
                'ql-font': '字体',
                'ql-code': '插入代码',
                'ql-italic': '斜体',
                'ql-link': '添加链接',
                'ql-background': '背景颜色',
                'ql-size': '字体大小',
                'ql-strike': '删除线',
                'ql-script': '上标/下标',
                'ql-underline': '下划线',
                'ql-blockquote': '引用',
                'ql-header': '标题',
                'ql-indent': '缩进',
                'ql-list': '列表',
                'ql-align': '文本对齐',
                'ql-direction': '文本方向',
                'ql-code-block': '代码块',
                'ql-formula': '公式',
                'ql-image': '图片',
                'ql-video': '视频',
                'ql-clean': '清除字体样式'
            }
        }
    },
    computed: {
        editorOption() {
            const _this = this;
            return {
                placeholder: this.placeholder,
                modules: {
                    toolbar: {
                        container: this.toolbar,
                        handlers: {
                            'image': function(value) {
                                // QuillWatch.emit(this.quill.id)
                                if (value) {
                                    const targetDomClass = `#q-editor-${_this.uploadBtnId} .avatar-upload-${_this.uploadBtnId}`;
                                    const targetDom = document.querySelector(targetDomClass);
                                    targetDom && targetDom.children && targetDom.children[0] && targetDom.children[0].click();
                                } else {
                                    this.quill.format('image', false);
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    watch: {
        value: {
            handler(val) {
                this.localValue = val;
            },
            deep: true
        }
    },
    methods: {
        init() {
            const quill = this.$refs[`myQuillEditor-${this.uploadBtnId}`].quill;
            quill.root.addEventListener('paste', this.handlePaste, false);

            this.addQuillTitle()
        },
        handlePaste(evt) {
            if (evt.clipboardData && evt.clipboardData.files && evt.clipboardData.files.length) {
                const _this = this;
                evt.preventDefault();
                [].forEach.call(evt.clipboardData.files, file => {
                    if (!file.type.match(/^image\/(gif|jpe?g|a?png|bmp)/i)) {
                        return;
                    }

                    const formData = new FormData()
                    formData.append(_this.uploadFileName, file, file.name)

                    const xhr = new XMLHttpRequest()
                    xhr.withCredentials = false
                    xhr.open('POST', _this.imageUploadPath)
                    xhr.onload = () => {
                        if (xhr.status !== 200) {
                            const { message } = JSON.parse(xhr.responseText)
                            _this.$message({
                                type: 'error',
                                message: message || ''
                            })
                            return
                        }
                        const { errno, url, errmsg } = JSON.parse(xhr.responseText)
                        if (!errno) {
                            const quill = _this.$refs[`myQuillEditor-${this.uploadBtnId}`].quill;
                            const range = quill.getSelection();
                            const random = Math.floor(Math.random() * 8)
                            const resUrl = url.find((value, key) => random === key)
                            if(range) {
                                //  在当前光标位置插入图片
                                quill.insertEmbed(range.index, 'image', resUrl);
                                //  将光标移动到图片后面
                                quill.setSelection(range.index + 1);
                            }
                        } else {
                            _this.$message({
                                type: 'error',
                                message: errmsg ? `上传失败，${errmsg}` : `上传失败`
                            })
                        }
                    }
                    xhr.send(formData)
                });
            }
        },
        handleChange(...args) {
            const html = args && args[0] && args[0].html;
            this.localValue = html; // 绑定当前逐渐地值
            this.$emit('change', this.localValue); // 将内容同步到父组件中
        },
        vaildTextLength(value) {
            const text = value ? value : this.$refs[[`myQuillEditor-${this.uploadBtnId}`]].quill.getText()
            if(text && text.length > this.maxLength) {
                this.$emit('overlength', true)
                return false
            }else {
                this.$emit('overlength', false)
                return true
            }
        },
        handleSuccess(res) {
            // console.log(res, file)
            const { errno, url, errmsg } = res;
            if(errno === 0) {
                const quill = this.$refs[`myQuillEditor-${this.uploadBtnId}`].quill;
                const range = quill.getSelection();
                const random = Math.floor(Math.random() * 8)
                const resUrl = url.find((value, key) => random === key)
                if(range) {
                    //  在当前光标位置插入图片
                    quill.insertEmbed(range.index, 'image', resUrl);
                    //  将光标移动到图片后面
                    quill.setSelection(range.index + 1);
                }
            }else {
                this.$message({
                    type: 'error',
                    content: errmsg || '图片上传失败！'
                })
            }
        },
        uploadError(res, file) {
            // console.log(res, file)
            if(res && file.status === 'fail') {
                this.$message({
                    type: 'error',
                    content: res.message || ''
                })
            }
        },
        onEditorBlur(...args) {
            const text = args && args[0] && args[0].text;
            this.$emit('blur', this.formProp)
            // 检测字数
            this.vaildTextLength(text);
        },
        onEditorFocus() {
        },
        onEditorReady() {
        },
        addQuillTitle() {
            const _this = this;
            const oToolBar = document.querySelectorAll('.ql-toolbar');
            oToolBar.forEach(element => {
                const aButton = element.querySelectorAll('button');
                const aPicker =  element.querySelectorAll('.ql-formats .ql-picker');
                aButton.forEach(function (item) {
                    if(item.className === 'ql-script') {
                        item.value === 'sub' ? item.title = '下标' : item.title = '上标';
                    }else if(item.className === 'ql-indent') {
                        item.value === '+1' ? item.title = '向右缩进' : item.title = '向左缩进';
                    }else{
                        item.title = _this.titleConfig[item.classList[0]];
                    }
                });
                aPicker.forEach(function (item) {
                    if (Array.from(item.classList).indexOf('ql-color') > -1 ||
                        Array.from(item.classList).indexOf('ql-background') > -1 ||
                        Array.from(item.classList).indexOf('ql-align') > -1) {
                        const options = item.querySelector('.ql-picker-options')
                        options.title = '';
                    }
                    item.title = _this.titleConfig[item.classList[0]];
                });
            });
        }
    },
    components: {
        quillEditor
    },
    mounted() {
        this.init()
    },
    beforeDestroy() {
        const quill = this.$refs[`myQuillEditor-${this.uploadBtnId}`].quill;
        quill.root.removeEventListener('paste', this.handlePaste, false);
    }
}
</script>

<style lang="scss" scoped>
.q-editor {
    /deep/ .ql-container {
        height: 200px;
    }
    /deep/ .ql-toolbar {
        height: 30px;
        line-height: 27px;
        padding: 0 8px;
        background-color: #f1f1f1;
        .ql-picker {
            line-height: 20px;
            .ql-picker-label:focus {
                outline: none;
            }
        }
    }
}
</style>