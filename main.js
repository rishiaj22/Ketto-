// For Nav Bar 
let open_menu = document.querySelector('.fa-bars');
let close_menu = document.querySelector('.fa-xmark');
let active = document.querySelector('.nav_option');
let logo = document.querySelector("#logo");

open_menu.addEventListener('click',function(){
    active.classList.add('active');
});
close_menu.addEventListener('click',function(){
    active.classList.remove('active');
});

// For Sub Nav Bar
let open_sub_menu = document.querySelector('#open_sub_menu');
let sub_menu_active = document.querySelector('.sub_nav_link');

open_sub_menu.addEventListener('click', function () {
    sub_menu_active.classList.toggle('active');
});

// For navBar Scroll
var lastScrollTop = 0;
var navbar = document.getElementById('nav');
var threshold = 200;
window.addEventListener('scroll', function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > threshold) {
        navbar.style.top = "-70px";
    } else {
        navbar.style.top = "0";
    }
    lastScrollTop = scrollTop;
});

// For scrollImages
let imgScroll = document.querySelector('#sideScroller1');
let arrowBtn  = document.querySelectorAll('#scrollBtn>div');

arrowBtn.forEach(btn=>{
    btn.addEventListener('click',function(){
        const firstDivWidth = imgScroll.querySelector(".scroll_div").offsetWidth;
        imgScroll.scrollLeft += btn.id == "leftBtn" ? -firstDivWidth-30 :firstDivWidth+30;
    });
});

// For Sucess Div Scroller
document.addEventListener("DOMContentLoaded", function () {
    let successScroll = document.querySelector('#success');
    let arrowBtn2 = document.querySelectorAll('#successBtn>div');
    
    arrowBtn2.forEach(btn => {
      btn.addEventListener('click', function () {
        let firstDivWidth2 = successScroll.querySelector(".successImg").offsetWidth;
        successScroll.scrollLeft += btn.id == "leftB" ? -firstDivWidth2 : firstDivWidth2;
      });
    });
  });

// For Featured Div
let featured = document.querySelector('#featuredIn');
let arrowBtn3  = document.querySelectorAll('#featuredBtn>div');

arrowBtn3.forEach(btn=>{
    btn.addEventListener('click',function(){
        const firstDivWidth3 = featured.querySelector(".feature_div").offsetWidth;
        featured.scrollLeft += btn.id == "lButton" ? -firstDivWidth3-20 :firstDivWidth3+20;
    });
});

// For Contact 
var lastScrollTop2 = 0;
var details = document.getElementById('details');
var threshold2 = 200; 
var isDetailsVisible = false;

window.addEventListener('scroll', function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (!isDetailsVisible && scrollTop > threshold2) {
        details.style.bottom = "0";
        details.style.position = "fixed";
        isDetailsVisible = true;
    } else if (isDetailsVisible && scrollTop <= threshold2) {
        details.style.bottom = "-100%"; 
        details.style.position = "absolute"; 
        isDetailsVisible = false;
    }

    lastScrollTop2 = scrollTop;
});

// For Details
var textInput1 = document.getElementById('textInput1');
var textInput2 = document.getElementById('textInput2');
var textInput3 = document.getElementById('textInput3');

function handleFocus(label) {
    label.style.top = '5px';
    label.style.fontSize = '12px';
}

function handleBlur(label, input) {
    if (!input.value) {
        label.style.top = '50%';
        label.style.fontSize = '16px';
    }
}

function handleInput(label, input) {
    if (input.value) {
        label.style.top = '5px';
        label.style.fontSize = '12px';
    }
}

textInput1.addEventListener('focus', function() {
    handleFocus(document.querySelector('label[for="textInput1"]'));
});

textInput1.addEventListener('blur', function() {
    handleBlur(document.querySelector('label[for="textInput1"]'), textInput1);
});

textInput2.addEventListener('focus', function() {
    handleFocus(document.querySelector('label[for="textInput2"]'));
});

textInput2.addEventListener('blur', function() {
    handleBlur(document.querySelector('label[for="textInput2"]'), textInput2);
});

textInput3.addEventListener('focus', function() {
    handleFocus(document.querySelector('label[for="textInput3"]'));
});

textInput3.addEventListener('blur', function() {
    handleBlur(document.querySelector('label[for="textInput3"]'), textInput3);
});
