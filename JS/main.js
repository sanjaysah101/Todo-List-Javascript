// const formTodo = document.querySelector('.form-todo');
const addtaskbtn = document.getElementById('addtaskbtn');
showTask();
// console.dir(formTodo);
addtaskbtn.addEventListener("click", function(e){
    e.preventDefault();
    const userTask = document.querySelector('.form-todo input');
    // let userTask = formTodo.value;
    if (!userTask.value.trim()) {
        alert('Please add some task to be added');
    }
    else {
        let webtask = localStorage.getItem("localtask");
        if (!webtask) {
            taskObj = [];
        }
        else {
            taskObj = JSON.parse(webtask);
        }
        taskObj.push(userTask.value);
        localStorage.setItem("localtask", JSON.stringify(taskObj));
        userTask.value = "";
        showTask();
    }
})

function showTask() {
    let webtask = localStorage.getItem("localtask");
    if (!webtask) {
        taskObj = [];
    }
    else {
        taskObj = JSON.parse(webtask);
    }
    let html = "";
    let addedtasklist = document.getElementById("table-body");
    taskObj.forEach((item, index) => {
        html += `<tr>
            <td>${index+1}</td>
            <td>${item}</td>
            <td class="action">
                
                <button type="button" onclick = "edit(${index})">edit</button>
                <button type="button" onclick = "deleteItem(${index})">delete</button>
                
            </td>
        </tr>`;
    
    });
    // console.log(addedtasklist);
    addedtasklist.innerHTML = html;
    // console.log(addedtasklist);
}
// edit task
function edit(index){   
    let webtask = localStorage.getItem("localtask");
    let taskObj = JSON.parse(webtask);
    let userTask = document.querySelector('.form-todo input');
    let savebtn = document.getElementById('savebtn');
    let addtaskbtn = document.getElementById('addtaskbtn');
    let saveindex = document.getElementById('saveindex');
    saveindex.value = index;
    
    addtaskbtn.style.display = "none";
    savebtn.style.display = "block";
    userTask.value = taskObj[index];   
    // save task
    // savebtn.addEventListener("click", function(e){
        // let updatedvalue = document.querySelector(".form-todo input");
        // taskObj[index] = updatedvalue.value;
        // console.log(taskObj[index]);
        // });
    }   
// save task
let savebtn = document.getElementById('savebtn');
savebtn.addEventListener("click", function(e){
    e.preventDefault();
    let webtask = localStorage.getItem("localtask");
    let taskObj = JSON.parse(webtask);

    let saveindex = document.getElementById('saveindex').value;
    // alert(saveindex)
    let userTask = document.querySelector('.form-todo input').value;
    addtaskbtn.style.display = "block";
    savebtn.style.display = "none";
    // console.log(userTask);
    // alert(userTask);
    taskObj[saveindex] = userTask;
    localStorage.setItem("localtask", JSON.stringify(taskObj));
    showTask();
    userTask.value = "";
    // console.log(saveindex);
    // console.log(taskObj);

})

// Delete 
function deleteItem(index){
    let webtask = localStorage.getItem("localtask");
    let taskObj = JSON.parse(webtask);
    taskObj.splice(index, 1);   // delete item
    localStorage.setItem("localtask", JSON.stringify(taskObj));
    showTask();   
}