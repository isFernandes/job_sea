<template>
  <div class="tile styled-card" >
      <div class="crew-rating"></div>
      <div class="crew-info"></div>
      <div class="crew-value"></div>
  </div>
</template>

<script>
export default {
  props: {
    crew: { type: Object, required: true },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.styled-card{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.crew-rating{
    display: flex;
    flex: 1;
}
.crew-info{
    display: flex;
    flex: 2;
}
.crew-value{
    display: flex;
    flex: 1;
}
</style>
