const feedbackButton = document.querySelectorAll('.modal__feedback--button');
const modalFeedback = document.querySelector('.modal__feedback');
const commonContainerBlurFeedback = document.querySelector('.common-container ');
const mainMenu = document.querySelector('.menu-list')


for (let i = 0; i < feedbackButton.length; i++){
  feedbackButton[i].addEventListener('click', (e) => {
    if (document.documentElement.clientWidth >= 640) {
        modalFeedback.classList.add('active__modal');
      commonContainerBlurFeedback.classList.add('blur')
      e.stopPropagation();
    }
    else {
      mainMenu.style.display='none';
      modalFeedback.classList.add('active__modal');
      commonContainerBlurFeedback.classList.add('blur')
      e.stopPropagation();
    }
      }
    
 );
}

/*
closeModalFeedback.addEventListener('click', (e) => {
  //console.log(e.target);
 //if (modalCall.classList.contains ('active__call')) {
 // if (e.target !== modalCall) {
    console.log(e.target);
    modalFeedback.classList.remove('active__feedback');
  commonContainerBlurFeedback.classList.remove('blur')
  
      /*closeModal();
      mobileMenu.classList.add('mobile-menu-close');
      mobileMenu.classList.remove('mobile-menu-active');
      document.body.style.overflow = '';
      overlayMenu.classList.remove('overlay');*/
  // }
  
  //}
 //return
  //});
