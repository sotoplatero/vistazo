<script>
	import Nav from '../../components/_/Nav.svelte';
	export let segment;
</script>
<svelte:body class="pt-16"/>
<Nav {segment}/>

<main class="container p-2 min-h-screen">
	<div class="w-full md:w-1/2 mx-auto">	
		<slot></slot>
	</div>
</main>

<footer class="py-10 bg-gray-100 mt-10">
	<div class="container">
		<div class="w-full md:w-1/2 mx-auto">
          <div class="text-center">
          	<div class="bg-gray-200 p-8 rounded-lg mb-8">
				<h1 class="text-lg font-semibold">Notificon</h1>
				<p class="text-justify">Concentra la información que más usan los cubanos en internet: noticias, imagénes, podcast, curiosidades. Permitiendo que optimices el tiempo en internet y ahorres el paquete de Datos.</p>          	
          	</div>
			<a href="/about" class="mx-2">Nosotros</a>
			<span class="text-gray-400">&bull;</span>
			<a href="/contact" class="mx-2">Contacto</a>
			<span class="text-gray-400">&bull;</span>
			<a href="https://github.com/sotoplatero/vistazo.git" target="_blank" class="mx-2">Código</a>
          </div>
		</div>
	</div>
</footer>