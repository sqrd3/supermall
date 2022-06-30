<template>
    <div id="tab-bar">
    <slot></slot>
    </div>
</template>
<script>

export default {
    name:"TabBar"
}
</script>
<style>
@import "../../assets/css/base.css";
#tab-bar{
  display: flex;
  background-color: #d0cfcf;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0px -4px 1px rgba(100, 100, 100, 0.2);
}

</style>