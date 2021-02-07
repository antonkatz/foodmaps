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
			<link rel="preconnect" href="https://fonts.gstatic.com">

			<link rel="stylesheet" href="/${normalizeCss}" />
			<link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
				integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
				crossorigin=""/>
			<link rel="stylesheet" href="/${style}" />
			
			<script src="https://unpkg.com/unpoly@0.62.1/dist/unpoly.min.js" integrity="sha384-4PWpXaib3dqJ5r6dXwq3YOW0OFmH7NTjH697AUQR7W4Q0F+GqP+dD0SrBfIc9b2t" crossorigin="anonymous"></script>
			<link rel="stylesheet" href="https://unpkg.com/unpoly@0.62.1/dist/unpoly.min.css" integrity="sha384-Au6LjS9fxDpwn3+26YmukmOumZUmryd8ONenkVIoH4eEPH1tACqLsVfqz9tBrvQy" crossorigin="anonymous">

			<link href="https://fonts.googleapis.com/css2?family=Potta+One&display=swap" rel="stylesheet">

			<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />	

			<title>${title}</title>
						
		</head>
		<body>
			${bodyHtml}
			<script src="/static/client/${pagePath}"></script>
		</body>
		`
}
