const input = document.querySelector("#taskInput");
const add = document.querySelector("#addBtn");
const taskList = document.querySelector("#taskList");

add.addEventListener("click", addTask);

function addTask() {
  const text = input.value.trim();

  if (text === "") {
    return;
  }

  const li = document.createElement("li");
  li.textContent = text;
  taskList.append(li);
  input.value = "";
}
