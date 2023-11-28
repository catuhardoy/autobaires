import { ObjectId } from "mongodb";
import mongoose, {Schema} from "mongoose";

const imageSchema = new Schema(
    {
        url: { type: String },
        filename: { type: String }
    }
);

const carSchema = new Schema(

    {
    // brand:{
    //     type: String
    // },
    // model:{
    //     type: String
    // },
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
    // favorite: {
    //     type: Boolean,
    //     default: false, // Valor predeterminado es false
    //   },

    photoURLs: [imageSchema]  // Array de Objets
}, 

    {timestamps: true}
);

const Car = mongoose.models.Car || mongoose.model('Car', carSchema);

export default Car