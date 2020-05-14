<script>
	import Nav from '../components/_/Nav.svelte';
	export let segment;
</script>

<Nav {segment}/>

<main class="container p-2 min-h-screen">
	<div class="w-full md:w-1/2 mx-auto">	
		<slot></slot>
	</div>
</main>

<footer class="py-12 bg-gray-600 text-gray-200 text-center">
	<div class="container">
		<div class="w-full md:w-1/2 mx-auto">
			<ul>
		        <li>
		          <a href="about" class="text-gray-200">Nosotros</a>
		        </li>		
		        <li>
		          <a href="https://github.com/sotoplatero/vistazo.git" target="_blank" class="text-gray-200">Código</a>
		        </li>		
			</ul>	
		</div>
	</div>
</footer>