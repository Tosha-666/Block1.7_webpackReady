const repairBrands = document.querySelector('.repair-brands-wrapper__showed-768px');
const coshowMoreIcon = document.querySelectorAll('.show-more__icon');
const showMoreButton = document.querySelector('.show-more__aboutBrands');
const repairBrandsTechnicTypes = document.querySelector('.repair-brands-wrapper__showed-768px--technictypes');
const showMoreButtonTechnicTypes = document.querySelector('.show-more__about--technictypes');
const firstSlider = repairBrands.querySelectorAll('.repair-brands-wrapper__slides');
const secondSlider = document.querySelectorAll('.repair-brands-wrapper__slides--technictypes');
const showMoreAbout = document.querySelector('.show-more__about');
const textSection = document.querySelector('.main__wrapper--section--text');
const repairBrandsSlide = repairBrands.querySelector('.repair-brands-wrapper__slides');
console.log()
const repairBrandsSlideWidth = repairBrandsSlide.offsetWidth;
const repairBrandsWidth = repairBrands.offsetWidth;


const rotateShowMore = (button, e) => {
  for (let i = 0; i < showMoreIcon.length; i++){
      if (e.target == showMoreIcon[i] || button.contains(showMoreIcon[i])) {
        showMoreIcon[i].classList.toggle('open__icon');
      }
    }
}

/*const openAll = (a)=> {
   a.forEach(el => {
    if (getComputedStyle(el).display=='none'){
      el.classList.add('showed')
          } else if (el.classList.contains('showed')) {
      el.classList.remove('showed')
          }
    });
}*/
const openAll = () => {
  let numberOfElements=Math.floor(repairBrandsWidth / (repairBrandsSlideWidth+16))
  console.log(numberOfElements)
  console.log(repairBrandsWidth)
  console.log(repairBrandsSlideWidth)
  if (document.documentElement.clientWidth > 768) {
    for (let i = 0; i <= numberOfElements*2; i++){
      console.log(i);
      console.log(firstSlider);
      firstSlider[i].classList.add('showed')
    }
  }
 /* if ((repairBrandsWidth - ((Math.floor(repairBrandsWidth / (repairBrandsSlideWidth+16))) * repairBrandsSlideWidth)) > repairBrandsSlideWidth) {
   console.log('правда')
  } else {
    console.log('ложь')
 }
*/
}
openAll()

window.addEventListener('resize', openAll);

showMoreButton.addEventListener('click', (e) => {
  //openAll();
  rotateShowMore(showMoreButton,e)
    }
  );

  showMoreAbout.addEventListener('click', (e) => {
    textSection.classList.toggle('fit__content')
  rotateShowMore(showMoreAbout,e)
    }
  );



  showMoreButtonTechnicTypes.addEventListener('click', (e) => {
    //openAll(secondSlider);
    rotateShowMore(showMoreButtonTechnicTypes,e)
    
  }
  );

