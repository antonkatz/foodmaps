import ColorPicker from './ColorPicker'

tag ColorPickerComp
	prop c = ColorPicker()

	def render
		<self>
			<input type='color' name='color' value="#eed320" id='story-color-picker' @change=c.onChange>


export default ColorPickerComp
