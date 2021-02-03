import Color from 'color'

export function onChange(_) {
    _.innerColor = _.color || '#000000'

    let color = Color(_.color || '#000000')
    if (color.isDark()) {
        color.lightness(80)
    } else {
        color.lightness(20)
    }
    _.borderColor = color.hex()
}

export const attachMarkerColor = onChange
