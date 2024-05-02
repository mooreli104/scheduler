//With querySelectorALl, must loop over elements (like an array of each element with .semester class
let requirements = document.querySelectorAll(".label");
let specificClass = document.querySelectorAll("#task-1");

/**
 * For every requirement, add a click event listener that will change the label icon
 * and "open" up the requirement to show the classes needed to fulfilled the requirement.
 */
requirements.forEach(function (requirement) {
    requirement.addEventListener("click", function (e) {
        let majorRequirement = e.target;
        let classes = majorRequirement.getElementsByClassName("content");
        classes[0].classList.toggle("fulfilled");
        majorRequirement.classList.toggle("fulfilled");
    });
});

/**
 * For every specific class that is needed for a requirement, add a click event listener
 * that will populate the classes section with the class that is clicked.
 */
specificClass.forEach(function (specificClass) {
    specificClass.addEventListener("click", function (e) {
        //stopPropagation() stops the event from travelling back to the parent node.
        e.stopPropagation();
        fetchTheClass();
    })

});


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

/**
 * Checks if a required class has been added to the schedule, 
 * marks the class requirement as "checked" if it has 
 * and removes "checked" if it hasn't.
 */
function checkClassRequirement() {
    let classRequirement = document.querySelectorAll("#task-1");
    let semesters = document.getElementById("schedule");
    classRequirement.forEach(function (item) {
        let arr = semesters.getElementsByClassName("class");
        if (arr.length > 0) {
            item.classList.add("checked");
        }
        else {
            item.classList.remove("checked");
        }
    });
}

/**
 * Checks if a general requirement has been completed based on the classes in the schedule.
 */
function checkGeneralRequirement() {
    let generalRequirements = document.querySelectorAll(".list-requirements")
    generalRequirements.forEach(function (i) {
        let parent = i.parentElement.parentElement.parentElement;
        complete(parent.id);
    })
}

/**
 * Takes an input JSON object and retrieves the class name and catalog number.
 * Then creates an element for the class name and number.
 */
function createClassElement(data) {

    let classSection = document.getElementById("classes");
    const className = data.data.courses[0].course.subject + data.data.courses[0].course.catalogNumber;
    let newClass = document.createElement("div");
    let img = document.createElement("img");
    let text = document.createTextNode(className);

    img.setAttribute("src", "drag_drop_icon.png")
    img.setAttribute("draggable", false);

    newClass.classList.add("class");
    newClass.appendChild(img);
    newClass.appendChild(text);
    newClass.setAttribute("draggable", true)
    classSection.appendChild(newClass);

}

function createDragAndDropFunctionality() {
    let ohioStateClasses = document.getElementsByClassName("class");
    for (oneClass of ohioStateClasses) {
        oneClass.addEventListener("dragstart", function (e) {
            let selectedClass = e.target;
            let dragAndDropDestination = document.querySelectorAll(".semester, #classes, #left-completed");
            dragAndDropDestination.forEach(function (item) {

                item.addEventListener("dragover", function (e) {
                    e.preventDefault();
                })

                item.addEventListener("drop", function (e) {
                    if (selectedClass != null) {
                        item.appendChild(selectedClass);
                        checkClassRequirement();
                        checkGeneralRequirement();
                    }
                    selectedClass = null;
                })
            });
        });
    }
}

/**
 * Fetches a class from the OSU course catalog given the name, 
 * creates a designed element for that class, adds drag and drop functionality,
 * and checks if any requirements are met if class is dragged into the schedule.
 */
function fetchTheClass() {
    fetch("https://contenttest.osu.edu/v2/classes/search?q=cse")
        .then(response => {
            if (!response.ok) {
                throw new Error("Could not fetch resource");
            }
            return response.json();
        })
        .then(data => {

            createClassElement(data);
            createDragAndDropFunctionality();

        })
        .catch(error => console.log(error));
}
