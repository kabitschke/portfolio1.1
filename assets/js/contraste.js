const contraste = document.querySelector('.btn-contraste');

contraste.addEventListener('click', color);

function color() {
  document
    .querySelector('.projetos-texto')
    .classList.toggle('contraste-projetos');

  document.querySelector('body').classList.toggle('contraste-body');

  document.querySelector('.sidebar').classList.toggle('contraste-sidebar');

  document.querySelector('.formacao').classList.toggle('contraste-formacao');

  let projeto = document.querySelectorAll('.projeto');
  projeto.forEach((el) => {
    el.classList.toggle('contraste-projeto');
  });

  let projetoHead = document.querySelectorAll('.projeto-head');
  projetoHead.forEach((el) => {
    el.classList.toggle('contraste-projeto');
  });

  let h3 = document.querySelectorAll('h3');
  h3.forEach((el) => {
    el.classList.toggle('contraste-color');
  });

  let span = document.querySelectorAll('span');
  span.forEach((el) => {
    el.classList.toggle('contraste-color');
  });

  let strong = document.querySelectorAll('strong');
  strong.forEach((el) => {
    el.classList.toggle('contraste-color');
  });

  let projetoTexto = document.querySelectorAll('.projeto-texto');
  projetoTexto.forEach((el) => {
    el.classList.toggle('contraste-projetos');
  });

  let contentIntroducao = document.querySelectorAll('.content p');
  contentIntroducao.forEach((el) => {
    el.classList.toggle('contraste-introducao');
  });

  let contrasteFaculdade = document.querySelectorAll('.faculdade');
  contrasteFaculdade.forEach((el) => {
    el.classList.toggle('contraste-faculdade');
  });

  document.querySelector('.content a').classList.toggle('contraste-introducao');

  document
    .querySelector('.formacao-texto')
    .classList.toggle('contraste-formacao-texto');

  document.querySelector('.default').classList.toggle('contraste-conhecimento');

  document.querySelector('.footer').classList.toggle('contraste-footer');
}
