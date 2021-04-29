
<template>
	<div class="footer">
		<!-- <div v-for='(item,index) of items' :class='[item.cls,{on:index === idx}]' @click="$router.push(item.push)"> -->
        <div v-for='(item,index) of items' :class='[item.cls,{on:index === idx}]' @click="getNextQuestion">
			<!--img :src="index===idx?item.iconSelect:item.icon"-->
			<p :class="['colorChange',{on:index===idx}]" >{{item.name}}</p>
		</div>
 
	</div>
</template>
 
<script>
    import Store from '../store'
	export default{
		props:['idx'],
        methods:{
            getNextQuestion(){
                switch(this.idx){
                    case 11:
                        this.axios.get('/exam/1/1').then(function(res){
                            Store.setQuestion(res.data)
                        })
                    break;
                }

            }
        },
		data(){
			return {
				items:[{
					cls:"home",
					name:"下一题",
					push:"/home",
					icon:"../static/home.png",
					iconSelect:"../static/home_select.png"
				},
				// {
				// 	cls:"shares",
				// 	name:"股票",
				// 	push:"/shares",
				// 	icon:"../static/home.png",
				// 	iconSelect:"../static/home_select.png"
				// },
				// {
				// 	cla:"community",
				// 	name:"社区",
				// 	push:"/community",
				// 	icon:"../static/home.png",
				// 	iconSelect:"../static/home_select.png"
				// },
				// {
				// 	cla:"mine",
				// 	name:"我的",
				// 	push:"/mine",
				// 	icon:"../static/home.png",
				// 	iconSelect:"../static/home_select.png"
				// }
                ]
			}
		}
	} 
 
</script>
<style scoped>
    .footer{
        display: flex;
        position: absolute;
        left: 0;
        bottom: 0;
        box-sizing: border-box;
        height: 3rem;
        background:rgb(64,158,255);
        width: 100%;
    }
    div{
        flex: 1;
        font-size: 16px;
    }
    div img{
        width: 30px;
        height: 15px;
    }
    div p{
        color:black;
        font-weight: bold;
    }
    .on{
        color: red;
    }
</style>