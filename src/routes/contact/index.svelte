<script>
	function handleSubmit(evt) {
		console.log(evt)
		return true
	}
</script>
<h2 class="text-3xl mt-16">Contacto</h2>
<p class="mb-6 text-gray-700">
	Escribe cuando quieras.
</p>

<a href="/success" class="hidden">success</a>
<form name="contact0" method="POST" action="/success" netlify-honeypot="bot-field" data-netlify="true" on:submit={handleSubmit}>
	<p class="hidden">
	  <label><input name="bot-field" /></label>
	</p>

	<div class="mb-4">
	  <label class="block text-gray-700 font-bold mb-1">Correo Electrónico</label>
	  <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="email" name="email">
	</div>

	<div class="mb-4">
	  <label class="block text-gray-700 font-bold mb-1">Mensaje</label>
	  <textarea
	    class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" name="message" rows="5"></textarea>
	</div>

	<div class="control">
	  <button class="bg-gray-800 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Enviar &rarr;</button>
	  <a href="/" class="bg-gray-200 hover:bg-purple-500 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:text-white">&larr; Regresar al inicio</a>
	</div>
</form>		