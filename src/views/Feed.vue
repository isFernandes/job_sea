<template>
  <div class="container">
    <div class="navbar"></div>
    <div class="align-row">
      <div class="aDefinir"></div>
      <div class="feed">
        <div class="filterbar">BARRA DE FILTRO AQUI</div>
        <Crew v-for="c in crews" :key="c.id" :crew="c" class="content-feed" />
      </div>
      <div class="mural"></div>
    </div>
  </div>
</template>


<script>
import Crew from "../components/Crew";
export default {
  data() {
    return {
      crews: [
        {
          rating: 98,
          nomes: {
            nome1: "Leandro",
            nome2: "Renato",
            nome3: "Rafael",
            nome4: "Marcos",
            nome5: "Roberto",
          },
          funcoes:
            "Desenvolvedor, Designer Thing, Ux Senior, Marketing, Fullstack",
          value: 2350,
        },
        {
          rating: 89,
          nomes: {
            nome1: "Leandro",
            nome2: "Renato",
            nome3: "Rafael",
            nome4: "Marcos",
            nome5: "Roberto",
          },
          funcoes:
            "Desenvolvedor, Designer Thing, Ux Senior, Marketing, Fullstack",
          value: 2250,
        },
        {
          rating: 35,
          nomes: {
            nome1: "Leandro",
            nome2: "Renato",
            nome3: "Rafael",
            nome4: "Marcos",
            nome5: "Roberto",
          },
          funcoes:
            "Desenvolvedor, Designer Thing, Ux Senior, Marketing, Fullstack",
          value: 1350,
        },
        {
          rating: 41,
          nomes: {
            nome1: "Leandro",
            nome2: "Renato",
            nome3: "Rafael",
            nome4: "Marcos",
            nome5: "Roberto",
          },
          funcoes:
            "Desenvolvedor, Designer Thing, Ux Senior, Marketing, Fullstack",
          value: 1980,
        },
      ],
    };
  },
  components: {
    Crew,
  },
};
</script>

<style scoped>
.filterbar {
  max-height: 100%;
  width: 100%;
  margin: 0 -2% 5px -2%;
  background-color: aqua;
  flex-direction: row;
}

.container {
  width: 100%;
  height: 100%;
  background-color: #ff5f6f;
  padding: 0;
  justify-content: center;
  align-items: center;
}

.navbar {
  width: 100%;
  height: 10%;
  background-color: rgb(35, 35, 119);
  align-self: flex-start;
  margin-top: -5px;
  flex: 1;
}

.feed {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: yellow;
  height: 100%;
  align-self: center;
  width: 50%;
  margin-left: 2%;
  flex-wrap: wrap;
}

.content-feed {
  align-self: center;
  background-color: teal;
  border: tomato solid 1px;
}

.mural {
  margin: 7% 0 0 0.5%;
  background-color: green;
  width: 23%;
  height: 30%;
}
.align-row {
  display: flex;
  flex-direction: row;
  flex: 2;
  width: 100%;
  height: 90%;
}

.aDefinir {
  background-color: rgb(124, 21, 110);
  width: 23%;
  height: 100%;
}
</style>