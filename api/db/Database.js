const mongoose = require('mongoose')
// api/db/Database.js

let instance = null
class Database {
  constructor() {   
   if(!instance){
    this.mongoConnection = null
    instance = this
  }
  return instance
}
async connect(options) {
    try{
   console.log("Connecting... to database...")
   let db = await mongoose.connect(options.CONNECTION_STRING )
   this.mongoConnection = db

   console.log("Connected to database")
    }catch(err){
        console.error("Error connecting to database", err)
        process.exit(1)
    }

   
}
   
}
module.exports = Database