<script>
	export let name;

	let timeline
	fetch('/.netlify/functions/twitter')
		.then( r=>r.json() )
		.then( data => timeline = data );
</script>

<!-- <svelte:head>
	<script async="" src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</svelte:head>
 -->
{#if timeline}
	<div class="has-text-centered is-centered">
		{@html timeline.html}
	</div>
{/if}
