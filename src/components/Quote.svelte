<script>
	export let name;
    import { RefreshCwIcon } from 'svelte-feather-icons'	

	let blockquote
	fetch('/.netlify/functions/frases')
		.then( r=>r.json() )
		.then( data => blockquote = data );
</script>

{#if blockquote}
	<!-- <i>Receta aleatoria de <a href="https://www.recetasgratis.net">RecetasGratis</a></i> -->
	<blockquote class="message is-success">
		<div class="message-body">
			<a href class="icon is-pulled-right">
				<RefreshCwIcon size=1x/>
			</a>
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

