<template>
    <div>
        <el-row>
            <el-col>this is sub2 view</el-col>
        </el-row>
        <el-row>
            <el-col>
                <el-button style="float: right; padding: 3px 0" type="text" @click="goSub1">初级会计实务</el-button>
            </el-col>
        </el-row>
        <el-row>
            <el-col>
                <el-button style="float: right; padding: 3px 0" type="text" @click="goSub2">初级会计经济法基础</el-button>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    methods:{
        goSub1:function(){
            this.$router.push({path:'/sub1'})
        },
        goSub2:function(){
            this.$router.push({path:'/sub2'})
        }
    }
}
</script>