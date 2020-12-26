import Story from './Story'

tag StoryList
	prop stories

	def render
		<self>
			<ul> for story in stories
				<Story story=story>

export default StoryList
