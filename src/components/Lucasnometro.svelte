<script>
	import CardBase from './ui/CardBase.svelte';
	import Button from './ui/button.svelte';
	import { onMount } from 'svelte';
	let data
	onMount(async() => {
		let response = await fetch('/.netlify/functions/lucasnometro')
		data = await response.json()
	})
</script>

{#if data}
	<CardBase>
		<header class="flex items-center mb-8">
			<img src="/.netlify/functions/image?url=http://www.loslucas.icrt.cu/wp-content/uploads/2019/11/logo-tipografico.png" class="h-10 w-10 overflow-hidden mr-6" alt="logo ecured">
			<div class="w-auto overflow-hidden">
				<h3 class="font-bold text-xl truncate">Lucasnómetro Semanal</h3>
<!-- 				<div class="break-normal font-semibold text-lg truncate text-gray-700">
					<a href="https://www.ecured.cu/{data.day}">Efemérides {data.day}</a>
				</div>	 -->			
			</div>
		</header>
		<div class="lucasnometro">
			{#each data as item, index}
				<div class="flex items-center my-2"> 
					<span class="text-2xl font-bold mr-4">{item.position}</span>
					<span><a target="_blank" href="{item.video}">{item.title}</a></span>
				</div>								
			{/each}
		</div>
	</CardBase>
{/if}

