const formulario = document.getElementById('formulario');
const container = document.querySelector('.container');
let peso = document.getElementById('peso');
let altura = document.getElementById('altura');
let tituloResultado = document.querySelector('.boxResultado h2');
let resultadoIMC = document.querySelector('.boxResultado span');
const botaoVoltar = document.querySelector('.boxFormulario .btnVoltar');
const boxResultado = document.querySelector('.boxResultado');
const boxFormulario = document.querySelector('.boxFormulario');
const boxDicas = document.querySelector('.boxDicas');
const textoResultado = document.querySelector('.boxResultado span')
const imcResultado = document.querySelector('.boxResultado h3')
const dicasIMC = document.querySelector('.dicasIMC');
let imc;

formulario.addEventListener('submit', function(e) {
  imc = peso.value / Math.pow(altura.value, 2);
  tituloResultado.style = "display: block;";
  tituloResultado.innerHTML = "Confira o seu IMC";
  resultadoIMC.innerHTML = imc.toFixed(1); /* Variável que exibe o resultado para o usuario, e só mostra 1 casa decimal */
  botaoVoltar.style = "display: flex;";
  boxResultado.style = "display: flex; flex-direction: column; justify-content; center; aligm-itens: center;";
  boxDicas.style = "display: flex; flex-direction: column; justify-content; center; aligm-itens: center;";
  boxFormulario.style = "display: flex; justify-content: space-between;";
  formulario.style = "display: none;";
  container.style = "height: 1300px;";

  e.preventDefault(); /* Evita que a página recarregue após o input */
  /* Condicionais para verificar o imc do usuário
  Cada condicional exibe um valor diferente para cada IMC */
  if (imc < 17) {
      imcResultado.innerHTML = "Você está muito abaixo do peso";
      dicasIMC.innerHTML = "Se alimente com maior frequência <br>Ingira uma quantidade maior de calorias <br> Escolha alimentos ricos em nutrientes <br> Adicione calorias extras nas suas refeições <br> Priorize carboidratos e proteínas";
      
    } else if (imc > 17 && imc <= 18.49){
      imcResultado.innerHTML = "Você está abaixo do peso";
      dicasIMC.innerHTML = "Se alimente com maior frequência <br>Ingira uma quantidade maior de calorias <br> Escolha alimentos ricos em nutrientes <br> Adicione calorias extras nas suas refeições <br> Priorize carboidratos e proteínas"


    } else if (imc >= 18.5 && imc <= 24.99){
      imcResultado.innerHTML = "Você está com o peso ideal.";
      boxDicas.style = "display: none;";

    } else if (imc >= 25 && imc <= 29.99){
      imcResultado.innerHTML = "Você está acima do peso";
      dicasIMC.innerHTML = "Procure orientação profissional <br>Pratique exercícios físicos periódicamente <br> Consuma uma alimentação saudável <br> Diminua o consumo de refrigerantes e açúcar <br> Durma entre 6 e 8 horas de sono <br>Diminua a ingestão de doces e frituras"


    } else if (imc >= 30 && imc <= 34.99){
      imcResultado.innerHTML = "Você está com obesidade nivel 1.";
      dicasIMC.innerHTML = "Procure orientação profissional <br>Pratique exercícios físicos periódicamente <br> Consuma uma alimentação saudável <br> Diminua o consumo de refrigerantes e açúcar <br> Durma entre 6 e 8 horas de sono <br>Diminua a ingestão de doces e frituras"

    } else {
      imcResultado.innerHTML = "Você está com obesidade nivel 2";
      dicasIMC.innerHTML = "Procure orientação profissional <br>Pratique exercícios físicos periódicamente <br>Consuma uma alimentação saudável <br> Diminua o consumo de refrigerantes e açúcar <br> Durma entre 6 e 8 horas de sono <br>Diminua a ingestão de doces e frituras"
    }
  })

