//Projeto X-men, criado na semana de imersão front-end, do canal Dev em dobro.

const personagens = document.querySelectorAll('.personagem');
console.log(personagens)

personagens.forEach((personagem) => {
  personagem.addEventListener('mouseenter', () => {
    if(window.innerWidth <450) {
      window.scrollTo({top: 0, behavior: 'smooth' });
    }


    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
    
    personagem.classList.add('selecionado');
    
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');
    
    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `./src/img/card-${idPersonagem}.png`;

    const nomePersonagem = document.getElementById('nome');

    nomePersonagem.innerText = personagem.getAttribute('data-name');

    const descricaoPersonagem = document.getElementById('descricao');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description')
  })  
})

 