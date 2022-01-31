/* Variáveis */
let form = document.getElementById('formulario');
let tituloHidden = document.querySelector ('h1');
let valorGasto = document.querySelector('#valorAbastecido');
let valorCombustivel = document.querySelector('#valor');
let kmRodado = document.querySelector('#quilometragem');
let tituloResultado = document.querySelector('.boxFormulario h2');
let textoResultado = document.querySelector('.boxFormulario span');
let combustivel, total;
let box = document.querySelector('.boxFormulario');
let btnVoltar = document.querySelector('.boxFormulario > .btnVoltar');
let icone1 = document.querySelector('.iconIMG');
let icone2 = document.querySelector('.iconIMG2');
let cardIcon = document.querySelector('.cardIcon');
let tipoVeiculo;
let calculoEspecifico = document.querySelector('.boxResultado > h3');
let boxResultado = document.querySelector('.boxResultado');
let itensDicas = document.querySelector('.boxResultado > p');

/* Evento de click para o primeiro icone */
icone1.addEventListener('click', function(a){
  if(icone1.classList.contains("ativo") || icone2.classList.contains("ativo")) {
    icone2.classList.remove("ativo");
    icone1.classList.add('ativo');
  } else {
    icone1.classList.add('ativo');
  }
});

/* Evento de click para o segundo icone */
icone2.addEventListener('click', function(a){
  if(icone1.classList.contains("ativo") || icone2.classList.contains("ativo")) {
    icone1.classList.remove("ativo");
    icone2.classList.add('ativo');
  } else {
    icone2.classList.add('ativo');
  }
});

/* Evento de submit para o formulário */
form.addEventListener('submit', function(e) {
  combustivel = valorGasto.value / valorCombustivel.value; /* Calculo */
  total = kmRodado.value / combustivel;  /* Calculo */
  boxResultado.style = "display: block; ";
  calculoEspecifico.style = "padding-bottom: 20px;"

  form.style = "display: none;"; /* Esconde o formulário após o envio dos valores */
  box.style = "margin: 50px 0;";
  tituloHidden.style = "display: none;"; /* Esconde o título após o envio dos valores */
  btnVoltar.style = "display: flex;"; /* O botão que era escondido, aparece após o envio dos valores */
  tituloResultado.innerHTML ="Abaixo está a sua média de consumo por litro"; /* Texto */
  textoResultado.innerHTML = total.toFixed(1) + ' Km/L'; /* Resultado com apenas 1 casa decimal + km/l */
  
  /* Condicional para verificar qual dos 2 icones foi selecionado */
  
  if (icone1.classList.contains("ativo")) { /* Se o icone 1 tiver a classe ativo */
    tipoVeiculo = icone1.value; /* A variável tipoVeiculo recebe o valor dele, no casso "moto" */
  } else if (icone2.classList.contains("ativo")) { /* Se o icone 2 tiver a classe ativo */
    tipoVeiculo = icone2.value; /* A variável tipoVeiculo recebe o valor dele, no caso "carro"  */
  }
  
  if (tipoVeiculo == "moto") { /* Se o icone escolhido for a moto, realiza a operação abaixo */
    if (total <= 15) { /* Se o consumo for menor que 15 kms/l, realiza a operação abaixo */
      calculoEspecifico.innerHTML = "Consumo acima da média<br> Verifique os seguintes itens";
      itensDicas.innerHTML = "Qualidade do combustível <br> Estado do sistema de injeção/carburação <br> Qualidade e calibragem dos pneus <br> Lubrificação e manutenção da relação/corrente <br> Regulagem dos freios <br> Não acelere a moto parada <br> Faça manutenção periódicamente <br> Reveja seu modo de pilotagem ";
    } else { /* Caso o consumo esteja dentro da média, realiza a operação abaixo */
      calculoEspecifico.innerHTML = "Parabéns ! <br>O seu consumo está dentro da média"
    }
  }
  else if (tipoVeiculo == "carro") { /* Se o ícone escolhido for o carro, realiza a operação abaixo */
    if (total <= 7) { /* Se o consumo for menor que 7 kms/l, realiza a operação abaixo */
      calculoEspecifico.innerHTML = "Consumo acima da média<br> Verifique os seguintes itens";
      itensDicas.innerHTML = "Estado e calibragem dos pneus <br> Evite carregar peso desnecessário <br> Qualidade do combustível <br> Reveja o seu modo de direção <br> Escolha o melhor trajeto para seu destino <br> Verifique ar-condicionado e janelas abertas <br> Manutenção de injeção eletrônica/carburação <br> Manutenção periódica"
    } else { /* Caso o consumo esteja dentro da média, realiza a operçaão abaixo */
      calculoEspecifico.innerHTML = "Parabéns ! <br>O seu consumo está dentro da média"
    }
  }
  
  e.preventDefault(); /* Envia os inputs, porém evita que a página recarregue */
})