<template>
  <main>
    <div class="propertyes"></div>
    <div class="balls">
      <ChristmasBall></ChristmasBall>
    </div>
    <div class="ball" :class="[size, border]"></div>
  </main>
</template>
<script>
export default {
  data() {
    return {
      size: "small",
      border: "gold",
    };
  },
};
</script>
<style>
  .ball{
    border-radius: 10000px;
    background-color: #fff;
    border: 1px solid;
    width: 10px;
    height: 10px;
    /* .small{
      width: 10px;
      height: 10px;
    },
    &. */
  }
</style>