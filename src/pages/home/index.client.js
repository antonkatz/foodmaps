// const CheapRuler = require('cheap-ruler').default
import loadPoints          from "../../ui/components/map/loadPoints"
import initializeMap       from "../../ui/components/map/initializeMap"
import attachCreateHandler from "../../ui/components/map/attachCreateHandler"
import attachSelectHandler from "../../ui/components/map/attachSelectHandler"

require("../../ui/map/uGeoJson")

const {map, baseLayer} = initializeMap()

loadPoints(map)
attachCreateHandler(map)
