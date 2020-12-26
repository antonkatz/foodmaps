import Sidebar from '../../ui/components/sidebar'

export default def Page ctx
	<div id='page-content'>
		<script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
			# integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
			# crossorigin="anonymous"
			>

		<script>
			const selectedPlotId = ctx.plotId

		<div id="map-container" css:height='100%'>

		<Sidebar ctx=ctx>
