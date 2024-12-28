var paragraph =document.getElementById("fistParagraph");

var number = 1;

function plus() {
    if (number < 15) {
        number = number + 1;
        paragraph.innerText = number;
    }
}

function minus() {
    if (number > 1) {
        number = number - 1;
        paragraph.innerText = number;
    }
}