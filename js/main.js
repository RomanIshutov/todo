
//возвращаем ссылки на елементы которые будем использовать
let enterButton = document.getElementById("enter");

// инпут ввода
let input = document.getElementById("userInput");

//родитель ул
let ul = document.querySelector("ul");

//кнопка очистить
let clear=document.getElementById("clear");

//ли
let item = document.getElementsByTagName("li");
//длинна инпута
function inputLength(){
	return input.value.length;
} 


//функция cоздания li 
function createListElement() {
	// создаём елемент li
	let li = document.createElement("li"); 
	// текст с инпута  внедряем его в li
	li.appendChild(document.createTextNode(input.value)); 
	// добавляет li  в родителя ul
	ul.appendChild(li); 
	// обнуляет строку после того как создадим li
	 input.value = ""; 


	// кнопка удалить
	/* кнопка удалить li которая находиться внутри  li
	 создаём ссылку на кнопку к которой будем потом обращаться 
	*/
	let dBtn = document.createElement("button");
	// в кнопку удалить добавляем название кнопки "удалить"
	dBtn.appendChild(document.createTextNode("Удалить"));
	// добавляем в родительский элемент в нашем случае li кнопку 
	li.appendChild(dBtn);
	/* добавляем событие для нашей кнопки, в данном случае при клике будет
	 выполнена функция deleteListItem которую мы опишем далее */
	dBtn.addEventListener("click", deleteListItem);
	// добавляет к li класс done
	function crossOut() {
	 	li.classList.toggle("done");
	 }
	
	 // вещаем клик на 
	 
	 li.addEventListener("click",crossOut);

	/*функция удаления, add применяет класс в нашем случае 
	delete который применяет display: none; на всю нашу li
	*/
	function deleteListItem(){
		li.classList.add("delete")
	}

	

	clear.addEventListener("click", deleteListItem);

}










function addListAfterClick(){
	if (inputLength() > 0) { 
		createListElement();	
	}
	else {inputLength() < 0
		alert ("текст как то по дебильному написан") ;
	}

		
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.which ===13) { 
	
		createListElement();
	} 
}


enterButton.addEventListener("click",addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

