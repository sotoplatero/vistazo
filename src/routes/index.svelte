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
	import EcuredCuriosities from '../components/EcuredCuriosities.svelte'
	import EcuredEphemeris from '../components/EcuredEphemeris.svelte'


	import Lucasnometro from '../components/Lucasnometro.svelte'

	let settings
	let feeds

	onMount(async ()=>{
		let storeSettings = await import('../stores/settings')	
		settings = storeSettings.settings
		let storeFeeds = await import('../stores/store')	
		feeds = storeFeeds.feeds
	})
</script>
<svelte:head>
	<title>Notificon: Mantente actualizado</title>
</svelte:head>
<div class="text-center py-20 px-6">
	<h2 class="text-2xl md:text-4xl font-semibold md:font-bold text-gray text-gray-800">Mantente actualizado</h2>
	<h3 class="text-xl text-gray-600">
		<p class="mb-2">Optimiza el tiempo en internet</p>
		<p>Ahorra tus datos móviles.</p>
	</h3>
</div>


<Covid19/>
{#if settings}
	{#if $settings.some(el=>el.id==='insmet' && el.value==true)}
		<Insmet/>
	{/if}
	{#if $settings.some(el=>el.id==='lucasnometro' && el.value==true)}
		<Lucasnometro/>
	{/if}
	<Marti/>
	{#if $settings.some(el=>el.id==='ecured-curiosity' && el.value==true)}
		<EcuredCuriosities/>
	{/if}
	{#if $settings.some(el=>el.id==='ephemerides' && el.value==true)}
		<EcuredEphemeris/>
	{/if}
	{#if $settings.some(el=>el.id==='number' && el.value==true)}
		<NumberFact/>
	{/if}
	{#if $settings.some(el=>el.id==='cats' && el.value==true)}
		<Cat/>
	{/if}
	<Gaceta/>
	{#if $settings.some(el=>el.id==='recipes' && el.value==true)}
		<Recipe/>
	{/if}
	{#if $settings.some(el=>el.id==='dogs' && el.value==true)}
		<Dog/>
	{/if}
	<Quote/>
	{#if $settings.some(el=>el.id==='nasa' && el.value==true)}
		<Nasa/>
	{/if}
	{#if $settings.some(el=>el.id==='podcats' && el.value==true)}
		<Podcast/>
	{/if}
	{#if $settings.some(el=>el.id==='tv' && el.value==true)}
		 <Tv/> 
	{/if}
{/if} 

{#if feeds}
	{#each $feeds as feed, index}
		<Articles url="{feed}" />	
	{/each}
{/if}


