<script>
	export let type = 'orange';
</script>
<button on:click class='relative bg-{type}-100 text-{type}-700 px-4 py-2 hover:bg-{type}-700 hover:text-{type}-100 rounded font-semibold inline-flex items-center'>
  <slot></slot>
</button>