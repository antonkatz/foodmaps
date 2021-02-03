import Sidebar from '../../ui/components/sidebar'

export default def Page ctx
	var map = <div id="map-container" css:height='100%'>
	map.setAttribute('up-keep', '')

	<div id='page-content' .sidebar-visible=ctx.sidebar.isVisible>
		<script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
			# integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
			# crossorigin="anonymous"
			>

		<script>
			const selectedPlotId = ctx.plotId

		<span id='logo'> "foodmaps"

		map

		<Sidebar ctx=ctx>
