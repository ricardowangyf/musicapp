<template >
  <div class="fotgot">
    <div classc="center" style="margin: 0 auto; max-width: 300px">
      <div @click="back()" class="back">
        <img src="../assets/svg/back.svg" />
      </div>
      <div class="forgot-contant back">
        <h1>Forgot Password?</h1>
      </div>
      <div class="help back">
        <h1>
          if you need help resetting your password ,we can help by sending you a
          link to reset it.
        </h1>
      </div>
      <div class="password-input">
        <img src="../assets/svg/password.svg" class="icon" />
        <input class="password" type="text" placeholder="Password" src="../svg/aite.svg" />
        <img :src="pwdFlag ? textIcon : eyesicon" @click="changePwd" class="shouandhide" />
        <div class="clear"></div>
      </div>
      <div class="password-input">
        <img src="../assets/svg/password.svg" class="icon" />
        <input class="password" type="text" placeholder="Confirm Password" src="../svg/aite.svg" />
      </div>
      <el-input v-model="input" placeholder="Please input" clearable show-password />
      <div class="sign">
        <button>CHANGE PASSWORD</button>
      </div>
    </div>
  </div>
</template>
<script setup>
</script>
<script  >
export default {
  name: "ForGot",
  data() {
    return {
      input: " ",
    };
  },

  methods: {
    back() {
      this.$router.push({
        path: "/signin",
      });
    },
  },
};
</script>

<style >
input {
  border-top: none;
  border-left: none;
  border-right: none;
}

.fotgot {
  background: #322d49;
  background-image: url("../assets/img/mask.png");
}

.fotgot {
  width: 100%;
  height: 740px;
}

.back {
  padding-top: 25px;
}

.forgot-contant h1 {
  font-family: Helvetica;
  font-size: 30px;
  color: #ffffff;
  margin: 0;
  font-weight: 200;
}

.help h1 {
  font-family: Helvetica;
  font-size: 12px;
  color: #8d92a3;
  letter-spacing: 0;
  margin: 0;
  font-weight: 200;
}

.password {
  font-size: 18px;
  width: 76%;
  background: rgb(0 0 0 / 0%);
  color: #fff;
  outline: none;
  padding: 12px 35px;
}

.icon {
  width: 30px;
  height: 30px;
}

.icon {
  position: relative;
  top: 40px;
}

.sign {
  border: none;
  display: flex;
  justify-content: center;
  width: 100%;
}

.sign {
  margin-top: 100px;
}

.sign button {
  border: none;
  background: #cbfb5e;
  width: 100%;
  padding: 17px;
  border-radius: 7px;
  font-weight: 600;
}
</style>