<template>
    <div id="login">
      <div class="login-wrap">
        <ul class="menu-tab">
          <li :class="{'current':isactive}" v-for="item in menutab" :key="item.id">{{item.text}}</li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  // 数据驱动视图渲染
  name: 'login',
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
  background-color: cadetblue;
}
.login-wrap {
  width: 300px;
  margin: auto;

 }
 .menu-tab {
   text-align: center;
   li {
     display: inline-block;
     width: 88px;
     line-height: 36px;       //行高
     font-size: 14px;
     color: #ffffff;
     border-radius: 2px;      //设置圆边
     cursor: pointer;         //设置小手
   }
   .current {
     background-color: rgba(0,0,0,.1);
   }
 }
</style>
