let text = [];
let input = document.querySelector('.input_area');

function addTextToArray() {
    text.push(input.value);
}

function showTextFromArray() {
    let li = document.createElement('li');
    document.querySelector('ul').appendChild(li);
    for (let value of text.values()) {
        li.innerHTML = text[text.length - 1];
    }
}

function clearInput() {
    input.value = '';
}

function enter () {
    input.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            document.querySelector('.btn').click();
        }
    });
}