require('dotenv').config()

import mysql from 'mysql2'
import Connection from 'mysql2/typings/mysql/lib/Connection'

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
