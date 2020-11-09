<template>
  <div class="homeBox">
    <el-container>
      <el-header  class="header" height="160px">{{msg}}</el-header>
      <el-container>
        <div class="Rside">
          <el-aside>
            <el-menu :default-openeds="['1', '3']">
              <el-submenu index="1">
                <template slot="title"><i class="el-icon-menu"></i>菜单</template>
                <el-submenu index="1-1">
                  <template slot="title">接口自动化测试</template>
                  <el-menu-item-group>
                    <template slot="title" @click="getTest()">用例</template>
                  </el-menu-item-group>
                </el-submenu>
              </el-submenu>
            </el-menu>
          </el-aside>
        </div>
        <div class="Lside">
          <el-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName">
            <el-table-column prop="date" label="日期" width="529">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="529">
            </el-table-column>
            <el-table-column prop="address" label="地址">
            </el-table-column>
          </el-table>
        </div>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { ref, onMounted, reactive } from '@vue/composition-api'
export default {
  name: 'Home',
  setup (props, context) {
    /**
     * 定义变量
     */
    const msg = ref('头部导航栏')
    const tableData = reactive(
      [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }]
    )
    /**
     * 声明方法
     */
    const getTest = () => {

    }
    const tableRowClassName = ({ row, rowIndex }) => {
      console.log(rowIndex)
      if (rowIndex === 1) {
        return 'warning-row'
      } else if (rowIndex === 3) {
        return 'success-row'
      }
      return ''
    }
    /**
     * 挂载
     */
    onMounted(() => {

    })

    /**
     * 返回数据
     */
    return {
      msg,
      getTest,
      tableRowClassName,
      tableData
    }
  }
}
</script>

<style lang='less' scoped>
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
  .Lside {
    width: 100vw;
    .el-table .warning-row {
      background: red;
    }
    .el-table .success-row {
      background: greenyellow;
    }
  }
</style>
