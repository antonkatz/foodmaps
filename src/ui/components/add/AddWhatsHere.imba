import ColorPicker from '../ColorPicker/component'

tag AddWhatsHere
	prop ctx

	def render
		var action = ctx.plotId ? "/story?redirectBack" : ""
		var form =
			<form method="POST" accept-charset="utf-8" action=action up-target='#sidebar' id='create-form'>
				<input type='hidden' name='plotId' value=ctx.plotId>
				<textarea name='story' rows=4>
				<label>
					"Color:"
					<ColorPicker>
				<input type='submit' value='Place Story'>
		form.setAttribute('up-target', '#sidebar')

		<self>
			form

export default AddWhatsHere

