import config from "./app/config";
import mongoose from "mongoose";
import app from './app'


// 
async function main() {

  try{
    await mongoose.connect(config.databse_url as string);

    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`)
    })
  }
  catch(err){
    console.log(err)
  }
 

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

