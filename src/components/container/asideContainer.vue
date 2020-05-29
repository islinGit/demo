<template>
    <div class="Aside">
        <el-aside>
          <el-menu :default-openeds="['1', '3']">
            <el-submenu index="2">
              <template slot="title"><i class="el-icon-menu"></i>导航二</template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="2-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="2-4">
                <template slot="title">选项4</template>
                <el-menu-item index="2-4-1">选项4-1</el-menu-item>
              </el-submenu>
              <el-submenu index="2-5">
                <template slot="title">选项5</template>
                <el-menu-item index="2-5-1">选项5-1</el-menu-item>
              </el-submenu>
              <el-submenu index="2-6">
                <template slot="title">选项6</template>
                <el-menu-item index="2-6-1">选项6-1</el-menu-item>
              </el-submenu>
            </el-submenu>
          </el-menu>
        </el-aside>
    </div>
</template>

<script>
export default {
  name: 'asideContainer'
}
</script>

<style lang="less" scoped>

</style>
