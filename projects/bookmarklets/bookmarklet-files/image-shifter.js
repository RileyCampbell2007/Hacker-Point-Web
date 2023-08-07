// Copyright © Asher Carrier
var images = document.getElementsByTagName('img');
var first = images[0].getAttribute('src');
for (var i = 1; i < images.length; i++) {
    images[i - 1].setAttribute('src', images[i].getAttribute('src'));
    if (i == images.length - 1) {
        images[i].setAttribute('src', first);
    }
}