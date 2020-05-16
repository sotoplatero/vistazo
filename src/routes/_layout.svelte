<script>
	import Nav from '../components/_/Nav.svelte';
	export let segment;
</script>
<svelte:body class="pt-16"/>
<Nav {segment}/>

<main class="container p-2 min-h-screen">
	<div class="w-full md:w-1/2 mx-auto">	
		<slot></slot>
	</div>
</main>

<footer class="py-12 bg-gray-600 mt-10">
	<div class="container">
		<div class="w-full md:w-1/2 mx-auto">

			<p class="mb-6 text-gray-200 text-center">Si quieres incluir alguna información o contactarnos escribenos</p>
			<a href="/success" class="hidden"></a>
			<form name="contact0" method="POST" action="/success" netlify-honeypot="bot-field" data-netlify="true">
				<p class="hidden">
				  <label><input name="bot-field" /></label>
				</p>

				<div class="mb-4">
				  <label class="block text-gray-200 text-sm font-bold mb-2">Correo Electrónico</label>
				  <input class="bg-gray-400 appearance-none border-0 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-gray-200" type="email" name="email">
				</div>

				<div class="mb-4">
				  <label class="block text-gray-200 text-sm font-bold mb-2">Mensaje</label>
				  <textarea
				    class="bg-gray-400 appearance-none border-0 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-gray-200" name="message" rows="5"></textarea>
				</div>

				<div class="control">
				  <button class="bg-gray-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Enviar &rarr;</button>
				</div>
			</form>			

          <div class="mt-8">
			<ul class="">
			    <li>
			      <a href="about" class="text-gray-200">Nosotros</a>
			    </li>		
			    <li>
			      <a href="https://github.com/sotoplatero/vistazo.git" target="_blank" class="text-gray-200">Código</a>
			    </li>		
			</ul>          
          </div>
		</div>
	</div>
</footer>