<template>
  <div class="container col-4">
    <h4 class="title">Cadastre-se</h4>
    <div class="form-group">
      <div class="align-row">
        <input
          maxlength="20"
          class="half-input form-input"
          type="text"
          id="input-example-1"
          placeholder="Nome"
        />
        <input
          maxlength="30"
          class="half-input form-input"
          type="text"
          id="input-example-1"
          placeholder="Sobrenome"
        />
      </div>

      <input maxlength="80" id="email-input" class="form-input" type="email" placeholder="Email" />
      <div class="align-row">
        <input
          maxlength="80"
          class="half-input form-input"
          type="password"
          id="input-example-1"
          placeholder="Senha"
        />

        <input
          maxlength="80"
          class="half-input form-input"
          type="email"
          id="input-example-1"
          placeholder="Confirme a senha"
        />
      </div>

      <div class="align-row">
        <label class="form-label" for="input-example-1">Data nascimento:</label>
        <input
          maxlength="80"
          class="half-input form-input"
          type="email"
          id="input-example-1"
          placeholder="Ex: dd/MM/AAAA"
        />
      </div>

      <label class="form-label" for="input-example-1">Função:</label>
      <select style="width: 100%;">
        <option></option>
        <option></option>
        <option></option>
        <option></option>
        <option></option>
        <option></option>
        <option></option>
        <option></option>
      </select>
      <div class="button-area">
        <button type="submit" class="btn btn-primary">
          <span>Confirmar</span>
        </button>
      </div>
    </div>
  </div>
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
