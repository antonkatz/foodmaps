import {getStoryText} from '../../../model/story/story-getters'

tag Story
	prop story

	def render
		<self>
			<div> getStoryText(story)

export default Story
