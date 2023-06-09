window.addEventListener('resize', () => {
    var pageWidth = window.innerWidth;
        var contentBoxes = document.getElementsByClassName('contentBox')
        for (let i=0;i<contentBoxes.length;i++) {
                var contentBox=contentBoxes[i]
                if (pageWidth > 700) {
                    var numOfChildElements = contentBox.getElementsByClassName('content').length
                    contentBox.style.setProperty('grid-template-columns', `repeat(${numOfChildElements}, 1fr)`)
                    document.getElementsByClassName('hamburger')[0].style.setProperty('display','none')
                } else {
                    contentBox.style.setProperty('grid-template-columns', `repeat(1, 1fr)`)
                }
        }
});
window.dispatchEvent(new Event('resize'))

document.getElementsByClassName('hamburgerButton')[0].addEventListener('click', ()=>{
    if(window.getComputedStyle(document.getElementsByClassName('hamburger')[0]).getPropertyValue('display')=='none') {
        document.getElementsByClassName('hamburger')[0].style.setProperty('display','block')
    } else {
        document.getElementsByClassName('hamburger')[0].style.setProperty('display','none')
    }
})

if(localStorage.getItem('darkMode') == null) {
    localStorage.setItem('darkMode','false')
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
