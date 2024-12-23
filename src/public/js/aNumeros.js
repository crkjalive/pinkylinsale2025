let venta = document.querySelectorAll('.totalVenta')
let costo = document.querySelectorAll('.totalCosto')
let utilidad = document.querySelectorAll('.totalUtilidad')
let cantidad = document.querySelectorAll('.totalCantidad')
let granformato = document.querySelectorAll('.formato')

let aNumeros0 = 0;
let aNumeros1 = 0;
let aNumeros2 = 0;
let aNumeros3 = 0;
let aNumeros4 = 0;

for (let i = 0; i < venta.length; i++) {
  aNumeros0 = new Intl.NumberFormat('es-ES').format(venta[i].textContent)
  venta[i].textContent = '$ ' + aNumeros0
}

for (let i = 0; i < costo.length; i++) {
  aNumeros1 = new Intl.NumberFormat('es-ES').format(costo[i].textContent)
  costo[i].textContent = '$ ' + aNumeros1
}

for (let i = 0; i < utilidad.length; i++) {
  aNumeros2 = new Intl.NumberFormat('es-ES').format(utilidad[i].textContent)
  utilidad[i].textContent = '$ ' + aNumeros2
}

for (let i = 0; i < cantidad.length; i++) {
  aNumeros3 = new Intl.NumberFormat('es-ES').format(cantidad[i].textContent)
  cantidad[i].textContent = aNumeros3
}

for (let i = 0; i < granformato.length; i++) {
  aNumeros4 = new Intl.NumberFormat('es-ES').format(granformato[i].textContent)
  granformato[i].textContent = aNumeros4
}
