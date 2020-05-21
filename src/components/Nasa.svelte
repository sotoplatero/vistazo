<script >
	import Card from './ui/Card.svelte';

	let image
	fetch('https://api.nasa.gov/planetary/apod?api_key=F5Iais8O3oatb32eL9v3FLr7xGeZhW8eZZ7sSQjs')
		.then(r => r.json())
		.then(data=>{
	        let urlTraslate = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20191219T105237Z.03994bc721efd854.e5e84c0b3be9d212336fb51de2e7aa5519a58e2b&lang=en-es&text=${data['explanation']}`			
			image = data
		});
</script>

{#if image}
	<Card src="{image.url}" title="{image.title}" content="{image.explanation}"></Card>
{/if}

