import Story from './Story'

tag StoryList
	prop stories

	def render
		var sortedByTime = stories.sort do $2.timestamp - $1.timestamp
		<self>
			<ul>
				for story in sortedByTime
					<li>
						<Story story=story>

export default StoryList
