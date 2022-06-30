<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
  // 组件内守卫
  beforeRouteEnter:((to, from, next)=> {
    // 离开当前组件
    // console.log(this);//undefined
     // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    console.log('----');
    next();
  }),
}
</script>