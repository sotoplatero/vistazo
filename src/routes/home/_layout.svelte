<script>
	import Nav from '../_helpers/Nav.svelte';
	import Footer from '../_helpers/Footer.svelte';
	// export let segment = '';
</script>

<Nav/>
<main class="container p-2 min-h-screen mt-20">
	<div class="w-full md:w-1/2 mx-auto">	
		<slot></slot>
	</div>
</main>
<Footer/>

