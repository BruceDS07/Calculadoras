const formulario = document.getElementById('formulario');
const container = document.querySelector('.container');
let masculino = document.querySelector('.sexoBox > .masculino');
let feminino = document.querySelector('.sexoBox > .feminino');
const peso = document.getElementById('peso');
const altura = document.getElementById('altura');
const idade = document.getElementById('idade');
let tituloResultado = document.querySelector('.boxResultado h2');
const botaoVoltar = document.querySelector('.boxFormulario .btnVoltar');
const boxResultado = document.querySelector('.boxResultado');
const boxFormulario = document.querySelector('.boxFormulario');
let textoResultado = document.querySelector('.boxFormulario span');
let sexoValores = document.getElementById('sexo');
let gastoBasal;

masculino.addEventListener('click', function() {
  sexoValores = 'masculino';
})

feminino.addEventListener('click', function() {
  sexoValores = 'feminino';
})

formulario.addEventListener('submit', function(e) {
  if (sexoValores === 'masculino') {
    gastoBasal = 66 + (13.7 * peso.value) + (5 * altura.value) - (6.8 * idade.value);
  } else {
    gastoBasal = 655 + (9.6 * peso.value) + (1.7 * altura.value) - (4.7 * idade.value);
  }
  tituloResultado.style = "display: block;";
  textoResultado.innerHTML = gastoBasal;
  tituloResultado.innerHTML = "Seu gasto energético basal é";
  botaoVoltar.style = "display: flex;";
  boxResultado.style = "display: flex; flex-direction: column; justify-content; center; aligm-itens: center;";
  boxFormulario.style = "display: flex; justify-content: space-between;";
  formulario.style = "display: none;";
  container.style = "height: 1100px;";

  e.preventDefault(); /* Evita que a página recarregue após o input */
  /* Condicionais para verificar o imc do usuário
  Cada condicional exibe um valor diferente para cada IMC */
    })

