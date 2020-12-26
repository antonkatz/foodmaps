tag AddWhatsHere
	prop ctx

	def render
		var form =
			<form method="POST" accept-charset="utf-8" action="/story?redirectBack" up-target='#sidebar'>
				<input type='hidden' name='plotId' value=ctx.plotId>
				<textarea name='story' rows=4 />
				<input type='submit' value='Add story'>
		form.setAttribute('up-target', '#sidebar')

		<self>
			form

export default AddWhatsHere

