<template>
    <div class="editor">
        <div ref="toolbar" class="editor-toolbar"></div>
        <div ref="editor" class="editor-body" :class="{'display-placeholder': !hasText}"></div>
    </div>
</template>

<script>
import Editor from 'wangeditor'

export default {
    name: 'Editor',
    props: {
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
            default: ''
        },
        maxLength: {    // 字数限制
            type: Number,
            default: 500
        },
        isClear: {      // 是否清空编辑器
            type: Boolean,
            default: false
        },
        toolbar: {      // toolbar配置
            type: Array,
            default: () => ['head', 'bold', 'fontSize', 'italic', 'underline', 'foreColor', 'link', 'justify', 'image', 'undo']
        },
        colors: {       // 颜色配置
            type: Array,
            default: () => ['#000000', '#eeece0', '#1c487f', '#4d80bf', '#c24f4a', '#8baa4a', '#7b5ba1', '#46acc8', '#f9963b', '#ffffff']
        },
        placeholder: {
            type: String,
            default: '请输入'
        }
    },
    data() {
        return {
            editor: null,
            localValue: ''
        }
    },
    computed: {
        hasText() {
            if(this.editor && this.value) {
                return this.editor.txt.text()
            }
            return false
        }
    },
    watch: {
        // value: {
        //     handler(val) {
        //         this.editor.txt.html(val)
        //     },
        //     deep: true
        // },
        isClear(val) {
            // 触发清除文本域内容
            if (val) {
                this.editor.txt.clear()
            }
        }
    },
    methods: {
        setEditor() {
            this.editor = new Editor(this.$refs.toolbar, this.$refs.editor)

            this.editor.customConfig.zIndex = 100                               // 自定义z-index
            this.editor.customConfig.uploadImgShowBase64 = true                // base 64 存储图片
            // this.editor.customConfig.uploadImgServer = this.imageUploadPath || '//api/test'     // 配置服务器端地址
            this.editor.customConfig.showLinkImg = false                        // 隐藏网络图片tab
            this.editor.customConfig.uploadImgHeaders = {}                      // 自定义 header
            this.editor.customConfig.uploadFileName = this.uploadFileName       // 后端接受上传文件的参数名
            this.editor.customConfig.uploadImgMaxSize = 2 * 1024 * 1024         // 将图片大小限制为 2M
            this.editor.customConfig.uploadImgMaxLength = 6                     // 限制一次最多上传 3 张图片
            this.editor.customConfig.uploadImgTimeout = 3 * 60 * 1000           // 设置超时时间

            // 配置菜单，全部示例如下
            // [
            //     'head', // 标题
            //     'bold', // 粗体
            //     'fontSize', // 字号
            //     'fontName', // 字体
            //     'italic', // 斜体
            //     'underline', // 下划线
            //     'strikeThrough', // 删除线
            //     'foreColor', // 文字颜色
            //     'backColor', // 背景颜色
            //     'link', // 插入链接
            //     'list', // 列表
            //     'justify', // 对齐方式
            //     'quote', // 引用
            //     'emoticon', // 表情
            //     'image', // 插入图片
            //     'table', // 表格
            //     'video', // 插入视频
            //     'code', // 插入代码
            //     'undo', // 撤销
            //     'redo' // 重复
            // ]
            this.editor.customConfig.menus = this.toolbar;

            // 配置颜色
            this.editor.customConfig.colors = this.colors;

            this.editor.customConfig.uploadImgHooks = {
                fail: (xhr, editor, result) => {
                    // 插入图片失败回调
                    console.log(xhr, editor, result)
                },
                success: (xhr, editor, result) => {
                    // 图片上传成功回调
                    if(result) {
                        this.$message({
                            type: 'success',
                            message: '图片上传成功！'
                        })
                    }
                },
                timeout: () => {
                    // 网络超时的回调
                    this.$message({
                        type: 'error',
                        message: '图片上传超时！'
                    })
                },
                error: (xhr, editor) => {
                    // 图片上传错误的回调
                    console.log(xhr, editor)
                },
                // customInsert: async (files, insert) => {
                //     // 图片上传成功,插入图片的回调
                //     /* files 是 input 中选中的文件列表 */ 
                //     let formData = new FormData() 
                //     formData.append(this.uploadFileName, files[0]) 
                //     let data = await this.upload(formData) 
                //     /* upload方法是后台提供的上传图片的接口 */
                //     insert(data.imgUrl)
                // }
            }

            this.editor.customConfig.customAlert = (info) => {
                // info 是需要提示的内容
                this.$message({
                    type: 'error',
                    message: info
                })
            }

            this.editor.customConfig.onchange = (html) => {
                this.localValue = html // 绑定当前逐渐地值
                this.$emit('change', this.localValue) // 将内容同步到父组件中
                // 检测字数
                this.vaildTextLength()
            }

            // 创建富文本编辑器
            this.editor.create()
            this.setPlaceholder()
        },
        setPlaceholder() {
            this.$nextTick(() => {
                const targetDom = this.editor.$textElem[0];
                const placeholder = targetDom && targetDom.getAttribute('placeholder')
                if(!placeholder) {
                    targetDom.setAttribute('placeholder', this.placeholder)
                }
            })
        },
        vaildTextLength() {
            const text = this.editor.txt.text()
            if(text && text.length > this.maxLength) {
                this.$emit('overlength', true)
                return false
            }else {
                this.$emit('overlength', false)
                return true
            }
        }
    },
    mounted() {
        // 初始化编辑器
        this.setEditor()
    }
}
</script>

<style lang="scss" scoped>
.editor {
    border: 1px solid #ccc;
    &-toolbar {
        height: 30px;
        line-height: 20px;
        border-bottom: 1px solid #ccc;
        background-color: #f1f1f1;
    }
    &-body {
        height: 200px;
    }
    /*为空时显示 element attribute content*/
    .display-placeholder{
        /deep/ .w-e-text:before {
            content: attr(placeholder);   /* element attribute*/
            /*content: 'this is content';*/
            color: lightgrey;
            cursor: text;
            pointer-events:none;
        }
    }
    /*焦点时内容为空*/
    .display-placeholder{
        /deep/ .w-e-text:focus:before{
            content:none;
        }
    }
}
</style>