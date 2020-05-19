<script>
	import { onMount } from 'svelte';	
	import Card from './ui/CardBase.svelte'
	import ButtonReload from './ui/ButtonReload.svelte'

	let blockquote
	let loading = false

	async function loadQuote() {
		loading = true
		let response = await fetch('/.netlify/functions/frases')
		blockquote = await response.json()
		loading = false
	}
	onMount(async ()=>{
		loadQuote()
	})
</script>

{#if blockquote}
	<Card title="Frases Famosas">
		<div class="font-bold">{blockquote.content}</div>
		<div class="my-2 text-sm text-right">
			<a href="{blockquote.url}">{blockquote.author}</a><br>
			<span>{blockquote.about}</span>
		</div>	
		<ButtonReload on:click={loadQuote}/>
		{#if loading==true}
			<div class="absolute w-full top-0 left-0 h-full opacity-50 botton-0 bg-gray-100 rounded-sm"></div>
		{/if}
	</Card>
{/if}

