let     index = 0;
const   parentSlide = document.querySelectorAll('#slides-wrapper section');
const width = window.innerWidth;
function slide() {
    parentSlide.forEach(function(sec) {
        sec.style.display = 'none';
    });
    if(index<parentSlide.length) {
        parentSlide[index].style.display = 'block';
        index++;
    } else {
        index = 0;
    }
 
   
}

setInterval(slide, 2000);