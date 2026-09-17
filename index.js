const input = document.querySelector("#taskInput");
const add = document.querySelector("#addBtn");
const taskList = document.querySelector("#taskList");

add.addEventListener("click", addTask);

let id = 0;
function addTask() {
  const text = input.value.trim();

  if (text === "") {
    return;
  }

  id++;

  const li = document.createElement("li");

  li.textContent = text;

  li.id = id;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  deleteBtn.id = id;

  deleteBtn.addEventListener("click", () => {
    const allTask = document.querySelectorAll("li");

    allTask.forEach((task) => {
      if (task.id === deleteBtn.id) {
        task.remove();
      }
    });
  });

  li.append(deleteBtn);

  taskList.append(li);
  input.value = "";
}
