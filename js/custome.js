let     index = 0;
const   parentSlide = document.querySelectorAll('#slides-wrapper section');
const width = window.innerWidth;
// function slide() {
//     parentSlide.forEach(function(sec) {
//         sec.style.display = 'none';
//     });
//     if(index<parentSlide.length) {
//         parentSlide[index].style.display = 'block';
//         index++;
//     } else {
//         parentSlide[0].style.display = 'block';
//         index = 0;
//     }
 
   
// }

// setInterval(slide, 2000);

function slide2() {
    if(index<parentSlide.length) {
        const w = window.innerWidth*index;
        parentSlide[0].style.marginLeft = -w+'px';
        index++;
    } else {
        parentSlide[0].style.cssText = 'margin-left: 0; transition: 0';
        index = 0;
    }
 
   
}
setInterval(slide2, 3000);