<template>
  <div id="app">
    <transition mode="out-in">
      <router-view class="box"></router-view>
    </transition>
    <!-- tabbar star -->
    <div class="weui-tabbar">
      <router-link to="/" class="weui-tabbar__item weui-bar__item_on">
        <span style="display: inline-block;position: relative;">
          <!-- <span class="weui-badge" style="position: absolute;top: -2px;right: -13px;">8</span> -->
        </span>
        <p class="weui-tabbar__label">操作指南</p>
      </router-link>
      <router-link to="/videoList" class="weui-tabbar__item">
        <p class="weui-tabbar__label">视频</p>
      </router-link>
    </div>
    <!-- tabbar end -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import "../static/css/reset.css";
@import "../static/css/weui.css";
@import "../static/css/common.css";
.box{
  padding-bottom: 57px;;
}
.weui-tabbar {
  position: fixed;
}
.weui-tabbar__item {
  padding: 0;
}
.weui-tabbar__label {
  height: 57px;
  line-height: 57px;
  font-size: 0.875rem;
  color: black;
  font-weight: bolder;
}
.v-enter,
.v-leave-to{
  opacity: 0;
}
.v-enter-active,
.v-leave-active{
  transition: opacity .1s ease;
}
</style>
