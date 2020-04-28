<script>
	export let name;

	let rates
	fetch('/.netlify/functions/bcc')
		.then( r=>r.json() )
		.then( data => rates = data );
</script>

{#if rates}
	<!-- <i>Receta aleatoria de <a href="https://www.recetasgratis.net">RecetasGratis</a></i> -->
	<div class="card">
		<div  class="text-center">
			<a href="http://www.bc.gob.cu"><b>{name}</b></a>
		</div>
		<small>
			{@html rates.content}
		</small>
	</div>

{/if}

