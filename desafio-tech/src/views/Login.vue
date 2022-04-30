<template>
  <div class="login">
    <div class="row mt-4">
      <h6 class="text-center">Um espaço lúdico e educacional para o desenvolvimento do seu filho</h6>
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label d-flex justify-content-start">Usuário</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Digite o nome de usuário">
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label d-flex justify-content-start">Senha</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Digite a sua senha">
        </div>
        <div class="d-flex justify-content-end">
            <router-link to="/about">
              <button type="button" class="btn text-white btn_gradient_1">Entrar</button>
            </router-link>
        </div>

        <div> Ou </div>
        <button type="button" class="mt-2 btn text-white  btn_gradient_2">Crie seu login</button>
      </form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Login',
}
</script>
