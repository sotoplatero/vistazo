<script>
	import { onMount } from 'svelte';
	let insmet
	fetch('/.netlify/functions/insmet').then(r => r.json()).then(data=>insmet=data)	
	export let name;
</script>

{#if insmet}
	<h3 class="test-center">{name}</h3>
	<i>Tomado del <a href="http://www.insmet.cu/">Instituto de Meteorología</a></i>
	<div class="card">
		{@html insmet.pronostico}
	</div>
{/if}

