import layerCompose from "layer-compose"
// import * as attachToPlot from '../../color/attach-to-plot'
// import * as get from '../../color/get-color'


export default layerCompose(
    {
        onChange($, _, opt) {
            // external
            $.$.changeColor(_)
        },

        getMarkerColors($, _, opt) {
            $.readColor()
            return _
        }
    },

    require('./attach'),
    require('./calc'),
    require('./events'),
    // require('./change'),
)
