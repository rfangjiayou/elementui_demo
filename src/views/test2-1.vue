<template>
    <v-page class="test-wrap">
        <div class="content">
            <el-table
                :data="tableData"
                stripe
                border>
                <template v-for="column in columns">
                    <el-table-column
                        :key="column.prop"
                        :prop="column.prop"
                        :label="column.label"></el-table-column>
                </template>
            </el-table>
        </div>
    </v-page>
</template>

<script>
import { getTableData } from '@/services/test2-1.js'

export default {
    data() {
        return {
            columns: [
                { prop: 'date', label: '日期' },
                { prop: 'name', label: '姓名' },
                { prop: 'address', label: '地址' }
            ],
            tableData: []
        }
    },
    methods: {
        async init() {
            await getTableData().then(res => {
                console.log(res)
            })
        }
    },
    mounted() {
        this.init()
    }
}
</script>

<style lang="scss" scoped>
.test-wrap {
    .content {
        background: #fff;
        padding: 20px;
    }
}
</style>