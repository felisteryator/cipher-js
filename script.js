let heading = document.getElementById("heading");
let message = document.getElementById("message");
let anotherParagraph = document.querySelector("#another-paragraph");

heading.style.fontFamily = "Arial, sans-serif";
heading.style.fontWeight = "bold";

message.style.fontSize = "18px";
message.style.color = "blue";

anotherParagraph.style.fontStyle = "italic";

let students = ["Alice", "Bob", "Charlie", "David"];
let studentList = document.getElementById("student-list");

for (let name of students) {
    let listItem = document.createElement("li");
    listItem.textContent = name;
    studentList.appendChild(listItem);
}

function handleClick (){
    document.getElementById("heading-1").textContent = "This is javascript events!";
}

let button = document.getElementById("myButton");
button.addEventListener("click",
    function() {
        alert("Button clicked!");
    }
)