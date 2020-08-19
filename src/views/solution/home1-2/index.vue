<template>
    <div class="home">
        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
            <el-form-item label="名称">
                <el-input v-model="formLabelAlign.name"></el-input>
            </el-form-item>
            <el-form-item label="活动区域">
                <el-input v-model="formLabelAlign.region"></el-input>
            </el-form-item>
            <el-form-item label="活动形式">
                <el-input v-model="formLabelAlign.type"></el-input>
            </el-form-item>
        </el-form>
        <V-Button text="提交" @click="handleClick" class="order-btn"></V-Button>
    </div>
</template>

<script>
import { MapBridge } from '@/utils/mapBridge'

export default {
    name: 'Home',
    data() {
        return {
            labelPosition: 'right',
            formLabelAlign: {
                name: '',
                region: '',
                type: ''
            }
        }
    },
    methods: {
        handleClick() {
            const map = new MapBridge({
                name: 'server_name',
                region: 'server_region',
                type: 'server_type'
            })
            const sendInfo = data => {
                return map.pick(data, [
                    'server_name',
                    'server_region',
                    'server_type'
                ])
            }
            const getInfo = data => {
                return map.reversePick(data, Object.keys(this.formLabelAlign))
            }
            const result = sendInfo(this.formLabelAlign)
            const getData = getInfo({
                server_name: 'asdasd',
                server_region: 'asdqwer',
                server_type: 'zxcqwer'
            })
            console.log('下发数据：', result)
            console.log('获取数据：', getData)
        }
    }
}
</script>

<style lang="scss" scoped>
.home {
    height: 100%;
}
</style>
