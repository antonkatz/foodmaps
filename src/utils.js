export function castValuesToNumber(bounds) {
    return Object.fromEntries(Object.entries(bounds).map(([k, v]) => {
        try {
            return [k, Number(v)]
        } catch {
            return [k, v]
        }
    }))
}
