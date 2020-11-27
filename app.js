// set lists
var quotes = [
	"Tim Ruscica: <q>Lets do an example with Y because Y not?</q>", 
	"Linus Sebastian: <q>Just for lolz.</q>", 
	"if (about_to_lose) {<br>&emsp;don't()<br>}",
	"Arjan Bakker: <q>Bijna goed dus helemaal fout.</q>",
	"while alive:<br>&emsp;Eat(1)<br>&emsp;Code(16)<br>&emsp;Sleep(7)",
	"Jeremy Clarkson: <q>This is brilliant, but I like this</q>"];

// setup site
const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 50) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

// set about me
var d = new Date();

var cdate = d.getFullYear();

var age = cdate - 2006

var about_me = "Mijn naam is <span style='color: blue'>Martijn Vriesman</span>.<br>Ik ben <span style='color: blue'>" + age.toString() + " jaar</span> oud.<br>Ik doe vwo op het <span style='color: blue'>Antoniuscollege</span> in Gouda.<br>Mijn interesse zit in <span style='color: blue'>computers</span> en <span style='color: blue'>muziek</span>."

document.getElementById("about_me_text").innerHTML = about_me

// random numer
function randomInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
  }

var random = randomInteger(0, quotes.length - 1)
// quotes
var quote = quotes[random]

document.getElementById("quotes").innerHTML = quote