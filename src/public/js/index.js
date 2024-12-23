
const parametros = {
	anio: 2024,
}

console.log(`%cNodeJS ${parametros.anio}`, "font-size:2rem; color:lime;");


const header = document.getElementById("header_container");
const footer = document.getElementById("footer_container");
const anio = document.querySelectorAll(".anio")

header.innerHTML = `

<nav class="nav_container">
	<ul>
		<a href="/total"><li>🌈Mounts</li></a>
		<a href="/day"><li>🎭Days</li></a>
		<a href="/search" class="primario"><li>REGISTER</li></a>
		<a href="/sales"><li>🐾Registered</li></a>
		<a href="/sales/date"><li>🏀Search</li></a>
		<a href="/sales/separado"><li>🛹Deptors</li></a>
		<a href="/products"><li>🏐Code</li></a>
		<a href="/products/stock"><li>🎱Stock</li></a>
		<a href="/products/searchStock"><li>🍑🍌</li></a>
	</ul>
</nav>
`;

footer.innerHTML = `

<p class="tech_text">
	<img src="/img/mysql.svg" />
	<img src="/img/html5.svg" />
	<img src="/img/css3.svg" />
	<img src="/img/javascript.svg" />
	<img src="/img/nodejs.svg" />
</p>
<p class="text1">App para registrar las ventas de <strong>Pinkylin Moda Intima</strong></p>
<p class="text2">Creada por <strong>@CRKJ</strong> para Pinkylin Moda Intima 😎👍 ${parametros.anio}</p>
`;

anio.textContent = parametros.anio