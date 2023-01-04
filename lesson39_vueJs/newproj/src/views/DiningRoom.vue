<!-- eslint-disable -->
<template>
    <h1>DiningRoom</h1>
    <button @click="south">Go to south</button>
    <button @click="north">Go to north</button>
    <button @click="west">Go to west</button>
    <button @click="east">Go to east</button>
    <RouterView></RouterView>
  </template>
<script>/* eslint-disable */
export default {
    methods: {
        south() {
            this.$router.push({name:'KitchenRoom'})
        },
        north() {
            this.$router.push({name:'KitchenRoom'})
        },
        west(){
            this.$router.push({name:'SouthHall'})
        },
        east(){
            this.$router.push({name:'wall'})
        },
    }

}
</script>