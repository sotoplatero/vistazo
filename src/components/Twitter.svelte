<script>
	export let name;
    import { SettingsIcon } from 'svelte-feather-icons'	
	let twitt
	let isActive = ''
	let screen_name = 'callemonte'

	$: fetch(`/.netlify/functions/twitter?username=${screen_name}`)
		.then( r => r.json() )
		.then( data => twitt = data );

	let users
	function handleSearch(keypress) {
		if ( keypress.code !== 'Enter' ) {
			return false;
		}

		// fetch(`/.netlify/functions/twitter?search=${keypress.target.value}`)
		// 	.then( r => r.json() )
		// 	.then( data => {
		// 		users=data
		// 	} );

		twttr.widgets.createTweet(
		  '511181794914627584',
		  document.getElementById('first-tweet'),
		  {
		    align: 'left'
		  })
		  .then(function (el) {
		    console.log("Tweet displayed.")
		  });			
	}

</script>

{#if twitt	}
	<div class="card">
	  <header class="card-header">
	    <p class="card-header-title">
	      {name}
	    </p>
	    <a href="#" 
		    class="card-header-icon" 
		    aria-label="more options" 
		    on:click|preventDefault={ () => isActive='is-active' }>
		    <SettingsIcon size="1x"></SettingsIcon>
	    </a>
	  </header>
	  <div class="card-content">
	  	<div id="first-tweet">
			{@html twitt.html}
	  	</div>
	  </div>
	</div>

	<div class="modal {isActive}">
	    <div class="modal-background" on:click="{()=>isActive=''}"></div>
	    <div class="modal-content">
	    	<div class="box">
				<div class="field ">
					<div class="control">
						<label class="label">Usuario en Twitter</label>
						<input 
							class="input" 
							type="text" 
							placeholder="Escriba el nombre"
							on:keypress="{handleSearch}">
					</div>
				</div>
				<ul>
					{#if users}
						{#each users as user, index}
							<li>
								<a href on:click|preventDefault="{ () => screen_name = user.screen_name }">
									<div class="has-text-dark">{user.name}</div>
									<div class="has-text-grey-dark">@{user.screen_name}</div> 
								</a>
							</li>
						{/each}
						{/if}
				</ul>
	    	</div>
		</div>
		<button 
			class="modal-close is-large" 
			aria-label="close" 
			on:click="{ ()=>isActive='' }">
		</button>
	</div>

{/if}
