'use strict';
function clickText(id){

    let el = document.getElementById(id);
    if (el.style.display==='inline-block'){
        el.style.display='none'
    }
    else{
        el.style.display='inline-block';
    }
}

function openSubmenu(){
    let el = document.getElementById('ph');
    if (el.style.display==='block'){
        el.style.display='none'
    }
    else{
        el.style.display='block';
    }
}

var slideIndex = 1;
showSlides(slideIndex);



function plusSlide() {
    showSlides(slideIndex += 1);
}


function minusSlide() {
    showSlides(slideIndex -= 1);
}


function currentSlide(n) {
    showSlides(slideIndex = n);
}


function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";

}

function open_form(){
    let el = document.getElementById('form');
    if (el.style.display==='block'){
        el.style.display='none'
    }
    else{
        el.style.display='block';
    }
}