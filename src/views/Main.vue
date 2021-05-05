<template>
    <div>
        <el-page-header title="首页" content="初级会计题库">
        </el-page-header>

        <el-row class="main-grid">
            <el-col>
                <el-row>
                    <el-col>
                        <el-button class="nav-btn" type="primary" @click="goSub1">初级会计实务</el-button>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col>
                        <el-button class="nav-btn" type="primary" @click="goSub2">初级会计经济法基础</el-button>
                    </el-col>
                </el-row>
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
<style scoped>
.el-row {
    margin-top: 30px;
    margin-bottom: 30px;
}
.main-grid {
    margin-top: 90px;
}
.nav-btn {
    width: 80%;
}
</style>