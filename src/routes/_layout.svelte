<script>
import Tailwindcss from '../Tailwindcss.svelte';	
	import Nav from '../components/_/Nav.svelte';

	export let segment;
</script>

<Nav {segment}/>

<main class="container p-2">
	<div class="w-full md:w-1/2 mx-auto">	
		<slot></slot>
	</div>
</main>