const { MongoClient } = require('mongodb')

// Preparamos as informações de acesso ao banco de dados
const dbUrl = process.env.DATABASE_URL
const dbName = 'mongodb-arquitetura-mvc'

const client = new MongoClient(dbUrl)

function getDatabase() {
  return client.db(dbName)
}

async function connectToDatabase() {
  // Realizamos a conexão com bando de dados
  
  console.log("Conectando ao banco de dados...")
  await client.connect()
  console.log('Banco de dados conectado com sucesso!')

  

  // FIXME: usar o db de alguma forma
}

module.exports = {
  connectToDatabase,
  getDatabase
}
 