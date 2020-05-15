<script >
	import { onMount } from 'svelte';
	let data
	onMount(async ()=>{
		let response = await fetch('./.netlify/functions/covid19')
		data = await response.json()
	})		
</script>

<div>
	{#if data}
		<!-- <h3 class="text-center"><a href="https://covid19cubadata.github.io" target="_blank" rel="noopener noreferrer">{name}</a></h3> -->
		<div class="bg-red-700 shadow-lg rounded-lg mb-8 p-6">
			
			<table class="table table-red table-auto w-full">
				<thead>
					<tr>
						<th class="text-left"><a href="https://covid19cubadata.github.io" target="_blank" rel="noopener noreferrer">Cuba vs Covid19</a></th>
						<th class="text-right">{data.dia.fecha.match(/\d{2}\/\d{2}/)}</th>
						<th class="text-right">Total</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Positivos</td>
						<td class="text-right "><b>{data.dia.diagnosticados.length}</b></td>
						<td class="text-right "><b>{data.total.diagnosticados_numero}</b></td>
					</tr>
					<tr>
						<td>Recuperados</td>
						<td class="text-right "><b>{data.dia.recuperados_numero}</b></td>
						<td class="text-right "><b>{data.total.recuperados_numero}</b></td>
					</tr>
					<tr>
						<td>Fallecidos</td>
						<td class="text-right "><b>{data.dia.muertes_numero}</b></td>
						<td class="text-right"><b>{data.total.muertes_numero}</b></td>
					</tr>
					<tr>
						<td>Graves</td>
						<td class="text-right "><b>{data.dia.graves_numero}</b></td>
						<td></td>
					</tr>
					
				</tbody>
				<tfoot>
					<tr></tr>
				</tfoot>
			</table>
		</div>
	{/if }
</div>

