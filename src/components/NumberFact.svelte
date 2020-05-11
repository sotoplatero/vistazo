<script>
	import { onMount } from 'svelte';	
	import Box from './ui/box.svelte'
    import { RefreshCwIcon } from 'svelte-feather-icons'	

	let data
	let trivia
	let loading = false
	let loadingTrivia = false

	async function loadData(argument) {
		try {
			loading = true
			let response = await fetch('/.netlify/functions/json?url=http://numbersapi.com/random/math?json')
			data = await response.json()
			loading = false
		} catch (err) {
		   return { statusCode: 500, body: err.toString() }
		}
	}
	async function loadTrivia(argument) {
		loadingTrivia = true
		let response = await fetch('/.netlify/functions/json?url=http://numbersapi.com/random/trivia?json')
		trivia = await response.json()

		let UrlTraslate = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20191219T105237Z.03994bc721efd854.e5e84c0b3be9d212336fb51de2e7aa5519a58e2b&lang=en-es&text=${trivia.text}`
		let responseTraslate = await fetch(UrlTraslate)
		let dataTraslate = await responseTraslate.json()

		trivia = {...trivia, es: dataTraslate.text[0]}

		loadingTrivia = false
	}
	onMount(async ()=>{
		// loadData()
		loadTrivia()
	})
</script>

{#if trivia && trivia.es}
	<Box color="red" content={trivia.es} on:reload="{loadTrivia}" loading={loadTrivia}>
		<p class="mt-2 font-normal">{trivia.text}</p>
	</Box>
{/if}

