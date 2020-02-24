import { createConnection as createMysqlConnection, Connection } from 'mysql'

let connection: Connection

export default (() => {
  connection = createMysqlConnection({
    insecureAuth : true,
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'recipe'
  });
 
  connection.connect()
  return connection
})()

export const query = <T>(sqlQuery: string) => {
  return new Promise<T>((resolve, reject) => {
    connection.query(sqlQuery, (error, results) => {
      if(error) {
        console.log(error)
        reject(error)
      }

      resolve(results)
    })
  })
}