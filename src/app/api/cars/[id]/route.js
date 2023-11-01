import { NextResponse } from "next/server";
import connectMongoDB from "@/libs/mongodb";
import Car from "@/app/models/car";


export async function DELETE({ params }) {
    const { id } = params;
    try {
      await connectMongoDB();
      const car = await Car.findByIdAndDelete(id);
      if (!car) {
        return NextResponse.json({ message: "Car not found" }, { status: 404 });
      }
      return NextResponse.json({ message: "Car Deleted" }, { status: 200 });
    } catch (error) {
      console.error('Error deleting car', error);
      return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
  }
  
export async function PUT({request, params}){
    const {id} = params;
    const {newName: name,newYear:year, newDescription: description, newPrice: price, newPhoto: photo} = await request.json();
    try{
        await connectMongoDB();
        const car = await Car.findByIdAndUpdate(id, {name, year, description, price, photo}, {new: true})
        if(!car){
            return NextResponse.json({ message: "Car not found" }, { status: 404 });
        }
        return NextResponse.json({ car }, { status: 200 });
        }catch(error){
        console.error("Error updating car", error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}

//get a single topic by id

export async function GET(request, {params}){
const {id} = params;
await connectMongoDB();
const car = await Car.findOne({_id: id})  // si el _id es igual al id que recibo por parametro
return NextResponse.json({car}, {status:200})
}
