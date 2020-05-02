<script >
    import { RssIcon } from 'svelte-feather-icons'	
    let active

    $: isActive = active ? 'is-active' : '' 

    function handleSearch(evt) {
    	// body...
    }
</script>
<div>
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
							placeholder="Escriba el nombre de la Web"
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