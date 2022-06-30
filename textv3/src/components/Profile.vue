<template>
    <div>
        <h2>我是profile</h2>
        <!-- route：代表当前路由信息对象，可以获取到当前路由的信息参数 
        router：代表路由实例的对象，包含了路由的跳转方法，钩子函数等 -->
        <h2>{{$route.query.name}}</h2>
    </div>
</template>
<script>
export default {
    name:"Profile",
    created() {
        console.log('+++')
    },
    destroyed() {
        console.log('---')
    },
}
</script>
<style scoped>

</style>