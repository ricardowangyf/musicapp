<template>
  <div class="signin">
    <div class="center">
      <div class="title">
        <span class="image-caption">SIGN UP</span>
      </div>
      <div class="login-input">
        <div class="password-input">
          <img src="../assets/svg/user.svg" class="icon-emaail" />
          <input
            type="password"
            placeholder="Name"
            class="password"
            src="../svg/aite.svg"
          />
        </div>
        <div class="password-input">
          <img src="../assets/svg/aite.svg" class="icon-email" />
          <input
            class="password"
            type="text"
            placeholder="E-mail"
            src="../svg/aite.svg"
          />
        </div>
        <div class="password-input">
          <img src="../assets/svg/password.svg" class="icon-email" />
          <input
            class="password"
            type="text"
            placeholder="Password"
            src="../svg/aite.svg"
          />
          <img
            :src="pwdFlag ? textIcon : eyesicon"
            @click="changePwd"
            class="shouandhide"
          />
          <div class="clear"></div>
        </div>
      </div>
      <div class="sign">
        <button>SIGN UP</button>
      </div>
      <div class="contant">
        <span> SIGN UP</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignIn",
  data() {
    return {
      textIcon: "https://s1.ax1x.com/2023/06/22/pCJqfSA.png", //展示图标
      eyesicon:
        "https://tva1.sinaimg.cn/large/0074R88yly8hf7cipay3lj300u00u0lc.jpg", //隐藏图标
      password: " ",
      pwdFlag: true, //密码标示 true表示当前是密码形式
      fbSignInParams: {
        scope: "email,user_likes",
        return_scopes: true,
      },
    };
  },
  methods: {
    //显示隐藏
    changePwd() {
      this.pwdFlag = !this.pwdFlag;
    },
  },
};
</script>

<style>
input {
  border-top: none;
  border-left: none;
  border-right: none;
}
input {
  outline: none;
}
.center {
  margin: 0 auto;
  max-width: 300px;
}
.clear {
  clear: both;
}

.signin {
  width: 100%;
  height: 740px;
  background-image: url("../assets/img/signup.png");
}
.login-img img {
  width: 100%;
}
.icon-emaail {
  position: relative;
  top: 3px;
  left: 4px;
}
.icon-emaail {
  width: 20px;
  height: 20px;
}
.image-caption {
  transform: translate(-50%, -50%);
  font-family: Helvetica;
  font-size: 36px;
  color: #fff;
  letter-spacing: 0;
}
.login-input {
  padding-top: 12%;
}
.password {
  font-size: 20px;
  width: 74%;
  background: rgb(0 0 0 / 0%);
  padding: 8px 25px;
  color: #fff;
}

.password-input {
  padding-top: 35px;
}
.shouandhide {
  position: relative;
  bottom: 32px;
  float: right;
  right: 31px;
}
.title {
  padding-top: 22%;
}
.icon-email {
  width: 20px;
  height: 20px;
  position: relative;
  top: 3px;
  left: 4px;
}

.sign {
  border: none;
  display: flex;
  justify-content: center;
  width: 93%;
}

/* .sign {
  position: absolute;
  left: 13%;
  top: 55%;
} */
.sign button {
  border: none;
  background: #cbfb5e;
  width: 100%;
  padding: 17px;
  border-radius: 7px;
  font-weight: 600;
}

.forgot-button {
  display: flex;
  justify-content: flex-end;
}
.forgot-button button {
  background: rgb(0 0 0 / 0%);
  color: #8d92a3;
  border: none;
  padding-right: 43px;
  padding-top: 23px;
  font-size: 18px;
}
.contant {
  display: flex;
  justify-content: center;
  padding-right: 7%;
  padding-top: 10%;
}
.contant span {
  font-size: 16px;
  color: #eeeeee;
}
.login-name {
  padding-top: 20px;
}
</style>