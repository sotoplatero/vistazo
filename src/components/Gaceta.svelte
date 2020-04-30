<script>
	export let name;
   import { DownloadIcon } from 'svelte-feather-icons'	
	let gaceta
	fetch('/.netlify/functions/gaceta')
		.then( r=>r.json() )
		.then( data => gaceta = data );
</script>

{#if gaceta}
	<div class="card">
		<a href="{gaceta.url}" class="card-content is-block">
			<b>Gaceta de Cuba:</b> 
			{gaceta.type} No {gaceta.number} - {gaceta.date}
			<span class="is-pulled-right">
				<DownloadIcon size="1.5x" />
			</span>
		</a>
	</div>
{/if}

