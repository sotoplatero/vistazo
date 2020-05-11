<script>
    import { DownloadIcon } from 'svelte-feather-icons'	
	let gaceta
	fetch('/.netlify/functions/gaceta')
		.then( r=>r.json() )
		.then( data => gaceta = data );
</script>

{#if gaceta}
<div class="border-2 border-blue-600 bg-blue-100 mb-5">
	<a href="{gaceta.url}" class="block text-blue-700 font-semibold rounded-sm shadow-md py-4 px-6">
		<!-- <span><DownloadIcon size="1.5x"></DownloadIcon></span> -->
		<p class="font-semibold uppercase">
			Gaceta de Cuba {gaceta.type} No {gaceta.number}
		</p>
		<p class="text-blue-500">
			{gaceta.date}
		</p>
<!-- 		<span class="">
			<DownloadIcon size="1.5x" />
		</span> -->
	</a>
</div>	
{/if}

