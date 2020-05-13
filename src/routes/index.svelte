<script >
	import { onMount } from 'svelte';	

	import Nasa from '../components/Nasa.svelte'
	import Image from '../components/ui/image.svelte'
	import Unplash from '../components/Unplash.svelte'
	import Cat from '../components/Cat.svelte'
	import Dog from '../components/Dog.svelte'
	import Quote from '../components/Quote.svelte'
	import Recipe from '../components/Recipe.svelte'
	import NumberFact from '../components/NumberFact.svelte'
	import Covid19 from '../components/Covid19.svelte'
	import Gaceta from '../components/Gaceta.svelte'
	import Marti from '../components/Marti.svelte'
	import Podcast from '../components/Podcast.svelte'
	import Tv from '../components/Tv.svelte'
	import Articles from '../components/Articles.svelte'
	import Insmet from '../components/Insmet.svelte'

	let settings
	let feeds

	onMount(async ()=>{
		let storeSettings = await import('../stores/settings')	
		settings = storeSettings.settings
		let storeFeeds = await import('../stores/store')	
		feeds = storeFeeds.feeds
		console.log(storeFeeds)	
	})
</script>
<svelte:head>
	<title>Notificon: Mantente actualizado</title>
</svelte:head>
<div class="text-center py-20 px-6">
	<h2 class="text-2xl md:text-4xl font-semibold md:font-bold text-gray text-gray-800">Mantente actualizado</h2>
	<h3 class="text-xl text-gray-600">
		<p class="mb-2">Optimiza tu tiempo en internet</p>
		<p>Ahorra tus datos móviles.</p>
	</h3>
</div>

<!-- <Covid19/>
<Insmet/>
{#if settings}
	<Marti/>
	<NumberFact/>
	{#if $settings.find(el=>el.id==='cats').value}
		<Cat/>
	{/if}
	<Gaceta/>
	{#if $settings.find(el=>el.id==='recipes').value}
		<Recipe/>
	{/if}
	{#if $settings.find(el=>el.id==='dogs').value}
		<Dog/>
	{/if}
	<Quote/>
	{#if $settings.find(el=>el.id==='nasa').value}
		<Nasa/>
	{/if}
	{#if $settings.find(el=>el.id==='podcats').value}
		<Podcast/>
	{/if}
	{#if $settings.find(el=>el.id==='tv').value}
		<Tv/>
	{/if}
{/if} 

{#if feeds}
	{#each $feeds as feed, index}
		<Articles url="{feed}" />	
	{/each}
{/if}
 -->
