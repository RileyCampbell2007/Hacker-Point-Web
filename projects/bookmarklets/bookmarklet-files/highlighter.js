// Copyright © Asher Carrier
function highlight(color) {
    if (window.getSelection) {
        var selection = window.getSelection();
        if (selection.rangeCount) {
            var range = selection.getRangeAt(0);
            var selectedText = range.extractContents();
            var span = document.createElement('span');
            span.style.backgroundColor = color;
            span.appendChild(selectedText);
            range.insertNode(span);
        }
    }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
var color = prompt("Enter a color to highlight the selected text:");
if (color == 'random') {
    highlight(getRandomColor());
} else if (color !== null) {
    highlight(color);
}