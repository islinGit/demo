<template>
    <div id="login">
      <div class="login-wrap">
        <ul class="menu-tab">
          <li :class="{'current': item.isactive}" v-for="item in menuTab" :key="item.id" @click="toggleMenu(item)">{{item.text}}</li>
        </ul>
        <!--表单-->
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm"  class="login-from" size="small ">
          <el-form-item prop="pass" class="item-from">
            <label>用户名</label>
            <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item  prop="checkPass" class="item-from">
            <label>密码</label>
            <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item  prop="age" class="item-from">
            <label>验证码</label>
            <el-input v-model.number="ruleForm.age"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="danger" @click="submitForm('ruleForm')" class="block">提交</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
</template>

<script>
export default {
  // 数据驱动视图渲染
  name: 'login',
  data () {
    // eslint-disable-next-line no-unused-vars
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('年龄不能为空'))
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'))
        } else {
          if (value < 18) {
            callback(new Error('必须年满18岁'))
          } else {
            callback()
          }
        }
      }, 1000)
    }
    // eslint-disable-next-line no-unused-vars
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    // eslint-disable-next-line no-unused-vars
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      menuTab: [
        { text: '登录', isactive: true },
        { text: '注册', isactive: false }
      ],
      ruleForm: {
        pass: '',
        checkPass: '',
        age: ''
      },
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        age: [
          { validator: checkAge, trigger: 'blur' }
        ]
      }
    }
  },
  // 挂载完成后自动执行
  mounted () {

  },
  methods: {
    toggleMenu (data) {
      this.menuTab.forEach(elem => {
        elem.isactive = false
      })
      // 高光
      data.isactive = true
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
  }
</style>
