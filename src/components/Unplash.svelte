<script>
	import { onMount } from 'svelte';	

	let loading = false
	let photos

	async function loadData() {
		loading = true
		let response = await fetch('/.netlify/functions/unplash')
		photos = await response.json()
		loading = false
	}
	onMount(async ()=>{
		loadData()
	})
</script>

{#if photos}
<div class="grid grid-cols-2">
	{#each photos as photo, index}
	<div class="m-2">
		<div class="relative pb-3/4 m-2">
			<img
				class="absolute h-full w-full object-cover" 
				src="{photo.urls.small}" 
				alt="{photo.alt_description}">
		</div>
		
	</div>
	{/each}
</div>
{/if}

