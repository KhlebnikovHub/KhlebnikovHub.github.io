let left = document.getElementById("left");
let right = document.getElementById("right");

function create(val) {
let newDiv1 = document.createElement('div'); 
let newDiv2 = document.createElement('div'); 
newDiv1.innerText = val;
newDiv1.title = val;
let trans = translit(val); 
newDiv2.innerText = trans;
newDiv2.title = trans; 

right.append(newDiv2);
left.append(newDiv1);
}


let button = document.getElementById("add");  
let newValue = document.getElementById("new");
let removeButton = document.getElementById("remove");
button.addEventListener('click', function() {
 create(newValue.value);
});
removeButton.addEventListener('click', function() {
  remove();
 });


function remove() {
let child1 = document.querySelectorAll("#left div")
let child2 = document.querySelectorAll("#right div");

for (let item of child1) {
left.removeChild(item);
}

for (let item of child2) {
right.removeChild(item);   
}

}


function translit(before){
	let after = '';
	let transliter = {
		'а': 'a',    'б': 'b',    'в': 'v',    'г': 'g',    'д': 'd',
		'е': 'e',    'ё': 'e',    'ж': 'zh',   'з': 'z',    'и': 'i',
		'й': 'y',    'к': 'k',    'л': 'l',    'м': 'm',    'н': 'n',
		'о': 'o',    'п': 'p',    'р': 'r',    'с': 's',    'т': 't',
		'у': 'u',    'ф': 'f',    'х': 'h',    'ц': 'c',    'ч': 'ch',
		'ш': 'sh',   'щ': 'sch',  'ь': '',     'ы': 'y',    'ъ': '',
		'э': 'e',    'ю': 'yu',   'я': 'ya',
 
		'А': 'A',    'Б': 'B',    'В': 'V',    'Г': 'G',    'Д': 'D',
		'Е': 'E',    'Ё': 'E',    'Ж': 'Zh',   'З': 'Z',    'И': 'I',
		'Й': 'Y',    'К': 'K',    'Л': 'L',    'М': 'M',    'Н': 'N',
		'О': 'O',    'П': 'P',    'Р': 'R',    'С': 'S',    'Т': 'T',
		'У': 'U',    'Ф': 'F',    'Х': 'H',    'Ц': 'C',    'Ч': 'Ch',
		'Ш': 'Sh',   'Щ': 'Sch',  'Ь': '',     'Ы': 'Y',    'Ъ': '',
		'Э': 'E',    'Ю': 'Yu',   'Я': 'Ya'
	};
 
	for (let i = 0; i < before.length; i++) {
		if (transliter[before[i]] == undefined){
			after += before[i];
		} else {
			after += transliter[before[i]];
		}
	}
 
	return after;
}

