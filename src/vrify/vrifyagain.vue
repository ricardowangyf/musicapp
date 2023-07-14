<template>
    <div class="vrify">
        <div class="center">
            <div @click="back()" class="back">
                <img src="../assets/svg/back.svg" />
            </div>
            <div class="vrify-contant">
                <h1>
                    Verify phone number
                </h1>
            </div>
            <div class="flex">
                <div class="inputnumber">
                    <input class="input" />
                </div>
                <div class="inputnumber">
                    <input class="input" />
                </div>
                <div class="inputnumber">
                    <input class="input" />
                </div>
                <div class="inputnumber">
                    <input class="input" />
                </div>
            </div>
            <div class="continue">
                <button @click="jixu()">
                    CONTINUE
                </button>
            </div>
            <div class="contant">
                <h1>Resent</h1>
                <h1>Code</h1>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "VriFy",
    data() {
        return {
        };
    },

    methods: {
        hideKeyboard() {
            this.$refs.inputField.blur();
        },
        jixu() {
            this.$router.push({
                path: "/vrifyagain",
            });
        },
    },
};
</script>
  
<style>
.vrify {
    background: #0E0B1F;
}

.center {
    margin: 0 auto;
    max-width: 315px;
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

.inputnumber {
    text-align: center;
}

.inputnumber input {
    width: 56%;
    outline: none;
    border-radius: 0px;
    border-top-width: 0px;
    border-left-width: 0px;
    border-right-width: 0px;
    border-bottom-width: 1px;
    background-color: #0E0B1F;
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
}

.flex {
    display: flex;
    justify-content: space-between;
}

.flex {
    padding: 18px 0 30px 0;
}

.contant {
    padding-bottom: 275px;
}

.contant h1 {
    font-family: Helvetica;
    font-size: 14px;
    color: #CBFB5E;
    letter-spacing: 0;
    text-align: center;
    line-height: 22px;
    margin: 0;
    padding: 5px;
    font-weight: 200;
}
</style>