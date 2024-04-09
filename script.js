
let lists = document.getElementsByClassName("list");
let listContainer = document.getElementById("list-container");
let dragAndDrop = document.querySelectorAll(".semester, #right, #left-completed");
//With querySelectorALl, must loop over elements (like an array of each element with .semester class
let labels = document.querySelectorAll(".label");



function completeBigRequirement(string) {
    let graduation = document.getElementById(string);
    let total = graduation.getElementsByClassName("specific");
    let checks = graduation.getElementsByClassName("checked");
    if (total.length === checks.length) {
        return true;
    }
    else {
        return false;
    }
}

function complete(string) {
    let graduation = document.getElementById(string);
    if (completeBigRequirement(string)) {
        graduation.classList.add("checked");
    }
    else {
        graduation.classList.remove("checked");
    }
}

function completeRequirement() {
    let required = document.querySelectorAll("#task-1");
    required.forEach(function (item) {
        let arr = middle.getElementsByClassName("list");
        if (arr.length > 0) {
            item.classList.add("checked");

        }
        else {
            item.classList.remove("checked");
        }
    });
}


for (list of lists) {
    list.addEventListener("dragstart", function (e) {
        let selected = e.target;
        dragAndDrop.forEach(function (item) {
            item.addEventListener("dragover", function (e) {
                e.preventDefault();
            })

            item.addEventListener("drop", function (e) {
                if (selected != null) {
                    item.appendChild(selected);
                    completeRequirement();
                    let requirements = document.querySelectorAll(".list-container")
                    requirements.forEach(function(i){
                        let parent = i.parentElement.parentElement.parentElement;
                        complete(parent.id);
                    })
                    
                }
                selected = null;

            })
        });

    });
}

labels.forEach(function (item) {
    item.addEventListener("click", function (e) {

            let selected = e.target;
            let arr = selected.getElementsByClassName("content");
            arr[0].classList.toggle("fulfilled");
            selected.classList.toggle("fulfilled");
        
        
    });

});

//TRYING TO SAVE THE CLASSES THAT WERE DROPPED INTO THE SEMESTERS
// function saveData(){
//     localStorage.setItem("data", autumn.innerHTML);
// }

// function showClass(){
//     autumn.innerHTML = localStorage.getItem("data");
// }

