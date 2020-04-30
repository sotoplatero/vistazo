<script >
	import { onMount } from 'svelte';
	import 'bulma/css/bulma.css'

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
	import Twitter from './components/Twitter.svelte';

	import Nav from './components/Nav.svelte';
	import Hero from './components/Hero.svelte';
	

</script>
<Hero/>
<div class="container">
	<div class="columns is-centered">
		<div class="column is-two-thirds ">
			<main id="main" >

				<Twitter name="COVID-19 Cuba"/>
				<Covid19 name="COVID-19 Cuba"/>
				<!-- <Insmet name="Pronóstico del Tiempo"/>	 -->
				<Quote name="Recetas"/>	
				<Articles 
					name="Planeta Curioso"
					site="https://www.planetacurioso.com/rss" />
				<Podcast/>
				<Marti name="Marti"/>	
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
				<Rates name="Tasas de cambio"/>	
			</main>
			<footer class="mt1">
				<div class="nav">
					<nav class="nav-center">
						<a href="https://github.com/sotoplatero/vistazo">Código</a>
					</nav>			
				</div>
			</footer>
			
		</div>
	</div>
	
</div>