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

function checkName(s){
    var letters =/^[A-Za-z]+$/;
    if (s ==""){
        alert("Enter your name");
        return false;
    }
    else{
        if(s.match(letters)){
            return true;
        }
        else{
            alert('Name must have only letters');
            s.focus();
            return false;
        }
    }  
}

function checkEmail(s){
    var letters = /^[0-9a-zA-Z]+$/;
    if (s==""){
         alert("Enter your email");
         return false;
    }else{
            if(s.match(letters)){
                return true;
            }
            else{
                alert('User email address must have only letters or numbers');
                s.focus();
                return false;
            }
        }
}
function checkPhone(s){
    var numbers = /^[0-9]+$/;
    if (s==""){
        alert("Enter your phone number");
        return false;
    }
    else{
        if(s.match(numbers)){
            return true;
        }
        else{
            alert('User phone number must have only numbers');
            s.focus();
            return false;
        }
    }
}

function check_form(){
    
    
    if(!checkName(document.forms[0].name.value)){
        return false;
    }

    if(!checkEmail(document.forms[0].email.value)){
        return false;
    }
    if(!checkPhone(document.forms[0].tel.value)){
        return false;
    }
    if (document.forms[0].message.value==""){
        alert("Enter your message");
        return false;
    }
    return true;
}

