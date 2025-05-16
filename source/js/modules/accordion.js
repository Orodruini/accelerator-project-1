const titles = document.querySelectorAll('.faq__item');
const buttons = document.querySelectorAll('.faq__button');
const contents = document.querySelectorAll('.faq__container-answer');
const dataAccord = document.querySelector('[data-accord="accord-1"]');
const idAccord = document.querySelector('#accord-1');

titles.forEach((item) => item.addEventListener('click', () => {
  const activeContent = document.querySelector(`#${item.dataset.accord}`);
  const activeButton = document.querySelector(`#${item.dataset.accords}`);

  if (activeContent.classList.contains('faq__container-answer--active')) {
    activeContent.classList.remove('faq__container-answer--active');
    activeButton.classList.remove('faq__button--active');
    item.classList.remove('faq__item--active');
    activeContent.style.maxHeight = 0;
  } else {
    contents.forEach((element) => {
      element.classList.remove('faq__container-answer--active');
      element.style.maxHeight = 0;
    });

    buttons.forEach((element) => {
      element.classList.remove('faq__button--active');
    });

    titles.forEach((element) => element.classList.remove('faq__item--active'));
    item.classList.add('faq__item--active');

    activeButton.classList.add('faq__button--active');

    activeContent.classList.add('faq__container-answer--active');
    activeContent.style.maxHeight = `${activeContent.scrollHeight}px `;
  }
}));

dataAccord.classList.add('faq__item--active');
idAccord.classList.add('faq__container-answer--active');
idAccord.style.maxHeight = `${document.querySelector('#accord-1').scrollHeight}px`;
