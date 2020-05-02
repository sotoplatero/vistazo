<script>
    import { SearchIcon } from 'svelte-feather-icons'	
	import { q } from '../stores/store'	
	let products = []
	let search = $q ? $q : ''

	handleSearch()

	function handleKeypress(keypress) {
		if ( keypress.code !== 'Enter' ) {
			return false;
		}
		handleSearch()
	}

	async function handleSearch() {
		if ( search == '' ) {
			return false;
		}
		q.set(search)

		let sites = ['revolico','bachecubano','merolico'];
		let fetchProducts = site => fetch( `https://callemonte.com/.netlify/functions/${site}?q=${search}` )
			.then(res => res.json() )
			.then( products => products
				.filter( (el,i) => i<3 )
				.map( el=> ({ ...el, site: site }) ) 
			)

		products = await Promise.all( sites.map( fetchProducts ));
		products = [].concat.apply([], products)
		console.log(products)
	}
</script>
	<div class="card">
		<header class="card-header">
			<div class="card-header-title">
				<SearchIcon size="1x"/>
				<b class="ml-1">
					<!-- <img src="https://callemonte.com/logo.png" class="image is-16x16">  -->
					<a href="https://callemonte.com">Callemonte</a>
				</b>
			</div>
			<div class="card-header-icon" aria-label="more options">
				<input 
					class="input" 
					type="text" 
					placeholder="Que desea comprar"
					bind:value="{search}"
					on:keypress="{handleKeypress}">
			</div>
		</header>	
		{#if products.length}
			<div class="card-content">
				{#each products as product, index}
					<article class="media">
					  <figure class="media-left">
					    <p class="image is-32x32">
					      <img src="https://callemonte.com/fav/{product.site}.png">
					    </p>
					  </figure>
					  <div class="media-content">
					    <div class="content">
					      <p><b>{product.price}</b> <a href="{product.title}">{product.title}</a></p>
					    </div>
<!-- 					    <nav class="level is-mobile">
					      <div class="level-left">
					        <a class="level-item">
					          <span class="icon is-small"><i class="fas fa-reply"></i></span>
					        </a>
					        <a class="level-item">
					          <span class="icon is-small"><i class="fas fa-retweet"></i></span>
					        </a>
					        <a class="level-item">
					          <span class="icon is-small"><i class="fas fa-heart"></i></span>
					        </a>
					      </div>
					    </nav> -->
					  </div>
					</article>							
				{/each}			
			</div>
					
		{/if}		
	</div>
