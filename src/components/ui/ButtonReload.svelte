<script>
	import Button from './Button.svelte';	
	export let type = 'button'
</script>
<Button type="{type}" color="gray" on:click>
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-refresh-cw h-6 w-6"><polyline points="23 4 23 10 17"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>				
	<span class="ml-2">Más</span>
</Button>