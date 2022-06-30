<template>
     <TabBar>
    <tab-baritem path="/home" activeColor="rgb(233, 120, 139)">
       <img slot="item-icon" src="@/assets/img/tabbar/home.png" >
       <img slot="item-icon-active" src="@/assets/img/tabbar/home1.png" >
     <div slot="item-text"> 首页</div>
    </tab-baritem >

    <tab-baritem path="/category" activeColor="rgb(233, 120, 139)">
       <img slot="item-icon" src="@/assets/img/tabbar/fl.png" >
       <img  slot="item-icon-active" src="@/assets/img/tabbar/fl1.png">
     <div slot="item-text"> 分类</div>
    </tab-baritem>

    <tab-baritem path="/cart" activeColor="rgb(233, 120, 139)">
       <img slot="item-icon" src="@/assets/img/tabbar/shop.png" >
       <img  slot="item-icon-active" src="@/assets/img/tabbar/shop1.png">
     <div slot="item-text"> 购物</div>
    </tab-baritem>

    <tab-baritem path="/profile" activeColor="rgb(233, 120, 139)">
       <img  slot="item-icon" src="@/assets/img/tabbar/my.png">
       <img  slot="item-icon-active" src="@/assets/img/tabbar/my1.png">
     <div slot="item-text"> 我的</div>
    </tab-baritem>
 </TabBar>
</template>
<script>
import TabBaritem from "./tabbar/TabBaritem";
import TabBar from "./tabbar/TabBar";
export default {
    name:"maintabbar",
    components:{
        TabBaritem,
        TabBar
    }
}
</script>
<style scoped>

</style>