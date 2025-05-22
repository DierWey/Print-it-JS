const listImage = [
	"./assets/images/slideshow/slide1.jpg",
	"./assets/images/slideshow/slide2.jpg",
	"./assets/images/slideshow/slide3.jpg",
	"./assets/images/slideshow/slide4.png" 
]
const listTagline = [ 
	"Impressions tous formats <span>en boutique et en ligne</span>",
	"Tirages haute définition grand format <span>pour vos bureaux et events</span>",
	"Grand choix de couleurs <span>de CMJN aux pantones</span>",
	"Autocollants <span>avec découpe laser sur mesure</span>"
]

const arrow_right = document.querySelector('.arrow_right');
const arrow_left = document.querySelector('.arrow_left');
const dots = document.querySelector('.dots');
const nbrSlides = dots.childElementCount;
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
	displayImgsrc(listImage[i]);
	displayTagline(listTagline[i]);
	setBullet(i);
});
arrow_left.addEventListener("click", () => {
	unsetBullet(i);
	if(i > 0)	
		i--;
	else
		i = nbrSlides - 1;
	displayImgsrc(listImage[i]);
	displayTagline(listTagline[i]);
	setBullet(i);
});


