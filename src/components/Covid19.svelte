<script >
	export let name;
	let promise =  ( async () => { 
		let url = 'https://covid19cubadata.github.io/data/covid19-cuba.json';
		let { casos } = await fetch(url).then(r => r.json());
			
		let lastDay = Math.max(...Object.keys(casos.dias));
		let total = Object.values(casos.dias)
			.map( el => {
				return {
					...el,
					diagnosticados_numero: (el.diagnosticados || []).length,
					recuperados_numero: el.recuperados_numero || 0,
					muertes_numero: el.muertes_numero || 0,
				}
			})
			.reduce( (a, b) => {
				return {
					diagnosticados_numero: a.diagnosticados_numero + b.diagnosticados_numero,
					recuperados_numero: a.recuperados_numero  + b.recuperados_numero,
					muertes_numero: a.muertes_numero + b.muertes_numero,
				}
			});
		return {
			dia: casos.dias[lastDay],
			total: total,
		}
	} )();
</script>

<div>
	{#await promise then data}
		<!-- <h3 class="text-center"><a href="https://covid19cubadata.github.io" target="_blank" rel="noopener noreferrer">{name}</a></h3> -->
		<table class="mb1">
			<thead>
				<tr>
					<th><a href="https://covid19cubadata.github.io" target="_blank" rel="noopener noreferrer">{name}</a></th>
					<th class="text-right">{data.dia.fecha}</th>
					<th class="text-right">Total</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Diagnosticados</td>
					<td class="text-right"><b>{data.dia.diagnosticados.length}</b></td>
					<td class="text-right"><b>{data.total.diagnosticados_numero}</b></td>
				</tr>
				<tr>
					<td>Recuperados</td>
					<td class="text-right"><b>{data.dia.recuperados_numero}</b></td>
					<td class="text-right"><b>{data.total.recuperados_numero}</b></td>
				</tr>
				<tr>
					<td>Fallecidos</td>
					<td class="text-right"><b>{data.dia.muertes_numero}</b></td>
					<td class="text-right"><b>{data.total.muertes_numero}</b></td>
				</tr>
				<tr>
					<td>Graves</td>
					<td class="text-right"><b>{data.dia.graves_numero}</b></td>
					<td></td>
				</tr>
				
			</tbody>
			<tfoot>
				<tr></tr>
			</tfoot>
		</table>
	{/await }
</div>

