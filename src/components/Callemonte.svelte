<script>
    import { SearchIcon, SettingsIcon } from 'svelte-feather-icons'	
	import { q, provinces } from '../stores/store'	
	q.set('')
	let products = []
	let province = '';
	let search = $q.q ? $q.q : ''
	let pmin;
	let pmax = '';
	let active = false;

	$: isActive = active ? 'is-active' : '';
	$: pmin = pmin==0 ? 1 : pmin
	handleSearch()
	function handleKeypress(keypress) {
		if ( keypress.code !== 'Enter' ) {
			return false;
		}
		handleSearch()
	}

	function handleSearch() {
		if ( search == '' ) {
			return false;
		}
		q.set({
			q: search,
 			pmin: pmin,
 			pmax: pmax,
 			province: province
		})
		let sites = ['revolico','bachecubano','merolico'];
		// let fetchProducts = site => fetch( `https://callemonte.com/.netlify/functions/${site}?q=${search}` )
					console.log(search)
		for (var i = sites.length - 1; i >= 0; i--) {
			let site = sites[i]
			fetch( `https://callemonte.com/.netlify/functions/${site}?q=${search}&pmin=${q.pmin}&pmax=${q.pmax}&province=${q.province}` )
				.then( res => res.json() )
				.then( items => { 
					products.push(...items
									.filter( (el,i) => i<3 )
									.map( el => ({ ...el, site: site }) ) )
				})			
		}
		// let fetchProducts = site => fetch( `https://callemonte.com/.netlify/functions/${site}?q=${search}&pmin=${q.pmin}&pmax=${q.pmax}&province=${q.province}` )
		// 	.then( res => res.json() )
		// 	.then( items => items
		// 					.filter( (el,i) => i<3 )
		// 					.map( el=> ({ ...el, site: site }) ) 
		// 	)

		// products = await Promise.all( sites.map( fetchProducts ));
		// products = [].concat.apply([], products)
	}
</script>

<div class="card">
	<header class="card-header">
		<div class="card-header-title">
			<SearchIcon size="1x"/>
			<b class="ml-1">
				<a href="https://callemonte.com">Callemonte</a>
			</b>
		</div>
		<a href class="card-header-icon" on:click|preventDefault={ () => active=true }>
		  <span class="icon">
		    <SettingsIcon size="1x"></SettingsIcon>
		  </span>
		</a>			
	</header>	
	{#if products.length}
		<div class="card-content">
			{#each products as product, index}
				<article class="is-mobile">
				      <img src="https://callemonte.com/fav/{product.site}.png" class="image is-16x16" alt="logo">

					<b>{product.price}</b> 

					<a href="{product.title}" class="" target="_blank" rel="noopener noreferrer">
						{product.title}
					</a>
				</article>							
			{/each}			
				
		</div>
	{/if}		
</div>

<div class="modal is-small {isActive}">
    <div class="modal-background" on:click="{()=>active=false}"></div>
    <div class="modal-content">
    	<div class="box">
    		<div class="field">
			<label class="label">Que quiere comprar?</label>
			<div class="control">
				<input 
					class="input" 
					type="text" 
					placeholder="Producto"
					bind:value="{search}"
					on:keypress="{handleKeypress}">
			</div>
    			
    		</div>
    		<div class="columns">
    			<div class="column">
    				<div class="field">
						<label class="label">Precio Mínimo</label>
						<div class="control">
							<input 
								class="input" 
								type="text" 
								bind:value="{pmin}">
						</div>
    					
    				</div>
    			</div>
    			<div class="column">
    				<div class="field">
						<label class="label">Precio Máximo</label>
						<div class="control">
							<input 
								class="input" 
								type="text" 
								bind:value="{pmax}">
						</div>
    				</div>
				</div>
    		</div>
			<div class="field ">
				<div class="control">
					<label class="label">Podcast Cubanos</label>
					<div class="select is-fullwidth">
						<select bind:value={province} >
							{#each $provinces as province}
							    <option value="{province.slug}">{province.name}</option>
							{/each}
						</select>
					</div>
				</div>
			</div>
			<div class="field is-grouped">
			  <div class="control">
			    <button class="button is-link" on:click="{handleSearch}">Aplicar</button>
			  </div>
			  <div class="control">
			    <button class="button is-light" on:click="{ ()=>active=false }">Cancelar</button>
			  </div>
			</div>
    	</div>
	</div>
	<button 
		class="modal-close is-large" 
		aria-label="close" 
		on:click="{ ()=>active=false }">
	</button>
</div>