<script>
	import { onMount } from 'svelte';	
	import Card from './ui/CardBase.svelte'
	import ButtonReload from './ui/ButtonReload.svelte'

	let data
	let trivia
	let loading = false
	let loadingTrivia = false

	async function loadTrivia(argument) {
		loading = true
		let response = await fetch('/.netlify/functions/json?url=http://numbersapi.com/random/trivia?json')
		data = await response.json()

		let UrlTraslate = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20191219T105237Z.03994bc721efd854.e5e84c0b3be9d212336fb51de2e7aa5519a58e2b&lang=en-es&text=${data.text}`
		let responseTraslate = await fetch(UrlTraslate)
		let dataTraslate = await responseTraslate.json()

		data = {...data, es: dataTraslate.text[0]}

		loading = false
	}
	onMount(async ()=>{
		loadTrivia()
	})
</script>

{#if data}
	<Card title="Números curiosos">
		{#if data.es}
			<p class="font-bold mb-4">{data.es}</p>
		{/if}
		<p class="mb-4">{data.text}</p>
		<ButtonReload on:click={loadTrivia}/>
		{#if loading==true}
			<div class="absolute w-full top-0 left-0 h-full opacity-50 botton-0 bg-gray-100 rounded-sm"></div>
		{/if}		
	</Card>
{/if}

