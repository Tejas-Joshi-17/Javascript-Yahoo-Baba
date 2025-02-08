
setInterval(Browser_Height_and_Widths, 100)

function Browser_Height_and_Widths(){
    document.getElementById("Inner_Height").innerText = window.innerHeight
    document.getElementById("Outer_Height").innerText = window.outerHeight
    document.getElementById("Inner_Width").innerText = window.innerWidth
    document.getElementById("Outer_Width").innerText = window.outerWidth
}
