<template>
  <div class="wrapper">
    <div class="center">
      <div class="login">
        <div class="clear login-head">
          <span class="fl-left user-register">用户登录</span>
          <span class="fl-right headered">没有账号,<span id="RegisterButton" class="login-btns"
                                                     @click="goRegister">立即注册</span></span>
        </div>
        <form id="LoginForm" action="">
          <p class="message-box">
            <label for="LoginUsername" class="spanName">用户名</label><input id="LoginUsername" name="LoginUsername"
                                                                          class="inputUserName" type="text"
                                                                          placeholder="请输入用户名" autofocus="autofocus">
          </p>
          <p class="message-box">
            <label for="LoginPassword" class="spanName">密码</label><input id="LoginPassword" name="LoginPassword"
                                                                         type="password" placeholder="请输入密码">
          </p>
          <p class="message-box">
            <label for="LoginCode" class="spanName">验证码</label>
            <input id="LoginCode" name="LoginCode"
                   class="verificationBys" type="text"
                   placeholder="请输入验证码">
            <i class="inputVerification">K8BY</i>
          </p>
          <div class="clear forgot-pwd-box">
            <span class="fl-right forgot-pwd-btn" @click="handleForget">忘记密码?</span>
          </div>
          <p class="login-btn-box">
            <input class="login-button" type="submit" value="登录">
          </p>
        </form>
      </div>
      <div class="register" style="display: none">
        <div class="clear register-head">
          <span class="fl-left user-register">用户注册</span>
          <span class="fl-right headered">我已注册,<span id="LoginButton" class="login-btn"
                                                     @click="goLogin">前往登录</span></span>
        </div>
        <form id="RegisterForm" action="">
          <p class="message-box">
            <label for="RegisterUsername" class="spanName">用户名</label><input id="RegisterUsername"
                                                                             name="RegisterUsername" class="userName"
                                                                             type="text" placeholder="设置用户名">
          </p>
          <p class="message-box">
            <label for="RegisterPassword" class="spanName">密码</label><input id="RegisterPassword"
                                                                            name="RegisterPassword" type="password"
                                                                            placeholder="设置登录密码">
          </p>
          <p class="message-box">
            <label for="RegisterPassword2" class="spanName">确认密码</label><input id="RegisterPassword2"
                                                                               name="RegisterPassword2" type="password"
                                                                               placeholder="确认登录密码">
          </p>
          <p class="message-box">
            <label for="RegisterCode" class="spanName">验证码</label><input id="RegisterCode" name="RegisterCode"
                                                                         class="verificationBys" type="text"
                                                                         placeholder="输入验证码">
            <i class="inputVerification">YB8K</i>
          </p>
          <p class="sub-btn-box">
            <input class="agreeBtn" type="submit" value="同意协议并注册">
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import '../../../assets/js/jquery.validate'

  export default {
    name: "LoginForm",
    data() {
      return {}
    },
    methods: {
      goLogin() {
        $(".login").show().siblings().hide()
        $(".message-box input").val("")
        $(".message-box label.error").hide()
      },
      goRegister() {
        $(".register").show().siblings().hide()
        $(".message-box input").val("")
        $(".message-box label.error").hide()
      },
      handleForget() {
        alert("你自己记性不好，怪我喽？！-.-")
      }
    },
    mounted() {
      $("#LoginForm").validate({
        // debug: true, //调试模式取消submit的默认提交功能
        //errorClass: "label.error", //默认为错误的样式类为：error
        focusInvalid: false, //当为false时，验证无效时，没有焦点响应
        onkeyup: false,
        submitHandler: function (form) {   //表单提交句柄,为一回调函数，带一个参数：form
          alert("提交表单");
          form.submit();   //提交表单
        },
        rules: {
          LoginUsername: {
            required: true,
            rangelength: [6, 12]
          },
          LoginPassword: {
            required: true,
            rangelength: [6, 12]
          },
          LoginCode: {
            required: true,
            rangelength: [4, 4],
            equalTo: "YB8K"
          }
        },
        messages: {
          LoginUsername: {
            required: "请输入用户名",
            rangelength: "请输6-12位用户名"
          },
          LoginPassword: {
            required: "请输入密码",
            rangelength: "请输6-12位密码"
          },
          LoginCode: {
            required: "请输入验证码",
            rangelength: "验证码格式不对",
            equalTo: "验证码错误！"
          }
        }
      });
      $("#RegisterForm").validate({
        // debug: true, //调试模式取消submit的默认提交功能
        //errorClass: "label.error", //默认为错误的样式类为：error
        focusInvalid: false, //当为false时，验证无效时，没有焦点响应
        onkeyup: false,
        submitHandler: function (form) {   //表单提交句柄,为一回调函数，带一个参数：form
          alert("提交表单");
          form.submit();   //提交表单
        },
        rules: {
          RegisterUsername: {
            required: true,
            rangelength: [6, 12]
          },
          RegisterPassword: {
            required: true,
            rangelength: [6, 12]
          },
          RegisterPassword2: {
            required: true,
            equalTo: "#RegisterPassword"
          },
          RegisterCode: {
            required: true,
            rangelength: [4, 4],
            equalTo: "YB8K"
          }
        },
        messages: {
          RegisterUsername: {
            required: "请输入用户名",
            rangelength: "请输6-12位用户名"
          },
          RegisterPassword: {
            required: "请输入密码",
            rangelength: "请输6-12位密码"
          },
          RegisterPassword2: {
            required: "请确认密码",
            equalTo: "请输入相同密码"
          },
          RegisterCode: {
            required: "请输入验证码",
            rangelength: "验证码格式不对",
            equalTo: "验证码错误！"
          }
        }
      })
    }
  }
