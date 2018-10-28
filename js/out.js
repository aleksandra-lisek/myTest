
document.addEventListener("DOMContentLoaded", function () {
    var next = document.querySelector('#next');
    var prev = document.querySelector('#prev');
    var list= document.querySelectorAll('.slider-slides-cnt .sec1__slider');
    var dotsList = document.querySelectorAll('.slider-dots .slider-dots-element');
    console.log(list);
    var idImg= 0;
/////////
//ustawienie class=visible do pierwszego zdjęcia
//////////
   function getVisible(arr1, arr2) {
       for (var i = 0; i < 1; i++) {
           var firstChildOfElements= arr1[0];
           var firstChildOfDots= arr2[0];
           firstChildOfElements.classList.add('sec1__slider--active');
           firstChildOfDots.classList.add('slider-dots-element--active');
       }

   }
getVisible(list, dotsList);
/////////
//eventy do guzików
//////////

   next.addEventListener('click', function () {
       // console.log('kliknęło się');
       list[idImg].classList.remove('sec1__slider--active');
       dotsList[idImg].classList.remove('slider-dots-element--active');
       idImg++;
       if (idImg>=3) {
           idImg=0;

       }
       list[idImg].classList.add('sec1__slider--active');
       dotsList[idImg].classList.add('slider-dots-element--active');


   });

   prev.addEventListener('click', function () {
       // console.log('kliknęło się');
       list[idImg].classList.remove('sec1__slider--active');
       dotsList[idImg].classList.remove('slider-dots-element--active');
       idImg--;
       if (idImg== -1) {
           idImg= 2;
       }
       console.log(idImg);
       list[idImg].classList.add('sec1__slider--active');
       dotsList[idImg].classList.add('slider-dots-element--active');

   });
});
