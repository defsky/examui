<template>
    <div>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>接口返回结果</span>
            <el-button style="float: right; padding: 3px 0" type="text" @click="test">获取数据</el-button>
          </div>
          <div class="text item">
            {{info}}
          </div>
        </el-card>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      info:''
    }
  },
  mounted(){
      
  },
  methods:{
      test:function(){
          this.axios.get('/exam/1',{params:{mode:'random'}}).then(function(res){
            console.log(res.data)
          })
          this.axios.get('/exam/2').then(function(res){
            console.log(res.data)
          })
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>