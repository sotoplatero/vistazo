<script >
	let url = 'https://covid19cubadata.github.io/data/covid19-cuba.json'
	let promise =  ( async () => { 
		let {casos} = await fetch(url).then(r => r.json())
			
		let lastDay = Math.max(...Object.keys(casos.dias))
		return casos.dias[lastDay]
	} )();
</script>

<div>
	{#await promise then dia}
		<h2>Covid-19</h2>
		<blockquote>
			Gracias a los datos de <a href="https://covid19cubadata.github.io">Covid-19 Cubadata</a>
		</blockquote>
		<table>
			<tbody>
				<tr>
					<td>Fecha</td>
					<td><b>{dia.fecha}</b></td>
				</tr>
				<tr>
					<td>Diagnosticados</td>
					<td><b>{dia.diagnosticados.length}</b></td>
				</tr>
				<tr>
					<td>Recuperados</td>
					<td><b>{dia.recuperados_numero}</b></td>
				</tr>
				<tr>
					<td>Fallecidos</td>
					<td><b>{dia.muertes_numero}</b></td>
				</tr>
				<tr>
					<td>Graves</td>
					<td><b>{dia.graves_numero}</b></td>
				</tr>
				
			</tbody>
		</table>
		
		<!-- {casos.dias[0].fecha} -->
	{/await }
</div>

