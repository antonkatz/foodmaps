const normalizeCss = require("normalize.css").default
const path = require('path')
	
export default function (title, pagePath, context = {}) {
	const pageComponent = require('./pages/' + pagePath + '.imba').default
	const bodyHtml = pageComponent(context)

	return `
	<!DOCTYPE html>
	<html>
		<head>
			<title>${title}</title>
			<link rel="stylesheet" href="${normalizeCss}" />
		</head>
		<body>
			${bodyHtml}
		</body>
		`
}