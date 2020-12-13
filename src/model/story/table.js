import {buildIndices, createTable} from "@onest.network/simple-db"
import leveldown                   from 'leveldown'

const table = createTable('story', leveldown, './tmp/db/')

export default table
export const storyTableIndices = buildIndices(table, {
    plot: {reducer: o => `${o.plotId}!${o.id}`}
})
