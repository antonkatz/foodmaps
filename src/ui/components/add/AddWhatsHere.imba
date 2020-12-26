tag AddWhatsHere
	prop ctx

	def render
		<self>
			<form method="POST" accept-charset="utf-8">
				<textarea name='story' rows=4 />
				<input type='submit' value='Add story'>

export default AddWhatsHere

