import Color from 'color'

export function onChange(_) {
    _.innerColor = _.color

    let color = Color(_.color)
    if (color.isDark()) {
        color.lightness(80)
    } else {
        color.lightness(20)
    }
    _.borderColor = color.hex()
}
