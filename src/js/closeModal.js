const closeModalCall = document.querySelector('.call-close');
const closeModalFeedback= document.querySelector('.feedback-close');
const commonContainerBlurCall = document.querySelector('.common-container ');
const commonContainerBlurFeedback = document.querySelector('.common-container ');
const modalCall = document.querySelector('.modal__call');
const modalFeedback = document.querySelector('.modal__feedback');
const mainMenu = document.querySelector('.menu-list');

const closeModalFunc = function (evt) {
    modalCall.classList.remove('active__modal');
    modalFeedback.classList.remove('active__modal');
    commonContainerBlurFeedback.classList.remove('blur')
    mainMenu.style.display = "block";
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