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
</header>
<main>
	<Covid19/>
	<Marti/>	
	<hr>
	<Cubadebate/>	
	<hr>
	<Nasa/>	
</main>

<svelte:head>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/kognise/water.css@latest/dist/light.min.css">
	<title>TNTrasT</title>
</svelte:head>