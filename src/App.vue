<template>
  <div id="app">
    <img alt="Vue logo" class="logo" src="./assets/logo.png">
    <DeckButton 
      :hasCard="hasCard" 
      @shuffle-deck="shuffleDeck"
      @deal-five="dealFive"
    />
    <Table :cards="dealtCards"/>
  </div>
</template>

<script>
import { default as Deck } from './lib/deck.js'
import DeckButton from './components/DeckButton.vue'
import Table from './components/Table.vue'

export default {
  name: 'app',
  components: {
    DeckButton,
    Table
  },
  data: function() {
    return {
      dealtCards: new Array(5),
      deck: new Deck()
    };
  },
  computed: {
    hasCard: function() {
      return !this.deck.empty();
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
html {
  height: 100%;
  background-color: #777;
}
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
