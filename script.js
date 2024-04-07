
let lists = document.getElementsByClassName("list");
let listContainer = document.getElementById("list-container");
let year = document.querySelectorAll(".year, #right, #left-completed");

function saveData(){
    localStorage.setItem("data");
}


for(list of lists){
    list.addEventListener("dragstart", function(e){
        let selected = e.target;

        year.forEach(function(item){
            item.addEventListener("dragover", function(e){
                e.preventDefault();
            })
            item.addEventListener("drop", function(e){
                item.appendChild(selected);
                selected = null;
            })
        });
    })
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
}, false);

