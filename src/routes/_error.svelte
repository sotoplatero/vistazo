<script>
	export let status;
	export let error;

	const dev = process.env.NODE_ENV === 'development';
</script>

<svelte:head>
	<title>{status}</title>
</svelte:head>

<main class="container h-screen flex items-center">
	<div class="w-full  md:w-1/2 mx-auto">	
		<h1 class="text-6xl font-extrabold">{status}</h1>
		<p class="text-3xl font-semibold text-gray-600 mb-10">{error.message}</p>
		<a href="/home" class="text-2xl ">Seguimos &rarr;</a>
	</div>
</main>

{#if dev && error.stack}
	<pre>{error.stack}</pre>
{/if}
