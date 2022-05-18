let botao = document.getElementById('btn');
let palavras = document.getElementById('textArea');
let tituloResultado = document.querySelector('.resultado p');

palavras.value.length= 0;


/* Evento que dispara a contagem das palavras */
botao.addEventListener('click', (e) => {
    tituloResultado.innerHTML = 'Seu texto contém <br>' + palavras.value.split(' ').length + ' palavras';
    e.preventDefault();  
    setTimeout(() => {
        tituloResultado.innerHTML = '';
        palavras.value = null;
      }, 5000)  
});

