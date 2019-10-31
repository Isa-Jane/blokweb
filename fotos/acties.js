var zoekbutton = document.querySelector('.filter');
var zoekveld = document.querySelector('form');
function show(){
	console.log('trdy')
	zoekveld.classList.toggle('showform')
}
zoekbutton.addEventListener('click',show);

