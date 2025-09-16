const button = document.getElementById("button");
const input = document.getElementById("input");
const task_list = document.getElementById("task-list");

button.addEventListener("click", () => {
    const todo = input.value.trim();
    
    const li = document.createElement("li");
    li.innerText = todo;

    const Delete_btn = document.createElement("button");
    Delete_btn.innerText = "Delete";


    li.appendChild(Delete_btn);

    Delete_btn.addEventListener("click", () => {
        task_list.removeChild(li);
    })
    task_list.appendChild(li);

    input.value = "";

    
})
