<template>
  <div class="login">
    <div class="row">
      <h3 class="text-center">Preenchar o nosso formulário de oportunidade</h3>
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label d-flex justify-content-start">*Nome</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Digite seu email">
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label d-flex justify-content-start">*E-mail</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Digite seu email">
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label d-flex justify-content-start">*Senhas</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Digite a sua senha">
        </div>
        <button type="submit" class="btn btn-primary">Enviar</button>
      </form>
    </div>

    <h4> Preencha o Formulário para efetuar o cadastro no site</h4>
    <form method="POST" action="cadastro.php" onsubmit="return valida_dados(this)">

    <p>*Nome: <input type="text" name="nome" size="23"></p>
    <p>*E-mail: <input type="text" name="email" size="23"></p>

    <p>*Cpf: <input type="text" name="cpf" 
                pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" 
                title="Digite um CPF no formato: xxx.xxx.xxx-xx"> </p>
    <p>*Faculdade: <input type="text" name="faculdade" size="23"></p>
    <p>*Curso: <input type="text" name="curso" size="23"></P>
    <P>*Login: <input type="text" name="login" size="23"></P>
    <p>*Senha: <input type="password" name="senha" size="23"></p>
    <p>*Confirme sua senha: <input type="password" name="confirmacao" size="23"></p>
    <p><input type="submit" value="Enviar" name="enviar"></p>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Cadastro',
}
</script>
