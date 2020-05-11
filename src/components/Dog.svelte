<script>
	import { onMount } from 'svelte';			
	import Image from './ui/image.svelte';
    // import { RefreshCwIcon, ImageIcon } from 'svelte-feather-icons'	
	let src 
	let loading = false 

	async function loadImage() {
		loading = true
		let response = await fetch('https://dog.ceo/api/breeds/image/random')
		let json = await response.json();
		src = json.message
	} 
	onMount(async () => {
		await loadImage()
	})	
</script>

<Image src={src} name="Perrito Lindo" bind:loading={loading} on:click={loadImage}/>
