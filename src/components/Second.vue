<template>
  <div class="second-app">
    {{msg}}
    <Comfirm test="尝试" @message="getMessage"></Comfirm>
    <p>
      <router-link to="/First">去第一个界面</router-link>
    </p>
  </div>
</template>

<script>
import Comfirm from './sub/Comfirm'

export default {
  name: 'Second',
  components: {
    Comfirm
  },
  data () {
    return {
      msg: 'Welcome to Vue'
    }
  },
  methods: {
    getMessage (val) {
      alert(val)
    }
  }
}
</script>

<style lang="less" scoped>
  .second-app{
    font-size: 30px;
  }
</style>
