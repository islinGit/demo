<template>
  <div id="login">
    <div class="login-wrap">
      <ul class="menu-tab">
        <li class="current" v-for="menu in menutab" :key="menu.id">{{menu.text}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
// Vue 数据驱动视图渲染
export default {
  name: 'OnePlay',
  data () {
    return {
      menutab: [
        { text: '登录' },
        { text: '注册' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  #login {
    height: 100vh;
    background-color: #344a5f;
  }
  .login-wrap {
    width: 330px;
    margin: auto;         //居中
  }
  .menu-tab {
    text-align: center;
    li {
      display: inline-block;
      width: 88px;
      line-height: 36px;
      font-size: 14px;
      color: #ffffff;
      border-radius: 2px;   //设置框圆边
      cursor: pointer;      //设置鼠标移上去显示小手
    }
    .current {
      background-color: rgba(0,0,0,1);
    }
  }
</style>
