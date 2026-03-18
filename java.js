let ligar = document.getElementById("ligar")
let desligar = document.getElementById("desligar")

let imagen = document.getElementById("imagem")


ligar.addEventListener("click",()=>{
imagen.src = "imagen/ligada.png"
})


desligar.addEventListener("click",()=>{
imagen.src = "imagen/lampada.png"
})