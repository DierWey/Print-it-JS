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


function afficherImgsrc(imgsrc) {
	let bannerImg = document.querySelector('.banner-img')
	bannerImg.src = imgsrc
}

function afficherTagline(tagline) {
	let zoneTagline = document.querySelector('.zoneTagline')
	zoneTagline.innerHTML = tagline
}


arrow_right.addEventListener("click", () => {
	if(i < nbrSlides - 1)	
		i++;
	else
		i = 0;
	afficherImgsrc(listImage[i])
	afficherTagline(listTagline[i])
    console.log(i)
});
arrow_left.addEventListener("click", () => {
	if(i > 0)	
		i--;
	else
		i = nbrSlides - 1;
	afficherImgsrc(listImage[i])
	afficherTagline(listTagline[i])
    console.log(i)
});


