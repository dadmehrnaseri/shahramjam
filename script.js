function add(){
    let x = parseInt(document.getElementById("num").innerText)
    x += 1
    localStorage.setItem("localx" , x)
    document.getElementById("num").innerText = x
}
function minus(){
    let x = parseInt(document.getElementById("num").innerText)
    x -= 1
    localStorage.setItem("localx" , x)
    document.getElementById("num").innerText = x
}