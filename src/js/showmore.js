const repairBrands = document.querySelector('.repair-brands-wrapper__showed-768px');
const showMoreIcon = document.querySelectorAll('.show-more__icon')
const showMoreButton = document.querySelector('.show-more__aboutBrands');
const repairBrandsTechnicTypes = document.querySelector('.repair-brands-wrapper__showed-768px--technictypes');
const showMoreButtonTechnicTypes = document.querySelector('.show-more__about--technictypes');


let rotateShowMore = (button, e) => {
  for (let i = 0; i < showMoreIcon.length; i++){
      if (e.target == showMoreIcon[i] || button.contains(showMoreIcon[i])) {
        showMoreIcon[i].classList.toggle('open__icon');
      }
    }
}
  
  showMoreButton.addEventListener('click', (e) => {
    repairBrands.classList.toggle('showed');
    rotateShowMore(showMoreButton,e)
    }
  );



  showMoreButtonTechnicTypes.addEventListener('click', (e) => {
    repairBrandsTechnicTypes.classList.toggle('showed');
    rotateShowMore(showMoreButtonTechnicTypes,e)
    
  }
  );

