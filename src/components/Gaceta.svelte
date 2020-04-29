<script>
	export let name;

	let gaceta
	fetch('/.netlify/functions/gaceta')
		.then( r=>r.json() )
		.then( data => gaceta = data );
</script>

{#if gaceta}
	<!-- <h3 class="text-center">{name}</h3> -->
	<div class="card mb1">
		<div class="card-content">
			<b>Gaceta de Cuba:</b> <a href="{gaceta.url}">{gaceta.type} No {gaceta.number} - {gaceta.date}</a>
			
		</div>
	</div>
{/if}

