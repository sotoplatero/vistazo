<script >
	import { onMount } from 'svelte';	
	import SvgDataPoints from './_helpers/SvgDataPoints.svelte'
	import SvgContent from './_helpers/SvgContent.svelte'

	onMount(async ()=>{

	})
</script>

<svelte:head>
	<title>Notificon: Mantente actualizado</title>
</svelte:head>

<div class="flex flex-col sm:flex-row items-center text-center py-20 px-6 w-full">
	<div class="w-full md:w-1/2 p-10">
		<h2 class="text-2xl md:text-4xl font-extrabold text-gray-800">
			Contruye tu internet
		</h2>
		<h3 class="text-2xl font-light text-gray-600 mb-16">
			Tus web favoritas en un solo lugar. Noticias, deportes, estado del tiempo, fotos, videos podcast...
		</h3>
		<button class="text-lg py-3 px-6 bg-orange-600 text-white rounded-lg shadow-lg text-xl">Comenzar</button>
	</div>
	<div class="w-full md:w-1/2">
		<SvgContent klass="w-full fill-current text-orange-600"></SvgContent>
	</div>
</div>





