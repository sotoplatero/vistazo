<script>
	import CardBase from './ui/CardBase.svelte';
	import { onMount } from 'svelte';
	let data
	onMount(async() => {
		let response = await fetch('/.netlify/functions/ecured')
		data = await response.json()
	})
</script>

{#if data}
	<CardBase>
		<header class="flex items-center mb-8">
			<img src="https://www.ecured.cu/ecured-logo.png" class="h-10 w-10 overflow-hidden mr-6" alt="logo ecured">
			<div class="w-auto overflow-hidden">
				<h3 class="font-bold text-xl truncate">Ecured</h3>
				<div class="break-normal font-semibold text-lg truncate text-gray-700">
					Efemérides {data.day}</div>				
			</div>
		</header>
		<div class="ephemerides">
			{@html data.content}
		</div>
	</CardBase>
{/if}

