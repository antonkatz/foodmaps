import loadPoints          from "../../ui/components/map/loadPoints"
import initializeMap       from "../../ui/components/map/initializeMap"
import attachCreateHandler from "../../ui/components/map/attachCreateHandler"
import ColorPicker         from "../../ui/components/ColorPicker/ColorPicker"

require("../../ui/map/uGeoJson")

const {map} = initializeMap()

loadPoints(map)
attachCreateHandler(map)

const colorPicker = ColorPicker()
colorPicker.attach()
