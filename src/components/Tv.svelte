<script >
	import { onMount } from 'svelte';		
	import Card from './ui/card.svelte';		
    // import { TvIcon, ChevronDownIcon } from 'svelte-feather-icons'	

	// export let name 
    let channels
    let currentChannel
    let expand
    let active = false
    let isActive = ''
    $: isActive = active ? 'is-active' : ''

    function selectChannel(channel) {
    	currentChannel = channel
    	active = false
    }

    onMount( async ()=>{
	    let site = '/.netlify/functions/json?url=http://eprog2.tvcdigital.cu/programacion/'
	    let responseChannels = await fetch('/.netlify/functions/json?url=http://eprog2.tvcdigital.cu/canales')
	    channels = await responseChannels.json()

	    let fetchChannel = channel => fetch(site + channel._id).then(res => res.json())
		let programs = await Promise.all( channels.map( fetchChannel ));
		programs = [].concat.apply([], programs) // Flat 

		channels = channels
			.map( ch => ({...ch, programs: programs.filter( el => ch._id==el.canal_id ) }) )
			.filter( ch => ch.programs.length )
		currentChannel = channels[0]
    })
</script>

{#if currentChannel}
	<Card header="{currentChannel.nombre}">
<!-- 		<div slot="header"> 
			{#if currentChannel}
				{currentChannel.nombre }
			{/if}
		</div> -->
			{#if currentChannel && currentChannel.programs}
				<table class="table is-striped">
					{#each currentChannel.programs as program, index}
						<tr>
							<td>{program.hora_inicio.match(/\d{2}:\d{2}/g)}</td>
							<td>
								<div><b>{program.titulo}</b></div>
								<small>{program.descripcion}</small>
							</td>
						</tr>
					{/each}
				</table>		
			{/if}
	</Card>
<!-- 	<div class="card">
		<header class="card-header">
			<div class="card-header-title">
				<TvIcon size="1x"/>
				<b class="ml-1">{name}</b>
			</div> -->
				<!-- <a href title="Mostrar Cartelera"><ChevronDownIcon size="1.5x"></ChevronDownIcon></a> -->
<!-- 			<div class="card-header-icon" aria-label="more options">
				<div class="select">
				  <select bind:value="{currentChannel}">
				  	{#each channels as channel, index}
					    <option value="{channel}">{channel.nombre}</option>
				  	{/each}
				  </select>
				</div>	
			</div> -->

<!-- <div class="dropdown is-right card-header-icon {isActive}">
  <div class="dropdown-trigger " 
  	on:click="{ () => active = !active }">
      <span aria-haspopup="true" aria-controls="dropdown-menu3">
      	Canales
      	<ChevronDownIcon size="1x"/>
      </span>
  </div>
  <div class="dropdown-menu" id="dropdown-menu3" role="menu">
    <div class="dropdown-content">
	  	{#each channels as channel, index}
			<a href="#" class="dropdown-item" on:click|preventDefault="{selectChannel(channel)}">
				{channel.nombre}
			</a>
	  	{/each}    	
    </div>
  </div>
</div>

		</header>	
		<div class="card-content" style="padding-left: 0; padding-right: 0; padding-bottom: 0;">
			{#if currentChannel && currentChannel.programs}
				<table class="table is-striped">
					{#each currentChannel.programs as program, index}
						<tr>
							<td>{program.hora_inicio.match(/\d{2}:\d{2}/g)}</td>
							<td>
								<div><b>{program.titulo}</b></div>
								<small>{program.descripcion}</small>
							</td>
						</tr>
					{/each}
				</table>		
			{/if}
		</div>	
	</div> -->
{/if}

