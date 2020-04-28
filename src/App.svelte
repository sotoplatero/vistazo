<script >
	import { onMount } from 'svelte';
	import Nasa from './components/Nasa.svelte';
	import Marti from './components/Marti.svelte';
	import Covid19 from './components/Covid19.svelte';
	import Articles from './components/Articles.svelte';
	import Gaceta from './components/Gaceta.svelte';
	import Insmet from './components/Insmet.svelte';
	import Recetasgratis from './components/Recetasgratis.svelte';
	import Quote from './components/Quote.svelte';
	import Rates from './components/Rates.svelte';
	import Podcast from './components/Podcast.svelte';

	import Nav from './components/Nav.svelte';

	let articles = [];
	let sites = [
		{ name: 'Planeta Curioso', url: "https://www.planetacurioso.com/rss"},
		{ name: 'Revista Vistar', url: "https://vistarmagazine.com/rss"},
		{ name: 'Cubadebate', url: 'http://www.cubadebate.cu/feed'},
		{ name: 'Claustrofobias', url: "https://www.claustrofobias.com/rss"},
		// { name: 'RT en español', url: "https://actualidad.rt.com/feeds/all.rss"},
	]	
	onMount( async () => {

	});	

</script>
<Nav></Nav>
<div class="container">
	<header class="hero is-full-screen">
		<div class="is-center is-vertical-align text-center">
			<h2 class="is-marginless">Toda la información del día</h2>
			<div class="row">
				<div class="col"><b>Ahorra tus datos móviles</b></div>
				<div class="col"><b>Lo que necesitas saber en un solo lugar</b></div>
				<div class="col"><b>Navega sin distracciones</b></div>
			</div>
			<a href="#main" class="darr">&darr;</a>
		</div>
	</header>
	<main id="main">

		<Covid19 name="Casos COVID-19"/>
		<!-- <Insmet name="Pronóstico del Tiempo"/>	 -->
		<Quote name="Recetas"/>	
		<Articles 
			name="Planeta Curioso"
			site="https://www.planetacurioso.com/rss" />
		<Podcast name="Podcasts"/>
		<Marti name="Marti"/>	
		<Rates name="Tasas de cambio"/>	
		<Articles 
			name="Vistar"
			site="https://vistarmagazine.com/rss" />
		<Recetasgratis name="Recetas"/>	
		<Articles 
			name="Cubadebate"
			site="http://www.cubadebate.cu/feed" />
		<Gaceta name="Gaceta"/>	
		<Nasa name="Foto NASA"/>	
		<Articles 
			name="Claustrofobias"
			site="https://www.claustrofobias.com/rss" />


	</main>
	<footer class="mt1">
		<div class="nav">
			<nav class="nav-center">
				<a href="https://github.com/sotoplatero/vistazo">Código</a>
			</nav>			
		</div>
	</footer>
	
</div>