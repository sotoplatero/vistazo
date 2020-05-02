<script >
	import { sources } from '../stores/store'		
    import { RssIcon } from 'svelte-feather-icons'	
    let active

    $: isActive = active ? 'is-active' : '' 

    function handleSearch(evt) {
    	// body...
    }
</script>
<div class="tool">
	<button class="button is-success" on:click="{ () => active=true }">
	    <span class="icon is-small">
	      <i class="fas fa-bold"></i>
	    </span>		
		 Agregar RSS
	</button>
</div>

<div class="modal {isActive}">
    <div class="modal-background" on:click="{ () => active=false }"></div>
    <div class="modal-content">
    	<div class="box">
			<div class="field ">
				<div class="control">
					<label class="label">Fuente de noticias</label>
						<input 
							class="input" 
							type="text" 
							placeholder="Direccion URL"
							on:keypress="{handleSearch}">
				</div>
			</div>
    	</div>
	</div>
	<button 
		class="modal-close is-large" 
		aria-label="close" 
		on:click="{ ()=>isActive=false }">
	</button>
</div>

<style>
	.tool{
		margin-bottom: 2rem;
	}
</style>