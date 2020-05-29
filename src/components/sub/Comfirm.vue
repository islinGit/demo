<template>
  <div class="comfirm-button">
    <button @click="getButton">{{test || '确定'}}</button>
  </div>
</template>

<script>
export default {
  name: 'comfirm-button',
  props: ['test'],
  data () {
    return {
      msg: true
    }
  },
  methods: {
    getButton () {
      this.$emit('message', this.msg) // 向父组件发送数据
    }
  }
}
</script>

<style scoped>

</style>
