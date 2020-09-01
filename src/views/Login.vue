<template>
  <div class="login-field container col-6">
    <div class="form-group">
      <h4 style="font-family: Helvetica;" class="text-dark">Log In</h4>
      <label class="text-dark form-label" for="input-email">E-mail*</label>
      <input class="form-input" type="email" id="input-email" placeholder="E-mail" />
      <label class="text-dark form-label" for="input-email">Senha*</label>
      <input class="form-input" type="password" id="input-password" placeholder="Senha" />
      <div class="button-area">
        <button type="submit" class="text-dark btn btn-link">
          <a href="#/recover">
            <span>Esqueceu a Senha?</span>
          </a>
        </button>
        <button @click="goToPage('feed')" type="submit" class="btn btn-primary input-group-btn">
          <span>Entrar</span>
        </button>
      </div>
    </div>
    <blockquote class="singup-field">
      <h4 style="font-family: Helvetica;" class="text-dark">Sing Up</h4>
      <p class="text-singup">Não está cadastrado? Realize seu cadastro agora!</p>
      <cite>
        <a style="color: #264a74" href="#/SingUp">Cadastre-se</a>
      </cite>
    </blockquote>
  </div>
</template>

<script>
export default {
  methods: {
    goToPage(route) {
      this.$router.push(`/${route}`);
    },
  },
};
</script>

<style scoped>
.login-field {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.text-singup {
  text-align: justify;
  color: aliceblue;
}

.singup-field {
  width: 45%;
}

.button-area {
  margin: 8px;
  justify-content: space-between;
}

a {
  color: #3b4351;
}
</style>