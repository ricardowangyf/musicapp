<template>
    <div class="vrify">
        <div class="center">
            <div @click="back()" class="back">
                <img src="../assets/svg/back.svg" />
            </div>
            <div class="vrify-contant">
                <h1>
                    To continue enter your phone number
                </h1>
            </div>
            <div class="inputnumber">
                <div class="svg-width">
                    <img src="../assets/svg/phone.svg" style="height: 40px;width: 40px;" />
                </div>
                <div class="input" @click="hideKeyboard">
                    <input v-validate="'required|credit_card'" name="password" type="text" placeholder="Phone"
                        ref="inputField">
                </div>
            </div>
            <div class="continue">
                <button>
                    CONTINUE
                </button>
            </div>
            <Keyboard />
        </div>
    </div>
</template>
  
<script>
import Keyboard from "../components/keybord.vue";
export default {
    name: "VriFy",
    data() {
        return {
        };
    },
    components: {
        Keyboard
    },
    methods: {
        hideKeyboard() {
            this.$refs.inputField.blur();
        }
        // back() {
        //     this.$router.push({
        //         path: "/signin",
        //     });
        // },
    },
};
</script>
  
<style>
.vrify {
    background: #0E0B1F;
}

.center {
    margin: 0 auto;
    max-width: 308px;
}

.back {
    padding-top: 20px;
}

.vrify-contant {
    padding: 45px 0 60px 0;
}

.vrify-contant h1 {
    font-family: Helvetica;
    font-size: 28px;
    color: #EEEEEE;
    letter-spacing: 0;
    margin: 0;
    font-weight: 200;
}

.svg-width {
    height: 40px;
    width: 60px;
}

.input {
    width: 80%;
    height: 60px;
}

.input {
    position: relative;
    right: 52px;
}

.inputnumber {
    display: flex;
    justify-content: flex-start;
    padding: 30px 0 30px 0;
}

.inputnumber input {
    background: #0E0B1F;
    border: none;
    border-bottom: 2px solid #dbdbdb;
    border-top: 0px;
    border-left: 0px;
    border-right: 0px;
    outline: none;
    color: #fff;
    opacity: 0.7;
    padding-left: 40px;
    font-family: Helvetica;
    font-size: 14px;
    letter-spacing: 0;
    line-height: 22px;
}

.inputnumber input {
    width: 95%;
    height: 40px;
}

.continue {
    padding: 20px 0 75px 0;
}

.continue button {
    background: #CBFB5E;
    border: none;
    padding: 14px;
    border-radius: 3px;
    width: 100%;
    border: none;
}
</style>