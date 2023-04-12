<template>
  <h3>基础布局</h3>
  <p>使用单一分栏创建基础的栅格布局。</p>
  <el-row>
    <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
  </el-row>
  <el-row>
    <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
    <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
  </el-row>
  <el-row>
    <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
    <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
    <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
  </el-row>
  <el-row>
    <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
    <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
    <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
    <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
  </el-row>
  <el-row>
    <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
    <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
    <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
    <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
    <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
    <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
  </el-row>
  <br />

  <h3>分栏间隔</h3>
  <p>分栏之间存在间隔。</p>
  <el-row :gutter="20">
    <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
    <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
    <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
    <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  </el-row>
  <br />

  <h3>分栏偏移</h3>
  <p>支持偏移指定的栏数。</p>
  <el-row :gutter="20">
    <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
    <el-col :span="6" :offset="6">
      <div class="grid-content bg-purple"></div>
    </el-col>
  </el-row>
  <el-row :gutter="20">
    <el-col :span="6" :offset="6">
      <div class="grid-content bg-purple"></div>
    </el-col>
    <el-col :span="6" :offset="6">
      <div class="grid-content bg-purple"></div>
    </el-col>
  </el-row>
  <el-row :gutter="20">
    <el-col :span="12" :offset="6">
      <div class="grid-content bg-purple"></div>
    </el-col>
  </el-row>
  <el-row :gutter="20">
    <el-col :span="6" :offset="6" :push="6">
      <div class="grid-content bg-purple"></div>
    </el-col>
  </el-row>
  <el-row :gutter="20">
    <el-col :span="6" :offset="6" :pull="6">
      <div class="grid-content bg-purple"></div>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="0">
      <div class="grid-content bg-purple"></div>
    </el-col>
  </el-row>
  <br />

  <h3>对齐方式</h3>
  <p>通过 flex 布局来对分栏进行灵活的对齐。</p>
  <el-row type="flex" class="row-bg">
    <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
    <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
    <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  </el-row>
  <el-row type="flex" class="row-bg" justify="center">
    <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
    <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
    <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  </el-row>
  <el-row type="flex" class="row-bg" justify="end">
    <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
    <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
    <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  </el-row>
  <el-row type="flex" class="row-bg" justify="space-between">
    <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
    <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
    <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  </el-row>
  <el-row type="flex" class="row-bg" justify="space-around">
    <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
    <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
    <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  </el-row>
  <el-row type="flex" class="row-bg" justify="space-around" align="top">
    <el-col :span="6">
      <div class="grid-content bg-purple" style="height: 100px"></div>
    </el-col>
    <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
    <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  </el-row>
  <el-row type="flex" class="row-bg" justify="space-around" align="middle">
    <el-col :span="6">
      <div class="grid-content bg-purple" style="height: 100px"></div>
    </el-col>
    <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
    <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  </el-row>
  <el-row type="flex" class="row-bg" justify="space-around" align="bottom">
    <el-col :span="6">
      <div class="grid-content bg-purple" style="height: 100px"></div>
    </el-col>
    <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
    <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  </el-row>
  <br />

  <h3>响应式布局</h3>
  <p>
    参照了 Bootstrap 的 响应式设计，预设了五个响应尺寸：xs、sm、md、lg 和 xl。
  </p>
  <el-row :gutter="10">
    <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
      <div class="grid-content bg-purple"></div>
    </el-col>
    <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
      <div class="grid-content bg-purple-light"></div>
    </el-col>
    <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
      <div class="grid-content bg-purple"></div>
    </el-col>
    <el-col :xs="8" :sm="{ span: 6, offset: 3 }" :md="4" :lg="3" :xl="1">
      <div class="grid-content bg-purple-light"></div>
    </el-col>
  </el-row>
  <br />

  <h3>自定义元素标签</h3>
  <el-row :gutter="10" tag="li">
    <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
      <div class="grid-content bg-purple"></div>
    </el-col>
  </el-row>
</template>

<script>
export default {};
</script>

<style lang="scss">
#app {
  padding: 40px;
}

.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
