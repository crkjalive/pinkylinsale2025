let ocultarConteo = document.getElementById('ocultarConteo')
let mostrarConteo = document.getElementById('mostrarConteo')

let ocultarVenta = document.getElementById('ocultarVenta')
let mostrarVenta = document.getElementById('mostrarVenta')

let ocultarCosto = document.getElementById('ocultarCosto')
let mostrarCosto = document.getElementById('mostrarCosto')

let ocultarUtilidad = document.getElementById('ocultarUtilidad')
let mostrarUtilidad = document.getElementById('mostrarUtilidad')

let ocultarPrendas = document.getElementById('ocultarPrendas')
let mostrarPrendas = document.getElementById('mostrarPrendas')

let conteo = new Intl.NumberFormat('es-ES').format(ocultarConteo.textContent)
mostrarConteo.textContent = conteo
ocultarConteo.style = 'display:none';


let precio = new Intl.NumberFormat('es-ES').format(ocultarCosto.textContent)
mostrarCosto.textContent = precio
ocultarCosto.style = 'display:none';

let utilidad = new Intl.NumberFormat('es-ES').format(ocultarUtilidad.textContent)
mostrarUtilidad.textContent = utilidad
ocultarUtilidad.style = 'display:none';

let venta = new Intl.NumberFormat('es-ES').format(ocultarVenta.textContent)
mostrarVenta.textContent = venta
ocultarVenta.style = 'display:none';

let prenda = new Intl.NumberFormat('es-ES').format(ocultarPrendas.textContent)
mostrarPrendas.textContent = prenda
ocultarPrendas.style = 'display:none';