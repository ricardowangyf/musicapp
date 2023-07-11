<template>
    <div>
        <div class="keyboard" v-show="showKeyboard">
            <div class="row">
                <button @click="addNumber(1)">1</button>
                <button @click="addNumber(2)">2</button>
                <button @click="addNumber(3)">3</button>
            </div>
            <div class="row">
                <button @click="addNumber(4)">4</button>
                <button @click="addNumber(5)">5</button>
                <button @click="addNumber(6)">6</button>
            </div>
            <div class="row">
                <button @click="addNumber(7)">7</button>
                <button @click="addNumber(8)">8</button>
                <button @click="addNumber(9)">9</button>
            </div>
            <div class="row">
                <button @click="addNumber(0)">0</button>
                <button @click="hideKeyboard">Done</button>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "KeyBord",
    data() {
        return {
        };
    },
};
</script>
  
<style>
</style>
  