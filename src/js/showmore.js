const repairBrands = document.querySelector('.repair-brands-wrapper__container');
const showMoreIcon = document.querySelectorAll('.show-more__icon');
const showMoreButton = document.querySelector('.show-more__aboutBrands');
const repairBrandsTechnicTypes = document.querySelector('.repair-brands-wrapper__showed-768px--technictypes');
const showMoreButtonTechnicTypes = document.querySelector('.show-more__about--technictypes');
const firstSlider = repairBrands.querySelectorAll('.repair-brands-wrapper__slides');
const secondSlider = document.querySelectorAll('.repair-brands-wrapper__slides--technictypes');
const showMoreAbout = document.querySelector('.show-more__about');
const textSection = document.querySelector('.main__wrapper--section--text');
const repairBrandsSlide = repairBrands.querySelector('.repair-brands-wrapper__slides');
console.log(showMoreIcon)


const rotateShowMore = (button, e) => {
  for (let i = 0; i < showMoreIcon.length; i++){
      if (e.target == showMoreIcon[i] || button.contains(showMoreIcon[i])) {
        showMoreIcon[i].classList.toggle('open__icon');
      }
    }
}

const openAll = (a) => {
  let j = 0;
  for (let i = 0; i < firstSlider.length; i++){
    
             if (firstSlider[i].classList.contains('showed')) {
           j++
           
      }
      
  }
  if (j == firstSlider.length) {
    openResize()
  } else {
    a.forEach(el => {
      if (getComputedStyle(el).display == 'none') {
        el.classList.add('showed')
      }
    });
  }
}
const openResize = () => {
  let repairBrandsSlideWidth = repairBrandsSlide.offsetWidth;
  let repairBrandsWidth = repairBrands.offsetWidth;
  let numberOfElements=Math.floor(repairBrandsWidth / (repairBrandsSlideWidth+16))
  if (document.documentElement.clientWidth > 768 && document.documentElement.clientWidth <= 1895) {
    for (let i = 0; i < firstSlider.length; i++) {
        firstSlider[i].classList.remove('showed')
      for (let i = 0; i < numberOfElements * 2; i++) {
        firstSlider[i].classList.add('showed')
      }
    }
  } else if (document.documentElement.clientWidth > 1895) {
      for (let i = 0; i < firstSlider.length; i++) {
      firstSlider[i].classList.add('showed')
    }
  }
}


openResize()
window.addEventListener('resize', openResize);



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

