<script>
	export let checked
</script>

{#if checked}
	<span class="text-green-600">
		<svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>		
	</span>
{:else}
	<span class="text-gray-400">
		<svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>
	</span>
{/if}

<input 
	class="hidden"
	type="checkbox" 
	bind:checked={checked} 
	on:change>   