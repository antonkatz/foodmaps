export function castValuesToNumber(obj) {
    return Object.fromEntries(Object.entries(obj).map(([k, v]) => {
        const n = Number(v)
        if (!Number.isNaN(n)) {
            return [k, n]
        } else {
            return [k, v]
        }
    }))
}
