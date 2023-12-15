const tasks = [];

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const newTask = taskInput.value.trim();

  if (newTask !== "") {
    tasks.push(newTask);
    taskInput.value = "";
    updateTaskList();
  }
}

function updateTaskList() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  const searchInput = document
    .getElementById("searchInput")
    .value.toLowerCase();
  const filteredTasks = tasks.filter((task) =>
    task.toLowerCase().includes(searchInput)
  );

  if (filteredTasks.length === 0 && searchInput !== "") {
    const li = document.createElement("li");
    li.innerHTML = `<span>Add To-do</span>`;
    taskList.appendChild(li);
  } else {
    filteredTasks.forEach((task, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
          <span>${task}</span>
          <button onclick="completeTask(${index})">Complete</button>
          <button onclick="editTask(${index})">Edit</button>
          <button onclick="deleteTask(${index})">Delete</button>
        `;
      taskList.appendChild(li);
    });
  }
}

function completeTask(index) {
  const taskList = document.getElementById("taskList");
  tasks[index] = `<span class="completed">${tasks[index]}</span>`;
  updateTaskList(taskList);
}

function editTask(index) {
  const taskList = document.getElementById("taskList");
  const newTask = prompt("Edit task:", tasks[index]);
  if (newTask !== null) {
    tasks[index] = newTask;
    updateTaskList(taskList);
  }
}

function deleteTask(index) {
  const taskList = document.getElementById("taskList");
  tasks.splice(index, 1);
  updateTaskList(taskList);
}

function searchTask() {
  const searchInput = document
    .getElementById("searchInput")
    .value.toLowerCase();
  const filteredTasks = tasks.filter((task) =>
    task.toLowerCase().includes(searchInput)
  );
  const taskList = document.getElementById("taskList");
  updateTaskList(taskList, filteredTasks);
  console.log(filteredTasks);
}
