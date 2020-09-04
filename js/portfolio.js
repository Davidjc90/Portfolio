/*Declare Variables First*/
var hamburgerButton = document.querySelector('.hamburger_button');
var mobileNav = document.querySelector('.mobile');

/*Process*/
/*
====
Function Open
====
*/
function opennavmobile() {
	mobileNav.classList.add('open');
}
/*
====
Function close
====
*/
function closenavmobile() {
	mobileNav.classList.remove('open');
}

/*
Event to capture click and process the function
*/
/*to open*/
hamburgerButton.addEventListener('click',opennavmobile);
/*to close*/
mobileNav.addEventListener('click', closenavmobile);

/*

aplly this class when clicked
.blured {
    left: -200px !important;
    filter: blur(5px);
}

*/