<template>
  <div>
    <!-- 搜索框 star -->
    <div class="weui-search-bar" id="searchBar">
      <form class="weui-search-bar__form">
        <div class="weui-search-bar__box">
          <i class="weui-icon-search"></i>
          <input type="search" class="weui-search-bar__input" id="searchInput" placeholder="搜索" required="">
          <a href="javascript:" class="weui-icon-clear" id="searchClear"></a>
        </div>
        <label class="weui-search-bar__label" id="searchText">
          <i class="weui-icon-search"></i>
          <span>搜索</span>
        </label>
      </form>
      <a href="javascript:" class="weui-search-bar__cancel-btn" id="searchCancel">取消</a>
    </div>
    <!-- 搜索框 end -->
    <!-- videoList star -->
    <div class="weui-panel weui-panel_access">
      <div class="weui-panel__hd">自然传奇</div>
      <div class="weui-panel__bd">
        <router-link to="/videoList/classifyList/play" class="weui-media-box weui-media-box_appmsg">
          <div class="weui-media-box__bd">
            <h4 class="weui-media-box__title">自然传奇</h4>
            <p class="weui-media-box__desc">
              <span>819观看</span>
              <span>2018-12-18</span>
            </p>
          </div>
          <div class="weui-media-box__hd">
            <img class="weui-media-box__thumb" src="../../../static/img/大自然.jpg" alt="">
          </div>
        </router-link>
        <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
          <div class="weui-media-box__bd">
            <h4 class="weui-media-box__title">自然传奇</h4>
            <p class="weui-media-box__desc">
              <span>819观看</span>
              <span>2018-12-18</span>
            </p>
          </div>
          <div class="weui-media-box__hd">
            <img class="weui-media-box__thumb" src="../../../static/img/大自然.jpg" alt="">
          </div>
        </a>
      </div>
      <!-- <div class="weui-panel__ft">
        <a href="javascript:void(0);" class="weui-cell weui-cell_access weui-cell_link">
          <div class="weui-cell__bd">查看更多</div>
          <span class="weui-cell__ft"></span>
        </a>
      </div> -->
    </div>
    <!-- videoList end -->
  </div>
</template>
<style>
  .weui-media-box_appmsg .weui-media-box__thumb{
    height: 100%;
  }
  .weui-media-box_appmsg .weui-media-box__bd{
    padding-right: 10px;
  }
  .weui-media-box_appmsg .weui-media-box__hd{
    margin-right: 0;
  }
  .weui-panel__hd{
    font-size: 1.125rem;
    font-weight: 600;
    color: black;
  }
  .weui-media-box__desc{
    height: 20px;
    line-height: 20px;
    display: flex;
    justify-content: space-between;
  }
  h4{
    font-size: .875rem !important;
  }
</style>
