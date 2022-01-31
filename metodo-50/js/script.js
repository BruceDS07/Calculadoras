const formulario = document.getElementById('formulario');
const container = document.querySelector('.container');
let salario = document.getElementById('salario');
let boxFormulario = document.querySelector('.boxFormulario');
let tituloResultado = document.querySelector('.boxResultado h2');
const botaoVoltar = document.querySelector('.boxFormulario .btnVoltar');
const boxResultado = document.querySelector('.boxResultado');
let cinquentaResultado = document.querySelector('.boxResultado span:nth-of-type(1)');
let trintaResultado = document.querySelector('.boxResultado span:nth-of-type(2)');
let vinteResultado = document.querySelector('.boxResultado span:nth-of-type(3)');
let metodo, cinquenta, trinta, vinte;

formulario.addEventListener('submit', function(e) {
  cinquenta = salario.value * 0.5;
  trinta = salario.value * 0.3;
  vinte = salario.value * 0.2;
  container.style = "height: 1000px;";
  cinquentaResultado.innerHTML = cinquenta + " R$" + " para gastos fixos e essenciais";
  trintaResultado.innerHTML = trinta + " R$" + " para gastos variáveis e dispensáveis";
  vinteResultado.innerHTML = vinte + " R$" + " em reserva de emergência visando o futuro";
  boxFormulario.style = "display:flex; flex-direction:column; justify-content: center; aligm-itens: center;";
  botaoVoltar.style = "display: flex;";
  boxResultado.style = "display: flex; justify-content: center; aligm-itens: center; flex-direction: column;";
  formulario.style = "display: none;";
  tituloResultado.style = "display: block; text-align:center;";
  tituloResultado.innerHTML = "Divida suas finanças da seguinte maneira:";
  e.preventDefault(); /* Evita que a página recarregue após o input */
  /* Condicionais para verificar o imc do usuário
  Cada condicional exibe um valor diferente para cada IMC */
  })

