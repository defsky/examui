<template>
    <div>
        <el-page-header @back="goback" content="初级会计实务">
        </el-page-header>

        <el-row class="main-grid">
            <el-col>
                <el-row class="content-grid">
                    <el-col>
                        <div class="subtitle">
                            单项选择题：
                        </div>
                    </el-col>
                </el-row>
                <el-row class="content-grid">
                    <el-card class="box-card">
                        <div slot="header" class="question-body">
                            <span>{{sharedState.question.description}}</span>
                        </div>
                        <div class="text item">
                            <el-radio-group  v-model="userAnwser" @change="optionSelected">
                                <el-radio-button v-for="(opt,idx) in sharedState.question.options" :label="idx" :key="idx">{{opt}}</el-radio-button>
                            </el-radio-group>
                        </div>
                    </el-card>
                </el-row>
                <el-row class="content-grid">
                    
                </el-row>
            </el-col>
        </el-row>
        <BottomNav :idx="11"></BottomNav>
    </div>
</template>
<script>
import BottomNav from '../components/BottomNav';
import Store from '../store'

export default {
    components:{BottomNav},
    data(){
        return {
            sharedState:Store.state,
            userAnwser:'',
        }
    },
    beforeCreate:function(){

    },
    methods:{
        optionSelected(a){
            if(a===this.sharedState.question.answer){
                console.log("✔")
            }else{
                console.log("×")
            }
        },
        goback(){
            this.$router.push({path:'/sub1'})
        }
    }
}
</script>
<style scoped>
.main-grid {
    margin-top: 5px;
}
.content-grid {
    margin-top: 5px;
}
.nav-btn {
    width: 80%;
}
.subtitle {
    margin-top: 10px;
    margin-bottom: 10px;
    float: left;
}
.box-card {
    width: 100%;
}
.question-body{
    text-align:left;
    margin-bottom: 5px;
}
.item {
    text-align: left;
}

</style>