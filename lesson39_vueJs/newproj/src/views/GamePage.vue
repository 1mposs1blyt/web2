<!-- eslint-disable  -->
<template>
    <h1>welcome to game!</h1>
    <h2>You located in Noth hall</h2>
    <p>You can go to North/South/East/West from every room,
        finally you need to be in soon...</p>
    <p>Rooms: Balcony, Bedroom 1 and 2, North and South halls,Kitchen, dining room</p>
        <button @click="start">Start game</button>
</template>
<script>/* eslint-disable */
export default {
    methods: {
        start() {
            this.$router.push({path:'/NorthHall'})
        },
    }
}
</script>