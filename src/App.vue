<template>
  <div id="app">
    <img alt="Vue logo" class="logo" src="./assets/logo.png">
    <div class="btns">
      <Button label="shuffle" @click.native="shuffleDeck"/>
      <Button label="dealFive" :primary="true" @click.native="dealFive"/>
      <span v-if="emptyDeck" class="warn">Deck is empty, please shuffle</span>
    </div>
    <Table :cards="dealtCards"/>
  </div>
</template>

<script>
import { default as Deck } from './lib/deck.js'
import Button from './components/Button.vue'
import Table from './components/Table.vue'

export default {
  name: 'app',
  components: {
    Button,
    Table
  },
  data: function() {
    return {
      dealtCards: new Array(5),
      deck: new Deck()
    };
  },
  computed: {
    emptyDeck: function() {
      return this.deck.empty();
    }
  },
  methods: {
    shuffleDeck: function() {
      this.deck.shuffle();
      this.dealtCards = new Array(5);
    },
    dealFive: function() {
      try {
        this.dealtCards = this.deck.dealFive();
      } catch (e) {
        // deck is empty
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
.warn {
  color: red;
}
</style>
