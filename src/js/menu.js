const openmenu = document.querySelector('#main__menu-burger');
const menu = document.querySelector('.menu-list ');
const commoncontainer = document.querySelector('.common-container ');
const closeMenuButton = document.querySelector('.menu-header__close');
//const pageWidth = document.documentElement.scrollWidth;
//console.log(pageWidth);


openmenu.addEventListener('click', (e) => {
    menu.classList.add('active-menu');
  commoncontainer.classList.add('blur')
  e.stopPropagation();
      }
 );

 const closeMenuFunction = function () {
  menu.classList.remove('active-menu');
  commonContainerBlurFeedback.classList.remove('blur')
   

}
 function closeMenu(evt) {
    
  if (menu.classList.contains('active-menu')) {
      if (evt.target == menu || menu.contains(evt.target) && evt.target !== closeMenuButton) {
       return
      }
    closeMenuFunction();
      
  }
}
       
document.addEventListener('click', closeMenu);


