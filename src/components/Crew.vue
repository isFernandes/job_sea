<template>
  <div class="tile styled-card">
    <div class="crew-rating">{{crew.rating}}</div>
    <div class="crew-info">
      Nomes:
      {{crew.nomes.nome1}}, {{crew.nomes.nome2}}, {{crew.nomes.nome3}}, {{crew.nomes.nome4}}, {{crew.nomes.nome5}}.
      <br />
      Funções: {{crew.funcoes}}.
    </div>
    <div class="crew-value">R$ {{crew.value}} </div>
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
.styled-card {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: lightgray;
  border-radius: 10px;
  padding: 4px;
  flex: 1;
  align-items: center;
  max-height: 20%;
  margin: 0 2% 15px 2%;
}

.crew-rating {
  font-size: 28px;
  display: flex;
  padding: 15px;
  width: 70px;
  border-radius: 800%;
  background-color: crimson;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin: 0 3% 0 3%;
}
.crew-info {
  display: flex;
  flex: 4;
  align-self: flex-start;
  flex-wrap: wrap;
  margin-top: 30px;
}
.crew-value {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  font-size: 18px;
}
</style>
