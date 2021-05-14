const mongoose = require('mongoose');
const customEnv = require('custom-env');

customEnv.env(process.env.NODE_ENV);

module.exports = async () => {
  const uri = process.env.MONGODB_URI
  const options = {
    dbName: process.env.MONGODB_DBNAME,
    useNewUrlParser: true,
    useFindAndModify: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  }
  let dbClient = await mongoose.connect(uri , options)
  console.log(`Service connected to ${process.env.MONGODB_DBNAME}`)
  
  return dbClient
}
