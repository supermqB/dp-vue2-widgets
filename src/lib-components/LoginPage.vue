<template>
  <div class="dp-login-page">
    <!-- header -->
    <header class="login-logo">
      <!-- <img src="./assets/logo.svg" alt="联仁健康"> -->
      <span>{{ appTitle }}</span>
    </header>
    <!-- main-show -->
    <section class="login-middle">
      <!-- introduction -->
      <article class="intro">
        <!-- <img src="./assets/logo.svg" alt="联仁健康"> -->
        <p class="title">让数据更简便，让管理更高效</p>
        <p>健康医疗数字化服务运营商</p>
        <i class="triangle" />
      </article>
      <!-- form -->
      <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form">
        <h3 class="title">用户登录</h3>
        <el-form-item prop="username">
          <el-input
          size="medium"
            v-model="loginForm.username"
            type="text"
            auto-complete="off"
            placeholder="请输入用户名"
          >
            <!-- <svg-icon slot="prefix" icon-class="user" class="el-input__icon input-icon" /> -->
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
          size="medium"
            v-model="loginForm.password"
            type="password"
            auto-complete="off"
            placeholder="请输入密码"
            @keyup.enter.native="handleLogin"
          >
            <!-- <svg-icon slot="prefix" icon-class="password" class="el-input__icon input-icon" /> -->
          </el-input>
        </el-form-item>
        <el-form-item style="width:100%;height: 48px;margin-bottom: 16px;">
          <el-button
            :loading="loading"
            size="medium"
            class="login-btn-login"
            type="primary"
            @click.native.prevent="handleLogin"
          >
            <span v-if="!loading">登 录</span>
            <span v-else>登 录 中...</span>
          </el-button>
        </el-form-item>
        <!-- <el-checkbox v-model="loginForm.rememberMe" class="login-remember-pwd">记住密码</el-checkbox> -->
      </el-form>

    </section>
    <!--  footer  -->
    <footer class="login-footer">
      <span>Copyright © 2018-2022 lianren.vip All Rights Reserved</span>
    </footer>
  </div>

</template>

<script>
export default {
  name: 'DpLoginPage',
  props: {
    appTitle: {
      type: String,
      default: '系统名称'
    },
    pwdEncrypt: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      loginForm: {
        username: '',
        password: '',
      },
      loginRules: {
        username: [
          { required: true, trigger: 'blur', message: '请输入您的账号' }
        ],
        password: [
          { required: true, trigger: 'blur', message: '请输入您的密码' }
        ],
      },
      loading: false,
    }
  },
  methods: {
    handleLogin(){
      this.$refs.loginForm.validate((valid) => {
        if(valid){
          const sha512 = require('js-sha512').sha512
          const data = {
            username: this.loginForm.username,
            password: this.loginForm.password
          }

          if(this.pwdEncrypt) {
            data.password = sha512(data.password)
          }

          this.$emit('submit', data)
        }
      })
      
    }
  },
}
</script>
