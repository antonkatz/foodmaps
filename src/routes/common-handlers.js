import buildPageHtml from "../buildPageHtml"

export function homeHandler(res) {
    const html = buildPageHtml("FoodMaps", 'home', {datetime: new Date().toISOString()})
    res.end(html)
}
