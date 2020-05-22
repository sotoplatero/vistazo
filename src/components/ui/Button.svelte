<script>
	export let color = 'gray';
	export let type = 'button';
</script>
<button type={type} on:click class='relative bg-{color}-100 text-{color}-700 px-4 py-2 border hover:bg-{color}-700 hover:text-{color}-100 rounded-lg font-semibold inline-flex items-center'>
  <slot></slot>
</button>