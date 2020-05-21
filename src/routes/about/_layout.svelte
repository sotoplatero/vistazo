<script>
	import Footer from '../_helpers/Footer.svelte'
	import Nav from '../_helpers/Nav.svelte'
</script>

<Nav/>
<main class="container p-2 min-h-screen text-lg">
	<div class="w-full md:w-1/2 mx-auto">	
		<slot></slot>
	</div>
</main>
<Footer/>
