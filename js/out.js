
  window.onscroll = () => {
    const nav = document.querySelector('nav');
    if(this.scrollY <= 10) nav.className = 'top-navigation container'; else nav.className = 'top-navigation container scroll';
  };

//slider

document.addEventListener("DOMContentLoaded", function () {
    var next = document.querySelector('#next');
    var prev = document.querySelector('#prev');
    var list= document.querySelectorAll('.slider-slides-cnt .sec1__slider');
    var dotsList = document.querySelectorAll('.slider-dots .slider-dots-element');
    console.log(list);
    var idImg= 0;

    
   function getVisible(arr1, arr2) {
       for (var i = 0; i < 1; i++) {
           var firstChildOfElements= arr1[0];
           var firstChildOfDots= arr2[0];
           firstChildOfElements.classList.add('sec1__slider--active');
           firstChildOfDots.classList.add('slider-dots-element--active');
       }

   }
getVisible(list, dotsList);


   next.addEventListener('click', function () {

    
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

    


//hamburger

var a = document.querySelector(".hamburger");
var b = document.querySelector(".top-navigation-mobile__links");
var c = document.querySelector("nav");
var d = document.querySelector(".navigation__logo");
var e = document.querySelector("header");
var f = document.querySelector(".sec1__content");

a.addEventListener("click", function () {
    this.classList.toggle("is-active");
    this.classList.toggle("navigation--rest");
    b.classList.toggle("navigation--rest");
    c.classList.toggle("mobile__nav--active");
    c.classList.toggle("container");
    c.classList.toggle("background-white");
    d.classList.toggle("navigation--rest");
    e.classList.toggle("header--hamburger");
    f.classList.toggle("sec1__content--hamburger")
    
});
