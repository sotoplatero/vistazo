<script>
	export let name;

	let rates
	fetch('/.netlify/functions/bcc')
		.then( r=>r.json() )
		.then( data => rates = data );
</script>

{#if rates}
	<div  class="has-text-centered">
			<a href="http://www.bc.gob.cu"><b>{name}</b></a>
		<div class="table-centered has-text-grey-light">
			{@html rates.content}
		</div>
	</div>

{/if}

