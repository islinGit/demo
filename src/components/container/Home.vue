<template>
  <div class="homeBox">
    <el-container>
      <el-header height="160px">{{msg}}</el-header>
      <el-container>
        <asideContainer></asideContainer>
        <mainContainer v-bind:products='tableData'></mainContainer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import asideContainer from './asideContainer.vue'
import mainContainer from './mainContainer.vue'
export default {
  name: 'Home',
  components: {
    asideContainer,
    mainContainer
  },
  data () {
    // eslint-disable-next-line no-unused-vars
    const item = {
      date: '2020-05-27',
      name: '刘美玲',
      address: '荔城区沥青中学'

    }
    return {
      tableData: Array(20).fill(item),
      msg: '头部导航栏'
    }
  }
}
</script>

<style lang='less' scoped>
  html,
  body,
  .homeBox,
  .el-container {
    /*设置几个组件内间距的间距*/
    padding-top: 5px;
    /*设置几个组件外间距的间距*/
    margin: 0px;
    /*统一设置高度为100%*/
    height: 920px;
  }

  .el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
</style>
