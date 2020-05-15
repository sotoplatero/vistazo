<script>
    import { DownloadIcon } from 'svelte-feather-icons'	
    import CardBase from './ui/CardBase.svelte'	
	let gaceta
	fetch('/.netlify/functions/gaceta')
		.then( r=>r.json() )
		.then( data => gaceta = data );
</script>

{#if gaceta}
	<CardBase header="Gaceta Oficial de Cuba">
		
		<div class="font-semibold uppercase mb-6">
			Gaceta de Cuba {gaceta.type} No {gaceta.number}
			<div class="font-sm">{gaceta.date}</div>
		</div>

		{#each gaceta.items as item, index}
			<div class="mb-4">
				<div class="font-semibold">{item.title}</div>
				<div class="text-gray-600">{item.content}</div>
			</div>
		{/each}
			
	</CardBase>
{/if}

