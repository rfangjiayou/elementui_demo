<template>
    <v-page class="test-wrap">
        <div class="content">
            <el-table
                :data="tableData"
                stripe
                border>
                <template v-for="column in columns">
                    <el-table-column
                        v-if="column.prop === 'description'"
                        :key="column.prop"
                        :prop="column.prop"
                        :label="column.label">
                        <template slot-scope="{ row }">
                            <el-popover 
                                popper-class="row-tooltip" 
                                trigger="hover"
                                width="500"
                                :content="row[column.prop]" 
                                placement="left">
                                <span class="row-description" slot="reference">{{ row[column.prop] }}</span>
                            </el-popover>
                        </template>
                    </el-table-column>
                    <el-table-column
                        v-else
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
                { prop: 'userid', label: 'ID' },
                { prop: 'username', label: '用户名' },
                { prop: 'date', label: '日期' },
                { prop: 'ip', label: 'ip地址' },
                { prop: 'email', label: '邮箱' },
                { prop: 'description', label: '描述' }
            ],
            tableData: []
        }
    },
    methods: {
        async init() {
            try {
                const { data } = await getTableData();
                if(data) {
                    this.tableData = data;
                }
            }catch(err) { 
                // continue regardless of error 
            }
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
        margin: 20px;
        padding: 20px;
        min-height: calc(100vh - 100px);
        .row-description {
            overflow: hidden;
            white-space: nowrap;
            text-overflow:ellipsis;
        }
    }
}
</style>