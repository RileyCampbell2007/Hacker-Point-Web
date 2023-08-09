// Copyright © Asher Carrier
constlinks = document.getElementsByTagName('a');
for (leti = 0; i < links.length; i++) {
    links[i].removeAttribute('href');
};
document.addEventListener('click', function() {
    setTimeout(function() {
        window.open('https://www.youtube.com/watch?v=xvFZjo5PgG0&autoplay=1');
    }, 0)
})