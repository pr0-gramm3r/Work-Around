// Task Container functionality all 
const columns = document.querySelectorAll(".task-columns");
const tasks = document.querySelectorAll(".task");

let dragElement = null;

tasks.forEach(task =>{
    task.addEventListener("dragstart",()=>{
        dragElement = task;
    })
    task.querySelector("button").addEventListener("click",()=>{
        task.remove();
    })
})

function dragEventForColumns(columns) {
    columns.forEach(column => {
        column.addEventListener('dragenter', (e) => {
            e.preventDefault();
            column.classList.add("hover-over");
        });
        column.addEventListener('dragleave', (e) => {
            e.preventDefault();
            column.classList.remove("hover-over");
        });
        column.addEventListener("dragover",(e)=>{
            e.preventDefault();
        })
        column.addEventListener("drop",(e)=>{
            e.preventDefault();
            column.appendChild(dragElement);
            dragElement = null;
            column.classList.remove("hover-over");

        })

    });
}

dragEventForColumns(columns); 

//  Modal(add-to-task) functionality all

const addbtn = document.querySelector("#add-new-task");
const addtask = document.querySelector("#add-task");
const modal = document.querySelector(".modal");
const bg = document.querySelector(".modal .bg");

addbtn.addEventListener('click',()=>{
    modal.classList.add("active");
})

bg.addEventListener("click",()=>{
    modal.classList.remove("active");
})

// Task Creation
addtask.addEventListener("click",()=>{
    const inp = document.querySelector(".center input");
    const textarea = document.querySelector(".center textarea");

    const title = inp.value.trim();
    const desc = textarea.value.trim(); 

    if(!title) return;

    let div = document.createElement("div");
    let h2 = document.createElement("h2");
    let p = document.createElement("p");
    let btn = document.createElement("button");

    div.classList.add("task");
    div.setAttribute('draggable','true');
    h2.textContent = title;
    p.textContent = desc;
    btn.innerHTML = '<i class="fa fa-trash"></i> Delete';
    btn.addEventListener("click",()=>{
        div.remove();
    })

    div.appendChild(h2);
    div.appendChild(p);
    div.appendChild(btn);

    const firstcolumn = columns[0]
    firstcolumn.appendChild(div);
    dragEventForColumns(columns);
    div.addEventListener("dragstart",()=>{
        dragElement = div;
    })
    
    
    inp.value = '';
    textarea.value = '';
    modal.classList.remove("active");
    
})


