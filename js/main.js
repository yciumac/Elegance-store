document.querySelector('.menu-icon-wrapper').onclick = function(){
   document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
   // document.querySelector('.nav__list-holder').style.display = "block"; //
   document.querySelector('.nav__list-holder').classList.toggle('nav__list-holder--visible');
};