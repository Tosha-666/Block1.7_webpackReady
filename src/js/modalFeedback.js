const feedbackButton = document.querySelectorAll('.modal__feedback--button');
const modalFeedback = document.querySelector('.modal__feedback');
const commonContainerBlurFeedback = document.querySelector('.common-container ');
const mainMenu = document.querySelector('.menu-list');

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
      commonContainerBlurFeedback.classList.add('blur');
      mainMenu.style.display = "none";
      e.stopPropagation();
    }
      }
 );
}


