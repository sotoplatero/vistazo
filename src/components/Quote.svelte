<script>
	export let name;

	let blockquote
	fetch('/.netlify/functions/frases')
		.then( r=>r.json() )
		.then( data => blockquote = data );
</script>

{#if blockquote}
	<!-- <i>Receta aleatoria de <a href="https://www.recetasgratis.net">RecetasGratis</a></i> -->
	<div class="mb1">
		<blockquote class="is-marginless">
			<b>{blockquote.content}</b>
			<div class="text-right">
				<small>
				<a href="{blockquote.url}">{blockquote.author}</a><br>
				<span>{blockquote.about}</span>
				</small>
			</div>
		</blockquote>
	</div>

{/if}

