const normalizeCss = require("normalize.css").default

const pages = {}
for (const pagePath of ['home']) {
	pages[pagePath] = {
		pageComponent: require('./pages/' + pagePath + '/index.imba').default,
		style: require('./pages/' + pagePath + '/style.css').default
	}
}

export default function (title, pagePath, context = {}) {
	const {pageComponent, style} = pages[pagePath]

	const body = pageComponent(context)
	const bodyHtml = body.toString()

	return `
	<!DOCTYPE html>
	<html lang="en">
		<head>
			<title>${title}</title>
			<link rel="stylesheet" href="/${normalizeCss}" />
			<link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
				integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
				crossorigin=""/>
			<link rel="stylesheet" href="/${style}" />
		</head>
		<body>
			${bodyHtml}
			<script src="/static/client/${pagePath}"></script>
		</body>
		`
}
