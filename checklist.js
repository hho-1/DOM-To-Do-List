let container = document.querySelector(".container")
let ulElement = document.querySelector(".liste")
let LIs = document.querySelectorAll(".LiElement")
let innerLiDivs = document.querySelectorAll(".list-item")
let listItemTexts = document.querySelectorAll(".list-item-text")
let checkButtons = document.querySelectorAll(".fa-check")
let trashButtons = document.querySelectorAll(".trash-button")




let addNewClass = document.querySelector(".addNew")
let addNewText = document.getElementById("addNewText")
let addNewButton = document.getElementById("addNewButton")


addNewButton.addEventListener('click', addTask);


ulElement.addEventListener('click', taskCompleteORDelete)

//document.addEventListener('DOMContentLoaded', ReadFromLocalStorage);




addNewText.addEventListener("keypress", function(event) {
  
  if (event.key === "Enter") {
    event.preventDefault();
    addNewButton.click();
  }
});

function taskCompleteORDelete(e){

    const clickedButton = e.target;

    if (e.target.classList.contains("fa-check")){
        e.target.parentElement.parentElement.classList.toggle("done")
        //console.log(e.target.parentElement.parentElement.classList);
    }
    if (clickedButton.classList.contains("trash-button")){
        
        if(confirm('Are you sure???')){
            clickedButton.parentElement.parentElement.classList.toggle('kaybol');

            const silinecekTask = clickedButton.parentElement.children[1].innerText
        
            deleteLocalStorage(silinecekTask)

            clickedButton.parentElement.parentElement.addEventListener('transitionend', function(){
                clickedButton.parentElement.parentElement.remove();
            })
        }
        
        
    }
}


function addTask(e){
    
    
    e.preventDefault();

    if(addNewText.value.length > 0){
        createTaskItem(addNewText.value)
    saveToLocalStorage(addNewText.value)

    addNewText.value = ""
    }
    else{
        alert('Please add a task!!!')
    }

    
}

function saveToLocalStorage(newTask){
    let tasks;

    if(localStorage.getItem('tasks') === null){
        tasks = []
    }
    else{
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }

    tasks.push(newTask)
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

function ReadFromLocalStorage(){
    let tasks;

    if(localStorage.getItem('tasks') === null){
        tasks = []
    }
    else{
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }

    tasks.forEach((task) => {
        createTaskItem(task)
    })
}

function createTaskItem(task){
    let newLi = document.createElement("li");
    newLi.classList.add("LiElement");
    

    let newListItemDiv = document.createElement("div");
    newListItemDiv.classList.add("list-item");
    

    let newListItemText = document.createElement("span")
    newListItemText.classList.add("list-item-text")
    newListItemText.innerText = task;
    
    
    let newInput = addNewText.value; 
    let temp = document.createTextNode(newInput);

    newListItemText.innerHTML = '<i class="fa-solid fa-check">';
    newListItemText.appendChild(temp);

    let newTrashButton = document.createElement("button")
    newTrashButton.className = "trash-button"
    newTrashButton.innerHTML = '<i class="fa-regular fa-trash-can">';
    newListItemDiv.appendChild(newTrashButton)
    

    newListItemDiv.appendChild(newListItemText);
    newLi.appendChild(newListItemDiv);

    
    ulElement.appendChild(newLi)


}

function deleteLocalStorage(task){
    let tasks;

    if(localStorage.getItem('tasks') === null){
        tasks = []
    }
    else{
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }

    const silinecekElemanIndex = tasks.indexOf(task)
    tasks.splice(silinecekElemanIndex, 1)

    localStorage.setItem('tasks', JSON.stringify(tasks))
}
