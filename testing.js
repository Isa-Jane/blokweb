//declaratie van dom elementen
var zoekveld = document.querySelector('input');
var zoekbutton = document.querySelector('img');

//actie !
zoekbutton.addEventListener("click",function(){
  zoekveld.classList.toggle('show-search'); 
});



