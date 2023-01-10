<!-- eslint-disable  -->
<template>
    <h1>welcome to game!</h1>
    <h2>Choose your class:</h2>
    <ul>
        <li><label><input type="radio" name="user" value="Paladin" v-model="user">Паладин: 80HP и 4 урона</label></li>
        <li><label><input type="radio" name="user" value="Wizzard" v-model="user">Wizzard: 60HP и 12 урона</label></li>
        <li><label><input type="radio" name="user" value="archer" v-model="user">Лучник: 70HP и 6 урона</label></li>
        <li><h2>Ты выбрал класс: {{ user }}</h2></li>
    </ul>
</template>
<script>/* eslint-disable */
import { mapState, mapMutations, mapGetters } from 'vuex';
export default {
    data: {
        user: ''
    },
    computed: {
        ...mapState([
            'paladin',
            'Wizzard',
            'Archer',
        ]),
    },
}
</script>