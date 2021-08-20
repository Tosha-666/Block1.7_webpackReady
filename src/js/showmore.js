const repairBrands = document.querySelector('.repair-brands-wrapper__container');
const showMoreIcon = document.querySelectorAll('.show-more__icon');
const showMoreButton = document.querySelector('.show-more__aboutBrands');
const repairBrandsTechnicTypes = document.querySelector('.repair-brands-technictypes-wrapper__container');
const showMoreButtonTechnicTypes = document.querySelector('.show-more__about--technictypes');
const firstSlider = repairBrands.querySelectorAll('.repair-brands-wrapper__slides');
const secondSlider = repairBrandsTechnicTypes.querySelectorAll('.repair-brands-wrapper__slides--technictypes');
const showMoreAbout = document.querySelector('.show-more__about');
const textSection = document.querySelector('.main__wrapper--section--text');
const repairBrandsSlide = repairBrands.querySelector('.repair-brands-wrapper__slides');
const repairBrandsSlideTechnicTypes = repairBrandsTechnicTypes.querySelector('.repair-brands-wrapper__slides--technictypes')
const rotateShowMore = (button, e) => {
  for (let i = 0; i < showMoreIcon.length; i++){
      if (e.target == showMoreIcon[i] || button.contains(showMoreIcon[i])) {
        showMoreIcon[i].classList.toggle('open__icon');
      }
    }
}
const rotateSrc = () => {
  for (let i = 0; i < showMoreIcon.length; i++) {
    if (showMoreIcon[i].classList.contains('open__icon')) {
      showMoreIcon[i].classList.remove('open__icon');
    }
  }
  }
  
const openAll = (a) => {
  let j = 0;
  for (let i = 0; i < a.length; i++){
    
             if (a[i].classList.contains('showed')) {
           j++
           
      }
      
  }
  if (j == a.length) {
    openResize()
  } else {
    a.forEach(el => {
      if (getComputedStyle(el).display == 'none') {
        el.classList.add('showed')
      }
    });
  }
}
const openAllTechnicTypes = (a) => {
  let j = 0;
  for (let i = 0; i < a.length; i++){
    
             if (a[i].classList.contains('showed')) {
           j++
      }
  }
  if (j == a.length) {
    openResizeTechnicTypes()
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
const openResizeTechnicTypes = () => {
  let repairBrandsSlideTechnicTypesWidth = repairBrandsSlideTechnicTypes.offsetWidth;
  let repairBrandsTechnicTypesWidth = repairBrandsTechnicTypes.offsetWidth;
   let numberOfElementsTechnicTypes = Math.floor(repairBrandsTechnicTypesWidth / (repairBrandsSlideTechnicTypesWidth + 16))
    if (document.documentElement.clientWidth > 768) {
    for (let i = 0; i < secondSlider.length; i++) {
        secondSlider[i].classList.remove('showed')
      for (let i = 0; i <numberOfElementsTechnicTypes; i++) {
        secondSlider[i].classList.add('showed')
      }
    }
  } 
}
const resizeHandler = () => {
  openResize()
  openResizeTechnicTypes()
  rotateSrc()
}

openResize()
openResizeTechnicTypes()
window.addEventListener('resize', resizeHandler);

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
    openAllTechnicTypes(secondSlider);
    rotateShowMore(showMoreButtonTechnicTypes,e)
  }
  );

