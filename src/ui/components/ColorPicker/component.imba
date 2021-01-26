import ColorPicker from './ColorPicker'

tag ColorPickerComp
	prop c = ColorPicker()

	def render
		<self>
			<input type='color' name='color' id='story-color-picker' @change=c.onChange>


export default ColorPickerComp
