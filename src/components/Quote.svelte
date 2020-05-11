<script>
	import { onMount } from 'svelte';	
    import { RefreshCwIcon } from 'svelte-feather-icons'	
    import Box from './ui/box.svelte'

	let blockquote
	let loading = false

	async function loadQuote() {
		loading = true
		let response = await fetch('/.netlify/functions/frases')
		blockquote = await response.json()
		loading = false
	}
	onMount(async ()=>{
		loadQuote()
	})
</script>

{#if blockquote}
	<Box color="green" content={blockquote.content} on:reload="{loadQuote}">
		<div class="mt-2 text-sm text-right">
			<a href="{blockquote.url}">{blockquote.author}</a><br>
			<span>{blockquote.about}</span>
		</div>		
	</Box>
<!-- 	<blockquote class="message is-success is-relative">
		<div class="message-body">
			<div class="content">
				<b>{blockquote.content}</b>
				<div class="has-text-right">
					<small>
					<a href="{blockquote.url}">{blockquote.author}</a><br>
					<span>{blockquote.about}</span>
					</small>
				</div>
			</div>
			<button class="button is-success " on:click="{loadQuote}">
				Actualizar
			</button>
			{#if loading}
				<div class="is-overlay has-background-white-ter is-transparent"></div>
			{/if}
		</div>
	</blockquote> -->

{/if}

