import layerCompose from "layer-compose"
// import * as attachToPlot from '../../color/attach-to-plot'
// import * as get from '../../color/get-color'


export default layerCompose(
    // $ => {
    //     $.generateComponent({init: true})
    // },

    // get,
    // attachToPlot,
    require('./events'),
    require('./attach')
)
