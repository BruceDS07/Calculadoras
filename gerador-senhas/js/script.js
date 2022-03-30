/* Seletores */
const formulario = document.getElementById('formulario');
const inputRange = document.getElementById('rangeSenha');
const inputNumerosRange = document.getElementById('inputNumero');
const inputLetrasMaiusculas = document.getElementById('letraMaiuscula');
const inputLetrasMinusculas = document.getElementById('letraMinuscula');
const inputNumeros = document.getElementById('numeros');
const inputCaracteresEspeciais = document.getElementById('caracteresEspeciais');


/* Variável que armazenará a senha gerada */
let senhaGerada = document.getElementById('senhaGerada');

/* Função que irá gerar a senha aleatória */
function geradorSenha(tamanhosenha, chars) {
  let resultado = '';
  for (let i = 0; i < tamanhosenha; i++) {
    let caracteres = chars;
    tamanhoLetras = caracteres.length;
    let senha = (caracteres.charAt(Math.floor(Math.random() * tamanhoLetras )));
    resultado = senha + resultado;
  }
  return resultado;
}

/* Eventos nos inputs, para togglar a classe ativo
Que será usada como condicional na próxima função para add os valores desejados para irão gerar a senha */
inputLetrasMaiusculas.addEventListener('click', () => {
  inputLetrasMaiusculas.classList.toggle('ativo');
})

inputLetrasMinusculas.addEventListener('click', () => {
  inputLetrasMinusculas.classList.toggle('ativo');
})

inputNumeros.addEventListener('click', () => {
  inputNumeros.classList.toggle('ativo');
})

inputCaracteresEspeciais.addEventListener('click', () => {
  inputCaracteresEspeciais.classList.toggle('ativo');
})

/* Array vazio para guardar os valores dos inputs que forem escolhidos para gerar a senha */
let arraySenha = [];

/* Seletor do Botão 'Gerar Senha' */
let btnGerarSenha = document.getElementById('btnGerarSenha');

/* Evento de click no botão 'Gerar Senha'
Botei uma classe 'identificador' nos elementos do HTML para fazer um forEach que ouvirá todos os itens
Caso o item tiver a classe ativa e o arraySenha NAO possuir o valor, ele push o valor para a arraySenha
Caso a array possua o valor e o item NÃO possua a classe 'ativo' ele retira o valor da array */
btnGerarSenha.addEventListener('click', (e) => {
  let identificador = document.querySelectorAll('.identificador');
  identificador.forEach((item) => {
    if(item.classList.contains('ativo') && (!arraySenha.includes(item.value))) {
      arraySenha.push(item.value);
    } else if (arraySenha.includes(item.value) && !item.classList.contains('ativo'))  {
      arraySenha.splice(arraySenha[item.value]);
    }
  })
  chars = arraySenha.join('').toString();
  senhaGerada.value = geradorSenha(inputNumerosRange.value, chars);
  e.preventDefault();
})

/* Evento de click no input Range para determinar o tamanho de caracteres da senha */
inputRange.addEventListener('change', (e) => {
  let inputNumerosRange = document.getElementById('inputNumero');
  inputNumerosRange.value = inputRange.value;
  e.preventDefault();

  /* Outro evento de click, para caso o usuário mudar o tamanho da senha, ele mudar também */
  inputNumerosRange.addEventListener('change', () => {
    inputRange.value = inputNumerosRange.value;
    e.preventDefault();
  })

  return (inputNumerosRange.value);
})


/* Função para copiar a senha para o ClipBoard */

/* Seletor */
let botaoCopiar = document.getElementById('botao-copiar');

/* Evento de click no botão 'Copiar Senha' */
botaoCopiar.addEventListener('click', (e) => {

    /* Ao clicar no 'Copiar Senha' ele irá copiar o valor presente no campo 'senhaGerada'
    que é aonde se encontra a senha que foi gerada */
    navigator.clipboard.writeText(senhaGerada.value);

    /* Previne o comportamento padrão da página, que seria recarregar a mesma */
    e.preventDefault();
  })