import { connect, connection } from 'mongoose'

const { DB_USERNAME, DB_PASSWORD, DB_CLUSTER_NAME, DB_NAME } = process.env
const connectionString = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_CLUSTER_NAME}/${DB_NAME}?retryWrites=true&w=majority`

if (connectionString === '') {
  throw new Error('ConnectionString: Please define the process.env[variables] environment variable inside .env.local file')
}

const conn = {
  isConnected: false,
}

export async function dbConnect() {
  try {
    if (conn.isConnected) return
    const db = await connect(connectionString)
    conn.isConnected = db.connections[0].readyState
  } catch (error) {
    console.error(error.message)
  }
}

connection.on('connected', () => {
  console.log('MongoDB is connected')
})

connection.on('error', (error) => {
  console.error(error.message)
})
