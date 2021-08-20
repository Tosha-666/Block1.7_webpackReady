const callButton = document.querySelectorAll('.modal__call--button');
const modalCall = document.querySelector('.modal__call');
const commonContainerBlurCall = document.querySelector('.common-container ');
const mainMenu = document.querySelector('.menu-list');

for (let i = 0; i < callButton.length; i++){
  callButton[i].addEventListener('click', (e) => {
    if (document.documentElement.clientWidth >= 640) {
      modalCall.classList.add('active__modal');
      commonContainerBlurCall.classList.add('blur')
      e.stopPropagation();
        
    }
    else {
      modalCall.classList.add('active__modal');
      commonContainerBlurCall.classList.add('blur')
      mainMenu.style.display = "none";
      e.stopPropagation();
    }
  }
 );
}





