import getInBounds from "../../model/plot/getInBounds"

export async function readInBounds(res) {
    res.writeHeader("content-type", "application/json")

    /* Can't return or yield from here without responding or attaching an abort handler */
    res.onAborted(() => {
        res.aborted = true
    })

    let postData
    if (res.formData) postData = await res.formData()
    console.log(postData)

    const data = await getInBounds(postData)

    /* If we were aborted, you cannot respond */
    if (!res.aborted) {
        res.end(JSON.stringify(data))
    }
}
