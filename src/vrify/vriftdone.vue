<template>
    <div class="vrify">
        <div class="center">
            <div @click="back()" class="back">
                <img src="../assets/svg/back.svg" />
            </div>
            <div class="contant">
                <h1>Almost done!</h1>
                <p>Please Verify your Phone</p>
            </div>
            <div class="continue">
                <button @click="jixu()">
                    CONTINUE
                </button>
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
    components: {
    },
    methods: {
        jixu() {
            this.$router.push({
                path: "/vriftdone",
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
    padding-top: 50px;
}

.contant {
    padding: 121px 0 70px 0;
}

.contant h1 {
    font-family: Helvetica;
    font-size: 28px;
    color: #FFFFFF;
    letter-spacing: 0;
    text-align: center;
    font-weight: 200;
    margin: 0;
}

.contant p {
    font-family: Helvetica;
    font-size: 14px;
    color: #FFFFFF;
    letter-spacing: 0;
    text-align: center;
    line-height: 22px;
    margin: 0;
    font-weight: 100;
}

.continue {
    padding: 40px 0 345px 0;
}

.continue button {
    background: #CBFB5E;
    border: none;
    padding: 14px;
    border-radius: 3px;
    width: 100%;
}
</style>