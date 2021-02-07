import {getStoryText} from '../../../model/story/story-getters'

tag Story
	prop story

	def render
		var storyContainer = <div.story-container>
							<div.story> getStoryText(story)

		var style = "border-color: {story.color}; background: linear-gradient(to right, transparent, {story.color} 30%, transparent)"
		storyContainer.setAttribute('style', style)

		<self>
			storyContainer

export default Story
