<template>
    <div class="header">
        <el-button
            class="header-toggle-btn" 
            type="text" 
            icon="el-icon-s-fold"
            @click="toggleLeftMenuCollapse"></el-button>
        <div class="user-setting">
            <el-avatar 
                class="user-avatar" 
                icon="el-icon-user-solid"></el-avatar>
            <el-dropdown 
                class="user-setting-dropdown"
                @command="handleCommand">
                <span class="el-dropdown-link">
                    test<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="editProfile">修改资料</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
        <el-dialog
            title="修改资料"
            class="header-dailog"
            :visible.sync="dialogVisible"
            width="30%"
            :close-on-click-modal="false"
            :before-close="handleClose">
            <el-form 
                v-loading="loading"
                ref="form" 
                :model="form" 
                :rules="rules"
                label-width="80px"
                label-position="top">
                <el-form-item 
                    prop="name"
                    label="名称">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item 
                    prop="description"
                    label="资料描述">
                    <!-- <V-Editor
                        ref="formEditor"
                        v-model="form.description"
                        :maxLength="20"
                        :isClear="editiorClear"
                        placeholder="请输入资料描述"
                        @change="editorChange"
                        @overlength="vaildEditor"></V-Editor> -->
                    <Q-Editor
                        ref="formEditor"
                        v-model="form.description"
                        uploadBtnId="u01"
                        :maxLength="20"
                        imageUploadPath="/api/bug/upload-pic?bug_id=560"
                        placeholder="请输入资料描述"
                        @change="editorChange"
                        @overlength="vaildEditor"></Q-Editor>
                </el-form-item>
                <el-form-item 
                    prop="userDes"
                    label="个人简介">
                    <Q-Editor
                        ref="QFormEditor"
                        uploadBtnId="u02"
                        v-model="form.userDes"
                        :maxLength="20"
                        imageUploadPath="/api/bug/upload-pic?bug_id=560"
                        placeholder="请输入个人简介"
                        @change="QEditorChange"
                        @overlength="QVaildEditor"></Q-Editor>
                </el-form-item>
            </el-form>
            <span slot="footer">
                <el-button class="dialog-btn" @click="handleClose">取 消</el-button>
                <el-button class="dialog-btn" type="primary" @click="submit">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import { FormError } from "@/utils";
import { mapState, mapActions } from 'vuex'
import { getUserInfo } from '@/services/header.js'

export default {
    data() {
        return {
            dialogVisible: false,
            editiorClear: false,
            loading: false,
            form: {
                name: '',
                description: '',
                userDes: ''
            },
            formError: null
        }
    },
    computed: {
        ...mapState('leftMenu', ['leftMenuCollapse']),
        toggleIcon() {
            return this.leftMenuCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'
        },
        rules() {
            return {
                name: [
                    { required: true, message: '此项不能为空', trigger: 'change, blur' }
                ],
                description: [
                    { required: true, message: '此项不能为空', trigger: 'change, blur' }
                ],
                userDes: [
                    { required: true, message: '此项不能为空', trigger: 'change, blur' }
                ]
            }
        },
        descriptionSchema() {
            return {
                description: [
                    () => {
                        this.rules.description.unshift({
                            validator: (rule, value, callback) => callback(new Error('字数超过限制'))
                        });
                        return () => this.rules.description.shift();
                    }
                ]
            }
        },
        userDes() {
            return {
                userDes: [
                    () => {
                        this.rules.userDes.unshift({
                            validator: (rule, value, callback) => callback(new Error('字数超过限制'))
                        });
                        return () => this.rules.userDes.shift();
                    }
                ]
            }
        }
    },
    methods: {
        ...mapActions('leftMenu', ['toggleLeftMenuCollapse']),
        handleCommand(command) {
            switch(command) {
                case 'editProfile':
                    this.openDialog()
                    break;
                default:
                    break;
            }
        },
        async initForm() {
            try {
                // this.loading = true;
                const { data } = await getUserInfo();
                if(data) {
                    // this.form = data;
                }
                // this.loading = false;
            }catch(err) { 
                // continue regardless of error 
            }
        },
        openDialog() {
            if(!this.formError) {
                this.$nextTick(() => {
                    this.formError = new FormError(this.$refs.form)
                })
            }
            this.editiorClear = true;
            this.dialogVisible = true;
            this.initForm()
        },
        handleClose() {
            this.$refs.form.resetFields()
            this.editiorClear = false;
            this.dialogVisible = false
        },
        editorChange(val) {
            this.form.description = val
        },
        QEditorChange(val) {
            this.form.userDes = val
        },
        vaildEditor(error) {
            if(error) {
                this.formError.display('description', this.descriptionSchema);
            }else {
                this.$refs.form.validateField('description')
            }
        },
        QVaildEditor(error) {
            if(error) {
                this.formError.display('userDes', this.userDes);
            }else {
                this.$refs.form.validateField('userDes')
            }
        },
        async submit() {
            this.$refs.form.validate((valid) => {
                const editorLengthSuccess = this.$refs.formEditor.vaildTextLength();
                const QEditorLengthSuccess = this.$refs.QFormEditor.vaildTextLength();
                if(!valid) return
                if(!editorLengthSuccess || !QEditorLengthSuccess) return

                console.log('success')
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.header {
    height: 60px;
    display: flex;
    &-toggle-btn {
        height: 60px;
        margin-left: 20px;
        color: #909399;
        /deep/ i {
            font-size: 20px;
        }
        &:hover {
            color: $--color-main;
        }
    }
    .user-setting {
        display: flex;
        margin-left: auto;
        margin-right: 20px;
        line-height: 60px;
        .user-avatar {
            margin: 10px;
        }
        &-dropdown {
            font-size: 16px;
            &:hover {
                cursor: pointer;
            }
        }
    }
    .dialog-btn {
        height: 40px;
    }
    .header-dailog {
        /deep/ .is-error {
            .editor {
                border: 1px solid $--color-danger;
            }
            .q-editor {
                .ql-toolbar {
                    border: 1px solid $--color-danger;
                    border-bottom: 1px solid #ccc;
                }
                .ql-container {
                    border: 1px solid $--color-danger;
                    border-top: none;
                }
            }
        }
    }
}
</style>