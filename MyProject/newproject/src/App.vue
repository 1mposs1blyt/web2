<template>
  <header>{{ header }}</header>
  <div id="app">
    <h1>{{}}</h1>
  </div>
</template>
<script>

var app = new Vue({
  el:"#app",
  data:{
    text:"Hello, woreld!"
  }
})

</script>

<style lang="scss">

</style>
