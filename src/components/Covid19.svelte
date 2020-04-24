<script >
	let promise =  ( async () => { 
		let url = 'https://covid19cubadata.github.io/data/covid19-cuba.json';
		let {casos} = await fetch(url).then(r => r.json());
			
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
		<h2>Covid-19</h2>
		<i>Gracias a los datos de <a href="https://covid19cubadata.github.io">Covid-19 Cubadata</a></i>
		<table>
			<thead>
				<tr>
					<th></th>
					<th>{data.dia.fecha}</th>
					<th>Total</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Diagnosticados</td>
					<td><b>{data.dia.diagnosticados.length}</b></td>
					<td><b>{data.total.diagnosticados_numero}</b></td>
				</tr>
				<tr>
					<td>Recuperados</td>
					<td><b>{data.dia.recuperados_numero}</b></td>
					<td><b>{data.total.recuperados_numero}</b></td>
				</tr>
				<tr>
					<td>Fallecidos</td>
					<td><b>{data.dia.muertes_numero}</b></td>
					<td><b>{data.total.muertes_numero}</b></td>
				</tr>
				<tr>
					<td>Graves</td>
					<td><b>{data.dia.graves_numero}</b></td>
					<td></td>
				</tr>
				
			</tbody>
		</table>
		
		<!-- {casos.dias[0].fecha} -->
	{/await }
</div>

