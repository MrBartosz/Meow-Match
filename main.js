let currentCatIndex1 = 1; 
let currentCatIndex2 = 1000; 
  
  
function changeCat1() {
    const catImg = document.querySelector('.cat2'); 
    const catUrl = `https://cataas.com/cat?${currentCatIndex2 - 1}`
    catImg.src = catUrl; 
    currentCatIndex2 -= 1;
}

function changeCat2() {
  const catImg = document.querySelector('.cat1'); 
  const catUrl = `https://cataas.com/cat?${currentCatIndex1 + 1}`
  catImg.src = catUrl; 
  currentCatIndex1 += 1;
}