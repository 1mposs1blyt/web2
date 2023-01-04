<!-- eslint-disable -->
<template>
    <h1>Kitchen</h1>
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
            this.$router.push({name:'DiningRoom'})
        },
        north() {
            this.$router.push({name:'wall'})
        },
        west(){
            this.$router.push({name:'wall'})
        },
        east(){
            this.$router.push({name:'wall'})
        },
    }

}
</script>