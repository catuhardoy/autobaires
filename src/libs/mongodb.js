import mongoose from "mongoose";
require("dotenv").config();

const connectMongoDB = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('connected')
    }
    catch(error){
        console.log(error)
    }
}

export default connectMongoDB;