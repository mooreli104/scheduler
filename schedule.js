let lists = index.html.getElementsByClassName("list");
let rightBox = document.getElementById("right");
let year1 = document.getElementById("year1");
let year2 = document.getElementById("year2");
let year3 = document.getElementById("year3");
let year4 = document.getElementById("year4");
let year5 = document.getElementById("year5");
let year6 = document.getElementById("year6");
let year7 = document.getElementById("year7");
let year8 = document.getElementById("year8");
let completed = index.html.getElementById("left");
const years = [year1,year2,year3,year4,year5,year6,year7,year8];


for(list of lists){
    list.addEventListener("dragstart", function(e){
        let selected = e.target;

        rightBox.addEventListener("dragover", function(e){
            e.preventDefault();
        })
        rightBox.addEventListener("drop", function(e){
            rightBox.appendChild(selected);
            selected = null;
        })

    //     for(var i = 0; i<years.length;i++){
    //     years[i].addEventListener("dragover", function(e){
    //         e.preventDefault();
    //     })
    //     years[i].addEventListener("drop", function(e){
    //         years[i].appendChild(selected);
    //         selected = null;
    //     })
    // }

//     [year1, year2, year3, year4, year5, year6, year7, year8].forEach((element)=>{
//         element.addEventListener("dragover", function(e){
//             e.preventDefault();
//         })
//         element.addEventListener("drop", function(e){
//             element.appendChild(selected);
//             selected = null;
//         })
//    });
// });
        
        year1.addEventListener("dragover", function(e){
            e.preventDefault();
        })
        year1.addEventListener("drop", function(e){
            year1.appendChild(selected);
            selected = null;
        })

        year2.addEventListener("dragover", function(e){
            e.preventDefault();
        })
        year2.addEventListener("drop", function(e){
            year2.appendChild(selected);
            selected = null;
        })

        year3.addEventListener("dragover", function(e){
            e.preventDefault();
        })
        year3.addEventListener("drop", function(e){
            year3.appendChild(selected);
            selected = null;
        })

        year4.addEventListener("dragover", function(e){
            e.preventDefault();
        })
        year4.addEventListener("drop", function(e){
            year4.appendChild(selected);
            selected = null;
        })

        year5.addEventListener("dragover", function(e){
            e.preventDefault();
        })
        year5.addEventListener("drop", function(e){
            year5.appendChild(selected);
            selected = null;
        })

        year6.addEventListener("dragover", function(e){
            e.preventDefault();
        })
        year6.addEventListener("drop", function(e){
            year6.appendChild(selected);
            selected = null;
        })

        year7.addEventListener("dragover", function(e){
            e.preventDefault();
        })
        year7.addEventListener("drop", function(e){
            year7.appendChild(selected);
            selected = null;
        })

        year8.addEventListener("dragover", function(e){
            e.preventDefault();
        })
        year8.addEventListener("drop", function(e){
            year8.appendChild(selected);
            selected = null;
        })

        completed.addEventListener("dragover", function(e){
            e.preventDefault();
        })
        completed.addEventListener("drop", function(e){
            completed.appendChild(selected);
            selected = null;
        })
        
    
    })
}
