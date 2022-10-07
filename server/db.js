const mongoose = require("mongoose");
const dotenv=require('dotenv');
dotenv.config();

const URI=process.env.DB_URI;
const connectToMongo = async () => {
    try {

        await mongoose.connect(URI, {useUnifiedtopology:true}, () => {
            console.log("connected to Database successfully");
        })
    }
    catch (error) {
        console.log("error from mongo db connection ", error);
    }
}
module.exports = connectToMongo;