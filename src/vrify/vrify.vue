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
                <div></div>
                <div>
                    <input v-validate="'required|credit_card'" name="password" type="text" placeholder="输入的内容格式是信用卡的号码格式">

                </div>
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
        back() {
            this.$router.push({
                path: "/signin",
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
    max-width: 308px;
}

.back {
    padding-top: 20px;
}

.vrify-contant {
    padding: 36px 0 42px 0;
}

.vrify-contant h1 {
    font-family: Helvetica;
    font-size: 28px;
    color: #EEEEEE;
    letter-spacing: 0;
    margin: 0;
    font-weight: 200;

}
</style>