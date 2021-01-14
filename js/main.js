function burgerMenu(selector) {
  let menu = $(selector);
  let button = menu.find(".burger__menu-button");
  let links = menu.find('.menu__list-link');
  let overlay = menu.find('.burger__menu-overlay');
  button.on("click", (e) => {
    e.preventDefault();
    toggleMenu();
  });
  links.on('click', () => toggleMenu());
  overlay.on('click', () => toggleMenu());
  function toggleMenu() {
    menu.toggleClass('burger__menu-active');
    if (menu.hasClass('burger__menu-active')) {
      $('body').css('overflow', 'hidden');
    } else {
      $('body').css('overflow', 'visible');
    }
  }
}
burgerMenu(".burger__menu");
