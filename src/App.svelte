<script >
	import { onMount } from 'svelte';
	import Nasa from './components/Nasa.svelte';
	import Marti from './components/Marti.svelte';
	import Covid19 from './components/Covid19.svelte';
	import Articles from './components/Articles.svelte';
	import Gaceta from './components/Gaceta.svelte';
	import Insmet from './components/Insmet.svelte';
	import Recetasgratis from './components/Recetasgratis.svelte';

	let articles = [];
	let sites = [
		{ name: 'Cubadebate', url: 'http://www.cubadebate.cu/feed'},
		{ name: 'Revista Vistar', url: "https://vistarmagazine.com/rss"},
		{ name: 'Claustrofobias', url: "https://www.claustrofobias.com/rss"},
		{ name: 'Planeta Curioso', url: "https://www.planetacurioso.com/rss"},
		// { name: 'RT en español', url: "https://actualidad.rt.com/feeds/all.rss"},
	]	
	onMount( async () => {

	});	

</script>
<div class="container">
	<header class="hero is-full-screen">
		<div class="is-center is-vertical-align text-center">
			<h1 class="is-marginless">Vistazo</h1>
			<h3>Donde comienza todo</h3>
<!-- 			<div class="row">
				<div class="col"><b>Ahorra tus datos móviles</b></div>
				<div class="col"><b>Lo que necesitas saber en un solo lugar</b></div>
				<div class="col"><b>Navega sin distracciones</b></div>
			</div> -->
			<a href="#main" class="darr">&darr;</a>
		</div>
	</header>
	<main id="main">

		<Covid19 name="Casos COVID-19"/>
		<!-- <Insmet name="Pronóstico del Tiempo"/>	 -->
		<Marti name="Marti"/>	
		{#each sites as item, index}
			<Articles 
				name="{item.name}"
				site="{item.url}" />
		{/each}
		<Nasa name="Foto NASA"/>	
		<Gaceta name="Gaceta"/>	
		<Recetasgratis name="Recetas"/>	


	</main>
	<footer class="mt1">
		<div class="nav">
			<nav class="nav-center">
				<a href="https://github.com/sotoplatero/vistazo">Código</a>
			</nav>			
		</div>
	</footer>
	
</div>