<!-- eslint-disable -->
<template>
    <h1>South hall</h1>
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
            this.$router.push({name:'wall'})
        },
        north() {
            this.$router.push({path:'/NorthHall'})
        },
        west(){
            this.$router.push({name:'BedroomTwo'})
        },
        east(){
            this.$router.push({name:'DiningRoom'})
        },
    }

}//отсюда есть children при походе на: west,east
</script>