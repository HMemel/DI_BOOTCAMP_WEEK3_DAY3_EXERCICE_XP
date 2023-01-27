// Exercises XP

// Exercise 1: Timer

//PART 1

setTimeout(() => {
    //alert("Hello World")
}, 2000);

//PART 2
let container = document.getElementById("container");
function createParagraph(params) {
    let p = document.createElement("p");
    p.innerHTML = "Hello World";
    container.appendChild(p);
}

setTimeout(() => {
    //createParagraph();
}, 2000);

//PART 3
let compteur = 0;
let idIntervalAnimation = setInterval(() => {
    compteur += 1;

    compteur > 5 ? clearInterval(idIntervalAnimation) : createParagraph();
}, 2000);

let clearButton = document.getElementById("clear");
clearButton.onclick = () => {
    clearInterval(idIntervalAnimation);
};


// Exercise 2 : Move The Box

function myMove(){
    let box = document.getElementById('animate');
    let currentPostition = 0;
    let int = setInterval(() => {
        if(currentPostition < 350){
            currentPostition++;
            box.style.left = currentPostition + 'px';
        } else {
            clearInterval(int);
        }
    }, 50);
}

// Exercise 3: Drag & Drop

let box = document.getElementById("square");
box.setAttribute('draggable', 'true');
box.setAttribute('ondragstart', 'drag(event)');

let big_box = document.getElementById("big_square");
big_box.setAttribute('ondragover', 'allowDrop(event)')
big_box.setAttribute('ondrop', 'drop(event)')

function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    let data = event.dataTransfer.getData('text');

    event.target.appendChild(document.getElementById(data));
}