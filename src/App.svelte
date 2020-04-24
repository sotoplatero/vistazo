<script >
	import { onMount } from 'svelte';
	import Nasa from './components/Nasa.svelte';
	import Marti from './components/Marti.svelte';
	import Cubadebate from './components/Cubadebate.svelte';
	import Covid19 from './components/Covid19.svelte';

	let articles = [];

	onMount( async () => {

	});	

</script>
<header>
	<h1>Vistazo</h1>
	<h2>Un solo lugar para buscar lo que necesitas</h2>
</header>
<main>
	<Covid19/>
	<hr>
	<Cubadebate/>	
	<hr>
	<Marti/>	
	<hr>
	<Nasa/>	
</main>
<footer>
	<a href="https://github.com/sotoplatero/vistazo">Codigo</a>
</footer>