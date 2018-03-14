<template>
  <div>
      <div class="page__bd">
        <!--<a href="javascript:;" class="weui-btn weui-btn_primary">点击展现searchBar</a>-->
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
        <!-- <div class="weui-cells searchbar-result" id="searchResult">
            <div class="weui-cell weui-cell_access">
                <div class="weui-cell__bd weui-cell_primary">
                    <p>实时搜索文本</p>
                </div>
            </div>
        </div> -->
    </div>
      <div class="weui-cells">
            <a class="weui-cell weui-cell_access" href="javascript:;">
                <div class="weui-cell__bd">
                    <p>无法加密通道怎么办？</p>
                </div>
                <div class="weui-cell__ft">
                </div>
            </a>
            <a class="weui-cell weui-cell_access" href="javascript:;">
                <div class="weui-cell__bd">
                    <p>打开安全卡认证失败怎么办？</p>
                </div>
                <div class="weui-cell__ft">
                </div>
            </a>
        </div>
  </div>
</template>
<style>
.weui-search-bar__label{
    top: 3px;
}

.weui-cells{
    margin-top: 0;
}
.weui-cell_access{
    font-size: 1rem;
    color: black;
    font-weight: bolder;
}
</style>

