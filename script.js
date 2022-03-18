
function toggle() {
    let x = document.querySelector(".hamburger")
    let y = document.querySelector(".menu")
    let hasClass = y.classList.contains('on')

    x.classList.toggle("toggle-anim")
    y.classList.toggle("menu-anim")
    
}

function see(picture) {
    let x = document.querySelector(".seePhoto")

    // x.innerHTML= `<img src="img/${picture}" style="margin:auto; display:block;">`
    x.innerHTML = `<img src="img/${picture}">
    <div class="closeBtn" onclick="tutup()"></div>`
    x.style.display = 'flex'
    // x.style.justifyContent = 'center'
    // x.style.alignItems = 'center'

    let image = document.querySelector(".seePhoto img")
    let imageHeight = image.offsetHeight
    let imageWidth = image.offsetWidth

    if (imageHeight >= window.innerHeight ) {
        console.log(`eiii ${imageHeight}`)
        image.style.height = 'calc(100% - 10px)'
        // image.style.setProperty('height', 'calc(100% - 10px)')
    }else if (imageWidth >= window.innerWidth){
        console.log(`eiii ${imageWidth}`)
        image.style.width = 'calc(100% - 10px)'
        // image.style.setProperty('width', 'calc(100% - 10px)')
    }
}

function tutup() {
    // console.log(`hallooooo`)
    let image = document.querySelector(".seePhoto")
    image.style.display = 'none'
}