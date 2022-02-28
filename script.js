function noBorder() {
    document.getElementById('searchBox').style.border = 'none'
}

function toggle() {
    let x = document.querySelector(".hamburger")
    let y = document.querySelector(".menu")
    let hasClass = y.classList.contains('on')

    x.classList.toggle("toggle-anim")
    y.classList.toggle("menu-anim")
    
}