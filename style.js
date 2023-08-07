document.getElementsByClassName('hamburgerButton')[0].addEventListener('click', () => {
    if (document.getElementsByClassName('hamburger')[0].classList.contains('active')) {
        document.getElementsByClassName('hamburger')[0].classList.remove('active')
        document.getElementsByClassName('hamburgerButton')[0].innerHTML = '<i class="bi bi-list"></i>'
    } else {
        document.getElementsByClassName('hamburger')[0].classList.add('active')
        document.getElementsByClassName('hamburgerButton')[0].innerHTML = '<i class="bi bi-x-lg"></i>'
    }
})

if (localStorage.getItem('darkMode') == null) {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        localStorage.setItem('darkMode', 'true')
    } else {
        localStorage.setItem('darkMode', 'false')
    }

}

if (localStorage.getItem('darkMode') == 'true') {
    document.getElementById('darkModeSelector').checked = true
} else {
    document.getElementById('darkModeSelector').checked = false
}


const checkDarkMode = function () {
    if (document.getElementById('darkModeSelector').checked) {
        document.body.classList.add('dark')
        localStorage.setItem('darkMode', 'true')
    } else {
        document.body.classList.remove('dark')
        localStorage.setItem('darkMode', 'false')
    }
}

checkDarkMode()

document.getElementById('darkModeSelector').addEventListener('click', checkDarkMode)

function urlEncodeString(str) {
    return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
        return '%' + c.charCodeAt(0).toString(16);
    });
}

var bookmarkletElements = Array.from(document.querySelectorAll('bookmarklet'))

bookmarkletElements.forEach(async (element) => {
    file = await (await fetch(element.getAttribute('file'))).text()
    var bookmarkletURI = `javascript:${urlEncodeString(`(function(){${file}})()`)}`
    var oldHTML = element.innerHTML
    var newLink = document.createElement('a')
    newLink.href = bookmarkletURI
    newLink.setAttribute('onclick','return false;')
    newLink.innerHTML = oldHTML
    element.innerHTML = ''
    element.appendChild(newLink)
});


setInterval(() => {
    Prism.highlightAll();
}, 300);