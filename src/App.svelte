<script>
	import { onMount } from 'svelte';
	import Nasa from './components/Nasa.svelte';
	import Marti from './components/Marti.svelte';
	import Cubadebate from './components/Cubadebate.svelte';

	let articles = [];

	onMount( async () => {
		let urlNewsApi = 'https://newsapi.org/v2/top-headlines?country=cu&pageSize=5&apiKey=f45a787764d742bc839aade7798b887c'
		let response = await fetch(urlNewsApi).then(r => r.json());
		articles = response.articles
	});	

	export let name;
</script>
<header>
	<h1>TNTrasT <small>Te Enteraste</small></h1>
</header>
<main>
	<Marti/>	
	<hr>
	<Cubadebate/>	
	<hr>
	<Nasa/>	
</main>

<svelte:head>
	<link rel="stylesheet" href="awsm.min.css">
	<title>TNTrasT</title>
</svelte:head>