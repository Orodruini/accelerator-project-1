const tabsBtn = document.querySelectorAll('.question-answer__button');
const tabsItems = document.querySelectorAll('.faq');


tabsBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    const activeBtn = btn;
    const tabId = activeBtn.getAttribute('data-tabs');
    const currentTab = document.querySelector(tabId);

    if (!activeBtn.classList.contains('question-answer__button--active')) {

      tabsBtn.forEach((item) => {
        item.classList.remove('question-answer__button--active');
      });

      tabsItems.forEach((item) => {
        item.classList.remove('faq--active');
      });

      activeBtn.classList.add('question-answer__button--active');
      currentTab.classList.add('faq--active');
    }
  });
});
