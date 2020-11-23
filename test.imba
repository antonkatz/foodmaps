tag Test < div
	def render
		<self>
			<input name="my-name" type="password" random-prop="should not be her" data-test="data">
			<script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
				 crossoriginr=true
				 integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
				 >

const e = <Test>
console.log(String(e))
