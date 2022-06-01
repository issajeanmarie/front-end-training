const input = document.querySelector("input");
const submit = document.querySelector("button");
const todoContainer = document.querySelector(".todos");
const errorText = document.querySelector(".error");

let todos = [];

submit.addEventListener("click", () => {
	if (input.value !== "") {
		todos.push(input.value);
		input.value = "";
		input.focus();

		//NEW ELEMENTS
		const newTodo = document.createElement("div");
		const todoNum = document.createElement("span");
		const todoText = document.createElement("p");

		newTodo.className = "one_todo";
		todoNum.className = "num";
		todoText.className = "todo_text";

		todos.map((todo, index) => {
			todoText.innerText = todo;
			todoNum.innerText = index + 1;
			newTodo.appendChild(todoNum);
			newTodo.appendChild(todoText);

			todoContainer.appendChild(newTodo);
		});
	} else {
		alert("Input should not be empty");
	}

	if (todos.length > 0) {
		errorText.style.display = "none";
	} else {
		errorText.style.display = "block";
	}
});
