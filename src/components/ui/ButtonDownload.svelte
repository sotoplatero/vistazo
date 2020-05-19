<script>
	import Button from './Button.svelte';	
	export let type	
</script>
<Button type="{type}" color="gray" on:click>
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-download h-6 w-6 "><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>			
	<span class="ml-2">Descargar</span>
</Button>