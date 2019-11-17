import {Pool} from 'pg'

const pool = new Pool({
    host: 'localhost',
    user: 'joey',
    password: '1234',
    database: 'home_mortgage',
    port: 5432,
  })

export default  {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  },
}