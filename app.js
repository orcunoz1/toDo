const todoInput = document.querySelector(".todoInput");
const addBtn = document.querySelector(".btn");
const todoList = document.querySelector(".listContainer");

addBtn.addEventListener("click", () => {
  const newTodo = todoInput.value;

  let newDiv = document.createElement("div");
  newDiv.classList.add("singleTodo");
  newDiv.innerHTML = `
  <span>${newTodo}</span>  
  <i class="fa-solid fa-check"></i>
  `;

  todoList.appendChild(newDiv);
});
