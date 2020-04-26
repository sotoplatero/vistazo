<script>
	export let name;

	let gaceta
	fetch('/.netlify/functions/gaceta')
		.then( r=>r.json() )
		.then( data => gaceta = data );
</script>

{#if gaceta}
	<h3 class="text-center">{name}</h3>
	<div class="card">
		<a href="{gaceta.url}">Gaceta {gaceta.type} No {gaceta.number} - {gaceta.date}</a>
	</div>
{/if}

