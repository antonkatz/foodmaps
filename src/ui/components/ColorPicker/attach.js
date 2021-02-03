import Color from 'color'

export function attach($, _, opt) {
    if (opt.init) _.dom = document.getElementById('story-color-picker')
    if (opt.dom) _.dom = opt.dom

    $.readColor()
    _.dom.addEventListener('input', $.onChange.bind($))
}

export function readColor(_) {
    _.color = _.dom?.value || Color.rgb(randomColorChannel(), randomColorChannel(), randomColorChannel())
}

function randomColorChannel() {
    return Math.random() * 255
}
