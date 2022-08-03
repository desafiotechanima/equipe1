<template>
  <div class="home">
    <div class="row d-flex">
      <div class="col-lg-4 col-md-6 col-12 justify-content-center align-items-center order-1 order-md-0">
        <div class="mt-5">
          <h3>Taxa de Conclusão das atividades
          </h3>
          <apexchart 
            width="100%"
            type="bar"
            :options="chartOptionsBar"
            :series="seriesBar">
          </apexchart>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 col-12 justify-content-center align-items-center order-0 order-md-1">
        <div class="d-flex flex-column mt-5">
          <div>
            <img src="@/assets/son.png" alt="Imagem da criança" width="75%">
          </div>

          <div class="d-flex flex-column mt-2">
            <span class="fs-4">Murilo Guimarães</span>
            <span class="text-center">8 anos</span>
          </div>
        </div>
      </div>

      <div class="col-lg-4 order-1 col-md-6 col-12 justify-content-center align-items-center">
        <img src="" alt="Tabela com as pontuações">
        Teste
      </div>

      <div class="col-lg-4 col-md-6 col-12 justify-content-center align-items-center order-0 order-md-1">
        <div class="mt-5">
          <h3>Tempo de Conexão na plataforma</h3>
          <div class="d-flex justify-content-center">
            <div class="donut-time d-flex flex-column justify-content-center align-items-center">
              <h3>16hrs</h3>
              em 12 dias
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    
  },
  data: () => ({
    seriesBar: [
      {
        name: 'Net Profit',
        data: [44, 55, 57, 56]
      },
    ],
    chartOptionsBar: {
      chart: {
        type: 'bar',
        height: 500,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded'
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['Programação', 'Ciências Humanas', 'Atualidades', 'Ciências da Natureza'],
      },
      yaxis: {
        title: {
          text: 'Pontuação por área'
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands"
          }
        }
      }
    },

    seriesDonut: [44, 55, 41, 17, 15],
    chartOptionsDonut: {
      chart: {
        type: 'donut',
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    },
  }),
}
</script>

<style>
.donut-time{
  border: 18px solid #660DAC;
  border-radius: 50%;
  width: 240px;
  height: 240px;
  background-color:Plum;
}
</style>