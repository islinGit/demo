<template>
    <div id="login">
      <div class="login-wrap">
        <ul class="menu-tab">
          <li :class="{'current': item.isactive}" v-for="item in menuTab" :key="item.id" @click="toggleMenu(item)">{{item.text}}</li>
        </ul>
        <!--表单-->
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm"  class="login-from" size="small ">
          <el-form-item prop="username" class="item-from">
            <label>用户名</label>
            <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item  prop="password" class="item-from">
            <label>密码</label>
            <el-input type="test" v-model="ruleForm.password" autocomplete="off" minlength="6" maxlength="20"></el-input>
          </el-form-item>
          <el-form-item  prop="passwords" class="item-from" v-if="loginmode ==='register'" >
            <label>重复密码</label>
            <el-input type="test" v-model="ruleForm.passwords" autocomplete="off" minlength="6" maxlength="20"></el-input>
          </el-form-item>
          <el-form-item  prop="code" class="item-from">
            <label>验证码</label>
            <el-row :gutter="10" >
              <el-col :span="15">
                <el-input v-model.number="ruleForm.code"></el-input>
              </el-col>
              <el-col :span="9" >
                <el-button type="success" class="block">获取验证码</el-button>
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item>
            <el-button type="danger" @click="submitForm('ruleForm')" class="login-tj block">提交</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
</template>
<script>
import { stripscript, validateEmail, validatepw, validatcd } from '../utils/validate'
export default {
  // 数据驱动视图渲染
  name: 'login',
  data () {
    // 这里验证用户名
    var validateUsername = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'))
      } else if (validateEmail(value)) {
        callback(new Error('用户名格式错误'))
      } else {
        callback() // ture
      }
    }
    // 验证密码
    var validatePassword = (rule, value, callback) => {
      // 过滤数据中包含得特殊字符
      this.ruleForm.password = stripscript(value)
      value = this.ruleForm.password
      if (value === '') {
        callback(new Error('请输入密码'))
      } else if (validatepw(value)) {
        callback(new Error('请输入六位数字+字母'))
      } else {
        callback()
      }
    }
    // 验证重置密码
    var validatePasswords = (rule, value, callback) => {
      // 过滤数据中包含得特殊字符
      this.ruleForm.passwords = stripscript(value)
      value = this.ruleForm.passwords
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (validatepw(value)) {
        callback(new Error('请输入六位数字+字母'))
      }else if(value !== this.ruleForm.password) {
        callback(new Error('输入的密码不相同'))
      }else {
        callback()
      }
    }
    // 校验验证码
    // eslint-disable-next-line no-unused-vars
    var validatecode = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入验证码'))
      } else if (validatcd(value)) {
        callback(new Error('验证码错误'))
      } else {
        callback()
      }
    }
    return {
      menuTab: [
        { text: '登录', isactive: true, type: 'login' },
        { text: '注册', isactive: false, type: 'register' }
      ],
      // 注册显示
      loginmode: '',
      // 表单数据
      ruleForm: {
        username: '',
        password: '',
        passwords: '',
        code: ''
      },
      rules: {
        username: [
          { validator: validateUsername, trigger: 'blur' }
        ],
        password: [
          { validator: validatePassword, trigger: 'blur' }
        ],
        passwords: [
          { validator: validatePasswords, trigger: 'blur' }
        ],
        code: [
          { validator: validatecode, trigger: 'blur' }
        ]
      }
    }
  },
  // 挂载完成后自动执行
  mounted () {

  },
  methods: {
    // Vue 数据驱动视图渲染
    toggleMenu (data) {
      this.menuTab.forEach(elem => {
        elem.isactive = false
      })
      // 高光
      data.isactive = true
      // 切换登录注册
      this.loginmode = data.type
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
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
  .login-from {
    margin-top: 29px;
   label {
     display: block;
     font-size: 14px;
     color: #ffffff;
     margin-bottom: 3px;
   }
    .item-from {
      margin-bottom: 13px;
    }
    .block {
      display: block;
      width: 100%;
    }
    .login-tj {
      margin-top: 19px;
    }
  }
</style>
