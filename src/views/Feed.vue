<template>
  <div class="container">
    <header class="navbar">
      <section class="navbar-section">
        <a href="#/feed">
          <img
            class="img-responsive"
            @click="goToPage('feed')"
            src="@/assets/caravela-1.png"
          />
        </a>
        <div
          style="
            margin: 0 0 0 15px;
            background-color: white;
            padding: 2px;
            border-radius: 10px;
          "
        >
          <input type="text" class="input-search" />
          <i class="icon icon-search" />
        </div>
      </section>
      <section class="navbar-center"></section>
      <section class="navbar-section">
        <a href="#/" class="header-text btn btn-link">Seus projetos</a>
        <a
          target="about_blank"
          href="https://www.linkedin.com/in/iago-fernandes/"
          class="header-text btn btn-link"
        >
          <i class="icon icon-2x icon-menu" />
        </a>
      </section>
    </header>
    <div class="align-row">
      <div class="filtros">
        <h5>Meus Filtros:</h5>
        <div class="filtros input-group">
          <input class="form-input" />
          <button type="submit" class="btn btn-primary">Filtrar</button>
        </div>
      </div>
      <div class="feed">
        <Crew v-for="c in crews" :key="c.id" :crew="c" class="content-feed" />
      </div>
    </div>
  </div>
</template>



<style scoped>
.input-search {
  width: 350px;
  height: 35px;
  align-self: center;
  border: 0 solid white;
  border-radius: 10px;
}

img {
  height: 75px;
  width: 95px;
}

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
  background-color: #ebeef5;
  padding: 0;
  justify-content: center;
  align-items: center;
}

.navbar {
  padding: 0 0 0 17%;
  width: 100%;
  height: 10%;
  background-color: #3b5998;
  align-self: flex-start;
  margin-top: -5px;
  flex: 1;
}

.feed {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ebeef5;
  height: 100%;
  align-self: center;
  width: 50%;
  flex-wrap: wrap;
  margin-top: 10px;
  flex: 3;
}

/* .mural {
  margin: 7% 0 0 0.5%;
  background-color: green;
  width: 23%;
  flex:1;
  height: 30%;
} */
.align-row {
  display: flex;
  flex-direction: row;
  flex: 2;
  width: 100%;
  height: 90%;
}

.header-text {
  color: white;
  font-weight: bold;
  font-size: 18px;
}

.filtros {
  background-color: #b2b7c486;
  flex: 0.8;
  padding: 10px 15px;
}
</style>


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
      ],
    };
  },
  components: {
    Crew,
  },
  methods: {
    goToPage(route) {
      this.$router.push(`/${route}`);
    },
  },
};
</script>