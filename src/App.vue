<template>
  <div id="app">
    <img alt="Vue logo" class="logo" src="./assets/logo.png">
    <div class="btns">
      <Button label="shuffle" @click.native="$emit('shuffle-deck');"/>
      <Button label="dealFive" @click.native="$emit('deal-five');"/>
    </div>
    <Table/>
  </div>
</template>

<script>
import Button from './components/Button.vue'
import Table from './components/Table.vue'

export default {
  name: 'app',
  components: {
    Button,
    Table
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
