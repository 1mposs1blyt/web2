<template>
  <div>
    <ul>
      <li>
        <input type="button" placeholder="цвет" @click="changeColor()" />
      </li>
      <li><input type="text" placeholder="узор" /></li>
      <li><input type="text" placeholder="обводка" /></li>
      <li><input type="num" placeholder="размер" /></li>
    </ul>
    <input type="button" @click="createnew()" />
    <div id="bouble"></div>
  </div>
</template>
<script>
export default {
  components: {},
  // data: {
  //   color: color,
  // },
  changeColor() {
    let bouble = document.getElementById("#bouble");
    bouble.style.color = "green";
  },
};
</script>
<style>
/* eslint-disable */
.ul {
  background: #000;
}
#bouble {
  background: #000;
  border-radius: 900px;
  height: 300px;
  width: 300px;
}
</style>
