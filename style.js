document.getElementsByClassName('hamburgerButton')[0].addEventListener('click', ()=>{
    if(window.getComputedStyle(document.getElementsByClassName('hamburger')[0]).getPropertyValue('display')=='none') {
        document.getElementsByClassName('hamburger')[0].style.setProperty('display','block')
    } else {
        document.getElementsByClassName('hamburger')[0].style.setProperty('display','none')
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
