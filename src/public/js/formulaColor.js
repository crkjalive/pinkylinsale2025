let valorColor = document.querySelectorAll(".valorColor");
let utilidadColor = document.querySelectorAll(".utilidadColor");
let significadoColor = document.querySelector("#significadoColor");
let colorUno = document.querySelector("#coloruno");
let colorDos = document.querySelector("#colordos");
let colorTre = document.querySelector("#colortre");
let colorCua = document.querySelector("#colorcua");

const sueldoBasico = 50000;
const arriendo = 1857000 / 30;
const puntoEquilibrio = sueldoBasico + arriendo;
const uno = 2.061
const dos = 3.755
const tre = 6.711
const cua = 8.937


significadoColor.innerHTML = `
  <div>${puntoEquilibrio}</div>
`

colorUno.innerHTML = `
  <div>${uno}</div>
`

colorDos.innerHTML = `
<div>${dos}</div>
`

colorTre.innerHTML = `
<div>${tre}</div>
`
colorCua.innerHTML = `
<div>${cua}</div>
`

for (let i = 0; i < utilidadColor.length; i++) {
  if (utilidadColor[i].textContent <= 1) {
    valorColor[i].style.backgroundColor = "whitesmoke";
    valorColor[i].style.color = "whitesmoke";
    valorColor[i].style.border = "1px solid whitesmoke";
  }

  else if (utilidadColor[i].textContent <= arriendo) {
    valorColor[i].style.backgroundColor = "white";
    valorColor[i].style.color = "hotpink";
    valorColor[i].style.border = "1px solid hotpink";
  }

  else if (utilidadColor[i].textContent <= puntoEquilibrio) {
    valorColor[i].style.backgroundColor = "white";
    valorColor[i].style.color = "dodgerblue";
    valorColor[i].style.border = "1px solid dodgerblue";
  }

  else if (utilidadColor[i].textContent >= puntoEquilibrio && utilidadColor[i].textContent <= puntoEquilibrio * uno) {
    valorColor[i].style.backgroundColor = "dodgerblue";
    valorColor[i].style.color = "white";
  }

  else if (utilidadColor[i].textContent >= puntoEquilibrio * uno && utilidadColor[i].textContent <= puntoEquilibrio * dos) {
    valorColor[i].style.backgroundColor = "#1e6bff";
    valorColor[i].style.color = "white";
  }

  else if (utilidadColor[i].textContent >= (puntoEquilibrio * dos) && utilidadColor[i].textContent <= puntoEquilibrio * tre) {
    valorColor[i].style.backgroundColor = "lime";
    valorColor[i].style.color = "black";
    valorColor[i].style.fontWeight = "bold";
  }

  else if (utilidadColor[i].textContent >= puntoEquilibrio * tre && utilidadColor[i].textContent <= puntoEquilibrio * cua) {
    valorColor[i].style.backgroundColor = "deeppink";
    valorColor[i].style.color = "white";
    valorColor[i].style.fontWeight = "bold";
  }

  else if (utilidadColor[i].textContent >= puntoEquilibrio * cua) {
    valorColor[i].style.backgroundColor = "gold";
    valorColor[i].style.color = "rgb(50,50,50)";
  }
}
