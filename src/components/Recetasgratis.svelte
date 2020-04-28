<script>
	export let name;

	let recipe
	fetch('/.netlify/functions/recetasgratis')
		.then( r=>r.json() )
		.then( data => recipe = data );
</script>

{#if recipe}
	<i>Receta aleatoria de <a href="https://www.recetasgratis.net">RecetasGratis</a></i>
	<div class="card ">
		<div class="row">
			<div class="col-5">
				<img src="{recipe.image}" class="is-full-width">
			</div>
			<div class="col">
				<a href="{recipe.url}"><b>{recipe.title}</b></a>
				<p>{recipe.description}</p>
			</div>
			
		</div>	
	</div>

{/if}

