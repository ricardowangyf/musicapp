<template>
    <div>
        <div class="keyboard">
            <div class="row">
                <button class="number" @click="addNumber()">1</button>
                <button class="number" @click="addNumber()">2
                    <h1>ABC</h1>
                </button>

                <button class="number" @click="addNumber()">3
                    <h1>DEF</h1>
                </button>

            </div>
            <div class="row">
                <button class="number" @click="addNumber()">4
                    <h1>GHI</h1>
                </button>
                <button class="number" @click="addNumber()">5
                    <h1>JKL</h1>
                </button>
                <button class="number" @click="addNumber()">6
                    <h1>MNO</h1>
                </button>
            </div>
            <div class="row">
                <button class="number" @click="addNumber()">7
                    <h1>PGRS</h1>
                </button>
                <button class="number" @click="addNumber()">8
                    <h1>TUV</h1>
                </button>
                <button class="number" @click="addNumber()">9
                    <h1>WXYZ</h1>
                </button>
            </div>
            <div class="row ceanter">
                <button @click="addNumber()" class="zero number">0</button>
                <img src="../assets/svg/backdelete.svg" class="backdelete" />
            </div>
        </div>
    </div>
</template>
  
<script >
export default {
    name: "KeyBord",
    data() {
        return {
        };
    },
};
</script>
  
<style>
.row {
    display: flex;
    justify-content: space-around;
}

.number  {
    height: 46px;
    background: #444444;
    box-shadow: 0 1px 0 0 #000000;
    font-family: Helvetica;
    font-size: 25px;
    color: #FFFFFF;
    letter-spacing: 0;
    line-height: 30px;
    font-weight: 300;
    border: none;
    width: 117px;
    margin: 12px 0 0 11px;
    border-radius: 5px;
}

.ceanter {
    display: flex;
    justify-content: center;
}

.keyboard {
    padding-bottom: 28px;
}

.row button h1 {
    color: #fff;
    margin: 0;
    font-size: 7px;
    font-weight: 300;
    margin-top: -13px;
    padding-top: 4px;
}

.backdelete {
    position: relative;
    left: 39px;
    top: 20px;
}

.backdelete {
    width: 30px;
    height: 30px;
}

.zero {
    margin-left: 40px;
    margin-right: 0;
    width: 98px;
}
</style>
  