</script>

<style>

  @media screen and (min-width: 1024px) {
    .wrapper {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: url("../../../assets/images/wrapperbg.jpg");
      background-size: cover;
    }

    .center {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 1000px;
      height: 600px;
      margin: -300px 0 0 -500px;
    }

    .register, .login {
      float: right;
      margin: 60px 10px 0 0;
      width: 390px;
      height: 460px;
      box-shadow: darkgrey 0px 0px 20px 1px;
      padding: 50px 35px 0 35px;
      background-color: #fff;
      box-sizing: border-box;
    }

    .register-head, .login-head {
      margin-bottom: 15px;
      height: 25px;
      line-height: 25px;
    }

    .register-head span, .login-head span {
      display: inline-block;
    }

    .user-register {
      font-size: 16px;
    }

    .headered {
      color: #b8b8b8;
    }

    .login-btn, .login-btns {
      color: #12976a;
      cursor: pointer;
    }

    .message-box {
      position: relative;
      height: 45px;
      line-height: 45px;
      margin-top: 20px;
      border: 1px solid #ddd;
    }

    .message-box > input {
      position: absolute;
      top: 6px;
      left: 80px;
      display: block;
      border: none;
      height: 30px;
    }

    .message-box > .inputVerification {
      position: absolute;
      right: 0;
    }

    .spanName {
      position: absolute;
      display: block;
      width: 80px;
      text-align: right;
    }

    .message-box input {
      width: calc(100% - 80px);
      padding-left: 15px;
      box-sizing: border-box;
    }

    .message-box .verificationBy, .message-box .verificationBys {
      width: calc(100% - 160px);
    }

    .message-box .verificationByBtn, .message-box .inputVerification {
      width: 80px;
      text-align: center;
    }

    .message-box .verificationByBtn {
      color: #12976a;
    }

    .sub-btn-box {
      margin-top: 20px;
    }

    .sub-btn-box .agreeBtn {
      display: block;
      margin: 0 auto;
      width: 140px;
      height: 40px;
      line-height: 40px;
      color: #fff;
      border: none;
      text-align: center;
      background-color: #12976a;
      cursor: pointer;
    }

    /*ç™»å½•*/
    .forgot-pwd-box {
      margin-top: 20px;
      height: 20px;
    }

    .forgot-pwd-btn {
      display: block;
      height: 20px;
      text-align: center;
      color: #12976a;
      cursor: pointer;
    }

    .login-btn-box {
      margin-top: 20px;
    }

    .login-button {
      display: block;
      width: 100%;
      height: 40px;
      line-height: 40px;
      color: #fff;
      border: none;
      text-align: center;
      background-color: #12976a;
      cursor: pointer;
    }

    .message-box label.error {
      position: absolute;
      bottom: -21px;
      right: 0px;
      height: 20px;
      line-height: 20px;
      color: red;
      font-size: 14px;
    }
  }

  @media screen and (max-width: 1023px) {
    .wrapper {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: url("../../../assets/images/wrapperbg3.jpg");
      background-size: cover;
    }

    .center {
      position: absolute;
      top: 49%;
      left: 50%;
      width: 85%;
      height: 0;
      padding-top: 100%;
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
    }

    .register, .login {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 8% 10% 9% 10%;
      border-radius: 3%;
      opacity: 0.7;
      background-color: #fff;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      -webkit-box-shadow: darkgrey 0px 0px 20px 1px;
      box-shadow: darkgrey 0px 0px 20px 1px;
    }

    .register-head, .login-head {
      margin-bottom: 5%;
      height: 7%;
    }

    .register-head span, .login-head span {
      display: inline-block;
    }

    .user-register {
      font-size: .7rem;
    }

    .headered {
      font-size: .6rem;
      color: #b8b8b8;
    }

    .login-btn, .login-btns {
      color: #12976a;
      cursor: pointer;
    }

    .message-box {
      position: relative;
      height: 13%;
      margin-top: 7%;
      border: 1px solid #ddd;
      font-size: .65rem;
    }

    .message-box span, .message-box input {
      position: absolute;
      left: 25%;
      display: block;
      border: none;
      height: 100%;
    }

    .spanName {
      position: absolute;
      left: 0;
      top: 50%;
      display: block;
      width: 25%;
      text-align: center;
      transform: translate(0,-50%);
    }

    .message-box input {
      width: 50%;
      padding-left: 15px;
    }

    .message-box .verificationBy, .message-box .verificationBys {
      width: 50%;
    }

    .message-box .verificationByBtn, .message-box .inputVerification {
      position: absolute;
      top: 50%;
      left: 75%;
      width: 25%;
      text-align: center;
      transform: translate(0,-50%);
    }

    .message-box .verificationByBtn {
      color: #12976a;
    }

    .sub-btn-box {
      margin-top: 12%;
    }

    .sub-btn-box .agreeBtn {
      display: block;
      width: 100%;
      margin: 0px auto;
      height: 100%;
      color: #fff;
      border: none;
      text-align: center;
      background-color: #12976a;
      cursor: pointer;
      font-size: 1.2rem;
    }

    .forgot-pwd-box {
      margin-top: 6%;
      height: 9%;
    }

    .forgot-pwd-btn {
      display: block;
      height: 30px;
      text-align: center;
      color: #12976a;
      cursor: pointer;
      font-size: .6rem;
    }

    .login-btn-box {
      margin-top: 10%;
      height: 15%;
    }

    .login-button {
      display: block;
      width: 100%;
      margin: 0px auto;
      height: 100%;
      color: #fff;
      border: none;
      text-align: center;
      background-color: #12976a;
      cursor: pointer;
      font-size: 1.2rem;
    }

    .message-box label.error {
      position: absolute;
      top: 109%;
      right: 0px;
      color: red;
      font-size: .6rem;
    }
    #LoginForm{
      display: block;
      width: 100%;
      height: 85%;
    }
    #RegisterForm{
      display: block;
      width: 100%;
      height: 73%;
    }
  }
</style>
