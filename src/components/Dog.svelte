<script>
	import { onMount } from 'svelte';			
	import Image from './ui/CardImage.svelte';
    // import { RefreshCwIcon, ImageIcon } from 'svelte-feather-icons'	
	let photo 

	async function loadImage() {
		let response = await fetch('/api/unsplash?q=dogs&size=1')
		let json = await response.json();
		photo = json[0]
	} 
	onMount(() => {
		loadImage()
	})	
</script>

{#if photo}
	<Image
		on:reload={loadImage}
		alt="{photo.alt_description}" 
		url="{photo.links.download_location}" 
		src={photo.urls.small}>
		<span slot="caption">
			Foto de <a href="{photo.user.portfolio_url}">{photo.user.name}</a> desde <a href="http://unsplash.com">Unsplash</a>
		</span>
	</Image>	
{/if}
