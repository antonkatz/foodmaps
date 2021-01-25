tag AddWhatsHere
	prop ctx

	def render
		var action = ctx.plotId ? "/story?redirectBack" : ""
		var form =
			<form method="POST" accept-charset="utf-8" action=action up-target='#sidebar'>
				<input type='hidden' name='plotId' value=ctx.plotId>
				<textarea name='story' rows=4 />
				<input type='color' name='color'>
				<input type='submit' value='Add story'>
		form.setAttribute('up-target', '#sidebar')

		<self>
			form

export default AddWhatsHere

