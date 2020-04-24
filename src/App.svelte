<script >
	import { onMount } from 'svelte';
	import Nasa from './components/Nasa.svelte';
	import Marti from './components/Marti.svelte';
	import Cubadebate from './components/Cubadebate.svelte';
	import Covid19 from './components/Covid19.svelte';
	import Vistar from './components/Vistar.svelte';

	let articles = [];

	onMount( async () => {

	});	

</script>
<main class="container">
	<header class="hero is-full-screen">
		<div class="is-center is-vertical-align text-center">
			<h1 class="is-marginless">Vistazo</h1>
			<h2>Lo que necesitas para comenzar el día en Cuba</h2>
		</div>
	</header>

	<Covid19/>
	<hr>
	<Cubadebate/>	
	<hr>
	<Marti/>	
	<hr>
	<Vistar/>	
	<hr>
	<Nasa/>	

	<footer>
		<a href="https://github.com/sotoplatero/vistazo">Codigo</a>
	</footer>
</main>