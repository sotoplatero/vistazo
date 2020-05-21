<script >
	import { onMount } from 'svelte';	

	import Nasa from '../../components/Nasa.svelte'
	import Image from '../../components/ui/image.svelte'
	import Unplash from '../../components/Unplash.svelte'
	import Cat from '../../components/Cat.svelte'
	import Dog from '../../components/Dog.svelte'
	import Quote from '../../components/Quote.svelte'
	import Recipe from '../../components/Recipe.svelte'
	import NumberFact from '../../components/NumberFact.svelte'
	import Covid19 from '../../components/Covid19.svelte'
	import Gaceta from '../../components/Gaceta.svelte'
	import Marti from '../../components/Marti.svelte'
	import Podcast from '../../components/Podcast.svelte'
	import Tv from '../../components/Tv.svelte'
	import Articles from '../../components/Articles.svelte'
	import Insmet from '../../components/Insmet.svelte'
	import EcuredCuriosities from '../../components/EcuredCuriosities.svelte'
	import EcuredEphemeris from '../../components/EcuredEphemeris.svelte'
	import Joke from '../../components/Joke.svelte'


	import Lucasnometro from '../../components/Lucasnometro.svelte'

	let settings
	let feeds

	onMount(async ()=>{
		let storeSettings = await import('../../stores/settings')	
		settings = storeSettings.settings
		feeds = storeSettings.rss
	})
</script>
<svelte:head>
	<title>Notificon: Mantente actualizado</title>
</svelte:head>
<!-- <div class="text-center py-20 px-6">
	<h2 class="text-2xl md:text-4xl font-semibold md:font-bold text-gray text-gray-800"></h2>
	<h3 class="text-xl text-gray-600">
		<p class="mb-2">Optimiza el tiempo en internet</p>
		<p>Ahorra tus datos móviles.</p>
	</h3>
</div> -->


<Covid19/>
{#if settings}
	{#if $settings.includes('joke')}
		<Joke/>
	{/if}
	{#if $settings.includes('insmet')}
		<Insmet/>
	{/if}
	{#if $settings.includes('lucasnometro')}
		<Lucasnometro/>
	{/if}
	{#if $settings.includes('marti')}
		<Marti/>
	{/if}
	{#if $settings.includes('ecured-curiosities')}
		<EcuredCuriosities/>
	{/if}
	{#if $settings.includes('ecured-ephemeris')}
		<EcuredEphemeris/>
	{/if}
	{#if $settings.includes('number')}
		<NumberFact/>
	{/if}
	{#if $settings.includes('cats')}
		<Cat/>
	{/if}
	{#if $settings.includes('gaceta')}
		<Gaceta/>
	{/if}
	{#if $settings.includes('recipes')}
		<Recipe/>
	{/if}
	{#if $settings.includes('dogs')}
		<Dog/>
	{/if}
	{#if $settings.includes('quote')}
		<Quote/>
	{/if}
	{#if $settings.includes('nasa')}
		<Nasa/>
	{/if}
	{#if $settings.includes('cubapod')}
		<Podcast/>
	{/if}
	{#if $settings.includes('tv')}
		 <Tv/> 
	{/if}
{/if} 

{#if feeds}
	{#each $feeds as feed, index}
		<Articles url="{feed}" />	
	{/each}
{/if}


