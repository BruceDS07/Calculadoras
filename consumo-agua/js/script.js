const formulario = document.getElementById('formulario');
const container = document.querySelector('.container');
let peso = document.getElementById('peso');
let boxFormulario = document.querySelector('.boxFormulario');
let tituloResultado = document.querySelector('.boxResultado h2');
let resultado = document.querySelector('.boxResultado span');
const botaoVoltar = document.querySelector('.boxFormulario .btnVoltar');
const boxResultado = document.querySelector('.boxResultado');
let consumoIdeal;

formulario.addEventListener('submit', function(e) {
  consumoIdeal = peso.value * 0.035;
  boxFormulario.style = "height: 500px; padding: 0;";
  botaoVoltar.style = "display: flex;";
  resultado.innerHTML = consumoIdeal.toFixed(1) + ' Litros de água';
  resultado.style = "block;"
  boxResultado.style = "display: flex; justify-content: center; aligm-itens: center; flex-direction: column;";
  formulario.style = "display: none;";
  tituloResultado.style = "display: block;"
  tituloResultado.innerHTML = "O seu consumo ideal de água diário é"
  e.preventDefault(); /* Evita que a página recarregue após o input */
  /* Condicionais para verificar o imc do usuário
  Cada condicional exibe um valor diferente para cada IMC */
  })

