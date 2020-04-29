<script>
	export let name;

	let blockquote
	fetch('/.netlify/functions/frases')
		.then( r=>r.json() )
		.then( data => blockquote = data );
</script>

{#if blockquote}
	<!-- <i>Receta aleatoria de <a href="https://www.recetasgratis.net">RecetasGratis</a></i> -->
	<blockquote class="message is-success">
		<div class="message-body">
		<b>{blockquote.content}</b>
		<div class="has-text-right">
			<small>
			<a href="{blockquote.url}">{blockquote.author}</a><br>
			<span>{blockquote.about}</span>
			</small>
		</div>
		</div>
	</blockquote>

{/if}

