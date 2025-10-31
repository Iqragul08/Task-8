document.getElementById("addBtn").addEventListener("click", function() {
  const taskInput = document.getElementById("taskInput");
  const taskValue = taskInput.value.trim();

  if (taskValue === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");
  li.className = "list-group-item d-flex justify-content-between align-items-center";
  li.textContent = taskValue;

  const delBtn = document.createElement("button");
  delBtn.textContent = "×";
  delBtn.className = "deleteBtn";
  delBtn.onclick = function() {
    li.remove();
  };

  li.appendChild(delBtn);
  document.getElementById("taskList").appendChild(li);
  taskInput.value = "";
});
