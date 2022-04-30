<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12 mt-4">
          <h1>Oi {{ user.name }},</h1>
          <p>Sabemos do desafio do estudo EAD com os filhos em casa. Nessa plataforma enquanto você estuda seus filhos se divertem com jogos educacionals desenvolvidos pelos nossos professores.</p>
        </div>
        <div class="col-12 d-flex justify-content-center justify-content-md-end">
          <button type="button" class="btn text-white btn_gradient_1 me-4">Seu perfil</button>
          <button type="button" class="btn text-white  btn_gradient_2">Seus filhos</button>
        </div>
        <div class="col-12 mt-4">
          <div class="d-flex flex-column text-white position-absolute px-4 py-3 w-100">
            <div class="text-start">
              <h1>
                Escolha
              </h1>
              <p class="w-50">
                os conteúdos educacionals de maior defasagem para seus fihos treinarem enquanto você estuda
              </p>
            </div>
            <div class="text-start" style="margin-top: 60px">
              <h1>
                Brinque
              </h1>
              <p>
                e acumule pontos
              </p>
            </div>
            <div class="text-start" style="margin-top: 60px">
              <h1>
                Troque
              </h1>
              <p>
                seus pontos por jogos nas empresas parceiras
              </p>
            </div>
          </div>
          <img class="img-about w-100" src="@/assets/background-about.png" alt="Fundo colorido e com formas circulares">
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data: () => ({
    user: {
      name: "Lilian"
    }
  }),
  methods: {

  }
}
</script>

<style>
@media (min-height: 600px) {
  .img-about {
    object-fit: cover;
    border-radius: 15px;
    height: 500px;
  }
}
</style>

