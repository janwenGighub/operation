<template>
  <div id="app">
    <router-view/>
    <!-- tabbar star -->
    <div class="weui-tabbar">
        <router-link to="/" class="weui-tabbar__item weui-bar__item_on">
            <span style="display: inline-block;position: relative;">
                <!-- <span class="weui-badge" style="position: absolute;top: -2px;right: -13px;">8</span> -->
            </span>
            <p class="weui-tabbar__label">操作指南</p>
        </router-link>
        <a to="" class="weui-tabbar__item">
            <p class="weui-tabbar__label">视频</p>
        </a>
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
@import '../static/css/reset.css';
.weui-tabbar{
  position: fixed;
}
.weui-tabbar__item{
  padding: 0;
}
.weui-tabbar__label{
  height: 57px;
  line-height: 57px;
  font-size: .875rem;
  color: black;
  font-weight: bolder;
}
</style>
