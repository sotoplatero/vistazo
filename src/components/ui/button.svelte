<script>
	export let type = 'orange';
</script>
<button on:click class='relative bg-{type}-600 text-{type}-100 px-4 py-2 hover:bg-{type}-700 rounded font-bold overflow-visible'>
  <slot></slot>
</button>