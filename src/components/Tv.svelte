<script >
    import { TvIcon } from 'svelte-feather-icons'	

	export let name 
    let channels
    let currentChannel

	(async ()=>{
	    let site = '/.netlify/functions/json?url=http://eprog2.tvcdigital.cu/programacion/'
	    let responseChannels = await fetch('/.netlify/functions/json?url=http://eprog2.tvcdigital.cu/canales')
	    channels = await responseChannels.json()

	    let fetchChannel = channel => fetch(site + channel._id).then(res => res.json())
		let programs = await Promise.all( channels.map( fetchChannel ));
		programs = [].concat.apply([], programs) // Flat 

		channels = channels
			.map( ch => ({...ch, programs: programs.filter( el => ch._id==el.canal_id ) }))
			.filter( ch => ch.programs.length)
		currentChannel = channels[0]
	})()
</script>

{#if channels}
	<div class="card">
		<header class="card-header">
			<div class="card-header-title">
				<TvIcon size="1x"/>
				<b class="ml-1">{name}</b>
			</div>
			<div class="card-header-icon" aria-label="more options">
				<div class="select">
				  <select bind:value="{currentChannel}">
				  	{#each channels as channel, index}
					    <option value="{channel}">{channel.nombre}</option>
				  	{/each}
				  </select>
				</div>	
			</div>
		</header>	
		<div class="card-content" style="padding-left: 0; padding-right: 0">
			{#if currentChannel}
				<table class="table is-striped">
					{#if currentChannel.programs}
						{#each currentChannel.programs as program, index}
							<tr>
								<td>{program.hora_inicio.match(/\d{2}:\d{2}/g)}</td>
								<td>
									<div><b>{program.titulo}</b></div>
									<small>{program.descripcion}</small>
								</td>
							</tr>
						{/each}
					{/if}
				</table>		
			{/if}
		</div>	
	</div>
{/if}

