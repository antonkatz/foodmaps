import {getStoryText} from '../../../model/story/story-getters'

tag Story
	prop story

	def render
		var storyElem = <div.story> getStoryText(story)
		storyElem.setAttribute('style', "border-color:" + story.color)

		<self>
			storyElem

export default Story
