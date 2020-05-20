<script >
	import { onMount } from 'svelte';	
	import SvgDataPoints from './_helpers/SvgDataPoints.svelte'
	import SvgContent from './_helpers/SvgContent.svelte'
	import SvgPersonalSettings from './_helpers/SvgPersonalSettings.svelte'
	import SvgResearching from './_helpers/SvgResearching.svelte'
	import SvgSocialGirl from './_helpers/SvgSocialGirl.svelte'

	onMount(async ()=>{

	})
</script>

<svelte:head>
	<title>Notificon: Mantente actualizado</title>
</svelte:head>

<div class=" px-6 w-full md:w-3/4 mx-auto">
	<div class="flex flex-col-reverse sm:flex-row items-center text-center space-x-20">
		<div class="w-full md:w-1/2 font-serif">
			<h2 class="text-3xl md:text-5xl text-gray-800 font-serif">
				Contruye tu internet
			</h2>
			<h3 class="text-xl md:text-2xl font-light text-gray-600 mb-16">
				Tus WEBs favoritas en un solo lugar sin tener que abrir un montón de páginas. Ahorra tiempo y datos.
			</h3>
			<a href="/config" class="inline-block text-lg py-3 px-6 bg-purple-600 text-white rounded-lg shadow-lg text-xl font-semibold">Configurar</a>
			<a href="/home" class="inline-block text-lg py-3 px-6 bg-white text-gray-800 rounded-lg shadow-lg text-xl border ml-6">Visitar</a>
		</div>
		<div class="w-full md:w-1/2">
			<SvgContent klass="w-full fill-current text-purple-600"></SvgContent>
		</div>
	</div>
	<div class="flex my-20 space-x-6">
		<div class="flex-1 ">
			<SvgPersonalSettings/>
		</div>
		<div class="flex-1 ">
			<SvgResearching/>
		</div>
		<div class="flex-1 ">
			<SvgSocialGirl/>
		</div>
	</div>
</div>





