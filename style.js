document.getElementsByClassName('hamburgerButton')[0].addEventListener('click', ()=>{
    if(document.getElementsByClassName('hamburger')[0].classList.contains('active')) {
        document.getElementsByClassName('hamburger')[0].classList.remove('active')
        document.getElementsByClassName('hamburgerButton')[0].innerHTML='<i class="bi bi-list"></i>'
    } else {
        document.getElementsByClassName('hamburger')[0].classList.add('active')
        document.getElementsByClassName('hamburgerButton')[0].innerHTML='<i class="bi bi-x-lg"></i>'
    }
})

if(localStorage.getItem('darkMode') == null) {
    if(window.matchMedia("(prefers-color-scheme: dark)").matches) {
        localStorage.setItem('darkMode','true')
    } else {
        localStorage.setItem('darkMode','false')
    }
    
}

if(localStorage.getItem('darkMode') == 'true'){
    document.getElementById('darkModeSelector').checked=true
} else {
    document.getElementById('darkModeSelector').checked=false
}


const checkDarkMode = function () {
    if(document.getElementById('darkModeSelector').checked) {
        document.body.classList.add('dark')
        localStorage.setItem('darkMode','true')
    } else {
        document.body.classList.remove('dark')
        localStorage.setItem('darkMode','false')
    }
}

checkDarkMode()

document.getElementById('darkModeSelector').addEventListener('click', checkDarkMode)
