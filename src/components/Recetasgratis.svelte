<script>
	export let name;

	let recipe
	fetch('/.netlify/functions/recetasgratis')
		.then( r=>r.json() )
		.then( data => recipe = data );
</script>

{#if recipe}
	<!-- <i>Receta aleatoria de <a href="https://www.recetasgratis.net">RecetasGratis</a></i> -->
	<div class="card is-horizontal">
		<div class="card-image">
			<figure class="image">
				<img src="{recipe.image}" class="is-fullwidth" alt="{recipe.title}">
			</figure>
		</div>			
		<div class="card-content" >
			<a href="{recipe.url}"><b>{recipe.title}</b></a>
			<p>{recipe.description}</p>
		</div>	
	</div>

{/if}

