import connectMongoDB from '@/libs/mongodb';
import Car from '@/app/models/car';
import { NextResponse , NextRequest } from "next/server";
import { NextApiRequest, NextApiResponse } from 'next';
import { deleteImage } from '@/libs/data';
// import multer from 'multer';
          
export async function POST(request) {

    const {brand, model, year, km, description, price, photoURLs} = await request.json();

    await connectMongoDB() ;
    await Car.create({brand, model, year, km, description, price, photoURLs}) ;
    console.log("car created")
    return NextResponse.json({message: "Car Creates"}, {status: 201});

};

export async function GET() {
    await connectMongoDB();
    const cars = await Car.find();
    return NextResponse.json({ cars });
};

export async function DELETE (request) {
    const {id} = await request.json();
    await connectMongoDB();
    const deleted = await Car.findByIdAndDelete(id);
    deleted.photoURLs[0]?.filename && await deleteImage(deleted.photoURLs.map((item) => item.filename), { type: 'upload', resource_type: 'image' }).then((res) => console.log(res));
    return NextResponse.json({message: "Car Deleted", status: 200});
};

export async function PUT (request) {
    const {id , data } = await request.json();

    await connectMongoDB();
    const updated = await Car.findByIdAndUpdate(id, data, {returnDocument: "after"});
    if(!updated) throw new Error("Not Found", 404);
    return NextResponse.json({message: "Car Updated", status: 201, data: updated});
};








// export async function handler(request) {
//     if (request.method === 'POST') {
//       try {
//         const { name, year, description, price } = request.body;
  
//         if (!name || !year || !description || !price) {
//           return NextResponse.json(
//             { error: 'Nombre, año, descripción y precio son requeridos' },
//             { status: 400 }
//           );
//         }
  
//         let photoBuffer = null;
  
//         if (request.file) {
//           // Si se proporciona una imagen, obtén su contenido como un Buffer
//           photoBuffer = request.file.buffer;
//         }
//         await connectMongoDB();

//         // Crea un nuevo coche con la imagen (si se proporcionó)
//         const newCar = new Car({
//           name,
//           year,
//           description,
//           price,
//           photo: photoBuffer, // Asigna el Buffer de la imagen al campo photo
//         });
  
//         await newCar.save(); // Guarda el coche en la base de datos
  
//         return NextResponse.json({ message: 'Auto creado' }, { status: 201 });
//       } catch (error) {
//         return NextResponse.json({ error: 'No se pudo crear el auto' }, { status: 500 });
//       }
//     } else {
//       return NextResponse.error('Método no permitido', 405);
//     }
//   }
