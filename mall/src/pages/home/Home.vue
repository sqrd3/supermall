<template>
    <div id="home">
        <nav-bar class="home-nav">
            <div slot="center">购物街</div>
        </nav-bar>
    </div>
</template>
<script>
import NavBar from '@/components/common/navbar/NavBar.vue'
import { gethomemultidata } from "../../netwok/home";

export default {
    name: "Home",
    components:{
        NavBar
    },
    data() {
        return {
            banners:[],
            recommends:[]
        }
    },
    // 组件创建好就发送数据请求
    created(){
        // 1.请求多个数据
        gethomemultidata().then(res=>{
            this.banners=res.data.banner.list;
            this.recomments=res.data.recommend.list;
        })
    }
}
</script>
<style scoped>
.home-nav{
    background-color: pink;
    color: white;
}
</style>