const tabsBtn = document.querySelectorAll('.filter__button');
const tabsItems = document.querySelectorAll('.offers__list');


tabsBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    const activeBtn = btn;
    const tabId = activeBtn.getAttribute('data-tab');
    const currentTab = document.querySelector(tabId);

    if (!activeBtn.classList.contains('filter__button--active')) {

      tabsBtn.forEach((item) => {
        item.classList.remove('filter__button--active');
      });

      tabsItems.forEach((item) => {
        item.classList.remove('offers__list--active');
      });

      activeBtn.classList.add('filter__button--active');
      currentTab.classList.add('offers__list--active');
    }
  });
});
