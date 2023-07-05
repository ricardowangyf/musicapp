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
        <img src="../assets/svg/aite.svg" class="icon-emaail" />
        <input type="password" placeholder="E-mail" class="password" src="../svg/aite.svg" />
      </div>
      <div class="sign" @click="up()">
        <button>SIGN UP</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ForGot",
  data() {
    return {};
  },
  methods: {
    back() {
      this.$router.push({
        path: "/signin",
      });
    },
    up() {
      this.$router.push({
        path: "/nextforget",
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
  letter-spacing: 0;
  margin: 0;
  font-weight: 200;
}

.help h1 {
  font-family: Helvetica;
  font-size: 12px;
  color: #8d92a3;
  letter-spacing: 0;
  line-height: 22px;
  margin: 0;
  font-weight: 200;
}

.password {
  font-size: 18px;
  width: 74%;
  background: rgb(0 0 0 / 0%);
  color: #fff;
  outline: none;
  padding: 0px 0px 8px 35px;
  line-height: 23px;
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

.password-input {
  padding-top: 33%;
}

.sign {
  border: none;
  display: flex;
  justify-content: center;
  width: 67%;
}

.sign {
  position: absolute;
  left: 13%;
  top: 50%;
}

.sign button {
  border: none;
  background: #cbfb5e;
  width: 100%;
  padding: 17px;
  border-radius: 7px;
  font-weight: 600;
}</style>