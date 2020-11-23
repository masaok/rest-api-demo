require('dotenv').config()
import express from 'express'
import routes from './src/routes/demoRoutes'
import mysql from 'mysql2'

const dbh = mysql.createConnection({
  host: process.env.DBHOST,
  port: 3306,
  user: process.env.DBUSER,
  password: process.env.DBPASS,
  database: process.env.DBUSER,
})

dbh.connect(err => {
  if (err) throw err
  console.log('MYSQL CONNECTED')
  console.time('mysql')
  console.log('Successfully connected to mysql')
  dbh.end()
})

const app = express()
const PORT = 4000

routes(app)

app.get('/', (req, res) => res.send(`Node and express server running on port ${PORT}`))

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
