const repairBrands = document.querySelector('.repair-brands-wrapper__showed-768px');


const showMoreButton = document.querySelector('.show-more__aboutBrands');

//const pageWidth = document.documentElement.scrollWidth;
//console.log(pageWidth);


showMoreButton.addEventListener('click', () => {
      repairBrands.classList.toggle('showed');
  }
 );

console.log(repairBrands);


const repairBrandsTechnicTypes = document.querySelector('.repair-brands-wrapper__showed-768px--technictypes');


const showMoreButtonTechnicTypes = document.querySelector('.show-more__about--technictypes');

//const pageWidth = document.documentElement.scrollWidth;
//console.log(pageWidth);


showMoreButtonTechnicTypes.addEventListener('click', () => {
      repairBrandsTechnicTypes.classList.toggle('showed');
  }
 );

console.log(repairBrands);