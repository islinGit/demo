<template>
  <div class="first-app" id="app">
    {{msg}}
    <Comfirm @message="getMessage" test="尝试"></Comfirm>
    <p><router-link to="/Second">去第二个界面</router-link></p>
    <el-button @click="visible = true">Button</el-button>
    <el-dialog :visible.sync="visible" title="Hello world">
      <p>Try Element</p>
    </el-dialog>
  </div>
</template>

<script>
import Comfirm from './sub/Comfirm'
export default {
  name: 'First',
  components: {
    Comfirm
  },
  data () {
    return {
      msg: 'Welcome to Vue',
      visible: false
    }
  },
  methods: {
    getMessage (val) {
      alert(val)
    }
  }
}
</script>

<style scoped>

</style>
