<template>
    <div class="tab-bar-item" @click="itemclick">
      <div v-if="!isActive"><slot name="item-icon"></slot></div>
     <div v-else> <slot name="item-icon-active"></slot></div>
     <div :style="activeStyle"> <slot name="item-text"></slot></div>
    </div>
</template>
<script>
export default {
   name: 'TabBaritem',
   props:{
    path:String,
    activeColor:{
      path:String, 
      type:String,
      default:'rgb(233, 120, 139)'

    }
   },
   data() {
    return {
      // isActive:true
    }
   },
   computed:{
    isActive(){
      // return this.$route.path.indexOf(this.path)
      return this.$route.path==this.path
    },
    activeStyle(){
      return this.isActive?{color:this.activeColor}:{}
    }
     },
   methods: {

    itemclick(){
     this.$router.replace(this.path).catch(err => err)
    }
   },
}
</script>
<style scoped>
.tab-bar-item{
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img{
    height: 24px;
    width: 24px;
    margin-top: 3px;
    /* vertical-align: middle; */
    /* margin-bottom: 2px; */
}
/* .active{
  color: rgb(233, 120, 139);
} */
</style>