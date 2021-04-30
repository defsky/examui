<template>
    <div>
        <el-page-header @back="goback" content="初级会计经济法">
        </el-page-header>

        <el-row class="main-grid">
            <el-col>
                <el-row class="content-grid">
                    <el-col>
                        <div class="subtitle">
                            多项选择题：
                        </div>
                    </el-col>
                </el-row>
                <el-row class="content-grid">
                    <el-card class="box-card">
                        <div slot="header" class="question-body">
                            <span>{{this.seq + '、' + question.description}}</span>
                        </div>
                        <div class="text item">
                            <el-checkbox-group v-model="userAnwser">
                            <el-row v-for="(opt,idx) in question.options" :key="idx">
                                <el-col>
                                <el-checkbox-button :label="idx" ><p v-html="idx + '、' + opt"></p></el-checkbox-button>
                                </el-col>
                            </el-row>
                            </el-checkbox-group>
                        </div>
                        <el-button class="confirm-btn" type="primary" :disabled="completed" @click="confirmA">提交答案</el-button>
                    </el-card>
                </el-row>
                <el-row v-if="completed" class="content-grid-anwser">
                    <el-card class="box-card">
                        <div slot="header" class="question-body">
                            <span>正确答案：{{question.answer}}</span>
                        </div>
                        <div class="text item" v-html="question.solution"></div>
                    </el-card>
                </el-row>
            </el-col>
        </el-row>
        <!-- <BottomNav :idx="11"></BottomNav> -->
        <div class="footer">
            <div v-for='(item,index) of items' :class='[item.cls,{on:index === idx}]' @click="getNextQuestion">
                <p :class="['colorChange',{on:index===idx}]" >{{item.name}}</p>
            </div>
        </div>
	</div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            idx:1,
            items:[{
					cls:"home",
					name:"下一题",
					push:"/home",
					icon:"../static/home.png",
					iconSelect:"../static/home_select.png",
			}],
            question:{description:''},
            userAnwser:[],
            completed:false,
            seq:0
        }
    },
    beforeMount:function(){
        let that = this
        this.axios.get('/exam/2/2').then(function(res){
                that.question = res.data
                that.question.options=JSON.parse(res.data.options)
                that.userAnwser=[]
                that.seq += 1
        })
    },
    methods:{
        getNextQuestion(){
            this.userAnwser=[]
            this.completed=false
            let that = this
            this.axios.get('/exam/2/2').then(function(res){
                that.question = res.data
                that.question.options=JSON.parse(res.data.options)
                that.seq += 1
            });
        },
        confirmA(a){
            this.completed=true
        },
        goback(){
            this.$router.push({path:'/sub2'})
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
.item >>> .el-checkbox-button__inner {
    border: none!important;
    white-space: pre-line;
    padding-top: 0;
    padding-bottom: 0;
    padding-right: 0;
}
.el-radio-group>div:last-child {
    margin-bottom: 50px;
}
.item p {
    text-align: left;
}
.confirm-btn {
    margin-top: 30px;
}
.content-grid-anwser {
    margin-bottom: 50px;
}

.footer{
    display: flex;
    position: fixed;
    left: 0;
    bottom: 0;
    box-sizing: border-box;
    height: 3rem;
    background:rgb(64,158,255);
    width: 100%;
}
.footer div{
    flex: 1;
    font-size: 16px;
}
.footer div img{
    width: 30px;
    height: 15px;
}
.footer div p{
    color:black;
    font-weight: bold;
}
.footer .on{
    color: red;
}
</style>