<template>
  <div class="dp-login-page" :style="{ backgroundImage: 'url(' + bgImg + ')' }">
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
      <el-form
        ref="loginForm"
        :model="loginForm"
        :rules="loginRules"
        class="login-form"
      >
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
        <el-form-item style="width: 100%; height: 48px; margin-bottom: 16px">
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
import bgImg from '@/assets/images/login-page/login-background.jpg'
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
      bgImg,
      loginForm: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [
          { required: true, trigger: 'blur', message: '请输入您的账号' }
        ],
        password: [
          { required: true, trigger: 'blur', message: '请输入您的密码' }
        ]
      },
      loading: false
    }
  },
  methods: {
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          const sha512 = require('js-sha512').sha512
          const data = {
            username: this.loginForm.username,
            password: this.loginForm.password
          }

          if (this.pwdEncrypt) {
            data.password = sha512(data.password)
          }

          this.$emit('submit', data)
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.dp-login-page {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 100%;
  // background-image: url('');
  background-size: cover;

  .login-logo {
    display: flex;
    align-items: center;
    height: 88px;
    padding: 20px 0;
    margin-left: 1.46%;
    img {
      width: 26px;
    }
    span {
      padding-left: 10px;
      font-family: PingFangSC-Semibold;
      font-size: 20px;
      color: #fff;
      font-weight: 600;
    }
  }
  .login-middle {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-self: center;
    align-items: center;
    width: 76.65%;
    margin-left: 8px;
    .intro {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      img {
        width: 52px;
        // margin-left: -20px;
        margin-bottom: 34px;
      }
      p {
        margin-bottom: 10px;
        font-family: PingFangSC-Regular;
        font-size: 18px;
        color: #fff;
        font-weight: 400;
      }
      .title {
        font-family: PingFangSC-Semibold;
        font-size: 40px;
        color: #fff;
        font-weight: 600;
      }
      .triangle {
        margin-top: 30px;
        // @include triangle-top-right(16px);
        // @include triangle(16px, 16px, #fff, topRight)
      }
    }
  }

  .login-form {
    background: rgba(255, 255, 255, 0.24);
    box-shadow: 0px 0px 38px 0px rgba(22, 42, 46, 0.14);
    border-radius: 8px;
    width: 380px;
    padding: 30px;
    .title {
      margin: 0px auto 30px auto;
      text-align: center;
      color: #fff;
      font-size: 28px;
      font-weight: 600;
    }
    .el-form-item {
      margin-bottom: 24px;
    }
    .el-input {
      height: 36px;
      font-size: 14px;
      input {
        height: 36px;
      }
    }
    // .input-icon {
    //   height: 39px;
    //   width: 14px;
    //   margin-left: 2px;
    // }
    .login-code {
      width: 33%;
      height: 36px;
      float: right;
      img {
        float: right;
        cursor: pointer;
        vertical-align: middle;
      }
    }
    .login-code-img {
      height: 100%;
      border-radius: 6px;
    }
    .login-btn-login {
      width: 100%;
      height: 48px;
      background-image: linear-gradient(270deg, #0ccaf0 0%, #01abe5 100%);
      border: none;
      font-family: PingFangSC-Semibold;
      font-size: 20px;
      color: #fff;
      font-weight: 600;
      text-align: center;
    }
    .login-remember-pwd {
      margin: 0;
      color: #fff;
      ::v-deep .el-checkbox__inner {
        width: 12px;
        height: 12px;
        background-color: transparent;
        border-color: #e7e7e7;
      }
      ::v-deep .el-checkbox__label {
        font-size: 12px;
      }
      ::v-deep .el-checkbox__input.is-checked + .el-checkbox__label {
        color: #fff;
        font-weight: bold;
      }
    }
  }
  .login-tip {
    font-size: 13px;
    text-align: center;
    color: #bfbfbf;
  }
  .login-footer {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 108px;
    padding-bottom: 20px;
    line-height: 12px;
    // position: fixed;
    // bottom: 0;
    width: 100%;
    text-align: center;
    font-family: PingFangSC-Regular;
    color: #fff;
    font-size: 12px;
    letter-spacing: 1px;
  }

  @media (max-width: 1200px) {
    .login-middle {
      .intro {
        .title {
          font-size: 36px;
        }
      }
    }
  }
  @media (max-width: 768px) {
    .login-middle {
      justify-content: center;
      margin-left: 0;
      .intro {
        display: none;
      }
    }
  }
  @media (max-width: 1024px) {
    .login-middle {
      // width: 80%;
      .intro {
        img {
          width: 44px;
          margin-bottom: 28px;
        }
        p {
          font-size: 14px;
        }
        .title {
          font-size: 28px;
        }
        .triangle {
          margin-top: 26px;
          // @include triangle(12px, 12px, #fff, topRight)
        }
      }
    }
  }
}
</style>
