// const CheapRuler = require('cheap-ruler').default
import loadPoints          from "../../ui/components/map/loadPoints"
import initializeMap       from "../../ui/components/map/initializeMap"
import attachCreateHandler from "../../ui/components/map/attachCreateHandler"

require("../../ui/map/uGeoJson")

const map = initializeMap()

loadPoints(map)
attachCreateHandler(map)


