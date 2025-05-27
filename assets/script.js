const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
const pathImg = "./assets/images/slideshow/";
const arrow_right = document.querySelector('.arrow_right');
const arrow_left = document.querySelector('.arrow_left');
const dots = document.querySelector('.dots');
const nbrSlides = slides.length;
let i = 0;


function displayImgsrc(imgsrc) {
	let bannerImg = document.querySelector('.banner-img');
	bannerImg.src = imgsrc;
}

function displayTagline(tagline) {
	let zoneTagline = document.querySelector('.zoneTagline');
	zoneTagline.innerHTML = tagline;
}

function unsetBullet(dotselect) {
	document.getElementById("dot" + dotselect).classList.remove("dot_selected");
}
function setBullet(dotselect) {
	document.getElementById("dot" + dotselect).classList.add("dot_selected");
}

arrow_right.addEventListener("click", () => {
	unsetBullet(i);
	if(i < nbrSlides - 1)	
		i++;
	else
		i = 0;
	displayImgsrc(pathImg + slides[i].image);
	displayTagline(slides[i].tagLine);
	setBullet(i);
});
arrow_left.addEventListener("click", () => {
	unsetBullet(i);
	if(i > 0)	
		i--;
	else
		i = nbrSlides - 1;
	displayImgsrc(pathImg + slides[i].image);
	displayTagline(slides[i].tagLine);
	setBullet(i);
});


