import AddWhatsHere from '../add/AddWhatsHere'
import StoryList from '../stories/StoryList'

tag Sidebar
	prop ctx

	def render
		var close = <a href="/" .close> "Close"
		close.setAttribute('up-dash', '')
		close.setAttribute('up-follow', '')


		<self>
			<div id="sidebar" .visible=ctx.sidebar.isVisible>

				close

				<AddWhatsHere ctx=ctx>
				if ctx.stories
					<StoryList stories=ctx.stories>

export default Sidebar
