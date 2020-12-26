import AddWhatsHere from '../add/AddWhatsHere'
import StoryList from '../stories/StoryList'

tag Sidebar
	prop ctx

	def render
		<self>
			<div id="sidebar">
				<AddWhatsHere ctx=ctx>
				if ctx.stories
					<StoryList stories=ctx.stories>

export default Sidebar
