<template>
  <form class="forms" @submit.prevent="true" action="POST" method="post">
    <div class="form-group">
      <h3>Esqueceu sua senha?</h3>
      <p>Insira seu email de cadastro para enviarmos a chave de recuperação</p>
      <input class="input-style form-group" type="email" />
      <div class="button-area">
        <button class="btn">
          <a href="/">Lembrei a senha!</a>
        </button>
        <button type="submit" class="btn btn-primary">Enviar</button>
      </div>
    </div>
  </form>
</template>

<style scoped>
.forms {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.input-style {
  align-self: center;
  width: 80%;
  border-radius: 10px;
  border: #3b4351 solid 1px;
}

p {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: justify;
  width: 75%;
}

.button-area {
  max-width: 80%;
  display: flex;
  justify-content: space-between;
  align-self: flex-end;
}
</style>