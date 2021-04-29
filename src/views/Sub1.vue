<template>
    <div>
        <el-page-header @back="goback" content="初级会计实务">
        </el-page-header>

        <el-row class="main-grid">
            <el-col>
                <el-row>
                    <el-col>
                        <el-button class="nav-btn" type="primary" @click="type1">单项选择题</el-button>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col>
                        <el-button class="nav-btn" type="primary" @click="type2">多项选择题</el-button>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col>
                        <el-button class="nav-btn" type="primary" @click="type3">判断题</el-button>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    methods:{
        type1:function(){
            this.$router.push({path:'/sub1/type1'})
        },
        type2:function(){
            this.$router.push({path:'/sub1/type2'})
        },
        type3:function(){
            this.$router.push({path:'/sub1/type3'})
        },
        goback(){
            this.$router.push({path:'/'})
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