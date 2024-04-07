
let lists = document.getElementsByClassName("list");
let listContainer = document.getElementById("list-container");
let dragAndDrop = document.querySelectorAll(".semester, #right, #left-completed");
let required = document.querySelectorAll("#task-1");

//With querySelectorALl, must loop over elements (like an array of each element with .semester class
let semester = document.querySelectorAll(".semester");


function completeRequirement(){
 required.forEach(function(item){
    item.classList.toggle("checked");
 });   
}


for(list of lists){
    list.addEventListener("dragstart", function(e){
        let selected = e.target;

        dragAndDrop.forEach(function(item){
            item.addEventListener("dragover", function(e){
                e.preventDefault();
            })
            
            item.addEventListener("drop", function(e){
                item.appendChild(selected);
                selected = null;
               completeRequirement();
            })
        });
    })
}
// if(semester.classList){
//     required.classList.toggle("checked"); 
// }

// listContainer.addEventListener("click",function(e){
//     if(e.target.tagName === "LI"){
//         e.target.classList.toggle("checked");
//     }
// }, false);

//TRYING TO SAVE THE CLASSES THAT WERE DROPPED INTO THE SEMESTERS
// function saveData(){
//     localStorage.setItem("data", autumn.innerHTML);
// }

// function showClass(){
//     autumn.innerHTML = localStorage.getItem("data");
// }

