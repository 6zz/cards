<template>
  <div id="app">
    <img alt="Vue logo" class="logo" src="./assets/logo.png">
    <div class="btns">
      <Button label="shuffle" @click.native="shuffleDeck"/>
      <Button label="dealFive" :primary="true" @click.native="dealFive"/>
    </div>
    <Table :cards="dealtCards"/>
  </div>
</template>

<script>
import { default as Deck } from './lib/deck.js'
import Button from './components/Button.vue'
import Table from './components/Table.vue'

const deck = new Deck();

export default {
  name: 'app',
  components: {
    Button,
    Table
  },
  data: function() {
    return {
      dealtCards: new Array(5)
    };
  },
  methods: {
    shuffleDeck: function() {
      deck.shuffle();
      this.dealtCards = new Array(5);
    },
    dealFive: function() {
      if (deck.empty()) {
        return;
      }
      try {
        this.dealtCards = deck.dealFive();
      } catch (e) {
        alert(e);
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
  margin: 10px;
}
.logo {
  width: 50px;
  height: 50px;
  position: absolute;
  top: 0;
  right: 0;
}
.btn {
  margin-right: 5px;
}
</style>
