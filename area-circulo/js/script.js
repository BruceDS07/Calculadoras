const formulario = document.getElementById('formulario');
const container = document.querySelector('.container');
let raio = document.getElementById('raio');
let boxFormulario = document.querySelector('.boxFormulario');
let tituloResultado = document.querySelector('.boxResultado h2');
let resultado = document.querySelector('.boxResultado span');
const botaoVoltar = document.querySelector('.boxFormulario .btnVoltar');
const boxResultado = document.querySelector('.boxResultado');
let areaCirculo;

formulario.addEventListener('submit', function(e) {
  areaCirculo = (raio.value * raio.value) * 3.14;
  boxFormulario.style = "height: 500px; padding: 0;";
  botaoVoltar.style = "display: flex;";
  resultado.innerHTML = areaCirculo;
  resultado.style = "block;"
  boxResultado.style = "display: flex; justify-content: center; aligm-itens: center; flex-direction: column;";
  formulario.style = "display: none;";
  tituloResultado.style = "display: block;"
  tituloResultado.innerHTML = "A área do círculo é"
  e.preventDefault(); /* Evita que a página recarregue após o input */
  /* Condicionais para verificar o imc do usuário
  Cada condicional exibe um valor diferente para cada IMC */
  })

