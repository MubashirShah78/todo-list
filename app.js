// let addBtn = document.querySelector(".add");
// let input = document.querySelector(".text");
// let dateInput = document.querySelector(".date");

// function addValue() {
//   addBtn.addEventListener("click", () => {
//     let task = input.value.trim();
//     let taskDate = dateInput.value;

//     if (task === "" || taskDate === "") {
//       alert("Please enter both task and date");
//       return;
//     }

//     let list = document.createElement("li");
//     let taskText = document.createElement("span");
//     taskText.innerText = task;

//     let taskDateSpan = document.createElement("span");
//     taskDateSpan.innerText = taskDate;

//     input.value = "";
//     dateInput.value = "";

//     let ul = document.querySelector("ul");
//     list.appendChild(taskText);
//     list.appendChild(taskDateSpan);

//     let delBtn = document.createElement("button");
//     delBtn.classList.add("delete");
//     delBtn.innerText = "Delete";
//     list.appendChild(delBtn);

//     ul.appendChild(list);

//     delBtn.addEventListener("click", () => {
//       delBtn.parentElement.remove();
//     });
//   });
// }

// addValue();

let addBtn = document.querySelector(".add");
let input = document.querySelector(".text");
let dateInput = document.querySelector(".date");
let ul = document.querySelector("ul");
let toDoTask = [];
let toDoDate = [];

function addValue() {
  addBtn.addEventListener("click", () => {
    task = input.value.trim();
    dateTask = dateInput.value;
    input.value = "";
    dateInput.value= "";
    

    toDoTask.push(task);
    toDoDate.push(dateTask);
    let newHtml = ``;

    if (task === "" || dateTask === "") {
      alert("Add Task And Date Both");
      return;
    }

    for (let index = 0; index < toDoTask.length; index++) {
      newHtml = `<li><span>${toDoTask[index]}</span> <span>${toDoDate[index]}</span>
      <button class="delete">Delete</button></li>`;
      }
      ul.innerHTML += newHtml ;
  });

  

 ul.addEventListener("click", (event)=>{
  if(event.target.classList.contains("delete")){
  event.target.parentElement.remove();
  }
 })
}

addValue();
