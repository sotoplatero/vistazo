<script context="module">
	// the (optional) preload function takes a
	// `{ path, params, query }` object and turns it into
	// the data we need to render the page
	export async function preload(page, session) {
		const { component } = page.params;
		return { name: component };
	}
</script>
<script>
	import { onMount } from 'svelte';		

	export let name;
	console.log(name)
	let Component

	onMount(async ()=>{
		let response
		if (name == 'marti') {
			response = await import(`../../components/Marti.svelte`)
		} else if ( name=='ecured-curiosidades' ) {
			response = await import(`../../components/EcuredCuriosities.svelte`)
		} else if ( name=='gaceta' ) {
			response = await import(`../../components/Gaceta.svelte`)
		} else if ( name=='podcast' ) {
			response = await import(`../../components/Podcast.svelte`)
		} else if ( name=='unplash' ) {
			response = await import(`../../components/Unplash.svelte`)
		}
		Component = await response.default
	})
</script>

<main class="container p-2 min-h-screen">
	<div class="w-full md:w-1/2 mx-auto">	
		<svelte:component this="{Component}" />
	</div>
</main>
