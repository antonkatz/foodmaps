import loadPoints          from "../../ui/components/map/loadPoints"
import initializeMap       from "../../ui/components/map/initializeMap"
import attachCreateHandler from "../../ui/components/map/attachCreateHandler"
import Map         from "../../ui/components/map/Map"
import {IS_DEV_MODE} from 'layer-compose'

console.log('IS_DEV_MODE', IS_DEV_MODE)

require("../../ui/map/uGeoJson")

const {map} = initializeMap()

loadPoints(map)
attachCreateHandler(map)

up.compiler('#story-color-picker', dom => {
    Map.create.colorPicker.attach({dom})
})
