function noBorder() {
    document.getElementById('searchBox').style.border = 'none'
}

function toggle() {
    let x = document.getElementById('toggle')
    if (x.className =="on") { //tutup
       x.classList.remove("on") 
        document.getElementById('menuResp').style.transform = ''
    } else { //buka
        x.className+="on"
        document.getElementById('menuResp').style.transform = 'translateX(0%)'
    }
    
}