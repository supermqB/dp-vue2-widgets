<template>
  <div :class="['login-page', !isChrome ? 'login-page--imgbg' : '']">
    <div class="login-page__title">
      <img :src="require('./assets/images/title.png')" alt="title" />
    </div>
    <div class="login-page__bg">
      <CanvasBg v-if="isChrome" />
    </div>
    <div :class="['login-body', isMiniBody ? 'login-body--mini' : '']">
      <div class="login-body__title">
        <img
          :src="require('./assets/images/body-title.png')"
          alt="body-title"
        />
      </div>
      <div class="login-body__form">
        <el-form ref="loginForm" :model="loginForm" :rules="loginRules">
          <el-tabs class="login-form__tab" v-model="loginTab">
            <el-tab-pane label="账户登录" name="account">
              <el-form-item v-if="loginTab === 'account'" prop="username">
                <el-input
                  v-model="loginForm.username"
                  type="text"
                  :maxlength="30"
                  auto-complete="off"
                  placeholder="请输入账号"
                >
                </el-input>
              </el-form-item>
              <el-form-item v-if="loginTab === 'account'" prop="password">
                <el-input
                  v-model="loginForm.password"
                  type="password"
                  auto-complete="off"
                  :maxlength="30"
                  placeholder="请输入密码"
                  @keyup.enter.native="handleLogin"
                >
                </el-input>
              </el-form-item>
              <el-form-item
                v-if="loginTab === 'account' && captchaOnOff"
                prop="code"
              >
                <el-input
                  v-model="loginForm.code"
                  auto-complete="off"
                  :maxlength="6"
                  placeholder="请输入验证码"
                  style="width: 55%"
                  @keyup.enter.native="handleLogin"
                >
                </el-input>
                <div class="login-code">
                  <img :src="codeUrl" class="login-code-img" @click="getCode" />
                </div>
              </el-form-item>
            </el-tab-pane>
          </el-tabs>
          <el-form-item class="login-form__save">
            <el-button
              :loading="loading"
              class="login-btn-login"
              type="primary"
              :disabled="
                !loginForm.username || !loginForm.password || !loginForm.code
                  ? true
                  : false
              "
              @click.native.prevent="handleLogin"
            >
              <span v-if="!loading">登 录</span>
              <span v-else>登 录 中...</span>
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="login-page__company">
      <p>Copyright©2023 Lianren Digital Health All Rights Reserved</p>
    </div>
  </div>
</template>

<script>
import { getCodeImg } from '../../api/auth'
// import CanvasBg from './components/canvas-bg.vue'
import { md5 } from './utils/md5'

const form = {
  username: '',
  password: '',
  code: ''
}

export default {
  name: 'LoginPage',
  props: {
    apis: Object
  },
  // components: { CanvasBg },
  props: {
    redirectUrl: String
  },
  data() {
    return {
      loginTab: 'account',
      isChrome: false,
      isMiniBody: false,
      captchaOnOff: true,
      loginForm: { ...form },
      loading: false,
      loginRules: {
        username: [
          { required: true, trigger: 'blur', message: '请输入您的账号' }
        ],
        password: [
          { required: true, trigger: 'blur', message: '请输入您的密码' }
        ],
        code: [{ required: true, trigger: 'change', message: '请输入验证码' }]
      },
      codeUrl: ''
    }
  },
  created() {
    // 非chrome不展示动画
    // if (navigator.userAgent.indexOf('Chrome') > -1) {
    //   this.isChrome = true
    // }
    // 小屏幕电脑渲染缩小
    if (document.body.clientHeight < 700) {
      this.isMiniBody = true
    }
    this.getCode()
  },
  methods: {
    getCode() {
      // this.apis.getCodeImg().then(res => {
      getCodeImg().then(res => {
        const { captchaOnOff, img, uuid } = res.data
        this.captchaOnOff = captchaOnOff === undefined ? true : captchaOnOff
        if (this.captchaOnOff) {
          this.codeUrl = 'data:image/gif;base64,' + img
          this.loginForm.uuid = uuid
        }
      })
    },
    getParams() {
      const pm = { ...this.loginForm }
      return pm
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store
            .dispatch('auth/login', {
              ...this.loginForm,
              // password: sha512(this.loginForm.password),
              password: md5(`l!anren@d0ctor$2020-${this.loginForm.password}`)
            })
            .then(r => {
              this.loading = false
              if (r && r.success) {
                // console.log({ redirectUrl: this.redirectUrl })
                // this.$router.push({ name: 'overview' })
                window.location.href = this.redirectUrl
                  ? this.redirectUrl
                  : window.location.origin + this.$router.history.base
              } else {
                if (this.captchaOnOff) {
                  this.getCode()
                }
              }
            })
            .catch(err => {
              console.log('登录的错误信息：' + err)
              this.loading = false
              if (this.captchaOnOff) {
                this.getCode()
              }
            })
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.login-page {
  position: relative;
  width: 100%;
  height: 100%;
  .login-page__bg {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
  }
  .login-page__title {
    position: absolute;
    top: 25px;
    left: 25px;
    z-index: 3;
    img {
      display: block;
      width: 260px;
    }
  }
  .login-page__company {
    text-align: center;
    width: 100%;
    position: absolute;
    left: 0px;
    bottom: 20px;
    z-index: 2;
    p {
      padding: 0;
      margin: 0;
      font-size: 12px;
      color: #fff;
      line-height: 12px;
      font-weight: 400;
    }
  }
  .login-body {
    width: 1000px;
    height: 472px;
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 2;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: row;
    border-radius: 8px;
    overflow: hidden;
    .login-body__title {
      position: relative;
      flex: 1;
      overflow: hidden;
      background-image: url('./assets/images/body-bg.png');
      background-repeat: no-repeat;
      background-size: cover;
      img {
        display: block;
        width: 520px;
        position: absolute;
        top: 140px;
        left: 50%;
        transform: translateX(-50%);
      }
    }
    .login-body__form {
      width: 400px;
      height: 100%;
      padding: 40px;
      box-sizing: border-box;
      background-color: #fff;
      .login-form__tab {
        ::v-deep .el-tabs__header {
          margin-bottom: 28px;
          .el-tabs__nav-wrap {
            &:after {
              display: none;
            }
            .el-tabs__nav-scroll {
              .el-tabs__nav {
                .el-tabs__active-bar {
                  height: 2px;
                }
                .el-tabs__item {
                  font-size: 20px;
                  font-weight: 700;
                }
              }
            }
          }
        }
        ::v-deep .el-form-item {
          margin-bottom: 24px;
          &:last-child {
            margin-bottom: 32px;
          }
          .el-input {
            height: 40px;
            .el-input__inner {
              height: 100%;
            }
          }
        }
      }
      .login-form__save {
        width: 100%;
        height: 48px;
        margin-bottom: 20px;
        .login-btn-login {
          width: 100%;
          height: 48px;
          font-size: 20px;
          text-align: center;
          font-weight: bold;
          border-radius: 4px;
        }
      }
      .login-body__me {
        margin-bottom: 20px;
      }
      .login-code {
        width: 33%;
        height: 40px;
        float: right;
        img {
          width: 100%;
          height: 40px;
          float: right;
          cursor: pointer;
          vertical-align: middle;
          border-radius: 4px;
          overflow: hidden;
        }
        .login-phone__btn {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .login-body--mini {
    transform: translate(-50%, -50%) scale(0.85);
  }
}
.login-page--imgbg {
  .login-page__bg {
    background-image: url('./assets/images/content-bg.png');
    background-repeat: no-repeat;
    background-size: cover;
  }
}
</style>
