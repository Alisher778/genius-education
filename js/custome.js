let     index = 0;
const   parentSlide = document.querySelectorAll('#slides-wrapper section');

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
var startSlide = setInterval(slide2, 7000);

document.querySelectorAll('.get-start-area').forEach(
    function(el) {
    el.addEventListener('mouseover', function() {
        clearInterval(startSlide);
    })

    el.addEventListener('mouseout', function() {
        setInterval(slide2, 7000);
    })
});
