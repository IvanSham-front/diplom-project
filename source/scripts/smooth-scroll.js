const aServicesElArr = Array.prototype.slice.call(aServicesEl);
const aPortfolioElArr = Array.prototype.slice.call(aPortfolioEl);
const aCostElArr = Array.prototype.slice.call(aCostEl);


for (let i = 0; i < aServicesElArr.length; i++) {
  aServicesElArr[i].addEventListener('click', function(e){
    e.preventDefault();
    forServicesEl.scrollIntoView({behavior: 'smooth'});
  })
}

for (let i = 0; i < aPortfolioElArr.length; i++) {
  aPortfolioElArr[i].addEventListener('click', function(e){
    e.preventDefault();
    forPortfolioEl.scrollIntoView({behavior: 'smooth'});
  })
}

for (let i = 0; i < aCostElArr.length; i++) {
  aCostElArr[i].addEventListener('click', function(e){
    e.preventDefault();
    forCostEl.scrollIntoView({behavior: 'smooth'});
  })
}
