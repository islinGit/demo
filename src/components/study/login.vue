<template>
    <div id="login">
      <div class="login-wrap">
        <ul class="menu-tab">
          <li :class="{'current': item.isactive}" :key="item.id" @click="toggleMenu(item)" v-for="item in menuTab">{{item.text}}</li>
        </ul>
        <!--表单-->
        <el-form :model="ruleForm" :rules="rules" class="login-from" ref="ruleForm"  size="small " status-icon>
          <el-form-item class="item-from" prop="username">
            <label>用户名</label>
            <el-input autocomplete="off" type="text" v-model="ruleForm.username"></el-input>
          </el-form-item>
          <el-form-item  class="item-from" prop="password">
            <label>密码</label>
            <el-input autocomplete="off" maxlength="20" minlength="6" type="test" v-model="ruleForm.password"></el-input>
          </el-form-item>
          <el-form-item  class="item-from" prop="passwords" v-if="modle === 'register'" >
            <label>重复密码</label>
            <el-input autocomplete="off" maxlength="20" minlength="6" type="test" v-model="ruleForm.passwords"></el-input>
          </el-form-item>
          <el-form-item  class="item-from" prop="code">
            <label>验证码</label>
            <el-row :gutter="10" >
              <el-col :span="15">
                <el-input v-model.number="ruleForm.code"></el-input>
              </el-col>
              <el-col :span="9" >
                <el-button class="block" type="success" @click="getcode()">获取验证码</el-button>
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item>
            <el-button @click="submitForm('ruleForm')" class="login-tj block" type="danger">{{submitButton}}</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
</template>
<script>
import { reactive, ref, isRef, onMounted } from '@vue/composition-api'
import { getSms, getUser } from '../api/login'
import { stripscript, validateEmail, validatepw, validatcd } from '../utils/validate'
export default {
  // 数据驱动视图渲染
  name: 'login',
  setup (props, context) {
    /**
     * 声明对象、变量
     * @type {UnwrapRef<({isactive: boolean, text: string, type: string}|{isactive: boolean, text: string, type: string})[]>}
     */
    // 这里验证用户名
    var validateUsername = (rule, value, callback) => {
      console.log(rule)
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
      ruleForm.password = stripscript(value)
      value = ruleForm.password
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
      ruleForm.passwords = stripscript(value)
      value = ruleForm.passwords
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (validatepw(value)) {
        callback(new Error('请输入六位数字+字母'))
      } else if (value !== ruleForm.password) {
        callback(new Error('输入的密码不相同'))
      } else {
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
    // *******************************************************************   数据          **************************************
    // 登录 注册
    const menuTab = reactive([
      { text: '登录', isactive: true, type: 'login', sb: '提交' },
      { text: '注册', isactive: false, type: 'register', sb: '注册' }
    ])
    const submitButton = ref('提交')
    // 注册显示
    const modle = ref('login')
    // 表单绑定数据
    const ruleForm = reactive({
      username: '',
      password: '',
      passwords: '',
      code: ''
    })
    // 表单得验证
    const rules = reactive({
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
    })

    /**
     * 声明函数
     */
    // 页面视图动态渲染
    const toggleMenu = data => {
      menuTab.forEach(elem => {
        elem.isactive = false
      })
      // 高光
      data.isactive = true
      // 切换登录注册
      modle.value = data.type
      submitButton.value = data.sb
    }
    /**
     * 获取验证码
     */
    const getcode = code => {
      getSms({ username: ruleForm.username })
      // getUser()
    }
    // 提交
    const submitForm = formName => {
      context.refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }

    /**
     * 声明生命周期
     */
    // 挂载完成后自动执行
    onMounted(() => {
    })

    /**
     * 返回数据
     */
    return {
      menuTab,
      modle,
      ruleForm,
      rules,
      toggleMenu,
      submitForm,
      getcode,
      submitButton
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
