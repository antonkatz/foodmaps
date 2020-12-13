import {createTable} from "@onest.network/simple-db"
import leveldown from 'leveldown'


export default createTable('plot', leveldown, './tmp/db/')
