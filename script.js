let lists = document.getElementsByClassName("list");
let listContainer = document.getElementById("list-container");
let dragAndDrop = document.querySelectorAll(".semester, #right, #left-completed");
let right = document.getElementById("right");
//With querySelectorALl, must loop over elements (like an array of each element with .semester class
let labels = document.querySelectorAll(".label");
let CSE = document.querySelectorAll("#task-1");

//The fetch method in JavaScript is used to make HTTP requests to fetch resources.
//Simplifies asynchronous data fetching in JavaScript and
//used for interacting with APIs to retrieve and sned
//data asynchronously over the web.

//Fetch is promise-based (promises are the foundation of asynchronous programming)
//Promise will resolve or reject
fetch("https://contenttest.osu.edu/v2/classes/search?q=cse")
.then(response => {
    if(!response.ok){
        throw new Error("Could not fetch resource");
    }
    return response.json();
}) 
.then(data => {
    
    const name = data.data.courses[0].course.subject + data.data.courses[0].course.catalogNumber;
    let newDiv = document.createElement("div");
    let img = document.createElement("img");
    var text = document.createTextNode(name);

    img.setAttribute("src", "drag_drop_icon.png")
    img.setAttribute("draggable", false);
    
    newDiv.classList.add("list");
    newDiv.appendChild(img);
    newDiv.appendChild(text);
    newDiv.setAttribute("draggable",true)
    right.appendChild(newDiv);

    
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

CSE.forEach(function(item){
    item.addEventListener("click", function(e){
        e.stopPropagation();
        console.log("CLICKED");
    })
})

})
.catch(error => console.log(error));


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





