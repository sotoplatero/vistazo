<script >
	export let name 

	let podcast
	fetch('/.netlify/functions/podcasts')
		.then( r=>r.json() )
		.then( data => podcast = data );
</script>

{#if podcast}
	<div class="card">
		<div><a href="{podcast.url}">{podcast.title}</a></div>
		<p>{@html podcast.content}</p>
	    <audio controls src="{podcast.enclosure.url}" class="is-full-width">
	        Your browser does not support the
	        <code>audio</code> element.
	    </audio>		
	</div>
{/if}

