const Sequelize = require('sequelize')
const pkg = require('../../package.json')

const databaseName = pkg.name + (process.env.NODE_ENV === 'test' ? '-test' : '')

// const db = new Sequelize(
//   process.env.DATABASE_URL || `postgres://localhost:5432/${databaseName}`,
//   {
//     logging: false
//   }
// )

//   process.env.DATABASE_URL || `postgres:8*cupcakE//192.168.8.146:5432/${databaseName}`,
const db = new Sequelize(databaseName, 'postgres', '8*cupcakE', {
  dialect: 'postgres',
  host: "192.168.8.146",
  port: 5432,
  logging: false
})

module.exports = db

// This is a global Mocha hook used for resource cleanup.
// Otherwise, Mocha v4+ does not exit after tests.
if (process.env.NODE_ENV === 'test') {
  after('close database connection', () => db.close())
}
