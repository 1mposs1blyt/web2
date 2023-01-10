<template>
  <main>
    <div class="propertyes"></div>
    <div class="balls">
      <ChristmasBall
        v-for="(ball, i) in balls"
        :size="ball.size"
        :border="ball.border"
        :key="i"
      />
    </div>
  </main>
</template>
<script>
import ChristmasBall from "./ChristmasBall/ChristmasBall.vue";
export default {
  components: {
    ChristmasBall,
  },
  data() {
    return {
      balls: [],
    };
  },
  computed: {},
  methods: {},
};
</script>
<style>
.balls {
  display: flex;
}
</style>