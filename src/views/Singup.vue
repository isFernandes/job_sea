<template>
  <div>
    <form @submit.prevent="add(newUser)" class="container col-4">
      <h4 class="title">Cadastre-se</h4>
      <div class="form-group">
        <div class="align-row">
          <input
            v-model="newUser.nome"
            maxlength="20"
            class="half-input form-input"
            type="text"
            id="nome"
            placeholder="Nome"
          />
          <input
            v-model="newUser.sobrenome"
            maxlength="30"
            class="half-input form-input"
            type="text"
            id="sobrenome"
            placeholder="Sobrenome"
          />
        </div>

        <input
          v-model="newUser.email"
          maxlength="80"
          id="email"
          class="form-input"
          type="email"
          placeholder="Email"
        />
        <div class="align-row">
          <input
            v-model="newUser.password"
            maxlength="80"
            class="half-input form-input"
            type="password"
            id="password"
            placeholder="Senha"
          />

          <input
            secureText="true"
            maxlength="80"
            class="half-input form-input"
            type="password"
            placeholder="Confirme a senha"
          />
        </div>

        <div class="align-row">
          <label class="form-label" for="dataNascimento"
            >Data nascimento:</label
          >
          <input
            v-model="newUser.dataNasc"
            maxlength="8"
            class="half-input form-input"
            type="date"
            id="dataNascimento"
            placeholder="Ex: dd/MM/AAAA"
          />
        </div>

        <label class="form-label" for="objetivo">Função:</label>
        <select
          v-model="newUser.objetivo"
          class="form-input"
          style="width: 100%"
        >
          <option id="1">Publicar projetos</option>
          <option id="2">Participar de projetos</option>
          <option id="3">Publicar e Participar de projetos</option>
        </select>
        <div class="button-area">
          <button v-if="!loading" type="submit" class="btn btn-primary">
            <span class="button-text">Confirmar</span>
          </button>
          <button v-else type="submit" class="btn btn-link">
            <span class="button-text">Carregando</span>
          </button>
        </div>
      </div>
    </form>
    <img src="@/assets/caravela-1.png" class="img-responsive">
  </div>
</template>


<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      newUser: {
        nome: "",
        sobrenome: "",
        email: "",
        password: "",
        dataNasc: "",
        objetivo: "",
        success: true,
      },
    };
  },
  computed: {
    ...mapState(["loading"]),
  },
  methods: {
    ...mapActions(["addUser"]),

    async add(newUser) {
      if (
        newUser.nome === "" &&
        newUser.sobrenome === "" &&
        newUser.email === "" &&
        newUser.password === "" &&
        newUser.dataNasc === "" &&
        newUser.objetivo === ""
      ) {
        alert("PREENCHA TUDO!");
      } else {
        await this.addUser(newUser);
        this.$router.push(`/feed`);

        this.newUser = { success: true };
      }
    },
  },
};
</script>

<style scoped>
img{
  flex: 1;
}

.button-text {
  font-weight: bold;
  color: azure;
}

.title {
  text-align: center;
  align-self: center;
}
.container {
  background-color: rgba(115, 122, 129, 0.062);
  padding: 10px;
  width: 55%;
  justify-content: space-around;
  flex-direction: column;
  height: 80%;
  position: absolute;
  align-self: center;
  margin-top: 120px;
}

.half-input {
  width: 45%;
  margin: 0 10px 35px 4px;
}

#email {
  width: 90%;
  margin: 0 0 35px 8px;
}

.align-row {
  margin: 8px;
  display: flex;
  flex-direction: row;
}
.button-area {
  margin: 8px;
}
</style>
