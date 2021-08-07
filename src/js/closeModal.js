const closeModalCall = document.querySelector('.call-close');
const closeModalFeedback= document.querySelector('.feedback-close');
const commonContainerBlurCall = document.querySelector('.common-container ');
const commonContainerBlurFeedback = document.querySelector('.common-container ');
const modalCall = document.querySelector('.modal__call');
const modalFeedback = document.querySelector('.modal__feedback');

/*
Последний вариант
const btnMenu = document.querySelector('.btn');
const menu = document.querySelector('.menu');
const toggleMenu = function() {
    menu.classList.toggle('open');
}

btnMenu.addEventListener('click', function(e) {
    e.stopPropagation();
    toggleMenu();
});

document.addEventListener('click', function(e) {
    const target = e.target;
    const its_menu = target == menu || menu.contains(target);
    const its_btnMenu = target == btnMenu;
    const menu_is_active = menu.classList.contains('open');
    
    if (!its_menu && !its_btnMenu && menu_is_active) {
        toggleMenu();
    }
});

*/

   // Предпоследний вариант для корректирования
/*if (blur) {
    blur.forEach(element => {
        element.addEventListener('click', (e) => {
    console.log(blur);
      if (e.target !== blur) {
        console.log(e.target);
        modalCall.classList.remove('active__call');
        commonContainerBlurFeedback.classList.remove('blur')
           }
    
    })
    });
//(let i = 0; i < blur.length; i++)

      
        
   }*/
//}
  /*closeModal();
        mobileMenu.classList.add('mobile-menu-close');
        mobileMenu.classList.remove('mobile-menu-active');
        document.body.style.overflow = '';
        overlayMenu.classList.remove('overlay');*/

  /*const closeModalCall = function () {
      modalCall.classList.remove('active__call');
      commonContainerBlurFeedback.classList.remove('blur')
   }
  */
const closeModalFunc = function (evt) {
    modalCall.classList.remove('active__modal');
    modalFeedback.classList.remove('active__modal');
    commonContainerBlurFeedback.classList.remove('blur')
     

  }
function outsideEvtListener(evt) {
    
    if (modalCall.classList.contains('active__modal')) {
        if (evt.target == modalCall || modalCall.contains(evt.target)&& evt.target !==closeModalCall) {
            return
        }
        closeModalFunc(evt);
    }
}
          
function outsideEvtListenerFeedback(evt) {
    
    if (modalFeedback.classList.contains('active__modal')) {
        if (evt.target == modalFeedback || modalFeedback.contains(evt.target)&& evt.target !== closeModalFeedback) {
                  
            return
        }
        closeModalFunc(evt);
    }
}
         
document.addEventListener('click', outsideEvtListener);
document.addEventListener('click', outsideEvtListenerFeedback);