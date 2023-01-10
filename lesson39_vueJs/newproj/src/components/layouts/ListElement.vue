<template>
    <li>
        {{ elem }} <button @click="this.$parent.deleteItem(id)">X</button>
    </li>
</template>
<script>
import ListElement from "./layouts/ListElement.vue"

export default{
    props:{
        key:{
            type:Number,
            default:0
        },
        elem: {
            type:String,
            default: ""
        }
    }
}
</script>
