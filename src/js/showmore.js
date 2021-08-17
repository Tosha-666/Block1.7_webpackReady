const repairBrands = document.querySelector('.repair-brands-wrapper__showed-768px');
const showMoreIcon = document.querySelectorAll('.show-more__icon')
const showMoreButton = document.querySelector('.show-more__aboutBrands');
const repairBrandsTechnicTypes = document.querySelector('.repair-brands-wrapper__showed-768px--technictypes');
const showMoreButtonTechnicTypes = document.querySelector('.show-more__about--technictypes');
const firstSlider = document.querySelectorAll('.repair-brands-wrapper__slides')
const secondSlider = document.querySelectorAll('.repair-brands-wrapper__slides--technictypes')
const showMoreAbout =  document.querySelector('.show-more__about')
const textSection =  document.querySelector('.main__wrapper--section--text')



const rotateShowMore = (button, e) => {
  for (let i = 0; i < showMoreIcon.length; i++){
      if (e.target == showMoreIcon[i] || button.contains(showMoreIcon[i])) {
        showMoreIcon[i].classList.toggle('open__icon');
      }
    }
}
const openAll = (a)=> {
   a.forEach(el => {
    if (getComputedStyle(el).display=='none'){
      el.classList.add('showed')
          } else if (el.classList.contains('showed')) {
      el.classList.remove('showed')
          }
    });
}


showMoreButton.addEventListener('click', (e) => {
  openAll(firstSlider);
  rotateShowMore(showMoreButton,e)
    }
  );

  showMoreAbout.addEventListener('click', (e) => {
    textSection.classList.toggle('fit__content')
  rotateShowMore(showMoreAbout,e)
    }
  );



  showMoreButtonTechnicTypes.addEventListener('click', (e) => {
    openAll(secondSlider);
    rotateShowMore(showMoreButtonTechnicTypes,e)
    
  }
  );

