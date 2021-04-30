<template>
    <div>
        <el-page-header @back="goback" content="初级会计经济法">
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
                            <span>{{this.seq + '、' + question.description}}</span>
                        </div>
                        <div class="text item">
                            <el-radio-group v-model="userAnwser" @change="optionSelected">
                            <el-row v-for="(opt,idx) in question.options" :key="idx">
                                <el-col>
                                <el-radio-button :label="idx" ><p v-html="idx + '、' + opt"></p></el-radio-button>
                                </el-col>
                            </el-row>
                            </el-radio-group>
                        </div>
                    </el-card>
                </el-row>
                <el-row v-if="completed" class="content-grid">
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
            userAnwser:'',
            completed:false,
            seq:0
        }
    },
    beforeMount:function(){
        let that = this
        this.axios.get('/exam/2/1').then(function(res){
                that.question = res.data
                that.question.options=JSON.parse(res.data.options)
                that.userAnwser=''
                that.seq += 1
        })
    },
    methods:{
        getNextQuestion(){
            this.userAnwser=''
            this.completed=false
            let that = this
            this.axios.get('/exam/2/1').then(function(res){
                that.question = res.data
                that.question.options=JSON.parse(res.data.options)
                that.seq += 1
            });
        },
        optionSelected(a){
            if(a===this.question.answer){
                this.completed=true
            }else{
                this.completed=false
            }
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
.item >>> .el-radio-button__inner {
    border: none;
    white-space: pre-line;
    padding-top: 0;
    padding-bottom: 0;
    padding-right: 0;
}
.el-radio-group>div:last-child {
    margin-bottom: 30px;
}
.item p {
    text-align: left;
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