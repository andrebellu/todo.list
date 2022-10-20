import "./style.css"

class Nota {
  constructor(titolo) {
    this.titolo = titolo
  }
}

let tasks = []

if(localStorage.getItem("notes")) {
  tasks = JSON.parse(localStorage.getItem("notes"))
}

const newTask = document.getElementById("newTask")
const newBtn = document.getElementById("newBtn")
const taskList = document.getElementById("taskList")

const updateTasks = () => {
  taskList.innerHTML = ""

  for (const task of tasks) {
    const taskDiv = document.createElement("div")
    taskDiv.className = "custom-list-item"

    const el = document.createElement("div")
    el.className = "custom-task"
    el.innerText = task.titolo

    el.onclick = () => {
      el.classList.toggle("custom-task-done")
    }

    const bin = document.createElement("div")
    bin.innerText = "x"
    bin.className = "custom-btn"
    bin.onclick = () => {
      const index = tasks.indexOf(task)
      tasks.splice(index, 1)
      updateTasks()
    }

    taskDiv.appendChild(el)
    taskDiv.appendChild(bin)

    taskList.appendChild(taskDiv)
  }
}

updateTasks()

newBtn.onclick = () => {
  const task = new Nota(newTask.value)
  newTask.value = ""
  tasks.push(task)
  localStorage.setItem("notes", JSON.stringify(tasks))
  updateTasks()

  console.log(tasks)
}

updateTasks()