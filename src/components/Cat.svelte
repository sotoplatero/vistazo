<script>
	import { onMount } from 'svelte';			
	import Image from './ui/CardImage.svelte';
    // import { RefreshCwIcon, ImageIcon } from 'svelte-feather-icons'	
	let src 
	let loading = false 

	async function loadImage() {
		loading = true
		let response = await fetch('https://api.thecatapi.com/v1/images/search')
		let json = await response.json();
		src = json[0].url
	} 
	onMount(async () => {
		await loadImage()
	})	
</script>

<Image
	on:reload={loadImage}
	name="Gaticos" 
	src={src}/>