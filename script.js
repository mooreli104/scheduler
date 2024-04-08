
let lists = document.getElementsByClassName("list");
let listContainer = document.getElementById("list-container");
let dragAndDrop = document.querySelectorAll(".semester, #right, #left-completed");
//With querySelectorALl, must loop over elements (like an array of each element with .semester class
let labels = document.querySelectorAll(".label");



function completeBigRequirement() {
    let graduation = document.getElementById("graduation");
    let total = graduation.getElementsByClassName("specific");
    let checks = graduation.getElementsByClassName("checked");
    if (total.length === checks.length) {
        return true;
    }
    else {
        return false;
    }
}

function complete() {
    if (completeBigRequirement()) {
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
                    complete();
                }
                selected = null;

            })
        });

    });
}

labels.forEach(function (item) {
    item.addEventListener("click", function (e) {
        let content = document.getElementById("test");
        content.classList.toggle("fulfilled");
        item.classList.toggle("fulfilled");
    });

});

//TRYING TO SAVE THE CLASSES THAT WERE DROPPED INTO THE SEMESTERS
// function saveData(){
//     localStorage.setItem("data", autumn.innerHTML);
// }

// function showClass(){
//     autumn.innerHTML = localStorage.getItem("data");
// }

