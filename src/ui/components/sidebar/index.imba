import AddWhatsHere from '../add/AddWhatsHere'

tag Sidebar
	prop ctx

	def render
		<self>
			<div id="sidebar">
				<AddWhatsHere ctx=ctx>

export default Sidebar
