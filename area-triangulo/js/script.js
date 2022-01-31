const formulario = document.getElementById('formulario');
const container = document.querySelector('.container');
let base = document.getElementById('base');
let altura = document.getElementById('altura');
let boxFormulario = document.querySelector('.boxFormulario');
let tituloResultado = document.querySelector('.boxResultado h2');
let resultado = document.querySelector('.boxResultado span');
const botaoVoltar = document.querySelector('.boxFormulario .btnVoltar');
const boxResultado = document.querySelector('.boxResultado');
let areaTriangulo;

formulario.addEventListener('submit', function(e) {
  areaTriangulo = (base.value * altura.value) / 2;
  boxFormulario.style = "height: 500px; padding: 0;";
  botaoVoltar.style = "display: flex;";
  resultado.innerHTML = areaTriangulo.toFixed(0);
  resultado.style = "block;"
  boxResultado.style = "display: flex; justify-content: center; aligm-itens: center; flex-direction: column;";
  formulario.style = "display: none;";
  tituloResultado.style = "display: block; text-align:center;";
  tituloResultado.innerHTML = "A área do triângulo informado é: "
  e.preventDefault(); /* Evita que a página recarregue após o input */
  /* Condicionais para verificar o imc do usuário
  Cada condicional exibe um valor diferente para cada IMC */
  })

