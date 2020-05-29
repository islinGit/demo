<template>
  <div class="Main">
    <el-main>
      <el-table :data='tableData'>
        <el-table-column prop='date' label="日期" width="544px">
        </el-table-column>
        <el-table-column prop='name' label="姓名" width="543px">
        </el-table-column>
        <el-table-column prop='address' label="地址" width="543px">
        </el-table-column>
      </el-table>
    </el-main>
  </div>
</template>

<script>
export default {
  name: 'mainContainer',
  props: ['tableData']
}
</script>

<style scoped>

</style>
