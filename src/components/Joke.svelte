<script>
	import { onMount } from 'svelte';	
	import Card from './ui/CardBase.svelte'
	import ButtonReload from './ui/ButtonReload.svelte'

	let data
	let loading = false

	async function load(argument) {
		loading = true
		let response = await fetch('/.netlify/functions/joke')
		data = await response.json()
		loading = false
	}
	onMount(async ()=>{
		load()
	})
</script>

{#if data}
	<Card title="Chiste" url="{data.url}">
		<p class="mb-4">
			{@html data.content} 
			<span class="block text-gray-500">{data.url}</span>
		</p>
		<ButtonReload on:click={load}/>
		{#if loading==true}
			<div class="absolute w-full top-0 left-0 h-full opacity-50 botton-0 bg-gray-100 rounded-sm"></div>
		{/if}		
	</Card>
{/if}

