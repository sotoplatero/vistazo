<script >
	import { settings } from '../../stores/settings'	
	import { SettingsIcon, SquareIcon, CheckSquareIcon  } from 'svelte-feather-icons'	

	let isActive
	let modal = false
	let options = $settings
	$: isActive  = modal ? 'is-active' : ''
</script>

<a href class="navbar-item" on:click|preventDefault="{()=>modal=true}">
	<SettingsIcon size="1.3x"/> <!-- <strong>Configuración</strong> -->
</a>

<div class="modal {isActive}">
    <div class="modal-background" on:click="{()=>modal=false}"></div>
    <div class="modal-content">
    	<div class="box">
	    	<p class="content">Especifique las secciones que desea ver.</p>
    		{#each options as option, index}
				<div class="field ">
					<div class="control">
						<label class="checkbox">
						  <input 
							  type="checkbox" 
							  bind:checked={option.value} 
							  on:change="{()=>settings.set(options)}">
						  {option.name}
						</label>
					</div>
				</div>
    		{/each}
    	</div>
	</div>
	<button 
		class="modal-close is-large" 
		aria-label="close" 
		on:click="{ ()=>modal=false }">
	</button>
</div>
