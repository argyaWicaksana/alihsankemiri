function noBorder() {
    document.getElementById('searchBox').style.border = 'none'
}

function toggle() {
    let x = document.getElementById('toggle')
    if (x.className =="on") { //tutup
       x.classList.remove("on") 
        document.getElementById('menuResp').style.display = ''
        document.getElementById('menuResp').style.width = ''
    } else { //buka
        x.className+="on"
        document.getElementById('menuResp').style.display = 'block'
        document.getElementById('menuResp').style.width = '100%'
    }
    
}