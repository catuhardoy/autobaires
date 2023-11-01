import mongoose, {Schema} from "mongoose";

const carSchema = new Schema(
    {
    name:{
        type: String
    },
    year:{
        type: String
    },

   km:{
        type: String
    },
    description:{
        type: String
    },
    price:{
        type: String
    },

    photoURLs:
    [{
        type: String
    }]  // Array de URLs
}, 

    {timestamps: true}
);

const Car = mongoose.models.Car || mongoose.model('Car', carSchema);

export default Car