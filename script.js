const onLight = () => {
    const imageOn = document.querySelector(".image-lamp")
    imageOn.setAttribute("src", "/img/ligada.jpg")
}

const offLight = () => {
    const imageOn = document.querySelector(".image-lamp")
    imageOn.removeAttribute("src", "/img/ligada.jpg")
    imageOn.setAttribute("src", "/img/desligada.jpg")
}

const crack = () => {
    const imageOn = document.querySelector(".image-lamp")
    imageOn.setAttribute("src", "/img/quebrada.jpg")

}

const btnOn = document.getElementById("btn-on")
btnOn.addEventListener("click", onLight)
const btnOff = document.getElementById("btn-off")
btnOff.addEventListener("click", offLight)
const crackImage = document.querySelector(".image-lamp")
crackImage.addEventListener("dblclick", crack)