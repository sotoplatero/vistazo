<script>
    // import { DownloadIcon } from 'svelte-feather-icons'	
    import CardBase from './ui/CardBase.svelte'	
    import ButtonDownload from './ui/ButtonDownload.svelte'	
	let gaceta
	fetch('/.netlify/functions/gaceta')
		.then( r=>r.json() )
		.then( data => gaceta = data );
</script>

{#if gaceta}
	<CardBase 
		url="{gaceta.url}"
		title="Gaceta de Cuba. {gaceta.type} No {gaceta.number}"
		subtitle="{gaceta.date}">

<!-- 		<div class="uppercase mb-6">
			<a class="font-semibold " href="{gaceta.url}" target="_blank" rel="noopener noreferer">Gaceta de Cuba {gaceta.type} No {gaceta.number}</a>
			<div class="font-sm text-gray-600">{gaceta.date}</div>
		</div> -->

		{#each gaceta.items as item, index}
			<div class="mb-4">
				<div class="font-medium">{item.title}</div>
				<div class="text-gray-600">{item.content}</div>
			</div>
		{/each}

	    <footer class="mt-8">
<form method="get" action="{gaceta.file}" target="_blank">
	<ButtonDownload type="submit"/>
</form>	    	
	      <!-- // <a href="{gaceta.file}" class="py-3 px-5 bg-gray-200 font-semibold text-gray-700 rounded-lg" download>Descargar</a> -->
	    </footer>
				
	</CardBase>
{/if}

