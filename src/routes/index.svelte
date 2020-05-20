<script >
	import { onMount } from 'svelte';	
	import SvgDataPoints from './_helpers/SvgDataPoints.svelte'
	import SvgContent from './_helpers/SvgContent.svelte'
	import SvgPersonalSettings from './_helpers/SvgPersonalSettings.svelte'
	import SvgResearching from './_helpers/SvgResearching.svelte'
	import SvgSavings from './_helpers/SvgSavings.svelte'
	import Footer from './_helpers/Footer.svelte'
	import Nav from './_helpers/Nav.svelte'

	onMount(async ()=>{

	})
</script>

<svelte:head>
	<title>Notificon: Mantente actualizado</title>
</svelte:head>
<Nav></Nav>
<div class="px-6 w-full md:w-3/4 mx-auto">

	<div class="flex flex-col-reverse sm:flex-row items-center text-center md:space-x-20 mt-40">
		<div class="w-full md:w-1/2 font-serif md:px-10">
			<h2 class="text-3xl md:text-5xl text-gray-800 font-serif">
				Contruye tu internet
			</h2>
			<h3 class="text-xl md:text-3xl font-light text-gray-600 mb-16">
				Tus WEBs favoritas en un solo lugar sin tener que abrir un montón de páginas. Organizate, descubre cosas nuevas y ahorra tiempo y datos.
			</h3>
			<a href="/home" class="inline-block text-lg py-3 px-6 bg-purple-600 text-white rounded-lg shadow-lg	 text-xl font-semibold">Comenzar</a>
			<a href="/config" class="inline-block text-lg py-3 px-6 bg-white text-gray-800 rounded-lg shadow-lg text-xl border ml-6">Preferencias</a>
		</div>
		<div class="w-full md:w-1/2">
			<SvgContent klass="w-full fill-current text-purple-600"></SvgContent>
		</div>
	</div>

	<div class="mt-56 text-center">

		<h3 class="text-4xl font-semibold">Actualizate con Notificon</h3>
		<p class="text-3xl font-light text-gray-600 max-w-3xl mx-auto ">Notificon simplifica lo que ves en internet: noticias, videos, podcast, recetas de cocina, efemerides, estado del tiempo, libros y cada día con nuevos servicios</p>
		<div class="grid grid-cols-3 space-x-10 mt-20">

			<div class="text-center ">
				<SvgPersonalSettings class="h-48 object-contain mx-auto"/>
				<div class="mt-10 px-10">
					<h4 class="text-3xl font-semibold">Organizado</h4>
					<p class="text-2xl font-light text-gray-600">Selecciona solo la información quieres ver. Notificón mantiene un diseño claro y organizado, sin distracciones ni publicidad.</p>
				</div>
			</div>
			<div class="text-center ">
				<SvgResearching class="h-48 object-contain  mx-auto"/>
				<div class="mt-10 px-10">
					<h4 class="text-3xl font-semibold">Divertido</h4>
					<p class="text-2xl  font-light text-gray-600">Notificon bestialmente sencillo, solo muestra la información más actualizada y para todos los gustos.</p>
				</div>
			</div>
			<div class="text-center ">
				<SvgSavings class="h-48 w-auto object-contain mx-auto"/>
				<div class="mt-10 px-10">
					<h4 class="text-3xl font-semibold">Ahorra</h4>
					<p class="text-2xl font-light text-gray-600">Ahorras tiempo al no visitar todos los sitios. Notificón te limpia los datos y ahorras el paquete contratado.</p>
				</div>
			</div>
		</div>
		<a href="/home" class="mt-20 inline-block text-lg py-4 px-10 border border-purple-600 text-purple-600 rounded-lg shadow-lg	 text-xl font-semibold">Comenzar</a>

	</div>
</div>


<Footer></Footer>


