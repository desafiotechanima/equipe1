<template>
  <div class="login">
    <div class="row">
      <h3 class="text-center">Preencha o formulário para efetuar o cadastro no site</h3>
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label d-flex justify-content-start">*Nome</label>
          <input class="form-control" id="exampleInputEmail1" placeholder="Digite seu nome">
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label d-flex justify-content-start">*E-mail</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Digite seu email">
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label d-flex justify-content-start">*Faculdade</label>
          <input class="form-control" id="exampleInputEmail1" placeholder="Selecione sua faculdade">
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label d-flex justify-content-start">*Curso</label>
          <input class="form-control" id="exampleInputEmail1" placeholder="Selecione seu curso">
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label d-flex justify-content-start">*Usuário</label>
          <input class="form-control" id="exampleInputEmail1" placeholder="Digite seu nome de usuário">
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label d-flex justify-content-start">*Senha</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Digite a sua senha">
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label d-flex justify-content-start">*Confirme sua senha</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Confirme a sua senha">
        </div>
        <router-link to="/about">
          <button type="button" class="mt-2 btn text-white  btn_gradient_2">Finalizar cadastro</button>
        </router-link>
      </form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Cadastro',
}
</script>
