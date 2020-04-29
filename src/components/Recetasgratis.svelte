<script>
	export let name;

	let recipe
	fetch('/.netlify/functions/recetasgratis')
		.then( r=>r.json() )
		.then( data => recipe = data );
</script>

{#if recipe}
	<!-- <i>Receta aleatoria de <a href="https://www.recetasgratis.net">RecetasGratis</a></i> -->
	<!-- <div class="card "> -->
		<div class="columns">
			<div class="column is-5">
				<img src="{recipe.image}" class="is-fullwidth">
			</div>
			<div class="column">
				<a href="{recipe.url}"><b>{recipe.title}</b></a>
				<p>{recipe.description}</p>
			</div>
			
		</div>	
	<!-- </div> -->

{/if}

