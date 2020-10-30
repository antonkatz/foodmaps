const normalizeCss = require("normalize.css").default
const path = require('path')
	
const mapScript = `
            var mymap = L.map('mapid').setView([51.505, -0.09], 13);
            L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: 'your.mapbox.access.token'
            }).addTo(mymap);
        `

export default function (title, pagePath, context = {}) {
	const pageComponent = require('./pages/' + pagePath + '/index.imba').default
	let style = require('./pages/' + pagePath + '/style.css').default
	const bodyHtml = pageComponent(context)

	return `
	<!DOCTYPE html>
	<html>
		<head>
			<title>${title}</title>
			<link rel="stylesheet" href="${normalizeCss}" />
			<link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
				integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
				crossorigin=""/>
			<link rel="stylesheet" href="${style}" />
		</head>
		<body>
			${bodyHtml}
			<script>${mapScript}</script>
		</body>
		`
}