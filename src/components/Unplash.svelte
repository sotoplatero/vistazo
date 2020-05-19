<script>
	import { onMount } from 'svelte';	

	let loading = false
	let query = 'cuba'
	let photos

	async function loadData() {
		loading = true
		let response = await fetch(`/.netlify/functions/unplash?q=${query}`)
		photos = await response.json()
		loading = false
	}
	onMount(async ()=>{
		loadData()
	})
</script>

{#if photos}
<div class="grid grid-cols-2 rounded-lg overflow-hidden">
	<!-- <div class=""> -->
	{#each photos as photo, index}
		<div class="relative pb-3/4 border border-white">
			<img
				class="absolute h-full w-full object-cover" 
				src="{photo.urls.small}" 
				alt="{photo.alt_description}">
		</div>
	{/each}
	<!-- </div> -->
</div>
{/if}

