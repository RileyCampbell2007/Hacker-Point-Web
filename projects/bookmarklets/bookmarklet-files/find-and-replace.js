// Copyright © Asher Carrier
var find = prompt('Find:');
var replace = prompt('Replace:');
if (find && replace) {
    var body = document.body.innerHTML;
    body = body.replace(new RegExp(find, 'g'), replace);
    document.body.innerHTML = body;
}