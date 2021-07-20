document.addEventListener('keydown', function(event) {
if(event.code == "KeyZ") 
{
  moveLeft();
}
if (event.code == "KeyX") {
  moveRight();
}
if (event.code == "KeyC") {
  let hero = document.getElementById('hero');
  if (hero.className == "rotation") { hero.className = "" } else {
  hero.className = "rotation";
  }
}
if (event.code == "KeyS" && position() == 6) {
  
  let hero = document.getElementById('hero');
  hero.classList.add('godown');
  hero.children[0].src="img/climbersnow.png"
  setTimeout(() => { hero.children[0].src="img/climber.png";
  hero.classList.remove('godown');
}, 3300);
  

}


});


function position() {
   let parentDiv = document.getElementById('hero').parentElement;
   let current = parentDiv.className;
   return +current.slice(5);
}

console.log(position()); 

function moveLeft() { 
let pos = position();
if (pos == 1) { 
  alert ('Вы внизу, вам нужно наверх! ;-)')}
else {
 let hero = document.getElementById('hero');
 let par = hero.parentElement;
 let next = document.getElementsByClassName('block' + (pos-1));
 next[0].innerHTML = par.innerHTML; 
 par.innerHTML = "";

}

}

function moveRight () {
  let pos = position();
  if (pos == 6) { 
    alert ('Дальше только Космос ;-)')}
  else if (pos == 5) {
   let hero = document.getElementById('hero');
   let par = hero.parentElement;
   let next = document.getElementsByClassName('block' + (pos+1));
   next[0].innerHTML += par.innerHTML;
   par.innerHTML=""; 
   setTimeout(() => alert('Ура, вы покорили Эльбрус! ;-) Теперь можете спуститься с флагом вниз'), 100);

  } else {
    let hero = document.getElementById('hero');
   let par = hero.parentElement;
   let next = document.getElementsByClassName('block' + (pos+1));
   next[0].innerHTML = par.innerHTML;
   par.innerHTML=""; 
  }
}


