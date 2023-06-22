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


//Silme

console.log(innerLiDivs.length);

for (let i = 0; i < innerLiDivs.length; i++) {
    trashButtons[i].addEventListener('click', () => {
      LIs[i].style.display = "none";
})
}


// Yapildi diye isaretleme


console.log(checkButtons.length);

/* let listem = document.querySelector('ul');
listem.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false); */

for (let i = 0; i < innerLiDivs.length; i++) {
    checkButtons[i].addEventListener('click', () => {
        let myLiDivArray = Array.from(innerLiDivs)
        if(!(myLiDivArray[i].classList.contains("done"))){
        
            innerLiDivs[i].style.textDecorationLine = "line-through";
            innerLiDivs[i].style.textDecorationColor = "red";
            innerLiDivs[i].style.textDecorationStyle = "double";
            checkButtons[i].style.color = "red";
            innerLiDivs[i].style.fontStyle = "italic";
            innerLiDivs[i].style.backgroundColor = "#ffa066"

            innerLiDivs[i].classList.add("done")
      
        }
        else{
            innerLiDivs[i].style.textDecorationLine = "none";
            checkButtons[i].style.color = "green";
            innerLiDivs[i].style.backgroundColor = "inherit";
            innerLiDivs[i].style.fontStyle = "normal";

            innerLiDivs[i].classList.remove("done")
        }
    })   
}

// Yeni görev ekleme

addNewButton.addEventListener('click', () => {
    
    let newLi = document.createElement("li");
    newLi.className = "LiElement"
    

    let newListItemDiv = document.createElement("div")
    newListItemDiv.className = "list-item";
    

    let newListItemText = document.createElement("span")
    newListItemText.className = "list-item-text"
    


    
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

    if(newInput === ''){
        alert("Please write a task!!");
    }
    else{
        ulElement.appendChild(newLi)

    }
    addNewText.value = ""


    //sil
    
    innerLiDivs = document.querySelectorAll(".list-item")
    LIs = document.querySelectorAll(".LiElement")
    trashButtons = document.querySelectorAll(".trash-button")


    for (let i = 0; i < innerLiDivs.length; i++) {
        trashButtons[i].addEventListener('click', () => {
            LIs[i].style.display = "none";
    })
    }
    
    //yapildi
    
    innerLiDivs = document.querySelectorAll(".list-item")
    listItemTexts = document.querySelectorAll(".list-item-text")
    checkButtons = document.querySelectorAll(".fa-check")
    
    for (let i = 0; i < innerLiDivs.length; i++) {
        
        
        checkButtons[i].addEventListener('click', () => {
            
            let myLiDivArray = Array.from(innerLiDivs)
            if(!(myLiDivArray[i].classList.contains("done"))){
        
                innerLiDivs[i].style.textDecorationLine = "line-through";
                innerLiDivs[i].style.textDecorationColor = "red";
                innerLiDivs[i].style.textDecorationStyle = "double";
                checkButtons[i].style.color = "red";
                innerLiDivs[i].style.fontStyle = "italic";
                innerLiDivs[i].style.backgroundColor = "#ffa066"

                innerLiDivs[i].classList.add("done")
      
            }
            else{
                innerLiDivs[i].style.textDecorationLine = "none";
                checkButtons[i].style.color = "green";
                innerLiDivs[i].style.backgroundColor = "inherit";
                innerLiDivs[i].style.fontStyle = "normal";

                innerLiDivs[i].classList.remove("done")
            }
        }) 
     
    }
})



