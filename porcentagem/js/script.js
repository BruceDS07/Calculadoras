const formulario = document.getElementById('formulario');
const container = document.querySelector('.container');
let porcentagem = document.getElementById('porcentagem');
let valor = document.getElementById('valor');
let boxFormulario = document.querySelector('.boxFormulario');
let tituloResultado = document.querySelector('.boxResultado h2');
let resultado = document.querySelector('.boxResultado span');
const botaoVoltar = document.querySelector('.boxFormulario .btnVoltar');
const boxResultado = document.querySelector('.boxResultado');
let valorPorcentagem;

formulario.addEventListener('submit', function(e) {
  valorPorcentagem = (porcentagem.value / 100) * valor.value;
  boxFormulario.style = "height: 500px; padding: 0;";
  botaoVoltar.style = "display: flex;";
  resultado.innerHTML = valorPorcentagem;
  resultado.style = "block;"
  boxResultado.style = "display: flex; justify-content: center; aligm-itens: center; flex-direction: column;";
  formulario.style = "display: none;";
  tituloResultado.style = "display: block; text-align:center;";
  tituloResultado.innerHTML = `${porcentagem.value}% de ${valor.value} é:`
  e.preventDefault(); /* Evita que a página recarregue após o input */
  /* Condicionais para verificar o imc do usuário
  Cada condicional exibe um valor diferente para cada IMC */
  })

