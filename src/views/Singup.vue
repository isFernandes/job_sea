<template>
<form method="POST" action="cadastro.php"> 
  <div class="container col-4">
    <h4 class="title">Cadastre-se</h4>
    <div class="form-group">
      <div class="align-row">
        <input
          maxlength="20"
          class="half-input form-input"
          type="text"
          id="nome"
          placeholder="Nome"
        />
        <input
          maxlength="30"
          class="half-input form-input"
          type="text"
          id="sobrenome"
          placeholder="Sobrenome"
        />
      </div>

      <input maxlength="80" id="email" class="form-input" type="email" placeholder="Email" />
      <div class="align-row">
        <input
          maxlength="80"
          class="half-input form-input"
          type="password"
          id="password"
          placeholder="Senha"
        />

        <input
          secureText=true
          maxlength="80"
          class="half-input form-input"
          type="password"
          placeholder="Confirme a senha"
        />
      </div>

      <div class="align-row">
        <label class="form-label" for="dataNascimento">Data nascimento:</label>
        <input
          maxlength="8"
          class="half-input form-input"
          type="date"
          id="dataNascimento"
          placeholder="Ex: dd/MM/AAAA"
        />
      </div>

      <label class="form-label" for="objetivo">Função:</label>
      <select style="width: 100%;">
        <option id="1">Publicar projetos</option>
        <option id="2">Participar de projetos</option>
        <option id="3">Publicar e Participar de projetos</option>
      </select>
      <div class="button-area">
        <button type="submit" class="btn btn-primary" @click="cadastro.php">
          <span>Confirmar</span>
        </button>
      </div>
    </div>
  </div>
  </form>
</template>

<style scoped>
.title {
  text-align: center;
  align-self: center;
}
.container {
  background-color: rgba(115, 122, 129, 0.158);
  padding: 10px;
  width: 55%;
  justify-content: space-around;
  flex-direction: column;
  height: 80%;
}

.half-input {
  width: 45%;
  margin: 0 10px 35px 4px;
}

#email-input {
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
