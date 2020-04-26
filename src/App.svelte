<script >
	import { onMount } from 'svelte';
	import Nasa from './components/Nasa.svelte';
	import Marti from './components/Marti.svelte';
	import Covid19 from './components/Covid19.svelte';
	import Articles from './components/Articles.svelte';

	let articles = [];
	let sites = [
		{ name: 'Cubadebate', url: 'http://www.cubadebate.cu/feed'},
		{ name: 'Revista Vistar', url: "https://vistarmagazine.com/rss"},
		{ name: 'Clautrofobias', url: "https://www.claustrofobias.com/rss"},
		{ name: 'Planeta Curioso', url: "https://www.planetacurioso.com/rss"},
	]
	onMount( async () => {

	});	

</script>
<div class="container">
	<header class="hero is-full-screen">
		<div class="is-center is-vertical-align text-center">
			<h1 class="is-marginless">Vistazo</h1>
			<h2>Lo último en un solo lugar</h2>
			<span class="darr">&darr;</span>
		</div>
	</header>
	<main class="container">

		<Covid19/>
		<Marti name="Marti"/>	
		{#each sites as item, index}
			<Articles 
				name="{item.name}"
				site="{item.url}" />
		{/each}
		<Nasa/>	

	</main>
	<footer>
		<a href="https://github.com/sotoplatero/vistazo">Codigo</a>
	</footer>
	
</div>