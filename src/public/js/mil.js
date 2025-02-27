const mil = document.querySelectorAll(".mil")

let iteracion = 0

for (let i = 0; i < mil.length; i++) {
    iteracion = new Intl.NumberFormat('es-ES').format(mil[i].textContent)
    mil[i].textContent = iteracion
}