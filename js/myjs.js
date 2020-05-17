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

let toTop = document.getElementById('show'); 
let formBut = document.getElementById('mail');
toTop.hidden = true;

toTop.addEventListener('mouseover',function(){
	toTop.style.background = 'blue';
})
toTop.addEventListener('mouseout',function(){
	toTop.style.background = '#202126';
})
formBut.addEventListener('mouseover',function(){
	formBut.style.background = 'blue';
})
formBut.addEventListener('mouseout',function(){
	formBut.style.background = '#202126';
})

window.addEventListener('scroll', function() {
     toTop.hidden = (pageYOffset < document.documentElement.clientHeight);
});
toTop.addEventListener('click',function(){
	window.scrollTo(pageXOffset,0);
})
let them_change = document.getElementById('them_change');
them_change.addEventListener('click',function(){
	if(them_change.className === 'change-but-black'){
        them_change.style.display = 'none';
		document.getElementById('header').style.background = 'white';
		document.getElementById('nav-menu').style.background = 'rgba(255,255,255,0.91)';
		document.getElementsByClassName('menu__btn')[0].className+='-second';
		document.body.style.backgroundImage = "url('./img/back2.jpg')";
        document.getElementsByClassName('footer-text')[0].style.color = 'black';
        document.getElementById('footer').style.background = 'white';
        document.getElementById('show').style.background = 'white';
        document.getElementById('mail').style.background = 'white';
        document.getElementsByClassName('fas fa-angle-double-up')[0].style.color = 'black';
        document.getElementsByClassName('fas fa-question')[0].style.color = 'black';
        let foot_list = document.getElementsByClassName('footer-list-item');
		let head_list = document.getElementsByClassName('nav-item');
        for(var i=0; i < head_list.length; i++) { 
            head_list[i].style.color = 'black';
        }
        for(var i=0; i < foot_list.length; i++) { 
            foot_list[i].style.color = 'black';
        }
        them_change.className = 'change-but-white';
        them_change.style.display = 'block';
	}
	else if (them_change.className ==='change-but-white'){
        document.getElementById('header').style.background = 'black';
        document.getElementById('nav-menu').style.background = 'rgba(22,22,22,0.91)';
        document.getElementsByClassName('menu__btn-second')[0].className='menu__btn';
        document.body.style.backgroundImage = "url('./img/back5.jpg')";
        document.getElementsByClassName('footer-text')[0].style.color = 'white';
        document.getElementById('footer').style.background = 'black';
        document.getElementById('show').style.background = '#202126';
        document.getElementById('mail').style.background = '#202126';
        document.getElementsByClassName('fas fa-angle-double-up')[0].style.color = 'white';
        document.getElementsByClassName('fas fa-question')[0].style.color = 'white';
        let foot_list = document.getElementsByClassName('footer-list-item');
        let head_list = document.getElementsByClassName('nav-item');
        for(var i=0; i < head_list.length; i++) { 
            head_list[i].style.color = 'white';
        } 
        for(var i=0; i < foot_list.length; i++) { 
            foot_list[i].style.color = 'white';
        }
        them_change.className = 'change-but-black';
        them_change.style.display = 'block';


	}
})



