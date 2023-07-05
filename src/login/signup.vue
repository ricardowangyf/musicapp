<template>
  <div class="width">
    <div class="login-img">
      <img src="../assets/img/sign-one.png" alt="Image" />
    </div>
    <div class="title">
      <span class="image-caption">SIGN IN</span>
    </div>
    <div class="login-input">
      <div class="password-input">
        <form>
          <img src="../assets/svg/aite.svg" class="icon-email" />
          <input class="password" type="text" placeholder="E-mail" src="../svg/aite.svg" />
        </form>
      </div>
      <div class="password-input">
        <img src="../assets/svg/password.svg" class="icon-email" />
        <input class="password" type="text" placeholder="Password" src="../svg/aite.svg" />
        <img :src="pwdFlag ? textIcon : eyesicon" @click="changePwd" class="shouandhide" />
      </div>
    </div>
    <div class="forgot" @click="tiao()">
      <h1>Forgot password?</h1>
    </div>
    <div class="sign">
      <button>SIGN IN</button>
    </div>
    <div class="space-around">
      <div class="xian left"></div>
      <span class="fenge">Or connect with</span>
      <div class="xian right"></div>
    </div>
    <div class="tubiao">
      <div class="tubiao-left">
        <img src="../assets/svg/facebook.svg" onclick="" />
      </div>
      <div class="tubiao-left">
        <img src="../assets/svg/google.svg" onclick="" />
      </div>
      <div class="tubiao-left">
        <img src="../assets/svg/twitter.svg" onclick="" />
      </div>
    </div>
    <div class="bottom">
      <h1>Don' t have an account?</h1>
      <router-link to="/xxx"></router-link>
      <button class="siagn" @click="zhuantiao()">Sign up</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "LoginApp",
  data() {
    return {
      textIcon: "https://www.hualigs.cn/image/6363de49186e1.jpg", //展示图标
      eyesicon: "https://www.hualigs.cn/image/6363de00504c4.jpg", //隐藏图标
      password: " ",
      pwdFlag: true, //密码标示 true表示当前是密码形式
    };
  },
  methods: {
    //显示隐藏
    changePwd() {
      this.pwdFlag = !this.pwdFlag;
    },
    tiao() {
      this.$router.push({
        path: "/forgot",
      });
    },
    zhuantiao() {
      this.$router.push({
        path: "/signin",
      });
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

.width {
  width: 100%;
  height: 740px;
}

.login-img img {
  width: 100%;
}

.title {
  transform: translate(-50%, -50%);
  font-family: Helvetica;
  font-size: 36px;
  color: #fff;
  letter-spacing: 0;
}

.title {
  position: absolute;
  top: 20%;
  left: 33%;
}

.login-input {
  position: absolute;
  top: 30%;
  left: 15%;
}

.password {
  font-size: 21px;
  width: 74%;
  background: rgb(0 0 0 / 0%);
  color: #fff;
  padding-left: 30px;
}

.password {
  position: relative;
  right: 20px;
}

.password-input {
  margin-top: 40px;
}

.shouandhide {
  position: relative;
  right: 45px;
}

.icon-email {
  position: relative;
  top: 3px;
  left: 4px;
}

.icon-email {
  width: 20px;
  height: 20px;
}

.sign {
  border: none;
  width: 63%;
  left: 57px;
}

.sign {
  display: flex;
  justify-content: center;
}

.sign {
  position: absolute;
  top: 59%;
}

.sign button {
  border: none;
  background: #cbfb5e;
  padding: 17px;
  border-radius: 7px;
}

.sign button {
  width: 100%;
}

.space-around {
  display: flex;
  justify-content: center;
}

.space-around {
  position: relative;
  bottom: 23%;
}

.xian {
  border-bottom: 2px solid #8d92a3;
}

.xian {
  width: 16%;
}

.xian {
  position: relative;
  bottom: 5px;
}

.left {
  margin-right: 23px;
}

.right {
  margin-left: 17px;
}

.fenge {
  font-family: Helvetica;
  font-size: 11px;
  color: #8d92a3;
  letter-spacing: 0;
}

.tubiao {
  display: flex;
  justify-content: center;
}

.tubiao {
  position: relative;
  bottom: 20%;
  right: 2%;
}

.forgot {
  position: absolute;
  top: 49%;
  right: 19%;
}

.forgot h1 {
  font-size: 7px;
  color: #eeeeee;
  font-weight: 200;
  margin: 0;
}

.tubiao-left {
  padding-left: 14px;
}

.bottom {
  position: absolute;
  top: 96%;
  left: 28%;
}

.bottom {
  display: flex;
}

.bottom h1 {
  font-family: Helvetica;
  font-size: 8px;
  color: #ffffff;
  letter-spacing: 0;
  margin: 0;
  font-weight: 400;
}

.siagn {
  font-family: Helvetica;
  font-size: 8px;
  color: #cbfb5e;
  letter-spacing: 0;
  padding: 0;
  border: none;
  background: black;
  text-decoration: none;
}</style>