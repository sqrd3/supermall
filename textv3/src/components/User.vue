<template>
    <div>
        <h2>我是用户界面</h2>
        <p>用户相关信息</p>
        <!-- 动态路由 -->
        <h2>{{$route.params.userID}}</h2>
    </div>
</template>
<script>
export default {
    name:"User",
    computed:{
        // userID(){
        //     return this.$route.params.userID
        // }
    }
}
</script>
<style scoped>

</style>
