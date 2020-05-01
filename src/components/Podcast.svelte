<script >
	import { onMount } from 'svelte';
	import Articles from './Articles.svelte';	
    import { SettingsIcon, RadioIcon } from 'svelte-feather-icons'	

	let podcasts = []
	let podcast
	let isActive = ''

	const url = `https://raw.githubusercontent.com/lugodev/cuban-podcasts-feedr-bot/master/src/feeds.json`

    fetch( url ).then( r=>r.json() ).then( data => podcasts=data )
    $: indexPodcast = indexPodcast || Math.floor(Math.random() * podcasts.length)
    $: podcast = podcast || podcasts[indexPodcast]

	function changePodcast(event) {
		// podcast = event.target.value;
	}

</script>

{#if podcast}
	<Articles
		name="{podcast.name}"
		bind:site="{podcast.url}"
	>
		<header class="card-header" slot="header">
		<p class="card-header-title">
		  <RadioIcon size="1x"/>
		  <span style="margin-left: 1rem;">{podcast.name}</span>
		</p>
		<a href="#" class="card-header-icon" on:click|preventDefault={ () => isActive='is-active' }>
		  <span class="icon">
		    <SettingsIcon size="1x"></SettingsIcon>
		  </span>
		</a>
		</header>		
	</Articles>

	<div class="modal {isActive}">
	    <div class="modal-background" on:click="{()=>isActive=''}"></div>
	    <div class="modal-content">
	    	<div class="box">
				<div class="field ">
					<div class="control">
						<label class="label">Podcast Cubanos</label>
						<div class="select is-fullwidth">
							<select z:value={podcast} on:change="{()=>isActive=''}">
								{#each podcasts as p}
							    <option value="{p}">{p.name}</option>
								{/each}
							</select>
						</div>
						<p class="help">Seleccione el podcast de su preferencia</p>
					</div>
				</div>
	    	</div>
		</div>
		<button 
			class="modal-close is-large" 
			aria-label="close" 
			on:click="{ ()=>isActive='' }">
		</button>
	</div>
{/if}

