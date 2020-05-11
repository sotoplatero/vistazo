<script>
    import { DownloadIcon } from 'svelte-feather-icons'	
	let gaceta
	fetch('/.netlify/functions/gaceta')
		.then( r=>r.json() )
		.then( data => gaceta = data );
</script>

{#if gaceta}	
	<a href="{gaceta.url}" class="bg-blue-300 text-blue-800 font-semi-bold px-5 py-4 mb-4 rounded-lg w-full shadow-md">
		<!-- <span><DownloadIcon size="1.5x"></DownloadIcon></span> -->
		<p class="font-semibold uppercase">
			Gaceta de Cuba {gaceta.type} No {gaceta.number}
		</p>
		<p class="text-blue-100  tracking-wide">
			{gaceta.date}
		</p>
<!-- 		<span class="">
			<DownloadIcon size="1.5x" />
		</span> -->
	</a>
{/if}

