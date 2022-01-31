const formulario = document.getElementById('formulario');
const container = document.querySelector('.container');
let diaSemana = document.getElementById('diaSemana');
let horasPorDia = document.getElementById('horasPorDia');
let salario = document.getElementById('salario');
let boxFormulario = document.querySelector('.boxFormulario');
let tituloResultado = document.querySelector('.boxResultado h2');
let resultado = document.querySelector('.boxResultado span');
const botaoVoltar = document.querySelector('.boxFormulario .btnVoltar');
const boxResultado = document.querySelector('.boxResultado');
let valorHora, totalHoras;

formulario.addEventListener('submit', function(e) {
  totalHoras = (diaSemana.value * horasPorDia.value) * 4;
  valorHora = salario.value / totalHoras;
  boxFormulario.style = "height: 500px; padding: 0;";
  botaoVoltar.style = "display: flex;";
  resultado.innerHTML = valorHora.toFixed(2) + " R$";
  resultado.style = "block;"
  boxResultado.style = "display: flex; justify-content: center; aligm-itens: center; flex-direction: column;";
  formulario.style = "display: none;";
  tituloResultado.style = "display: block; text-align:center;";
  tituloResultado.innerHTML = "Sua hora trabalhada vale:"
  e.preventDefault(); /* Evita que a página recarregue após o input */
  /* Condicionais para verificar o imc do usuário
  Cada condicional exibe um valor diferente para cada IMC */
  })

